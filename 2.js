function countAInString(str) {
    const regex = /a/gi;
    const matches = str.match(regex);
    const count = matches ? matches.length : 0;
    return `A letra 'a' aparece ${count} vezes na string.`;
}

const inputString = "Aprender programação na Alura";
console.log(countAInString(inputString));
