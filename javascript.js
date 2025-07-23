let number = document.querySelectorAll(".number")
let removeAll = document.querySelector(".clr")
let operator = document.querySelectorAll(".symbl")
let print = document.getElementById("display")
let symbol = document.querySelectorAll(".symbl")
let history = document.querySelector(".history")
let result = document.querySelector(".result")
let remove = document.querySelector(".dlt")
let finalsum = null
let preValue = null
let currentValue =null
let operate



number.forEach((item)=>{
        // textContent and innerHTML won't work
        // because Sometimes .textContent includes newline or spaces to solve this use .trim() like item.innerHTML.trim() to remove the spaces
        let arr = print.innerText.split("")
       if (item.innerText === "x²"){
        item.addEventListener("click",(e)=>{
            let dis = print.innerText
            print.innerText = Math.pow(dis,2)
            let  word = document.createElement("div")
            word.className = "word"
            let store = print.textContent
            word.innerText += store
            history.appendChild(word)
            currentValue = +print.innerText
            preValue = null
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
    } else {        
        item.addEventListener("click",(e)=>{
          let store = e.target.textContent 
          if (currentValue){
            print.textContent += store.trim()
             currentValue = +print.innerText
          } else {
          print.textContent = store.trim()
          currentValue = +print.innerText
          }
        })
    }
   
    })


removeAll.addEventListener("click",()=>{
    print.textContent = ""
    preValue = null;
    currentValue = null;
    operate = null;
    finalsum = null
})

remove.addEventListener("click",(e)=>{
    print.textContent = print.textContent.slice(0, -1);
    currentValue = +print.innerText
})



symbol.forEach((item)=>{
    item.addEventListener("click",(e)=>{
        if (operate){
            finalsum = operators(+currentValue,+preValue,operate)
            console.log(finalsum)
            preValue = finalsum
            currentValue = null
            console.log(currentValue)
        } else {
            preValue = currentValue
            console.log(currentValue)
        }
         operate = e.target.textContent
         print.textContent = " "
         print.innerText = finalsum
        // console.log(item.textContent)
    })
})





result.addEventListener("click",(e)=>{
    finalsum = operators(+currentValue, +preValue, operate)
    print.innerText = finalsum
})



function operators(a, b, operator) {
  if (operator === '+') return a + b;
  else if (operator === '-') return b - a;
  else if (operator === '×') return a * b;
  else if (operator === '÷') {
    if (b === 0) {
      alert("Cannot divide by zero");
      return a; 
    }
    return a / b;
  }
  return b;
}



// function factorial(n){
//     let num = []
//     for (let i=1;i<=n;i++){
//         if (!num.includes(i)){
//             num.push(i)
//         }
//     }
// let product = 1 
//     num.forEach((item)=>{
//         product *= item
//     })
//     console.log(product)
// }
// factorial(6)


