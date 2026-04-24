export const newsContent = {
	badge: 'Changelog',
	title: 'Berita & Update',
	description: 'Pelajari fitur terbaru, perbaikan, dan peningkatan dari Printy.'
} as const;

export type NewsItem = {
	tag: string;
	variant: 'default' | 'secondary' | 'outline';
	title: string;
	description: string;
	date: string;
	version?: string;
};

export const newsItems: NewsItem[] = [
	{
		tag: 'Fitur',
		variant: 'default',
		title: 'Printy v1.2 — Dukungan multi-toko hadir',
		description:
			'Kini Anda bisa mengelola lebih dari satu toko dalam satu akun. Setiap toko memiliki bot WhatsApp terpisah dengan konfigurasi harga dan layanan masing-masing.',
		date: '2025-04-02',
		version: '1.2'
	},
	{
		tag: 'Perbaikan',
		variant: 'secondary',
		title: 'Perbaikan stabilitas koneksi WhatsApp Bot',
		description:
			'Mengatasi masalah bot yang sering disconnect saat traffic tinggi. Koneksi kini lebih stabil dan responsif.',
		date: '2025-03-28',
		version: '1.1.3'
	},
	{
		tag: 'Tips',
		variant: 'outline',
		title: 'Cara mengatur auto-reply untuk konfigurasi cetak pelanggan',
		description:
			'Panduan lengkap mengoptimalkan auto-reply agar pelanggan mendapat informasi lengkap sebelum mencetak.',
		date: '2025-03-20'
	},
	{
		tag: 'Perbaikan',
		variant: 'secondary',
		title: 'Dashboard mobile lebih responsif di iOS',
		description: 'Tampilan dashboard kini optimal di Safari iOS dan perangkat Apple lainnya.',
		date: '2025-03-15',
		version: '1.1.2'
	},
	{
		tag: 'Fitur',
		variant: 'default',
		title: 'Integrasi laporan cetak harian via email',
		description:
			'Dapatkan rekapitulasi print harian langsung di inbox email Anda setiap pagi. Support multiple recipients.',
		date: '2025-03-10',
		version: '1.1.0'
	},
	{
		tag: 'Fitur',
		variant: 'default',
		title: 'Mode operasi offline',
		description: 'Bot tetap melayani pesanan saat internet terganggu dengan queue system otomatis.',
		date: '2025-02-28',
		version: '1.0.8'
	},
	{
		tag: 'Perbaikan',
		variant: 'secondary',
		title: 'Peningkatan kecepatan render dokumen',
		description: 'Proses render dokumen 40% lebih cepat untuk file PDF kompleks.',
		date: '2025-02-15',
		version: '1.0.7'
	}
] as const;
