let number = document.querySelectorAll(".number")
let removeAll = document.querySelector(".clr")
let operator = document.querySelectorAll(".symbl")
let print = document.getElementById("display")
let symbol = document.querySelectorAll(".symbl")
let history = document.querySelector(".history")
let result = document.querySelector(".result")
let remove = document.querySelector(".dlt")
let currentOperator = null


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

let arr = []

removeAll.addEventListener("click",()=>{
    print.textContent = ""
    arr.length = 0
    console.log(arr)
})

remove.addEventListener("click",(e)=>{
    print.textContent = print.textContent.slice(0, -1);
})


symbol.forEach((item)=>{
    item.addEventListener("click",(e)=>{
      let  word = document.createElement("div")
        word.className = "word"
        let store = print.textContent
        word.innerText += store
        history.appendChild(word)
        print.textContent = ""
        if (e.target.textContent === "×"){
            currentOperator = e.target.textContent
          let words =  word.innerText
           arr.push(words)
            let Arr =  arr.filter((e)=>{
                   return e
              })
           console.log(Arr)
        } else if (e.target.textContent === "+"){
            currentOperator = e.target.textContent
            let words =   word.innerText
            arr.push(words)
              let Arr =  arr.filter((e)=>{
                   return e
              })
              console.log(Arr)
        } else if (e.target.innerText ==="-"){
            currentOperator = e.target.textContent
            let words =   word.innerText
            arr.push(words)
              let Arr =  arr.filter((e)=>{
                   return e
              })
              console.log(Arr)
        } else if (e.target.innerText ==="÷"){
            currentOperator = e.target.textContent
            let words =   word.innerText
            arr.push(words)
              let Arr =  arr.filter((e)=>{
                   return e
              })
        }
        
    })
})





result.addEventListener("click",(e)=>{
    let store = print.innerText
    arr.push(store)
    let Arr =  arr.filter((e)=>{
            return e
    })
    if (currentOperator  === "×"){
    let product  =  Arr.reduce((acc,item)=>{
        return acc*item
    })
    print.innerText = product
    arr.length = 0
    Arr.length = 0
    console.log(arr)
    } else if (currentOperator === "+"){
        let sum = Arr.reduce((acc,item)=>{
            return +acc +  +item
        },0)
        print.innerText = sum
        arr.length = 0
        Arr.length = 0
    } else if(currentOperator ==="÷"){
        return false
    } else if (currentOperator === "-"){
        let subtrace = Arr.reduce((acc,item)=>{
            return acc - item
        })
        print.innerText = subtrace
        arr.length = 0
        Arr.length = 0
    }
    
})




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

