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
            break
        // Difficoltà intermedia
        case "medium":
            cells_number = 81; // 9 * 9
            cols_number = 9;
            break
        // Difficoltà difficile
        case "hard":
            cells_number = 49;
            cols_number = 7; // 7 * 7
            break
    }

    // console.log(cells_number, cols_number);
    generate_grid(cells_number, cols_number)
    handleClick()

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



