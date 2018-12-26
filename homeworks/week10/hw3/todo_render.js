/*
用 render 的方法寫 todolist
第一次自己寫:
是將 todolist 的內容和狀態(完成或未完成)分別放在兩個 array 裡面 (list & list_status)，
這個方法的優點是寫起來很方便，但是查看 list & list_status 的內容時，可讀性差，

第二次參考老師的影片:
將 todolist 的內容、狀態以及 id，寫成 object 儲存在唯一一個 array裡面，
此法的優點是可讀性佳，將 list 儲存在 localStorage，也更好管理。
但是要對 array 的操作更加熟習，才可以寫得出來。需要再找時間加強這點。
*/

var list = [];
var id = 1;

function add(todo, id){
  list.push({
    todo: todo,
    isCompleted: false,
    id: id
  });
  render();
}

function remove(id){
  list = list.filter( (todo) =>
    todo.id !== Number(id)
  )  //從 DOM 裡面取得的 id 是字串，需轉成數字才可使用
  render();
}

function completed(id){
  list = list.map( (todo) => {
    if(todo.id !== Number(id)){
      return todo
    }else{
      return{
        ...todo,
        isCompleted: !todo.isCompleted
      }
    }
  })
  render()
}

function render(){
  qselect('.todo__items').innerHTML =  "";
  for (let i = 0; i < list.length; i++){
    qselect('.todo__items').innerHTML +=
    `
    <label class='todo__input todo__items--check check' data-id='${list[i].id}' data-completed='${list[i].isCompleted}'>
      <input type='checkbox' class='check__box' />
      <div class='check__icon'></div>
      <div class='check__content'>${list[i].todo}</div>
      <label class='check__delete'><i class="fas fa-times"></i></label>
    </label>
    `
    let status = document.querySelectorAll('.check');
    let completed = status[i].getAttribute('data-completed')
    if (completed == 'false'){
      status[i].querySelector('.check__icon').style.background = 'transparent';
      status[i].querySelector('.check__icon').style.border = '3px solid rgb(129, 216, 208)';
      status[i].querySelector('.check__content').style.color = 'rgba(0,0,0,1)';
      status[i].querySelector('.check__content').style.textDecoration = 'none';
    }else{
      status[i].querySelector('.check__icon').style.background = 'rgba(0,0,0,0.2)';
      status[i].querySelector('.check__icon').style.border = '2px solid rgba(0, 0, 0, 0.2)'
      status[i].querySelector('.check__content').style.color = 'rgba(0,0,0,0.2)';
      status[i].querySelector('.check__content').style.textDecoration = 'line-through';
    }
  }
  id = list[list.length-1].id +1 //防止載入 losal storage 之後，新增的項目 id 重複
  save_list();
}

function qselect(target){
  return document.querySelector(target);
}

function save_list(){
  window.localStorage.setItem('list', JSON.stringify(list))
}

document.addEventListener('DOMContentLoaded', function(){

  var list_data = window.localStorage.getItem('list')
  if(list_data){
    list = JSON.parse(list_data)
    render()
  }

  function create_todo(){
    let new_todo = qselect('.todo__create--text').value;
    // 檢查輸入內容是否有填寫或是只有空格，使用 str.trim() 消除字串前後的空格，再做檢查
    if(new_todo.trim() !== ""){
      add(new_todo, id);
      qselect('.todo__create--text').value = '';
    }else{
      alert('請輸入代辦事項');
    }
  }
  qselect('.todo__create--text').addEventListener('keyup', function(){
    if(event.keyCode == '13'){
      create_todo();
    }
  })

  qselect('.todo').addEventListener('click', function(e){
    if (e.target.classList.contains('todo__create--submit')){
      create_todo();
    }else if(e.target.classList.contains('fa-times')){
      if(confirm('確定要刪除此項目?')){
        let id = e.target.parentElement.parentElement.getAttribute("data-id")
        remove(id);

      }
    }else if(e.target.classList.contains('check__icon') || e.target.classList.contains('check__content') ){
      let id = e.target.parentElement.getAttribute("data-id");
      completed(id)
    }
  })
})
