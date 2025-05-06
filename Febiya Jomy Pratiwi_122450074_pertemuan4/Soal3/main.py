# main.py

# Import seluruh modul
import math_operations

# Import beberapa fungsi saja
from math_operations import luas_persegi, keliling_lingkaran

def main():
    print("=== PERHITUNGAN GEOMETRI ===")
    
    # Persegi
    sisi = 5
    print(f"Luas Persegi (sisi={sisi}): {luas_persegi(sisi)}")
    print(f"Keliling Persegi (sisi={sisi}): {math_operations.keliling_persegi(sisi)}")
    
    # Persegi Panjang
    panjang = 8
    lebar = 4
    print(f"\nLuas Persegi Panjang (panjang={panjang}, lebar={lebar}): {math_operations.luas_persegi_panjang(panjang, lebar)}")
    print(f"Keliling Persegi Panjang (panjang={panjang}, lebar={lebar}): {math_operations.keliling_persegi_panjang(panjang, lebar)}")
    
    # Lingkaran
    jari_jari = 7
    print(f"\nLuas Lingkaran (jari-jari={jari_jari}): {math_operations.luas_lingkaran(jari_jari):.2f}")
    print(f"Keliling Lingkaran (jari-jari={jari_jari}): {keliling_lingkaran(jari_jari):.2f}")
    
    print("\n=== KONVERSI SUHU ===")
    
    suhu_celsius = 25
    print(f"{suhu_celsius}°C ke Fahrenheit: {math_operations.celsius_to_fahrenheit(suhu_celsius):.2f}°F")
    print(f"{suhu_celsius}°C ke Kelvin: {math_operations.celsius_to_kelvin(suhu_celsius):.2f}K")

if __name__ == "__main__":
    main()
