**Sistem Manajemen Perpustakaan Sederhana**

Program ini merupakan sistem perpustakaan digital sederhana yang memungkinkan pengguna untuk:

- Menambahkan koleksi item (buku dan majalah)
- Menampilkan daftar item
- Mencari item berdasarkan ID atau judul
- Melakukan peminjaman dan pengembalian item
  Sistem ini menggunakan prinsip abstraction, inheritance, encapsulation, dan polymorphism.

**Struktur Kelas**

- _LibraryItem (Abstract Class)_
  Atribut:
  - \_item_id (str): ID unik item
  - \_title (str): Judul item
  - \_\_is_available (bool): Status ketersediaan item (private)
    Metode :
    - is_available (getter/setter): Mengecek atau mengatur status pinjam
    - display_info() (abstract): Menampilkan detail item
    - get_item_type() (abstract): Mengembalikan jenis item
- _Book (Turunan dari LibraryItem)_
  Atribut tambahan:
  - \_author (str): Nama penulis
  - \_pages (int): Jumlah halaman
    Metode override:
  - display_info(): Menampilkan informasi buku
  - get_item_type(): Mengembalikan "Buku"
- _Magazine (Turunan dari LibraryItem)_
  Atribut tambahan :
  - \_issue (str): Edisi majalah
  - \_publisher (str): Nama penerbit
    Metode Override
  - display_info(): Menampilkan informasi majalah
  - get_item_type(): Mengembalikan "Majalah"

**Kelas Library** #_Atribut_

- \_items (dict): Menyimpan semua item perpustakaan dengan item*id sebagai key #\_Fungsi*
- add_item(): Menambahkan item baru ke perpustakaan
- display_all_items(): Menampilkan seluruh koleksi
- find_item_by_id(): Mencari item berdasarkan ID
- find_items_by_title(): Mencari item berdasarkan judul (dalam bentuk substring)
- check_out_item(): Meminjam item (jika tersedia)
- return_item(): Mengembalikan item

**Fungsi main()**

- Membuat objek Library
- Menambahkan item buku dan majalah
- Menampilkan daftar item
- Melakukan pencarian berdasarkan judul
- Melakukan proses peminjaman dan pengembalian item

**Fitur OOP yang Diterapkan**

- Abstraksi: LibraryItem sebagai kelas abstrak dengan metode wajib (display\*info, get_item_type)
- Enkapsulasi: Penggunaan atribut protected dan private (\*, \_\_)
- Polimorfisme: Pemanggilan display_info() dan get_item_type() di berbagai subclass
- Pewarisan: Book dan Magazine mewarisi LibraryItem
