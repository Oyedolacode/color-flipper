const colors = ["green", "red", "rgba(133,122,200)", 
"#f15025"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

//*Event listener for click events//*
btn.addEventListener("click", function () {
    console.log(document.body)

    //get a random number between 0-3[3]
const randomNumber = getRandomNumber();

document.body.style.backgroundColor = colors[randomNumber];
color.textContent = color[randomNumber];
});

function getRandomNumber  () {
    return Math.floor(Math.random() * colors.length);
}
