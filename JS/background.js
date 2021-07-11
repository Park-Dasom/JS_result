const images = [
    "1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg"
];

const chosenImage = images[Math.floor(Math.random() * images.length)];
const body = document.querySelector("body");
const bgImg = document.createElement("img");

bgImg.src = `foto/${chosenImage}`;
bgImg.classList.add("bgImage");

document.body.prepend(bgImg);