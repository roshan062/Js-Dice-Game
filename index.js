var randomNumber = Math.floor(Math.random() * 6) +1;
var randomImage = "dice" + randomNumber + ".png";
document.querySelectorAll("img")[0].setAttribute("src", randomImage);

var randomNumber2 = Math.floor(Math.random()*6) +1;
var randomImage2 = "dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomImage2);

if(randomNumber>randomNumber2)
{
document.querySelector(".winnerline").innerHTML = "1st Player Won..." 
} 
else if (randomNumber2>randomNumber)
{
    document.querySelector(".winnerline").innerHTML = "2nd Player Won..."
}

else 
document.querySelector(".winnerline").innerHTML = "Draw !";

