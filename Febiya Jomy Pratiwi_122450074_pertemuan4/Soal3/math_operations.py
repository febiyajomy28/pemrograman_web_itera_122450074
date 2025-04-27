# math_operations.py

# Konstanta
PI = 3.14159

#luas dan keliling
# Persegi
def luas_persegi(sisi):
    return sisi * sisi
def keliling_persegi(sisi):
    return 4 * sisi
# Persegi Panjang
def luas_persegi_panjang(panjang, lebar):
    return panjang * lebar
def keliling_persegi_panjang(panjang, lebar):
    return 2 * (panjang + lebar)

# Lingkaran
def luas_lingkaran(jari_jari):
    return PI * (jari_jari ** 2)

def keliling_lingkaran(jari_jari):
    return 2 * PI * jari_jari

# Fungsi untuk konversi suhu

# Celsius ke Fahrenheit
def celsius_to_fahrenheit(celsius):
    return (celsius * 9/5) + 32

# Celsius ke Kelvin
def celsius_to_kelvin(celsius):
    return celsius + 273.15
