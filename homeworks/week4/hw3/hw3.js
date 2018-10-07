const client_id = 'lnrt3iavc4ufk64htsyqzmhzwsdlj8'; // clint_id of twitch api
const display_number = 40; // 定義出現實況的數量
const game = 'League%20of%20Legends'; // 選擇實況遊戲
const twitch_url = 'https://api.twitch.tv/kraken/streams?game=' + game + '&limit=' + (Math.ceil(display_number/3)*3) + '&client_id=' + client_id; // api 的 url

const request = new XMLHttpRequest(); // 建立 XMLHttpRequest 物件
request.open('GET', twitch_url, true); // 開啟 url; 設定 true = 不同步
request.send(); // 發送請求

// 當請求成功 (XMLHttpRequest.onload = callback)
request.onload = function(){
  // 當請求成功後，檢查 http status，如果 status code 是 2XX or 3XX，代表成功。
  if (request.status >= 200 && request.status < 400){
    const respjson = JSON.parse(request.responseText); // 讀取目標 url 的資料，並將 string 轉成 json
    const api_stream = respjson.streams; // 擷取 json 檔案裡的 stream 資訊
    const channel_name_length = 15; // 限制頻道名稱長度，以免字串過長造成跑版
    creatrow(display_number, channel_name_length, api_stream); //執行 creatrow (詳細說明請見下方 function)
  }

  // 如果最後一排只要顯示一格頻道，將其他兩個頻道的 outerHTML 換成沒有內容的 <a> tag
  if ( display_number % 3 == 1){
    document.getElementsByClassName('block')[display_number].outerHTML = `<a class='block'></a>`;
    document.getElementsByClassName('block')[display_number+1].outerHTML = `<a class='block'></a>`;
  }

  // 如果最後一排只要顯示兩格頻道，將最後一個頻道的 outerHTML 換成沒有內容的 <a> tag
  if ( display_number % 3 == 2){
    document.getElementsByClassName('block')[display_number].outerHTML = `<a class='block'></a>`;
  }
}

// 創造一個 function， 名字 creatrow()，用途是將 json 資料引入 html
// 包含三個變數 : 顯示數量 (display_number)、 頻道名稱長度限制 (channel_name_length)、 json 檔案裡的 streams 資料 (api_stream)。
function creatrow(display_number, channel_name_length, api_stream){
  for (let r = 0; r < Math.ceil(display_number/3); r++){

    // 宣告一個變數 newrow，其內容是包含 3格實況頻道為一排的 <div> tag，順序由觀看人數高到低。
    // 插入 : 頻道超連結 (channel.url)、 實況截圖預覽 (preview.medium)、 實況主大頭貼 (channel.logo)、 實況主名稱 (channel.display_name)、 頻道名稱 (channel.status)
    const newrow =
      `
      <div class='row'>
        <a class='block' href='${api_stream[3*r].channel.url}' target='_blank'>
          <img class='block__preview' src='${api_stream[3*r].preview.medium}'>
          <div class='block__info'>
            <img class='block__info__host' src='${api_stream[3*r].channel.logo}'>
            <div class='block__info__msg'>
              <div class='block__info__msg--name'>${api_stream[3*r].channel.display_name}</div>
              <div class='block__info__msg--channel'>${api_stream[3*r].channel.status.slice(0,channel_name_length)}</div>
            </div>
          </div>
        </a>
        <a class='block' href='${api_stream[3*r+1].channel.url}' target='_blank'>
          <img class='block__preview' src='${api_stream[3*r+1].preview.medium}'>
          <div class='block__info'>
            <img class='block__info__host' src='${api_stream[3*r+1].channel.logo}'>
            <div class='block__info__msg'>
              <div class='block__info__msg--name'>${api_stream[3*r+1].channel.display_name}</div>
              <div class='block__info__msg--channel'>${api_stream[3*r+1].channel.status.slice(0,channel_name_length)}</div>
            </div>
          </div>
        </a>
        <a class='block' href='${api_stream[3*r+2].channel.url}' target='_blank'>
          <img class='block__preview' src='${api_stream[3*r+2].preview.medium}'>
          <div class='block__info'>
            <img class='block__info__host' src='${api_stream[3*r+2].channel.logo}'>
            <div class='block__info__msg'>
              <div class='block__info__msg--name'>${api_stream[3*r+2].channel.display_name}</div>
              <div class='block__info__msg--channel'>${api_stream[3*r+2].channel.status.slice(0,channel_name_length)}</div>
            </div>
          </div>
        </a>
      </div>
      `
      document.getElementById('background').innerHTML += newrow; // 最後將建立好的 newrow，依序放入 id= background 的 <div> tag 裡。
  }
}
