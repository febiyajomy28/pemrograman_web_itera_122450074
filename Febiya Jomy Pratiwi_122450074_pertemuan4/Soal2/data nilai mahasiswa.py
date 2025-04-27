import pandas as pd

# Data Mahasiswa
mahasiswa = [
    {
        "nama": "Febiya Jomy Pratiwi",
        "nim": "122450074",
        "nilai_uts": 87,
        "nilai_uas": 90,
        "nilai_tugas": 100
    },
    {
        "nama": "Muhammad Salman",
        "nim": "122450200",
        "nilai_uts": 70,
        "nilai_uas": 50,
        "nilai_tugas": 100
    },
    {
        "nama": "Dea Mutia",
        "nim": "122450099",
        "nilai_uts": 45,
        "nilai_uas": 90,
        "nilai_tugas": 100
    },
    {
        "nama": "Kayla Amanda Sukma",
        "nim": "122450086",
        "nilai_uts": 90,
        "nilai_uas": 45,
        "nilai_tugas": 100
    },
    {
        "nama": "Puspa Syadza",
        "nim": "122450072",
        "nilai_uts": 95,
        "nilai_uas": 93,
        "nilai_tugas": 100
    }
]

# Hitung nilai akhir dan grade
for mhs in mahasiswa:
    nilai_akhir = 0.3 * mhs["nilai_uts"] + 0.4 * mhs["nilai_uas"] + 0.3 * mhs["nilai_tugas"]
    mhs["nilai_akhir"] = round(nilai_akhir, 2)
    
    if nilai_akhir >= 80:
        mhs["grade"] = "A"
    elif nilai_akhir >= 70:
        mhs["grade"] = "B"
    elif nilai_akhir >= 60:
        mhs["grade"] = "C"
    elif nilai_akhir >= 50:
        mhs["grade"] = "D"
    else:
        mhs["grade"] = "E"

# Buat DataFrame untuk tampilan tabel
df = pd.DataFrame(mahasiswa)

# Tampilkan tabel
print("\nData Mahasiswa:")
print(df[["nama", "nim", "nilai_uts", "nilai_uas", "nilai_tugas", "nilai_akhir", "grade"]])

# Cari mahasiswa nilai tertinggi dan terendah
nilai_tertinggi = df.loc[df["nilai_akhir"].idxmax()]
nilai_terendah = df.loc[df["nilai_akhir"].idxmin()]

print("\nMahasiswa dengan Nilai Tertinggi:")
print(nilai_tertinggi[["nama", "nim", "nilai_akhir", "grade"]])

print("\nMahasiswa dengan Nilai Terendah:")
print(nilai_terendah[["nama", "nim", "nilai_akhir", "grade"]])
