 
 const inputBox= document.getElementById("input-box"); 
 const listcontainer=document.getElementById("list-container");  

 function addTask(){
       
        if(inputBox.value === ''){ 
        alert("please enter some task!");
      }   
      else{
        let li= document.createElement("li");
        li.innerHTML= inputBox.value;
        listcontainer.appendChild(li);
        let span=document.createElement("span");
         span.innerHTML="\u00d7";
         li.appendChild(span);
      }   
      inputBox.value=""; //clear the box..
      saveData();
}   

listcontainer.addEventListener("click",function(e){
     if(e.target.tagName === "LI") {
       e.target.classList.toggle("checked");
       saveData();
     }  

     else if(e.target.tagName==="SPAN") {
        e.target.parentElement.remove(); 
        saveData();
     } 
},false);   

function saveData(){
     localStorage.setItem("data",listcontainer.innerHTML);
} 
function getData(){
    listcontainer.innerHTML=localStorage.getItem("data");
}
getData(); 


//in future add this features in the website for better user experiences..

/*  
 ✅ Smooth animations for adding/removing tasks (setTimeout use async nature of js will use)
✅ Drag & Drop task reordering
✅ Dark mode toggle
✅ Task filtering (All, Completed, Pending)
✅ Progress bar to track completion
✅ Countdown timer for tasks
   */ 
