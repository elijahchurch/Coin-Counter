// import Galaxycalc from "../src/js/galactic";

// describe("Galaxycalc object and its methods", () => {

//     test("it should create a calculator object that contains the user current age", () => {
//         newUser = new Galaxycalc(32);
//         expect(newUser.earthAge).toEqual(32);
//         expect(newUser.mercuryAge).toEqual(0);
//         expect(newUser.venusAge).toEqual(0);
//         expect(newUser.marsAge).toEqual(0);
//         expect(newUser.jupiterAge).toEqual(0);
//         expect(newUser.earthPassage).toEqual("");
//         expect(newUser.mercuryPassage).toEqual("");
//         expect(newUser.venusPassage).toEqual("");
//         expect(newUser.marsPassage).toEqual("");
//         expect(newUser.jupiterPassage).toEqual("");
//     });


import CoinCounter from "../src/js/Calculator";

    describe("Coin Counter function", () => {

        test("It should return an error message if input is NaN", () => {
            const result = CoinCounter("Jason");
            expect(result).toEqual("Please Enter a positive number!");

        });
       
            test("It should return an error message if input is a negative number", () => {
                const result = CoinCounter(-32);
                expect(result).toEqual("Please Enter a positive number!");
    
            });

            test("It should return an error message if input is 0", () => {
                const result = CoinCounter(0);
                expect(result).toEqual("");
            });

            // eslint-disable-next-line no-undef
            test("It should return whole number without decimal remainer", () =>
            {
                const result = CoinCounter(1.75);
                // eslint-disable-next-line no-undef
                expect(result).toEqual("7 quarters ");
            });

            test("It should return amount of quarters and dimes", () => {
                const result = CoinCounter(1.35);
                expect(result).toEqual("5 quarters 1 dimes ")
            })

            test("It should not add any extra words or quotes if number can be divided by some change", () => {
                const result = CoinCounter(1.25);
                expect(result).toEqual("5 quarters ")
            })

            test("It should return change up to the nickle", () => {
                const result = CoinCounter(1.40);
                expect(result).toEqual("5 quarters 1 dimes 1 nickles ")
            })
            test("It should return change up to the penny", () =>
            {
                const result = CoinCounter(1.44);
                expect(result).toEqual("5 quarters 1 dimes 1 nickles 4 pennies ")
            })

    });


