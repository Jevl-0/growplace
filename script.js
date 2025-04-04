const canvas = document.getElementById("rplaceCanvas");
const ctx = canvas.getContext("2d");

// Canvas üzerine çizim yapabilmek için renk seçimi
let currentColor = 'red';

// Renk seçimi
const colors = document.querySelectorAll('.color');
colors.forEach(color => {
    color.addEventListener('click', () => {
        currentColor = color.style.backgroundColor;
    });
});

// Kullanıcı tuvale tıklayarak bir blok eklesin
canvas.addEventListener('click', (e) => {
    const x = e.offsetX;
    const y = e.offsetY;

    // Blok ekleme (her tıklamada küçük bir kare)
    ctx.fillStyle = currentColor;
    ctx.fillRect(x - 10, y - 10, 20, 20);  // 20x20 boyutunda blok
});
