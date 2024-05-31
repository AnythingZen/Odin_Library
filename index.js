const myLibrary = [];

function Book(author, title, pages) {
    this.author = author;
    this.title = title;
    this.pages = pages;
}

let cardGrid = document.querySelector('.card-grid');

function addCard() {
    myLibrary.forEach(book => {

        let card = document.createElement('div');
        let cardContent = document.createElement('div');
        let deleteContent = document.createElement('div');
        let trashButton = document.createElement('button');
        let trashIcon = document.createElement('i');

        card.classList.add('card');
        cardContent.classList.add('card-content');
        deleteContent.classList.add('delete-content');
        trashIcon.classList.add('gg-trash');

        card.appendChild(cardContent);
        card.appendChild(deleteContent);
        deleteContent.appendChild(trashButton);
        trashButton.appendChild(trashIcon);
        console.log('hi1');
        for (let i = 0; i < 3; i++) {
            const div = document.createElement('div');
            cardContent.appendChild(div);
        }
        let cardDiv = cardContent.querySelectorAll('div');
        let cardDivContent = [`Author: ${book.author}`, `Title : ${book.title}`, `Pages : ${book.pages}`];

        cardDiv.forEach((card, index) => {
            card.textContent = cardDivContent[index];
        })
        cardGrid.appendChild(card);
        
        return;
    })
}


const unhideDisplay = () => {
    let display = document.querySelector('.display');
    display.classList.add('active');
}

const hideDisplay = () => {
    let display = document.querySelector('.display');
    display.classList.remove('active');
}

function addBookToLibrary() {
    let inputAuthor = document.getElementById('input-author');
    let inputTitle = document.getElementById('input-title');
    let inputPages = document.getElementById('input-pages');

    myLibrary.push(new Book(inputAuthor.value, inputTitle.value, inputPages.value));
    console.log('hi2');
    addCard();
    hideDisplay();
    return;
}