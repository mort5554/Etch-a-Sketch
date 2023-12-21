
function boardSize(size){
const board = document.querySelector(".board");
board.style.gridTemplateRows = `repeat(${size}, 1fr)`;
board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;

for(let i = 0; i<size*size; i++){
    let heks = document.createElement("div");
    heks.setAttribute("id", "heks")
    heks.style.backgroundColor = "blue";
    board.insertAdjacentElement("beforeend", heks) ;
}
}
boardSize(16)

function changeBoardSize(){
const boardWidthInput = document.querySelector("#boardWidthInput")
const btnChangeBoardSize = document.querySelector("#btnChangeBoardSize")
btnChangeBoardSize.addEventListener("click", () =>{
    let size = boardWidthInput.value
    if(size >=2 || size <= 100){
        boardSize(size)
    }
    else{
        alert("ERROR")
        boardWidthInput.value = "ERROR"
    }
    //boardWidthInput.value = ""
})   
}
changeBoardSize()

function changeColor(changeColor){
    const heks = document.querySelectorAll("heks")
    const color = document.querySelector("color")
    let setColor = color.value
    console.log(setColor)
    heks.addEventListener("click",() => {
        console.log("ds")
        heks.style.backgroundColor = "black"
    })
}
