let game = true;
const grid = document.getElementById("grid");
let squares = [];



for (let i=0; i <64 ;i++){
    squares.push(document.createElement("div"));
    grid.appendChild(squares[i]);
    squares[i].addEventListener("click", color(i));
    function color(i){
        squares[i].style.border="2px solid red";
        return
    }

}




// while(game==true){

//     for (let i=0; i <64 ;i++){
//         squares[i].addEventListener("click", color)
//       


// }

// for(let i=0; i <4 ;i++){
//     grid.appendChild(square)
// }