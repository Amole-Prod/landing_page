<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import Rocket from 'lucide-svelte/icons/rocket';
	import LayoutDashboard from 'lucide-svelte/icons/layout-dashboard';
	import CreditCard from 'lucide-svelte/icons/credit-card';
	import Users from 'lucide-svelte/icons/users';
	import Clock from 'lucide-svelte/icons/clock';
	import FileCheck from 'lucide-svelte/icons/file-check';
	import BarChart3 from 'lucide-svelte/icons/bar-chart-3';
	import Bot from 'lucide-svelte/icons/bot';
	import Bell from 'lucide-svelte/icons/bell';
	import FolderOpen from 'lucide-svelte/icons/folder-open';
	import { featuresContent, features, solutionsContent, solutions } from '$lib/data/features';

	const iconMap: Record<string, typeof Rocket> = {
		Rocket,
		LayoutDashboard,
		CreditCard,
		Users,
		Clock,
		FileCheck,
		BarChart3,
		Bot,
		Bell,
		FolderOpen
	};
</script>

<section id="about" class="bg-background px-6 py-20 lg:px-12 lg:py-24">
	<div class="mx-auto max-w-7xl">
		<div class="mb-16 max-w-3xl">
			<span class="mb-3 block text-xs font-bold tracking-[0.14em] text-primary uppercase"
				>{featuresContent.eyebrow}</span
			>
			<h2 class="mb-6 font-syne text-3xl leading-tight font-bold text-foreground lg:text-4xl">
				{featuresContent.title}
			</h2>
			<p class="max-w-xl text-lg text-muted-foreground">
				{featuresContent.description}
			</p>
		</div>

		<div class="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
			{#each features as feature (feature.id)}
				{@const Icon = iconMap[feature.icon] || Rocket}
				<Card.Root
					class="flex h-full flex-col border-border/50 p-4 transition-all duration-300 hover:scale-[1.01] hover:border-primary/50 hover:shadow-xl"
				>
					<Card.Header class="p-0 pb-3">
						<div class="mb-3 w-fit rounded-lg bg-primary/10 p-2 text-primary">
							<Icon class="h-6 w-6" />
						</div>
						<Card.Title class="text-xl font-semibold text-foreground">{feature.title}</Card.Title>
					</Card.Header>
					<Card.Content class="flex-grow p-0">
						<p class="text-sm text-muted-foreground">{feature.description}</p>
					</Card.Content>
				</Card.Root>
			{/each}
		</div>
	</div>
</section>

<section id="solutions" class="bg-card px-6 py-20 lg:px-12 lg:py-24">
	<div class="mx-auto max-w-7xl">
		<div class="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
			<span class="mb-4 block text-xs font-bold tracking-[0.14em] text-primary uppercase"
				>{solutionsContent.eyebrow}</span
			>
			<h2 class="mb-4 font-syne text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
				{solutionsContent.title}
			</h2>
			<p class="text-lg text-muted-foreground">
				{solutionsContent.description}
			</p>
		</div>

		<div class="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
			{#each solutions as solution (solution.id)}
				{@const Icon = iconMap[solution.icon] || Clock}
				<Card.Root
					class="flex h-full flex-col border-border/50 p-4 transition-all duration-300 hover:scale-[1.01] hover:border-primary/50 hover:shadow-xl"
				>
					<Card.Header class="p-0 pb-3">
						<div class="mb-3 w-fit rounded-lg bg-primary/10 p-2 text-primary">
							<Icon class="h-6 w-6" />
						</div>
						<Card.Title class="text-xl font-semibold text-foreground">{solution.title}</Card.Title>
					</Card.Header>
					<Card.Content class="flex-grow p-0">
						<p class="text-sm text-muted-foreground">{solution.description}</p>
					</Card.Content>
				</Card.Root>
			{/each}
		</div>
	</div>
</section>
