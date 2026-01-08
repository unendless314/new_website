---
title: "Ethena (ENA / USDe) 深度投資研究報告：合成美元的金融架構、收益來源與風險全景"
description: "深度剖析 Ethena 的 Delta 中性對沖機制、基差交易收益邏輯，探討 sUSDe 的高收益本質與潛在的負費率風險，並提供台灣投資者稅務與操作策略。"
date: 2026-01-04
author: wu-yan
categories: ["深度研究", "Ethena"]
tags: ["Ethena", "ENA", "USDe", "Stablecoin", "Delta Neutral", "Basis Trade", "Investment", "Research"]
complexity: 2
image: "../../assets/projects/2026-ethena-investment-guide.webp"
imageAlt: "Ethena (ENA / USDe) 深度投資研究報告：合成美元的金融架構、收益來源與風險全景 封面"
---
## 第一章：緒論：從穩定幣的三難困境到合成美元的誕生

在加密貨幣市場的演進歷程中，穩定幣始終扮演著最關鍵的基礎設施角色。然而，現有的解決方案長期受困於「穩定幣三難困境」，即難以同時兼顧去中心化、價格穩定性與資本效率。

Ethena Labs 推出的 USDe 並非傳統穩定幣，而是一種「合成美元（Synthetic Dollar）」。其核心突破在於利用衍生品市場的對沖機制來實現價值穩定，將傳統對沖基金專屬的「基差交易（Basis Trade）」轉化為一種可編程的、大眾化的儲蓄產品 1。

本報告旨在剖析 USDe 的運作機制、收益來源的可持續性，以及在極端市場環境下的潛在風險。




## 第二章：金融工程原理——Delta 中性與基差交易機制

Ethena 的運作更像是一個自動化的對沖基金。

### **2.1 Delta 中性對沖機制的數學原理**

當用戶存入資產（如 stETH）鑄造 USDe 時，協議會執行兩個操作：
1. **持有現貨**：擁有 +1 的 Delta 敞口。
2. **建立空頭**：在交易所開設等值的永續合約空單，建立 -1 的 Delta 敞口。

通過這種對沖，協議鎖定了資產的美元價值。無論資產漲跌，總價值在法幣計價下保持不變 1。

### **2.2 基差交易（Basis Trade）的收益邏輯**

Ethena 通過捕捉加密市場特有的「資金費率（Funding Rate）」來產生收益。由於市場長期存在對槓桿的多頭需求，空頭持有者（如 Ethena）通常能被動收取資金費。這筆收入構成了 sUSDe 高收益的主要來源 3。

### **2.3 雙引擎收益結構解析**

| 收益組分 | 來源說明 | 經濟學本質 | 風險屬性 |
| :
 | :
 | :
 | :
 |
| **1. 共識層收益** | 抵押品 (stETH) 參與以太坊 PoS 質押。 | 以太坊網絡「無風險利率」。 | 相對穩定，約 3% - 4%。 |
| **2. 執行層收益** | 來自永續合約市場的資金費率。 | 市場投機者的「波動性溢價」。 | 高度波動，隨市場情緒變化。 |




## 第三章：風險全景深度解析——壓力測試與極端情境

### **3.1 資金費率轉負風險**

如果市場極度悲觀導致資金費率轉負，Ethena 必須向多頭支付費用。這會侵蝕抵押品價值。Ethena 設立了**保險基金 (Reserve Fund)** 作為緩衝，投資者需關注該基金的水位 10。

### **3.2 LST 脫鉤與流動性風險**

若 stETH 出現嚴重脫鉤（Depeg），而 Ethena 面臨大規模贖回，可能會因流動性錯配導致 USDe 短暫脫鉤 8。

### **3.3 交易所與託管風險**

Ethena 採用**場外結算 (OES)** 架構，將本金託管在第三方機構（如 Copper, Ceffu），與交易所的資產負債表隔離，有效降低了 CEX 倒閉的風險 11。




## 第四章：生態系統深度解析——ENA 代幣與 Pendle 的槓桿效應

### **4.1 ENA 代幣經濟學與價值捕獲**

ENA 正在討論激活「費用開關」，將部分協議收入分配給質押者 (sENA)，使其具備現金流屬性 13。

### **4.2 Pendle 與 USDe：收益的金融衍生品**

- **PT-sUSDe**：適合保守投資者，鎖定固定收益（Fixed Yield）。
- **YT-sUSDe**：適合專業交易員，槓桿化博取積分與空投收益，但具有時間衰減風險 16。




## 第五章：台灣投資者實務指南——稅務合規與操作策略

### **5.1 收益性質認定與稅務申報**

投資 Ethena 的收益通常被認定為**海外所得**。
- **門檻一**：全年海外所得合計未達 100 萬台幣者，免予計入。
- **門檻二**：基本所得額（含薪資 + 海外所得）未達 750 萬台幣（2025 標準）者，無須繳納基本稅額 18。

### **5.2 投資策略建議**

| 投資者類型 | 推薦工具 | 預期收益來源 |
| :
 | :
 | :
 |
| **保守型** | sUSDe | 資金費率 + 質押獎勵 |
| **穩健型** | Pendle PT | 固定 APY |
| **進階型** | sENA | 幣價增值 + 協議分潤 |




## 第六章：USDe 與主流穩定幣的終極對比

| 特徵 | Ethena (USDe) | USDT / USDC | MakerDAO (DAI) |
| :
 | :
 | :
 | :
 |
| **機制** | 合成美元 (對沖) | 法幣託管 | 超額抵押 (CDP) |
| **收益** | **用戶共享** | 發行商獨享 | 部分共享 |
| **擴張力** | 受限於期貨 OI | 無限 (取決於存款) | 受限於抵押需求 |




## 第七章：結論與展望

Ethena 創造了一種既能抗審查、又能產生內生收益的「互聯網債券」。然而，高收益伴隨著衍生品市場的系統性風險。

對於台灣投資者，USDe 提供了優質的美元資產增值渠道，特別是在稅務優勢下。建議將其作為資產配置的一部分，並持續關注保險基金狀況與資金費率變化。




**免責聲明**：本報告僅供教育與研究用途，不構成具體投資建議。加密貨幣市場波動劇烈，投資人應審慎評估。

#### **引用的著作**

1. Ethena (ENA): Is the USDe Synthetic Dollar the Future of DeFi? | Learn - KuCoin, 檢索日期：1月 2, 2026， <https://www.kucoin.com/learn/web3/what-is-ethena-ena>
2. Ethena Overview | Ethena, 檢索日期：1月 2, 2026， <https://docs.ethena.fi/>
3. Inside Modern Stablecoin Architecture: How Ethena's USDe Work, 檢索日期：1月 2, 2026， <https://rocknblock.io/blog/stablecoin-architecture-how-ethena-usde-works>
4. Analyzing the Technical Stack of Synthetic Dollar Stablecoins | by Jung-Hua Liu - Medium, 檢索日期：1月 2, 2026， <https://medium.com/@gwrx2005/analyzing-the-technical-stack-of-synthetic-dollar-stablecoins-0a39560c52cb>
5. What is Ethena Staked USDe (sUSDe)? Everything You Need to Know - OSL, 檢索日期：1月 2, 2026， <https://www.osl.com/academy/article/what-is-ethena-staked-usde-susde-everything-you-need-to-know>
6. From High Yields to Potential Collapse: An Analysis of the Logic Behind USDe Incentives, 檢索日期：1月 2, 2026， <https://news.futunn.com/en/post/60089319/from-high-yields-to-potential-collapse-an-analysis-of-the>
7. Ethena: Delving into the Mechanics and Risks of USDe - Chorus One, 檢索日期：1月 2, 2026， <https://chorus.one/reports-research/ethena-delving-into-the-mechanics-and-risks-of-usde>
8. Untitled - Chaos Labs, 檢索日期：1月 2, 2026， <https://chaoslabs.xyz/resources/chaos-labs-ethena-lst-market-risk.pdf>
9. Untitled - Chaos Labs, 檢索日期：1月 2, 2026， <https://chaoslabs.xyz/resources/chaos_Labs_ethena_perpetual_assessment_risk_report.pdf>
10. Reserve Fund - Ethena Docs, 檢索日期：1月 2, 2026， <https://docs.ethena.fi/solution-design/reserve-fund>
11. Understanding Off-Exchange Settlement - Ceffu, 檢索日期：1月 2, 2026， <https://www.ceffu.com/it/blog/ceffu-understanding-off-exchange-settlement>
12. Ethena Has Integrated Ceffu's MirrorX Solution for Off-Exchange Settlement, 檢索日期：1月 2, 2026， <https://www.ceffu.com/pt-BR/blog/ethena-has-integrated-ceffu-mirrorx-off-exchange-settlement>
13. Ethena Labs Buys 25M ENA Amid Whale Accumulation, Potentially Boosting Price Momentum | MEXC News, 檢索日期：1月 2, 2026， <https://www.mexc.co/en-PH/news/244597>
14. Ethena & ENA Coin Explained: Governance, Fee Switch, and Market Outlook - LBank, 檢索日期：1月 2, 2026， <https://www.lbank.com/explore/ethena-ena-coin-governance-fee-switch-market-outlook>
15. Wintermute Governance: Proposal for ENA Fee Switch, 檢索日期：1月 2, 2026， <https://gov.ethenafoundation.com/t/wintermute-governance-proposal-for-ena-fee-switch/306>
16. Annualized 393%: An In-Depth Analysis of the True Yield and Risks of the Pendle YT Leveraged Points Strategy | 币界网 on Binance Square, 檢索日期：1月 2, 2026， <https://www.binance.com/en-AE/square/post/24757267289825>
17. Pendle (PENDLE): A comprehensive overview of the leading platform for on-chain yield, 檢索日期：1月 2, 2026， <https://oakresearch.io/en/reports/protocols/pendle-pendle-comprehensive-overview-leading-platform-on-chain-yield>
18. Blockchain & Cryptocurrency Laws & Regulations 2026 | Taiwan - Global Legal Insights, 檢索日期：1月 2, 2026， <https://www.globallegalinsights.com/practice-areas/blockchain-cryptocurrency-laws-and-regulations/taiwan/>
19. Crypto Tax Migration: Your Jurisdiction Guide - Henley & Partners, 檢索日期：1月 2, 2026， <https://www.henleyglobal.com/publications/crypto-wealth-report-2025/crypto-tax-migration-your-jurisdiction-guide>
20. Finance ministry pledges to address cryptocurrency taxation issue - Taipei Times, 檢索日期：1月 2, 2026， <https://www.taipeitimes.com/News/biz/archives/2024/11/19/2003827113>
21. Managing Investment Fund Tax Exposure to Income from Staking Cryptocurrencies, 檢索日期：1月 2, 2026， <https://andersen.com/resources/managing-investment-fund-tax-exposure-to-income-from-staking-cryptocurrenci>
22. Virtual Currency Transaction Tax Advisory - 立行會計師事務所 LY CPA Firm, 檢索日期：1月 3, 2026， <https://lytax.com.tw/eng-services/eng-virtual-currency/>
