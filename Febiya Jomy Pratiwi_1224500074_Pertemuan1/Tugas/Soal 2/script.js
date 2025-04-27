
// Menampilkan Nama dan NIM ke Halaman
var nama = "Febiya Jomy Pratiwi";
let nim = 122450074;

document.getElementById("result").innerHTML = `
  <p>Nama: <strong>${nama}</strong></p>
  <p>NIM: <strong>${nim}</strong></p>
`;

console.log("Nama:", nama);
console.log("NIM:", nim);

// Fungsi menyapa pengguna
function sapaNama(nama) {
    return `Halo, ${nama}! Selamat belajar JavaScript!`;
}

// Event handler untuk tombol "Sapa Saya"
document.addEventListener("DOMContentLoaded", function () {
    let sapaButton = document.getElementById("sapa-button");
    let sapaOutput = document.getElementById("sapa-output");

    if (sapaButton) {
        sapaButton.addEventListener("click", function () {
            const namaInput = document.getElementById("nama-input").value.trim();
            if (!namaInput) {
                sapaOutput.innerHTML = `<p class="text-red-500">Silakan masukkan nama Anda terlebih dahulu!</p>`;
            } else {
                sapaOutput.innerHTML = `<p class="text-green-500">${sapaNama(namaInput)}</p>`;
            }
        });
    }
});

// Fungsi kalkulator
function hitungKalkulator(angka1, angka2, operasi) {
    let hasil;

    switch (operasi) {
        case "tambah":
            hasil = angka1 + angka2;
            break;
        case "kurang":
            hasil = angka1 - angka2;
            break;
        case "kali":
            hasil = angka1 * angka2;
            break;
        case "bagi":
            if (angka2 === 0) return "Error: Tidak bisa dibagi dengan nol!";
            hasil = angka1 / angka2;
            break;
        case "pangkat":
            hasil = Math.pow(angka1, angka2);
            break;
        case "akar":
            if (angka1 < 0) return "Error: Tidak bisa menghitung akar negatif!";
            hasil = Math.sqrt(angka1);
            break;
        case "modulus":
            hasil = angka1 % angka2;
            break;
        default:
            return "Operasi tidak valid!";
    }
    return hasil;
}

// Event listener untuk kalkulator
document.addEventListener("DOMContentLoaded", function () {
    let kalkulatorButtons = document.querySelectorAll(".btn-kalkulator");
    let hasilOutput = document.getElementById("hasil-kalkulator");

    kalkulatorButtons.forEach(button => {
        button.addEventListener("click", function () {
            const angka1 = parseFloat(document.getElementById("angka1").value);
            const angka2 = parseFloat(document.getElementById("angka2").value);
            const operasi = this.getAttribute("data-op");

            // Validasi input angka
            if (isNaN(angka1) || (["tambah", "kurang", "kali", "bagi", "pangkat", "modulus"].includes(operasi) && isNaN(angka2))) {
                hasilOutput.innerHTML = `<p class="text-red-500">Masukkan angka yang valid!</p>`;
                return;
            }

            const hasil = hitungKalkulator(angka1, angka2, operasi);
            let simbol = { tambah: "+", kurang: "-", kali: "×", bagi: "÷", pangkat: "^", modulus: "%" }[operasi] || "";
            let displayHasil = (operasi === "akar")
                ? `Hasil: √${angka1} = ${hasil}`
                : `Hasil: ${angka1} ${simbol} ${angka2} = ${hasil}`;
            hasilOutput.innerHTML = `<p>${displayHasil}</p>`;
        });
    });
});
