let num = +prompt('Введите число: ');
let pow = +prompt('Введите степень числа: ');
let result = 1;

for (let i = 1; i <= pow; i++) {
    
    result *=num;
}
alert(num +' ^ '+pow+' = '+result);


let stepCount = prompt('Введите количество ступенек');
let indentSymbol = prompt('Введите символы отступов'); // *
let finishSymbol = prompt('Введите конечный символ '); // \

for (let i = 0; i < stepCount; i++) {
     if( i == 0){ console.log(indentSymbol);}
     else{
         finishSymbol = indentSymbol + finishSymbol;
         console.log(finishSymbol);
     }
    
}

 