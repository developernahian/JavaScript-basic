const numbers = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
for (const num of numbers) {
  console.log(num);
}

/*
output:
10
11
12
13
14
15
16
17
18
19
20

*/
console.log('********************');

//const use kora jabe na. karon increment kora jaina. karon const er man chenge kora jaina
//tai let use korte hobe
for (let num = 0 ; num <=5 ; num++){
    console.log(num);
    
}
/*
output:
0
1
2
3
4
5
*/

console.log('********* print odd *****1******');

// print odd number from 1 to 10 using for loop
 for (let num = 1 ; num <= 10 ; num+=2){
console.log(num);
 }
/*
1
3
5
7
9
*/

//  OR
console.log('********* print odd ****2*******');

for (let num = 1 ; num <= 10 ; num++){
    if (num % 2 !== 0){
        console.log(num);
    }
}
/*
1
3
5
7
9
*/
