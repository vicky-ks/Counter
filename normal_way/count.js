let counter = document.getElementById("ch-c")
let rounds = document.getElementById("ch-r")
let upd = document.getElementById("save-El")
let count = 0
let r = 0

function incr(){
    count = count + 1;
    if(count == 108){
        count = 0;
        alert("round completed")
        r = r + 1;
    } 
    rounds.textContent = r; //innerText
counter.textContent = count;
}

function save(){
    upd.textContent += count + " - "
    counter.textContent = count = 0
}