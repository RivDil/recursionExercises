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


const fibsRec = (num) => {
    if (num <= 0) {
      return [];
    } else if (num === 1) {
      return [0];
    } else if (num === 2) {
      return [0, 1];
    } else {
      const fibo = fibsRec(num - 1);
      fibo.push(fibo[fibo.length - 1] + fibo[fibo.length - 2]);
      return fibo;
    }
  };

console.log(fibsRec(8))

function mergeSort(array){
    if (array.length <= 1){
        return array;
    }else{
        let middle = array[Math.floor((array.length) / 2)];
        let firstHalf = array.slice(0, array.indexOf(middle));
        let secondHalf = array.slice(array.indexOf(middle),array[-1]);
        return merge(mergeSort(firstHalf), mergeSort(secondHalf));
    }
}

function merge(left, right) {
    const result = [];

    while (left.length && right.length) {
        if (left[0] < right[0]) {
            result.push(left.shift());
        } else {
            result.push(right.shift());
        }
    }

    return [...result, ...left, ...right];
}


const array = [5,8,2]
console.log(mergeSort(array))