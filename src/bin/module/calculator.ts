
function addNumbers(num1: number, num2: number): number {
    return num1 + num2
}

function subtractNumbers(num1: number, num2: number): number {
    return num1 - num2
}

function devideNumbers(num1: number, num2: number): number {
    return num1 / num2
}

function multiplyNumbers(num1: number, num2: number): number {
    return num1 * num2
}

function squareNumbers(num1: number, num2: number): number {
    return num1 * num2
}

function powerOfNumber(num1: number, num2: number): number {
    let sum = 1;
    for (let i = 1; i <= num2; i++) {
        sum *= num1;
    }
    return sum;
}
export { addNumbers, squareNumbers, subtractNumbers, devideNumbers, multiplyNumbers, powerOfNumber }