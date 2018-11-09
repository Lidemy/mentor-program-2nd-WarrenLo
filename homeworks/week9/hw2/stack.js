// practice Stack with javascript
// pop() & push()
function Stack(){
  let arr = [];
  this.pop = function(){
    let pop_return = arr[arr.length-1];
    let new_arr = [];
    for (let i = 0; i<arr.length-1; i++){
      new_arr[i] = arr[i];
    }
    arr = new_arr;
    // 創造 new_arr 的過程，使用 arr.pop()、 arr.splice(arr.length-1,1) 或是 arr = arr.slice(0, arr.length-1)，也可以達到相同效果
    return pop_return;
    // arr.pop() 不能放在 return 之後，不然無法執行
    // 請問老師為什麼就算使用 return arr.pop() 依然要放在 return pop_return 的前面才會被執行 ?

  }
  this.push = function(input){
    arr[arr.length] = input; // 使用 arr.push(input)，也可以達到相同效果;
  }
}
