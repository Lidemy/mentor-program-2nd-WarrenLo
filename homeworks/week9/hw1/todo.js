function qselect(target){
  return document.querySelector(target);
}

// 創造新的 item
function create_item(){
  let content = qselect('.todo__create').value;
  // 檢查按下的案件是否為 Enter or Return ， keyCode = 13。
  if (event.keyCode == 13){
    if (content === ''){
      alert('Please input new item.')
    }else{
      // 計算目前清單中已存在多少個 item，將新 item 的 id 設為總數 +1。
      let num_item = document.querySelectorAll('.todo__check').length + 1;

      // 新 item 的 html tags
      let new_item =
      `<label class='todo__input todo__check' id='item_` + num_item + `'>
        <input type='checkbox' class='check-box'/>
        <div class='check-icon'></div>
        <div class='check-content'>` + content + `</div>
        <label class='check-delete' onclick='delete_item(this.id)' id='` + num_item + `'><i class="fas fa-times"></i></label>
      </label>`

      // 把 new_item 加到 <div id='form'> 裡面。

      qselect('#items').innerHTML += new_item;

      // 這一步驟在寫作業的過程中出現兩個問題
      //  1. chrome 會一直出現 Form submission canceled because the form is not connected
      //  2. 如果用 <div id='items'> 把 <label> 包起來，然後要把 new_item 加到 <div id='items'> 裡面，在執行完之後，頁面會直接重新整理
      // 解決方法 : 原本 <input type='text'> 是被包在 <form> 裡面。 如果把 <form> 拿掉，就不會觸發 submit 事件。
      // 以上兩個問題均可解決。
      // 但是上述的解決方法造成另一個問題 : 在指定把 new_item 加到 <div id='items'> 之後，原本輸入的文字不會消失。

      qselect('#todo__create').value = ""
      // 將 input text 的內容清除
    }
  }
}

function delete_item(id){
  let label_id = '#item_' + id;
  qselect(label_id).style.display = 'none';
}
