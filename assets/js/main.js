var red = 0;
var green = 0;
var blue = 0;
var box = document.getElementsByClassName("color");
console.log(box)
var randomBox = 0;
window.onload = generate();
function generate() {
    randomBox = Math.floor(Math.random() * 5);
    console.log("random box is : " + randomBox)
    red = randomNum();
    green = randomNum();
    blue = randomNum();
    document.getElementById("geuss-color").innerHTML = `Guess what color RGB(${red}, ${green}, ${blue}) is:`;
    box[randomBox].style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    for (var i = 0; i < 5; i++) {
        console.log("A")
        if (i != randomBox) {
            box[i].style.backgroundColor = `rgb(${randomNum()}, ${randomNum()}, ${randomNum()})`;
        }
    }
}
function reload() {
    location.reload();
}
box[randomBox].addEventListener("click", () => {
    document.getElementById("result").innerHTML = "Super!!! ";
})
for (var j = 0; j < 5; j++) {
    if (j != randomBox) {
        box[j].addEventListener("click", () => {
            document.getElementById("result").innerHTML = "Wrong geuss, try again!!! ";
        })
    }
}
function randomNum() {
    var randomNumColor = Math.floor(Math.random() * 255);
    return randomNumColor;
}
