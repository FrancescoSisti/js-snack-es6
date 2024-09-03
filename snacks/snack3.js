console.log('Snack 3');
// Creiamo un array di oggetti che rappresentano biciclette da corsa
const bicycles = [
    { name: "Bianchi Oltre XR4", weight: 6.8 },
    { name: "Specialized S-Works Tarmac SL7", weight: 6.7 },
    { name: "Trek Émonda SLR", weight: 6.5 },
    { name: "Cannondale SuperSix EVO", weight: 6.9 },
    { name: "Pinarello Dogma F", weight: 6.8 }
];

// Troviamo la bici con il peso minore
const lightestBike = bicycles.reduce((prev, current) =>
    (prev.weight < current.weight) ? prev : current
);

// Utilizziamo il destructuring per estrarre nome e peso
const { name, weight } = lightestBike;

// Creiamo un elemento div per visualizzare il risultato
const resultDiv = document.createElement('div');
resultDiv.classList.add('placecard');

// Creiamo il contenuto utilizzando un template literal
resultDiv.innerHTML = `
  <h3>Lightest Bicycle</h3>
  <p><strong>Name:</strong> ${name}</p>
  <p><strong>Weight:</strong> ${weight} kg</p>
`;

// Aggiungiamo il div al container esistente
const container = document.getElementById('placecard-container');
container.appendChild(resultDiv);

// Stampiamo anche in console
console.log(`The lightest bike is the ${name} with a weight of ${weight} kg.`);


