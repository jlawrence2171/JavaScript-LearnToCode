"use strict";

window.onload = function () {
    const findAgeBtn = document.getElementById("findAgeBtn");
    findAgeBtn.onclick = findAgeBtnClicked;
}

function findAgeBtnClicked() {

    const yearBornField = document.getElementById("yearBorn");
    let yearBorn = Number(yearBornField.value);

    let today = new Date();
    let currentYear = today.getFullYear();

    let age = currentYear - yearBorn;

    const ageField = document.getElementById("age");
    ageField.value = age;

}aa