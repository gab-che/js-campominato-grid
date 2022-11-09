const gridGenerator = document.getElementById("grid_generator");

gridGenerator.addEventListener("click", function(){

    const difficulty = document.querySelector("[name='difficulty']");
    const difficultyValue = parseInt(difficulty.value);
    
    createGrid(difficultyValue);
})

/**
 * @param {number} difficultyValue 100, 81 o 49
 * @return {}
 * Genera una griglia di 100, 81 o 49 caselle in un quadrato perfetto 
 */
function createGrid(difficultyValue){
    const gridContainer = document.querySelector(".grid_container");
    gridContainer.innerHTML = "";
    
    for (i = 0; i < difficultyValue; i++){
        const newCell = document.createElement("div");
        newCell.classList.add("grid_cell");
        newCell.style.width = `calc(100% / ${Math.sqrt(difficultyValue)})`;
        newCell.innerHTML = i + 1;

        newCell.addEventListener("click", function(){
            this.classList.toggle("bg-info");
        })
        gridContainer.append(newCell);
    }
}