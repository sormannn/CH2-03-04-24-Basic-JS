// Meminta pengguna untuk memasukkan nama mereka
var nama = prompt("Siapa namamu?");

// Meminta pengguna untuk memasukkan apakah mereka ingin masuk universitas (Y untuk iya)
var univwish = prompt("Apakah ingin masuk universitas? Ketik 'Y' untuk iya");

// Konversi input ke huruf besar untuk memastikan kemungkinan jawaban 'Y' dapat diakomodasi
univwish = univwish.toUpperCase();

// Memeriksa apakah jawaban pengguna adalah 'Y'
if (univwish === 'Y') {
    // Jika jawabannya 'Y', maka kita menghasilkan kemungkinan secara acak dan menampilkannya
    var nilaiSMA = 0;
    var studentWish = prompt("Berapa nilai akhir SMA/SMK mu?");
    nilaiSMA = parseInt(studentWish);

    if (nilaiSMA < 30) {
        alert("Tidak mungkin masuk universitas.");
    } else if (nilaiSMA < 50) {
        var chanceGetUniv = Math.random() * 100; // Menghasilkan nilai acak antara 0 dan 100
        chanceGetUniv = Math.floor(chanceGetUniv); // Memastikan nilainya integer

        if (chanceGetUniv < 50) {
            alert("Hmm, kemungkinan kamu " + nama + " kecil masuk UNIV.");
        } else {
            alert("Hmm, kemungkinan kamu " + nama + " bisa masuk UNIV.");
        }
    } else {
        var chanceGetUniv = Math.random() * 100; // Menghasilkan nilai acak antara 0 dan 100
        chanceGetUniv = Math.floor(chanceGetUniv); // Memastikan nilainya integer

        if ((chanceGetUniv > 70 && nilaiSMA > 60) || nilaiSMA > 80) {
            alert("Hei " + nama + ", pasti masuk UNIV dengan nilai SMA " + nilaiSMA + " mu yang besar itu.");
        } else if (chanceGetUniv > 70) {
            alert("Hei " + nama + ", pasti masuk UNIV dengan nilai SMA " + nilaiSMA + " mu yang besar itu.");
        } else {
            alert("Halo, " + nama + "! Kamu tidak ingin masuk universitas. Selamat berjalan!");
        }
    }
} else {
    // Jika jawabannya bukan 'Y', maka kita memberikan respons sesuai
    alert("Halo, " + nama + "! Kamu tidak ingin masuk universitas. Selamat berjalan!");
}
