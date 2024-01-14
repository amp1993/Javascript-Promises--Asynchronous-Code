let favNumber = 5;
let baseURL = "http://numbersapi.com";


// //Get a fact on favorite number
async function getFavNumber(num){
    try{

        let res = await $.getJSON(`${baseURL}/${favNumber}?json`).then(data =>{
            console.log(data);
        })
    }
    catch(e){
        console.log(e)
    }}


getFavNumber(favNumber);

// // Get data on multiple numbers in a single request and put on page. 

let multipleNumbers = [1,5,7]

async function getMultipleNumbers(numbers){
    try{
        await Promise.all(numbers.map(async (num) => {
            let res = await $.getJSON(`${baseURL}/${num}?json`);
            console.log(res);

            let pElement = document.createElement('p');
            pElement.textContent = res.text;
             $('#numberFacts').append(pElement)}))
    }
    catch(e){
        console.log(e)
    }}



getMultipleNumbers(multipleNumbers); 

// //Put for 4 facts of favorite number on the page

async function favNumberMultipleFacts(numbers) {
    try {
        let promises = [];
        for (let i = 0; i < 4; i++) {
            promises.push($.getJSON(`${baseURL}/${favNumber}?json`))
        }
        const results = await Promise.all(promises);
        console.log(promises)

        results.forEach((fact)=>{
            let pElement = document.createElement('p');
            pElement.textContent = fact.text;
             $('#numberFacts').append(pElement)}
        )

    }
    catch (e) {
    console.log(e)
}
}

favNumberMultipleFacts(favNumber)