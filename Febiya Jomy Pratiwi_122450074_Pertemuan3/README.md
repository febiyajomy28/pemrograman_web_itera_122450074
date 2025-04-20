**Aplikasi Manajemen Buku Pribadi**
Aplikasi Manajemen Buku Pribadi adalah sebuah aplikasi berbasis web yang memungkinkan pengguna untuk mengelola koleksi buku pribadi mereka. Pengguna dapat menambahkan, mengedit, menghapus, dan mencari buku berdasarkan judul atau penulis. Selain itu, aplikasi ini juga menyediakan statistik jumlah buku berdasarkan status (dimiliki, sedang dibaca, atau ingin dibeli).

#**Aplikasi Manajemen Buku Pribadi memiliki fitur Modern seperti:**

- React Context API untuk manajemen state global.
- React Router untuk navigasi antar halaman.
- Custom Hooks untuk penyimpanan data di localStorage.
- PropTypes untuk validasi props komponen.

#**Instruksi instalasi dan menjalankan**

_Prasyarat_

1. Node.js

2. npm atau yarn

_Langkah-langkah_

1. Clone repositori (jika ada) atau buat proyek baru.

2. Instal dependensi "npm install" atau "yarn install"

3. Jalankan aplikasi: "npm run dev" atau "yarn dev"

4. Buka browser dan akses http://localhost:5173.

##**Screenshot Antarmuka**

- _Halaman Utama (Home)_
![alt text](https://github.com/febiyajomy28/pemrograman_web_itera_122450074/blob/master/Febiya%20Jomy%20Pratiwi_122450074_Pertemuan3/src/gambar/home.jpg?raw=true)

  - Menampilkan daftar buku dengan filter dan pencarian.
  - Tombol "Tambah Buku Baru" untuk menambahkan buku baru.
  - Opsi edit dan hapus untuk setiap buku.

- _Halaman Statistik (Stats)_
![alt text](https://github.com/febiyajomy28/pemrograman_web_itera_122450074/blob/master/Febiya%20Jomy%20Pratiwi_122450074_Pertemuan3/src/gambar/statistika.jpg?raw=true)

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


#**Komentar dalam kode untuk bagian penting**
![alt text](https://github.com/febiyajomy28/pemrograman_web_itera_122450074/blob/master/Febiya%20Jomy%20Pratiwi_122450074_Pertemuan3/src/gambar/code1.jpg?raw=true)

![alt text](https://github.com/febiyajomy28/pemrograman_web_itera_122450074/blob/master/Febiya%20Jomy%20Pratiwi_122450074_Pertemuan3/src/gambar/code2.jpg?raw=true)

![alt text](https://github.com/febiyajomy28/pemrograman_web_itera_122450074/blob/master/Febiya%20Jomy%20Pratiwi_122450074_Pertemuan3/src/gambar/code3.jpg?raw=true)


#**Laporan Testing**

- **Menambahkan Buku Baru**:Buku berhasil ditambahkan dan muncul di daftar.
![alt text](https://github.com/febiyajomy28/pemrograman_web_itera_122450074/blob/master/Febiya%20Jomy%20Pratiwi_122450074_Pertemuan3/src/gambar/tambah1.jpg?raw=true)
![alt text](https://github.com/febiyajomy28/pemrograman_web_itera_122450074/blob/master/Febiya%20Jomy%20Pratiwi_122450074_Pertemuan3/src/gambar/tambah2.jpg?raw=true)

- **Mengedit Buku**:Data buku berhasil diperbarui.
![alt text](https://github.com/febiyajomy28/pemrograman_web_itera_122450074/blob/master/Febiya%20Jomy%20Pratiwi_122450074_Pertemuan3/src/gambar/edit1.jpg?raw=true)
![alt text](https://github.com/febiyajomy28/pemrograman_web_itera_122450074/blob/master/Febiya%20Jomy%20Pratiwi_122450074_Pertemuan3/src/gambar/edit2.jpg?raw=true)

- **Menghapus Buku**: Buku berhasil dihapus dari daftar. Disini menghapus buku "Negeri 5 Menara"
![alt text](https://github.com/febiyajomy28/pemrograman_web_itera_122450074/blob/master/Febiya%20Jomy%20Pratiwi_122450074_Pertemuan3/src/gambar/delete.jpg?raw=true)

- **Filter dan Pencarian**: Daftar buku berhasil difilter berdasarkan status dan pencarian.
![alt text](https://github.com/febiyajomy28/pemrograman_web_itera_122450074/blob/master/Febiya%20Jomy%20Pratiwi_122450074_Pertemuan3/src/gambar/filter.jpg?raw=true)

- **Statistik Buku**: Statistik menampilkan jumlah buku sesuai status.
![alt text](https://github.com/febiyajomy28/pemrograman_web_itera_122450074/blob/master/Febiya%20Jomy%20Pratiwi_122450074_Pertemuan3/src/gambar/stat2.jpg?raw=true)
