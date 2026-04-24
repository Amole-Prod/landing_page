<script lang="ts">
	import { cn } from '$lib/utils';
	import Button from '$lib/components/ui/button/button.svelte';
	import Menu from 'lucide-svelte/icons/menu';
	import X from 'lucide-svelte/icons/x';
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import { navLinks, ctaButtons } from '$lib/data/nav';

	let isOpen = $state(false);
	let isScrolled = $state(false);

	onMount(() => {
		const handleScroll = () => {
			isScrolled = window.scrollY > 20;
		};
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	});
</script>

<nav
	class={cn(
		'fixed top-0 right-0 left-0 z-100 flex h-16 items-center justify-between px-6 transition-all duration-300',
		isScrolled ? 'border-b border-border/20 bg-background/80 backdrop-blur-xl' : 'bg-transparent'
	)}
>
	<a href="/" class="flex items-center gap-2 font-syne text-xl font-extrabold text-primary">
		<img
			src="/assets/logo.png"
			alt="Printy"
			class="h-9 w-9 rounded-lg object-contain"
			width="36"
			height="36"
			fetchpriority="high"
		/>
		Printy
	</a>

	<div class="hidden items-center gap-4 lg:flex">
		{#each navLinks as link (link)}
			<a
				href={link.href}
				class="text-sm font-medium text-foreground/70 transition-colors hover:text-primary"
			>
				{link.name}
			</a>
		{/each}
	</div>

	<div class="hidden items-center gap-2 lg:flex">
		{#each ctaButtons as button (button)}
			<Button
				variant={button.variant === 'outline' ? 'outline' : 'default'}
				size="sm"
				class="rounded-full">{button.name}</Button
			>
		{/each}
	</div>

	<button class="p-2 lg:hidden" onclick={() => (isOpen = !isOpen)} aria-label={isOpen ? 'Close menu' : 'Open menu'}>
		{#if isOpen}
			<X class="h-6 w-6 text-foreground" />
		{:else}
			<Menu class="h-6 w-6 text-foreground" />
		{/if}
	</button>
</nav>

{#if isOpen}
	<div
		class="fixed inset-0 z-90 flex flex-col bg-background/95 p-6 pt-20 lg:hidden"
		transition:fade={{ duration: 200 }}
	>
		<div class="flex flex-col gap-6">
			{#each navLinks as link (link)}
				<a
					href={link.href}
					class="text-lg font-medium text-foreground"
					onclick={() => (isOpen = false)}
				>
					{link.name}
				</a>
			{/each}
		</div>
		<div class="mt-8 flex flex-col gap-3">
			{#each ctaButtons as button (button)}
				<Button
					variant={button.variant === 'outline' ? 'outline' : 'default'}
					class="w-full rounded-full">{button.name}</Button
				>
			{/each}
		</div>
	</div>
{/if}
