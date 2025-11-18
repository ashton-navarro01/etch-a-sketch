function generateGrid(size){
    const container = document.getElementById("block-container");
    container.innerHTML = "";
    const squareSize = 900 / size;
    for(let i = 0; i < (size ** 2); i++){
        // Create the square and add css styling to it
        let square = document.createElement("div");
        square.classList.add("grid-square")

        square.style.width = `${squareSize}px`;

        square.addEventListener('mouseenter', function() {
            square.style.backgroundColor = "red"
        })

        square.addEventListener('mouseleave', function() {
            square.style.backgroundColor = "white"
        })

        // Add the square to the container
        container.appendChild(square);
    }
}

const sizeBtn = document.getElementById("change-size-btn");
sizeBtn.addEventListener('click', function(){
    while(true) {
        let input = prompt("How big do you want the grid to be (under 100)?");
        let size = Number(input);
        if(Number.isInteger(size) && size > 0 && size < 100) {
            generateGrid(size);
            return;
        } else {
            alert("Please enter a valid grid size.")
        };
    }
})

generateGrid(16);