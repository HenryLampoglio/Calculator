const previousResultText = document.querySelector(".previous-result");
const currentResultText = document.querySelector(".current-result");
const buttons = document.querySelectorAll(".calculator-container button")

const addNumbers = (value) =>
{
   currentResultText.innerText += value;
}

const calculate = () =>
{
    let CalculatedResult = document.querySelector(".current-result").textContent;
    previousResultText.innerText = CalculatedResult;    
    
    currentResultText.innerText = eval(CalculatedResult);;
}

const squaredNumber = () =>
{
    let squaredNumber = document.querySelector(".current-result").textContent;
    previousResultText.innerText = squaredNumber

    currentResultText.innerText = (parseFloat(squaredNumber) ** 2)
    
}

const eraseCurrentResult = () =>
{
    currentResultText.innerText = "";
}

const eraseAllResult = () =>
{
    previousResultText.innerText = "";
    currentResultText.innerText = "";
}

const eraseLastNumber = () =>
{
    let result = document.querySelector(".current-result").textContent;
    let erasedResult = result.slice(0, -1);
    currentResultText.innerText = erasedResult;
}

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
