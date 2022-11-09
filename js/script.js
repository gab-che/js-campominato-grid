const gridGenerator = document.getElementById("grid_generator");

gridGenerator.addEventListener("click", function(){

    const difficulty = document.querySelector("[name='difficulty']");
    const difficultyValue = difficulty.value;
    
    createGrid(difficultyValue);
})

/**
 * @param {number} difficultyValue 100, 81 o 49
 * @return {}
 * Genera una griglia di 100, 81 o 49 caselle in un quadrato perfetto 
 */
function createGrid(difficultyValue){
    const gridContainer = document.querySelector(".grid_container");
}