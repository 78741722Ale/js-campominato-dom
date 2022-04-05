// Consegna

/* 
L'utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, 
in cui ogni cella contiene un numero tra quelli compresi in un range:

con difficoltà 1 => tra 1 e 100 (10)
con difficoltà 2 => tra 1 e 81 (9)
con difficoltà 3 => tra 1 e 49 (7)

Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro.
*/

// Intercetta l'invio del form 
document.querySelector('form').addEventListener('submit', function (event) {
    // Previene il comportamento di default (refresh pagina)
    event.preventDefault();
    // prendiamo dall'evento il livello ed estraiamo il valore
    const level = event.target[0].value;
    // loggiamo il livello
    // console.log(level);

    // usiamo switch case strutturando la griglia
    let cells_number, cols_number;

    switch (level) {
        // Difficoltà facile
        case "easy":
            cells_number = 100; // 10 * 10
            cols_number = 10;
            // Evoco funzione con 100 numeri random
            break
        // Difficoltà intermedia 
        case "medium":
            cells_number = 81; // 9 * 9
            cols_number = 9;
            // Evoco funzione con 81 numeri random
            break
        // Difficoltà difficile
        case "hard":
            cells_number = 49;
            cols_number = 7; // 7 * 7
            // Evoco funzione con 81 numeri random
            break
    }

    // console.log(cells_number, cols_number);
    generate_grid(cells_number, cols_number)
    handleClick()

    // Logghiamo in console

})

/**
 *  generate the game grid (genera la griglia di gioco)
 * 
 *  cells_number = 100 cols_number = 10 
 * 
 * @param {number} cells_number  numero celle da generare
 * @param {number} cols_number  numero di colonne e righe
 */

// generiamo la griglia
function generate_grid(cells_number, cols_number) {
    // selezioniamo elemento dom interessato (in questo caso cells diretto figlio di main)
    const gameAreaElement = document.querySelector('main .row');
    // Pulire area di gioco
    gameAreaElement.innerHTML = "";


    // Creazione elemento della Dom
    for (let i = 1; i <= cells_number; i++) {
        // creare l'elemento della dom (cell) da inserire nell'area di gioco
        const cell = document.createElement("div")
        // Appendiamo alla cella il numero progressivo generato nel ciclo
        cell.append(i)
        cell.classList.add("cell")
        // dimensionare la cella in base alla misura della griglia
        cell.style.width = `calc(100% / ${cols_number})`
        // appendere la cella all'area di gioco
        gameAreaElement.append(cell);
    }
}

// CREARE UN EVENT LISTENER PER CIASCUNA CELLA DELL'AREA DI GIOCO

function handleClick() {
    // 1.  Seleziono tutte le celle (querySelectorAll). Le celle necessarie della griglia
    const cells = document.querySelectorAll('.cell')
    console.log(cells);
    // 2. Ciclo for per gli elementi della dom
    for (let i = 0; i < cells.length; i++) {
        const cellElement = cells[i];
        // console.log(cellElement);
        // 3. Attacchiamo l'event listener all'elemento della DOM (cell).
        cellElement.addEventListener('click', function () {
            // su che elemento ho cliccato? lo vedo col dis
            // console.log(this);
            // 4. evidenziare la cella di azzurro. (metodo stile inline)
            // this.style.backgroundColor = "cornflowerblue"
            // 4. evidenziare la cella di azzurro. (metodo richiamo classe nel css)
            this.classList.add("selected")
        });
    }
}

// MILESTONE 2

/* 
Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.
I numeri nella lista delle bombe non possono essere duplicati.

In seguito l'utente clicca su una cella:
se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba
la cella si colora di rosso e la partita termina,

altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
La partita termina quando:

il giocatore clicca su una bomba
o raggiunge il numero massimo possibile di numeri consentiti.

Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.
*/

// Prima funzione

console.log("numeri random per difficoltà 100");
function getRandom100() {
    // Array Vuoto
    const arrayNumbers = [];
    // Costante i
    let i = 1;
    // Avvio Ciclo While
    while (i <= 16) {
        let risultato = parseInt(Math.floor(Math.random() * 100));    
        // Logghiamo in console
        console.log(risultato);
        // Pushiamo risultato dentro ad array numbers
        arrayNumbers.push(risultato);
        // N Volte da ripetere risultato
        i++
    }
    let risultato = arrayNumbers;
    return risultato;
}

let risultato = getRandom100()
console.log(risultato);

// Seconda funzione
console.log("numeri random per difficoltà 81");
function getRandom81() {
    // Array Vuoto
    const arrayNumbers = [];
    // Costante i
    let i = 1;
    // Avvio Ciclo While
    while (i <= 16) {
        let risultato = parseInt(Math.floor(Math.random() * 81));
        // Logghiamo in console
        console.log(risultato);
        // Pushiamo risultato dentro ad array numbers
        arrayNumbers.push(risultato);
        // N Volte da ripetere risultato
        i++
    }
    let risultato = arrayNumbers;
    return risultato;
}

risultato = getRandom81()
console.log(risultato);

// Terza Funzione
console.log("numeri random per difficoltà 49");
function getRandom49() {
    // Array Vuoto
    const arrayNumbers = [];
    // Costante i
    let i = 1;
    // Avvio Ciclo While
    while (i <= 16) {
        let risultato = parseInt(Math.floor(Math.random() * 49));
        // Logghiamo in console
        console.log(risultato);
        // Pushiamo risultato dentro ad array numbers
        arrayNumbers.push(risultato);
        // N Volte da ripetere risultato
        i++
    }
    let risultato = arrayNumbers;
    return risultato;
}

risultato = getRandom49()
console.log(risultato);

