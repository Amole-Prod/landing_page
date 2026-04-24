<script lang="ts">
	import Navbar from '$lib/components/sections/Navbar.svelte';
	import News from '$lib/components/sections/News.svelte';
	import Footer from '$lib/components/sections/Footer.svelte';
</script>

<svelte:head>
	<title>Berita & Update - Printy</title>
	<meta
		name="description"
		content="Pelajari fitur terbaru, perbaikan, dan peningkatan dari Printy."
	/>
</svelte:head>

<Navbar />

<main class="pt-16">
	<News />
</main>

<Footer />
