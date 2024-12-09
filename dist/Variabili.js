"use strict";
//Specifica dei tipi
let messaggio = "Ciao mondo!";
let numero = 42;
let lista = [1, 2, 3];
let dati = { nome: "Mario", eta: 25 }; // qualsiasi tipo
let valore = "Può essere una stringa o un numero";
//------------------------------------------------------------------
//Inferenza dei tipi
let auto = "Fiat"; // TypeScript deduce che `auto` è di tipo string
//------------------------------------------------------------------
//Tipi avanzati
//tuple Array con tipi predefiniti:
let coppia = ["Mario", 30];
//Enum Per definire insiemi di valori costanti:
var Colore;
(function (Colore) {
    Colore[Colore["Rosso"] = 0] = "Rosso";
    Colore[Colore["Verde"] = 1] = "Verde";
    Colore[Colore["Blu"] = 2] = "Blu";
})(Colore || (Colore = {}));
let colorePreferito = Colore.Verde;
//Oggetti tipizzati Specificando la struttura di un oggetto:
let persona = { nome: "Mario", eta: 40 };
