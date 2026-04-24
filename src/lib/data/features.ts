export const featuresContent = {
	eyebrow: 'Tentang Printy',
	title: 'Satu platform untuk semua\nkebutuhan toko fotokopi',
	description:
		'Dirancang khusus untuk pemilik usaha fotokopi yang ingin memanfaatkan teknologi tanpa ribet. Integrasikan bot, kelola pesanan, pantau status cetak.'
} as const;

export const features = [
	{
		id: 'whatsapp-bot',
		num: '01',
		icon: 'Rocket',
		title: 'WhatsApp Bot Terintegrasi',
		description:
			'Pelanggan kirim file, atur konfigurasi cetak, dan konfirmasi pesanan langsung dari chat WhatsApp.'
	},
	{
		id: 'dashboard',
		num: '02',
		icon: 'LayoutDashboard',
		title: 'Dashboard Manajemen Real-time',
		description:
			'Pantau semua pesanan masuk, status cetak, dan riwayat transaksi dari dashboard yang responsif.'
	},
	{
		id: 'pembayaran',
		num: '03',
		icon: 'CreditCard',
		title: 'Pembayaran Mandiri',
		description:
			'Pelanggan dapat melakukan pembayaran langsung dalam satu jendela percakapan otomatis.'
	},
	{
		id: 'multi-user',
		num: '04',
		icon: 'Users',
		title: 'Multi-pengguna & Peran',
		description:
			'Tetapkan peran kasir, operator, dan pemilik dengan hak akses berbeda untuk keamanan.'
	}
] as const;

export const solutionsContent = {
	eyebrow: 'Solusi',
	title: 'Masalah nyata,\nsolusi yang tepat',
	description: 'Printy hadir untuk menjawab tantangan operasional toko fotokopi di era digital.'
} as const;

export const solutions = [
	{
		id: 'minimalisasi-antrean',
		icon: 'Clock',
		title: 'Minimalisasi antrean fisik',
		description:
			'Pelanggan tidak perlu datang hanya untuk menitip berkas. Semua dilakukan dari jarak jauh via WhatsApp.'
	},
	{
		id: 'kurangi-kesalahan',
		icon: 'FileCheck',
		title: 'Kurangi kesalahan manual',
		description:
			'Konfigurasi cetak dikirim langsung oleh pelanggan, mengurangi risiko salah tafsir instruksi.'
	},
	{
		id: 'rekap-otomatis',
		icon: 'BarChart3',
		title: 'Rekap otomatis harian',
		description:
			'Laporan pesanan, pendapatan, dan status cetak dihasilkan otomatis tanpa perlu rekapitulasi manual.'
	},
	{
		id: 'layanan-24jam',
		icon: 'Bot',
		title: 'Layanan 24 jam',
		description:
			'Bot aktif menerima pesanan bahkan saat toko tutup, meningkatkan volume order tanpa tambahan tenaga kerja.'
	},
	{
		id: 'notifikasi-realtime',
		icon: 'Bell',
		title: 'Notifikasi status real-time',
		description:
			'Pelanggan mendapat notifikasi otomatis saat pesanan diproses, selesai, dan siap diambil.'
	},
	{
		id: 'manajemen-file',
		icon: 'FolderOpen',
		title: 'Manajemen file terpusat',
		description:
			'Semua file yang dikirim pelanggan tersimpan terorganisir dan dapat diakses operator kapan saja.'
	}
] as const;
