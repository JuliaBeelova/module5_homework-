 let myArray = [1,2,3,4];
 console.log(myArray.length)
 function showWithDelay(myArray) {
    for (let i = 0; i < myArray.length; i++) {
        setTimeout(() => {
          console.log(myArray[i]);
        }, 1000 * (i + 1));
    }
}
showWithDelay([1, 2, 3, 4]);