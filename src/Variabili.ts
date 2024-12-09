//Specifica dei tipi
let messaggio: string = "Ciao mondo!";
let numero: number = 42;
let lista: number[] = [1, 2, 3];
let dati: any = { nome: "Mario", eta: 25 }; // qualsiasi tipo
let valore: string | number = "Può essere una stringa o un numero";
//------------------------------------------------------------------

//Inferenza dei tipi
let auto = "Fiat"; // TypeScript deduce che `auto` è di tipo string
//------------------------------------------------------------------

//Tipi avanzati
//tuple Array con tipi predefiniti:
let coppia: [string, number] = ["Mario", 30];

//Enum Per definire insiemi di valori costanti:
enum Colore { Rosso, Verde, Blu }
let colorePreferito: Colore = Colore.Verde;

//Oggetti tipizzati Specificando la struttura di un oggetto:
let persona: { nome: string; eta: number } = { nome: "Mario", eta: 40 };