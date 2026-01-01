# 鏈魂宗網站開發筆記 (DEV_NOTES)

此文件用於記錄網站開發過程中的決策、進度與待辦事項。

## 📅 更新日期：2025-12-31

## ✅ 已完成事項 (Done)

### 1. 基礎環境架設
- [x] 複製 `astrogon` 模板並初始化 Git。
- [x] 設定 GitHub Pages 部署流程 (`.github/workflows/deploy.yml`)。
- [x] 建立專案環境設定文件 `GEMINI.md`。

### 2. 品牌識別 (Branding)
- [x] **網站標題**：更改為「鏈魂宗」。
- [x] **Logo**：更換首頁大圖為 `src/assets/logo.png`。
- [x] **Profile**：更換關於頁面圖片為 `src/assets/profile.png`。
- [x] **版權宣告**：頁尾更新為「© 鏈魂宗 2025」。

### 3. 導覽與連結 (Navigation & Links)
- [x] **社群連結**：頁尾新增並客製化連結 (Line, Twitter/X, Threads, GitHub, Substack)。
- [x] **精簡導覽列**：調整為「首頁、新手教學、文章、幣圈術語、項目介紹、關於」。
    - Docs -> 新手教學
    - Blog -> 文章
    - Glossary (formerly Poetry) -> 幣圈術語
    - Recipes -> 項目介紹
    - About -> 關於
    - (隱藏：Index Cards, Authors, Portfolio)

### 4. 頁面內容 (Content)
- [x] **首頁**：更新歡迎標題與描述。
- [x] **關於頁**：更新圖片與簡易介紹文案。

---

## 🚀 待辦事項 (To-Do List)

### 🔴 優先 (High Priority)
- [ ] **內容填充**：目前各區塊（文章、教學、術語）仍為模板範例內容，需逐步替換為真實內容。
    - [ ] 撰寫第一篇「新手教學」 (Docs)。
    - [ ] 撰寫第一篇「文章」 (Blog)。
    - [ ] 撰寫第一則「幣圈術語」 (Glossary / `src/content/glossary`)。
- [ ] **項目介紹 (Recipes)**：目前結構仍是食譜 (Ingredients, Instructions)，需要調整資料結構 (Schema) 以符合「項目介紹」的需求 (例如：項目名稱、代幣符號、公鏈、介紹文)。
    - [ ] 新 Layout 草案：保留卡片入口，詳情改為 metadata + highlight list + link grid 格式，先記錄在此筆記。

### 🟡 次要 (Medium Priority)
- [ ] **SEO 設定**：確認 meta tags、open graph 圖片等是否正確顯示。
- [ ] **搜尋功能**：確認 Pagefind 搜尋是否支援中文內容索引。
- [ ] **樣式微調**：根據品牌色系調整 Tailwind 設定 (如需)。

### 🟢 待決定 / 點子 (Ideas)
- [ ] **Index Cards**：目前隱藏，未來可用於展示什麼？(NFT 展示？精選語錄？)
- [ ] **Authors**：如果是多人共筆，未來可以開啟此功能。
- [ ] **Portfolio**：未來可改為「合作夥伴」或「過往足跡」。

---

## 📝 架構決策紀錄
*   **導覽列調整**：為了符合加密貨幣教育平台的定位，將原有模板功能重新對應：
    *   `Recipes` -> `項目介紹` (利用其圖文並茂的卡片特性)
    *   `Glossary` (formerly Poetry) -> `幣圈術語` (利用其輕量短文特性)
    *   `Docs` -> `新手教學` (利用其多層級目錄特性)

---

## 🚩 開發回顧與建議 (Retrospective - 2026-01-01)

### 1. 關於「項目介紹 (Projects)」轉型為「加密項目 (Protocols)」
*   **成功經驗**：
    *   Schema 設計建議：包含 `token`, `consensus`, `category`, `website`, `whitepaper`, `explorer` 以及動態 `stats` 陣列。
    *   Layout 設計建議：採用側邊欄 (Sidebar) 展示元數據，主欄位展示 Markdown 正文，能有效提昇專業感。
*   **技術障礙**：直接在 `projects` 資料夾修改會與舊有的食譜檔案衝突。
*   **建議**：建立全新的 Collection (如 `protocols`)，並在 `src/pages/` 建立對應目錄。

### 2. 關於「文章 (Blog)」改名為「幣圈新聞 (News)」
*   **重大障礙**：
    *   **依賴過深**：`blog` 關鍵字遍佈於 `src/pages/`, `src/components/`, `src/types/`, 以及 `src/lib/` (如 `similarItems.ts`)。單純的資料夾更名會導致麵包屑 (Breadcrumbs)、分頁、分類頁全數失效。
    *   **元件依賴**：模板元件（如 `Sidebar.astro`）內部邏輯複雜，手動改寫時容易遺漏閉合標籤或誤刪隱性依賴（如 `Chip` 元件可能並非獨立檔案而是 inline 定義或來自其他庫）。
*   **建議策略**：
    1.  **保持 URL 不變**：若非必要，URL 可保留 `/blog`，僅修改標題文字與 Schema 定義。
    2.  **分段式重構**：若一定要改路徑，應先在 `content.config.ts` 新增 Collection，逐一搬遷頁面並測試，而非一次性全域取代。
    3.  **原子化提交**：每完成一個小區塊（如 Protocols 建立成功）即進行 `git commit`，避免多個重構任務交織導致無法部分還原。

### 3. 工具使用警示
*   **檔案截斷風險**：在處理大型 Astro 元件時，使用 `replace` 或 `write_file` 需極度小心縮排與閉合括號，建議修改後立即執行 `npm run dev` 檢查錯誤控制台。
*   **伺服器快取**：修改 `content.config.ts` 後，務必重啟 Astro 開發伺服器以刷新 Collection 緩存。

### 4. 框架品質觀察 (2026-01-01)
*   **優點**：內容結構清晰（collection + contentParser + taxonomy），共用元件完整（Card/Collection/Entry/Taxon/Sidebar/Share），Tailwind + Astro 易於主題化，Fuse 搜尋免後端。
*   **耦合問題**：共用元件原本硬編 `/blog` 路徑、Share baseURL 等，新增 collection 時需大量替換。已局部泛用化，但 Breadcrumb、PageHeader 文案仍需檢查是否可接受。
*   **型別/欄位假設**：多處直接讀 `date/categories/tags`，對無此欄位的 collection 可能 runtime 出錯，需加可選判斷或分型別 props。
*   **搜尋限制**：現用 Fuse client-side，中文無斷詞，依最短字數 + 模糊度；內容增多時效能下降。若要擴充，考慮 Pagefind 或簡易 n-gram 分詞。
*   **硬碼設定**：Share `baseURL` 仍是 `https://janedoe.com`，應改環境設定或 site config。
*   **工程化缺口**：缺少 lint/test/astro check/CI；重構易回歸。建議至少加入 build + format + astro check 到 CI。

### 2026-01-02 穩定性調整
*   共用元件泛用化：Card/Sidebar/Taxa/Taxon/Entry/Collection/Share 支援傳入 `collection`/`folder`，新增 collection 時避免硬編 `/blog` 連結。
*   Share / BaseLayout 改用 `Astro.site`（或當前 origin）解析 `baseUrl`，避免硬碼 `janedoe.com`。仍需後續將 `public/CNAME` / `robots.txt` 等域名設定更新為正式網址。
*   搜尋：Fuse 加入 bigram n-gram（含中文）並放寬門檻（minMatchCharLength 1、輸入長度 >0），部分關鍵字可匹配；若內容量增長仍建議改 Pagefind 或加入更完整分詞。
*   網域設定：`public/CNAME`、`public/robots.txt` 已改為 `chainsoulsect.github.io`；Terms 內文字同步更新。若未來使用自訂網域，需再調整上述檔案與 astro.config `site`。
*   CI：新增 `.github/workflows/ci.yml`，push/PR 跑 `npm ci` → `npm run build` → `npm run postbuild`；部署流程仍由 `deploy.yml` 處理。

### 2026-01-05 ToC（目錄）編輯指引
*   ToC 只抓標題（h1~h3），清單不會進入目錄。若文中標題太少，側邊目錄會消失。
*   新聞稿最佳實務：至少放 4–6 個標題，建議結構：
    *   `## 事件摘要`
    *   `## 關注重點` 下可用 `###` 分拆重點（例：託管方案／流動性提供／費率競爭）
    *   `## 影響觀察`
*   不建議自動將清單轉錨點：容易造成目錄過長、層級混亂且行動版佔位；若未來要自動化，需限制條數與層級，並經額外測試。

未處理但需留意：
*   搜尋長遠方案：Pagefind 或更佳的中文分詞策略尚未導入。
*   站點文案/品牌：BaseLayout `siteTitle/Description/Author` 仍為模板值；Footer 年份未自動化；Breadcrumb/PageHeader 中英混雜未 i18n。
*   型別安全：共用元件仍假設部分欄位存在（date/categories/tags），若未來有無此欄位的 collection 需補防呆或分型別 props。
