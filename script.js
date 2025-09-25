function updateJam() {
    const sekarang = new Date();
    let jam = sekarang.getHours();
    let menit = sekarang.getMinutes();
    let detik = sekarang.getSeconds();

    // Format 12 jam
    const ampm = jam >= 12 ? "PM" : "AM";
    jam = jam % 12;
    jam = jam ? jam : 12;

    // Tambahkan nol
    jam = jam < 10 ? "0" + jam : jam;
    menit = menit < 10 ? "0" + menit : menit;
    detik = detik < 10 ? "0" + detik : detik;

    const jamDiv = document.getElementById("jam");
    jamDiv.textContent = `${jam}:${menit}:${detik} ${ampm}`;

    // Warna neon berganti setiap detik
    const warna = [
        {r:0, g:255, b:255},   // biru cyan
        {r:57, g:255, b:20},   // hijau stabilo
        {r:255, g:0, b:255},   // pink
        {r:255, g:255, b:0}    // kuning
    ];

    // Pilih warna berdasarkan detik
    const index = detik % warna.length;
    const c = warna[index];

    jamDiv.style.color = `rgb(${c.r},${c.g},${c.b})`;
    jamDiv.style.boxShadow = `
        0 0 30px rgb(${c.r},${c.g},${c.b}),
        0 0 60px rgb(${c.r},${c.g},${c.b}),
        0 0 90px rgb(${c.r},${c.g},${c.b}),
        0 0 120px rgb(${c.r},${c.g},${c.b})
    `;

    // Background tetap gelap
    document.body.style.backgroundColor = "#000";
}

// Update setiap detik
setInterval(updateJam, 1000);
updateJam();
