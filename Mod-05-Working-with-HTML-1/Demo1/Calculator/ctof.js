"use strict";
window.onload = function () {
    const findDegreeBtn = document.getElementById("findDegreeBtn");
    findDegreeBtn.onclick = findDegreeBtnClicked;
}
function findDegreeBtnClicked() {
    const inputDegreeField = document.getElementById("inputDegree");
    let inputDegree = Number(inputDegreeField.value);

    let fahrenheit  =  (inputDegree * 1.8) + 32;
    
    const outputDegreeField = document.getElementById("outputDegree");
    outputDegreeField.value = fahrenheit;

    
}
