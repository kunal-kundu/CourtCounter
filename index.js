let score = document.getElementById("score-el")
let scoreB = document.getElementById("score-wl")
let count = 0 
let countt = 0

function INCREMENT1(){
    count++
    score.innerText = count
}
function INCREMENT2(){
    count+=2
    score.innerText = count
}
function INCREMENT3(){
    count+=3
    score.innerText = count
}


function INCREMENTT1(){
    countt++
    scoreB.innerText = countt
}
function INCREMENTT2(){
    countt+=2
    scoreB.innerText = countt
}
function INCREMENTT3(){
    countt+=3
    scoreB.innerText = countt
}
