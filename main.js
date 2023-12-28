function boardSize(size){
const board = document.querySelector(".board");
board.style.gridTemplateRows = `repeat(${size}, 1fr)`;
board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;

for(let i = 0; i<size*size; i++){
    let heks = document.createElement("div");
//    draw(heks)
    drawBlackColor(heks)
    drawErase(heks)
    drawRGBColor(heks)
    chooseColor(heks)
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

function drawErase(heks){
    const erase = document.querySelector("#btnErase")
    erase.addEventListener("click", () => {
        const color = "white"
        heks.addEventListener("click", () => {
            heks.style.backgroundColor = color
        })
    })
}

function drawBlackColor(heks){
    const black = document.querySelector("#btnBlackColor")
    black.addEventListener("click", () => {
        const color = "black"
        heks.addEventListener("click", () => {
            heks.style.backgroundColor = color
        })
    })
}

function drawRGBColor(heks){
    const RGBColor = document.querySelector("#btnRGBColor")
    RGBColor.addEventListener("click", () => {
        const R = Math.floor(Math.random() * 255)
        const G = Math.floor(Math.random() * 255)
        const B = Math.floor(Math.random() * 255)
        heks.addEventListener("click", () => {
            heks.style.backgroundColor = `rgb(${R}, ${G}, ${B})`
        })
    })
}
function chooseColor(heks){
    const colorChosen = document.querySelector("#chooseColor")
    const choosenColor = document.querySelector("#choosenColor")
colorChosen.addEventListener("input", () => {
    let setColor = colorChosen.value
    console.log(colorChosen.value)
        choosenColor.addEventListener("click", () => {
            heks.addEventListener("click", () => {
            heks.style.backgroundColor = `${setColor}`
            console.log(setColor)
        })
    })
})
}