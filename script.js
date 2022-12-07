let game = true;
const grid = document.getElementById("grid");
const eight = document.getElementById("8x8");
const sixteen = document.getElementById("16x16");
const thirtytwo = document.getElementById("32x32");

function columnNumber(number){
    let columns = "";
    let squares = [];
    grid.innerHTML = '';

    for (let i=0; i <number ;i++){
       columns+="1fr "
    }

    document.getElementById("grid").style.gridTemplateColumns=columns;

    for (let i=0; i <number*number ;i++){
        squares.push(document.createElement("div"));
        grid.appendChild(squares[i]);
        squares[i].addEventListener("mouseover",function color(){
            squares[i].style.background="black";
        },false);
       
    
    }


}

columnNumber(16)

// function buttonClick(){

// }




eight.addEventListener("click", function eight(){
    columnNumber(8);
},false);

sixteen.addEventListener("click", function eight(){
    columnNumber(16);
},false);
thirtytwo.addEventListener("click", function eight(){
    columnNumber(32);
},false);

// while(game==true){

//     for (let i=0; i <64 ;i++){
//         squares[i].addEventListener("click", color)
//       


// }

// for(let i=0; i <4 ;i++){
//     grid.appendChild(square)
// }