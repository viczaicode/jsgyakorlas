import { SZEMELYLISTA } from "./adat.js"
import { konsolraIr, listaOsszeallit, masiklistaOsszeallit } from "./fuggvenyek.js"
konsolraIr(SZEMELYLISTA)

//const a = 2
//a = 3
//const LISTA = ["Géza", "Jenő"]
//LISTA = [12,34,56,312]

//console.log(LISTA[1])

//LISTA[10] = "Béla"

//LISTA.push("Jakab") /* lista végére elhelyez egy elemet */
//LISTA.pop() /* Leveszi a lista utolsó elemét */
/* Egyszerű adatszerkezet esetén constal való deklarációból a változó értéke nem írható felül. 
    Összetett adatszerkezet esetén, mint pl. a lista és objektum const-al való deklaráláskor a lista memória címe
    nem változtatható meg, a lista értékei megváltoztathatóak, módosíthatom az elemeit, törölhetek a listából,
    adhatok hozzá új elemet*/ 
//console.log(LISTA)
//console.log(LISTA[5]);
/* Ismerőseim nyilvántartása */

/* Objektum: összetett adatszerkezet, amelyben az összetartozó adatokat együtt tudjuk kezelni(Tulajdonság érték párok) */
/* JSON OBJEKTUM */ 

//console.log(SZEMELYLISTA[1].tel);

/* Meg kell fogni azt a html elemet, amivel valamit tenni szeretnék */
const FELSELEM= document.getElementById("felsorolas")
//const FELSELEM = document.querySelector("#felsorolas") UGYANAZ MINT A FELSŐ
FELSELEM.innerHTML="<h1>Ügyesek vagyunk!</h1>"
FELSELEM.innerHTML+="Ide Jön a felsorolás" //A +AL HOZZAFUZUNK
FELSELEM.innerHTML+= listaOsszeallit(SZEMELYLISTA)

const MASIKFELSELEM = document.getElementById("kartyakontener")
MASIKFELSELEM.innerHTML+= masiklistaOsszeallit(SZEMELYLISTA)

