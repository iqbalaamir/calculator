let result = document.getElementById("result");

function getValue(obj) 
{
    let inputNum = obj.innerHTML;

    if (inputNum == "=") 
    {
        result.value = eval(result.value);
    } 
    else if (inputNum == "C") 
    {
        result.value = "0";
    }
    else if (inputNum == "AC")
    {
        result.value = "0";
    }
    else 
    {
        if (result.value == "0") 
        {
            result.value = inputNum;
        } 
        else 
        {
            result.value += inputNum;
        }
    }
}