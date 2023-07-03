import readlineSync from 'readline-sync'

function noBoringZeros(n) {
    let num = n.toString().split('');
    let arr = []

    for (let i=0;i<num.length;i++){
        if (num[i] != 0){
            arr[i] = num[i]
        }
    }

    return parseInt(arr.join(""))
  }
 let n = readlineSync.questionInt("Input number : ");
console.log(noBoringZeros(n));
  