const backgrounds = [
   "1.jpg", "2.jpg", "3.jpg", "4.jpg"
]

const background = backgrounds[Math.floor(Math.random() * backgrounds.length)];


const bgImage = document.createElement("img");
bgImage.src = `img/${background}`;
document.body.appendChild(bgImage);