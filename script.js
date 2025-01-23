// popup-box,popup-overlay,button
var Popupoverlay = document.querySelector(".popup-overlay")
var Popupbox = document.querySelector(".popup-box")
var Addpopupbutton = document.getElementById("add-popup-button")

Addpopupbutton.addEventListener("click",function(){
    Popupoverlay.style.display="block"
    Popupbox.style.display="block"
})

//selecting cancel button

var Cancelpopup=document.getElementById("cancel-popup")
Cancelpopup.addEventListener("click",function(event){
    event.preventDefault()
    Popupoverlay.style.display="none"
    Popupbox.style.display="none"
})

//selecting container,add-book,book-title-input,book-author-input,book-description-input

var Container=document.querySelector(".container")
var Addbook=document.getElementById("add-book")
var Booktitleinput=document.getElementById("book-title-input")
var Bookauthorinput=document.getElementById("book-author-input")
var Bookdescriptioninput=document.getElementById("book-description-input")

Addbook.addEventListener("click",function(event){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML=`<h2>${Booktitleinput.value}</h2>
    <h5>${Bookauthorinput.value}</h5>
    <p>${Bookdescriptioninput.value}</p>
    <button onclick="deletebook(event)">Delete</button>`
    Container.append(div)
    Popupoverlay.style.display="none"
    Popupbox.style.display="none"
})

function deletebook(event){
    event.target.parentElemet.remove()
}


