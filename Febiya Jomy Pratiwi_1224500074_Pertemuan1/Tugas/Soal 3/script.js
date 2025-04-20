document.addEventListener("DOMContentLoaded", function () {
    // Menampilkan Nama dan NIM ke Halaman
    var nama = "Febiya Jomy Pratiwi";
    let nim = 122450074;

    document.getElementById("result").innerHTML = `
      <p>Nama: <strong>${nama}</strong></p>
      <p>NIM: <strong>${nim}</strong></p>
    `;

    console.log("Nama:", nama);
    console.log("NIM:", nim);

    // Fungsi validasi input
    function validasiInput(nama, email, password) {
        let pesanError = [];

        // Validasi Nama (Minimal 3 karakter)
        if (nama.length < 3) {
            pesanError.push("Nama harus memiliki minimal 3 karakter!");
        }

        // Validasi Email (Harus mengandung '@')
        if (!email.includes("@")) {
            pesanError.push("Email harus valid dan mengandung '@'!");
        }

        // Validasi Password (Minimal 8 karakter)
        if (password.length < 8) {
            pesanError.push("Password harus minimal 8 karakter!");
        }

        return pesanError;
    }

    // Event handler untuk tombol "Submit"
    document.getElementById("submit-button").addEventListener("click", function () {
        const namaInput = document.getElementById("nama-input").value.trim();
        const emailInput = document.getElementById("email-input").value.trim();
        const passwordInput = document.getElementById("password-input").value.trim();
        const output = document.getElementById("output");

        let errors = validasiInput(namaInput, emailInput, passwordInput);

        if (errors.length > 0) {
            output.innerHTML = `<p style="color: red;">${errors.join("<br>")}</p>`;
        } else {
            output.innerHTML = `<p style="color: green;">Selamat, registrasi berhasil!</p>`;
        }
    });
});
