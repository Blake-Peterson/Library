const addBookBtn = document.querySelector("#addNewBook")


const book1 = new Book("The Lightning Thief", "Rick Riordan",297,true);
const book2 = new Book("The Sea of Monsters","Rick Riordan",450 ,true);
const book3 = new Book("The Titan's Curse","Rick Riordan", 123,true);
const book4 = new Book("The Battle of the Labyrnth","Rick Riordan", 212,true);
const book5 = new Book("The Last Olympian","Rick Riordan",213 ,false);
const book6 = new Book("Atomic Habits", "James Clear", 200,true);

const myLibrary = [book1,book2,book3,book4,book5,book6];

function Book(title, author, pages, read_status){
    this.title=title;
    this.author=author;
    this.pages=pages;
    this.read_status = read_status;
}

function addBookToLibrary(){
    //prompt in some way to get a the info
    /*
    let title = 
    let author = 
    let pages = 
    let read_status = 
    new_book = Book(title,author,pages,read_status);
    myLibrary.push(new_book);
    */

}

function addLibraryToTable(){
    for(let i=0;i<myLibrary.length;i++){
        addRowToTable(myLibrary[i]);
    }
}

function addRowToTable(book){
    const table_header_row=document.querySelector("table");
    const table_row = document.createElement("tr");
    table_header_row.appendChild(table_row);
    const table_data_title = document.createElement("td");
    table_data_title.textContent = book.title;
    table_row.appendChild(table_data_title);
    const table_data_author = document.createElement("td");
    table_data_author.textContent = book.author;
    table_row.appendChild(table_data_author);
    const table_data_pages = document.createElement("td");
    table_data_pages.textContent = book.pages;    
    table_row.appendChild(table_data_pages);
    const table_data_read_status = document.createElement("td");
    table_data_read_status.textContent = book.read_status;
    table_row.appendChild(table_data_read_status);
}

//should be next to each book display
function removeBookButton(){

}

function updateReadStatus(){

}

function displayLibrary(){
    addLibraryToTable();
}

displayLibrary();
