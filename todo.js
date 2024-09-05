const inputbox=document.getElementById("input-box");
const listcontainer=document.getElementById("list-container");
function addtask(){
    if(inputbox.value==''){
        alert("Please Enter Some Text")
    }
    else{
        let li=document.createElement('li');
        li.innerHTML=inputbox.value;
        listcontainer.appendChild(li);
        let span=document.createElement('span');
        span.innerHTML="\u00d7";   //The string "\u00d7" is a Unicode escape sequence that represents the multiplication (×) symbol. we use multiplication as a cross.
        li.appendChild(span);      //span is the child of list.
    }
    inputbox.value="";
    savedata(); 
}

    listcontainer.addEventListener('click',function(e){
        if(e.target.tagName=="LI"){
            e.target.classList.toggle("checked");  //here we use toggle because if we click on li element the checked class will be applied and again click on the list item the checked class will be removed.in simple word in toggle we can switch between check and unchecked. And in classlist.add after click of list element the checked class will applied and it won't change after again click.
            savedata();
        }
        else if(e.target.tagName=="SPAN"){
            e.target.parentElement.remove();     //here list will removed because parent of span is list.
            savedata();
        }
    },false);

    function savedata(){
        localStorage.setItem("data",listcontainer.innerHTML)  //listcontainer.innerHTML is the value that will be stored. and stored in "data"
    }
    // localStorage is a web API provided by the browser that allows you to store data locally within the user's browser. 
    // Data stored in localStorage persists even after the browser is closed and reopened.
     

    function showdata(){
        listcontainer.innerHTML=localStorage.getItem("data");
    }
    showdata();
