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
  
  // table.innerHTML = "";
  array.forEach(({title,pages,author, isRead},index)=>{

        const newElement = document.createElement("tr")
        newElement.innerHTML = `<tr>
            <td>${title}</td>
            <td>${pages}</td>
            <td>${author}</td>
            <td>${isRead}<button class="checked" data-key="${index}">${this.isRead ? "Check" : "uncheck"}</button></td>
            </tr>`;
            
            table.appendChild(newElement)
          })
        }



        const addToBooklist =()=>{
          const title = document.querySelector(".title").value
  const isRead = document.querySelector(".Read").value
  const author = document.querySelector(".author").value
  const pages = document.querySelector(".pages").value
  console.log(title,isRead,author,pages)
  return library =[...library,new Book(title,author,pages,isRead)]
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
  addBookLibrary(addToBooklist());

})
window.onload = addBookLibrary(library);


const but = document.querySelectorAll(".checked")
but.forEach((item)=>{
item.addEventListener("click",(e)=>{

let final =library[e.target.dataset.key].toggle()
console.log(final)
})
})