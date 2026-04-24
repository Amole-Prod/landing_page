<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import ChevronDown from 'lucide-svelte/icons/chevron-down';
	import { faqContent, faqs } from '$lib/data/faq';

	let openIndex: number | null = $state(null);

	function toggle(index: number) {
		openIndex = openIndex === index ? null : index;
	}
</script>

<section id="faq" class="bg-background px-6 py-20 lg:px-12 lg:py-24">
	<div class="mx-auto max-w-3xl">
		<div class="mb-12 text-center">
			<span class="mb-4 block text-xs font-bold tracking-[0.14em] text-primary uppercase"
				>Pertanyaan Umum</span
			>
			<h2 class="mb-4 font-syne text-3xl font-bold text-foreground lg:text-4xl">
				{faqContent.title}
			</h2>
			<p class="text-lg text-muted-foreground">{faqContent.description}</p>
		</div>

		<div class="space-y-3">
			{#each faqs as faq, index (index)}
				<Card.Root class="overflow-hidden">
					<button
						type="button"
						class="flex w-full items-center justify-between p-4 text-left transition-colors hover:bg-muted/50"
						onclick={() => toggle(index)}
						aria-expanded={openIndex === index}
					>
						<span class="font-medium text-foreground pr-4">{faq.question}</span>
						<ChevronDown
							class="h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-200 {openIndex ===
							index
								? 'rotate-180'
								: ''}"
						/>
					</button>
					{#if openIndex === index}
						<div class="border-t px-4 pb-4 pt-3">
							<p class="text-sm leading-relaxed text-muted-foreground">{faq.answer}</p>
						</div>
					{/if}
				</Card.Root>
			{/each}
		</div>
	</div>
</section>