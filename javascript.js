let number 
let operator
let anotherNumber

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