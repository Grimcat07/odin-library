let myLibrary=[];
function Book(title,author,pages,read){
    this.title=title;
    this.author=author;
    this.pages=pages;
    this.read=(read==true)?"Read":"Not Read";
    this.id=crypto.randomUUID();
}

Book.prototype.readtoggle=function (){
    this.read=this.read==="Read"?"Not Read":"Read";
}

function addBook(title,author,pages,read) {
    const bookobj=new Book(title,author,pages,read);
    myLibrary.push(bookobj);
    display(myLibrary);
}
const container=document.querySelector(".container");

function display(myLibrary)
{
    container.innerHTML="";

    myLibrary.forEach((book) => {
    const card=document.createElement("div");
    card.className="cards";
    const div1=document.createElement("div");
    div1.className="divcol1";
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
        display(myLibrary);
    })

    
    

    card.appendChild(div1);
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
        let index;
        myLibrary.forEach(book=>{
            if(book.id===del.getAttribute("data-id"))
                index=book;
        });
       let ind= myLibrary.indexOf(index);
        myLibrary.splice(ind,1);
        display(myLibrary);
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

    console.log(event.value)

    if (bookTitle && bookAuthor && bookPages)
    {  
        addBook(bookTitle, bookAuthor, bookPages, bookRead);
        dialog.close();
        
        titleInput.value = "";
        authorInput.value = "";
        pagesInput.value = "";
        readInput.checked = false;
    }
    else
    {
        alert("Fill the necessary details marked with *")    
    }
});
});


