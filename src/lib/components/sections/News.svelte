<script lang="ts">
	import { onMount } from 'svelte';
	import ArrowUp from 'lucide-svelte/icons/arrow-up';
	import Calendar from 'lucide-svelte/icons/calendar';
	import Tag from 'lucide-svelte/icons/tag';
	import { newsItems, newsContent } from '$lib/data/news';

	let visible = $state(false);

	onMount(() => {
		visible = true;
	});

	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	const formatDate = (dateStr: string) => {
		const date = new Date(dateStr);
		return date.toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' });
	};
</script>

<section id="news" class="min-h-screen w-full bg-background py-20">
	<div class="mx-auto max-w-4xl px-6">
		<header class="mb-16" class:opacity-0={!visible} style="transition: opacity 0.8s ease-out">
			<span
				class="mb-4 inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] text-primary uppercase"
			>
				<Tag class="h-4 w-4" />
				{newsContent.badge}
			</span>
			<h1 class="mb-6 text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
				{newsContent.title}
			</h1>
			<p class="max-w-2xl text-lg text-foreground/70">{newsContent.description}</p>
		</header>

		<div class="space-y-1">
			{#each newsItems as item, index (item.date)}
				<article
					class="group relative border-b border-border/30 py-8 transition-all hover:border-primary/30"
					class:opacity-0={!visible}
					style="transition: opacity 0.6s ease-out {index * 0.1}s, border-color 0.3s ease"
				>
					<div class="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
						<div class="flex-1 space-y-3">
							<div class="flex flex-wrap items-center gap-3">
								<span
									class="rounded-full px-3 py-1 text-xs font-semibold tracking-wider uppercase {item.variant ===
									'default'
										? 'bg-primary/10 text-primary'
										: item.variant === 'secondary'
											? 'bg-secondary/10 text-secondary'
											: 'border border-border text-foreground/60'}"
								>
									{item.tag}
								</span>
								<time class="flex items-center gap-1 text-sm text-foreground/50">
									<Calendar class="h-3.5 w-3.5" />
									{formatDate(item.date)}
								</time>
							</div>
							<h2
								class="text-xl font-semibold text-foreground transition-colors group-hover:text-primary"
							>
								{item.title}
							</h2>
							{#if item.description}
								<p class="max-w-2xl text-foreground/70">{item.description}</p>
							{/if}
						</div>
						{#if item.version}
							<span
								class="hidden rounded-md bg-muted px-3 py-1.5 font-mono text-sm whitespace-nowrap text-foreground/60 lg:block"
							>
								v{item.version}
							</span>
						{/if}
					</div>
				</article>
			{/each}
		</div>

		<div class="mt-16 flex justify-center">
			<button
				onclick={scrollToTop}
				class="flex items-center gap-2 text-sm text-foreground/50 transition-colors hover:text-primary"
			>
				<ArrowUp class="h-4 w-4" />
				Kembali ke atas
			</button>
		</div>
	</div>
</section>
