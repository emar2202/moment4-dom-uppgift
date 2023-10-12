/*
Här lägger du din JavaScript-kod
*/
"use strict";

// Variabler
let tasks = [];
let textEl = document.getElementById("newtodo");
let newTodoBtnEl = document.getElementById("newtodobutton");
let errorMessageEl = document.getElementById("message");
let todoListEl = document.getElementById("todolist");
let clearBtnEl = document.getElementById("clearbutton");

// När sidan laddas in körs start-kod
document.onload = initPage();

// Händelshanterare

// När en användare skriver in text i inmatningsfältet körs funktionen checkItemText()
textEl.addEventListener("keyup", checkItemText);

// När en användare klickar på lägg till-knappen körs funktionen addTask()
newTodoBtnEl.addEventListener("click", addTask);

// Vid klick av enskild uppgift ska den tas bort från att göra-listan
todoListEl.addEventListener("click", deleteTask);

// När en användare klickar på rensa-knappen tas alla uppgifter bort
clearBtnEl.addEventListener("click", clearTask);

// Funktioner

// Kod som initieras när sidan laddas in
function initPage() {
  //Lägg till-knappen är oklickbar när sidan laddas in
  newTodoBtnEl.disabled = true;

  // Rensa inmatningsfältet
  textEl.value = "";

  // Skriver ut lagrade uppgifter
  loadTasks();
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

function createTask(taskName) {
  // Skapa en artikel nod
  let node = document.createElement("article");

  // Skapa en text nod utfrån inmatade tecken
  let textNode = document.createTextNode(taskName);

  // Lägg till text i artikel noden
  node.appendChild(textNode);

  // Lägg till en klass till varje uppgift
  node.className = "task";

  // Lägg till färdig text till listan
  todoListEl.appendChild(node);
}

// Lägg till uppgift i listan
function addTask() {
  // Spara tecken från inmatningsrutan
  let userInput = textEl.value;

  // Skapar ett element till listan
  createTask(userInput);
  // Anropar funktion som sparar uppgifter som lagts till i listan
  saveTasks();

  // Lägg till-knappen avaktiveras varje gång en uppgift har lagts till
  newTodoBtnEl.disabled = true;

  // Ta bort text ur inmatningsfältet
  textEl.value = "";
}

// Ta bort från listan
function deleteTask(e) {
  // Ta bort den uppgiften som blev klickad på i listan
  e.target.remove();

  //Spara de kvarstående uppgifterna i listan
  saveTasks();
}

// Lagra inmatning till web storage
function saveTasks() {
  //Skapa en tom lista
  let taskList = [];

  // Hämtar alla uppgifter i att göra-listan som en lista
  let tasks = document.getElementsByClassName("task");

  //Lägg till uppgifter i listan
  for (let i = 0; i < tasks.length; i++) {
    taskList.push(tasks[i].innerHTML);
  }

  // Konvertera lista med uppgifter till en sträng
  let listToJson = JSON.stringify(taskList);

  // Sparar uppgifter i samband med att de lagts till i listan
  localStorage.setItem("tasks", listToJson);
}

// Rensar inmatning från listan och data från web storage
function clearTask() {
  todoListEl.innerHTML = "";
  localStorage.clear();
}

// Skriver ut lagrad data från web storage
function loadTasks() {
  // Hämta in lagrad data och konvertera till en lista
  let storedTasks = localStorage.getItem("tasks");
  // konvertera textsträngen till en lista
  let strToArray = JSON.parse(storedTasks);

  // Om uppgifter finns i lagring ladda in dem på sidan
  if (strToArray != null) {
    // Skapa existerande uppgfiter som finns i web storage
    for (let i = 0; i < strToArray.length; i++) {
      // Skapar upgift till listan
      createTask(strToArray[i]);
    }
  }
}
