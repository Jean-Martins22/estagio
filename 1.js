function isFibonacci(num) {
    let a = 0, b = 1, next;
    if (num === a || num === b) {
        return `O número ${num} pertence à sequência de Fibonacci.`;
    }
    next = a + b;
    while (next <= num) {
        if (next === num) {
            return `O número ${num} pertence à sequência de Fibonacci.`;
        }
        a = b;
        b = next;
        next = a + b;
    }
    return `O número ${num} não pertence à sequência de Fibonacci.`;
}

const num = 21;
console.log(isFibonacci(num));
