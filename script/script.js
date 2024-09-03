console.log(`JS OK`);

// Definizione dei dati
const tableName = "VIP Table";
const guests = ['Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo', 'Georgina Rodriguez', 'Chiara Ferragni', 'George Clooney', 'Amal Clooney', 'Fedez', 'Amadeus', 'Fiorello'];

// Creazione della lista dei segnaposto
const placecards = guests.map((guest, index) => ({
    tableName: tableName,
    guestName: guest,
    place: index + 1
}));

// Funzione per creare l'elemento HTML per un segnaposto
function createPlacecardElement(placecard) {
    const element = document.createElement('div');
    element.classList.add('placecard');
    element.innerHTML = `
        <p><strong>Table:</strong> ${placecard.tableName}</p>
        <p><strong>Guest:</strong> ${placecard.guestName}</p>
        <p><strong>Seat:</strong> ${placecard.place}</p>
    `;
    return element;
}

// Creazione di un contenitore per i segnaposti
const container = document.createElement('div');
container.id = 'placecard-container';
document.body.appendChild(container);

// Aggiunta dei segnaposti al contenitore
placecards.forEach((placecard, index) => {
    const placecardElement = createPlacecardElement(placecard);
    container.appendChild(placecardElement);

    // Aggiunge un div di interruzione ogni 4 elementi
    if ((index + 1) % 4 === 0) {
        const breakDiv = document.createElement('div');
        breakDiv.style.flexBasis = '100%';
        container.appendChild(breakDiv);
    }
});

// Stile base per i segnaposti
const style = document.createElement('style');
style.textContent = `
    body {
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
        margin: 0;
        padding: 20px;
        box-sizing: border-box;
    }
    #placecard-container {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 20px;
        max-width: 1200px;
    }
    .placecard {
        border: 1px solid #ccc;
        padding: 10px;
        border-radius: 5px;
        background-color: #f9f9f9;
        box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        flex-basis: calc(25% - 20px);
        box-sizing: border-box;
    }
    @media (max-width: 1200px) {
        .placecard {
            flex-basis: calc(33.33% - 20px);
        }
    }
    @media (max-width: 900px) {
        .placecard {
            flex-basis: calc(50% - 20px);
        }
    }
    @media (max-width: 600px) {
        .placecard {
            flex-basis: 100%;
        }
    }
`;
document.head.appendChild(style);

// Stampa della lista dei segnaposto in console (opzionale)
console.log("Placecard list:");
placecards.forEach(placecard => {
    console.log(`Table: ${placecard.tableName}, Guest: ${placecard.guestName}, Seat: ${placecard.place}`);
});

/*------------------------------------------------------------------------------------------*/


