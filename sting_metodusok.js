import input from './input.js'

let text = await input('Adjon meg a szöveget (min 20 karakter!): ');

//1
console.log(text.slice(0,5));

//2 
console.log(text.slice(2,8));
//3 
console.log(text.slice(4));
//4
console.log(text.slice(4,10));

//5
console.log(text.toUpperCase());
//6
let txt = '';

for(let i = 1; i <= text.length; i++){
    if(i % 2 == 0){
        txt += text[i-1].toUpperCase();
    }else{
        txt += text[i-1];
    }
}
console.log(txt);

//7
console.log(text.replace(/e/g, 'E'));
//8
let arrayText = text.split('e');
console.log(arrayText);