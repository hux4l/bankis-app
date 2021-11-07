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


// challenge x4

const dogs = [
    {
        weight: 22,
        curFood: 250,
        owners: ['Alice', 'Bob']
    },
    {
        weight: 8,
        curFood: 200,
        owners: ['Matilda']
    },
    {
        weight: 13,
        curFood: 275,
        owners: ['Sarah', 'John']
    },
    {
        weight: 32,
        curFood: 340,
        owners: ['Michael']
    },
]

// 1. calculate average dog portion of food weight * 0,75 * 28
console.log('Challenge #4\n\n\n')

const calcRecFood = function (dogs) {
    return dogs.map(dog => dog.recFood = Math.trunc(Math.pow(dog.weight, 0.75) * 28));
}

// dogs.forEach(dog => (dog.recFood = Math.trunc(dog.weight ** 0.75 * 28)));
// console.log(dogs);

// 2.   find Sarah's dog and calculate if eats good
const findSarahDog = function (dogs) {

    // find dog that belongs to sarah
    const sDog = dogs.find(dog => dog.owners.includes('Sarah'));

    // check how much eats the dog
    const dogFood = dogF => {
        if (dogF.curFood <= dogF.recFood * 0.9) {
            return 'too little';
        } else if (dogF.curFood >= dogF.recFood * 1.1) {
            return 'too much';
        } else {
            return 'well';
        }
    }

    console.log(`Sarah your dog eats ${dogFood(sDog)}`);
}

console.log(calcRecFood(dogs));
findSarahDog(dogs);


// 3. Array containing all owners that eats too little or too much
const ownersEatTooMuch = [];
const ownersEatTooLittle = [];

const ownersEating = function (dogs) {
    dogs.map(dog => {
        if (dog.curFood <= dog.recFood * 0.9) {
            ownersEatTooLittle.push(...dog.owners);
        } else if (dog.curFood >= dog.recFood * 1.1) {
            ownersEatTooMuch.push(...dog.owners);
        }
    });
};

//3. another way
const dogsLittle = dogs.filter(dog => dog.curFood <= dog.recFood * 0.9 ? dog.owners : '').map(own => own.owners).flat(3);
const dogsMuch = dogs.filter(dog => dog.curFood >= dog.recFood * 1.1).map(own => own.owners).flat(3);

ownersEating(dogs);

//4. string of owners dogs eating too much or little
console.log(`${ownersEatTooMuch.join(' and ')}'s dogs eat too much!`);
console.log(`${ownersEatTooLittle.join(' and ')}'s dogs eat too little!`);



//5. if theres any dog that eats good
const dogExactly = dogs.filter(dog => dog.curFood === dog.recFood).map(own => own.owners).flat();

console.log(dogs.some(dog => dog.curFood === dog.recFood));

console.log(dogsLittle);
console.log(dogsMuch);
console.log(dogExactly);

//6.
const dogOk = dogs.filter(dog => dog.curFood <= dog.recFood * 1.1 && dog.curFood >= dog.recFood * 0.9).map(own => own.owners).flat();
console.log(dogOk);

// 7. array of dogs eating ok
console.log(dogs.some(dog => dog.curFood <= dog.recFood * 1.1 && dog.curFood >= dog.recFood * 0.9));

const dogsOk = dogs.find(dog => dog.curFood <= dog.recFood * 1.1 && dog.curFood >= dog.recFood * 0.9);
console.log(dogsOk);

// 8. sort based on food portion
const dogsCopy = dogs.slice().sort((a, b)  => a.recFood - b.recFood);
console.log(dogsCopy);