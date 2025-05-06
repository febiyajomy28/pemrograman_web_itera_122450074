//Struktur Kondisional
var nama = "Febiya Jomy Pratiwi";
let Nim = 122450074;

// Menampilkan output ke konsol
console.log("Nama: ", nama);
console.log("Nim: " ,Nim);

// Menampilkan output ke halaman HTML
document.getElementById("result").innerHTML = `
  <p>Nama: <strong>${nama}</strong></p>
  <p>Usia: <strong>${Nim}</strong></p>
`;


//No_1

document.addEventListener("DOMContentLoaded", function() {
    const listInput = document.getElementById("list-input");
    const addButton = document.getElementById("masukkan-list-button");
    const listOutput = document.getElementById("list-output");
    const resultOutput = document.getElementById("result"); // Output ke HTML

    // Fungsi untuk memuat daftar dari localStorage
    function loadList() {
        const storedList = JSON.parse(localStorage.getItem("todoList")) || [];
        listOutput.innerHTML = ""; // Bersihkan daftar sebelum ditampilkan ulang
        storedList.forEach(item => addItemToDOM(item.text, item.completed));
        updateResultOutput(storedList);
    }

    // Fungsi untuk menyimpan daftar ke localStorage
    function saveList() {
        const items = [];
        document.querySelectorAll("#list-output li").forEach(li => {
            items.push({ 
                text: li.textContent.replace("✔️ ❌", "").trim(), 
                completed: li.classList.contains("completed") 
            });
        });
        localStorage.setItem("todoList", JSON.stringify(items));
        updateResultOutput(items);
    }

    // Fungsi untuk menambahkan item ke dalam DOM
    function addItemToDOM(text, completed = false) {
        const li = document.createElement("li");
        li.textContent = text;
        li.className = "p-2 border-b flex justify-between items-center";
        
        if (completed) li.classList.add("completed");

        // Tombol selesai (✔️)
        const doneButton = document.createElement("button");
        doneButton.textContent = "✔️";
        doneButton.className = "ml-2 text-green-500";
        doneButton.addEventListener("click", function() {
            li.classList.toggle("completed");
            saveList();
        });

        // Tombol hapus (❌)
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "❌";
        deleteButton.className = "ml-2 text-red-500";
        deleteButton.addEventListener("click", function() {
            li.remove();
            saveList();
        });

        li.appendChild(doneButton);
        li.appendChild(deleteButton);
        listOutput.appendChild(li);
        saveList();
    }

    // Event untuk menambahkan item baru
    addButton.addEventListener("click", function() {
        const text = listInput.value.trim();
        if (text !== "") {
            addItemToDOM(text);
            console.log(`List Baru Ditambahkan: ${text}`); // Output ke konsol
            listInput.value = ""; // Kosongkan input setelah ditambahkan
        } else {
            alert("Silakan masukkan item baru!");
        }
    });

    // Fungsi untuk menampilkan output ke HTML
    function updateResultOutput(items) {
        resultOutput.innerHTML = `<h3 class="text-lg font-bold">Daftar List:</h3>`;
        if (items.length === 0) {
            resultOutput.innerHTML += `<p class="text-gray-500">Belum ada daftar yang dimasukkan.</p>`;
        } else {
            resultOutput.innerHTML += `<ul class="list-disc pl-5">${items.map(item => 
                `<li class="${item.completed ? 'text-green-500' : ''}">${item.text} (${item.completed ? 'Selesai' : 'Belum Selesai'})</li>`
            ).join("")}</ul>`;
        }
        console.log("Daftar saat ini:", items); // Output ke konsol
    }

    // Memuat daftar saat halaman dibuka
    loadList();
});
