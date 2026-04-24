<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import { Badge } from '$lib/components/ui/badge';

	const partners = [
		{
			title: 'Reseller',
			desc: 'Jual lisensi Printy kepada pemilik toko di wilayah Anda dan dapatkan komisi per aktivasi.',
			badge: 'Komisi 20%'
		},
		{
			title: 'Distributor Regional',
			desc: 'Jadilah distributor eksklusif Printy di kota atau provinsi tertentu dengan hak penuh wilayah.',
			badge: 'Eksklusif'
		},
		{
			title: 'Integrasi Teknologi',
			desc: 'Integrasikan layanan Anda — payment, printer, atau ERP — dengan ekosistem Printy via API.',
			badge: 'API Tersedia'
		},
		{
			title: 'Kampus & Komunitas',
			desc: 'Program khusus untuk koperasi mahasiswa atau unit usaha kampus yang mengelola fotokopi.',
			badge: 'Harga Khusus'
		}
	];
</script>

<section id="partnership" class="bg-background px-8 py-20 lg:px-24">
	<div class="mb-16">
		<span class="mb-3 block text-[0.7rem] font-bold tracking-[0.14em] text-p3 uppercase"
			>Partnership</span
		>
		<h2 class="mb-6 font-syne text-3xl leading-tight font-bold text-p1 lg:text-4xl">
			Tumbuh bersama Printy
		</h2>
		<p class="max-w-xl text-lg text-muted-foreground">
			Kami membuka peluang kerjasama untuk memperluas ekosistem digitalisasi toko fotokopi di
			seluruh Indonesia.
		</p>
	</div>

	<div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
		{#each partners as partner}
			<Card.Root class="border-black/5 bg-background shadow-none transition-all hover:shadow-xl">
				<Card.Content class="p-8">
					<h4 class="mb-3 font-syne font-bold text-p1">{partner.title}</h4>
					<p class="mb-6 text-sm leading-relaxed text-muted-foreground">{partner.desc}</p>
					<Badge
						variant="secondary"
						class="rounded-full bg-p5 px-3 py-1 text-[0.65rem] font-bold text-p1"
					>
						{partner.badge}
					</Badge>
				</Card.Content>
			</Card.Root>
		{/each}
	</div>
</section>
