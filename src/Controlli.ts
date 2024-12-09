//1. if, else if, else
let eta: number = 25;

if (eta < 18) {
    console.log("Sei minorenne.");
} else if (eta >= 18 && eta < 65) {
    console.log("Sei un adulto.");
} else {
    console.log("Sei in pensione.");
}
//------------------------------------------------------------------

//2. switch
switch (colorePreferito) {
    case Colore.Rosso:
        console.log("Hai scelto il Rosso.");
        break;
    case Colore.Verde:
        console.log("Hai scelto il Verde.");
        break;
    case Colore.Blu:
        console.log("Hai scelto il Blu.");
        break;
    default:
        console.log("Colore non riconosciuto.");
}
//------------------------------------------------------------------

//3. Operatore ternario
let punteggio: number = 85;
let risultato: string = punteggio >= 60 ? "Promosso" : "Bocciato";
console.log(risultato); // Output: "Promosso"
//------------------------------------------------------------------

//4. type guards (Controllo del tipo)
//typeof:
valore = 42;

if (typeof valore === "number") {
    console.log("È un numero.");
} else if (typeof valore === "string") {
    console.log("È una stringa.");
}

//instanceof:
class Persona {
    nome: string;
    constructor(nome: string) {
        this.nome = nome;
    }
}

let mario = new Persona("Mario");

if (mario instanceof Persona) {
    console.log("È una persona.");
}
//------------------------------------------------------------------

//5. Pattern Matching con in
type Animale = { tipo: string; velocita: number };
type Auto = { marca: string; velocita: number };

let veicolo: Animale | Auto = { tipo: "ghepardo", velocita: 120 };

if ("tipo" in veicolo) {
    console.log(`È un animale di tipo ${veicolo.tipo}.`);
} else if ("marca" in veicolo) {
    //console.log(`È un'auto di marca ${veicolo.marca}.`); //ERRORE
}