let messageEl = document.getElementById("message")
let suM = document.getElementById("sum")
let cardS = document.getElementById("cards")
let hasBlackJack = false
let isALive = true
let sum = 0
let text = ""
let cards = []
let player = document.getElementById("play")
let started=false
let rest = document.getElementById("res")
let plinfo = {
    name : "Sathvik Bhai",
    chips : 69
}

function getrandomCard() {
    z = Math.floor(Math.random() * 13) + 1
    if (z === 1) {
        return 11
    }
    else if (z > 10) {
        return 10;
    }
    else {
        return z;
    }
}
if(started==false){
  rest.style.display=none
}

function startGame() {
    if (isALive === true && hasBlackJack === false && started===false) {
        cards.push(getrandomCard())
        cards.push(getrandomCard())
        started=true
        player.textContent = plinfo.name + " :  $" + plinfo.chips 
        renderGame()
    }

}

function renderGame() {
    let s = ""
    for (let i = 0; i < cards.length; i++) {
        s += cards[i] + " "
    }
    if(sum==0){
        for (let i = 0; i < cards.length; i++) {
            sum += cards[i]
        }

    }
    if (sum < 21) {
        text = "Do you want to draw a new card? 🙂"
    } else if (sum === 21) {
        text = "Congratulations! " +plinfo.name+ " You've got Blackjack! 🥳"
        hasBlackJack = true
    } else {
        text = "You're out of the game! 😭"
        isALive = false
    }
    messageEl.textContent = text
    cardS.textContent = s
    x = "Sum : " + sum
    suM.textContent = x
    console.log(text)
}
function newCard() {
    if (isALive === true && hasBlackJack == false && started==true) {
        let card = getrandomCard()
        sum += card
        cards.push(card)
        console.log(cards)
        renderGame()
    }

}
function restart(){
    isALive=true
    cards=[]
    sum=0
    hasBlackJack=false
    started=false
    renderGame()
}