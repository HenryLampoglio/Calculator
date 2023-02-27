const previousResultText = document.querySelector(".previous-result");
const currentResultText = document.querySelector(".current-result");
const buttons = document.querySelectorAll(".calculator-container button")


// this function will add numbers and operators at the current math expression
const addNumbers = (value) =>
{
   currentResultText.innerText += value;
}

/* this function will receive the math expression of the current-result div to...
 transform and compilate with eval() function, after this will add the current-result div value to...
 the previus-result, and add the result off the eval() function at the current-result
*/
const calculate = () =>
{
    let CalculatedResult = document.querySelector(".current-result").textContent;
    previousResultText.innerText = CalculatedResult;    
    
    currentResultText.innerText = eval(CalculatedResult);;
}

/* this function will square the number that is in the current-result div..
 after this will put the number in the previous-result and add the answer in the current-result*/
const squaredNumber = () =>
{
    let squaredNumber = document.querySelector(".current-result").textContent;
    previousResultText.innerText = squaredNumber

    currentResultText.innerText = (parseFloat(squaredNumber) ** 2)
    
}

// erase the current math expression

const eraseCurrentResult = () =>
{
    currentResultText.innerText = "";
}

// erase all the content that the user put
const eraseAllResult = () =>
{
    previousResultText.innerText = "";
    currentResultText.innerText = "";
}

// erase the last number insert by the user
const eraseLastNumber = () =>
{
    let result = document.querySelector(".current-result").textContent;
    let erasedResult = result.slice(0, -1);
    currentResultText.innerText = erasedResult;
}


// a forEach to receive an event listener of all the buttons in the calculator
buttons.forEach((btn) =>
{
    btn.addEventListener("click", (e)=>
    {
        const value = e.target.innerText;
        if(+value >= 0 ||value === "+" || value === "/" || value === "-" || value === "*" || value === "." )
        {
           addNumbers(value)
        
        }
        else if(value === "=")
        {
            calculate()
        }
        else if(value === "x²")
        {
            squaredNumber();
        }
        else if (value === "CE")
        {
            eraseCurrentResult();
        }
        else if(value === "C"){
            eraseAllResult();
        }
        else if(value === "DEL"){
           eraseLastNumber();
        }
    })
})
