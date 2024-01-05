/* calculator*/
let string="";
let x=document.querySelectorAll(".btn");
Array.from(x).forEach((button)=>{
       button.addEventListener("click",(e)=>{
        if(e.target.innerHTML=="="){
            string=eval(string);
            document.querySelector("input").value=string;
        }
       else if (e.target.innerHTML=="AC") {
            string="";
            document.querySelector("input").value=string;
            
        } 
        else if (e.target.innerHTML=="C") {
            let y=document.querySelector("input").value;
            let a=y.slice(0,-1);
            string = a; 
            document.querySelector("input").value=a;
            
        } 
        else if(e.target.innerHTML=="()"){
            alert("It Will Come Very Soon!!!")
           
        }
        else{
            console.log(e.target);
            string=string+e.target.innerHTML;
            document.querySelector("input").value=string;
        }
         

       })
})
/*darkmood*/
let d=document.querySelector("button");
let e=document.querySelector("body");
let f=document.getElementById("container")
console.log(d);
let flag=0;
d.addEventListener("click",()=>{
    
    if(flag==0){
        
        e.style.backgroundColor=" #1b1919";
        f.style.border="3px solid rgb(57 55 55)"
        flag=1;
    }
    else {
        e.style.backgroundColor=" white";
        flag=0;
    }
   
    
})

