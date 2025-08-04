產品需求說明書（PRD）
版本：1.0
日期：2024-06-xx
作者：用戶 + AI 助手
一、專案概述
1.1 背景與目標
 • 建立一個純靜態的個人電商網站，主售珠寶、香氛蠟燭、香水等小商品
 • 讓散客可瀏覽商品、完成下單並透過第三方金流付款
 • 完全部署於 GitHub Pages，零後端維運、低成本、易維護
 • Stripe Webhook 觸發的郵件通知採用 Cloudflare Workers 上的 Serverless Function，該環境由 Cloudflare 代管，仍符合零後端目標
1.2 核心指標
 • 月成交金額：新台幣 0–10,000
 • 首次上線時間：MVP 7 天內
 • 單次商品展示至下單流程：低於 3 步驟
二、使用者角色
 • 散客（無需註冊／登入）
 • 管理者（僅一人，負責上架商品、更新內容）
三、功能需求
3.1 前台
 3.1.1 首頁 / 商品列表
 - 讀取靜態資料檔（YAML/JSON）產生商品卡片
 - 支援分類篩選、文字搜尋
 3.1.2 商品詳情頁
 - 顯示商品圖片、標題、價錢、規格下拉選單（大／中／小等）
 - 僅提供「立即購買」按鈕
 3.1.3 購物車與結帳
 - MVP 採用 Stripe Payment Links：無購物車，商品按「立即購買」導向 Stripe 結帳頁
   - 理由：免後端、設定快速，支援信用卡與多種付款方式
   - 設定步驟：
     1. 建立 Stripe 帳號並啟用 Payment Links
     2. 在 Stripe Dashboard 建立產品與價格，產生 Payment Link
   3. 將每項商品的 `stripe_link` 欄位填入對應 URL，前台按鈕直接連結
  - 購物車功能列為後續階段需求
  - 依賴：僅需 Stripe 帳號，無額外前端套件
  - 未來可整合 PayPal 或 Snipcart 提供多元金流
 3.1.4 下單確認
 - 完成付款後由 Stripe Webhook 觸發部署於 Cloudflare Workers 的 Serverless Function，透過 SendGrid API 寄送訂單確認給買家與管理者；程式碼與前端同一 repo 管理，使用 `wrangler` 部署，無需自行維運伺服器
 - 通知格式需包含：訂單編號、購買明細（商品名稱、規格、數量、單價、小計）、總金額、付款方式、購買者姓名、Email、聯絡電話、收件地址
 - 若需自訂樣式，使用 HTML 模板 `emails/order_confirmation.html`，位於專案根目錄 `emails/` 資料夾
 - Line 或簡訊通知由管理者手動處理
3.2 後台（內容管理）
商品資料以靜態檔案（_data/products.yml 或 products.json）管理
欄位統一採 text，包含 id、title、price、img、category、specs、金流參數
管理者需透過 git pull → 編輯資料 → git push 完成上架／修改
訂單管理由 Stripe Dashboard 檢視，
未來若導入 PayPal 或 Snipcart，則可於各自後台檢視訂單
 3.3 運送與費用
MVP 僅支援宅配到府；運費可於 Stripe Payment Links 中設定。
Stripe Payment Links 目前不支援台灣超商取貨（例如 7-11）。
若需要超商取貨功能，需另行整合第三方物流（如綠界、藍新）或改用其他結帳方案。
未來若採用 PayPal 或 Snipcart，則在其後台設定運費規則
 四、非功能需求
 • 響應式 RWD，支援手機／平板／桌機
 • SEO 基本優化（友善 URL、Title、Meta Description）
 • HTTPS（GitHub Pages 內建 Let’s Encrypt）
 • 載入效能佳：靜態資源壓縮、CDN（GitHub Pages）
 • 易維護：純靜態檔案、最少外部依賴
 • 可擴充：未來可改用 Headless CMS 或 Serverless
五、資料模型
products.yml 範例
id: candle01
title: 香氛蠟燭（玫瑰）
price: 350
img: /assets/img/candle01.jpg
category: candle
specs: [大, 中, 小]
stripe_link: https://buy.stripe.com/…
 六、技術選型
6.1 前端框架
Jekyll（GitHub Pages 原生支援） 或 純 HTML + JavaScript
6.2 第三方電商元件
Stripe Payment Links（MVP）
*未來擴充*: PayPal 標準按鈕、Snipcart
6.3 部署與 CI/CD
GitHub Pages 自動部署
Git 分支流程：main 為生產，feature 分支做開發
 6.4 版型與設計
選用免費 Jekyll Theme（如 Minimal Mistakes、Cayman 等）
自訂 Logo、配色、字體
6.5 Serverless Function
- Cloudflare Workers；程式碼與前端一併版控，透過 `wrangler` 指令佈署與版本管理，仍屬無伺服器服務
 七、整合項目
 • 金流：Stripe 帳號（MVP），未來可考慮 PayPal 或 Snipcart
 • 運送：Stripe Payment Links 內建運費設定；未來可改由 PayPal／Snipcart 後台規則
 • Email 通知：Stripe Webhook 觸發部署於 Cloudflare Workers 的 Serverless Function 安全呼叫 SendGrid API 寄送訂單資訊；由 Cloudflare 自動擴展與管理，維持零後端架構
 • 分析：目前無
八、里程碑
 Repo 設置＋GitHub Pages 開通（Day1）
 選定版型＋佈局測試（Day2–Day3）
 建立資料模型＋商品列表／搜尋／篩選功能（Day4）
 商品詳情＋金流按鈕整合（Day5）
 測試下單流程＋SendGrid Email 通知（Day6）
 最終調整＋上線發佈（Day7）
 九、交付項目
 • 完整 GitHub Repo（含 .gitignore、README、_data、_layouts、assets）
 • Jekyll 配置檔 _config.yml
 • products.yml 範例檔
 • 前台頁面（index.html, product.html, 404.html）
 • CSS／JS 檔案
 • 版型套件與自訂樣式
 • 部署說明文件
十、開發前需補充資料 / 給開發方的注意事項
 GitHub Repo 權限（admin or write）
 選定的 Jekyll Theme 名稱及版本
 已註冊的 Stripe 帳號與 Publish Key（MVP）
 SendGrid API Key 與 Cloudflare Workers 帳號／`wrangler` 設定（用於部署 Serverless Function）
 未來若擴充 PayPal 或 Snipcart，需提供相應帳號與 API Key
 運費計費規則（價格／免運門檻）
 SendGrid Email 通知範本（訂單確認／付款通知）
 Logo、色票、字型檔、商品圖片與文案素材來源
 資料夾結構與檔案命名慣例
 本地開發流程（jekyll serve 或靜態伺服器指令）
 分支命名與 PR 流程、Code Review 準則
 測試／驗收標準（跨瀏覽器、行動裝置）
 上線後維運流程（如何更新商品、如何做備份）
 若未來需更換金流或加會員功能，請預留 code hook：於 checkout 模組封裝可替換的 `initPayment()` 函式，並在會員登入／註冊流程預留 `initMembership()` 介面，以便日後掛載 Stripe、PayPal 或自建會員服務。