
const year = "23"

let userName = prompt("inserisci: nome");

let userLastName = prompt("inserisci: cognome");

let color = prompt("Qual'è il tuo colore preferito?");


document.getElementById("nome").innerHTML= (userName);
document.getElementById("cognome").innerHTML= (userLastName);
document.getElementById("colore_preferito").innerHTML= (color);




document.getElementById("password_creation").innerHTML="La tua password temporane è: ";







document.getElementById("password").innerHTML=(userName + userLastName + color + year);
