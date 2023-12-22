function boardSize(size){
const board = document.querySelector(".board");
board.style.gridTemplateRows = `repeat(${size}, 1fr)`;
board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;

for(let i = 0; i<size*size; i++){
    let heks = document.createElement("div");
    draw(heks)
    heks.style.backgroundColor = "white";
    board.insertAdjacentElement("beforeend", heks) ;
}

}
boardSize(16)

function changeBoardSize(size){
const boardWidthInput = document.querySelector("#boardWidthInput")
const btnChangeBoardSize = document.querySelector("#btnChangeBoardSize")
btnChangeBoardSize.addEventListener("click", () =>{
    let size = boardWidthInput.value
    if(size >=2 && size <= 100){
        boardSize(size)
    }
    else{
        alert("ERROR - Board out of range")
        boardWidthInput.value = ""
    }
})   
}
changeBoardSize()

function draw(heks){
    heks.addEventListener("click", () => {
        //changeColor(setColor)
        heks.style.backgroundColor = "black"
    })    
}

/*function changeColor(color){
    const colorChosen = document.querySelector("color")
    colorChosen.addEventListener("input", () => {
        let setColor = color.value
        console.log(color.value)
    })
    /*color.addEventListener(
        "input",
        (event) => {
          color.value
        },
        false,
      );

}*/