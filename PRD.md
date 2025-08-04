# 個人電商網站產品需求說明書（PRD）

**版本**：2.0  
**日期**：2024-06-xx  
**作者**：用戶 + AI 助手

## 一、專案概述

### 1.1 目標
建立一個**混合架構**的個人電商網站，販售珠寶、香氛蠟燭、香水等精品小物。

### 1.2 架構定義
- **前端**：純靜態網站，部署於 GitHub Pages
- **後端**：僅使用 Cloudflare Workers 處理訂單通知
- **金流**：完全依賴 Stripe Payment Links
- **特色**：低維運成本、快速上線、易於維護

### 1.3 成功指標
- 月營業額目標：NT$ 0-10,000
- 上線時間：7 天內完成 MVP
- 下單流程：3 步驟內完成（瀏覽 → 選擇 → 付款）

## 二、核心功能規劃

### 2.1 商品展示（GitHub Pages）
```yaml
功能：商品列表 + 詳情頁
技術：Jekyll + 靜態資料檔案
檔案：_data/products.yml
```

**搜尋與篩選**
- 可搜尋欄位：商品名稱、類別
- 可篩選條件：類別、價格範圍

**商品資料結構**：
```yaml
- id: "candle-rose-large"
  title: "玫瑰香氛蠟燭"
  price: 450
  image: "/assets/images/candle-rose.jpg"
  category: "candle"
  description: "法式玫瑰香調，燃燒時間約 40 小時"
  stripe_link: "https://buy.stripe.com/xxxxx"
  
- id: "candle-rose-medium"  
  title: "玫瑰香氛蠟燭"
  price: 350
  image: "/assets/images/candle-rose.jpg"
  category: "candle"
  description: "法式玫瑰香調，燃燒時間約 25 小時"
  stripe_link: "https://buy.stripe.com/yyyyy"
```

### 2.2 購買流程（Stripe Payment Links）
```
用戶瀏覽商品 → 點擊「立即購買」→ 跳轉 Stripe 結帳頁 → 完成付款
```

**重要限制**：
- 每個規格需建立獨立的 Stripe Payment Link
- 無購物車功能（MVP 階段）
- 運費直接在 Stripe 中設定

### 2.3 訂單通知（Cloudflare Workers）
```
Stripe 付款成功 → Webhook 觸發 → Cloudflare Workers → SendGrid 寄信
```

**通知內容**：
- 寄給買家：訂單確認信
- 寄給賣家：新訂單通知
- 包含：訂單號、商品資訊、金額、收件資訊

## 三、技術架構

### 3.1 前端技術棧
- **框架**：Jekyll（GitHub Pages 原生支援）
- **樣式**：Bootstrap 5 + 自訂 CSS
- **主題**：基於 Minima 主題修改
- **檔案結構**：
```
├── _data/
│   └── products.yml          # 商品資料
├── _layouts/
│   ├── default.html         # 基礎布局
│   └── product.html         # 商品詳情頁
├── assets/
│   ├── css/
│   ├── js/
│   └── images/
├── index.html               # 首頁
└── _config.yml             # Jekyll 配置
```

### 3.2 後端服務
- **平台**：Cloudflare Workers
- **功能**：接收 Stripe Webhook，發送訂單通知
- **部署**：使用 Wrangler CLI
- **檔案**：
```
workers/
├── webhook-handler.js       # Webhook 處理邏輯
├── wrangler.toml           # Workers 配置
└── package.json            # 依賴管理
```

### 3.3 第三方服務整合
| 服務 | 用途 | 費用 |
|------|------|------|
| Stripe | 金流處理 | 2.9% + NT$10/筆 |
| SendGrid | 郵件發送 | 免費額度 100封/日 |
| Cloudflare Workers | Webhook 處理 | 免費額度 100,000次/日 |

## 四、資料流程圖

```
[用戶] → [GitHub Pages 商品頁] → [Stripe Payment Link] → [付款完成]
                                                            ↓
[SendGrid 寄信] ← [Cloudflare Workers] ← [Stripe Webhook]
```

## 五、開發里程碑

### Phase 1：基礎建設（Day 1-2）
- [ ] 建立 GitHub Repository
- [ ] 設定 GitHub Pages
- [ ] 配置 Jekyll 環境
- [ ] 選定並客製化主題

### Phase 2：商品展示（Day 3-4）
- [ ] 建立商品資料結構
- [ ] 實作商品列表頁
- [ ] 實作商品詳情頁
- [ ] 加入搜尋與篩選功能

### Phase 3：金流整合（Day 5-6）
- [ ] 註冊 Stripe 帳號
- [ ] 建立 Payment Links
- [ ] 整合購買按鈕
- [ ] 測試付款流程

### Phase 4：訂單通知（Day 7）
- [ ] 設定 Cloudflare Workers
- [ ] 實作 Webhook 處理邏輯
- [ ] 整合 SendGrid API
- [ ] 測試完整流程

## 六、部署與維運

### 6.1 部署流程
```bash
# 前端部署（自動）
git push origin main → GitHub Pages 自動部署

# 後端部署
cd workers/
wrangler publish
```

### 6.2 日常維運
- **新增商品**：編輯 `_data/products.yml` → 在 Stripe 建立 Payment Link → Git 提交
- **訂單管理**：查看 Stripe Dashboard
- **庫存管理**：手動更新商品資料檔案

## 七、開發前準備清單

### 7.1 必要帳號
- [ ] GitHub 帳號（已有 repo 管理權限）
- [ ] Stripe 帳號（測試 + 正式環境）
- [ ] Cloudflare 帳號
- [ ] SendGrid 帳號

### 7.2 設計素材
- [ ] Logo 檔案（PNG/SVG）
- [ ] 品牌色票（主色、輔色）
- [ ] 商品照片（統一尺寸建議：800x800px）
- [ ] 網站文案（關於我們、退換貨政策等）

### 7.3 商業資訊
- [ ] 運費計算規則（固定金額或免運門檻）
- [ ] 退換貨政策
- [ ] 客服聯絡方式
- [ ] 公司統編（發票需求）

## 八、預期限制與解決方案

### 8.1 已知限制
| 限制 | 影響 | 解決方案 |
|------|------|----------|
| 無購物車功能 | 無法一次購買多樣商品 | Phase 2 升級時整合 Snipcart |
| 庫存無法即時更新 | 可能發生超賣 | 商品數量少時手動管理 |
| 無會員系統 | 無法累積客戶資料 | 後續可整合 Stripe Customer Portal |

### 8.2 擴充計畫
- **短期**（3個月內）：加入購物車功能
- **中期**（6個月內）：會員系統 + 優惠券
- **長期**（1年內）：庫存管理 + 數據分析

## 九、驗收標準

### 9.1 功能測試
- [ ] 所有商品頁面正常顯示
- [ ] 搜尋商品名稱或類別時，結果正確顯示相關商品
- [ ] 依類別或價格範圍篩選時，列表僅顯示符合條件的商品
- [ ] 付款流程完整無誤
- [ ] 訂單通知郵件正確發送

### 9.2 效能測試
- [ ] 首頁載入時間 < 3秒
- [ ] 商品圖片載入正常
- [ ] 行動裝置顯示正常
- [ ] 多瀏覽器相容性測試

### 9.3 安全測試
- [ ] HTTPS 正常運作
- [ ] Webhook 簽名驗證
- [ ] 敏感資訊不外洩

---

**備註**：此 PRD 以實用性為優先，避免過度工程化。如有需要調整的地方，可隨時討論修正。