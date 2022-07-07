// factorial-for

var factorial = 10

for (let i = 1 ; i<10 ; i++) {
    factorial *= i;
}

console.log(factorial)

//factorial-while

let i= 0
let factorial2= 10

while (i<9) {
    i++;
    factorial2 *= i;
}

console.log(factorial2)

//factorial-break

let j=0;
factorial3 = 10

while (true) {
    j++
    factorial3 *= j;
    if (j > 8){
        break;
    }
}

console.log(factorial3)