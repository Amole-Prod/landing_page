<script lang="ts">
	import Navbar from '$lib/components/sections/Navbar.svelte';
	import GlowyWavesHero from '$lib/components/ui/glowy-waves-hero.svelte';
	import Features from '$lib/components/sections/Features.svelte';
	import Products from '$lib/components/sections/Products.svelte';
	import Store from '$lib/components/sections/Store.svelte';
	import Pricing from '$lib/components/sections/Pricing.svelte';
	import Partnership from '$lib/components/sections/Partnership.svelte';
	import Contact from '$lib/components/sections/Contact.svelte';
	import Footer from '$lib/components/sections/Footer.svelte';
	import { onMount } from 'svelte';

	onMount(() => {
		document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
			anchor.addEventListener('click', function (e) {
				e.preventDefault();
				const target = document.querySelector(
					(e.currentTarget as HTMLAnchorElement).getAttribute('href')!
				);
				if (target) {
					target.scrollIntoView({
						behavior: 'smooth'
					});
				}
			});
		});
	});
</script>

<svelte:head>
	<title>Printy - Solusi Digitalisasi Usaha Fotokopi</title>
	<meta
		name="description"
		content="Printy mengubah cara pelanggan mencetak dokumen via WhatsApp. Tanpa antrean, tanpa ribet."
	/>
</svelte:head>

<Navbar />

<div class="flex min-h-screen flex-col pt-16 lg:flex-row">
	<main class="w-full flex-1 overflow-hidden border-l border-black/5">
		<GlowyWavesHero />
		<Features />
		<Products />
		<Store />
		<Pricing />
		<Partnership />
		<Contact />
		<Footer />
	</main>
</div>

<style>
	:global(html) {
		scroll-behavior: smooth;
	}

	/* Layout adjustments to match the original feel */
	main {
		background: var(--background);
	}

	/* Defer rendering of off-screen sections for better LCP/TBT */
	:global(#about),
	:global(#solutions),
	:global(#products),
	:global(#store),
	:global(#pricing),
	:global(#partnership),
	:global(#contact) {
		content-visibility: auto;
		contain-intrinsic-size: auto 800px;
	}
</style>
