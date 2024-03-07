window.onload = generateSoal;

function generateSoal() {
    angka1 = Math.floor(Math.random() * 50);
    angka2 = Math.floor(Math.random() * 50);
    hasil = angka1 * angka2;
    document.querySelector('h4').innerHTML = `Hasil dari ${angka1} X ${angka2} = `;
    document.querySelector('#jawaban').value = '';
}

function cekJawaban() {
    let jawaban = document.querySelector('input').value;
    if (parseInt(jawaban) === hasil) {
        alert('Jawaban Benar');
    } else {
        alert('Jawaban Salah');
    }
}