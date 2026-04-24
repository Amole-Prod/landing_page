<script lang="ts">
	import { onMount } from 'svelte';
	import ArrowRight from 'lucide-svelte/icons/arrow-right';
	import Mail from 'lucide-svelte/icons/mail';
	import MapPin from 'lucide-svelte/icons/map-pin';
	import MessageCircle from 'lucide-svelte/icons/message-circle';
	import Button from '$lib/components/ui/button/button.svelte';
	import { contactContent } from '$lib/data/contact';

	const iconMap: Record<string, typeof Mail> = {
		Mail,
		MessageCircle,
		MapPin
	};

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
		let isVisible = false;

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
						amplitude: 50,
						frequency: 0.003,
						color: resolveColor('--primary', 0.5),
						opacity: 0.35
					},
					{
						offset: Math.PI / 2,
						amplitude: 65,
						frequency: 0.0026,
						color: resolveColor('--accent', 0.45),
						opacity: 0.28
					},
					{
						offset: Math.PI,
						amplitude: 40,
						frequency: 0.0034,
						color: resolveColor('--secondary', 0.4),
						opacity: 0.22
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

		const mouseInfluence = prefersReducedMotion ? 10 : 50;
		const influenceRadius = prefersReducedMotion ? 120 : 240;
		const smoothing = prefersReducedMotion ? 0.04 : 0.1;
		const waveStep = 8;

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

			ctx.lineWidth = 2;
			ctx.strokeStyle = wave.color;
			ctx.globalAlpha = wave.opacity;
			ctx.shadowBlur = 12;
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

		const visibilityObserver = new IntersectionObserver(
			(entries) => {
				for (const entry of entries) {
					isVisible = entry.isIntersecting;
					if (isVisible && !animationId) {
						resizeCanvas();
						recenterMouse();
						animationId = window.requestAnimationFrame(animate);
					}
				}
			},
			{ threshold: 0.1 }
		);
		visibilityObserver.observe(section);

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
	id="contact"
	class="relative isolate flex min-h-[60vh] w-full items-center justify-center overflow-hidden"
	style="background: linear-gradient(to bottom, var(--background), var(--muted))"
>
	<canvas bind:this={canvasRef} class="absolute inset-0 h-full w-full" aria-hidden="true"></canvas>

	<div class="relative z-10 mx-auto flex w-full max-w-6xl px-6 py-20">
		<div class="w-full" class:opacity-0={!visible} style="transition: opacity 0.8s ease-out">
			<span class="mb-3 block text-[0.7rem] font-bold tracking-[0.14em] text-primary uppercase"
				>{contactContent.badge}</span
			>
			<h2 class="mb-6 font-syne text-3xl leading-tight font-bold text-foreground lg:text-4xl">
				{contactContent.title}
			</h2>
			<p class="mb-10 max-w-xl text-lg leading-relaxed text-foreground/70">
				{contactContent.description}
			</p>

			<div class="mb-10 flex flex-col gap-4 sm:flex-row">
				<Button
					size="lg"
					class="group gap-2 rounded-full px-8 text-base tracking-[0.2em] uppercase"
				>
					{contactContent.cta}
					<ArrowRight class="h-4 w-4 transition-transform group-hover:translate-x-1" />
				</Button>
			</div>

			<div class="flex flex-col gap-6">
				{#each contactContent.contacts as item (item)}
					{@const Icon = iconMap[item.icon] || Mail}
					<div class="flex items-center gap-4 border-b border-border/20 pb-4 last:border-0">
						<div
							class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary shadow-lg"
						>
							<Icon class="h-5 w-5 text-primary-foreground" />
						</div>
						<div>
							<p class="text-xs text-foreground/50">{item.label}</p>
							<p class="font-semibold text-foreground">{item.value}</p>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>
