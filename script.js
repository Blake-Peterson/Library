const myLibrary = [];

const book1 = new Book("The Lightning Thief", "Rick Riordan",297,true);
const book2 = new Book("The Sea of Monsters","Rick Riordan",450 ,true);
const book3 = new Book("The Titan's Curse","Rick Riordan", 123,true);
const book4 = new Book("The Battle of the Labyrnth","Rick Riordan", 212,true);
const book5 = new Book("The Last Olympian","Rick Riordan",213 ,false);
const book6 = new Book("Atomic Habits", "James Clear", 200,true);

function Book(title, author, pages, read_status){
    this.title=title;
    this.author=author;
    this.pages=pages;
    this.read_status = read_status;
}

function addInitialBooks(){
    myLibrary.push(book1);
    myLibrary.push(book2);
    myLibrary.push(book3);
    myLibrary.push(book4);
    myLibrary.push(book5);
    myLibrary.push(book6);
}

function addBookToLibrary(){
    let title = prompt("What is the title, author of the Book");

}

function addTableRow(){
    const current_table_row=document.querySelector("tr");
    const table_row = document.createElement("tr");
    current_table_row.appendChild("table_row");
}

function create_table(){
    const container = document.querySelector("#container");
    const table = document.createElement("table");
    container.appendChild(table);
    const table_header_row = document.createElement("tr");
    table.appendChild(table_header_row);
    const table_header_title = document.createElement("th");
    table_header_title.classList.add("header");
    table_header_title.textContent="Title";
    const table_header_author = document.createElement("th");
    table_header_author.classList.add("header");
    table_header_author.textContent="Author";
    const table_header_pages = document.createElement("th");
    table_header_pages.classList.add("header");
    table_header_pages.textContent="Pages";
    const table_header_read_status = document.createElement("th");
    table_header_read_status.textContent="If Read";
    table_header_read_status.classList.add("header");
    table_header_row.appendChild(table_header_title);
    table_header_row.appendChild(table_header_author);
    table_header_row.appendChild(table_header_pages);
    table_header_row.appendChild(table_header_read_status);
}

function addBookButton(){
    const button = document.createElement("button");
}

//should be next to each book display
function removeBookButton(){

}

function updateReadStatus(){

}

function displayLibrary(){
    addInitialBooks();
    create_table();
    
}

displayLibrary();
