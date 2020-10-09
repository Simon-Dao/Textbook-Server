
fetch('http://localhost/api/volume1/chaptors', () => {

}).then(response => {
    return response.json();
}).then((data) => {
    createCards(data);
})

fetch('http://localhost/api/current-volume', () => {

}).then(response => {
    return response.json();
}).then((data) => {
    document.querySelector('.volume-text').innerHTML = data.current;

})


function createCard(text, href) {
    let cardContainer = document.createElement('a');
    cardContainer.classList.add('card');
    cardContainer.href = href;

    let innerDiv = document.createElement('div');
    cardContainer.appendChild(innerDiv); 

    let innerText = document.createElement('h1');
    innerText.classList.add('text');
    innerText.innerHTML = text.substring(0,text.indexOf('.'));
    innerDiv.appendChild(innerText);

    return cardContainer;
}

 function createCards(data) {
    
    let cardsContainer = document.querySelector('.cards');
    console.log(data);

    for(let i = 0; i<data.length; i++) 
        cardsContainer.appendChild(createCard(data[i],'http://localhost/history/volume1&'+data[i]));

}