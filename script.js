let inputBox=document.querySelector(".input_value");
let add=document.querySelector(".add");
let main_cont=document.querySelector(".all_data");

let addTask=()=>{
    if(inputBox.value===""){
        alert("you must write something");
    }else{
        let dvElem=document.createElement('div');
        dvElem.classList.add('data_main');

        dvElem.innerHTML=` <i class="fa-regular fa-circle circle"></i>
        <p class="para">${inputBox.value}</p>
        <i class="fa-solid fa-trash"></i>`;
        inputBox.value="";
        main_cont.appendChild(dvElem);
        let circle=dvElem.querySelector(".fa-circle");
        let para=dvElem.querySelector(".para");
        let del=dvElem.querySelector(".fa-trash");
        del.onclick=()=>{
            dvElem.remove();
    
        }
        circle.onclick=()=>{
            circle.classList.toggle('fa-circle');
            circle.classList.toggle('fa-circle-check');
            para.classList.toggle('stroke');
        }
    }
}
add.onclick=()=>{
    addTask();
}
