/*
Här lägger du din JavaScript-kod
*/
"use strict";

// Variabler
let textEl = document.getElementById("newtodo");
let newTodoBtnEl = document.getElementById("newtodobutton");
let errorMessageEl = document.getElementById("message");
let todoListEl = document.getElementById("todolist");
let clearBtnEl = document.getElementById("clearbutton");

// När sidan laddas in initieras kod
document.onload = pageLoad();

// Händelshanterare

// När en användare skriver in text i inmatningsfältet körs funktionen checkItemText()
textEl.addEventListener("keyup", checkItemText);

// När en användare klickar på lägg till-knappen körs funktionen addItem()
newTodoBtnEl.addEventListener("click", addItem);

// Vid klick av enskild att göra-post ska den tas bort i listan
todoListEl.addEventListener("click", function (e) {
  e.target.remove();
});

// Funktioner

// Kod som initieras när sidan laddas in
function pageLoad() {
  //Lägg till-knappen är oklickbar när sidan laddas in
  newTodoBtnEl.disabled = true;

  // Rensa inmatningsfältet
  textEl.value = "";
}

// Kontrollera inmatad text
function checkItemText() {
  // Lagrar text från inmatningsfältet
  let userInput = textEl.value;

  // Kontrollerar om texten innehåller fler än fem tecken
  if (userInput.length < 5) {
    // Skriver ut ett felmeddelande ut på sidan
    errorMessageEl.innerHTML = "Texten innehåller mindre än fem tecken!";

    // Lägg till-knappen blir oklickbar
    newTodoBtnEl.disabled = true;
  } else {
    // Rensar eventuella felmeddelanden
    errorMessageEl.innerText = "";

    // Lägg till-knappen blir klickbar
    newTodoBtnEl.disabled = false;
  }
}

// Lägg till text i listan
function addItem() {
  // Spara inmatade tecken
  let userInput = textEl.value;

  // Skapa en artikel nod
  let node = document.createElement("article");

  // Skapa en text nod utfrån inmatade tecken
  let textNode = document.createTextNode(userInput);

  // Lägg till text i artikel noden
  node.appendChild(textNode);

  // Lägg till färdig text till listan
  todoListEl.appendChild(node);

  // Ta bort text ur inmatningsfältet
  textEl.value = "";
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
