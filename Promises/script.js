// Function to make a request to the Numbers API
function getNumberFact(number) {
    return fetch(`http://numbersapi.com/${number}?json`)
        .then(response => response.json())
        .then(data => data.text);
}

// Function to display number facts on the page
function displayNumberFacts(numbers) {
    const numberFactsDiv = document.getElementById('numberFacts');
    const factPromises = numbers.map(number =>
        getNumberFact(number).then(fact => {
            const factElement = document.createElement('p');
            factElement.textContent = `Fact about ${number}: ${fact}`;
            numberFactsDiv.appendChild(factElement);
        })
    );

    return Promise.all(factPromises);
}

// Part 1: Get a fact about your favorite number
getNumberFact('7')
    .then(fact => {
        const favoriteNumberFact = document.createElement('p');
        favoriteNumberFact.textContent = `Fact about my favorite number: ${fact}`;
        document.getElementById('numberFacts').appendChild(favoriteNumberFact);
    });

// Part 2: Get data on multiple numbers in a single request
const multipleNumbers = [42, 100, 256, 500];
displayNumberFacts(multipleNumbers);

// Part 3: Get 4 facts on your favorite number
const favoriteNumber = '7';
const fourFacts = Array.from({ length: 4 }, (_, index) => index + 1);

displayNumberFacts(fourFacts.map(() => favoriteNumber));
