/*
Using iteration, write a function fibs which takes a number and returns an array containing that many numbers from the fibonacci sequence. Using an example input of 8, this method should return the array [0, 1, 1, 2, 3, 5, 8, 13].
*/

function fibs(num){
    if (num < 0){
        return 'OOPS'
    }
    let a = 1;
    let b = 0;
    let count = [0];
    for (let i = 1; i < num; i++){
        let sum = a + b;
        count.push(sum)
        a = b;
        b = count[i];
    } 
    return count
}

console.log(fibs(8))