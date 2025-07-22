let number = document.querySelectorAll(".number")
let removeAll = document.querySelector(".clr")
let operator = document.querySelectorAll(".symbl")
let print = document.getElementById("display")




number.forEach((item)=>{
        // textContent and innerHTML won't work
        // because Sometimes .textContent includes newline or spaces to solve this use .trim() like item.innerHTML.trim() to remove the spaces
        let arr = print.innerText.split("")
       if (item.innerText === "x²"){
        item.addEventListener("click",(e)=>{
            let dis = print.innerText
            print.innerText = Math.pow(dis,2)
        })
    } else if (item.innerText === "."){
      item.addEventListener("click",(e)=>{
        let box = print.innerText.split("")
        if (box.includes(".")){
            return false 
        } else {
               let store = item.innerText
                print.innerText += store
        }
      })
    }else {        
        // console.log(item)
        item.addEventListener("click",(e)=>{
          let store = e.target.textContent
          print.textContent += store.trim()
        })
    }

   
    })



    removeAll.addEventListener("click",()=>{
        print.textContent = ""
    })



function add(a,b){
    return a+b
}

function subtract(a,b){
    return a-b
}

function multiply(a,b){

}

function factorial(n){
    let num = []
    for (let i=1;i<=n;i++){
        if (!num.includes(i)){
            num.push(i)
        }
    }
let product = 1 
    num.forEach((item)=>{
        product *= item
    })
    console.log(product)
}
factorial(6)

function operate(){
    number = 5 
    anotherNumber = 6 
    if (operator === "+"){
        add(number,anotherNumber)
    } else if (operator === "-"){
        subtract(number,anotherNumber)
    } else if (operator === "!"){
       
    }
}


