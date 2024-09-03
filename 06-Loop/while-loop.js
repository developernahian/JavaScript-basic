console.log("********** while loop **********");
let num = 0;
while (num < 5) {
  console.log("looping", num);
  // num = num + 1
  // num += 1
  num++;
}

/*
output:
looping 0
looping 1
looping 2
looping 3
looping 4
*/


//show 1 to 10 and sum them using while loop

let sum = 0
let i = 1
while (i <= 10) {
  console.log(i)
  sum += i
  i++
}
console.log(sum)

/*
output:
1
2
3
4
5
6
7
8
9
10
55
*/


// print even number from 1 to 10 using while loop
let j = 1
while (j <= 10){
     if (j % 2 === 0){
        console.log('even number', j);
        
     }
     j++
}
/*
2
4
6
8
10
*/