let userInput = document.getElementById("userInput");

let addBtn = document.getElementById("add-btn");
let subBtn = document.getElementById("sub-btn");
let mulBtn = document.getElementById("mul-btn");
let divBtn = document.getElementById("div-btn");

let currentDetails = document.getElementById("currentCalculation");
let outResult = document.getElementById("result");

function outputResult(result, text){
    currentDetails.textContent= text;
    outResult.textContent=result;
}
