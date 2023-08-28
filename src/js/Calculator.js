// export default class Calculator {

//     function CoinCounter(money)
//     {
//         if(isNaN(money))
//         {
//             return "Please Enter a Number!";
//         }
//     }
// }

export default function CoinCounter(money)
{
    if(isNaN(money) || Math.sign(money) === -1)
    {
        return "Please Enter a positive number!";
    }
    // if(!Number.isInteger(money))
    if(money === 0){
        return "";
    }
    // {
    //     money * 100;
    // }    
    if(money >= .25){
        return Math.trunc(money/.25).toString() + " quarters " + CoinCounter((Math.round(((money%.25) *100))/100));
    } 
    if(money >= .10){
        return Math.trunc(money/.10).toString() + " dimes " 
        + CoinCounter((Math.round(((money%.10) *100))/100));
    }
    if(money >= .05){
        return Math.trunc(money/.05).toString() + " nickles " + CoinCounter((Math.round(((money%.05) *100))/100));
    
    } else {
        return Math.trunc(money/.01).toString() + " pennies ";
    }
}

