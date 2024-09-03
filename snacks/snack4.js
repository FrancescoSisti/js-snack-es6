console.log("Snack 4");

// Creiamo un array di oggetti di squadre di calcio
const teams = [
    { name: "Juventus", pointsScored: 0, foulsReceived: 0 },
    { name: "Inter", pointsScored: 0, foulsReceived: 0 },
    { name: "Milan", pointsScored: 0, foulsReceived: 0 },
    { name: "Roma", pointsScored: 0, foulsReceived: 0 },
    { name: "Napoli", pointsScored: 0, foulsReceived: 0 }
];

// Generiamo numeri random per punti fatti e falli subiti
teams.forEach(team => {
    team.pointsScored = Math.floor(Math.random() * 100);
    team.foulsReceived = Math.floor(Math.random() * 50);
});

// Creiamo un nuovo array con solo nomi e falli subiti usando la destrutturazione
const simplifiedTeams = teams.map(({ name, foulsReceived }) => ({ name, foulsReceived }));

// Stampiamo in console
console.log("Complete teams:", teams);
console.log("Simplified teams:", simplifiedTeams);

// Funzione per creare un elemento div
function createTeamElement(team) {
    const element = document.createElement('div');
    element.classList.add('placecard');
    element.innerHTML = `
        <h3>${team.name}</h3>
        <p><strong>Points scored:</strong> ${team.pointsScored}</p>
        <p><strong>Fouls received:</strong> ${team.foulsReceived}</p>
    `;
    return element;
}

// Creiamo un contenitore per le squadre
const container = document.getElementById('placecard-container');

// Aggiungiamo un titolo
const title = document.createElement('h2');
title.textContent = 'Football Teams';
title.style.width = '100%';
title.style.textAlign = 'center';
container.appendChild(title);

// Aggiungiamo le squadre al contenitore
teams.forEach(team => {
    const teamElement = createTeamElement(team);
    container.appendChild(teamElement);
});

// Aggiungiamo un titolo per le squadre semplificate
const simplifiedTitle = document.createElement('h2');
simplifiedTitle.textContent = 'Simplified Teams (Only Name and Fouls Received)';
simplifiedTitle.style.width = '100%';
simplifiedTitle.style.textAlign = 'center';
simplifiedTitle.style.marginTop = '20px';
container.appendChild(simplifiedTitle);

// Aggiungiamo le squadre semplificate al contenitore
simplifiedTeams.forEach(team => {
    const element = document.createElement('div');
    element.classList.add('placecard');
    element.innerHTML = `
        <h3>${team.name}</h3>
        <p><strong>Fouls received:</strong> ${team.foulsReceived}</p>
    `;
    container.appendChild(element);
});


