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

// checkDogs(dogsJulia, dogsKate);
// console.log(`test data 2`)
// checkDogs(dogsJulia2, dogsKate2);

// challenge #2

//1.
const testData1 = [5, 2, 4, 1, 15, 8, 3];
const testData2 = [16, 6, 10, 5, 6, 1, 4];

function dogAge(dogs) {
    // gets thru dogs array and calculate each dog's human age
    return dogs.map(dog => {
        // if is less than 2 uses one formula otherwise uses the other
        return dog <= 2 ? 2 * dog : 16 + dog * 4;
    });
}

const dogAges1 = dogAge(testData1);
// console.log(dogAges1);

const dogAges2 = dogAge(testData2);
// console.log(dogAges2);

//2.
function reduceDogs(dogs) {
    // gets rid of dogs with age less than 18 human age
    return dogs.filter(dog =>  dog >= 18);
}

// console.log(reduceDogs(dogAges1));
// console.log(reduceDogs(dogAges2));

//3.
function averageDogAge(dogs) {
    // calculates average dog human age
    return dogs.reduce((acc, dog) => acc + dog, 0) / dogs.length;
}

// console.log(averageDogAge([...dogAges1, ...dogAges2]));

const allInOne = function (dogs) {
    const humanAge = dogs.map(dog => dog <= 2 ? 2 * dog : 16 + dog * 4);
    const adultDogs = humanAge.filter(dog => dog >= 18);
    const averageAge = adultDogs.reduce((acc, dog, i, arr) => acc + dog / arr.length, 0);

    console.log(humanAge);
    console.log(adultDogs);
    console.log(averageAge);
}

allInOne(testData1);
allInOne(testData2);

const calcAverageHumanAge = function (dogs) {
    const averageAge = dogs.map(dog => dog <= 2 ? 2 * dog : 16 + dog * 4).filter(dog => dog >= 18).reduce((acc, dog, i, arr) => acc + dog / arr.length, 0);
    console.log(averageAge);
}

calcAverageHumanAge(testData1);
calcAverageHumanAge(testData2);