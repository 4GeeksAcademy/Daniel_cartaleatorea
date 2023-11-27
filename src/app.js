/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  //console.log("Hello Rigo from the console!");
  let palos = ["♦", "♥", "♠", "♣"];
  let numeros = [2, 3, 4, 5, 6, 7, 8, 9, "A", "J", "K", "Q"];
  let palosRamdom = palos[Math.floor(Math.random() * palos.length)];
  let numerosRamdom = numeros[Math.floor(Math.random() * numeros.length)];
  console.log(palosRamdom, numerosRamdom);
  document.getElementById("paloarriba").innerHTML = palosRamdom;
  document.getElementById("paloabajo").innerHTML = palosRamdom;
  document.getElementById("numero").innerHTML = numerosRamdom;
  if (palosRamdom == "♥" || palosRamdom == "♦") {
    document.getElementById("paloarriba").style.color = "red";
    document.getElementById("paloabajo").style.color = "red";
  }
};
