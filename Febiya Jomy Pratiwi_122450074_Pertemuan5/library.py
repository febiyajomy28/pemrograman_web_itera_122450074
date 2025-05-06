from abc import ABC, abstractmethod
from typing import Dict, List, Optional

class LibraryItem(ABC):
    def __init__(self, item_id: str, title: str):
        self._item_id = item_id  # protected attribute
        self._title = title      # protected attribute
        self.__is_available = True  # private attribute
    
    @property
    def item_id(self) -> str:
        return self._item_id
    
    @property
    def title(self) -> str:
        return self._title
    
    @property
    def is_available(self) -> bool:
        return self.__is_available
    
    @is_available.setter
    def is_available(self, status: bool):

        if isinstance(status, bool):
            self.__is_available = status
        else:
            raise ValueError("Status ketersediaan harus boolean (True/False)")
    
    @abstractmethod
    def display_info(self) -> None:
        """Method abstract untuk menampilkan informasi item (harus diimplementasikan subclass)"""
        pass
    
    @abstractmethod
    def get_item_type(self) -> str:
        """Method abstract untuk mendapatkan tipe item (harus diimplementasikan subclass)"""
        pass


class Book(LibraryItem):

    def __init__(self, item_id: str, title: str, author: str, pages: int):

        super().__init__(item_id, title)
        self._author = author  # protected attribute
        self._pages = pages    # protected attribute
    
    @property
    def author(self) -> str:
        """Getter untuk author (read-only property)"""
        return self._author
    
    def display_info(self) -> None:
        """Menampilkan informasi lengkap buku (implementasi method abstract)"""
        status = "Tersedia" if self.is_available else "Dipinjam"
        print(f"[BUKU] ID: {self.item_id}")
        print(f"Judul: {self.title}")
        print(f"Penulis: {self.author}")
        print(f"Halaman: {self._pages}")
        print(f"Status: {status}\n")
    
    def get_item_type(self) -> str:
        """Mengembalikan tipe item (implementasi method abstract)"""
        return "Buku"


class Magazine(LibraryItem):
    def __init__(self, item_id: str, title: str, issue: str, publisher: str):
        super().__init__(item_id, title)
        self._issue = issue          # protected attribute
        self._publisher = publisher  # protected attribute
    
    @property
    def issue(self) -> str:
        return self._issue
    
    def display_info(self) -> None:
        status = "Tersedia" if self.is_available else "Dipinjam"
        print(f"[MAJALAH] ID: {self.item_id}")
        print(f"Judul: {self.title}")
        print(f"Edisi: {self.issue}")
        print(f"Penerbit: {self._publisher}")
        print(f"Status: {status}\n")
    
    def get_item_type(self) -> str:
        """Mengembalikan tipe item (implementasi method abstract)"""
        return "Majalah"


class Library:
    def __init__(self):
        self.__items: Dict[str, LibraryItem] = {}  # private attribute
    
    def add_item(self, item: LibraryItem) -> bool:
        if item.item_id in self.__items:
            print(f"Error: Item dengan ID {item.item_id} sudah ada")
            return False
        
        self.__items[item.item_id] = item
        print(f"Sukses: '{item.title}' ({item.get_item_type()}) ditambahkan")
        return True
    
    def display_all_items(self) -> None:
        if not self.__items:
            print("Perpustakaan kosong")
            return
        
        print("\n=== DAFTAR KOLEKSI PERPUSTAKAAN ===")
        for item in self.__items.values():
            item.display_info()
    
    def find_item_by_id(self, item_id: str) -> Optional[LibraryItem]:
        return self.__items.get(item_id)
    
    def find_items_by_title(self, title: str) -> List[LibraryItem]:
        title_lower = title.lower()
        return [item for item in self.__items.values() 
                if title_lower in item.title.lower()]
    
    def check_out_item(self, item_id: str) -> bool:
        item = self.find_item_by_id(item_id)
        if not item:
            print(f"Error: Item dengan ID {item_id} tidak ditemukan")
            return False
        
        if item.is_available:
            item.is_available = False
            print(f"Sukses: '{item.title}' berhasil dipinjam")
            return True
        else:
            print(f"Error: '{item.title}' sudah dipinjam")
            return False
    
    def return_item(self, item_id: str) -> bool:
        item = self.find_item_by_id(item_id)
        if not item:
            print(f"Error: Item dengan ID {item_id} tidak ditemukan")
            return False
        
        if not item.is_available:
            item.is_available = True
            print(f"Sukses: '{item.title}' berhasil dikembalikan")
            return True
        else:
            print(f"Error: '{item.title}' tidak sedang dipinjam")
            return False


# Demo penggunaan sistem perpustakaan
def main():
    library = Library()
    
    # Menambahkan beberapa item
    book1 = Book("B001", "Pemrograman Python", "John Doe", 400)
    book2 = Book("B002", "Struktur Data", "Jane Smith", 350)
    magazine1 = Magazine("M001", "Teknologi Hari Ini", "Edisi 2023-06", "Tech Media")
    magazine2 = Magazine("M002", "Sains Modern", "Vol. 15 No. 2", "Science Press")
    
    library.add_item(book1)
    library.add_item(book2)
    library.add_item(magazine1)
    library.add_item(magazine2)
    
    # Menampilkan semua item
    library.display_all_items()
    
    # Mencari item
    print("\nHasil pencarian 'Python':")
    results = library.find_items_by_title("Python")
    for item in results:
        item.display_info()
    
    # Meminjam dan mengembalikan item
    print("\nProses peminjaman:")
    library.check_out_item("B001")
    library.check_out_item("B001")  # Coba pinjam lagi
    library.display_all_items()
    
    print("\nProses pengembalian:")
    library.return_item("B001")
    library.display_all_items()


if __name__ == "__main__":
    main()