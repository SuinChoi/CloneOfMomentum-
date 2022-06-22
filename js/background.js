// array of background src
const backgrounds = ["1.jpg", "2.jpg", "3.jpg", "4.jpg"]

// radomly selected background src 
const background = backgrounds[Math.floor(Math.random() * backgrounds.length)];


const bgImage = document.createElement("img");      // make a img tag
bgImage.src = `img/${background}`;                  // set img src
document.body.appendChild(bgImage);                 // append to html