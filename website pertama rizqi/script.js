 document.getElementById('form-kontak').addEventListener('submit', function(e) {
    e.preventDefault(); // Mencegah halaman web melakukan reload

    const form = this;
    const data = new FormData(form);
    const nama = document.getElementById('nama').value;

    // Ganti URL di bawah ini dengan Link Endpoint dari akun Formspree Anda
    fetch("https://formspree.io/f/KODE_FORM_ANDA_DISINI", {
        method: "POST",
        body: data,
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        if (response.ok) {
            // Jika berhasil terkirim ke server Formspree
            alert(`Terima kasih ${nama}! Pesan Anda telah berhasil dikirim dan dicatat.`);
            form.reset(); // Mengosongkan kolom isian kembali
        } else {
            // Jika ada kesalahan dari server
            alert("Maaf, terjadi kendala saat mengirim pesan Anda. Silakan coba lagi.");
        }
    }).catch(error => {
        // Jika internet terputus atau gagal terhubung
        alert("Gagal mengirim pesan. Pastikan Anda terhubung ke internet.");
    });
});
// Fungsi untuk memunculkan atau menyembunyikan detail pada bagian Sistem & Server
function bukaDetail(id) {
    const elemenDetail = document.getElementById(id);
    
    // Jika sedang tersembunyi, maka tampilkan. Jika sedang tampil, sembunyikan kembali.
    if (elemenDetail.style.display === "none" || elemenDetail.style.display === "") {
        elemenDetail.style.display = "block";
    } else {
        elemenDetail.style.display = "none";
    }
}