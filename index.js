var randomNumber1=Math.floor(Math.random()*6)+1;
var randomdice="dice"+randomNumber1+".png";
var randomsource="./images/"+randomdice;
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src", randomsource);


var randomNumber2=Math.floor(Math.random()*6)+1;
var randomdice1="dice"+randomNumber2+".png";
var randomsource1="./images/"+randomdice1;
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src", randomsource1);

if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="Player1 wins!🏆";
}
else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML="Player2 wins!🏆";

}
else
{
    document.querySelector("h1").innerHTML="🏆DRAW!🏆";

}