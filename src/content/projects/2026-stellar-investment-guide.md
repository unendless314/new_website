---
title: "恆星幣 (Stellar, XLM) 權威研究報告：從支付協議到全球金融結算層的終極演化"
description: "深入剖析 Stellar 的 Soroban 智能合約平台、RWA 領域的領先地位（如 Franklin Templeton 基金），以及 MoneyGram 合作帶來的全球法幣出入金網路。"
date: 2026-01-04
author: wu-yan
categories: ["深度研究", "恆星鏈"]
tags: ["Stellar", "XLM", "Soroban", "RWA", "Payment", "MoneyGram", "Investment", "Research"]
complexity: 2
image: "../../assets/projects/2026-stellar-investment-guide.webp"
imageAlt: "恆星幣 (Stellar, XLM) 權威研究報告：從支付協議到全球金融結算層的終極演化 封面"
---
## 第一章：執行摘要：被誤解的金融巨頭與價值重估

在加密貨幣的發展史中，恆星幣（Stellar, XLM）長期以來承受著市場的刻板印象，被簡單地歸類為「瑞波幣（XRP）的非營利分支」或僅僅是「另一個老牌支付代幣」。然而，隨著 2024 年至 2025 年間區塊鏈技術的典範轉移，Stellar 網路經歷了根本性的架構升級與生態演化。本報告將深入剖析 Stellar 如何透過 Soroban 智能合約平台的上線，從一個單純的點對點（P2P）價值傳輸協議，蛻變為具備圖靈完備性的全球數位資產結算層。

本研究報告係針對台灣市場的投資者、金融從業人員及區塊鏈愛好者所撰寫，旨在提供一份詳盡的市場情報與實務操作指南。分析顯示，Stellar 目前正處於「效用價值」向「平台價值」轉型的關鍵拐點：

1. **RWA 代幣化領先地位**：透過與 Franklin Templeton 等華爾街巨頭的深度整合，Stellar 證明了其作為合規金融資產發行層的優勢 1。
2. **Soroban 智能合約**：解決了缺乏可編程性的痛點，孵化出 Blend（借貸）、Aquarius（流動性）等原生 DeFi 協議，根本性改變了 XLM 的代幣經濟模型 3。
3. **法幣出入金網路**：透過 MoneyGram 的全球合作與 USDC 的原生整合，構建了完善的「法幣—加密貨幣」支付橋樑 6。




## 第二章：歷史淵源與哲學分歧：雙生子的決裂與獨立之路

要深刻理解 Stellar 的戰略定位，必須回溯其與 Ripple (XRP) 的歷史糾葛，這不僅是技術路線的分歧，更是兩種截然不同的金融哲學之戰。

### **2.1 起源：Jed McCaleb 與 Ripple 的哲學決裂**

Stellar 的故事始於傳奇人物 Jed McCaleb。2014 年，McCaleb 因理念不合離開 Ripple，創立了非營利組織 Stellar Development Foundation (SDF)。

- **Ripple (XRP) 的精英路線**：旨在透過改革銀行間結算系統，成為金融機構間的橋樑貨幣 8。
- **Stellar (XLM) 的普惠願景**：專注於「金融普惠」，致力於賦能個人與連結全球無銀行帳戶群體 8。

### **2.2 擺脫「分叉」標籤：代碼重寫與技術獨立**

Stellar 在網路啟動僅六個月後便徹底重寫底層代碼，催生了由史丹佛大學教授 David Mazières 發明的「恆星共識協議」（Stellar Consensus Protocol, SCP）。SCP 的誕生標誌著 Stellar 在技術上與 Ripple 的徹底脫鉤 12。




## 第三章：技術核心：恆星共識協議 (SCP) 與資產發行標準

### **3.1 聯邦拜占庭協議 (FBA) 的運作邏輯**

Stellar 的核心引擎是 **SCP**，這是第一個安全實施聯邦拜占庭協議的共識機制。它允許節點選擇自己信任的節點集（Quorum Slices），達成全網共識。這種機制確保了 3-5 秒的即時最終性（Finality），對支付場景至關重要 17。

### **3.2 比較分析：Stellar vs. Solana vs. Ethereum**

| 特性 | Stellar (XLM) | Solana (SOL) | Ethereum (ETH) |
| :
 | :
 | :
 | :
 |
| **共識機制** | SCP (FBA) | PoH + PoS | PoS |
| **交易確認時間** | 3-5 秒 (即時最終性) | \~0.4 秒 | \~12 秒 |
| **平均手續費** | < \$0.00001 | < \$0.001 | \$1.00 - \$50.00+ |
| **主要應用場景** | 支付、匯款、RWA | 高頻交易、NFT | 廣義智能合約 |

### **3.3 原生資產發行與路徑支付 (Path Payment)**

Stellar 協議層內置了去中心化交易所（SDEX），並擁有獨有的**路徑支付 (Path Payment)** 功能。系統會自動在一次原子交易中尋找最佳兌換路徑（例如：TWD -> XLM -> USD），確保貨幣轉換與發送的安全性 8。




## 第四章：Soroban 智能合約：DeFi 生態的覺醒與可編程金融

**Soroban** 平台是 Stellar 歷史上最大規模的技術升級，使網路從「單純的帳本」進化為「可編程的金融操作系統」。

### **4.1 Soroban 的技術架構優勢**

Soroban 採用基於 **WebAssembly (WASM)** 和 **Rust** 語言的架構 21。Rust 語言的內存安全性確保了合約執行的高效與安全。此外，引入的「狀態租賃機制」確保了網路在長期運行下依然輕量且高速。

### **4.2 DeFi 生態系普查：從 0 到 1 的爆發**

1. **Blend Protocol**：Stellar 生態中的借貸市場基於，為資產提供了「時間價值」與收益來源 24。
2. **Aquarius (AQUA)**：透過投票機制引導流動性，大幅降低法幣通道的兌換滑點 27。
3. **Soroswap 與 Phoenix**：提供優質的交易聚合與 UI/UX 體驗 30。




## 第五章：RWA 的王者：Franklin Templeton 與機構採用

### **5.1 案例研究：富蘭克林坦伯頓 FOBXX 基金**

這是目前全球區塊鏈上最成功的 RWA 案例 1。Franklin Templeton 選擇 Stellar 網路發行其美國政府貨幣市場基金。每一份額由 **BENJI** 代幣代表。該基金規模已突破 3.6 億美元，是美國首個在公共區塊鏈上記錄股權的 SEC 註冊基金。

### **5.2 聯合國難民署 (UNHCR) 的援助應用**

UNHCR 利用 Stellar 網路向難民發放援助金（USDC）。區塊鏈轉帳即時到帳且透明可追溯，有效防止了中間人的剝削 35。




## 第六章：全球支付網路：MoneyGram 與 USDC 的落地

Stellar 與 **MoneyGram** 合作推出的 **MoneyGram Access** 服務，打通了現金與加密貨幣的最後一哩路。全球 180 個國家的用戶可以在 MoneyGram 實體網點進行 USDC 的存取，無需依賴銀行帳戶 6。




## 第七章：台灣在地實務：投資者的生存與操作指南

### **7.1 交易所支援與資金調度策略**

台灣的 **MAX 交易所** 與 **BitoPro** 均支援 Stellar 鏈上的 USDC 及 XLM 充提 40。使用 Stellar 網路進行跨交易所調度，成本通常低於 0.01 美元，遠優於以太坊 18。

### **7.2 【極重要】MEMO (Tag) 防雷指南**

在轉帳 XLM 進入交易所時，**務必填寫 MEMO ID (Tag)**。
- **原因**：交易所使用公共主錢包，MEMO 是識別您帳戶的唯一憑證 42。
- **後果**：若忘記填寫，資金將「消失」在交易所帳戶中，需支付高額手續費並等待數週才能人工找回。




## 第八章：投資價值與風險分析：機構視角

### **8.1 投資價值論述 (Bull Case)**
1. **稀缺性**：2019 年移除通膨機制後，XLM 已成為總量固定的資產。
2. **RWA 領先優勢**：在合規金融代幣化領域，Stellar 是華爾街的首選。
3. **支付剛需**：跨境匯款的效用價值為幣價提供了基於基本面的支撐。

### **8.2 風險因素 (Bear Case)**
1. **公鏈競爭**：面對 Solana 的強力挑戰，Stellar 需要加速其 DeFi 生態的建設 19。
2. **開發門檻**：Rust 語言雖強大，但對開發者而言存在一定的學習曲線。




## 第九章：結論與展望

Stellar (XLM) 已經從 XRP 的影子成長為擁有獨立技術靈魂、強大智能合約平台及頂級機構背書的金融基礎設施。對於台灣投資者而言，XLM 是一個兼具防禦性與成長性的標的。

**關鍵建議**：密切追蹤 Soroban 上的 TVL 數據，並將 XLM 視為加密投資組合中的「基礎設施層」配置。在操作時，永遠不要忘記填寫 **MEMO**。




**免責聲明**：本報告僅供教育與研究參考，不構成任何財務投資建議。加密貨幣市場波動劇烈，投資前請務必自行審慎評估 (DYOR)。

#### **引用的著作**

1. Franklin OnChain US Government Money Fund - TheValueProp, 檢索日期：1月 3, 2026， <https://thevalueprop.io/projects/franklin-onchain-u-s-government-money-fund>
2. Franklin OnChain U.S. Government Money Fund - FOBXX, 檢索日期：1月 3, 2026， <https://www.franklintempleton.com/investments/options/money-market-funds/products/29386/SINGLCLASS/franklin-on-chain-u-s-government-money-fund/FOBXX>
3. How DeFi Works for Lending and Borrowing Markets - Stellar.org, 檢索日期：1月 3, 2026， <https://stellar.org/learn/lending-and-borrowing-markets>
4. What is Aquarius? - LOBSTR - Freshdesk, 檢索日期：1月 3, 2026， <https://lobstr.freshdesk.com/support/solutions/articles/151000184882-what-is-aquarius->
5. docs/readme/what-is-soroswap-finance.md at main - GitHub, 檢索日期：1月 3, 2026， <https://github.com/soroswap/docs/blob/main/readme/what-is-soroswap-finance.md>
6. MoneyGram Ramps | Connect Crypto to Cash in Minutes, 檢索日期：1月 3, 2026， <https://www.moneygram.com/us/en/ramps>
7. MoneyGram Launches Pioneering Global Crypto-to-Cash Service on the Stellar Network, 檢索日期：1月 3, 2026， <https://www.prnewswire.com/news-releases/moneygram-launches-pioneering-global-crypto-to-cash-service-on-the-stellar-network-301565815.html>
8. XLM vs XRP: A Deep Dive into Two Cross-Border Crypto Giants - Switchere, 檢索日期：1月 3, 2026， <https://switchere.com/guides/xlm-vs-xrp>
9. Stellar Crypto: Who Is The Founder? - G.Flexsim, 檢索日期：1月 3, 2026， <https://git.flexsim.com/blog/stellar-crypto-who-is-the-founder-1764805200>
10. Stellar vs. Ripple – Which One Should You Choose? - Stilt, 檢索日期：1月 3, 2026， <https://stilt.com/crypto/stellar-vs-ripple-which-one-should-you-choose/>
11. Ripple vs Stellar: The history, rivalry, and future | by Fifi Arisandi - Medium, 檢索日期：1月 3, 2026， <https://medium.com/@fifiarisandi_/ripple-vs-stellar-the-history-rivalry-and-future-53de6a6f5add>
12. Ripple vs Stellar: How are These Blockchains Different? - YouHodler, 檢索日期：1月 3, 2026， <https://www.youhodler.com/blog/ripple-vs-stellar>
13. Stellar | Swap Functionality and AMMs, 檢索日期：1月 3, 2026， <https://stellar.org/learn/swap-functionality-and-amms>
14. Stellar Lumens (XLM) Price Prediction 2024, 2025-2030 - PrimeXBT, 檢索日期：1月 3, 2026， <https://primexbt.com/for-traders/stellar-lumens-price-prediction-forecast/>
15. Stellar (XLM) Analysis | News | Description - altFINS, 檢索日期：1月 3, 2026， <https://altfins.com/blog/stellar-xlm-analysis/>
16. Grayscale Stellar Lumens Trust (XLM) - SEC.gov, 檢索日期：1月 3, 2026， <https://www.sec.gov/Archives/edgar/data/1761325/000119312522222422/d348502dex991.htm>
17. Stellar | Blockchain Network for DeFi, Payments & Asset Tokenization, 檢索日期：1月 3, 2026， <https://stellar.org/>
18. Which Blockchain Has the Lowest Fees in 2025? Full Comparison - Bleap, 檢索日期：1月 3, 2026， <https://www.bleap.finance/blog/which-blockchain-has-the-lowest-fees>
19. Top 10 Blockchains: Fastest Transaction Speed (TPS) in 2025 - NOWPayments, 檢索日期：1月 3, 2026， <https://nowpayments.io/blog/top-10-cryptos-with-fastest-transactions>
20. Blockchain speed and cost comparisons - Brale.xyz, 檢索日期：1月 3, 2026， <https://brale.xyz/blog/blockchain-speed-cost-comparisons>
21. Stellar 2025: A Podium Finish, 檢索日期：1月 3, 2026， <https://stellar.org/blog/ecosystem/stellar-2025-year-in-review>
22. XLM Stellar in 2024 (deep research) for CRYPTO:XLMUSD by EXCAVO - TradingView, 檢索日期：1月 3, 2026， <https://www.tradingview.com/chart/XLMUSD/ahbRshPt-XLM-Stellar-in-2024-deep-research/>
23. Introducing Blend. A Liquidity Protocol Primitive for… | by Script3 - Medium, 檢索日期：1月 3, 2026， <https://medium.com/script3/introducing-blend-95aaf66bdf41>
24. Connecting DeFi to the Real World on Stellar (with Blend Protocol) - YouTube, 檢索日期：1月 3, 2026， <https://www.youtube.com/watch?v=5paS9-8d5l4>
25. Blend Blastoff: How to use DeFi Protocol to Drive User Adoption | Meridian 2024 - YouTube, 檢索日期：1月 3, 2026， <https://www.youtube.com/watch?v=58j0QkXKiDU>
26. Introducing Aquarius. We are introducing a new liquidity… | by Aquarius | Aquarius / AQUA | Medium, 檢索日期：1月 3, 2026， <https://medium.com/aquarius-aqua/introducing-aquarius-fab7a02530dc>
27. AQUAnomics. Learn more about AQUA, the token that… | by Aquarius - Medium, 檢索日期：1月 3, 2026， <https://medium.com/aquarius-aqua/aquanomics-c8a70c6ff3f7>
28. Passive Earning with Aquarius Rewards | Hidden Gem : r/Stellar - Reddit, 檢索日期：1月 3, 2026， <https://www.reddit.com/r/Stellar/comments/1ana8dk/passive_earning_with_aquarius_rewards_hidden_gem/>
29. Protocol Selection: Customize Your Swapping Experience : r/Stellar - Reddit, 檢索日期：1月 3, 2026， <https://www.reddit.com/r/Stellar/comments/1fokvyh/protocol_selection_customize_your_swapping/>
30. Best DeFi & DEX Protocols on Stellar: TVL Rankings - DappRadar, 檢索日期：1月 3, 2026， <https://dappradar.com/narratives/defi/protocols/chain/stellar>
31. Top Stellar Dapps | DappRadar, 檢索日期：1月 3, 2026， <https://dappradar.com/rankings/protocol/stellar>
32. Franklin Templeton Announces the Franklin OnChain U.S. Government Money Fund Surpasses \$270 Million in Assets Under Management, 檢索日期：1月 3, 2026， <https://www.franklintempleton.com/press-releases/news-room/2023/franklin-templeton-announces-the-franklin-onchain-u.s.-government-money-fund-surpasses-usd270-million-in-assets-under-management>
33. Franklin Templeton Announces the Franklin OnChain U.S. Government Money Fund Surpasses \$270 Million in Assets Under Management, 檢索日期：1月 3, 2026， <https://www.franklintempleton.co.uk/press-releases/news-room/2023/franklin-templeton-announces-the-franklin-onchain-u.s.-government-money-fund-surpasses-usd270-million-in-assets-under-management>
34. Franklin Templeton Announces Availability of Peer-to-Peer Transfers for Franklin OnChain U.S. Government Money Fund, 檢索日期：1月 3, 2026， <https://www.franklintempleton.com/press-releases/news-room/2024/franklin-templeton-announces-availability-of-peer-to-peer-transfers-for-franklin-onchain-u.s.-government-money-fund>
35. How UNHCR Distributes Cash Assistance Through Stellar Aid Assist, 檢索日期：1月 3, 2026， <https://stellar.org/case-studies/unhcr>
36. UNHCR wins award for innovative use of blockchain solutions to provide cash to forcibly displaced in Ukraine, 檢索日期：1月 3, 2026， <https://www.unhcr.org/us/news/press-releases/unhcr-wins-award-innovative-use-blockchain-solutions-provide-cash-forcibly>
37. Stellar Aid Assist - Transforming Humanitarian Aid Delivery Through Blockchain - ICVA Network, 檢索日期：1月 3, 2026， <https://www.icvanetwork.org/uploads/2025/01/Stellar-Aid-Assist-Transforming-Humanitarian-Aid-Delivery-Through-Blockchain.pdf>
38. Life-saving, efficient and secure: humanitarian aid that gives refugees choices | UNHCR, 檢索日期：1月 3, 2026， <https://www.unhcr.org/us/news/stories/life-saving-efficient-and-secure-humanitarian-aid-gives-refugees-choices>
39. Stellar | Three Years of Impact: How MoneyGram is Unlocking Financial Accessibility on Stellar, 檢索日期：1月 3, 2026， <https://stellar.org/blog/foundation-news/three-years-with-moneygram>
40. 【新幣開放存提】 USDC 今日開放加值提領 - 幣託BitoPro, 檢索日期：1月 3, 2026， <https://support.bitopro.com/hc/zh-tw/articles/4408056932377--%E6%96%B0%E5%B9%A3%E9%96%8B%E6%94%BE%E5%AD%98%E6%8F%90-USDC-%E4%BB%8A%E6%97%A5%E9%96%8B%E6%94%BE%E5%8A%A0%E5%80%BC%E6%8F%90%E9%A0%98>
41. Stellar区块链现支持USDC稳定幣 - 中华网, 檢索日期：1月 3, 2026， <https://m.tech.china.com/digi/digi/20201016/20201016625460.html>
42. 忘填/錯填標籤(Tag/Memo)找回申請指南| Binance Support, 檢索日期：1月 3, 2026， <https://www.binance.com/zh-TC/support/faq/detail/40b87335db904481888ef406b105442b>
43. Find MoneyGram Locations in Taiwan | Nearby Agents & Partners, 檢索日期：1月 3, 2026， <https://www.moneygram.com/locations/tw/en>
44. How to Receive Money in Taiwan - MoneyGram, 檢索日期：1月 3, 2026， <https://www.moneygram.com/r/tw/en/how-to-receive-money>
45. Beans App: Money Transfers - Apps on Google Play, 檢索日期：1月 3, 2026， <https://play.google.com/store/apps/details?id=com.beansapp.app&hl=en_US>
46. Instant, free & safe international money transfers | Beans App, 檢索日期：1月 3, 2026， <https://www.beansapp.com/?cdcbc5f5_page=2>
47. 未填/錯填標籤(Memo/Tag)找回申請指南, 檢索日期：1月 3, 2026， <https://www.mexc.com/uk-UA/support/article/applying-to-recover-a-deposit-due-to-an-unfilled-incorrectly-filled-memo-tag-15441726005529>
48. SOLANA VS THE WORLD. STELLAR | by Ayorinde John - Medium, 檢索日期：1月 3, 2026， <https://medium.com/@ayorinde270/solana-vs-the-world-de98d038b17b>
49. Coinbase Hires Avoq to Push Digital Asset Clarity - Legis1, 檢索日期：1月 3, 2026， <https://legis1.com/news/digital-asset-regulation-coinbase-avoq/>
50. Stellar and the CFTC: A Recognized Player in the Financial Regulatory Landscape, 檢索日期：1月 3, 2026， <https://scopuly.medium.com/stellar-and-the-cftc-a-recognized-player-in-the-financial-regulatory-landscape-8e1e06108a52>
51. Stellar | Representing Blockchain on the Commodity Futures Trading Commission's Global Market Advisory Committee, 檢索日期：1月 3, 2026， <https://stellar.org/blog/policy/representing-blockchain-on-the-commodity-futures-trading-commissions-global-market-advisory-committee>
