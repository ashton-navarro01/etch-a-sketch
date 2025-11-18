function generateGrid(){
    const container = document.getElementById("block-container");
    for(let i = 0; i < 256; i++){
        // Create the square and add css styling to it
        let square = document.createElement("div");
        square.classList.add("grid-square")

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

generateGrid();