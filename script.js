const previousResultText = document.querySelector(".previous-result");
const currentResultText = document.querySelector(".current-result");
const buttons = document.querySelectorAll(".calculator-container button")

const addNumbers = (value) =>
{
   currentResultText.innerText += value;
}

const calculate = () =>{
    let CalculatedResult = document.querySelector(".current-result").textContent;

    console.log(eval(CalculatedResult));    
}

buttons.forEach((btn) =>
{
    btn.addEventListener("click", (e)=>
    {
        const value = e.target.innerText;
        if(+value >= 0 ||value === "+")
        {
           addNumbers(value)
        
        }
        else if(value === "="){
            calculate()
        }
    })
})
