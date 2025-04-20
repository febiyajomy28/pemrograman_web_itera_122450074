#**Aplikasi Manajemen Buku Pribadi**
Aplikasi Manajemen Buku Pribadi adalah sebuah aplikasi berbasis web yang memungkinkan pengguna untuk mengelola koleksi buku pribadi mereka. Pengguna dapat menambahkan, mengedit, menghapus, dan mencari buku berdasarkan judul atau penulis. Selain itu, aplikasi ini juga menyediakan statistik jumlah buku berdasarkan status (dimiliki, sedang dibaca, atau ingin dibeli).

##**Aplikasi Manajemen Buku Pribadi memiliki fitur Modern seperti:**

- React Context API untuk manajemen state global.
- React Router untuk navigasi antar halaman.
- Custom Hooks untuk penyimpanan data di localStorage.
- PropTypes untuk validasi props komponen.

##**Instruksi instalasi dan menjalankan**

###_Prasyarat_

1. Node.js

2. npm atau yarn

###_Langkah-langkah_

1. Clone repositori (jika ada) atau buat proyek baru.

2. Instal dependensi "npm install" atau "yarn install"

3. Jalankan aplikasi: "npm run dev" atau "yarn dev"

4. Buka browser dan akses http://localhost:5173.

##**Screenshot Antarmuka**

- _Halaman Utama (Home)_

  - Menampilkan daftar buku dengan filter dan pencarian.
  - Tombol "Tambah Buku Baru" untuk menambahkan buku baru.
  - Opsi edit dan hapus untuk setiap buku.

- _Halaman Statistik (Stats)_

  - Menampilkan statistik jumlah buku berdasarkan status.

#**Fitur React yang Digunakan**

- **React Context API**:

  - Digunakan untuk menyimpan dan mengelola state buku secara global (BookContext.jsx).

  - Memungkinkan komponen lain mengakses data buku tanpa prop drilling.

- **React Router**:

  - Mengatur navigasi antara halaman Home dan Stats.

  - Menggunakan useLocation untuk menandai link aktif di navbar.

- **Custom Hooks (useLocalStorage)**:

  - Menyimpan data buku di localStorage agar tetap tersedia setelah refresh.

- **PropTypes**:

  - Memvalidasi props yang diterima komponen untuk mencegah kesalahan.

- **Reusable Components**:
  - Komponen seperti BookForm, BookList, dan BookFilter dapat digunakan kembali.

#**Laporan Testing**

- **Menambahkan Buku Baru**:Buku berhasil ditambahkan dan muncul di daftar.

- **Mengedit Buku**:Data buku berhasil diperbarui.

- **Menghapus Buku**: Buku berhasil dihapus dari daftar.

- **Filter dan Pencarian**: Daftar buku berhasil difilter berdasarkan status dan pencarian.

- **Statistik Buku**: Statistik menampilkan jumlah buku sesuai status.
