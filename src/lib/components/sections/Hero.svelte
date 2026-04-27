<script lang="ts">
	import { Button } from '$lib/components/ui/button';
</script>

<section id="home" class="relative overflow-hidden">
	<div class="relative bg-gradient-to-br from-p1 to-p2 px-8 pt-20 pb-16 lg:px-24 lg:pt-32 lg:pb-24">
		<!-- Background Shapes -->
		<div
			class="absolute -top-20 -right-20 h-[400px] w-[400px] rounded-full bg-p4/10 blur-3xl"
		></div>
		<div
			class="absolute bottom-[-60px] left-[20%] h-[250px] w-[250px] rounded-full bg-p5/5 blur-2xl"
		></div>

		<div class="relative z-1 max-w-7xl">
			<div
				class="mb-6 inline-flex items-center gap-2 rounded-full bg-p5/15 px-4 py-1.5 backdrop-blur-sm"
			>
				<div
					class="h-1.5 w-1.5 animate-pulse rounded-full bg-green-400 shadow-[0_0_8px_#4ade80]"
				></div>
				<span class="text-[0.7rem] font-bold tracking-widest text-p4 uppercase"
					>Aktif & Siap Digunakan</span
				>
			</div>

			<h1
				class="mb-6 font-syne text-4xl leading-[1.1] font-extrabold text-p5 md:text-5xl lg:text-7xl"
			>
				Fotokopi <em class="text-p4 not-italic">lebih cerdas</em><br />lewat WhatsApp
			</h1>

<p class="mb-10 max-w-xl text-lg leading-relaxed text-p5/80 lg:text-xl">
				Printy mengubah cara pelanggan mencetak dokumen. Kirim file via WhatsApp, atur konfigurasi,
				bayar — selesai. Tanpa antrean panjang, tanpa kesalahan manual.
			</p>

			<div class="flex flex-wrap gap-4">
				<Button size="lg" class="h-12 rounded-xl bg-p5 px-8 font-bold text-p1 hover:bg-p4"
					>Mulai Gratis</Button
				>
				<Button
					size="lg"
					variant="outline"
					class="h-12 rounded-xl border-p5/30 bg-p5/5 px-8 font-bold text-p5 hover:bg-p5/10"
					href="#about">Lihat Cara Kerja</Button
				>
			</div>

			<div class="mt-16 flex flex-wrap gap-12 border-t border-p5/10 pt-10">
				<div class="flex flex-col">
					<span class="font-syne text-3xl font-extrabold text-p5 lg:text-4xl">3x</span>
					<span class="text-xs text-p5/60 lg:text-sm">lebih cepat proses pesanan</span>
				</div>
				<div class="flex flex-col">
					<span class="font-syne text-3xl font-extrabold text-p5 lg:text-4xl">0</span>
					<span class="text-xs text-p5/60 lg:text-sm">antrean fisik dibutuhkan</span>
				</div>
				<div class="flex flex-col">
					<span class="font-syne text-3xl font-extrabold text-p5 lg:text-4xl">24/7</span>
					<span class="text-xs text-p5/60 lg:text-sm">bot aktif melayani</span>
				</div>
			</div>
		</div>
	</div>
</section>
