<script lang="ts">
	import { onMount } from 'svelte';
	import ArrowUp from 'lucide-svelte/icons/arrow-up';
	import Heart from 'lucide-svelte/icons/heart';
	import { footerContent } from '$lib/data/footer';

	let visible = $state(false);

	onMount(() => {
		visible = true;
	});

	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	const marqueeItems = [
		'Cepat & instan',
		'WhatsApp Bot',
		'Tanpa antrean',
		'Digitalisasi',
		'Auto-reply',
		'24/7 aktif'
	];
</script>

<footer class="relative w-full overflow-hidden bg-background text-foreground">
	<div
		class="animate-breathe pointer-events-none absolute top-1/2 left-1/2 h-[50vh] w-[80vw] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-40 blur-[100px]"
		style="background: radial-gradient(circle, var(--primary) 15%, transparent 70%)"
	></div>
	<div class="footer-grid-bg pointer-events-none absolute inset-0"></div>

	<div
		class="absolute top-0 left-0 w-full scale-105 -rotate-[1deg] overflow-hidden border-y border-border/30 bg-background/60 py-4"
	>
		<div
			class="animate-marquee flex w-max text-xs font-bold tracking-[0.3em] text-foreground/50 uppercase"
		>
			{#each marqueeItems as item (item)}
				<span class="px-8">{item}</span>
				<span class="text-primary/40">✦</span>
			{/each}
			{#each marqueeItems as item (item)}
				<span class="px-8">{item}</span>
				<span class="text-primary/40">✦</span>
			{/each}
		</div>
	</div>

	<div class="relative z-10 px-6 py-20 lg:px-12 lg:py-28">
		<div
			class="mx-auto max-w-4xl space-y-16"
			class:opacity-0={!visible}
			style="transition: opacity 0.8s ease-out"
		>
			<div class="space-y-6 text-center">
				<h2 class="text-5xl font-bold tracking-tight text-foreground md:text-6xl lg:text-7xl">
					Mulai digitalisasi sekarang
				</h2>
				<p class="mx-auto max-w-xl text-lg text-foreground/70">
					Hubungi kami untuk konsultasi gratis. Waktunya beralih ke cara yang lebih cerdas.
				</p>
				<div class="flex flex-wrap justify-center gap-4 pt-4">
					<a
						href="#contact"
						class="glass-pill rounded-full px-10 py-4 font-semibold text-foreground transition-colors hover:text-primary"
					>
						Hubungi Kami
					</a>
				</div>
			</div>

			<div class="grid grid-cols-1 gap-12 border-t border-border/20 pt-12 lg:grid-cols-4">
				<div class="lg:col-span-1">
					<a
						href="/"
						class="flex items-center gap-2.5 font-syne text-xl font-extrabold text-primary"
					>
						<div class="flex h-9 w-9 items-center justify-center rounded-lg bg-primary shadow-lg">
							<img
								src="/assets/logo.png"
								alt="Printy"
								class="h-5 w-5 object-contain"
								width="20"
								height="20"
								loading="lazy"
							/>
						</div>
						Printy
					</a>
					<p class="mt-4 max-w-[240px] text-sm text-foreground/60">
						{footerContent.company.description}
					</p>
				</div>

				<div>
					<h5 class="mb-4 text-xs font-bold tracking-widest text-foreground/40 uppercase">
						Perusahaan
					</h5>
					<ul class="flex flex-col gap-3 text-sm">
						{#each footerContent.links.perusahaan as link (link)}
							<li>
								<a href={link.href} class="text-foreground/60 transition-colors hover:text-primary"
									>{link.name}</a
								>
							</li>
						{/each}
					</ul>
				</div>

				<div>
					<h5 class="mb-4 text-xs font-bold tracking-widest text-foreground/40 uppercase">
						Bantuan
					</h5>
					<ul class="flex flex-col gap-3 text-sm">
						{#each footerContent.links.bantuan as link (link.name)}
							<li>
								<a href={link.href} class="text-foreground/60 transition-colors hover:text-primary"
									>{link.name}</a
								>
							</li>
						{/each}
					</ul>
				</div>

				<div>
					<h5 class="mb-4 text-xs font-bold tracking-widest text-foreground/40 uppercase">Legal</h5>
					<ul class="flex flex-col gap-3 text-sm">
						{#each footerContent.links.legal as link (link)}
							<li>
								<a href={link.href} class="text-foreground/60 transition-colors hover:text-primary"
									>{link.name}</a
								>
							</li>
						{/each}
					</ul>
				</div>
			</div>

			<div
				class="flex flex-col items-center justify-between gap-6 border-t border-border/20 pt-8 lg:flex-row"
			>
				<p class="text-xs text-foreground/40">{footerContent.copyright}</p>

				<div
					class="glass-pill flex items-center gap-2 rounded-full px-4 py-2 text-xs text-foreground/50"
				>
					<span>Crafted with</span>
					<div class="animate-heartbeat flex items-center">
						<Heart class="h-4 w-4 text-destructive" />
					</div>
					<span>in {footerContent.location}</span>
				</div>

				<button
					onclick={scrollToTop}
					class="glass-pill flex h-10 w-10 items-center justify-center rounded-full text-foreground/50 transition-colors hover:text-primary"
				>
					<ArrowUp class="h-4 w-4" />
				</button>
			</div>
		</div>
	</div>
</footer>

<style>
	@keyframes marquee {
		0% {
			transform: translateX(0);
		}
		100% {
			transform: translateX(-50%);
		}
	}

	.animate-marquee {
		animation: marquee 30s linear infinite;
	}

	@keyframes heartbeat {
		0%,
		100% {
			transform: scale(1);
		}
		50% {
			transform: scale(1.2);
		}
	}

	.animate-heartbeat {
		animation: heartbeat 2s ease-in-out infinite;
	}

	@keyframes breathe {
		0% {
			transform: translate(-50%, -50%) scale(1);
			opacity: 0.6;
		}
		100% {
			transform: translate(-50%, -50%) scale(1.1);
			opacity: 1;
		}
	}

	.animate-breathe {
		animation: breathe 8s ease-in-out infinite alternate;
	}

	.glass-pill {
		background: linear-gradient(
			145deg,
			rgba(255, 255, 255, 0.05) 0%,
			rgba(255, 255, 255, 0.02) 100%
		);
		box-shadow:
			0 10px 30px -10px rgba(0, 0, 0, 0.3),
			inset 0 1px 1px rgba(255, 255, 255, 0.1);
		border: 1px solid rgba(255, 255, 255, 0.08);
		backdrop-filter: blur(16px);
		transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
	}

	.glass-pill:hover {
		background: linear-gradient(
			145deg,
			rgba(255, 255, 255, 0.08) 0%,
			rgba(255, 255, 255, 0.02) 100%
		);
		border-color: rgba(255, 255, 255, 0.2);
	}

	.footer-grid-bg {
		background-size: 60px 60px;
		background-image:
			linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px),
			linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
	}
</style>
