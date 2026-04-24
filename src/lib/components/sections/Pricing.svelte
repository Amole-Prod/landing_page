<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import { Button } from '$lib/components/ui/button';
	import { Check } from '@lucide/svelte';

	const tiers = [
		{
			name: 'Lite',
			price: 'Rp 49rb',
			period: '/bulan',
			features: [
				'1 Toko Terhubung',
				'WhatsApp Bot Dasar',
				'Dashboard 7 Hari Terakhir',
				'Max 50 Pesanan/Hari'
			],
			featured: false,
			btnVariant: 'outline' as const
		},
		{
			name: 'Pro',
			price: 'Rp 99rb',
			period: '/bulan',
			features: [
				'2 Toko Terhubung',
				'WhatsApp Bot Lengkap',
				'Dashboard Real-time & History',
				'Pesanan Tanpa Batas',
				'Support Prioritas'
			],
			featured: true,
			btnVariant: 'default' as const
		},
		{
			name: 'Enterprise',
			price: 'Custom',
			period: '',
			features: [
				'Multi Toko Tanpa Batas',
				'Custom API Integration',
				'Laporan PDF Kustom',
				'Dedicated Server Option',
				'Pelatihan On-site'
			],
			featured: false,
			btnVariant: 'outline' as const
		}
	];
</script>

<section id="pricing" class="bg-card px-8 py-20 lg:px-24">
	<div class="mb-16 text-center">
		<span class="mb-3 block text-[0.7rem] font-bold tracking-[0.14em] text-p3 uppercase">Harga</span
		>
		<h2 class="mb-6 font-syne text-3xl leading-tight font-bold text-p1 lg:text-4xl">
			Pilih paket yang sesuai
		</h2>
		<p class="mx-auto max-w-xl text-lg text-muted-foreground">
			Mulai dari skala kecil hingga jaringan fotokopi yang besar.
		</p>
	</div>

	<div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
		{#each tiers as tier}
			<Card.Root
				class={tier.featured
					? 'scale-105 border-p1 bg-p1 shadow-2xl transition-transform'
					: 'border-black/5 bg-background shadow-none'}
			>
				<Card.Content class="p-8">
					<div class="mb-6">
						<span
							class={tier.featured
								? 'text-[0.7rem] font-bold tracking-widest text-p4 uppercase'
								: 'text-[0.7rem] font-bold tracking-widest text-p3 uppercase'}>{tier.name}</span
						>
						<div class="mt-2 flex items-baseline gap-1">
							<span
								class={tier.featured
									? 'font-syne text-4xl font-extrabold text-p5'
									: 'font-syne text-4xl font-extrabold text-p1'}>{tier.price}</span
							>
							<span class={tier.featured ? 'text-sm text-p4' : 'text-sm text-p3'}
								>{tier.period}</span
							>
						</div>
					</div>

					<ul class="mb-8 flex flex-col gap-3">
						{#each tier.features as feature}
							<li
								class={tier.featured
									? 'flex items-center gap-2 text-sm text-p5/80'
									: 'flex items-center gap-2 text-sm text-muted-foreground'}
							>
								<Check class="h-4 w-4 text-p5" />
								{feature}
							</li>
						{/each}
					</ul>

					<Button
						variant={tier.btnVariant}
						class={tier.featured
							? 'w-full bg-p5 font-bold text-p1 hover:bg-p4'
							: 'w-full border-p1/20 font-bold text-p1'}
					>
						Pilih Paket {tier.name}
					</Button>
				</Card.Content>
			</Card.Root>
		{/each}
	</div>
</section>
