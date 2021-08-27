let state = false;

let library = [
  new Book("Fuck the world", "Kelvin Egbwuwe", 200, true),
  new Book("i hate it here", "PrinceCharles", 300, false),
];

function Book(title, author, pages, isRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
  this.info = () => {
    return `${title} by ${author},${pages} pages, ${
      isRead ? "has been read" : "not yet read"
    }`;
  };
  this.toggle = function (){
    this.isRead = !this.isRead
    return this.isRead
  }
}
function addBookLibrary(array){
  const table = document.querySelector(".table")
  

  array.forEach(({title,pages,author, isRead},index)=>{
        const newElement = document.createElement("div")
        
        newElement.innerHTML = `<div class="card">
            <h1><span>TITLE: </span>${title}</h1>
            <h2><span>AUTHOR: </span>${author}</h2>
            <p><span>PAGES: </span>${pages}</p>
            <button data-key=
            "${index}"><input type="button" class="checked" value="True" data-key="${index}" onclick="toggle(this)"/></div>
            </div>`;
            
            table.appendChild(newElement)
          })
        }


  
  const addToBooklist =()=>{
          const title = document.querySelector(".title").value
  const isRead = document.querySelector(".Read").value
  const author = document.querySelector(".author").value
  const pages = document.querySelector(".pages").value
  return library =[new Book(title,author,pages,isRead)]
}
const changeState =()=>{
  const form = document.querySelector(".form");
  form.style.display = state ? "none" : "flex";
  state = !state;
}
const addBtn = document.querySelector(".addbtn")
addBtn.addEventListener("click",()=>{
  changeState()
})
const submitBtn = document.querySelector(".submit")
submitBtn.addEventListener("click",(e)=>{
  e.preventDefault();
  changeState()
  localStorage.setItem("library",addBookLibrary(addToBooklist()))
  addBookLibrary(localStorage.getItem("library"));
  console.log(addToBooklist())

})

  function toggle(button) {
    switch (button.value) {
      case "True":
        button.value = "False";
        break;
      case "False":
        button.value = "True";
        break;
    }
  }

window.onload = addBookLibrary(library);



const but = document.querySelectorAll(".checked")
but.forEach((item)=>{
  item.addEventListener("click",(e)=>{
    console.log(e.target.parentNode, e.target.dataset.key)
    library[e.target.dataset.key].toggle()
    e.parentNode.dataset.key = !e.target.dataset.key
    e.target.parentNode.firstChild.textContent=e.target.parentNode.dataset.key
    // addBookLibrary(library) 
})
})
