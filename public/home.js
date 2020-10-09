
fetch('http://localhost/api/volumes', () => {

}).then(response => {
    return response.json();
}).then((data) => {
    createCards(data);
})

function createCard(text, href) {
    let cardContainer = document.createElement('a');
    cardContainer.classList.add('card');
    cardContainer.href = href;

    let innerDiv = document.createElement('div');
    cardContainer.appendChild(innerDiv); 

    let innerText = document.createElement('h1');
    innerText.classList.add('text');
    innerText.innerHTML = text;
    innerDiv.appendChild(innerText);

    return cardContainer;
}

 function createCards(data) {
    
    let cardsContainer = document.querySelector('.cards');
    console.log(data);

    for(let i = 0; i<data.length; i++) 
        cardsContainer.appendChild(createCard(data[i],'http://localhost/volume&'+data[i]));

}