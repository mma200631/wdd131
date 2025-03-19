const input= document.querySelector("favchap");
const button=document.querySelector("button");
const list=document.querySelector("");
const li=document.createElement("li");
const deleteButton=document.createElement("button");
li.textContent=input.value;
deleteButton.textContent="❌";
li.append(deleteButton);
list.append(li);
buttonElement.addEventListener('click' , function(){

    if(input.vlue.trim() !== ''){}
});

deleteButton.addEventListener('click' , function(){
    list.removeChild(li);
    list.focus();
});
input.value='';
input.focus();