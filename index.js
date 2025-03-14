const allBoxes=document.querySelectorAll(".box");
const display =document.getElementById("result")
let result="";
    allBoxes.forEach((element,index)=>{
              element.addEventListener("click",()=>{

                let string=element.innerHTML
                console.log(string)
                if(string==="AC")
                {
                    result="";
                }else if(string === " = ")
                {
                    result=eval(result).toString();
                }
                else
                {
                     result+=string;   
                }
                display.innerHTML=result
        }) ;
       
    });



