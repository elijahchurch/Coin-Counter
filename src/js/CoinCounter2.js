export default function CoinCounter2 (money)
{
    if (isNaN(money) || money <= 0){
        return money;
    }
    const quarters = Math.trunc(money / .25);
    const dimeChange = money - (quarters * .25);
    return function dimeChanger(dimeChange){
        const dimes = Math.trunc(dimeChange / .10);
        const nickelChange = dimeChange - (dimes * .10);
        return function nickelChanger(nickelChange){
            const nickels = Math.trunc(nickelChange / .05);
            const pennyChange = nickelChange - (nickels * .05);
            return function pennyChanger(pennyChange){
                const pennies = pennyChange / .01;
                return "You have ${quarters} quarters, ${dimes} dimes, ${nickels} nickels, ${pennies} pennies!";
            }
        }
    }
}