const dogsJulia = [3, 5, 2, 12, 7];
const dogsKate = [4, 1, 15, 8, 3];

const dogsJulia2 = [9, 16, 6, 8, 3];
const dogsKate2 = [10, 5, 6, 1, 4];

function checkDogs(dogsJulia, dogsKate) {
    // cuts out the correct dogs, gets rid of the cats
    const dogJuliaCorrect = dogsJulia.slice(1, -1);
    // joins the two arrays
    const allDogs = [...dogJuliaCorrect, ...dogsKate];
    allDogs.forEach((dog, i) => {
        // checks if the dog is adult or still a puppy
        const adult = dog < 3 ? 'still a puppy' : `an adult, and is ${dog} years old`;
        console.log(`Dog number ${i+1} is ${adult}`);
    })
}

checkDogs(dogsJulia, dogsKate);
console.log(`test data 2`)
checkDogs(dogsJulia2, dogsKate2);