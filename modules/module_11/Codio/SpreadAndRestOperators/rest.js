// TODO: create the function sumAll
function sumAll(x, y, ...rest) {
    let newList = [x, y, ...rest];
    let add = 0;
    for (let i = 0; i < newList.length; i++){
         add += newList[i];
    }
    return add;
}

//solution provided
// const sumAll = (...args) => {
//     let sum = 0;
//     for (let arg of args) sum += arg;
//     return sum;
//   };
console.log(sumAll(1, 2)); // expected output: 3
console.log(sumAll(1, 2, 3)); // expected output: 6
console.log(sumAll(1, 2, 3, 4)); // expected output: 10