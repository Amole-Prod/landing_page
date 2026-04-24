<script lang="ts">
	import LegalPage from '$lib/components/sections/LegalPage.svelte';
	import { legalContent } from '$lib/data/legal';
</script>

<LegalPage
	title={legalContent.terms.title}
	description={legalContent.terms.description}
	lastUpdated={legalContent.terms.lastUpdated}
	sections={legalContent.terms.sections}
 />
