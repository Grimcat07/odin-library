let myLibrary=[];
class Book{
    constructor(title,author,pages,read)
    {
    this.title=title;
    this.author=author;
    this.pages=pages;
    this.read=(read==true)?"Read":"Not Read";
    this.id=crypto.randomUUID();
    }
    readtoggle()
    {
    this.read=this.read==="Read"?"Not Read":"Read";
    }   
}
Book.prototype.readtoggle=function (){
    this.read=this.read==="Read"?"Not Read":"Read";
}

function addBook(title,author,pages,read) {
    const bookobj=new Book(title,author,pages,read);
    myLibrary.push(bookobj);
    display();
}
const container=document.querySelector(".container");

function display()
{
    container.innerHTML="";

    myLibrary.forEach((book) => {
    const card=document.createElement("div");
    card.className="cards";
    const div2=document.createElement("div");
    div2.className="divcol2";
    const title=document.createElement("div");
    title.className="title";
    const author=document.createElement("div");
    author.className="author";
    const pages=document.createElement("div");
    pages.className="pages"
    const read=document.createElement("div");
    read.className="read";
    const del=document.createElement("button");
    del.className="del-button";
    del.setAttribute("data-id",book.id);
    const toggle=document.createElement("button");
    toggle.className="read-toggle";
    
    
    toggle.addEventListener("click",()=>
    {
        book.readtoggle();
        display();
    })

    card.appendChild(div2);
    div2.appendChild(title);
    div2.appendChild(author);
    div2.appendChild(pages);
    div2.appendChild(read);
    div2.appendChild(toggle)
    div2.appendChild(del);

    container.appendChild(card);
    
    title.textContent="Title:  "+book.title;
    author.textContent="Author:  "+book.author;
    pages.textContent="Pages:  "+book.pages;
    read.textContent="Read Status:  "+book.read;
    toggle.textContent="Status"    
    del.textContent="Delete";

    del.addEventListener("click",()=>{
        myLibrary=myLibrary.filter(book=>book.id!==del.getAttribute("data-id"));
        container.removeChild(card);    
    });
});
}
const dialog=document.querySelector("dialog");
const showdialog=document.querySelector("#dialog");
const close=document.querySelector("#cancel");
const submit=document.querySelector(".submit");

showdialog.addEventListener("click",()=>{
    dialog.showModal();

    close.addEventListener("click",()=>
    {
        dialog.close();
    })

    submit.addEventListener("click",(event)=>{
    
        event.preventDefault();

    const titleInput = document.querySelector("#title");
    const authorInput = document.querySelector("#author");
    const pagesInput = document.querySelector("#pages");
    const readInput = document.querySelector("#read");

    const bookTitle = titleInput.value;
    const bookAuthor = authorInput.value;
    const bookPages = pagesInput.value;
    const bookRead = readInput.checked;


    if (bookTitle && bookAuthor && bookPages)
    {  
        addBook(bookTitle, bookAuthor, bookPages);
        dialog.close();
        
        titleInput.value = "";
        authorInput.value = "";
        pagesInput.value = "";
        readInput.checked = false;
    }    
});
});


