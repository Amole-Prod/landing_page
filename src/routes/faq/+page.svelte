<script lang="ts">
	import Navbar from '$lib/components/sections/Navbar.svelte';
	import Footer from '$lib/components/sections/Footer.svelte';
	import * as Card from '$lib/components/ui/card';
	import ChevronDown from 'lucide-svelte/icons/chevron-down';
	import MessageCircle from 'lucide-svelte/icons/message-circle';
	import { faqContent, faqs } from '$lib/data/faq';

	let openIndex: number | null = $state(null);

	function toggle(index: number) {
		openIndex = openIndex === index ? null : index;
	}
</script>

<svelte:head>
	<title>FAQ - Printy</title>
	<meta name="description" content={faqContent.description} />
</svelte:head>

<Navbar />

<main class="pt-16">
	<div class="bg-gradient-to-b from-primary/5 to-background px-6 py-16 lg:px-12 lg:py-24">
		<div class="mx-auto max-w-3xl text-center">
			<span class="mb-4 block text-xs font-bold tracking-[0.14em] text-primary uppercase"
				>Pusat Bantuan</span
			>
			<h1 class="mb-4 font-syne text-4xl font-bold text-foreground lg:text-5xl">
				{faqContent.title}
			</h1>
			<p class="text-lg text-muted-foreground">{faqContent.description}</p>
		</div>
	</div>

	<section class="px-6 py-12 lg:px-12 lg:py-16">
		<div class="mx-auto max-w-3xl">
			<div class="space-y-4">
				{#each faqs as faq, index (index)}
					<Card.Root
						class="group overflow-hidden border-border/50 bg-card transition-all duration-200 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
					>
						<button
							type="button"
							class="flex w-full items-center justify-between p-5 text-left"
							onclick={() => toggle(index)}
							aria-expanded={openIndex === index}
						>
							<span
								class="pr-4 font-medium text-foreground transition-colors group-hover:text-primary"
								>{faq.question}</span
							>
							<ChevronDown
								class="h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-200 group-hover:text-primary {openIndex ===
								index
									? 'rotate-180'
									: ''}"
							/>
						</button>
						{#if openIndex === index}
							<div class="border-t border-border/50 px-5 pt-3 pb-5">
								<p class="text-muted-foreground">{faq.answer}</p>
							</div>
						{/if}
					</Card.Root>
				{/each}
			</div>

			<div class="mt-12 rounded-2xl border border-border/50 bg-card p-8 text-center">
				<div
					class="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10"
				>
					<MessageCircle class="h-7 w-7 text-primary" />
				</div>
				<p class="mb-2 font-syne text-lg font-semibold text-foreground">Tidak menemukan jawaban?</p>
				<p class="mb-6 text-muted-foreground">Tim kami siap membantu Anda kapan saja.</p>
				<a
					href="/#contact"
					class="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-8 py-3.5 font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:scale-105 hover:shadow-primary/40"
				>
					<MessageCircle class="h-5 w-5" />
					Hubungi Kami
				</a>
			</div>
		</div>
	</section>
</main>

<Footer />
