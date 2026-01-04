# **範式轉移：Sui (SUI) 深度投資研究與生態架構分析報告**

發布機構： 加密貨幣市場研究中心  
發布日期： 2026年1月3日  
報告類型： 深度技術盡職調查與投資指南 (Deep Tech Due Diligence & Investment Guide)  
目標受眾： 台灣加密貨幣投資者、金融科技從業者、區塊鏈開發者及高頻交易參與者  
語言： 繁體中文 (Traditional Chinese)

## ---

**1\. 宏觀背景與執行摘要：Layer 1 的終局之戰**

在區塊鏈技術發展的長河中，2024 年至 2025 年被視為基礎設施的「分水嶺年份」。隨著以太坊 (Ethereum) 轉向以 Layer 2 為核心的擴容路線，單體鏈 (Monolithic Blockchain) 與模組化區塊鏈 (Modular Blockchain) 的競爭進入了白熱化階段。在這個背景下，**Sui (SUI)** 的崛起並非偶然，而是底層架構邏輯演進的必然結果。不同於眾多試圖通過微調參數來提升速度的「以太坊殺手」，Sui 選擇了一條更為徹底的道路——重構數據模型。  
本報告旨在為台灣的理財大眾與專業投資者提供一份詳盡的 Sui 生態剖析。我們將超越表面的 TPS (每秒交易次數) 數據，深入探討其獨創的 **「物件導向」(Object-Centric)** 架構如何從物理層面解鎖了並行處理的能力，以及 **Move 程式語言** 如何在安全性與靈活性之間找到完美的平衡。這不僅是一份技術報告，更是一份投資指南，我們將分析其在遊戲 (GameFi) 與高頻 DeFi 應用上的護城河，並通過對比 Solana 與 Aptos，釐清 Sui 在 2026 年及其後的競爭優勢。  
報告的核心觀點認為，Sui 正在構建一個「計算、存儲、流動性」三位一體的閉環生態。隨著 **Mysticeti** 共識機制的成熟與 **Walrus** 去中心化存儲網絡的主網上線，Sui 已具備支撐大規模 Web2 用戶遷移的基礎設施能力。對於投資者而言，理解 Sui 的價值不在於追逐短期的價格波動，而在於認知其如何解決「狀態膨脹」(State Bloat) 與「串行執行」(Sequential Execution) 這兩大制約區塊鏈大規模採用的根本性難題。

## ---

**2\. 起源與哲學：從 Meta 到 Mysten Labs 的技術傳承**

要理解 Sui 的技術深度，必須回溯其技術起源。Sui 的核心團隊來自於 Facebook (現 Meta) 的區塊鏈項目 **Diem** (原 Libra) 及其錢包 **Novi**。這個背景至關重要，因為它意味著 Sui 的底層技術並非為了短期的代幣炒作而生，而是為了服務數十億用戶的全球支付網絡而設計。  
在 Diem 專案因監管壓力解散後，核心工程師們分流創立了兩大公鏈：Aptos 與 Sui。儘管同源，但兩者的設計哲學卻大相徑庭。Aptos 選擇了延續 Diem 的原有設計，試圖打造一個更安全、更快的「傳統」區塊鏈；而 Mysten Labs (Sui 的開發公司) 則選擇了更激進的創新——他們意識到，要實現真正的互聯網級規模，必須拋棄傳統的「帳戶模型」(Account Model)，重新發明數據在鏈上的存在方式。  
這種「長期主義」的設計哲學在 Sui 的架構中隨處可見。例如，針對區塊鏈長期運行後數據積累導致的存儲成本問題，Sui 設計了獨特的 **存儲基金 (Storage Fund)** 機制。這顯示團隊從第一天起就在思考網絡運行十年、二十年後的經濟可持續性，而不僅僅是當下的吞吐量。對於台灣的價值投資者而言，這種具備深厚技術底蘊與長期規劃的項目，通常比純粹由營銷驅動的項目更具備穿越牛熊週期的能力。

## ---

**3\. 核心架構解析：物件導向模型的革命**

Sui 最具革命性的創新在於其數據模型。在比特幣的 UTXO 模型和以太坊的帳戶模型之後，Sui 提出了第三種範式：**物件導向數據模型 (Object-Centric Data Model)**。這不僅是數據結構的改變，更是並行計算的物理基礎。

### **3.1 萬物皆物件 (Everything is an Object)**

在以太坊等傳統公鏈中，數據存儲的核心單位是「帳戶」(Account)。智能合約是一個特殊的帳戶，用戶的資產（如 ERC-20 代幣或 NFT）實際上是記錄在智能合約這個「大帳本」中的一行數據映射。用戶並不真正「擁有」資產，而是擁有在合約中操作那行數據的權限。這種設計導致了一個嚴重的瓶頸：當成千上萬的用戶同時操作同一個熱門合約（如鑄造 NFT 或在 DEX 交易）時，所有交易必須排隊，因為它們都在爭奪同一個帳戶的狀態寫入權。  
Sui 徹底顛覆了這一點。在 Sui 的世界裡，存儲的基本單位是 **物件 (Object)**。每一個代幣、每一個 NFT、每一個智能合約，甚至一段代碼，都是一個獨立的物件。每個物件都擁有三個核心屬性：

1. **全域唯一標識符 (Globally Unique ID, UID)：** 類似於現實世界中物品的序列號，確保每個物件在網絡中是獨一無二的 1。  
2. **所有者 (Owner)：** 物件明確歸屬於某個地址（用戶）或另一個物件。這意味著資產是直接存儲在用戶的地址下，而非合約中。這種類似於「現金」而非「銀行帳戶」的設計，賦予了資產物理屬性般的獨立性 2。  
3. **版本號 (Version)：** 每次物件被修改，版本號就會遞增，這為因果排序提供了依據。

這種設計帶來的直接好處是資產的 **可編程性** 與 **可組合性**。在 Sui 上，一個物件可以「擁有」另一個物件。例如，在 Web3 遊戲中，一個「英雄角色」(物件 A) 可以擁有「武器」(物件 B)，而「武器」上鑲嵌了「寶石」(物件 C)。當玩家轉移「英雄角色」時，Sui 的運行時環境 (Runtime) 會自動處理所有子物件的轉移，無需複雜的合約邏輯。這對於構建複雜的鏈上應用（如 RPG 遊戲）至關重要，解決了傳統區塊鏈在處理層級化資產時的笨重與高昂成本 3。

### **3.2 顯式依賴與並行執行 (Explicit Dependency & Parallelization)**

物件模型是 Sui 實現大規模並行處理的鑰匙。由於每個物件都是獨立的，交易在提交時會顯式聲明它需要調用哪些物件。驗證節點在執行前就能夠精確知道交易之間的依賴關係。  
這引入了 **因果排序 (Causal Ordering)** 的概念。如果交易 A 涉及物件 X，交易 B 涉及物件 Y，且 X 與 Y 毫無關聯，那麼這兩筆交易就沒有因果關係。驗證節點可以完全同時處理這兩筆交易，不需要像以太坊那樣將它們打包進同一個區塊並進行全局排序。這就像是在高速公路上，如果兩輛車行駛在不同的車道且目的地不同，它們可以並排行駛，互不干擾 5。  
簡單交易 vs. 複雜交易：  
Sui 將交易分為兩類，並採用不同的共識路徑：

* **簡單交易 (Simple Transactions)：** 僅涉及「獨有物件」(Owned Objects) 的交易，如點對點轉帳或 NFT 鑄造。這類交易不需要全網共識排序，只需透過「拜占庭一致性廣播」(Byzantine Consistent Broadcast) 即可確認，實現了近乎即時的結算。  
* **複雜交易 (Complex Transactions)：** 涉及「共享物件」(Shared Objects) 的交易，如多個用戶同時搶購同一個流動性池 (AMM) 中的資產。這類交易需要經過共識協議 (Mysticeti) 進行排序，以防止雙重支付。

這種區分使得 Sui 在處理大量非衝突交易（如遊戲中的移動、聊天、裝備更換）時，能夠展現出驚人的吞吐量和低延遲，完美契合高頻應用的需求。

## ---

**4\. 引擎核心：Sui Move 語言的安全性與表現力**

如果說物件模型是 Sui 的骨架，那麼 **Move 語言** 就是它的肌肉。Move 語言最初是為了處理金融資產而設計，其核心理念是將資產視為 **「資源」(Resource)**。在計算機科學中，資源意味著它不能被憑空複製，也不能被隱式丟棄，只能在存儲位置之間安全地轉移。

### **4.1 Sui Move 與 Solidity 的本質差異**

對於習慣了 Solidity 的開發者和投資者來說，理解 Move 的優勢需要轉換思維模式。

| 特性比較 | Solidity (Ethereum) | Sui Move | 投資與安全意涵 |
| :---- | :---- | :---- | :---- |
| **資產屬性** | 數值 (Value)。資產是合約變量中的一個數字。 | 資源 (Resource)。資產是具有類型安全的一等公民。 | Move 從語言層面杜絕了無限增發漏洞，資產安全性由虛擬機保障而非合約邏輯。 |
| **攻擊面** | 易受重入攻擊 (Reentrancy)。攻擊者可遞歸調用合約。 | 線性邏輯與狀態隔離。無需重入鎖，天然免疫重入攻擊。 | 大幅降低了 DeFi 協議被黑客攻擊的風險，保護投資者資產。 |
| **存儲位置** | 集中存儲在合約地址。 | 分散存儲在用戶物件中。 | 減少了單點熱點，提升了並發性能，用戶對資產擁有更強的控制權。 |
| **升級性** | 代理合約模式，複雜且有風險。 | 原生 Package 升級支持。 | 協議升級更平滑，減少了因合約遷移導致的資產丟失風險。 |

### **4.2 Sui Move 的獨特變體**

Sui 並未直接照搬 Diem 的 Move，而是進行了深度定制，形成了 **Sui Move**。與 Aptos 使用的「標準 Move」相比，Sui Move 更加強調以物件為中心的編程範式。Sui 引入了 sui::object 模塊，定義了全域 ID (UID) 的生成規則，並去除了全域存儲 (Global Storage) 的操作符，轉而使用物件傳遞的方式。  
這種設計使得開發者在編寫合約時，必須明確定義輸入和輸出物件。這不僅增強了代碼的安全性（編譯器可以檢查權限），也為並行執行提供了必要的靜態分析信息。對於台灣的開發者社群而言，雖然學習 Move 有一定的門檻，但其帶來的安全性紅利和性能優勢是構建下一代 DeFi 和 GameFi 應用的關鍵 6。

## ---

**5\. 極速共識：Mysticeti 與 390 毫秒的物理極限**

在區塊鏈的「不可能三角」中，速度與去中心化往往難以兼得。Sui 在 2024 年 7 月主網上線的 **Mysticeti** 共識協議，標誌著其在高性能共識算法上取得了重大突破。

### **5.1 從 Narwhal 到 Mysticeti**

Sui 最初採用的共識引擎是 Narwhal (內存池) 與 Bullshark (共識邏輯) 的組合。Narwhal 負責快速傳播交易數據，Bullshark 負責對數據進行排序。這一組合已經非常高效，但仍存在一定的延遲（約 1-2 秒）。  
Mysticeti 則更進一步，它是一種基於 **有向無環圖 (DAG)** 的共識協議。不同於傳統區塊鏈必須等待一個區塊完全確認後才能出下一個區塊，DAG 允許驗證節點並行地提出區塊。Mysticeti 的核心創新在於它利用了「樂觀路徑」，允許驗證節點在收到足夠多的簽名後，無需額外的通信回合即可提交區塊。

### **5.2 390 毫秒的意義**

根據官方數據與測試網表現，Mysticeti 將 Sui 的共識延遲降低到了 **390 毫秒** 9。這是一個物理極限級別的數字，因為光信號繞地球一圈大約需要 133 毫秒，加上節點處理和網絡傳輸，390 毫秒意味著 Sui 已經接近了全球分佈式網絡的理論速度上限。  
對於投資者而言，這意味著什麼？

1. **高頻交易 (HFT) 的可行性：** 亞秒級的結算使得鏈上訂單簿 (CLOB) 能夠提供媲美中心化交易所 (CEX) 的體驗，吸引機構做市商入場。  
2. **遊戲體驗的質變：** 在 MMORPG 或競技遊戲中，玩家的操作反饋不再有明顯的卡頓，實現了真正的「Web2 級別體驗」。  
3. **競爭壁壘：** 相較於 Solana 的 400ms-12s（視乎最終性定義）和 Ethereum L2 的數秒至數分鐘，Sui 建立了一條極難被超越的技術護城河 11。

## ---

**6\. 生態應用的殺手鐧：可編程交易區塊 (PTB) 與 zkLogin**

技術再強，若用戶體驗門檻過高，也難以大規模普及。Sui 在這方面推出了兩項殺手級功能：**可編程交易區塊 (PTB)** 與 **zkLogin**。

### **6.1 可編程交易區塊 (PTB)：DeFi 的樂高積木**

在以太坊上，如果用戶想要完成一系列複雜操作（例如：將 USDC 換成 SUI \-\> 存入借貸協議 \-\> 借出 USD \-\> 提供流動性），通常需要簽署多次交易，支付多次 Gas 費，且面臨中間步驟失敗的風險。  
Sui 的 PTB 允許用戶將多達 **1024 個** 異構操作打包在一個單一的交易中執行 12。

* **原子性 (Atomicity)：** 整個交易包要麼全部成功，要麼全部失敗回滾。這消除了中間狀態資金被卡住的風險。  
* **參數傳遞：** 一個指令的輸出可以直接作為下一個指令的輸入。這種鏈式調用是在交易層面完成的，無需專門編寫智能合約。  
* **成本效益：** 無論包含多少操作，用戶只需支付一次基礎交易費，極大降低了 DeFi 操作成本。

對於開發者，PTB 意味著強大的可組合性。錢包和前端應用可以輕鬆構建「一鍵挖礦」、「一鍵槓桿」等功能，極大優化了用戶體驗。

### **6.2 zkLogin：Web2 用戶的無感遷移**

**zkLogin (Zero-Knowledge Login)** 是 Sui 解決 Web3 入門門檻的終極方案。它允許用戶使用現有的 Web2 帳號（如 Google, Facebook, Apple, Twitch）直接生成並管理 Sui 錢包地址，而無需接觸複雜的私鑰或助記詞 14。  
這並非簡單的託管錢包。zkLogin 利用 **零知識證明 (Zero-Knowledge Proofs)** 與 **OpenID Connect** 協議，確保用戶的 Web2 身份提供商（如 Google）無法窺探用戶的鏈上活動，也無法控制用戶資產。鏈上節點驗證的是零知識證明，確認用戶擁有合法的登錄憑證，而無需知道具體的用戶身份。  
這對於台灣的一般理財大眾極具吸引力。許多人因為害怕丟失助記詞而不敢涉足加密貨幣，zkLogin 讓他們可以用最熟悉的「Google 登錄」方式安全地持有資產，這是 Sui 實現「十億用戶上鏈」願景的關鍵基礎設施。

## ---

**7\. 遊戲與存儲：Sui 的獨特戰場**

### **7.1 遊戲 (GameFi)：動態資產的樂園**

Sui 被廣泛認為是最適合開發 3A 級鏈上遊戲的公鏈。這得益於其物件模型對動態資產 (Dynamic Assets) 的支持。

* **動態 NFT：** 傳統 NFT 的元數據通常是靜態的。在 Sui 上，NFT 是動態物件。例如，在射擊遊戲 **Bushi** 中，玩家的武器是一個 NFT，隨著戰鬥升級，該武器物件的屬性（攻擊力、外觀）可以實時在鏈上更新，甚至可以「包含」新的配件物件 16。  
* **Kiosk 標準：** Sui 推出了 Kiosk 標準，這是一種專為商業化設計的資產容器。它允許創作者強制執行版稅策略，無論資產在哪個市場交易。這解決了 NFT 市場長期以來版稅無法強制執行的痛點，保護了遊戲開發商和創作者的利益 12。  
* **案例研究：**  
  * **Walking Dead Lands:** 知名 IP《陰屍路》授權的射擊遊戲，利用 Sui 的 Kiosk 和 PTB 技術處理大量遊戲內資產交易，並透過贊助交易 (Sponsored Transactions) 消除玩家的 Gas 費感知 19。  
  * **E4C: Final Salvation:** 一款 MOBA 遊戲，將所有遊戲內資產（皮膚、英雄）記錄為 Sui 物件，允許玩家將資產帶入其前傳遊戲 *Fallen Arena* 中，實現了真正的資產互通 21。

### **7.2 Walrus：去中心化存儲的革新**

區塊鏈不僅需要計算，還需要存儲。2025 年 3 月 27 日，由 Mysten Labs 孵化的 **Walrus** 去中心化存儲網絡正式上線主網，補齊了 Sui 生態的最後一塊拼圖 22。

* **技術原理：** Walrus 專為存儲大型數據（如圖片、視頻、AI 模型）而設計。它採用了一種名為「紅編碼」(Red Stuff) 的新型二維糾刪碼技術。與 IPFS 或 Filecoin 需要多次複製完整文件不同，Walrus 將文件切片編碼，即使部分節點離線，數據也能通過數學運算完整恢復。這使得其存儲成本比傳統區塊鏈存儲低 80-100 倍 24。  
* **生態整合：** Walrus 與 Sui 緊密集成。SUI 代幣可用於購買 Walrus 存儲空間，而 Walrus 的治理代幣 WAL 則激勵節點。這種「計算 (Sui) \+ 存儲 (Walrus)」的組合，使得開發者可以在 Sui 上構建完全去中心化的應用（前端代碼和媒體資源存儲在 Walrus，邏輯運行在 Sui），無需依賴 AWS 等中心化雲服務 26。

## ---

**8\. DeFi 基礎設施與 DeepBook**

在 DeFi 領域，Sui 選擇了一條與眾不同的道路：擁抱 **中央限價訂單簿 (CLOB)**。  
**DeepBook** 是 Sui 的原生流動性層。在以太坊上，由於 Gas 費高昂且速度慢，Uniswap 等 AMM (自動做市商) 成為主流。然而，AMM 存在滑點高、資本效率低的問題。Sui 利用其低延遲和低成本優勢，直接在鏈上運行 DeepBook 訂單簿 28。

* **流動性樞紐：** DeepBook 不僅僅是一個 DEX，它是一個公共基礎設施。其他的 DEX (如 Cetus, Turbos)、錢包甚至借貸協議都可以直接調用 DeepBook 的流動性。  
* **機構友好：** 訂單簿模式符合傳統金融機構的交易習慣，支持限價單等複雜策略。這為傳統做市商進入 Sui 生態鋪平了道路。  
* **2025 表現：** 儘管 DeepBook 的代幣 DEEP 在 2025 年底面臨一定的價格回調，但其協議的日均交易量和集成度持續上升，證明了 CLOB 模式在高性能公鏈上的可行性 30。

## ---

**9\. 競爭優勢分析：Sui vs. Solana vs. Aptos**

對於投資者而言，最關鍵的問題是：Sui 能否超越 Solana？以下是三者的詳細對比：

| 核心維度 | Sui (SUI) | Solana (SOL) | Aptos (APT) |
| :---- | :---- | :---- | :---- |
| **數據模型** | **物件導向 (Object-Centric)**。天生並行，適合複雜資產。 | **帳戶模型**。單體架構，狀態依賴強。 | **帳戶資源模型**。改良版帳戶模型。 |
| **並行處理** | **顯式依賴 (Explicit Dependency)**。無需預先知曉狀態，自動判斷衝突。 | **Sealevel**。需要交易預先聲明讀寫狀態，開發複雜度高。 | **Block-STM**。樂觀並行，先執行再檢查衝突，適合大量關聯交易。 |
| **共識機制** | **Mysticeti (DAG)**。390ms 延遲，共識與執行分離。 | **Proof of History (PoH)**。依靠時鐘同步，速度快但對硬件要求極高。 | **AptosBFT (HotStuff)**。流水線式共識，延遲約 1s。 |
| **可靠性** | 2024年11月發生過一次 2.5 小時中斷 11。 | 歷史上發生過多次長時間宕機，網絡擁堵問題仍時有發生。 | 運行相對穩定，但壓力測試規模小於 Solana。 |
| **開發體驗** | **Sui Move**。安全性高，資產編程容易，但學習曲線陡峭。 | **Rust / C++**。性能極致，但開發難度極大，合約安全性依賴開發者。 | **Aptos Move**。標準 Move，更接近傳統合約開發邏輯。 |
| **生態定位** | 遊戲、動態 NFT、DeFi、支付。 | DePIN、Memecoin、支付、NFT。 | 企業級應用、社交金融 (SocialFi)。 |

**競爭結論：**

* **Sui vs. Solana:** Solana 擁有強大的網絡效應和 Memecoin 熱潮，但其技術債（狀態膨脹、宕機風險）是長期隱患。Sui 在架構上更先進，尤其是在處理複雜遊戲資產和高頻交易時表現更佳。Sui 是 Solana 最強有力的技術挑戰者。  
* **Sui vs. Aptos:** 兩者同源，但 Aptos 更像是「更好的以太坊」，而 Sui 則是「不同的區塊鏈」。在遊戲和消費者應用領域，Sui 的物件模型賦予了其獨特的優勢。

## ---

**10\. 代幣經濟學、風險與台灣社群動態**

### **10.1 代幣經濟學與解鎖壓力**

SUI 代幣總量為 100 億枚。投資者需高度關注其釋放時間表。

* **2025 年 5 月懸崖 (May 2025 Cliff)：** 根據 Tokenomist 數據，Sui 在 2025 年 5 月經歷了一次大規模的代幣解鎖，釋放了約 7000-8800 萬枚代幣給早期投資者和貢獻者 31。這在當時對幣價造成了顯著的短期壓力，但也為新入場的投資者提供了籌碼交換的機會。  
* **長期通脹：** 除了一次性解鎖，Sui 每月還有線性釋放。這要求生態系統的增長速度（TVL、交易費銷毀）必須跑贏通脹速度。

### **10.2 網絡穩定性風險**

2024 年 11 月 21 日，Sui 主網發生了首次重大中斷，停機超過 2 小時。原因是一個擁塞控制代碼的 Bug 導致驗證節點在處理特定類型交易時崩潰 11。雖然團隊修復迅速，但這打破了 Sui「永不宕機」的金身，也提醒投資者高性能公鏈在極端複雜度下的脆弱性。與 Solana 類似，這可能是成長的陣痛，但也需要持續監控。

### **10.3 台灣社群：Sui 的關鍵堡壘**

Sui 基金會高度重視台灣市場，將其視為亞洲開發者生態的核心。

* **Taipei Builder House:** 2024 年底至 2025 年初，Sui 在台北舉辦了盛大的 Builder House 和黑客松活動，吸引了大量本地開發者 34。  
* **Demo Day:** 2026 年 1 月 4 日，Sui 在台灣大學舉辦了開發者 Demo Day，展示了包括 **Scallop** (源自台灣團隊的頂級借貸協議) 在內的眾多創新項目。Scallop 創始人 Chris 與 Sui 基金會高層親自擔任評審，顯示了台灣團隊在 Sui 全球版圖中的話語權 36。  
* **投資者情緒：** 台灣投資者對 Sui 的接受度較高，許多人通過 Scallop 和 Navi 等協議參與鏈上理財。zkLogin 的普及也使得更多台灣 Web2 用戶（如遊戲玩家）無感進入 Sui 生態。

## ---

**11\. 2026 年展望與投資總結**

展望 2026 年，Sui 正處於從「基礎設施建設」轉向「應用爆發」的關鍵拐點。

* **技術路線圖：** 計劃中的 **Sui Stack (S2)** 將提供統一的開發者平台；**隱私交易** 功能將吸引更多機構資金；**無 Gas 穩定幣傳輸** 將挑戰波場 (Tron) 在支付領域的地位 37。  
* **投資建議：** 對於台灣投資者，Sui 是一個具備高成長潛力的標的。其技術基本面紮實，生態閉環完整（Sui \+ Walrus \+ DeepBook）。  
  * **機會：** 遊戲和 DeFi 應用的實際採用率上升；Walrus 帶來的存儲需求；Mysticeti 帶來的體驗升級。  
  * **風險：** 大額代幣解鎖帶來的拋壓；Solana 的強勢競爭；潛在的技術故障。

**結論：** Sui 不是另一個平庸的公鏈。它通過物件導向架構和 Move 語言，重新定義了區塊鏈的性能邊界。如果您相信 Web3 的未來屬於高頻交互的遊戲和金融應用，那麼 Sui 無疑是投資組合中不可或缺的配置。  
---

*免責聲明：本報告內容僅供參考，不構成任何投資建議。加密貨幣市場波動劇烈，投資前請務必自行研究 (DYOR) 並評估風險。*

#### **引用的著作**

1. Object Model | Sui Documentation, 檢索日期：1月 3, 2026， [https://docs.sui.io/guides/developer/objects/object-model](https://docs.sui.io/guides/developer/objects/object-model)  
2. Sui Explained: Tokenomics, Object Centric Design, and Ecosystem Growth \- LBank, 檢索日期：1月 3, 2026， [https://www.lbank.com/explore/sui-blockchain-deep-dive-technology-tokenomics-ecosystem-growth](https://www.lbank.com/explore/sui-blockchain-deep-dive-technology-tokenomics-ecosystem-growth)  
3. All About Objects \- The Sui Blog, 檢索日期：1月 3, 2026， [https://blog.sui.io/all-about-objects/](https://blog.sui.io/all-about-objects/)  
4. Dynamic Fields \- sui-foundation/sui-move-intro-course \- GitHub, 檢索日期：1月 3, 2026， [https://github.com/sui-foundation/sui-move-intro-course/blob/main/unit-four/lessons/2\_dynamic\_fields.md](https://github.com/sui-foundation/sui-move-intro-course/blob/main/unit-four/lessons/2_dynamic_fields.md)  
5. Sui vs. Aptos: A Deep Dive Into Performance, Ecosystem, and Future Growth, 檢索日期：1月 3, 2026， [https://www.blockchainappfactory.com/blog/sui-vs-aptos-performance-ecosystem-future-growth/](https://www.blockchainappfactory.com/blog/sui-vs-aptos-performance-ecosystem-future-growth/)  
6. Sui vs Aptos: A Technical Deep Dive into Move Language Implementations, 檢索日期：1月 3, 2026， [https://aeorysanalytics.medium.com/sui-vs-aptos-a-technical-deep-dive-into-move-language-implementations-b2c2c8132dd6](https://aeorysanalytics.medium.com/sui-vs-aptos-a-technical-deep-dive-into-move-language-implementations-b2c2c8132dd6)  
7. Sui (SUI) and Aptos (APT): Comparing Move Layer 1 Heavyweights \- Stakin, 檢索日期：1月 3, 2026， [https://stakin.com/blog/sui-sui-and-aptos-apt-comparing-move-layer-1-heavyweights](https://stakin.com/blog/sui-sui-and-aptos-apt-comparing-move-layer-1-heavyweights)  
8. Move for Solidity Developers I: Storage and Access Control \- CertiK, 檢索日期：1月 3, 2026， [https://www.certik.com/resources/blog/move-for-solidity-developers-part-1-storage-and-access-control](https://www.certik.com/resources/blog/move-for-solidity-developers-part-1-storage-and-access-control)  
9. Mysticeti v2: Faster and Lighter Sui Transaction Processing \- The Sui Blog, 檢索日期：1月 3, 2026， [https://blog.sui.io/mysticeti-v2-sui-consensus/](https://blog.sui.io/mysticeti-v2-sui-consensus/)  
10. Sui Sets The Standard for Blockchain Speed with New Mainnet Consensus Mechanism, 檢索日期：1月 3, 2026， [https://decrypt.co/243313/sui-sets-the-standard-for-blockchain-speed-with-new-mainnet-consensus-mechanism](https://decrypt.co/243313/sui-sets-the-standard-for-blockchain-speed-with-new-mainnet-consensus-mechanism)  
11. SUI's dramatic 2025: Explosive growth meets market crash \- BlockEden.xyz, 檢索日期：1月 3, 2026， [https://blockeden.xyz/forum/t/sui-s-dramatic-2025-explosive-growth-meets-market-crash/139](https://blockeden.xyz/forum/t/sui-s-dramatic-2025-explosive-growth-meets-market-crash/139)  
12. Programmable Transaction Block (PTB) \- Sui Move Intro Course, 檢索日期：1月 3, 2026， [https://intro.sui-book.com/unit-five/lessons/1\_programmable\_transaction\_block.html](https://intro.sui-book.com/unit-five/lessons/1_programmable_transaction_block.html)  
13. Code in Move \[5\] — Programmable Transaction Blocks on Sui | by Thouny \- Medium, 檢索日期：1月 3, 2026， [https://medium.com/the-sui-stack/code-in-move-5-programmable-transaction-blocks-on-sui-3e8d8cdec47e](https://medium.com/the-sui-stack/code-in-move-5-programmable-transaction-blocks-on-sui-3e8d8cdec47e)  
14. Implementing zkLogin and On-Chain Points with SUI Blockchain \- Zircon Tech, 檢索日期：1月 3, 2026， [https://zircon.tech/blog/implementing-zklogin-and-on-chain-points-with-sui-blockchain/](https://zircon.tech/blog/implementing-zklogin-and-on-chain-points-with-sui-blockchain/)  
15. zkLogin \- Sui Documentation, 檢索日期：1月 3, 2026， [https://docs.sui.io/concepts/cryptography/zklogin](https://docs.sui.io/concepts/cryptography/zklogin)  
16. Best Sui Gaming and NFT Ecosystem, 檢索日期：1月 3, 2026， [https://nftevening.com/best-sui-gaming-nft-ecosystem/](https://nftevening.com/best-sui-gaming-nft-ecosystem/)  
17. Bushi's NFT-Powered Hero Shooter Game Merges Web2 and Web3 Gaming Experiences, 檢索日期：1月 3, 2026， [https://playtoearn.com/news/bushis-nft-powered-hero-shooter-game-merges-web2-and-web3-gaming-experiences](https://playtoearn.com/news/bushis-nft-powered-hero-shooter-game-merges-web2-and-web3-gaming-experiences)  
18. Everything You Need To Know About NFT Standards On Sui \- Suipiens, 檢索日期：1月 3, 2026， [https://suipiens.com/blog/everything-you-need-to-know-about-nft-standards-on-sui/](https://suipiens.com/blog/everything-you-need-to-know-about-nft-standards-on-sui/)  
19. Orange Comet Leverages Sui Kiosk for Game Items and IP Protection, 檢索日期：1月 3, 2026， [https://blog.sui.io/walking-dead-lands-kiosk/](https://blog.sui.io/walking-dead-lands-kiosk/)  
20. Decrypt: Walking Dead Digital Collectible Springs to Life \- orange comet, 檢索日期：1月 3, 2026， [https://orangecomet.com/decrypt-the-walking-dead-digital-collectible-spring-to-life-amid-amc-tv-series-final-season/](https://orangecomet.com/decrypt-the-walking-dead-digital-collectible-spring-to-life-amid-amc-tv-series-final-season/)  
21. 5 Games Coming to Sui: a Glimpse Into the Future of Gaming | Sui on Binance Square, 檢索日期：1月 3, 2026， [https://www.binance.com/en-NG/square/post/5761629725594](https://www.binance.com/en-NG/square/post/5761629725594)  
22. What is Walrus? Decentralized Storage on Sui with $WAL \- Backpack Learn, 檢索日期：1月 3, 2026， [https://learn.backpack.exchange/articles/what-is-walrus-a-programmable-decentralized-storage-network](https://learn.backpack.exchange/articles/what-is-walrus-a-programmable-decentralized-storage-network)  
23. Walrus Mainnet Launch: What Is the Walrus Protocol, the Decentralized Storage Network, 檢索日期：1月 3, 2026， [https://web3.bitget.com/en/academy/walrus-mainnet-launch-what-is-the-walrus-protocol-the-decentralized-storage-network](https://web3.bitget.com/en/academy/walrus-mainnet-launch-what-is-the-walrus-protocol-the-decentralized-storage-network)  
24. What Is Walrus Crypto? Decentralized Storage on Sui \- Nansen, 檢索日期：1月 3, 2026， [https://www.nansen.ai/post/what-is-walrus-crypto](https://www.nansen.ai/post/what-is-walrus-crypto)  
25. Walrus: An Efficient Decentralized Storage Network \- arXiv, 檢索日期：1月 3, 2026， [https://arxiv.org/pdf/2505.05370](https://arxiv.org/pdf/2505.05370)  
26. Walrus: Decentralized Storage on Sui | Tokeo \- The Smart Crypto Wallet, 檢索日期：1月 3, 2026， [https://tokeo.io/blog/walrus-decentralized-storage-on-sui/](https://tokeo.io/blog/walrus-decentralized-storage-on-sui/)  
27. Latest Walrus News \- (WAL) Future Outlook, Trends & Market Insights \- CoinMarketCap, 檢索日期：1月 3, 2026， [https://coinmarketcap.com/cmc-ai/walrus-xyz/latest-updates/](https://coinmarketcap.com/cmc-ai/walrus-xyz/latest-updates/)  
28. Discover DeepBook: Sui's Core Liquidity Engine \- Uphold, 檢索日期：1月 3, 2026， [https://uphold.com/en-us/blog/crypto-basics/what-is-deep](https://uphold.com/en-us/blog/crypto-basics/what-is-deep)  
29. What Is DeepBook Protocol (DEEP) And How Does It Work? \- CoinMarketCap, 檢索日期：1月 3, 2026， [https://coinmarketcap.com/cmc-ai/deepbook-protocol/what-is/](https://coinmarketcap.com/cmc-ai/deepbook-protocol/what-is/)  
30. Latest DeepBook Protocol (DEEP) Price Analysis \- CoinMarketCap, 檢索日期：1月 3, 2026， [https://coinmarketcap.com/cmc-ai/deepbook-protocol/price-analysis/](https://coinmarketcap.com/cmc-ai/deepbook-protocol/price-analysis/)  
31. SUI Token Unlock Schedule: Key Dates For Investors \- Cubix, 檢索日期：1月 3, 2026， [https://www.cubix.co/blog/sui-token-unlock-schedule/](https://www.cubix.co/blog/sui-token-unlock-schedule/)  
32. SUI Token Unlock Alert \- May 1, 2025 Attention SUI | AIB\_Crypto on Binance Square, 檢索日期：1月 3, 2026， [https://www.binance.com/en/square/post/23462158035002](https://www.binance.com/en/square/post/23462158035002)  
33. Sui Mainnet Outage Resolution, 檢索日期：1月 3, 2026， [https://blog.sui.io/sui-mainnet-outage-resolution/](https://blog.sui.io/sui-mainnet-outage-resolution/)  
34. sui-foundation/2025-Sui-Hacker-House-template \- GitHub, 檢索日期：1月 3, 2026， [https://github.com/sui-foundation/2025-Sui-Hacker-House-template](https://github.com/sui-foundation/2025-Sui-Hacker-House-template)  
35. Taiwan Builder House, 檢索日期：1月 3, 2026， [https://www.taiwanbuilderhouse.com/](https://www.taiwanbuilderhouse.com/)  
36. Sui Ecosystem Gains Spotlight as Taipei Builders Demo Day Highlights New DeFi Ideas, 檢索日期：1月 3, 2026， [https://www.livebitcoinnews.com/sui-ecosystem-gains-spotlight-as-taipei-builders-demo-day-highlights-new-defi-ideas/](https://www.livebitcoinnews.com/sui-ecosystem-gains-spotlight-as-taipei-builders-demo-day-highlights-new-defi-ideas/)  
37. Sui's Evolution to Unified Developer Platform Expected by 2026 \- Binance, 檢索日期：1月 3, 2026， [https://www.binance.com/lo-LA/square/post/34532465107905](https://www.binance.com/lo-LA/square/post/34532465107905)  
38. Latest Sui News \- (SUI) Future Outlook, Trends & Market Insights \- CoinMarketCap, 檢索日期：1月 3, 2026， [https://coinmarketcap.com/cmc-ai/sui/latest-updates/](https://coinmarketcap.com/cmc-ai/sui/latest-updates/)