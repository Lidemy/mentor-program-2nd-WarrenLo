// practice Queue with javascript
// pop() & push()
function Queue(){
  let arr = [];
  this.pop = function(){
    let pop_return = arr[0];
    let new_arr = [];
    for (let i = 0; i<arr.length-1; i++){
      new_arr[i] = arr[i+1];
    }
    arr = new_arr;
    // 創造 new_arr 的過程，使用 arr.shift()、 arr.splice(0,1) 或是 arr = arr.slice(1,arr.length)，也可以達到相同效果
    return pop_return;
    // arr.shift() 不能放在 return 之後，不然無法執行
    // 請問老師為什麼就算使用 return arr.shift() 依然要放在 return pop_return的前面?

  }
  this.push = function(input){
    arr[arr.length] = input; // 使用 arr.push(input)，也可以達到相同效果;
  }
}
