<script lang="ts">
	import LegalPage from '$lib/components/sections/LegalPage.svelte';
	import { legalContent } from '$lib/data/legal';
</script>

<LegalPage
	title={legalContent.dataDeletion.title}
	description={legalContent.dataDeletion.description}
	lastUpdated={legalContent.dataDeletion.lastUpdated}
	sections={legalContent.dataDeletion.sections}
 />
