
let str = "Vishnu Priya"

function vowels(str) {
    let arr = []
    const vowel = ['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 'U', 'u']
    for (let char of str)
        if (vowel.includes(char) && !arr.includes(char)) {
            arr.push(char)

        }
    return arr
}
console.log(vowels(str))

// Second Method

function vowels(str) {
    const vowel = /[aeiou]/gi;
    const arr = str.match(vowel) || [];
    console.log(arr);
}
vowels(str);