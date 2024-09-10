const dialog= document.querySelector("dialog");
const finishBook = document.querySelector("#Add-Book");
const enterBookInfo = document.querySelector("#finish-book");


const book1 = new Book("The Lightning Thief", "Rick Riordan",297,true);
const book2 = new Book("The Sea of Monsters","Rick Riordan",450 ,true);
const book3 = new Book("The Titan's Curse","Rick Riordan", 123,true);
const book4 = new Book("The Battle of the Labyrnth","Rick Riordan", 212,true);
const book5 = new Book("The Last Olympian","Rick Riordan",213 ,false);
const book6 = new Book("Atomic Habits", "James Clear", 200,true);

let myLibrary = [book1,book2,book3,book4,book5,book6];

function Book(title, author, pages, read_status){
    this.title=title;
    this.author=author;
    this.pages=pages;
    this.read_status = read_status;
}

function addBookToLibrary(){
    enterBookInfo.addEventListener("click",(event)=>{
        event.preventDefault();
        const bookTitle = document.querySelector("#title");
        const bookAuthor = document.querySelector("#author");
        const bookPages = document.querySelector("#pages");
        const bookRead = document.querySelector("#already_read");
        const new_book = new Book(bookTitle.value,bookAuthor.value,bookPages.value,bookRead.checked);
        myLibrary.push(new_book);
        updateTable();
        dialog.close();
    }); 

    finishBook.addEventListener("click",()=> {
        dialog.showModal();
    });  
}

function addLibraryToTable(){
    for(let i=0;i<myLibrary.length;i++){
        addRowToTable(myLibrary[i],i);
    }
}

function addRowToTable(book,i){
    const table_header_row=document.querySelector("table");
    const table_row = document.createElement("tr");
    table_row.setAttribute("book-id",i);
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

    const removeBookBtn = document.createElement("button");
    removeBookBtn.textContent= "Remove Book";
    removeBookBtn.addEventListener("click",()=>{
        table_row.remove();
        myLibrary.splice(i,1);
        updateTable();
    });
    table_row.appendChild(removeBookBtn);

    const update_read_status_btn = document.createElement("button");
    update_read_status_btn.textContent = "Change";
    update_read_status_btn.addEventListener("click",()=>{
        myLibrary[i].read_status= myLibrary[i].read_status ? false:true;
        updateTable();
    });
    table_data_read_status.appendChild(update_read_status_btn);

}

function updateTable(){
    const table = document.querySelector("table");
    while(table.rows.length>1){
        table.deleteRow(1);
    }
    addLibraryToTable();
}

function displayLibrary(){
    addLibraryToTable();
    addBookToLibrary();
}

displayLibrary();
