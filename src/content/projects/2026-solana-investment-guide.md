---
title: "浴火重生的單體鏈之王：Solana (SOL) 2026 深度投資與技術研報"
description: "全面解析 Solana 如何確立高性能公鏈之王地位，探討其技術護城河、生態系統韌性、潛在投資風險，以及台灣投資者合規交易與稅務指南。"
date: 2026-01-03
author: wu-yan
categories: ["深度研究", "Solana"]
tags: ["Solana", "SOL", "DeFi", "DePIN", "Investment", "Research"]
complexity: 3
---

## 執行摘要：在模組化世界中重塑單體鏈的榮光

在區塊鏈技術的演進史中，2025 年被視為一個決定性的分水嶺。這一年，經歷了 FTX 崩盤之痛的 Solana（SOL）不僅完成了從「死亡邊緣」到「市值新高」的浴火重生，更在技術哲學的層面上，向以太坊主導的「模組化（Modular）」世界觀發起了最強有力的挑戰。作為一份面向台灣投資大眾與加密貨幣從業者的深度指南，本報告將全面解析 Solana 如何確立其「高性能公鏈之王」的地位，並深入探討其背後的技術護城河、生態系統的韌性以及潛在的投資風險。  
截至 2026 年初，Solana 網絡已不再僅僅是所謂的「以太坊殺手」，它演化成了一個擁有獨特經濟模型與技術架構的金融操作系統。從 Firedancer 客戶端的成功上線，到 DePIN（去中心化物理基礎設施網絡）的大規模落地，再到華爾街機構與支付巨頭（如 PayPal、Visa）的深度整合，Solana 正在重新定義區塊鏈的性能邊界。與此同時，台灣投資者在面對這一新興資產時，亦需掌握合規的交易渠道與日益完善的稅務申報知識。本報告將透過詳實的數據分析、技術解構與市場洞察，為您揭開 Solana 生態的宏大敘事。

---

## 第一章：單體鏈的極致野心——架構哲學的終極碰撞

在區塊鏈擴容的戰爭中，市場演化出了兩條截然不同的哲學路徑：以太坊的「模組化」與 Solana 的「單體鏈」。這不僅是技術路線的差異，更是對未來互聯網基礎設施形態的不同賭注。理解這兩種世界觀的碰撞，是評估 Solana 長期投資價值的基石。

### **1.1 單體鏈 (Monolithic) vs. 模組化 (Modular)：世界觀的決裂**

以太坊社區與其核心開發者認為，單一區塊鏈無法同時完美處理解決「不可能三角」（即去中心化、安全性與擴展性）。因此，以太坊選擇了轉型為「結算層（Settlement Layer）」，將高頻的交易執行（Execution）外包給 Layer 2（如 Arbitrum, Optimism, Base）以及數據可用性層（Data Availability Layers）。這種「模組化」架構雖然提升了整體的理論吞吐量，但也帶來了顯著的副作用：流動性割裂（Liquidity Fragmentation）、跨鏈互操作性的複雜度以及用戶體驗的斷裂 1。  
相反，Solana 堅持「單體鏈」架構，追求在單一分片（Shard）上處理所有事務。Solana 的核心哲學是：**硬體性能（頻寬、SSD 速度、GPU 算力）將按照摩爾定律持續增長，軟體不應成為硬體的瓶頸**。因此，Solana 致力於構建一個能夠榨乾現代硬體每一滴效能的單一全球狀態機 2。

#### **單體架構的核心優勢：原子可組合性 (Atomic Composability)**

Solana 最具殺傷力的武器在於「原子可組合性」。在 Solana 的單體架構中，所有的應用程序——無論是去中心化交易所（DEX）、借貸協議、NFT 市場還是穩定幣支付——都運行在同一個全球狀態（Global State）中。  
這意味著，一筆交易可以在同一個區塊、甚至同一個指令槽中，無縫地調用多個智能合約。例如，一名交易者可以發起一筆交易，先從 Jupiter 聚合器獲取最佳報價，隨即調用 Orca 的流動性池進行兌換，並將獲得的代幣存入 MarginFi 進行借貸，所有這些操作都在幾百毫秒內一次性完成，且無需承擔跨鏈橋的信任風險或等待時間 5。  
相比之下，以太坊的 Layer 2 生態雖然繁榮，但應用被分散在不同的 Rollup 中。如果用戶想要將 Base 上的資產用於 Arbitrum 上的應用，必須經過繁瑣的跨鏈流程，這不僅增加了時間成本和手續費，還引入了跨鏈橋被駭客攻擊的安全隱患。Solana 的單體架構消除了這些摩擦，為複雜的 DeFi 樂高積木提供了最堅實的地基 7。

### **1.2 核心技術支柱：速度的來源**

Solana 之所以能成為「高性能之王」，並非僅僅依靠更大的區塊，而是依賴於一系列底層協議的創新。

#### **歷史證明 (Proof of History, PoH)**

許多人誤以為 PoH 是一種共識機制，實則不然。PoH 是一個「去中心化的時鐘」。在傳統區塊鏈（如比特幣或早期以太坊）中，節點之間需要頻繁通信來確認「現在幾點了」以及「哪個區塊先發生」，這消耗了大量的網絡頻寬和時間。  
Solana 引入了 PoH，利用 SHA-256 的遞歸哈希函數創建了一個不可篡改的時間流。驗證者可以在不與其他節點溝通的情況下，對交易進行時間戳標記和排序。這使得 Solana 能夠實現「異步處理」，極大提升了效率。這就像是工廠流水線上，每個工人都精確知道自己的任務時間，而不需要每做一步都停下來開會確認進度 1。

#### **Sealevel 並行執行引擎**

這是 Solana 與以太坊虛擬機（EVM）最大的區別。EVM 是單線程的，意味著所有的交易必須排隊，一筆接一筆地處理。這就像一條單車道的公路，前面有一輛車慢了，後面所有的車都要堵著。  
Solana 的 Sealevel 運行時允許並行處理數萬筆互不衝突的智能合約交易。如果交易 A 是 Alice 轉帳給 Bob，交易 B 是 Charlie 轉帳給 David，這兩筆交易涉及的帳戶完全不同，Sealevel 就可以利用驗證者節點強大的多核 CPU 同時處理這兩筆交易。這種並行架構使得 Solana 在 2025 年的非投票交易 TPS（每秒交易數）穩定維持在 2,000 以上，峰值甚至可達數萬，遠超 EVM 鏈的處理能力 4。

### **1.3 與 Layer 2 的終極對決：用戶體驗之爭**

到 2026 年，市場論述已經從單純的「Solana vs. Ethereum」轉變為「Solana vs. Ethereum Layer 2s (如 Base, Arbitrum)」。雖然 Layer 2 成功降低了以太坊生態的手續費，但 Solana 仍然保持著獨特的競爭優勢。

| 比較維度 | Solana (單體鏈) | Ethereum Layer 2s (模組化) | 洞察 |
| :---- | :---- | :---- | :---- |
| **流動性狀態** | 統一 (Unified) | 碎片化 (Fragmented) | Solana 的單一池深度更適合大額交易與滑點控制 7 |
| **互操作性** | 原子級 (Atomic) | 異步/需跨橋 (Asynchronous/Bridged) | Solana 支持複雜的一鍵式 DeFi 組合操作 5 |
| **用戶體驗** | 單一錢包/代幣 | 需切換網絡/多種 Gas 代幣 | Solana 對 Web2 用戶更友好，無認知門檻 4 |
| **結算速度** | 400ms \- 800ms | 數秒至數分鐘 (取決於 L2 類型) | Solana 適合支付與高頻交易場景 1 |

以太坊研究員 Justin Drake 曾指出，Solana 的真正競爭對手是 L2 而非 L1。然而，Solana 通過消除「分層」帶來的複雜性，提供了一種更接近 Web2 互聯網速度的體驗，這對於追求極致效率的金融應用和消費級應用具有不可替代的吸引力 7。

---

## 第二章：浴火重生——從 FTX 崩盤到 2025 年的復甦傳奇

要理解 Solana 今天的地位，必須回顧其最黑暗的時刻。這段歷史不僅是價格的波動，更是社區韌性的證明，也是投資者理解 Solana 「反脆弱性」的關鍵案例。

### **2.1 FTX 的陰影與「死亡」敘事**

2022 年 11 月，隨著 FTX 交易所和 Alameda Research 的崩潰，Solana 遭受了毀滅性打擊。Sam Bankman-Fried (SBF) 曾是 Solana 最重要、最高調的支持者之一，Alameda Research 不僅投資了 Solana Labs，還是其生態系統中最大的做市商和代幣持有者。  
當 FTX 帝國倒塌時，恐慌情緒席捲市場。投資者擔心 Alameda 持有的海量 SOL 會被清算拋售。SOL 價格從牛市高點的 260 美元一路狂瀉，一度跌至 8 美元，市值蒸發超過 96%。當時，主流媒體和加密評論員紛紛宣判 Solana「已死」，稱其為「SBF 的殭屍鏈（Sam Coin）」 13。  
然而，這次危機成為了 Solana 最重要的過濾器。純粹為了投機而來的資本撤離了，但核心開發者留了下來。數據顯示，即便在幣價最低迷的時期，Solana Github 代碼庫的提交量和活躍開發者數量並沒有顯著下降。這種「Buidl（建設）」文化成為了 Solana 復甦的種子 2。

### **2.2 破產資產處置：從懸頂之劍到機構入場券**

FTX 破產後的代幣處置一直是市場懸在頭頂的達摩克利斯之劍。然而，到了 2025 年，這一看似負面的因素被巧妙地轉化為機構入場的契機。  
FTX 破產資產管理團隊（FTX Estate）並沒有選擇在二級市場直接拋售 SOL，那樣會導致價格崩盤，損害債權人利益。相反，他們委託了 Galaxy Asset Management 進行場外拍賣（OTC）。

* **機構接盤**：包括 Pantera Capital、Neptune Digital 和 Galaxy Trading 在內的知名機構投資者，以低於市價的折扣（例如每枚 64 美元）收購了 FTX 持有的約 4,100 萬枚鎖倉 SOL 13。  
* **鎖倉機制的穩定作用**：這些被機構收購的 SOL 遵循嚴格的線性解鎖時間表（Vesting Schedule）。例如，2025 年 3 月 1 日解鎖了約 1,120 萬枚 SOL，剩餘部分將持續分批解鎖至 2028 年。  
* **戰略意義**：這種安排將原本屬於 Alameda 的不穩定籌碼，轉移到了更有耐心的風投機構手中。這些機構為了獲得回報，更有動力去支持 Solana 生態的發展。市場也逐漸消化了「解鎖即砸盤」的恐懼，轉而關注生態的基本面增長 14。

### **2.3 Vitalik 的聲援與社區凝聚**

在 Solana 最脆弱的時刻（2022 年底），以太坊創始人 Vitalik Buterin 發布了一條著名的推文：「一些聰明的人告訴我，Solana 有一個認真的聰明開發者社區，既然可怕的投機分子已經被洗出去了，這條鏈會有光明的未來。我希望這個社區能有公平的機會茁壯成長。」  
這番話標誌著加密世界對 Solana 技術實力的認可，也幫助穩定了軍心。隨後，Solana 社區通過舉辦黑客松（Hackathons），不斷推出新協議（如 Jupiter, MarginFi, Tensor），證明了即使沒有 SBF，Solana 依然具備強大的造血能力。最終在 2023-2025 年間，Solana 實現了從基本面到幣價的徹底反轉，確立了其作為僅次於以太坊的第二大智能合約平台的地位 20。

---

## 第三章：Firedancer——性能與去中心化的聖杯

如果說 2023 年是生存之年，2024 年是復甦之年，那麼 2025 年則是 Solana 技術飛躍之年。2025 年 12 月 12 日，Solana 網絡迎來了其歷史上最重要的里程碑——**Firedancer** 驗證器客戶端正式上線主網 22。

### **3.1 單一客戶端的風險與歷史教訓**

在 Firedancer 出現之前，Solana 網絡過度依賴於 Solana Labs 開發的單一客戶端（最初基於 Rust 語言，現稱為 Agave）。這在分佈式系統中是一個巨大的單點故障風險。這意味著如果該客戶端代碼中出現一個 Bug，整個網絡的所有節點都可能同時崩潰。  
事實上，Solana 過去的多次停機都與此有關。例如，2024 年 2 月發生的長達 5 小時的停機，就是由於 JIT（即時編譯）緩存機制中的一個無限循環 Bug 導致的。當時，全網驗證者不得不手動重啟並修補軟體，這對致力於成為全球金融基礎設施的 Solana 來說是不可接受的 25。

### **3.2 Firedancer 的技術突破：C++ 的力量**

Firedancer 是由高頻交易巨頭 Jump Trading 旗下的 Jump Crypto 部門從零開始，使用 C++ 語言重新編寫的驗證器客戶端。它不是對原有客戶端的修補，而是一個全新的架構。

* **完全獨立的代碼庫**：Firedancer 與 Agave 客戶端不共享任何代碼。這極大降低了共模故障（Common Mode Failure）的風險。即使 Agave 客戶端因為某個 Rust 庫的漏洞而崩潰，運行 Firedancer 的節點仍能繼續出塊，保證網絡不宕機。這使 Solana 成為繼以太坊之後，第二個擁有多個獨立生產級客戶端的公鏈 28。  
* **性能怪獸**：Jump Crypto 將其在高頻交易領域積累的硬體優化經驗帶入了區塊鏈。Firedancer 優化了內存管理、網絡堆棧和並行處理能力。在測試環境中，Firedancer 展現了超過 100 萬 TPS 的理論處理能力。雖然主網實際速度受限於頻寬和其他物理因素，但 Firedancer 的引入消除了軟體層面的瓶頸，讓 Solana 的性能上限僅取決於硬體 23。  
* **主網表現**：截至 2026 年初，Firedancer 已經在主網穩定運行，雖然初期採用率控制在 20% 左右以確保安全，但它已經成功生產了數萬個區塊且無故障。市場對此反應熱烈，視其為 Solana 技術成熟的標誌 22。

### **3.3 網絡穩定性：告別宕機時代**

隨著 Firedancer 的部署以及核心協議的修復（如 QUIC 協議的實施以防止垃圾交易洪水攻擊、本地費率市場的引入），Solana 的網絡穩定性在 2025 年達到了新高。數據顯示，自 2024 年 2 月以來，Solana 已經連續超過 18 個月保持 100% 的正常運行時間（Uptime），徹底擺脫了過去「經常宕機」的惡名，為企業級應用的落地鋪平了道路 31。

---

## 第四章：生態系繁榮——DeFi、DePIN 與支付的鐵三角

Solana 的生態系統在 2025 年展現出了強大的韌性與多樣性，形成了以 DeFi 交易、DePIN 基礎設施和穩定幣支付為核心的三大支柱。這些應用場景並非空中樓閣，而是實實在在地產生了收入和流量。

### **4.1 DeFi 2.0 與原子套利 (Atomic Arbitrage)**

Solana 的 DeFi 生態不僅僅是複製以太坊的模式，而是利用其高速度創造了獨特的市場結構。

#### **Jupiter：聚合器的統治與套利經濟**

Jupiter 是 Solana 上最大的 DEX 聚合器，其在 2025 年佔據了超過 90% 的聚合交易份額。然而，Jupiter 的成功不僅在於為用戶提供最佳報價，還在於它成為了全網流動性的樞紐。  
數據分析顯示，Jupiter 上約 40%-50% 的交易量實際上來自「原子套利（Atomic Arbitrage）」。由於 Solana 的區塊時間極短（400ms），套利機器人可以在同一個交易區塊內，發現並利用不同流動性池（如 Orca, Raydium, Phoenix）之間的微小價差。機器人可以在一筆原子交易中完成「買入低價資產 \-\> 賣出高價資產」的操作，如果交易失敗，整個操作會回滾，不會損失本金（僅損失少量手續費）。這種高頻、低風險的套利活動雖然被部分人視為「虛假繁榮」，但它實質上為網絡提供了巨大的流動性深度和價格發現效率，這是其他慢速鏈無法比擬的 33。

#### **Jito 與 MEV：收益的民主化**

Jito 是 Solana 生態中另一個關鍵的基礎設施，它類似於以太坊上的 Flashbots。Jito 開發了一個修改版的驗證器客戶端，允許搜尋者（Searchers）向驗證者支付「小費（Tips）」，以換取將他們的套利交易捆綁（Bundle）並優先打包進區塊。  
JitoSOL 是基於此機制的流動性質押代幣（LST）。使用者質押 SOL 到 JitoSOL，不僅能獲得基礎的通脹獎勵，還能分得驗證者獲得的 MEV（最大可提取價值）收益。2025 年，JitoSOL 的年化收益率（APY）穩定在 5.7%-7% 之間，高於普通質押。這種機制將原本屬於礦工/驗證者的隱形收入，重新分配給了普通的持幣者 36。

### **4.2 DePIN：物理世界的區塊鏈革命**

去中心化物理基礎設施網絡 (DePIN) 是 Solana 區別於以太坊的獨特優勢。項目方選擇 Solana 並非偶然，而是看中了其 **狀態壓縮 (State Compression)** 技術帶來的極致低成本。

#### **Helium 的遷移與復興**

Helium 是全球最大的分佈式物聯網（IoT）和 5G 網絡。2023 年，Helium 決定放棄自建區塊鏈，全網遷移至 Solana。這一決定在 2025 年結出了碩果。  
利用 Solana 的 cNFT（壓縮 NFT）技術，Helium 將其網絡中的近 100 萬個熱點設備鑄造為 NFT。在以太坊上，這可能需要數百萬美元的 Gas 費，而在 Solana 上僅需數百美元。遷移後，Helium 網絡的穩定性大幅提升，開發者可以專注於無線網絡業務而非區塊鏈維護。截至 2025 年 Q2，Helium 網絡上活躍的 IoT 熱點超過 37.6 萬個，每日傳輸數據量激增 40。

#### **Hivemapper 與 Render**

* **Hivemapper**：這是一個「行車記錄儀挖礦」的去中心化地圖項目。司機購買設備，開車時收集街景數據，獲得 HONEY 代幣獎勵。2025 年，Hivemapper 實現了月均 3000 萬公里的繪圖數據，貢獻者數量突破 42 萬，其地圖數據的新鮮度遠超 Google Maps，並已開始向企業出售數據 API 42。  
* **Render Network**：分佈式 GPU 渲染網絡 Render 也利用 Solana 的高吞吐量來處理複雜的任務分發和支付結算。隨著 AI 訓練和 3D 渲染需求的爆發，Render 在 Solana 上的活躍度創下新高 41。

### **4.3 支付與穩定幣：挑戰 Visa 的護城河**

2025 年是 Solana 支付場景落地的元年，傳統金融巨頭開始用腳投票。

* **PayPal PYUSD**：PayPal 的穩定幣 PYUSD 在擴展到 Solana 網絡後，利用其低廉的轉帳成本（低於 0.01 美元）和高速度（Confidential Transfers）迅速獲得了市場份額。到 2025 年底，PYUSD 在 Solana 上的供應量和交易活躍度甚至在某些月份超越了以太坊主網，成為小額支付和跨境匯款的首選。PayPal 甚至利用 Solana 的 Token Extensions 功能，為商家提供了更靈活的合規與凍結功能 44。  
* **Stripe 與 Visa**：全球支付巨頭 Stripe 恢復了加密貨幣支付支持，重點整合了 Solana 上的 USDC 結算。Visa 也在其試點項目中強調了 Solana 的高吞吐量對於結算的重要性。數據顯示，2025 年 Q1，Solana 上的穩定幣月均交易筆數超過 2 億筆，點對點轉帳金額高達 592 億美元，這些數據表明 Solana 正在逐步蠶食傳統支付網絡的市場份額，成為真正的「價值互聯網」 47。

### **4.4 Memecoin 超級週期：Pump.fun 現象**

雖然存在爭議，但 Memecoin 無疑是本輪週期的核心敘事之一，而 Solana 是這場盛宴的主舞台。  
**Pump.fun** 平台將發幣門檻降到了極致（低於 2 美元），並通過聯合曲線（Bonding Curve）機制保證了早期流動性，消除了傳統發幣中的「跑路（Rug Pull）」風險（至少在流動性遷移到 Raydium 之前）。在 2025 年 Q4，Pump.fun 產生了 7,410 萬美元的驚人收入，日均收入甚至一度超越了以太坊和 Tron。儘管 Memecoin 具有高風險，但它們成功為 Solana 帶來了數百萬的新增活躍錢包。這些用戶在賺取（或虧損）後，往往會轉化為 DeFi 和 NFT 用戶，成為生態系統的長期留存者 49。

---

## 第五章：網絡健康與代幣經濟學 (Tokenomics)

投資 SOL 不僅是買入一個代幣，更是投資一個數字經濟體的股權。我們需要審視其網絡健康狀況和代幣的供需動態。

### **5.1 驗證者去中心化的隱憂**

一個令人擔憂的趨勢是驗證者數量的減少。數據顯示，Solana 的活躍驗證者數量從 2023 年高峰期的 2,500 多個，下降到了 2025 年底的約 800 個 53。

* **原因分析**：  
  1. **基金會修剪計劃 (Pruning)**：Solana 基金會實施了更嚴格的委託政策，移除了表現不佳、長期處於邊緣或涉嫌 Sybil 攻擊（一人控制多節點）的驗證者。這是一次主動的「瘦身」行動 54。  
  2. **經濟壓力**：運行高性能 Solana 節點需要昂貴的硬體（高階 CPU、數百 GB 的 RAM）和極高的頻寬成本（每月數百至上千美元）。在 SOL 幣價波動期間，小型運營商難以覆蓋成本。  
* **Nakamoto Coefficient**：儘管節點總數下降，但衡量去中心化的關鍵指標——Nakamoto Coefficient（破壞網絡共識所需控制的最小節點數）卻從 13 上升到了 19。這意味著雖然參與者變少了，但質押的 SOL 分佈得更加均勻，不再集中在少數幾個大節點手中。這是一個「質大於量」的信號 54。

### **5.2 通脹、銷毀與真實收益**

Solana 採用通脹模型來激勵驗證者，初始通脹率為 8%，每年遞減 15%，直至穩定在 1.5% 的長期通脹率 (Long-term Inflation Rate)。然而，Solana 引入了強大的通縮機制：

* **費用銷毀**：每筆交易的基礎簽名費（Base Fee）的 50% 會被直接銷毀，另外 50% 獎勵給驗證者。  
* **優先費 (Priority Fees)**：隨著網絡活動增加，特別是在 Memecoin 熱潮和 NFT 鑄造期間，用戶為了加快交易確認會支付高額優先費。  
* **經濟模型轉變**：在網絡高負載期間，銷毀的 SOL 數量相當可觀，部分抵消了通脹壓力。這使得 SOL 在活躍度高時具備了類似以太坊 EIP-1559 的價值捕獲能力。對於質押者而言，扣除通脹後的真實收益率（Real Yield）隨著網絡費用的增加而提升 5。

---

## 第六章：台灣投資者指南——2026 實戰手冊

對於台灣的投資者而言，除了關注全球基本面，還需掌握在地的合規交易渠道與稅務規劃。隨著加密貨幣逐漸走入主流，台灣的監管與稅務環境也在 2025-2026 年變得更加規範。

### **6.1 台灣合規交易所與 VASP 規範**

在台灣，購買 SOL 最安全便捷的方式是通過已完成金管會洗錢防制法令遵循聲明（VASP）的交易所。2024 年 6 月，台灣虛擬資產平台及交易業務事業（VASP）公會正式成立，標誌著行業進入自律時代 58。

* **MAX 交易所 (MaiCoin 集團)**：台灣最大的數位資產交易所之一。提供台幣 (TWD) 對 SOL 的直接交易對，銀行信託保障資金安全。  
  * *注意*：交易所會不定期進行錢包維護，期間可能暫停存提幣（如 2024 年 8 月和 11 月的公告曾暫停 SOL 存提），建議投資者在進行鏈上交互前，先查看官方公告，避免資金卡在交易所 60。  
* **BitoPro (幣託)**：另一大本土老牌交易所，提供全家便利商店買幣等便民服務。BitoPro 積極參與 VASP 公會的自律規範制定，並在技術上不斷升級。其 SOL/TWD 交易深度良好，適合大額台幣出入金 63。

**監管趨勢**：金管會已要求所有 VASP 業者在 2025 年 9 月前完成新的洗錢防制登記，未登記者將面臨刑事責任（最高兩年徒刑）。因此，台灣投資者應避免使用未在台灣落地的中小型境外平台，以免遭遇「斷卡」或資金凍結風險 66。

### **6.2 2026 年海外所得稅務申報 (AMT) 全解析**

隨著加密貨幣投資收益的增加，稅務問題不容忽視。根據台灣《所得基本稅額條例》（俗稱最低稅負制），投資者在海外加密貨幣交易所（如 Binance, OKX, Bybit）或鏈上錢包（如 Phantom, Solflare）的獲利，通常被歸類為「海外所得」。  
**申報與課稅邏輯 (針對 2025 年度所得，於 2026 年 5 月申報)**：

1. **第一道門檻：海外所得是否需計入？**  
   * 若全年海外所得（包含加密貨幣獲利、美股獲利等）合計 **未達新台幣 100 萬元**，則完全免予計入，無需申報。  
   * 若 **超過或等於 100 萬元**，則需全數計入「基本所得額」。  
2. **第二道門檻：是否需要繳稅？**  
   * 計算 **基本所得額** \= 綜合所得淨額 \+ 海外所得 \+ 特定保險給付 \+ 其他項目。  
   * 扣除 **免稅額**：2025 年度的免稅額度可能調整為 **750 萬元**（具體數額需依財政部當年度公告為準，通常隨物價指數調整）。  
   * 若基本所得額 **小於** 免稅額（約 750 萬元）：無須繳納基本稅額。  
   * 若基本所得額 **大於** 免稅額：需計算基本稅額。  
3. **稅額計算公式**：  
   * **基本稅額** \= (基本所得額 \- 750 萬元) × **20%**。  
   * **最終應繳稅額**：比較「基本稅額」與「一般所得稅額（綜所稅）」。  
     * 若 一般所得稅額 \>= 基本稅額：維持原樣，不需多繳。  
     * 若 一般所得稅額 \< 基本稅額：需補繳差額。

**實務建議與風險提示**：

* **成本舉證之難**：國稅局在認定所得時，原則上採「核實計算」（售價 \- 成本 \- 費用）。但加密貨幣交易頻繁，跨鏈、空投、DeFi 收益導致成本極難計算。若無法舉證成本，國稅局可能會按售價的一定比例（過去曾有按 20% 計算利潤的案例，但此非通則）核定所得，這可能導致稅負過重。  
* **出金策略**：若您通過 MAX 或 BitoPro 將加密貨幣換回台幣並提領到銀行帳戶，金流軌跡非常明確。若單筆或全年金額較大，極易觸發銀行的洗錢防制通報或國稅局的勾稽。  
* **合規建議**：務必保留所有法幣入金紀錄（匯款水單）、交易所交易紀錄匯出檔（CSV）。對於大額獲利者（超過 750 萬台幣），強烈建議諮詢專精於加密貨幣稅務的會計師進行年度規劃，切勿抱持僥倖心態 67。

---

## 第七章：結論——高性能公鏈的終局之戰

站在 2026 年的視角回望，Solana 的故事是一個關於**信念、執行力與技術賭注**的故事。  
Solana 沒有選擇容易的路。它沒有為了兼容以太坊（EVM）而妥協其架構，也沒有為了短期的網絡穩定而犧牲去中心化的長遠目標。從 FTX 的廢墟中，它依靠強大的開發者社區、Firedancer 的底層代碼重構，以及 DePIN 和支付領域的真實應用落地，重建了市場的信心。  
對於投資者而言，Solana 不再僅僅是一個「以太坊殺手」，它是**區塊鏈摩爾定律的化身**。如果說比特幣是數位黃金，以太坊是數位石油與結算層，那麼 Solana 正在致力於成為**全球數位經濟的高速光纖網絡**——一個能夠承載納斯達克級別交易量、Visa 級別支付流與全球物聯網數據的單體狀態機。  
在這場單體鏈與模組化的終極對決中，Solana 已經證明了它有資格坐在牌桌的最高位。隨著 Firedancer 的成熟與機構採用的加速，Solana 的下一個目標，將是挑戰傳統互聯網的性能邊界。

---

*免責聲明：本報告內容僅供教育與資訊參考，不構成任何形式的投資建議、要約或招攬。加密貨幣市場波動劇烈，投資者應自行評估風險並承擔投資結果。台灣稅務法規與監管政策可能隨時變動，具體報稅事宜請諮詢專業稅務顧問或會計師。*

#### **引用的著作**

1. How the Ethereum vs Solana war ended quietly not with a bang but a whimper \- CryptoSlate, 檢索日期：1月 2, 2026， [https://cryptoslate.com/the-ethereum-vs-solana-war-ended-quietly-not-with-a-bang-but-a-whimper/](https://cryptoslate.com/the-ethereum-vs-solana-war-ended-quietly-not-with-a-bang-but-a-whimper/)  
2. A spicy salvo launched in the monolithic vs modular debate \- Blockworks, 檢索日期：1月 2, 2026， [https://blockworks.co/news/monolithic-modular-blockchain-debate](https://blockworks.co/news/monolithic-modular-blockchain-debate)  
3. SOL Layer 2 and Rollups on Solana: Unlocking Scalability and Future Growth \- Phemex, 檢索日期：1月 2, 2026， [https://phemex.com/academy/sol-layer-2-rollups-solana-scalability](https://phemex.com/academy/sol-layer-2-rollups-solana-scalability)  
4. Is Solana Better Than Ethereum | 2025 Blockchain Comparison \- Webisoft, 檢索日期：1月 2, 2026， [https://webisoft.com/articles/is-solana-better-than-ethereum/](https://webisoft.com/articles/is-solana-better-than-ethereum/)  
5. Solana in 2025 ‑ Speed, Ecosystem Growth, Tokenomics | CryptoEQ, 檢索日期：1月 2, 2026， [https://www.cryptoeq.io/articles/solana-2025-overview](https://www.cryptoeq.io/articles/solana-2025-overview)  
6. Solana's Path to Sustainable Scalability: Archival State Mechanisms with On-Chain Proofs, 檢索日期：1月 2, 2026， [https://medium.com/@fireblast963/solanas-path-to-sustainable-scalability-archival-state-mechanisms-with-on-chain-proofs-4d642ee5c5d8](https://medium.com/@fireblast963/solanas-path-to-sustainable-scalability-archival-state-mechanisms-with-on-chain-proofs-4d642ee5c5d8)  
7. Solana vs. Base: How Ethereum's most active L2 compares against Solana \- Blockworks, 檢索日期：1月 2, 2026， [https://blockworks.co/news/solana-vs-base](https://blockworks.co/news/solana-vs-base)  
8. Solana \+ Ethereum: The Rome Protocol Link | by Rissa \- Medium, 檢索日期：1月 2, 2026， [https://medium.com/@tempestgirl1/solana-ethereum-the-rome-protocol-bridge-4498227dbafa](https://medium.com/@tempestgirl1/solana-ethereum-the-rome-protocol-bridge-4498227dbafa)  
9. In-depth analysis: Does Solana really need L2 and application chains? \- Binance, 檢索日期：1月 2, 2026， [https://www.binance.com/en/square/post/8521386777786](https://www.binance.com/en/square/post/8521386777786)  
10. Monolithic vs. Modular. A Comparative Analysis Of Solana and… | by Lili Nuel \- Medium, 檢索日期：1月 2, 2026， [https://thelilinuel.medium.com/monolithic-vs-modular-1822b1cc6bc5](https://thelilinuel.medium.com/monolithic-vs-modular-1822b1cc6bc5)  
11. Solana for Enterprise: Reasons and Use Cases \- Helius, 檢索日期：1月 2, 2026， [https://www.helius.dev/blog/solana-for-enterprise](https://www.helius.dev/blog/solana-for-enterprise)  
12. Why is Solana ecosystem so prosperous? Analysis from a technology and data perspective | by OKG Research | Coinmonks | Medium, 檢索日期：1月 2, 2026， [https://medium.com/coinmonks/why-is-solana-ecosystem-so-prosperous-analysis-from-a-technology-and-data-perspective-ea34320eff3c](https://medium.com/coinmonks/why-is-solana-ecosystem-so-prosperous-analysis-from-a-technology-and-data-perspective-ea34320eff3c)  
13. FTX Bankruptcy Estate to Sell 41 Million Solana Tokens for $7.5 Billion | CoinMarketCap, 檢索日期：1月 2, 2026， [https://coinmarketcap.com/academy/article/ftx-bankruptcy-estate-to-sell-41-million-solana-tokens-for-dollar75-billion](https://coinmarketcap.com/academy/article/ftx-bankruptcy-estate-to-sell-41-million-solana-tokens-for-dollar75-billion)  
14. Solana supply to jump 2.2% this Saturday in biggest unlock to date \- Protos, 檢索日期：1月 2, 2026， [https://protos.com/solana-supply-to-jump-2-2-this-saturday-in-biggest-unlock-to-date/](https://protos.com/solana-supply-to-jump-2-2-this-saturday-in-biggest-unlock-to-date/)  
15. Solana Price Dives 35% Amid FTX Estate Unlock, More Selling Pressure Ahead \- CCN.com, 檢索日期：1月 2, 2026， [https://www.ccn.com/analysis/crypto/solana-token-unlock-impact-sol-price/](https://www.ccn.com/analysis/crypto/solana-token-unlock-impact-sol-price/)  
16. FTX estate's $7.5 billion sale of locked solana attracts strong interest | The Block, 檢索日期：1月 2, 2026， [https://www.theblock.co/post/285269/galaxy-locked-sol-sale-ftx-estate](https://www.theblock.co/post/285269/galaxy-locked-sol-sale-ftx-estate)  
17. FTX estate sells $1.9 billion worth of locked up SOL for $64 per token: report \- The Block, 檢索日期：1月 2, 2026， [https://www.theblock.co/post/286717/ftx-estate-sells-1-9-billion-worth-of-locked-up-sol-for-64-per-token-report](https://www.theblock.co/post/286717/ftx-estate-sells-1-9-billion-worth-of-locked-up-sol-for-64-per-token-report)  
18. FTX's Solana (SOL) Unlock: Breakdown of the March 1, 2025, Release and Unrealized Profits | Icy Heart on Binance Square, 檢索日期：1月 2, 2026， [https://www.binance.com/en/square/post/20899536935833](https://www.binance.com/en/square/post/20899536935833)  
19. SOL investors shrug off unlocks \- Blockworks, 檢索日期：1月 2, 2026， [https://blockworks.co/news/sol-investors-shrug-off-unlocks](https://blockworks.co/news/sol-investors-shrug-off-unlocks)  
20. Ethereum Founder Vitalik Buterin Says He Feels 'Bad' for Solana \- Decrypt, 檢索日期：1月 2, 2026， [https://decrypt.co/146896/vitalik-buterin-doesnt-like-us-crypto-policy-approach-labels-it-unfair](https://decrypt.co/146896/vitalik-buterin-doesnt-like-us-crypto-policy-approach-labels-it-unfair)  
21. SOL price recovers as Vitalik tweets support for Solana community \- CryptoSlate, 檢索日期：1月 2, 2026， [https://cryptoslate.com/sol-price-recovers-as-vitalik-tweets-support-for-solana-community/](https://cryptoslate.com/sol-price-recovers-as-vitalik-tweets-support-for-solana-community/)  
22. Firedancer Mainnet Launches and Stabilizes on Solana \- KuCoin, 檢索日期：1月 2, 2026， [https://www.kucoin.com/news/flash/firedancer-mainnet-launches-and-stabilizes-on-solana](https://www.kucoin.com/news/flash/firedancer-mainnet-launches-and-stabilizes-on-solana)  
23. Solana's Firedancer Mainnet Debut on December 12, 2025 Lifts SOL 5% \- BingX, 檢索日期：1月 2, 2026， [https://bingx.com/en/news/post/solana-s-firedancer-mainnet-debut-on-december-lifts-sol](https://bingx.com/en/news/post/solana-s-firedancer-mainnet-debut-on-december-lifts-sol)  
24. Solana's Firedancer Goes Live on Mainnet After 3 Years, Sol jumps by 6% \- TradingView, 檢索日期：1月 2, 2026， [https://www.tradingview.com/news/coinpedia:f02307394094b:0-solana-s-firedancer-goes-live-on-mainnet-after-3-years-sol-jumps-by-6/](https://www.tradingview.com/news/coinpedia:f02307394094b:0-solana-s-firedancer-goes-live-on-mainnet-after-3-years-sol-jumps-by-6/)  
25. Solana Outage History: A Timeline of Network Downtime and Failures \- StatusGator, 檢索日期：1月 2, 2026， [https://statusgator.com/blog/solana-outage-history/](https://statusgator.com/blog/solana-outage-history/)  
26. Solana Outage Guide 2025: Causes, Timeline & User Safety Guide \- OKX, 檢索日期：1月 2, 2026， [https://www.okx.com/en-us/learn/solana-outage-guide](https://www.okx.com/en-us/learn/solana-outage-guide)  
27. Solana network went down again – Check live status now \- Cryptonary, 檢索日期：1月 2, 2026， [https://cryptonary.com/solana-network-went-down-again-mainnet-beta-restarts-after-7-hours-of-outage/](https://cryptonary.com/solana-network-went-down-again-mainnet-beta-restarts-after-7-hours-of-outage/)  
28. Firedancer is live, but Solana is violating the one safety rule Ethereum treats as non-negotiable | MEXC News, 檢索日期：1月 2, 2026， [https://www.mexc.co/en-IN/news/271404](https://www.mexc.co/en-IN/news/271404)  
29. Firedancer is live, but Solana is violating the one safety rule Ethereum treats as non-negotiable \- CryptoSlate, 檢索日期：1月 2, 2026， [https://cryptoslate.com/firedancer-is-live-but-solana-is-violating-the-one-safety-rule-ethereum-treats-as-non-negotiable/](https://cryptoslate.com/firedancer-is-live-but-solana-is-violating-the-one-safety-rule-ethereum-treats-as-non-negotiable/)  
30. What is Solana Firedancer \[Guide for Solana Validators\] \- Cherry Servers, 檢索日期：1月 2, 2026， [https://www.cherryservers.com/blog/solana-firedancer](https://www.cherryservers.com/blog/solana-firedancer)  
31. Solana Ecosystem Report (H1 2025\) — Earnings & Growth \- Helius, 檢索日期：1月 2, 2026， [https://www.helius.dev/blog/solana-ecosystem-report-h1-2025](https://www.helius.dev/blog/solana-ecosystem-report-h1-2025)  
32. Solana H1 2025 Report: DeFi, RWAs & Inst. Growth \- Quicknode Blog, 檢索日期：1月 2, 2026， [https://blog.quicknode.com/solana-ecosystem-report-h1-2025/](https://blog.quicknode.com/solana-ecosystem-report-h1-2025/)  
33. Analysis: At least 40% of Jupiter's trading volume is pure atomic arbitrage activity., 檢索日期：1月 2, 2026， [https://www.mexc.co/en-PH/news/365074](https://www.mexc.co/en-PH/news/365074)  
34. Atomic Arbitrage Dominates 40% of Jupiter's Trading Volume on Solana \- Phemex, 檢索日期：1月 2, 2026， [https://phemex.com/news/article/atomic-arbitrage-dominates-40-of-jupiters-trading-volume-on-solana-49748](https://phemex.com/news/article/atomic-arbitrage-dominates-40-of-jupiters-trading-volume-on-solana-49748)  
35. Analysis: At least 40% of Jupiter's trading volume consists of pure atomic arbitrage activities | Bitget News, 檢索日期：1月 2, 2026， [https://www.bitget.com/news/detail/12560605124861](https://www.bitget.com/news/detail/12560605124861)  
36. Jito on Solana \- MEV and Liquid Staking Guide 2025 \- WhisperUI, 檢索日期：1月 2, 2026， [https://whisperui.com/cryptocoins/solana-jito](https://whisperui.com/cryptocoins/solana-jito)  
37. Jito Liquid Staking \- DefiLlama, 檢索日期：1月 2, 2026， [https://defillama.com/protocol/jito-liquid-staking](https://defillama.com/protocol/jito-liquid-staking)  
38. Jito-Solana and Maximal Extractable Value (MEV) Driving All-Time High Staking Reward Rates with Figment, 檢索日期：1月 2, 2026， [https://www.figment.io/insights/jito-solana-and-maximal-extractable-value-mev-driving-all-time-high-staking-reward-rates-with-figment/](https://www.figment.io/insights/jito-solana-and-maximal-extractable-value-mev-driving-all-time-high-staking-reward-rates-with-figment/)  
39. Solana MEV Report: Trends, Insights, and Challenges \- Helius, 檢索日期：1月 2, 2026， [https://www.helius.dev/blog/solana-mev-report](https://www.helius.dev/blog/solana-mev-report)  
40. Helium's Q2 2025 metrics show Solana-based DePIN scaling with real usage \- Reddit, 檢索日期：1月 2, 2026， [https://www.reddit.com/r/HeliumNetwork/comments/1me05zs/heliums\_q2\_2025\_metrics\_show\_solanabased\_depin/](https://www.reddit.com/r/HeliumNetwork/comments/1me05zs/heliums_q2_2025_metrics_show_solanabased_depin/)  
41. Solana-Based DePIN Projects Hit Best Monthly Revenue of 2025, Up 33% Year-over-Year, 檢索日期：1月 2, 2026， [https://superex.medium.com/solana-based-depin-projects-hit-best-monthly-revenue-of-2025-up-33-year-over-year-659d13a34b79](https://superex.medium.com/solana-based-depin-projects-hit-best-monthly-revenue-of-2025-up-33-year-over-year-659d13a34b79)  
42. Deep Dive: Solana DePIN \- July 2025 \- Syndica \- Blog, 檢索日期：1月 2, 2026， [https://blog.syndica.io/deep-dive-solana-depin-july-2025/](https://blog.syndica.io/deep-dive-solana-depin-july-2025/)  
43. Solana DePIN Report: From "mining" to "mapping", how can ordinary people make money without doing anything? | MEXC News, 檢索日期：1月 2, 2026， [https://www.mexc.com/news/1026](https://www.mexc.com/news/1026)  
44. 2026 Institutional Crypto Outlook | The Block, 檢索日期：1月 2, 2026， [https://www.theblock.co/post/382743/2026-institutional-crypto-outlook](https://www.theblock.co/post/382743/2026-institutional-crypto-outlook)  
45. Latest PayPal USD (PYUSD) News Update \- CoinMarketCap, 檢索日期：1月 2, 2026， [https://coinmarketcap.com/cmc-ai/paypal-usd/latest-updates/](https://coinmarketcap.com/cmc-ai/paypal-usd/latest-updates/)  
46. PayPal Expands PYUSD Stablecoin to Stellar, Joining Ethereum and Solana \- Decrypt, 檢索日期：1月 2, 2026， [https://decrypt.co/324642/paypal-pyusd-stablecoin-stellar-ethereum-solana](https://decrypt.co/324642/paypal-pyusd-stablecoin-stellar-ethereum-solana)  
47. Solana's Stablecoin Landscape \- Helius, 檢索日期：1月 2, 2026， [https://www.helius.dev/blog/solanas-stablecoin-landscape](https://www.helius.dev/blog/solanas-stablecoin-landscape)  
48. Cryptocurrency acceptance: What to know \- Stripe, 檢索日期：1月 2, 2026， [https://stripe.com/resources/more/cryptocurrency-acceptance](https://stripe.com/resources/more/cryptocurrency-acceptance)  
49. Pump.fun Starts 2025 with a Record $14 Million in Daily Revenue | BeInCrypto Global on Binance Square, 檢索日期：1月 2, 2026， [https://www.binance.com/en/square/post/18399911764946](https://www.binance.com/en/square/post/18399911764946)  
50. Pump.fun Surpasses Tron's Daily Revenue. Here's Why \- BeInCrypto, 檢索日期：1月 2, 2026， [https://beincrypto.com/pump-fun-surpasses-trons-daily-revenue/](https://beincrypto.com/pump-fun-surpasses-trons-daily-revenue/)  
51. Pump.fun Generates $74.1M in Q4 2025 Amid Controversy Over Profit Legitimacy, 檢索日期：1月 2, 2026， [https://intellectia.ai/news/crypto/pumpfun-generates-741m-in-q4-2025-amid-controversy-over-profit-legitimacy](https://intellectia.ai/news/crypto/pumpfun-generates-741m-in-q4-2025-amid-controversy-over-profit-legitimacy)  
52. Q4 Is Pump Fun Best Quarter: Is This The End For PUMP Crypto and Solana? \- 99Bitcoins, 檢索日期：1月 2, 2026， [https://99bitcoins.com/news/presales/q4-is-the-best-pump-fun-best-quarter-is-this-the-end-for-pump-crypto-and-solana/](https://99bitcoins.com/news/presales/q4-is-the-best-pump-fun-best-quarter-is-this-the-end-for-pump-crypto-and-solana/)  
53. Blockchain Efficiency Comes at a Price: Small Validators Priced Out of Solana \- CryptoRank, 檢索日期：1月 2, 2026， [https://cryptorank.io/news/feed/808fc-solana-validators-plunge-below-800-as-high-costs-purge-small-operators](https://cryptorank.io/news/feed/808fc-solana-validators-plunge-below-800-as-high-costs-purge-small-operators)  
54. Solana Loses 68% of Its Validators in 3 Years — Is the Network in Trouble or Evolving?, 檢索日期：1月 2, 2026， [https://www.ccn.com/news/crypto/solana-validators-plunge-68-3-years-dead-chain-sybil-purge/](https://www.ccn.com/news/crypto/solana-validators-plunge-68-3-years-dead-chain-sybil-purge/)  
55. Solana Validator Count Plummets: A Staggering 68% Drop Since 2023 \- CryptoRank, 檢索日期：1月 2, 2026， [https://cryptorank.io/news/feed/bca24-solana-validator-count-drop](https://cryptorank.io/news/feed/bca24-solana-validator-count-drop)  
56. Delegation Program Solana: Build crypto apps that scale, 檢索日期：1月 2, 2026， [https://solana.org/delegation-program](https://solana.org/delegation-program)  
57. Solana Decentralization Dashboard, 檢索日期：1月 2, 2026， [https://solanacompass.com/statistics/decentralization](https://solanacompass.com/statistics/decentralization)  
58. TMT 2025 \- Taiwan | Global Practice Guides | Chambers and Partners, 檢索日期：1月 2, 2026， [https://practiceguides.chambers.com/practice-guides/tmt-2025/taiwan/trends-and-developments](https://practiceguides.chambers.com/practice-guides/tmt-2025/taiwan/trends-and-developments)  
59. Taiwan Crypto Industry Takes Initiative With New VASP Association to Set Industry Standards \- Charltons Quantum | Blockchain, Crypto & Fintech Insights, 檢索日期：1月 2, 2026， [https://charltonsquantum.com/taiwan-crypto-industry-takes-initiative-with-new-vasp-association-to-set-industry-standards/](https://charltonsquantum.com/taiwan-crypto-industry-takes-initiative-with-new-vasp-association-to-set-industry-standards/)  
60. 2024/11/30 MAX SOLANA BLOCKCHAIN RELATED COINS DEPOSIT HAS BEEN SUSPENDED, 檢索日期：1月 2, 2026， [https://support.maicoin.com/en/support/solutions/articles/32000035378-2024-11-30-max-solana-blockchain-related-coins-deposit-has-been-suspended](https://support.maicoin.com/en/support/solutions/articles/32000035378-2024-11-30-max-solana-blockchain-related-coins-deposit-has-been-suspended)  
61. 2024/08/16 \[Maintenance Announcement\] Temporary trading suspension \- MAX Exchange / MaiCoin, 檢索日期：1月 2, 2026， [https://support.maicoin.com/en/support/solutions/articles/32000035025-2024-08-16-maintenance-announcement-temporary-trading-suspension](https://support.maicoin.com/en/support/solutions/articles/32000035025-2024-08-16-maintenance-announcement-temporary-trading-suspension)  
62. 2023/02/05 MAX Solana blockchain related coins withdrawal function has been suspended, 檢索日期：1月 2, 2026， [https://support.maicoin.com/en/support/solutions/articles/32000033476-2023-02-05-max-solana-blockchain-related-coins-withdrawal-function-has-been-suspended](https://support.maicoin.com/en/support/solutions/articles/32000033476-2023-02-05-max-solana-blockchain-related-coins-withdrawal-function-has-been-suspended)  
63. ADA Withdrawal Suspension – Completed \- 幣託BitoPro, 檢索日期：1月 2, 2026， [https://support.bitopro.com/hc/en-us/articles/51458009793817-ADA-Withdrawal-Suspension-Completed](https://support.bitopro.com/hc/en-us/articles/51458009793817-ADA-Withdrawal-Suspension-Completed)  
64. One-Click Buy/Sell Cryptocurrencies \- BitoPro, 檢索日期：1月 2, 2026， [https://www.bitopro.com/ns/en-US/1-click](https://www.bitopro.com/ns/en-US/1-click)  
65. Announcements \- BitoPro, 檢索日期：1月 2, 2026， [https://www.bitopro.com/ns/en-US/announcements/1270](https://www.bitopro.com/ns/en-US/announcements/1270)  
66. Taiwan's FSC drafts new crypto AML rules, requiring firms to register or face jail time, 檢索日期：1月 2, 2026， [https://www.theblock.co/post/319285/taiwans-fsc-drafts-new-crypto-aml-rules-requiring-firms-to-register-or-face-jail-time](https://www.theblock.co/post/319285/taiwans-fsc-drafts-new-crypto-aml-rules-requiring-firms-to-register-or-face-jail-time)  
67. Q\&A for the Income Basic Tax-National Taxation Bureau of Taipei, 檢索日期：1月 2, 2026， [https://www.ntbt.gov.tw/English/multiplehtml/d8f39518bcac4e249102687ee8d8f25d](https://www.ntbt.gov.tw/English/multiplehtml/d8f39518bcac4e249102687ee8d8f25d)  
68. TIES 2025 \- Taiwan \- KPMG International, 檢索日期：1月 2, 2026， [https://assets.kpmg.com/content/dam/kpmgsites/xx/pdf/2023/01/TIES-Taiwan.pdf.coredownload.inline.pdf](https://assets.kpmg.com/content/dam/kpmgsites/xx/pdf/2023/01/TIES-Taiwan.pdf.coredownload.inline.pdf)  
69. Taiwan \- Individual \- Taxes on personal income \- Worldwide Tax Summaries Online, 檢索日期：1月 2, 2026， [https://taxsummaries.pwc.com/taiwan/individual/taxes-on-personal-income](https://taxsummaries.pwc.com/taiwan/individual/taxes-on-personal-income)  
70. Rate Applicable-National Taxation Bureau of Taipei, 檢索日期：1月 2, 2026， [https://www.ntbt.gov.tw/English/multiplehtml/3f18d2625aea4187b0d90e9b929afe4c](https://www.ntbt.gov.tw/English/multiplehtml/3f18d2625aea4187b0d90e9b929afe4c)  
71. 投資臺灣入口網 Invest Taiwan\_Business in Taiwan\_Introduction of Taiwan Tax System\_Individual Income Tax, 檢索日期：1月 2, 2026， [https://investtaiwan.nat.gov.tw/showPage?lang=eng\&search=56](https://investtaiwan.nat.gov.tw/showPage?lang=eng&search=56)  
72. Taiwan Individual Overseas Investment Tax Guide-Company Formation\_Trademark Registration\_Tax Service \- Hong Kong CPA \- Kaizen \- Kaizencpa.com, 檢索日期：1月 2, 2026， [https://www.kaizencpa.com/Mobile/Knowledge/info/id/1939.html](https://www.kaizencpa.com/Mobile/Knowledge/info/id/1939.html)
