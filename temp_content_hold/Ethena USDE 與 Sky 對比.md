# **深度研究報告：Sky Protocol (原 MakerDAO) —— 去中心化金融的終局之戰與投資指南**

## **執行摘要**

隨著區塊鏈技術邁入成熟期，去中心化金融（DeFi）正經歷一場前所未有的結構性轉型。作為 DeFi 領域的開山鼻祖，MakerDAO 在 2024 年正式啟動了名為「終局計畫（Endgame）」的激進改革，並將品牌重塑為 **Sky Protocol**。此舉不僅是名稱的更迭，更標誌著從純粹的加密貨幣抵押模式，轉向融合現實世界資產（RWA）與機構級合規架構的混合金融實體。  
本報告專為台灣加密貨幣投資者與從業者撰寫，旨在提供一份詳盡的 Sky Protocol 生態系剖析。我們將深入探討其治理代幣 SKY 與新穩定幣 USDS 的代幣經濟模型，分析其具爭議性的「凍結功能」背後的監管邏輯，並將其收益機制與當前市場上最熱門的合成美元協議 Ethena (USDe) 進行橫向對比。此外，針對台灣社群高度關注的議題——包括 Sky Savings Rate (SSR) 的收益真實性、透過 VPN 存取協議的合規風險，以及現實世界資產（RWA）的收入架構——本報告將依據鏈上數據與法律文件進行深度驗證。  
研究顯示，Sky Protocol 的轉型雖然引入了中心化風險，但其透過美國國債構建的護城河，使其成為目前 DeFi 市場中抗風險能力最強的「去中心化央行」。相比之下，Ethena (USDe) 雖提供較高的名目收益率，但其本質更接近於結構化對沖基金，隱含著極高的市場尾部風險。對於尋求穩健收益的台灣投資者而言，理解兩者底層資產的差異至關重要。

## ---

**1\. 終局計畫 (Endgame)：DeFi 巨人的自我革命**

### **1.1 背景：MakerDAO 的治理困境與轉型動機**

MakerDAO 成立於 2014 年，是建立在以太坊區塊鏈上的去中心化自治組織，其發行的 DAI 穩定幣曾是 DeFi 領域「去中心化」的黃金標準。然而，隨著 2020 年「黑色星期四」市場崩盤以及隨後幾年的發展，MakerDAO 遭遇了嚴峻的擴展瓶頸。  
首先是治理的僵化。隨著協議鎖倉量（TVL）突破數十億美元，治理提案變得極其複雜，普通 MKR 持有者難以理解參數調整的金融影響，導致投票權集中在少數「巨鯨」手中，違背了去中心化的初衷。其次是資產負債表的兩難。為了維持 DAI 的掛鉤穩定性，MakerDAO 被迫大量引入中心化穩定幣 USDC 作為抵押品，這使得 DAI 在某種程度上成為了「包裝後的 USDC」，引入了中心化託管風險卻未能獲取相應的監管紅利 1。  
創辦人 Rune Christensen 提出的「終局計畫（Endgame）」正是為了打破這一僵局。其核心論點是：為了讓去中心化穩定幣的規模突破 1,000 億美元並與 USDT、USDC 競爭，協議必須在底層保持去中心化的同時，在應用層引入企業化的效率與合規性。這是一場將「加密理想主義」與「商業實用主義」相結合的豪賭 3。

### **1.2 終局計畫的五大階段詳解**

Sky Protocol 的轉型並非一蹴而就，而是透過精心設計的五個階段逐步推進，每一階段都旨在解決特定的協調故障或擴展性問題。

#### **第一階段：品牌重塑與 Beta 啟動 (Beta Launch)**

這是當前所處的階段。MakerDAO 正式更名為 Sky，旨在擺脫「DAO」一詞帶來的技術門檻感，建立一個更面向大眾消費者（Consumer-facing）的金融品牌。此階段推出了兩個核心資產：

* **USDS (Sky Dollar)：** DAI 的升級版，專注於可擴展性與收益性。  
* **SKY (Sky Governance Token)：** MKR 的升級版，專注於治理參與與價值捕獲 3。

這一階段的戰略目標是透過品牌效應與代幣拆分（1 MKR \= 24,000 SKY），降低投資門檻，吸引非加密原生用戶進入生態系。對於台灣用戶而言，這意味著需要重新適應新的代幣符號與互動介面。

#### **第二階段：SubDAO (Sky Stars) 的崛起**

這是 Endgame 架構中最具革命性的變革。為了減輕核心治理層的負擔，Sky 將業務拆分為多個獨立的「Sky Stars」（前身為 SubDAOs）。每個 Star 都是一個獨立的 DAO，擁有自己的治理代幣、國庫、業務邏輯與前端介面。

* **Spark (原 Spark Protocol)：** 作為第一個 Sky Star，Spark 專注於借貸業務（Lending），直接與 Aave 等協議競爭。Sky 將流動性批發給 Spark，由 Spark 負責零售端的借貸管理 5。  
* **功能性與分工：** Sky Core（核心層）僅負責維持 USDS 的掛鉤與最後貸款人職能，而 Sky Stars（邊緣層）則負責具體的業務拓展、風險定價與用戶獲取。這種架構類似於「聯準會（Sky）」與「商業銀行（Stars）」的關係 1。

#### **第三階段：AI 治理工具 (Atlas)**

鑑於 Sky Stars 將帶來海量的治理提案與參數調整，人類治理者將難以負荷。因此，Sky 引入了名為 **Atlas** 的 AI 治理工具。這是一套基於大型語言模型（LLM）的系統，能夠即時索引所有治理文檔、論壇討論與鏈上數據。

* **對普通投資者的意義：** 台灣的 SKY 持有者無需精通 Solidity 代碼或複雜的金融模型，即可透過 Atlas 查詢提案的影響（例如：「此提案是否會降低我的 USDS 存款利率？」），從而做出知情的投票決策 3。

#### **第四階段：治理激勵 (Governance Participation Incentives)**

為了解決選民冷漠問題，Sky 將直接對參與治理的用戶發放獎勵。這與傳統 DeFi 的「流動性挖礦」不同，是一種「政治挖礦」。用戶鎖定 SKY 代幣並參與投票（或委託給代表），將獲得協議收入的一部分作為回報。這確保了系統始終有足夠的活躍治理參與度，防止惡意提案在低投票率下通過 2。

#### **第五階段：NewChain (獨立區塊鏈)**

終局計畫的最終形態是將 Sky Protocol 從以太坊上的一個 DApp，遷移或擴展為一條獨立的區塊鏈——**NewChain**。

* **技術邏輯：** 隨著資產規模擴大，依賴以太坊主網的擁堵與昂貴 Gas 費將成為瓶頸。更重要的是，擁有獨立區塊鏈意味著 Sky 可以在遭遇災難性攻擊（如治理攻擊或監管扣押）時，透過硬分叉（Hard Fork）來恢復帳本，這是依賴以太坊智能合約無法做到的「核威懾」級別安全保障 2。

## ---

**2\. 品牌重塑與代幣經濟學：從 Maker 到 Sky**

### **2.1 雙代幣模型的演進**

Sky Protocol 延續了 MakerDAO 的雙代幣模型，但在代幣經濟學（Tokenomics）上進行了重大升級，以適應大規模採用的需求。

#### **治理代幣：SKY (原 MKR)**

* **兌換比例：** 1 MKR \= 24,000 SKY 4。  
* **拆分邏輯：** MKR 的價格長期維持在 1,000 至 3,000 美元之間，高單價使得散戶投資者望而卻步。透過 1:24,000 的拆分，SKY 的單價將降至美分級別（例如 MKR $2,400 時，SKY 約為 $0.10），這在心理帳戶上極大降低了散户的入場門檻，有利於代幣的分散化持有 8。  
* **價值捕獲：** SKY 透過「Smart Burn Engine」捕獲協議價值。當 Sky Protocol 從 RWA 或借貸中獲得收入時，多餘的 USDS 將用於在公開市場回購 SKY 並銷毀（或用於流動性做市），從而推升幣價。此外，SKY 持有者可透過質押賺取 Sky Stars 的代幣空投（如 SPK 代幣），這是過去 MKR 所不具備的「金鏟子」功能 10。

#### **穩定幣：USDS (原 DAI)**

* **兌換比例：** 1 DAI \= 1 USDS 4。  
* **定位差異：** DAI 將繼續存在，作為純粹的、不可變的去中心化穩定幣。而 USDS 則是「功能增強版」，它內建了存款收益（Sky Savings Rate）與跨鏈傳輸（SkyLink）功能，但也包含了最具爭議的監管功能。Sky 的策略是透過高額補貼（如代幣獎勵）誘導用戶從 DAI 遷移至 USDS 12。

### **2.2 核心爭議：USDS 的「凍結功能」與監管妥協**

在 Sky 品牌重塑過程中，最引發社群與去中心化擁護者反彈的是 USDS 智能合約中新增的「凍結功能（Freeze Function）」。

#### **功能機制**

凍結功能允許 Sky 治理層或授權的實體（如法律秘書處）將特定地址列入黑名單，禁止該地址發送或接收 USDS。這與中心化穩定幣 USDC (Circle) 和 USDT (Tether) 的機制如出一轍 14。

#### **為什麼 Sky 需要這麼做？**

對於追求「抗審查」的 DeFi 用戶來說，這似乎是一種背叛。然而，從 Rune Christensen 的戰略視角來看，這是擴展 RWA 業務的必要之惡：

1. **RWA 的法律連結：** Sky 目前持有數十億美元的美國國債。這些資產並非存在鏈上，而是透過信託架構存在於現實世界的託管銀行中。如果 Sky 無法配合美國司法部（DOJ）或外國資產控制辦公室（OFAC）的制裁要求（例如凍結恐怖組織的資金），美國政府可以直接凍結 Sky 在現實世界中的銀行帳戶。這將導致 USDS 的儲備金瞬間歸零，引發災難性脫鉤 13。  
2. **兩害相權取其輕：** 為了保護數十億美元的 RWA 儲備不被現實世界監管機構扣押，Sky 選擇在鏈上層面引入合規工具。Rune 強調，這是一種「務實的去中心化」，即在保證協議生存的前提下，盡可能保持開放 13。

#### **對台灣用戶的影響**

對於絕大多數守法的台灣投資者而言，凍結功能不會產生直接影響。然而，若投資者的資金來源涉及混幣器（如 Tornado Cash）或被標記為高風險地址的交易所，持有 USDS 可能面臨被凍結的風險。相比之下，舊版的 DAI 由於合約不可升級，理論上不具備此功能，因此對於極致追求資金安全的用戶，DAI 仍是較佳選擇 14。

## ---

**3\. 橫向對比：Sky (USDS) vs. Ethena (USDe)**

在 2024-2025 年的穩定幣市場中，Sky (USDS) 與 Ethena (USDe) 代表了兩種截然不同的設計哲學與收益來源。本節將進行深度技術對比，協助投資者辨識風險。

### **3.1 機制原理對比**

| 特性 | Sky (USDS) | Ethena (USDe) |
| :---- | :---- | :---- |
| **類型** | 超額抵押債務倉位 (CDP) | 合成美元 (Delta-Neutral Synthetic) |
| **底層資產** | 加密資產 (ETH, WBTC) \+ **RWA (美債)** \+ USDC | 加密資產 (stETH, BTC) \+ **期貨空單 (Short Positions)** |
| **掛鉤機制** | 1 USDS 始終可贖回價值 \>$1 的抵押品 | 現貨與期貨的對沖套利機制 |
| **收益來源** | **RWA 利息** \+ 借貸穩定費 (Stability Fees) | **ETH 質押收益** \+ 期貨資金費率 (Funding Rates) |
| **擴展性** | 受限於抵押品規模與借貸需求 | 受限於期貨市場的未平倉合約量 (Open Interest) |
| **主要風險** | 監管查封 (RWA)、抵押品暴跌 | 負資金費率、交易所對手方風險 |

### **3.2 USDS：去中心化的央行模式**

USDS 的運作邏輯類似於商業銀行或央行。用戶存入價值 $150 的 ETH 或 $100 的 T-bills，鑄造 $100 USDS。

* **收益穩定性：** USDS 的收益主要來自美國國債的票息（目前約 4.5% \- 5.5%）。這意味著只要聯準會維持高利率，USDS 的收益就有「地板價」。它是可預測的、低波動的 17。  
* **資產負債表：** Sky 的資產端非常多元化，包含鏈上加密資產與鏈下 RWA。這種混合模式使其在加密熊市（幣價跌、借貸少）時能靠 RWA 賺錢，在牛市（幣價漲、借貸多）時能靠 Crypto Loans 賺錢，具備全天候盈利能力 19。

### **3.3 USDe：結構化的對沖基金模式**

Ethena 的 USDe 則是一個精妙的金融工程產品。用戶存入 $100 stETH，Ethena 在後台自動在交易所（如 Binance）開設 $100 的 ETH 做空合約。

* **Delta 中性：** 如果 ETH 下跌 10%，stETH 價值縮水，但做空合約獲利，兩者相抵，總價值維持在 $100 美元。  
* **收益來源：** 在加密貨幣牛市中，做多者（Longs）通常需要支付資金費率給做空者（Shorts）。Ethena 作為做空者，可以捕獲這筆費用（年化可達 10% \- 50%），再加上 stETH 本身的質押收益（約 3%），構成了 USDe 的高收益 21。  
* **尾部風險：**  
  1. **負費率風險：** 如果市場進入深熊，所有人都在做空，資金費率轉負，Ethena 就必須「付錢」給做多者。雖然有保險基金，但長期負費率將導致本金虧損 23。  
  2. **託管風險：** 為了開設空單，資產必須託管在中心化交易所或其合作的託管商（OES）。如果像 FTX 這樣的交易所倒閉，或者託管商出問題，對沖機制將失效 24。  
  3. **流動性枯竭：** 當 USDe 規模過大時，可能佔據全球 ETH 期貨空單的很大比例，導致「自己成為市場」，難以在不滑價的情況下平倉 21。

### **3.4 投資建議**

* **USDS** 適合視為「鏈上美元儲蓄帳戶」，風險較低，收益與美元無風險利率掛鉤，適合大資金配置。  
* **USDe** 適合視為「市場中性策略基金」，風險較高（包含交易所與模型風險），收益波動大（牛市高、熊市低），適合追求 Alpha 的進階投資者。S\&P Global 評級機構給予 USDe 極高的風險權重，正是基於其複雜性 26。

## ---

**4\. 收益真實性驗證：RWA 的黑盒子？**

對於台灣投資者而言，最常見的疑慮是：「Sky 宣稱的 RWA 收入是真的嗎？錢到底在哪裡？」鑑於 Terra/Luna 的前車之鑑，驗證收益的真實性至關重要。

### **4.1 資金流向解構**

Sky 的 RWA 架構並非簡單的代幣購買，而是具備法律效力的信託結構。

1. **用戶存入：** 用戶在鏈上將 USDC 存入 Sky 的 PSM（Peg Stability Module）。  
2. **託管轉移：** 這些 USDC 被轉移至 Coinbase Custody 或 Sygnum Bank 等合規託管機構，並兌換為法幣美元。  
3. **資產購買：** 透過設立在開曼群島或特拉華州的特殊目的實體（SPV，如 Monetalis Clydesdale Trust），Sky 指示託管方購買短天期美國國債（T-bills）或貝萊德（BlackRock）的 BUIDL 基金份額 17。  
4. **收益回流：** 國債到期或支付利息後，收益扣除託管費與管理費，回流至 Sky 的 Surplus Buffer（盈餘緩衝池），最終透過 Sky Savings Rate (SSR) 分發給 USDS 持有者或用於回購 SKY 29。

### **4.2 驗證方式**

* **鏈上審計：** 雖然國債本身在鏈下，但 Sky 合作的 Steakhouse Financial 會定期發布詳細的財務報表，將鏈上的鑄幣量與託管銀行的資產證明（Attestations）進行對帳 29。  
* **第三方託管：** 資產並非由 Rune Christensen 個人持有，而是由受監管的第三方機構（如貝萊德、Coinbase）持有。這意味著「捲款跑路」的風險被極大降低，風險轉移到了「託管機構破產」或「政府凍結」上 30。  
* **數據透明度：** 透過 Dune Analytics 的 Sky/MakerDAO 面板，投資者可以即時查看 RWA 貢獻的收入比例。數據顯示，在 2024-2025 年間，RWA 一度貢獻了協議超過 50% 的收入，證實了其作為收益核心來源的真實性 20。

## ---

**5\. 台灣投資者指南：收益、門檻與合規**

本節專為台灣用戶量身打造，解析如何在台灣的網路與監管環境下參與 Sky 生態。

### **5.1 收益機會與管道**

在台灣，銀行美元定存利率通常在 3.8% \- 4.5% 之間（視銀行專案而定），且往往有資金門檻或新資金要求。Sky Protocol 提供了更具彈性的選擇。

#### **方案一：Sky Savings Rate (SSR)**

* **機制：** 將 USDS 存入 Sky Protocol 即可獲得 sUSDS。sUSDS 是一種生息代幣，其價值會隨著時間相對於 USDS 增長。  
* **當前利率：** 根據治理投票動態調整，通常維持在 4% \- 6% 之間（甚至在促銷期曾達 12.5%，但不可持續）。這與美債利率高度相關 33。  
* **優勢：** 無鎖定期（隨存隨取），利息每秒複利，無最低金額限制。這比台灣銀行的定存更具流動性優勢。

#### **方案二：SparkLend (借貸)**

* **機制：** 在 Sky 的子協議 Spark 上提供 USDS 流動性。  
* **收益：** 除了基礎的 SSR 收益外，還可能獲得 SPK 代幣的空投積分（Pre-farming）或借貸利差。  
* **風險：** 需承擔智能合約風險。  
* **操作建議：** 台灣用戶可透過 Spark.fi 前端進行操作，該介面目前對台灣 IP 的限制較官方 Sky.money 寬鬆 6。

### **5.2 VPN 限制與服務條款 (ToS) 解析**

這是一個關鍵的合規地雷區。Sky 官方前端 **Sky.money** 實施了嚴格的地理封鎖（Geoblocking）。

* **條款陷阱：** 根據 Sky.money 的服務條款，"Prohibited Jurisdictions"（禁止司法管轄區）通常包括受制裁國家。雖然條款主要列出美國、英國（部分功能）以及受制裁國家，但「台灣」的地位在不同合規標準下有時會被模糊處理，或因銀行合作夥伴的政策而被連帶限制。更重要的是，條款 **明確禁止使用 VPN** 來繞過地理限制（"You do not and will not use Virtual Private Network... to circumvent any restrictions"）36。  
* **實務風險：** 如果台灣用戶使用 VPN 連線至 Sky.money 並進行 KYC（若未來強制實施），一旦被系統偵測到 IP 與居住地不符，或 IP 屬於已知的 VPN 數據中心，帳戶前端訪問權限可能會被封鎖。  
* **解決方案：**  
  1. **使用 Spark.fi：** Spark 作為 SubDAO，其前端策略通常較為獨立，目前對亞洲地區用戶較為友善。  
  2. **直接調用合約：** DeFi 的優勢在於後端（智能合約）是無需許可的。進階用戶可以透過 Etherscan 或第三方聚合器（如 1inch, CowSwap）進行 USDS 的兌換與存儲，完全繞過 Sky.money 的前端限制。這完全合法且符合協議設計 11。

### **5.3 台灣監管環境 (FSC)**

台灣金融監督管理委員會（FSC）已於 2023-2024 年加強對虛擬資產平台（VASP）的監管，並計畫限制未在台灣註冊的境外交易所進行廣告投放 38。

* **對用戶的影響：** Sky Protocol 本身不是交易所，而是一個去中心化協議，目前不在 VASP 登記範圍內。台灣用戶持有、交易 USDS 目前在法律上屬於個人資產配置行為，並無違法。然而，用戶需自行承擔稅務申報責任（海外所得）。  
* **出入金：** 建議台灣用戶使用台灣合規交易所（如 MAX, BitoPro, XREX）將台幣兌換為 USDT/USDC，再發送至鏈上錢包（如 MetaMask）進行 Sky 生態的操作，避免直接使用信用卡在境外平台購買，以降低銀行風控擋刷的機率 39。

## ---

**6\. 風險評估矩陣**

在投資 Sky Protocol 之前，投資者必須清楚認知以下風險：

| 風險類別 | 風險描述 | 嚴重程度 | 緩解措施 |
| :---- | :---- | :---- | :---- |
| **智能合約風險** | 代碼漏洞導致資金被駭（如 DAO 歷史上的 The DAO 事件）。 | 中 | Sky 經過多次審計（Trail of Bits 等），且運行多年未發生核心合約被駭。 |
| **監管凍結風險** | 美國政府要求凍結 RWA 資產，導致 USDS 脫鉤。 | 高 | 這是 USDS 最大的黑天鵝風險。Sky 透過地理分散化 RWA 託管來降低單點故障。 |
| **治理攻擊風險** | 惡意提案通過（如無限鑄造 SKY），破壞協議。 | 中 | 透過 GSM（治理安全模組）延遲執行，並在極端情況下啟動 NewChain 硬分叉。 |
| **利率風險** | 聯準會大幅降息，導致 RWA 收入銳減，SKY 回購力道減弱。 | 中 | 協議需在低息環境下重新依賴鏈上借貸收入（Crypto Loans）。 |
| **前端審查風險** | Sky.money 禁止台灣 IP 訪問。 | 低 | 使用去中心化前端（Spark.fi）或直接交互合約。 |

## ---

**7\. 結論與展望**

Sky Protocol 的誕生標誌著 DeFi 從「龐氏遊戲」走向「實體經濟融合」的關鍵轉折。透過 Endgame 計畫，Sky 成功建立了一套能夠捕獲數十億美元現實世界收益的機器，並將其轉化為 USDS 持有者的穩定回報。對於台灣投資者而言，USDS 提供了一個極具吸引力的美元資產替代方案，其收益率具備真實資產支撐，且流動性優於傳統定存。  
然而，這種轉型是有代價的。Sky 犧牲了部分抗審查性（引入凍結功能）以換取規模與合規。與 Ethena (USDe) 相比，Sky 選擇了一條更穩健、更像銀行的道路，而 Ethena 則選擇了更高風險、更高回報的對沖基金模式。  
**投資建議總結：**

1. **保守型投資者：** 可將部分閒置美元資產轉換為 **USDS**，存入 **Sky Savings Rate**，享受高於銀行的活期收益。務必透過冷錢包操作，並避開官方前端的潛在地理限制。  
2. **進階投資者：** 可關注 **SKY** 代幣。若看好 RWA 賽道持續增長及 Sky Stars（如 Spark）的爆發，SKY 目前處於轉型期的價值重估階段。但需密切關注協議收入在降息週期的變化。  
3. **風險對沖：** 不要將所有穩定幣資產集中在 USDS。應分散配置於 USDT（高流動性）、USDC（高合規）、DAI/LUSD（高去中心化），以構建強韌的投資組合。

Sky 的終局之戰才正要開始，它是否能成為全球金融的新底層架構，值得我們持續關注。

#### **引用的著作**

1. Maker's Endgame Will 'Change the Industry': Rune Christensen \- Unchained Crypto, 檢索日期：1月 3, 2026， [https://unchainedcrypto.com/makers-endgame-will-change-the-industry-rune-christensen/](https://unchainedcrypto.com/makers-endgame-will-change-the-industry-rune-christensen/)  
2. MakerDAO's Endgame with Rune Christensen | Fundamentals ep.57 \- Token Terminal, 檢索日期：1月 3, 2026， [https://tokenterminal.com/resources/interview/makerdao-endgame](https://tokenterminal.com/resources/interview/makerdao-endgame)  
3. Rune Christensen lays out the five steps of MakerDAO's Endgame plan \- DL News, 檢索日期：1月 3, 2026， [https://www.dlnews.com/articles/defi/makerdaos-endgame-plan-in-five-steps/](https://www.dlnews.com/articles/defi/makerdaos-endgame-plan-in-five-steps/)  
4. MakerDAO's Rebranding to Sky Protocol: What You Need to Know About SKY and USDS, 檢索日期：1月 3, 2026， [https://www.okx.com/en-us/learn/makerdao-rebranding-sky-protocol-sky-usds](https://www.okx.com/en-us/learn/makerdao-rebranding-sky-protocol-sky-usds)  
5. MakerDAO's transition to Sky protocol, introduces USDS and SKY tokens \- CryptoRank, 檢索日期：1月 3, 2026， [https://cryptorank.io/news/feed/dd3a5-makerdao-transition-to-sky-protocol](https://cryptorank.io/news/feed/dd3a5-makerdao-transition-to-sky-protocol)  
6. Understanding Spark: A Comprehensive Overview \- Research Tree, 檢索日期：1月 3, 2026， [https://www.research-tree.com/research/messari-research/understanding-spark-a-comprehensive-overview/171\_483a93fe-156a-4d02-8761-94d8bcea4ad1](https://www.research-tree.com/research/messari-research/understanding-spark-a-comprehensive-overview/171_483a93fe-156a-4d02-8761-94d8bcea4ad1)  
7. MKR to SKY Swap: Key Dates, Benefits, and What You Need to Know | OKX, 檢索日期：1月 3, 2026， [https://www.okx.com/learn/mkr-sky-swap-key-dates-benefits](https://www.okx.com/learn/mkr-sky-swap-key-dates-benefits)  
8. Upcoming MKR to SKY Upgrade: What Coinsquare Users Need to Know, 檢索日期：1月 3, 2026， [https://coinsquare.com/en-ca/learn/upcoming-mkr-to-sky-upgrade-what-coinsquare-users-need-to-know](https://coinsquare.com/en-ca/learn/upcoming-mkr-to-sky-upgrade-what-coinsquare-users-need-to-know)  
9. MKR migration to SKY is scheduled to end on September 18, overdue migration may result in losses (SKY) | Gate.com, 檢索日期：1月 3, 2026， [https://www.gate.com/blog/12271/mkr-migration-to-sky-is-scheduled-to-end-on-september-18-overdue-migration-may-result-in-losses-sky](https://www.gate.com/blog/12271/mkr-migration-to-sky-is-scheduled-to-end-on-september-18-overdue-migration-may-result-in-losses-sky)  
10. What is Sky.money? USDS Stablecoin, Features & Savings Rate \- Nansen, 檢索日期：1月 3, 2026， [https://www.nansen.ai/post/what-is-sky-money](https://www.nansen.ai/post/what-is-sky-money)  
11. sky.money, 檢索日期：1月 3, 2026， [https://sky.money/](https://sky.money/)  
12. USDS Stablecoin Explained: The Decentralized Dollar Upgrade | Eco Support Center, 檢索日期：1月 3, 2026， [https://eco.com/support/en/articles/11752998-usds-stablecoin-explained-the-decentralized-dollar-upgrade](https://eco.com/support/en/articles/11752998-usds-stablecoin-explained-the-decentralized-dollar-upgrade)  
13. Sky stablecoin USDS faced fierce criticism due to the 'freeze function'. \- Moomoo, 檢索日期：1月 3, 2026， [https://www.moomoo.com/news/post/42988487/sky-stablecoin-usds-faced-fierce-criticism-due-to-the-freeze](https://www.moomoo.com/news/post/42988487/sky-stablecoin-usds-faced-fierce-criticism-due-to-the-freeze)  
14. MakerDAO's Sky rebrand can thwart criminals — but at what cost to DeFi die-hards?, 檢索日期：1月 3, 2026， [https://www.dlnews.com/articles/defi/makerdao-sky-rebrand-brings-usds-stablecoin-freeze-function/](https://www.dlnews.com/articles/defi/makerdao-sky-rebrand-brings-usds-stablecoin-freeze-function/)  
15. Maker Rebrands To Sky And Faces Backlash Over New Stablecoin Freeze Function, 檢索日期：1月 3, 2026， [https://www.binance.com/en/square/post/2024-08-28-maker-rebrands-to-sky-and-faces-backlash-over-new-stablecoin-freeze-function-12766137771873](https://www.binance.com/en/square/post/2024-08-28-maker-rebrands-to-sky-and-faces-backlash-over-new-stablecoin-freeze-function-12766137771873)  
16. DAI vs USDS and MRK vs SKY? : r/defi \- Reddit, 檢索日期：1月 3, 2026， [https://www.reddit.com/r/defi/comments/1kxfeu4/dai\_vs\_usds\_and\_mrk\_vs\_sky/](https://www.reddit.com/r/defi/comments/1kxfeu4/dai_vs_usds_and_mrk_vs_sky/)  
17. Real-World Assets (RWAs) Adoption Examined In Dune Analytics Report, 檢索日期：1月 3, 2026， [https://www.crowdfundinsider.com/2025/09/251620-real-world-assets-rwas-adoption-examined-in-dune-analytics-report/](https://www.crowdfundinsider.com/2025/09/251620-real-world-assets-rwas-adoption-examined-in-dune-analytics-report/)  
18. Decentralized Finance Entering the Real World \- DeSpread Research, 檢索日期：1月 3, 2026， [https://research.despread.io/rwa/](https://research.despread.io/rwa/)  
19. Revenue \- SKY \- Token Terminal, 檢索日期：1月 3, 2026， [https://tokenterminal.com/explorer/projects/makerdao/metrics/revenue](https://tokenterminal.com/explorer/projects/makerdao/metrics/revenue)  
20. MakerDAO's $2.4bn in crypto loans just became the protocol's biggest moneymaker. Again, 檢索日期：1月 3, 2026， [https://www.dlnews.com/articles/defi/crypto-backed-loans-back-as-biggest-earner-for-makerdao/](https://www.dlnews.com/articles/defi/crypto-backed-loans-back-as-biggest-earner-for-makerdao/)  
21. Inside Modern Stablecoin Architecture: How Ethena's USDe Work, 檢索日期：1月 3, 2026， [https://rocknblock.io/blog/stablecoin-architecture-how-ethena-usde-works](https://rocknblock.io/blog/stablecoin-architecture-how-ethena-usde-works)  
22. Analyzing the Technical Stack of Synthetic Dollar Stablecoins | by Jung-Hua Liu \- Medium, 檢索日期：1月 3, 2026， [https://medium.com/@gwrx2005/analyzing-the-technical-stack-of-synthetic-dollar-stablecoins-0a39560c52cb](https://medium.com/@gwrx2005/analyzing-the-technical-stack-of-synthetic-dollar-stablecoins-0a39560c52cb)  
23. Ethena: Delving into the Mechanics and Risks of USDe \- Chorus One, 檢索日期：1月 3, 2026， [https://chorus.one/reports-research/ethena-delving-into-the-mechanics-and-risks-of-usde](https://chorus.one/reports-research/ethena-delving-into-the-mechanics-and-risks-of-usde)  
24. Risks for Synthetic Stablecoins Ethena Labs USDe Case Study \- ChainArgos, 檢索日期：1月 3, 2026， [https://www.chainargos.com/wp-content/uploads/2025/10/ChainArgos-Case-Study-The-Risks-with-Synthetic-Stablecoins-Ethana-Labs-USDe-20-October-2025.pdf](https://www.chainargos.com/wp-content/uploads/2025/10/ChainArgos-Case-Study-The-Risks-with-Synthetic-Stablecoins-Ethana-Labs-USDe-20-October-2025.pdf)  
25. Ethena's USDe Explained: No Terra-Luna, but Major Risks Exist \- Medium, 檢索日期：1月 3, 2026， [https://medium.com/thecapital/ethenas-usde-explained-no-terra-luna-but-major-risks-exist-1ca01e67da86](https://medium.com/thecapital/ethenas-usde-explained-no-terra-luna-but-major-risks-exist-1ca01e67da86)  
26. Why Ethena's USDe got a 1250% risk weighting in S\&P Global's Sky credit rating, 檢索日期：1月 3, 2026， [https://www.dlnews.com/articles/defi/why-ethena-usde-got-a-high-risk-weighting-in-sp-global-sky-credit-rating/](https://www.dlnews.com/articles/defi/why-ethena-usde-got-a-high-risk-weighting-in-sp-global-sky-credit-rating/)  
27. Sky Protocol Assigned 'B-' Rating; Outlook Stable \- S\&P Global, 檢索日期：1月 3, 2026， [https://www.spglobal.com/ratings/en/regulatory/article/-/view/sourceId/101639449](https://www.spglobal.com/ratings/en/regulatory/article/-/view/sourceId/101639449)  
28. Savings USDC \- Spark Docs, 檢索日期：1月 3, 2026， [https://docs.spark.fi/user-guides/earning-savings/susdc](https://docs.spark.fi/user-guides/earning-savings/susdc)  
29. One year into Sky, adoption lags behind vision \- Blockworks, 檢索日期：1月 3, 2026， [https://blockworks.co/news/sky-dao-adoption](https://blockworks.co/news/sky-dao-adoption)  
30. Sky approves $1 billion allocation for Janus Henderson's onchain fund using fresh-out-of-stealth Grove infrastructure | The Block, 檢索日期：1月 3, 2026， [https://www.theblock.co/post/359687/sky-approves-1-billion-allocation-for-janus-hendersons-onchain-fund-using-fresh-out-of-stealth-grove-infrastructure](https://www.theblock.co/post/359687/sky-approves-1-billion-allocation-for-janus-hendersons-onchain-fund-using-fresh-out-of-stealth-grove-infrastructure)  
31. CoinGecko 2025 RWA Report, 檢索日期：1月 3, 2026， [https://assets.coingecko.com/reports/2025/CoinGecko-2025-RWA-Report.pdf](https://assets.coingecko.com/reports/2025/CoinGecko-2025-RWA-Report.pdf)  
32. Revenue | Token Terminal, 檢索日期：1月 3, 2026， [https://tokenterminal.com/explorer/metrics/revenue](https://tokenterminal.com/explorer/metrics/revenue)  
33. Sky's Painful Transition: $5M Loss Highlights USDS Growing Pains | CoinRank on Binance Square, 檢索日期：1月 3, 2026， [https://www.binance.com/en/square/post/24275081283698](https://www.binance.com/en/square/post/24275081283698)  
34. Sky's Stablecoin USDS Climbs to $2 Billion Circulation in Breakout Month \- Binance, 檢索日期：1月 3, 2026， [https://www.binance.com/en/square/post/19132311857106](https://www.binance.com/en/square/post/19132311857106)  
35. Spark Fi: DeFi Lending & USDS Savings Guide 2025 \- Nansen, 檢索日期：1月 3, 2026， [https://www.nansen.ai/post/spark-fi-guide-2025](https://www.nansen.ai/post/spark-fi-guide-2025)  
36. Legal Terms | Sky Legal Terms \- sky.money, 檢索日期：1月 3, 2026， [https://docs.sky.money/legal-terms](https://docs.sky.money/legal-terms)  
37. Sky Token Rewards \- sky.money, 檢索日期：1月 3, 2026， [https://sky.money/features](https://sky.money/features)  
38. Taiwan plans to restrict offshore cryptocurrency exchanges from operating within the country, 檢索日期：1月 3, 2026， [https://www.binance.com/en-TR/square/post/1102596](https://www.binance.com/en-TR/square/post/1102596)  
39. Help\! My money is stuck in my Taiwan bank account\! \- Reddit, 檢索日期：1月 3, 2026， [https://www.reddit.com/r/taiwan/comments/1aj8wr0/help\_my\_money\_is\_stuck\_in\_my\_taiwan\_bank\_account/](https://www.reddit.com/r/taiwan/comments/1aj8wr0/help_my_money_is_stuck_in_my_taiwan_bank_account/)  
40. Why is physical cash still so common in 2025? : r/taiwan \- Reddit, 檢索日期：1月 3, 2026， [https://www.reddit.com/r/taiwan/comments/1kr0pmi/why\_is\_physical\_cash\_still\_so\_common\_in\_2025/](https://www.reddit.com/r/taiwan/comments/1kr0pmi/why_is_physical_cash_still_so_common_in_2025/)