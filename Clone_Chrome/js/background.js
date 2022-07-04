const images = [
    "0.jpg",
    "1.jpg",
    "2.jpg"
];

const body = document.querySelector("body");

const chosenImage = images[Math.floor(Math.random() * images.length)];

document.addEventListener("DOMContentLoaded", paintImage);

function paintImage() {
    const backgroundImage = `url(img/${chosenImage})`
    backgroundImage.src = chosenImage;
    
    body.style.backgroundImage = backgroundImage;
}