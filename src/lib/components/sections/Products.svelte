<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import { MessageSquare, Monitor, Wallet, BarChart3 } from '@lucide/svelte';

	const products = [
		{
			icon: MessageSquare,
			title: 'Printy Bot',
			desc: 'WhatsApp bot berbasis WhatsApp Web JS untuk memproses pesanan otomatis.'
		},
		{
			icon: Monitor,
			title: 'Printy Dashboard',
			desc: 'Panel manajemen web untuk pantau pesanan, antrian, dan laporan toko.'
		},
		{
			icon: Wallet,
			title: 'Printy Pay',
			desc: 'Modul pembayaran terintegrasi untuk verifikasi langsung dalam chat.'
		},
		{
			icon: BarChart3,
			title: 'Printy Analytics',
			desc: 'Laporan dan analitik penjualan harian dalam format yang mudah dipahami.'
		}
	];
</script>

<section id="products" class="bg-background px-8 py-20 lg:px-24">
	<div class="mb-16 text-center">
		<span class="mb-3 block text-[0.7rem] font-bold tracking-[0.14em] text-p3 uppercase"
			>Produk</span
		>
		<h2 class="mb-6 font-syne text-3xl leading-tight font-bold text-p1 lg:text-4xl">
			Semua yang Anda butuhkan
		</h2>
		<p class="mx-auto max-w-xl text-lg text-muted-foreground">
			Ekosistem Printy terdiri dari beberapa modul yang bekerja secara terintegrasi.
		</p>
	</div>

	<div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
		{#each products as product}
			<Card.Root class="border-black/5 bg-background text-center shadow-none hover:shadow-xl">
				<Card.Content class="p-10">
					<div class="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-p5">
						<product.icon class="h-7 w-7 text-p1" />
					</div>
					<h4 class="mb-3 font-syne font-bold text-p1">{product.title}</h4>
					<p class="text-sm leading-relaxed text-muted-foreground">{product.desc}</p>
				</Card.Content>
			</Card.Root>
		{/each}
	</div>
</section>
