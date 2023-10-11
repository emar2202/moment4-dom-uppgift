/*
Här lägger du din JavaScript-kod
*/
"use strict";

// Variabler
let textEl = document.getElementById("newtodo");
let newToDoBtnEl = document.getElementById("newtodobutton");
let messageEl = document.getElementById("message");
let toDoList = document.getElementById("todolist");
let clearBtn = document.getElementById("clearbutton");

// När sidan laddas in skriv ut lagrad data från web storage
document.onload = printStorage();

// Funktioner

// Kontrollera inmatad text
function checkItemText() {
  console.log("Kontrollerar inmatad text...");
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
