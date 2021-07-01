const images = [
"0.jpg",
"1.jpg",
"2.jpg",
];

const chosenImage = images[Math.floor(Math.random() * images.length)];
// const bgImage = document.createElement("img");
// bgImage.src = `img/${chosenImage}`;
// document.body.style.background

function changeBackground(img) {
    document.body.style.background = `url('${img}')`;
    document.body.style.background.repeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
 }
 
 window.addEventListener("load",function() { changeBackground(`img/${chosenImage}`) });