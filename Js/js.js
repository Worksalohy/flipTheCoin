const coinField = document.querySelector(".coin-field");
const imageTails = document.createElement('img');
imageTails.src = "images/tails.svg";
const imageHeads = document.createElement('img');
imageHeads.src = "images/heads.svg";

let elements = document.querySelectorAll(".coin-field, .flipCoin");

elements.forEach((element)=>{
    element.addEventListener('click', ()=>{
        document.querySelector("#result").textContent = Math.random() < 0.5 ? "Heads" : "Tails";
    
        if(document.querySelector("#result").textContent == "Tails"){
            coinField.innerHTML = "";
            coinField.appendChild(imageTails);
        }else{
            coinField.innerHTML = "";
            coinField.appendChild(imageHeads);
        }
    });
});