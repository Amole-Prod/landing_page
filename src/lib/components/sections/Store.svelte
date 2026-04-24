<script lang="ts">
	import { Button } from '$lib/components/ui/button';
</script>

<section id="store" class="bg-background px-8 py-20 lg:px-24">
	<div class="mb-12">
		<span class="mb-3 block text-[0.7rem] font-bold tracking-[0.14em] text-p3 uppercase">Toko</span>
		<h2 class="mb-6 font-syne text-3xl leading-tight font-bold text-p1 lg:text-4xl">
			Daftarkan toko Anda
		</h2>
	</div>

	<div class="flex flex-wrap items-center justify-between gap-12 rounded-[2rem] bg-p1 p-10 lg:p-16">
		<div class="max-w-md">
			<h3 class="mb-4 font-syne text-2xl leading-tight font-bold text-p5 lg:text-3xl">
				Mulai digitalisasi toko Anda hari ini
			</h3>
			<p class="text-sm leading-relaxed text-p5/60 lg:text-base">
				Proses pendaftaran mudah, tidak membutuhkan keahlian teknis. Tim kami siap membantu
				onboarding agar toko Anda segera aktif.
			</p>
		</div>

		<div class="flex flex-wrap gap-4">
			<Button class="h-12 rounded-xl bg-p5 px-8 font-bold text-p1 hover:bg-p4"
				>Daftar Toko Sekarang</Button
			>
			<Button
				variant="outline"
				class="h-12 rounded-xl border-p5/20 px-8 font-bold text-p5 hover:bg-p5/10"
				>Lihat Harga</Button
			>
		</div>
	</div>
</section>
