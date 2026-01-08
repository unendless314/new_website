---
title: "2026 Uniswap (UNI) 深度投資研究報告：DeFi 基石的技術重構與經濟模型轉型"
description: "深入剖析 Uniswap V4 的掛鉤 (Hooks) 革命、UniswapX 的意圖導向架構，以及 UNIfication 提案如何將 UNI 轉變為具備收益捕獲能力的通縮資產。"
date: 2026-01-04
author: wu-yan
categories: ["深度研究", "Uniswap"]
tags: ["Uniswap", "UNI", "DeFi", "AMM", "V4", "UniswapX", "Investment", "Research"]
complexity: 2
image: "../../assets/projects/2026-uniswap-deep-research-report.webp"
imageAlt: "2026 Uniswap (UNI) 深度投資研究報告：DeFi 基石的技術重構與經濟模型轉型 封面"
---
## 執行摘要 (Executive Summary)

隨著加密貨幣市場步入 2026 年的成熟週期，去中心化金融（DeFi）已從實驗性的邊緣金融體系，演變為支撐全球數兆美元交易量的基礎設施。在這場典範轉移中，Uniswap 不僅鞏固了其作為自動做市商（AMM）領域無可撼動的霸主地位，更透過 2025 年的一系列重大變革——即 Uniswap V4 的全面部署與 UniswapX 的廣泛採用——完成了從單一應用程式向「流動性開發平台」的轉型。

本報告旨在為台灣投資者與加密貨幣市場參與者提供一份詳盡的戰略分析。我們將深入探討 Uniswap 如何透過 V4 的「掛鉤（Hooks）」機制引入模組化設計，徹底改變流動性池的運作邏輯；解析 UniswapX 如何透過「意圖導向（Intent-Based）」架構解決碎片化流動性與 MEV（最大可提取價值）問題。更為關鍵的是，2025 年 12 月通過的「UNIfication」治理提案，標誌著 UNI 代幣經濟模型的歷史性轉折——從單純的治理權證轉向具備通縮屬性與收益捕獲能力的價值載體。

然而，機遇往往與風險並存。儘管美國證券交易委員會（SEC）的監管壓力在近期有所緩解，但針對 DeFi 協議的法律定位仍充滿不確定性。同時，流動性提供者（Liquidity Providers, LPs）面臨的無常損失（Impermanent Loss, IL）風險，在 V3 與 V4 的集中流動性環境下變得更為複雜，需要更精細的策略應對。

針對台灣用戶，本報告特別闢設實務操作專章，涵蓋如何利用 Arbitrum 等 Layer 2 網路大幅降低交易成本、台灣現行稅法下的海外所得稅務規劃，以及如何運用鏈上工具識別日益猖獗的詐騙風險。




## 第一部：DeFi 的核心基石與市場霸權解析

### **1.1 從「應用」到「協議」：Uniswap 的歷史定位**

自 2018 年創始人 Hayden Adams 根據 Vitalik Buterin 的概念驗證發布 V1 版本以來，Uniswap 已處理超過 2.75 兆美元的歷史交易量，且未發生過核心合約被駭事件 1。這一安全記錄使其成為 DeFi 世界的「TCP/IP 協議」——一個不可或缺的底層標準。  
與中心化交易所（CEX）依賴訂單簿與做市商的模式不同，Uniswap 的自動做市商（AMM）模型允許任何資產無需許可即可建立流動性池。這種「長尾資產（Long Tail Assets）」的包容性，為其建立了深厚的護城河。截至 2026 年初，儘管面臨來自 Solana 生態系統（如 Jupiter 與 Raydium）的激烈競爭，Uniswap 在以太坊主網及其 Layer 2 擴容方案（Arbitrum, Optimism, Base）上仍佔據絕對的主導地位 2。

### **1.2 市場份額的動態博弈：以太坊 vs. Solana**

2024 年至 2025 年間，去中心化交易所（DEX）市場經歷了劇烈的板塊運動。數據顯示，Solana 鏈上的 DEX 聚合器 Jupiter 在 2025 年多次在日交易量上超越 Uniswap，主要驅動力來自於 Solana 的高吞吐量與低延遲特性，這使其成為迷因幣（Memecoins）與高頻零售交易的首選戰場 3。  
然而，深入分析交易結構可發現市場呈現明顯的二元分化：

- **零售與投機流動性**：大量遷移至 Solana 生態，追求低於 0.01 美元的交易成本與次秒級的確認速度 5。
- **機構與大額結算**：依然堅守以太坊與 Arbitrum 上的 Uniswap。機構投資者與鯨魚用戶（Whales）更看重以太坊虛擬機（EVM）的安全性、資產的抗審查性以及主流資產（如 ETH/USDC, WBTC/ETH）的流動性深度 2。

面對多鏈競爭，Uniswap 採取了積極的擴張策略。目前 V4 版本已部署於超過 12 條公鏈，包括 BNB Chain、Avalanche 以及 Coinbase 推出的 Base 鏈 6。這種全鏈部署策略（Cross-Chain Deployment）確保了無論哪條鏈興起， Uniswap 都能作為其底層流動性層捕獲價值。

### **1.3 恆定乘積公式的韌性與演進**

Uniswap 的核心競爭力源於其簡潔而強大的數學模型——恆定乘積公式 $x \times y = k$。

- **V2** 確立了標準 AMM 模型，實現了無限的流動性深度。
- **V3** 引入了「集中流動性（Concentrated Liquidity）」, 允許 LP 將資金集中在特定價格區間，極大提升了資本效率，最高可達 V2 的 4000 倍 7。
- **V4** 則進一步將這種數學模型「平台化」。

這種從數學公式到金融基礎設施的演進，證明了 Uniswap 不僅僅是一個交易所，而是鏈上資產定價的權威來源（Oracle）。




## 第二部：技術文藝復興——Uniswap V4 與 UniswapX 架構解析

2025 年至 2026 年的 Uniswap 不再是過去單一的 DEX，而是通過 V4 和 UniswapX 構建了一個分層的流動性網路。這一技術變革是理解其未來價值的關鍵。

### **2.1 Uniswap V4：流動性的模組化革命**

Uniswap V4 於 2025 年 1 月正式上線主網，其核心創新在於打破了過去 AMM 的僵化邏輯，引入了高度可編程的架構 1。

#### **2.1.1 單例合約（Singleton Architecture）與閃電記帳（Flash Accounting）**

在 V2 和 V3 中，每一個交易對（如 ETH/USDC）都是一個獨立的智能合約。這意指進行多跳交易（例如 ETH -> DAI -> USDC）時，代幣需要在不同的合約之間實際轉移，消耗大量的 Gas 費用。  
V4 引入了**單例合約（Singleton）**設計，所有的流動性池都存在於同一個巨大的智能合約中 8。

- **技術原理**：這使得**閃電記帳（Flash Accounting）**成為可能。在交易過程中，系統不再逐筆轉移代幣，而是僅計算交易結束時的「淨餘額變動」。
- **效益**：這將創建新流動性池的 Gas 成本降低了 99.99% 1，並大幅降低了複雜路徑交易的手續費。

#### **2.1.2 掛鉤（Hooks）：流動性池的「外掛」系統**

V4 最具破壞式的創新是「Hooks」。Hooks 是在流動性池生命週期的特定時間點（如交易前/後、添加流動性前/後）運行的外部智能合約 9。這使得開發者可以在 Uniswap 之上構建各種金融衍生品，而無需重新開發底層協議。

**2026 年熱門 Hooks 應用實例：**

| Hook 類型 | 功能描述 | 金融意義 |
| :
 | :
 | :
 |
| **TWAMM (時間加權平均做市商)** | 將大額訂單拆分成無數小單，在一段時間內分批執行。 | 讓機構投資者可以在鏈上執行「算法交易」，大幅降低價格衝擊（Price Impact）。 |
| **動態費用 (Dynamic Fees)** | 根據市場波動率自動調整手續費率。 | 類似 Uber 的「動態定價」。在市場劇烈波動時提高費用以補償 LP 的無常損失。 |
| **鏈上限價單 (On-Chain Limit Orders)** | 允許用戶以特定價格掛單，當池內價格觸發時自動成交。 | 讓 AMM 具備了訂單簿交易所（CEX）的核心功能，但完全去中心化。 |
| **幾何平均預言機 (Geomean Oracle)** | 將流動性池轉變為抗操縱的價格預言機。 | 為借貸協議與衍生品市場提供更安全、成本更低的價格數據源。 |

這種架構將 Uniswap 從一個「產品」轉變為一個「平台」。目前已有超過 5000 個 Hooks 被初始化 14，形成了一個類似 App Store 的開發者生態系統。

### **2.2 UniswapX：意圖導向（Intent-Based）的交易架構**

如果說 V4 優化了流動性的「供給端」，那麼 UniswapX 則徹底重構了「需求端」的執行邏輯 15。

#### **2.2.1 從「交易」到「意圖」**

傳統 DEX 交易中，用戶簽署的是一筆具體的交易路徑（Transaction），如果路徑擁堵或滑點過大，交易會失敗且用戶仍需支付 Gas。  
在 UniswapX 中，用戶簽署的是一個意圖（Intent），例如：「我想用 1 ETH 換取至少 1800 USDC」。這個意圖被廣播給一群專業的第三方「填充者（Fillers）」。Fillers 在鏈下競爭，通過荷蘭式拍賣（Dutch Auction）為用戶尋找最佳價格，並將交易打包上鏈 17。

#### **2.2.2 MEV 的內部化與 Gas 抽象**

- **MEV 防護**：傳統交易常遭受 MEV 機器人的「三明治攻擊」，導致用戶蒙受損失。UniswapX 通過讓 Fillers 互相競爭，理論上將 MEV 的利潤轉化為用戶的價格優勢 15。
- **免 Gas 交易**：由於用戶只簽署意圖而非交易，上鏈的 Gas 費由 Filler 支付（並包含在報價中）。

#### **2.2.3 跨鏈交換的無縫體驗**

UniswapX 支援跨鏈意圖 19。用戶可以在以太坊主網發出意圖，直接在 Arbitrum 上接收 USDC。Fillers 負責處理跨鏈橋接的複雜性與風險，這對於資產分散在多鏈的台灣用戶而言，極大簡化了操作門檻。




## 第三部：代幣經濟學轉型——從治理到分潤的「UNIfication」

長期以來，UNI 代幣因缺乏價值捕獲能力而被戲稱為「虛無的治理代幣」。然而，2025 年 12 月通過的 **「UNIfication」提案** 徹底改變了這一敘事，成為 UNI 投資邏輯的核心轉折點 20。

### **3.1 費用開關（Fee Switch）的啟動**

經過多年的社群爭論與監管顧慮，Uniswap 治理層最終投票通過了協議費用開關的啟動。

- **機制細節**：協議將從流動性提供者（LP）的交易手續費中抽取一定比例（初期設定為 V2 池與部分 V3 池手續費的 1/4 到 1/6）22。
- **資金流向**：這些抽取的費用並非直接分發給 UNI 持有者，而是用於**程序化回購並銷毀（Buyback and Burn）** UNI 代幣 23。

### **3.2 大規模銷毀與通縮模型**

除了啟動費用開關，提案還包含了一次性從國庫中銷毀 **1 億枚 UNI 代幣** 的決議 21。

- **通縮效應**：這種結構性的銷毀機制使 UNI 轉變為通縮資產。隨著交易量增長，銷毀速度將加快，從而減少市場流通量，提升稀缺性。
- **前端費用移除**：為了配合協議層費用的啟動，Uniswap Labs 移除了其官方網頁前端原本收取的 0.15% 介面費用 23。

### **3.3 估值模型的重構**

分析師現在可以對 UNI 應用現金流貼現模型（DCF）。假設 Uniswap 協議年化產生 10 億美元的總手續費 24，若協議捕獲率為 20%，則每年將有 2 億美元的資金用於回購銷毀 UNI。這為 UNI 提供了一個量化的價格支撐底線。




## 第四部：監管風險與法律攻防——SEC Wells Notice 解析

監管始終是懸在 DeFi 頭上的達摩克利斯之劍。2024 年至 2025 年，Uniswap Labs 與美國監管機構進行了關鍵的法律博弈。

### **4.1 Wells Notice 指控與 Uniswap 的反擊**

2024 年，SEC 向 Uniswap Labs 發出韋爾斯通知（Wells Notice），指控其運營未註冊的證券交易所及經紀商業務 25。  
Uniswap Labs 的反駁論點極具指標性：協議是自動運行的代碼（類似 TCP/IP），而非由人為控制撮合的交易所；且 UNI 代幣是通過空投免費分發的，不存在 Howey 測試中的「金錢投資」要素 27。 

### **4.2 2025 年的監管轉折**

到了 2025 年底，隨著加密貨幣友好的政治氛圍形成以及 SEC 在其他案件中的敗訴，監管壓力出現顯著緩解。據報導，SEC 已於 2025 年 2 月結束了對 Uniswap 的調查 29。這被視為監管機構默認了「DeFi 豁免權」。




## 第五部：流動性提供者（LP）的風險分析——無常損失的真相

對於希望透過提供流動性（Yield Farming）賺取收益的台灣投資者，必須警惕「無常損失（Impermanent Loss, IL）」。

### **5.1 無常損失的數學殘酷**

無常損失是指 LP 在將資產存入流動性池後，與單純持有（HODL）這些資產相比所遭受的淨值損失。數據實證顯示，約 50% 的 Uniswap V3 LP 在扣除無常損失後，其淨收益為負值 7。這意指對於許多散戶而言，做 LP 不如直接囤幣。

### **5.2 集中流動性的雙面刃**

V3 與 V4 的集中流動性雖然提高了資金效率，但也放大了風險。一旦價格突破設定區間，LP 將不再賺取任何手續費，且可能滿手都是貶值的代幣（Toxic Flow）32。




## 第六部：台灣用戶實務操作指南

本章節針對台灣用戶的在地化需求，提供從入金、交易到稅務申報的完整操作手冊。

### **6.1 節省 Gas 費用的 L2 策略：以 Arbitrum 為例**

以太坊主網單筆交易 Gas 費動輒數十美元。強烈建議台灣用戶使用 **Arbitrum One** 進行操作，其交易成本僅約 \$0.1 - \$0.3 美元。

#### **操作流程：從台幣到 Uniswap (Arbitrum)**

**方法 A：透過 MAX 交易所（MaiCoin 集團）** 35
1. **入金**：將台幣轉入 MAX 交易所綁定的銀行帳戶。
2. **購買 USDT**：在 MAX 的 TWD/USDT 交易對買入 USDT。
3. **提現至鏈上**：提領網路（Chain）務必選擇 **"Arbitrum One"**。貼上您的 MetaMask 或 Rabby 錢包地址。
4. **準備 Gas**：您還需要在 MAX 購買少量 ETH，同樣透過 **Arbitrum One** 網路提領至錢包，作為手續費。

**方法 B：透過 BitoPro 幣託交易所** 37
流程與 MAX 類似，請務必確認提領網路選擇為 Arbitrum。

### **6.2 台灣加密貨幣稅務指南（2025/2026 版）**

| 所得來源 | 適用稅制 | 稅率 | 申報門檻與條件 |
| :
 | :
 | :
 | :
 |
| **境內交易所 (MAX/BitoPro)** | 個人綜合所得稅 | 5% - 40% | 實務上因稽徵成本高，若無頻繁出金至銀行，查稅機率相對較低 40。 |
| **境外/DeFi (Uniswap)** | **最低稅負制 (AMT)** | **20%** | **需同時滿足**：1. 全年海外所得 $\ge$ 100 萬。 2. 全年基本所得額 $\ge$ 670 萬 41。 |

### **6.3 防詐騙與資安教戰手冊**

1. **合約地址驗證**：務必從 CoinGecko 複製官方合約地址，貼入 Uniswap 進行匯入，不要直接搜尋名稱 43。
2. **蜜罐 (Honeypot) 檢測**：使用 **TokenSniffer.com** 檢測代幣是否可售出。
3. **流動性分析**：使用 **DexScreener** 檢查流動性是否已鎖定，防止「抽地毯 (Rug Pull)」46。




## 結論與 2026 展望

2026 年的 Uniswap 已完成從單一應用向 DeFi 作業系統的升級。通過 V4 的 Hooks 機制與 UniswapX 的意圖架構，它在技術與體驗上構築了極深的護城河。更重要的是，UNIfication 提案讓 UNI 代幣從治理權證轉變為具備真實價值的資產。  
對於台灣投資者而言，Uniswap 是加密資產配置中不可或缺的「藍籌股」。然而，在去中心化金融的洪流中，唯有善用 L2 工具並對鏈上風險保持最高警覺，才能安全地捕獲這波技術紅利。




**免責聲明**：本報告僅供教育與研究參考，不構成任何財務投資建議。加密貨幣市場波動劇烈，投資前請務必自行審慎評估 (DYOR)，並諮詢專業稅務與財務顧問。

#### **引用的著作**

1. Uniswap v4 is Here – A New Era of DeFi, 檢索日期：1月 3, 2026， <https://blog.uniswap.org/uniswap-v4-is-here>
2. Uniswap V4: Everything You Need To Know. - Blocmates, 檢索日期：1月 3, 2026， <https://www.blocmates.com/articles/uniswap-v4-everything-you-need-to-know>
3. Top Decentralized Exchanges (DEXs) in the Solana Ecosystem | Learn - KuCoin, 檢索日期：1月 3, 2026， <https://www.kucoin.com/learn/web3/top-decentralized-exchanges-dexs-in-the-solana-ecosystem>
4. Solana-based DEX Jupiter Flips Uniswap in Trading Volume | CoinMarketCap, 檢索日期：1月 3, 2026， <https://coinmarketcap.com/academy/article/solana-based-dex-jupiter-flips-uniswap-in-trading-volume>
5. How Raydium and Jupiter are powering Solana DeFi - 21Shares, 檢索日期：1月 3, 2026， <https://www.21shares.com/en-us/research/how-raydium-and-jupiter-are-powering-solana-defi>
6. Uniswap v4: Supercharging DeFi Across Chains, 檢索日期：1月 3, 2026， <https://www.uniswapfoundation.org/blog/uniswap-v4-supercharging-defi-across-chains>
7. Impermanent Loss in Uniswap v3 - IDEAS/RePEc, 檢索日期：1月 3, 2026， <https://ideas.repec.org/p/arx/papers/2111.09192.html>
8. What is Uniswap V4, and How it Will Revolutionize DeFi - DappRadar, 檢索日期：1月 3, 2026， <https://dappradar.com/blog/uniswap-v4-defi-guide-hooks-singleton-contract>
9. Overview - Uniswap Docs, 檢索日期：1月 3, 2026， <https://docs.uniswap.org/contracts/v4/overview>
10. Hooked on Compliance: Uniswap V4's Smart Contract Solution for DeFi, 檢索日期：1月 3, 2026， <https://www.cahill.com/publications/crypto-under-the-hood/2025-03-31-hooked-on-compliance-uniswap-v4-smart-contract-solution-for-defi>
11. johnsonstephan/awesome-uniswap-v4-hooks - GitHub, 檢索日期：1月 3, 2026， <https://github.com/johnsonstephan/awesome-uniswap-v4-hooks>
12. fewwwww/awesome-uniswap-hooks: A curated list of awesome Uniswap v4 hooks resources. - GitHub, 檢索日期：1月 3, 2026， <https://github.com/fewwwww/awesome-uniswap-hooks>
13. Understanding Uniswap V4 Hooks: The Future of DeFi Customization - Medium, 檢索日期：1月 3, 2026， <https://medium.com/coinmonks/understanding-uniswap-v4-hooks-the-future-of-defi-customization-69e8137f140a>
14. Uniswap Hook Incubator: 2025 Wrapped - Atrium Academy, 檢索日期：1月 3, 2026， <https://blog.atrium.academy/uniswap-hook-incubator-2025-wrapped>
15. Intent Based DeFi App Development. Exploring UniswapX | Medium - Rock'n'Block, 檢索日期：1月 3, 2026， <https://rocknblock.medium.com/intent-based-defi-app-development-exploring-uniswapx-1dc6c3ce5a55>
16. Intent Based DeFi App Development. UniswapX Overview - Rock'n'Block, 檢索日期：1月 3, 2026， <https://rocknblock.io/blog/intent-based-defi-app-development-uniswapx-overview>
17. Intent-based protocols pt1: unfolding UniswapX | Research - Anoma, 檢索日期：1月 3, 2026， <https://anoma.net/research/uniswapx>
18. UniswapX — A Deep Dive, 檢索日期：1月 3, 2026， <https://xangle.io/en/research/detail/1611>
19. UniswapX — A Deep Dive. Are Intents the Future of Bridging? | by Arjun Chand | LI.FI Blog, 檢索日期：1月 3, 2026， <https://blog.li.fi/uniswapx-a-deep-dive-4b4ea7673dc1>
20. Uniswap's fee switch goes live – Will UNI's price head to \$8.4 or \$4.5? | Bitget News, 檢索日期：1月 3, 2026， <https://www.bitget.com/news/detail/12560605123894>
21. UNIfication Greenlights 100M UNI Burn and Switches On Protocol Fees - CryptoNinjas, 檢索日期：1月 3, 2026， <https://www.cryptoninjas.net/news/unification-greenlights-100m-uni-burn-and-switches-on-protocol-fees/>
22. UNIfication Proposal - Requests for Comment - Uniswap Governance, 檢索日期：1月 3, 2026， <https://gov.uniswap.org/t/unification-proposal/25881>
23. Uniswap's Unification Proposal Passes, Triggering UNI Burn and Fee Switch Activation | MEXC News, 檢索日期：1月 3, 2026， <https://www.mexc.com/news/349866>
24. Uniswap Governance Approves Fee Switch and 100M UNI Token Burn | CoinMarketCap, 檢索日期：1月 3, 2026， <https://coinmarketcap.com/academy/article/uniswap-governance-approves-fee-switch-and-100m-token-burn>
25. PODCAST TRANSCRIPT The Crypto Exchange: Navigating the Regulatory Waters: The SEC's Wells Notice to Uniswap and its Impact on DeFi - Troutman Pepper Locke, 檢索日期：1月 3, 2026， <https://www.troutman.com/wp-content/uploads/2025/03/transcript_ce_navigating_the_regulatory_waters.pdf>
26. Uniswap Labs responds to Wells notice, calls SEC's legal case 'weak and wrong' | The Block, 檢索日期：1月 3, 2026， <https://www.theblock.co/post/295792/uniswap-labs-responds-to-wells-notice-calls-secs-legal-case-weak-and-wrong>
27. Wells Notice Response - Uniswap Blog, 檢索日期：1月 3, 2026， <https://blog.uniswap.org/wells-notice-response.pdf>
28. The Fight for DeFi Continues - Uniswap Blog, 檢索日期：1月 3, 2026， <https://blog.uniswap.org/the-fight-for-defi-continues>
29. SEC drops Uniswap Labs investigation as agency continues crypto-friendly push | The Block, 檢索日期：1月 3, 2026， <https://www.theblock.co/post/343353/sec-drops-uniswap-labs-investigation-as-agency-continues-crypto-friendly-push-wsj>
30. Uniswap Labs settles with the US CFTC for \$175,000 on charges related to derivatives trading | The Block, 檢索日期：1月 3, 2026， <https://www.theblock.co/post/314708/uniswap-labs-settles-with-the-us-cftc-for-175000-on-charges-related-to-derivatives-trading>
31. Impermanent Loss and How AMMs Protect Their LPs, Pt. 1 | by Jack Ratkovich - Medium, 檢索日期：1月 3, 2026， <https://medium.com/@jackratko/impermanent-loss-and-how-amms-protect-their-lps-9b039986ac0d>
32. Concentrated Liquidity & Capital Efficiency in Uniswap V3 - Cyfrin, 檢索日期：1月 3, 2026， <https://www.cyfrin.io/blog/uniswap-v3-concentrated-liquidity-capital-efficiency>
33. Automated Market Makers: Toward More Profitable Liquidity Provisioning Strategies - arXiv, 檢索日期：1月 3, 2026， <https://arxiv.org/html/2501.07828v1>
34. Uniswap v4 Hooks Security Deep Dive: Vunerabilities and Analysis - Cyfrin, 檢索日期：1月 3, 2026， <https://www.cyfrin.io/blog/uniswap-v4-hooks-security-deep-dive>
35. 2025/02/10 MAX Will Support Arbitrum BoLD, 檢索日期：1月 3, 2026， <https://support.maicoin.com/en/support/solutions/articles/32000035633-2025-02-10-max-will-support-arbitrum-bold>
36. 2025/01/15 MAX now supports USDT on AVAX USDT. - MAX Exchange / MaiCoin, 檢索日期：1月 3, 2026， <https://support.maicoin.com/en/support/solutions/articles/32000035520-2025-01-15-max-now-supports-usdt-on-avax-usdt->
37. Announcements - BitoPro, 檢索日期：1月 3, 2026， <https://www.bitopro.com/ns/en-US/announcements/1296>
38. Arbitrum One: Withdrawal Fees Compared (2025) | WithdrawalFees.com, 檢索日期：1月 3, 2026， <https://withdrawalfees.com/chains/arbitrum-one/5>
39. BitoPro, 檢索日期：1月 3, 2026， <https://bito.bitopro.com/>
40. Virtual Currency Transaction Tax Advisory - 立行會計師事務所 LY CPA Firm, 檢索日期：1月 3, 2026， <https://lytax.com.tw/eng-services/eng-virtual-currency/>
41. TIES 2025 - Taiwan - KPMG International, 檢索日期：1月 3, 2026， <https://assets.kpmg.com/content/dam/kpmgsites/xx/pdf/2023/01/TIES-Taiwan.pdf.coredownload.inline.pdf>
42. Taiwan & Cryptocurrency | Blockchain & Cryptocurrency Laws & Regulations - Freeman Law, 檢索日期：1月 3, 2026， <https://freemanlaw.com/cryptocurrency/taiwan/>
43. How to Identify and Avoid Uniswap Scams | CoinMarketCap, 檢索日期：1月 3, 2026， <https://coinmarketcap.com/academy/article/how-to-identify-and-avoid-uniswap-scams>
44. How to spot the scam of Dummies : r/ethdev - Reddit, 檢索日期：1月 3, 2026， <https://www.reddit.com/r/ethdev/comments/1bx5073/how_to_spot_the_scam_of_dummies/>
45. Use These 6 Websites To Identify Scam Tokens In The Crypto Space! - Medium, 檢索日期：1月 3, 2026， <https://medium.com/@defisensus/use-these-6-websites-to-identify-scam-tokens-in-the-crypto-space-1756d56924e3>
46. How to Detect SCAM Tokens on Dexscreener Before It's Too Late: Your Ultimate Guide to Safer Memecoin | Trader Rai on Binance Square, 檢索日期：1月 3, 2026， <https://www.binance.com/en/square/post/17511160281154>
47. Withdrawal of USDT on Arbitrum One Network Temporarily Out of Service on 11/07/2024 from 12:10 AM (GMT+7) onwards - Bitkub Support, 檢索日期：1月 3, 2026， <https://support.bitkub.com/en/support/solutions/articles/151000194726-withdrawal-of-usdt-on-arbitrum-one-network-temporarily-out-of-service-on-11-07-2024-from-12-10-am-gm>
