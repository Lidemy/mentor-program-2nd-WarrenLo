## 請找出三個課程裡面沒提到的 HTML 標籤並一一說明作用。

- `<br>`<br>
在元素中換行 (carriage-return)。在維尼寫詩或寫地址的時候常會用到。<br>
使用 `<br>`時，不需要使用結束的標籤，因為他是 empty tag。<br>

- `<iframe>`<br>
iframe 是一個文檔中的文檔，行內框架。聽起來很...饒舌。<br>
我們只要知道多數網站裡面嵌入的 google map 和 youtube 影片，都是使用 iframe 標籤。<br>

- `<input>`<br>
可以讓使用者輸入訊息，根據不同的 `type` 可以改變輸入的形式。<br>
  - `checkbox`：　勾選選項（複選），在 to-do list 裡面，可以讓使用者勾選完成事項的按鈕。<br>
  - `file`: 上傳檔案按鈕，我們時常要上傳照片到fb的時候，點選的 `選擇檔案` 按鈕，<br>
  - `radio`:　單選按鈕。在選擇性別 male/ female 時會用到的按鈕。<br>
  - `submit`: 提交按鈕。會將輸入的訊息傳送到 action 中指定的位置。<br>
  - 搭配 `<datalist>` 和 `<option>` 可以製作選單，讓使用者選取預設選項。<br>

## 請問什麼是盒模型（box model）
Box Model 是 CSS 中最基礎也最重要的觀念，<br>
在網頁中，每個元素被視為一個一個的盒子，<br>
盒子對內、對外都可以設定的尺寸，<br>
而 Box Model 就是用來定義網頁中每個元素的尺寸。<br>
網頁每個元素的內容放在 Box Model 裡面，<br>
Box Model 有四個主要組成，由內到外 :<br>
- **`content`** : 元素的內容，可以是文字、圖片、影片...等等

- **`padding`** : 內容與邊框之間的空間

- **`border`** : 元素的邊框

- **`margin`** : 每個元素間的空間

另外在 Box Model 中，還有兩個重要的參數 : `width` 跟 `height`<br>
這兩個參數的定義會隨著 box-sizing 的設定而改變。<br>

box-sizing 可以設為 `content-box` 和 `border-box`<br>

box-sizing 的預設值為 `content-box`<br>
- width = content 的寬度
- height = content 的高度

當 box-sizing 被設為 `border-box` 時<br>
- width = content + padding + border 的寬度
- height = content + padding + border 的高度

> 沒想到我寫的花瓶文，會被老師看到，哈哈哈哈哈哈

## 請問 display: inline, block 跟 inline-block 的差別是什麼？
inline-block 顧名思義，結合了 inline 和 block 的特性。<br>
inline-block 對外展現 inline 的特性，元素會在同一行呈現。<br>
inline-block 對內展現 block 的特性，可以調整元素的 width 和 height。<br>

## 請問 position: static, relative, absolute 跟 fixed 的差別是什麼？
- static 是 CSS position 的預設值，<br>
元素 **不會被特別定位** 在頁面的特殊位置上，<br>
而是被瀏覽器預設的配置，自動排版在頁面上。<br>

- relative 是相對於 static 的位置，<br>
可以使用 top, right, buttom, left 來設定相對位置。<br>
假設有一個元素在 static 狀態下，會出現在 x, y = (100, 100) 的這個點，現在他被設定<br>
position: relative;<br>
buttom: 20px;<br>
left: 20px;<br>
這樣這個元素會出現在 (100+20px, 100-20px) 的點。<br>

- fixed 會相對於瀏覽器視窗來定位，<br>
可以使用 top, right, buttom, left 來設定位置。<br>
隨著頁面捲動，還是會出現在相同的位置。(和等一下會提到的 absolute 不同之處)<br>
我們常看到網頁有不管怎麼往下往上滑，永遠都在旁邊出現煩死人的廣告，就是使用 fixed 定位。<br>

- absolute 最重要的定義是，<br>
他會固定在 **上一個有定義 position 的元素** 的相對位置。<br>
當沒有其他被定義 position 的元素時 (static 不算)，就會以 `<body>` 當作參考點。<br>

