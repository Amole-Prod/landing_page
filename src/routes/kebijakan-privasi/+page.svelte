<script lang="ts">
	import LegalPage from '$lib/components/sections/LegalPage.svelte';
	import { legalContent } from '$lib/data/legal';
</script>

<LegalPage
	title={legalContent.privacy.title}
	description={legalContent.privacy.description}
	lastUpdated={legalContent.privacy.lastUpdated}
	sections={legalContent.privacy.sections}
 />
