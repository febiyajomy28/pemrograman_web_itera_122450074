# **Dashboard Jadwal Kuliah Sederhana**

![cover](img/Cover.png)

# **Introduction Aplikasi Jadwal Kuliah**

<div style="text-align: justify">
<p>
Aplikasi Jadwal Kuliah adalah sebuah dashboard interaktif yang membantu mahasiswa dalam mengelola jadwal perkuliahan. Fungsi Aplikasi ini adalah untuk memungkinkan pengguna:
-Menambah, mengedit, dan menghapus jadwal kuliah
-Melihat jadwal harian dan mingguan
-Mendapatkan notifikasi sebelum kelas dimulai
-Menyimpan data secara lokal menggunakan localStorage
</p>
</div>

# Fitur di Dashboard

## Tab Navigasi

Terdapat tiga tab utama untuk berpindah antara tampilan:

- **Hari ini**: Menampilkan jadwal kuliah untuk hari ini.
- **Kalender Mingguan**: Menampilkan jadwal dalam bentuk grid per minggu.
- **Kelola Jadwal**: Fitur CRUD (Tambah, Edit, Hapus) untuk mengatur jadwal.

## Fitur 

-Jadwal Hari Ini
Fitur ini menampilkan daftar kelas yang dijadwalkan untuk hari ini. Jika tidak ada jadwal yang tersedia, akan muncul pesan "Tidak ada jadwal kuliah hari ini." untuk memberi tahu pengguna. Selain itu, kelas yang sedang berlangsung saat ini akan ditandai dengan label khusus agar lebih mudah dikenali.
![picture 0](/gambar/Screenshot (296).png)  

-Kalender Mingguan
Fitur ini menampilkan jadwal dalam bentuk grid selama 7 hari, dari Senin hingga Minggu. Pengguna dapat menggunakan fitur filter mata kuliah untuk memilih dan menampilkan jadwal berdasarkan mata kuliah tertentu, dengan contoh tampilan seperti "Filter Mata Kuliah: [Semua Mata Kuliah ~]". Setiap hari akan menampilkan informasi berupa waktu kelas (misalnya 10:00 - 12:00), nama mata kuliah (seperti Basis Data), dan ruangan (seperti Ruang 205). Jika pada suatu hari tidak ada jadwal yang tersedia, akan ditampilkan pesan "Tidak ada jadwal" untuk memperjelas kepada pengguna.
-Kelola Jadwal (CRUD)
Fitur ini menyediakan form input untuk menambahkan jadwal baru dengan mengisi nama mata kuliah, hari, waktu, ruangan, dan dosen. Setiap jadwal yang sudah ada dapat diedit melalui tombol "Edit" untuk mengubah detailnya, atau dihapus menggunakan tombol "Hapus" yang dilengkapi dengan konfirmasi agar tidak terhapus secara tidak sengaja. Daftar jadwal ditampilkan secara terpisah per hari, mulai dari Senin hingga Minggu. Setiap entri dalam daftar menampilkan informasi penting seperti nama mata kuliah (misalnya Pemrograman Web), waktu pelaksanaan (contohnya 11:26 - 15:24), dan lokasi ruangan (seperti Ruang 301).



# Daftar fitur ES6+ yang diimplementasikan

1. Penggunaan let dan const
2. Arrow Functions (=>)
3. Template Literals (`...`)
4. Promises
5. Class & OOP (Object-Oriented Programming)
