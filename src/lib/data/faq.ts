export const faqContent = {
	title: 'Pertanyaan yang Sering Ditanyakan',
	description: 'Temukan jawaban untuk pertanyaan umum tentang Printy.'
} as const;

export const faqs = [
	{
		question: 'Bagaimana cara mencetak lewat Printy?',
		answer: 'Kirim dokumen ke WhatsApp Printy, pilih opsi cetak (ukuran, warna, jumlah), lalu bayar. Pesanan diproses dan siap diambil.'
	},
	{
		question: 'Format file apa saja yang didukung?',
		answer: 'PDF, DOC, DOCX, JPG, PNG, XLS. Gunakan PDF resolusi tinggi untuk hasil terbaik.'
	},
	{
		question: 'Berapa lama proses cetak?',
		answer: 'Dokumen standar (≤10 lembar) selesai 30-60 menit. Pesanan besar akan diinformasikan estimasinya.'
	},
	{
		question: 'Metode pembayaran apa saja?',
		answer: 'Transfer bank, QRIS, atau bayar langsung saat pengambilan. Tautan pembayaran dikirim via WhatsApp.'
	},
	{
		question: 'Batas ukuran file berapa?',
		answer: 'Maksimal 25MB per file. File lebih besar bisa dikirim bertahap atau pakai tautan Google Drive/Dropbox.'
	},
	{
		question: 'Bagaimana jika hasil cetak bermasalah?',
		answer: 'Hubungi kami 24 jam setelah pengambilan untuk penggantian atau perbaikan.'
	},
	{
		question: 'Printy buka 24 jam?',
		answer: 'Bot WhatsApp aktif 24/7. Proses cetak dan pengambilan mengikuti jam operasional toko.'
	},
	{
		question: 'Cara jadi mitra Printy?',
		answer: 'Hubungi kami via WhatsApp atau email untuk informasi paket kerja sama.'
	},
	{
		question: 'Data aman di Printy?',
		answer: 'Ya. File dienkripsi dan dihapus otomatis setelah pesanan selesai.'
	},
	{
		question: 'Cara hapus data akun?',
		answer: 'Lewat menu di dashboard, email hello@printy.co.id, atau WhatsApp dengan kata kunci "HAPUS DATA".'
	}
] as const;