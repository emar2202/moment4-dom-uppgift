/*
Här lägger du din JavaScript-kod
*/
"use strict";

// Variabler
let textEl = document.getElementById("newtodo");
let newToDoBtnEl = document.getElementById("newtodobutton");
let errorMessageEl = document.getElementById("message");
let toDoList = document.getElementById("todolist");
let clearBtn = document.getElementById("clearbutton");

// När sidan laddas in initieras kod
document.onload = pageLoad();

// Händelshanterare

// När en användare skriver in text i inmatningsfältet körs funktionen checkItemText()
textEl.addEventListener("keyup", checkItemText);
// När en användare klickar på lägg till-knappen körs funktionen addItem()
newToDoBtnEl.addEventListener("click", addItem);

// Funktioner

// Kod som initieras när sidan laddas in
function pageLoad() {
  //Lägg till-knappen är oklickbar när sidan laddas in
  newToDoBtnEl.disabled = true;
}

// Kontrollera inmatad text
function checkItemText() {
  // Lagrar text från inmatningsfältet
  let input = textEl.value;
  // Kontrollerar om texten innehåller fler än fem tecken
  if (input.length < 5) {
    // Skriver ut ett felmeddelande ut på sidan
    errorMessageEl.innerHTML = "Texten innehåller mindre än fem tecken!";
    // Lägg till-knappen blir oklickbar
    newToDoBtnEl.disabled = true;
  } else {
    // Rrensar eventuella felmeddelanden
    errorMessageEl.innerText = "";
    // Lägg till-knappen blir klickbar
    newToDoBtnEl.disabled = false;
  }
}

// Lägg till text i listan
function addItem() {
  console.log("Lägger till text i listan...");
}

// Ta bort från listan
function deleteItem() {
  console.log("Tar bort en sak från listan...");
}

// Lagra inmatning till web storage
function storeItem() {
  console.log("Lagrar inmatning till web storage...");
}

// Rensa inmatning från web storage
function clearItem() {
  console.log("Rensar inmatning från web storage...");
}

// Skriv ut lagrad data från web storage
function printStorage() {
  console.log("Skriver ut lagrad data från web storage...");
}
