let favNumber = 5;
let baseURL = "http://numbersapi.com";


//Get a fact on favorite number
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

//Get data on multiple numbers in a single request and put on page. 

let multipleNumbers = [1,5,7]

async function getMultipleNumbers(num1, num2, num3){
    try{
      let res = await $.getJSON(`${baseURL}/${num1}?json`);
      console.log(res)
    }
    catch(e){
        console.log(e)
    }}



getMultipleNumbers(multipleNumbers); 

//Put for 4 facts of favorite number on the page

async function favNumberMultipleFacts() {
    let res = await Promise.all(
        Array.from({ length: 4}), () => $.getJSON(`${baseURL}/${favNumber}?json`));
    res.forEach(data => {
        $('body').append(`<p>${data.text}`);
    })

    };
  
favNumberMultipleFacts()