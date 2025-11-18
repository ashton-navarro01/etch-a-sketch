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
            // Don't change colour if square is already coloured
            if(square.dataset.hovered === "true") return;
            
            const color = getRandomColour();
            square.style.backgroundColor = `${color}`
            square.dataset.hovered = "true";
        })

        // Add the square to the container
        container.appendChild(square);
    }
}

// Source - https://stackoverflow.com/a
// Posted by AKX
// Retrieved 2025-11-18, License - CC BY-SA 4.0
function getRandomColour() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return "rgb(" + r + "," + g + "," + b + ")";
}


function setupButtons(){
    const sizeBtn = document.getElementById("change-size-btn");
    sizeBtn.addEventListener('click', function(){
        while(true) {
            let input = prompt("How big do you want the grid to be (under 100)?");
            let size = Number(input);
            if(input == null) return;
            if(Number.isInteger(size) && size > 0 && size < 100) {
                generateGrid(size);
                return;
            } else {
                alert("Please enter a valid grid size.")
            };
        }
    })

    const resetBtn = document.getElementById("reset-btn");
    resetBtn.addEventListener('click', function(){
        const squares = document.querySelectorAll(".grid-square")
        squares.forEach(square => {
            square.style.backgroundColor = "white";
            square.dataset.hovered = "false";
        })
    });
}


generateGrid(16);
setupButtons();