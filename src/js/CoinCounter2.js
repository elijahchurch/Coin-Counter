export default function coinCounter2 (money)
{
    if (isNaN(money) || money <= 0){
        return money;
    } else {
    const quarters = Math.trunc(money / .25);
    const dimeChange = money - (quarters * .25);
    return function dimeChanger(){
        const dimes = Math.trunc(dimeChange / .10);
        const nickelChange = dimeChange - (dimes * .10);
        return function nickelChanger(){
            const nickels = Math.trunc(nickelChange / .05);
            const pennyChange = nickelChange - (nickels * .05);
            return function pennyChanger(){
                const pennies = Math.round(pennyChange / .01);
                return `You have ${quarters} quarters, ${dimes} dimes, ${nickels} nickels, ${pennies} pennies!`;
                }
            }
        }
    }
}