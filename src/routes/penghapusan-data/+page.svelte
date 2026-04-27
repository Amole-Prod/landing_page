<script lang="ts">
	import LegalPage from '$lib/components/sections/LegalPage.svelte';
	import { legalContent } from '$lib/data/legal';
</script>

<svelte:head>
	<title>{legalContent.dataDeletion.title} - Printy</title>
	<meta name="description" content={legalContent.dataDeletion.description} />
</svelte:head>

<LegalPage
	title={legalContent.dataDeletion.title}
	description={legalContent.dataDeletion.description}
	lastUpdated={legalContent.dataDeletion.lastUpdated}
	sections={legalContent.dataDeletion.sections}
 />
