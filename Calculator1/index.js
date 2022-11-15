let buttons = document.querySelectorAll("button")
let string = ""
const screen = document.querySelector(".calculator__output")

Array.from(buttons).forEach((buttons)=>{
    buttons.addEventListener("click",(e)=>{
        if(e.target.innerHTML == "="){
            if(string == ""){
                string = ""
                screen.innerHTML = string
            }else{
            string = eval(string);
            screen.innerHTML = string}

        }else if(e.target.innerHTML == "AC"){
            string = ""
            screen.innerHTML = string
        }else if(e.target.innerHTML == "C"){
            
            if(typeof string == "number"){
                string = `${string}`
                string = string.slice(0,string.length-1)
            }else{

            string = string.slice(0,string.length-1)
            screen.innerHTML = string}
        }
        else{
            console.log(e.target.innerHTML)

            string+=e.target.innerHTML
            screen.innerHTML = string
        }
    })
    });