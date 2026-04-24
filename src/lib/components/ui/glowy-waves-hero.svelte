<script lang="ts">
	import { onMount } from 'svelte';
	import ArrowRight from 'lucide-svelte/icons/arrow-right';
	import Sparkles from 'lucide-svelte/icons/sparkles';
	import Button from '$lib/components/ui/button/button.svelte';
	import { highlightPills, heroStats, heroContent } from '$lib/data/hero';

	type Point = {
		x: number;
		y: number;
	};

	interface WaveConfig {
		offset: number;
		amplitude: number;
		frequency: number;
		color: string;
		opacity: number;
	}

	let canvasRef: HTMLCanvasElement | null = $state(null);
	let sectionRef: HTMLElement | null = $state(null);
	let mouseRef: Point = $state({ x: 0, y: 0 });
	let targetMouseRef: Point = $state({ x: 0, y: 0 });
	let visible = $state(false);

	onMount(() => {
		visible = true;

		const canvas = canvasRef;
		const section = sectionRef;
		if (!canvas || !section) return;

		const ctx = canvas.getContext('2d');
		if (!ctx) return;

		let animationId: number = 0;
		let time = 0;
		let isVisible = true;

		// Cache resolved colors to avoid repeated DOM element creation
		const resolveColor = (cssVar: string, alpha = 1): string => {
			const rootStyles = getComputedStyle(document.documentElement);
			const value = rootStyles.getPropertyValue(cssVar).trim();
			if (!value) return `rgba(255, 255, 255, ${alpha})`;

			const tempEl = document.createElement('div');
			tempEl.style.cssText = 'position:absolute;visibility:hidden;width:0;height:0';
			tempEl.style.backgroundColor = `var(${cssVar})`;
			document.body.appendChild(tempEl);
			const computedColor = getComputedStyle(tempEl).backgroundColor;
			document.body.removeChild(tempEl);

			if (!computedColor || computedColor === 'rgba(0, 0, 0, 0)') {
				return `rgba(255, 255, 255, ${alpha})`;
			}

			if (alpha < 1) {
				const rgbMatch = computedColor.match(
					/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*[\d.]+)?\)/
				);
				if (rgbMatch) {
					return `rgba(${rgbMatch[1]}, ${rgbMatch[2]}, ${rgbMatch[3]}, ${alpha})`;
				}
			}
			return computedColor;
		};

		const computeThemeColors = () => {
			return {
				backgroundTop: resolveColor('--background', 1),
				backgroundBottom: resolveColor('--muted', 0.95),
				wavePalette: [
					{
						offset: 0,
						amplitude: 70,
						frequency: 0.003,
						color: resolveColor('--primary', 0.8),
						opacity: 0.45
					},
					{
						offset: Math.PI / 2,
						amplitude: 90,
						frequency: 0.0026,
						color: resolveColor('--accent', 0.7),
						opacity: 0.35
					},
					{
						offset: Math.PI,
						amplitude: 60,
						frequency: 0.0034,
						color: resolveColor('--secondary', 0.65),
						opacity: 0.3
					}
				] satisfies WaveConfig[]
			};
		};

		let themeColors = computeThemeColors();

		const handleThemeMutation = () => {
			themeColors = computeThemeColors();
		};

		const observer = new MutationObserver(handleThemeMutation);
		observer.observe(document.documentElement, {
			attributes: true,
			attributeFilter: ['class', 'data-theme']
		});

		const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

		const mouseInfluence = prefersReducedMotion ? 10 : 70;
		const influenceRadius = prefersReducedMotion ? 160 : 320;
		const smoothing = prefersReducedMotion ? 0.04 : 0.1;
		const waveStep = 6;

		const resizeCanvas = () => {
			canvas.width = canvas.clientWidth;
			canvas.height = canvas.clientHeight;
		};

		const recenterMouse = () => {
			const centerPoint = { x: canvas.width / 2, y: canvas.height / 2 };
			mouseRef = centerPoint;
			targetMouseRef = centerPoint;
		};

		const handleResize = () => {
			resizeCanvas();
			recenterMouse();
		};

		const handleMouseMove = (event: MouseEvent) => {
			targetMouseRef = { x: event.clientX, y: event.clientY };
		};

		const handleMouseLeave = () => {
			recenterMouse();
		};

		resizeCanvas();
		recenterMouse();

		window.addEventListener('resize', handleResize);
		window.addEventListener('mousemove', handleMouseMove);
		window.addEventListener('mouseleave', handleMouseLeave);

		const drawWave = (wave: WaveConfig) => {
			ctx.save();
			ctx.beginPath();

			for (let x = 0; x <= canvas.width; x += waveStep) {
				const dx = x - mouseRef.x;
				const dy = canvas.height / 2 - mouseRef.y;
				const distance = Math.sqrt(dx * dx + dy * dy);
				const influence = Math.max(0, 1 - distance / influenceRadius);
				const mouseEffect =
					influence * mouseInfluence * Math.sin(time * 0.001 + x * 0.01 + wave.offset);

				const y =
					canvas.height / 2 +
					Math.sin(x * wave.frequency + time * 0.002 + wave.offset) * wave.amplitude +
					Math.sin(x * wave.frequency * 0.4 + time * 0.003) * (wave.amplitude * 0.45) +
					mouseEffect;

				if (x === 0) {
					ctx.moveTo(x, y);
				} else {
					ctx.lineTo(x, y);
				}
			}

			ctx.lineWidth = 2.5;
			ctx.strokeStyle = wave.color;
			ctx.globalAlpha = wave.opacity;
			ctx.shadowBlur = 15;
			ctx.shadowColor = wave.color;
			ctx.stroke();

			ctx.restore();
		};

		const animate = () => {
			if (!isVisible) return;

			time += 1;

			mouseRef = {
				x: mouseRef.x + (targetMouseRef.x - mouseRef.x) * smoothing,
				y: mouseRef.y + (targetMouseRef.y - mouseRef.y) * smoothing
			};

			const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
			gradient.addColorStop(0, themeColors.backgroundTop);
			gradient.addColorStop(1, themeColors.backgroundBottom);

			ctx.fillStyle = gradient;
			ctx.fillRect(0, 0, canvas.width, canvas.height);

			ctx.globalAlpha = 1;
			ctx.shadowBlur = 0;

			themeColors.wavePalette.forEach(drawWave);

			animationId = window.requestAnimationFrame(animate);
		};

		// IntersectionObserver: only animate when visible in viewport
		const visibilityObserver = new IntersectionObserver(
			(entries) => {
				for (const entry of entries) {
					isVisible = entry.isIntersecting;
					if (isVisible && !animationId) {
						animationId = window.requestAnimationFrame(animate);
					}
				}
			},
			{ threshold: 0.1 }
		);
		visibilityObserver.observe(section);

		animationId = window.requestAnimationFrame(animate);

		return () => {
			window.removeEventListener('resize', handleResize);
			window.removeEventListener('mousemove', handleMouseMove);
			window.removeEventListener('mouseleave', handleMouseLeave);
			cancelAnimationFrame(animationId);
			observer.disconnect();
			visibilityObserver.disconnect();
		};
	});
</script>

<section
	bind:this={sectionRef}
	class="relative isolate flex min-h-screen w-full items-center justify-center overflow-hidden"
	style="background: linear-gradient(to bottom, var(--background), var(--muted))"
	aria-label="Glowing waves hero section"
>
	<canvas bind:this={canvasRef} class="absolute inset-0 h-full w-full" aria-hidden="true"></canvas>

	<div
		class="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center px-6 py-24 text-center md:px-8 lg:px-12"
	>
		<div
			class="w-full space-y-6"
			class:opacity-0={!visible}
			style="transition: opacity 0.8s ease-out"
		>
			<div
				class="mb-6 inline-flex items-center gap-2 rounded-full border border-border/40 bg-background/60 px-4 py-2 text-xs font-semibold tracking-[0.25em] text-foreground/70 uppercase dark:border-border/60 dark:bg-background/70 dark:text-foreground/80"
			>
				<Sparkles class="h-4 w-4 text-primary" aria-hidden="true" />
				{heroContent.badge}
			</div>

			<h1
				class="mb-6 text-4xl font-semibold tracking-tight text-foreground md:text-6xl lg:text-7xl"
			>
				{heroContent.title}
				<span
					class="bg-gradient-to-r from-primary via-primary/60 to-foreground/80 bg-clip-text text-transparent"
				>
					{heroContent.subtitle}
				</span>
			</h1>

			<p class="mx-auto mb-10 max-w-3xl text-lg text-foreground/70 md:text-2xl">
				{heroContent.description}
			</p>

			<div class="mb-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
				<Button size="lg" class="group gap-2 rounded-full px-8 text-base tracking-[0.2em]">
					{heroContent.primaryCta}
					<ArrowRight
						class="h-4 w-4 transition-transform group-hover:translate-x-1"
						aria-hidden="true"
					/>
				</Button>
				<Button
					size="lg"
					variant="outline"
					class="rounded-full border-border/40 bg-background/60 px-8 text-base text-foreground/80 backdrop-blur transition-all hover:border-border/60 hover:bg-background/70"
				>
					{heroContent.secondaryCta}
				</Button>
			</div>

			<ul
				class="mb-12 flex flex-wrap items-center justify-center gap-3 text-xs tracking-[0.2em] text-foreground/70 uppercase dark:text-foreground/80"
			>
				{#each highlightPills as pill (pill)}
					<li
						class="rounded-full border border-border/40 bg-background/60 px-4 py-2 backdrop-blur dark:border-border/60 dark:bg-background/70"
					>
						{pill}
					</li>
				{/each}
			</ul>

			<div
				class="grid gap-4 rounded-2xl border border-border/30 bg-background/60 p-6 backdrop-blur-sm sm:grid-cols-3 dark:border-border/60 dark:bg-background/70"
			>
				{#each heroStats as stat (stat)}
					<div class="space-y-1">
						<div
							class="text-xs tracking-[0.3em] text-foreground/50 uppercase dark:text-foreground/60"
						>
							{stat.label}
						</div>
						<div class="text-3xl font-semibold text-foreground">
							{stat.value}
						</div>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>
