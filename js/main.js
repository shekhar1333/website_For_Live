console.log("Hello Word");

function fullName(firstName, lastName){
    return firstName + " " + lastName;
}
console.log(fullName("shekhar", "Biswas"));

function calculateMean(numbers) {
    let sum = 0;

    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }

    return sum / numbers.length;
}


console.log(calculateMean([10, 20, 30, 40]));


function printNumbers(n) {
    if (n < 1 || n > 50) {
        console.log("Please enter a number between 1 and 50");
        return;
    }

    for (let i = 1; i <= n; i++) {
        console.log(i);
    }
}


printNumbers(7);