const container = document.querySelector('#container');

changeSize(16);

const button = document.querySelector('#size');
button.addEventListener("click", () => {
    let size = prompt("Enter number of squares per size (max 100)");
    changeSize(size);
});

function changeSize(size){
    clearGrid();
    const maxDim = Math.floor(900 / size);
    for (let i = 0; i < size; i++){
        for (let j = 0; j < size; j++){
            const square = document.createElement("div");
            square.classList.add("square");
            square.style.height = maxDim + "px";
            square.style.width = maxDim + "px";
            container.appendChild(square);
        }
    }

    const squares = document.querySelectorAll(".square");
    squares.forEach((square) => {
        square.addEventListener("mouseover", () => {
            square.style.backgroundColor = "pink";
        });
    });
}

function clearGrid(){
    const squares = document.querySelectorAll(".square");
    squares.forEach((square) => {
        container.removeChild(square);
    });
}