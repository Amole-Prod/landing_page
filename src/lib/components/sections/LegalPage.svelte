<script lang="ts">
	import Navbar from '$lib/components/sections/Navbar.svelte';
	import Footer from '$lib/components/sections/Footer.svelte';

	interface Props {
		title: string;
		description: string;
		lastUpdated: string;
		sections: readonly { title: string; content: readonly string[] }[];
		badgeColor?: string;
	}

	let {
		title,
		description,
		lastUpdated,
		sections,
		badgeColor = 'bg-primary/10 text-primary'
	}: Props = $props();
</script>

<svelte:head>
	<title>{title} - Printy</title>
	<meta name="description" content={description} />
</svelte:head>

<Navbar />

<main class="min-h-screen pt-16">
	<div class="px-6 py-20 lg:px-12 lg:py-24">
		<div class="mx-auto max-w-3xl">
			<span
				class="mb-4 inline-block rounded-full {badgeColor} px-4 py-1.5 text-xs font-semibold tracking-wider uppercase"
			>
				Dokumen Legal
			</span>

			<h1 class="mb-2 font-syne text-4xl font-bold text-foreground lg:text-5xl">{title}</h1>
			<p class="mb-12 text-sm text-muted-foreground">Terakhir diperbarui: {lastUpdated}</p>

			<div class="prose prose-lg max-w-none space-y-8">
				{#each sections as section}
					<div class="rounded-xl border border-border/50 bg-card p-6">
						<h2 class="mb-4 font-syne text-xl font-semibold text-foreground">{section.title}</h2>
						<div class="space-y-4 text-muted-foreground">
							{#each section.content as item}
								<div class="flex gap-3">
									<span class="text-primary">•</span>
									<span class="leading-relaxed">{item}</span>
								</div>
							{/each}
						</div>
					</div>
				{/each}
			</div>
		</div>
	</div>
</main>

<Footer />
