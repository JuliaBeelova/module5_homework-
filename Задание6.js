let arr = [1,2,1];
let a = true;
for (i = 1; i < arr.length; i++) {
  if(arr[i] != arr[0]){
     a = false
     break
  }
}
console.log(a)