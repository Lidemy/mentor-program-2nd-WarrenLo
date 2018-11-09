## CSS 預處理器是什麼？我們可以不用它嗎？
### CSS Preprocessor 是什麼?
  - CSS Preprocessor 可以將預處理器語法轉化成 CSS
  - 方便開法者管理 CSS ; 提高開發速度、降低維護困難度
  - 熱門 CSS Preprocessor :
    - Sass (Syntactically Awesome Stylesheets; 語法好棒棒樣式表)
    - less
    - Stylus
### 可以不用它嗎?
  - 可以不用 CSS Preprocessor。
  - CSS Preprocessor 的發展，是為了要解決 CSS 不具程式語言特性，而造成編寫及維護上的困難 ;
  然而，沒有 CSS Preprocessor，依然可以編寫 CSS。
  - CSS & CSS Preprocessor 小歷史 :
  CSS 最早是在1996年公布，而直到2007年，最熱門的 CSS Preprocessor 之一 *Sass* 才與世人見面
  ( 中間十年，前端工程師應該跟前一個月的我們一樣，維護 CSS 到想自殺吧... )


## 請舉出任何一個跟 HTTP Cache 有關的 Header 並說明其作用。
### Cache-Control & max-age
  - Syntax : `Catch-Control : max-age=60`
  - max-age 單位為 *秒*
### Cache-Control & max-age 功能說明 :
  1. 在發送 request 後，計算下次發送 request 的時間
  2. 如果沒有超過 max-age 所設定的時間 (還沒過保存期限)，則會直接從 cache 抓取檔案。
  3. 如果超過 max-age 所設定的時間 (已過期)，則會再次發送 request ，向 server 拿取檔案。
  - 潛在問題 : max-age 過期，不代表檔案不能使用。使用 Last-Modified & If-Modified-Since 可以解決此問題。


## Stack 跟 Queue 的差別是什麼？
### Stack (堆疊) : Last In First Out
  - 元素的增減都發生在頂端 (Front)
  - 程式語言的 Stack 應用 :
  編譯器與記憶體儲存變數
  - 生活中的 Stack 應用 :
  桌上放了一疊書，最早放得在下面，最晚放的在上面，要拿書只能從最上面拿。
### Queue (佇列) : First In First Out
  - 新增元素發生在尾端 (Rear)
  - 刪除元素發生在頂端 (Front)
  - 計算機科學的 Queue 應用 :
  印表機的列印工作排程
  - 生活中的 Queue 應用 :
  到便利商店結帳要排隊，先到的先結帳，晚到的晚結帳。沒排隊就永遠別結帳。

## 請去查詢資料並解釋 CSS Selector 的權重是如何計算的（不要複製貼上，請自己思考過一遍再自己寫出來）
### CSS Specifity
#### 定義 : 決定所有元素樣式的顯示順序
  - 加法計算
  - 每個 CSS Selector 都有固定的分數
    (ex : class = 10 分; id = 100 分)
  - 比大小 : 分數最大的 style 顯示
  - 同分 : 顯示最後一個 style (Latest Rule)
  - 行內樣式 (Inline Style) 優先顯示
  - Inline > Internal = External
    (Internal 跟 External 顯示順序遵守 Latest Rule)

### CSS Specifity Calculation
#### Important >> Inline Style > ID > Class = Attribute = Pseudo-Class > Element = Pseudo-Elements > * (all)

  - `!Important` : 1-0-0-0-0  (只有 Important 能超越 Important)
  - `Inline Style` : 1-0-0-0
  - `ID` : 0-1-0-0
  - `Class` = `Attribute` = `Pseudo-Class` : 0-0-1-0
  - `Element` = `Pseudo-Elements` : 0-0-0-1
  - `* (all)` : 0-0-0-0
