//
const randomInt =Math.floor(Math.random() + 423);
const ramdomId = coffeeIds(randomInt);
const url = 'https://api.sampleapis.com/coffee/iced/$(randomId)';
console.log(url);

fetch(url)
    .then((response)=> {
    if (!response.ok){
        throw new Error('Request Failed');
    }
    return response.json()
    })