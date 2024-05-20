let note = document.getElementById("noteCon");
let btn = document.getElementById("btn");
let input = document.querySelectorAll("input-box");

 btn.addEventListener("click",()=>{
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable","true");
    img.src = "images/delete.png";
    note.appendChild(inputBox).appendChild(img);

 });

 note.addEventListener("click", function(e){
    if (e.target.tagName === "IMG") {

        e.target.parentElement.remove();
        saveData(); 

    }else if (e.target.tagName === "p") {
        input = document.querySelectorAll(".input-box");
        input.forEach(nt =>{
            nt.onkeyup = function(){
               saveData();
            }
        })
        
    }
 });
 
 /*
 document.addEventListener("keydown", event =>{
    if (event.key === "Enter") {
        document.execCommand("insertLineBreak");
        event.preventDefault();   
    }
 });*/

 function saveData(){
    localStorage.setItem("noteApp", note.innerHTML);
 }


  function show(){
    note.innerHTML = localStorage.getItem("noteApp");
 }

 show();