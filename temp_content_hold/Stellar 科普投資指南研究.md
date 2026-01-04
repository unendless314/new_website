# **恆星幣 (Stellar, XLM) 權威研究報告：從支付協議到全球金融結算層的終極演化**

## **第一章 執行摘要：被誤解的金融巨頭與價值重估**

在加密貨幣的發展史中，恆星幣（Stellar, XLM）長期以來承受著市場的刻板印象，被簡單地歸類為「瑞波幣（XRP）的非營利分支」或僅僅是「另一個老牌支付代幣」。然而，隨著 2024 年至 2025 年間區塊鏈技術的典範轉移，Stellar 網路經歷了根本性的架構升級與生態演化。本報告將深入剖析 Stellar 如何透過 Soroban 智能合約平台的上線，從一個單純的點對點（P2P）價值傳輸協議，蛻變為具備圖靈完備性的全球數位資產結算層。  
本研究報告係針對台灣市場的投資者、金融從業人員及區塊鏈愛好者所撰寫，旨在提供一份詳盡的市場情報與實務操作指南。分析顯示，Stellar 目前正處於「效用價值」向「平台價值」轉型的關鍵拐點。  
首先，Stellar 在現實世界資產（RWA）代幣化領域已取得領先地位。透過與 Franklin Templeton 等華爾街巨頭的深度整合，Stellar 證明了其作為合規金融資產發行層的獨特優勢，這是許多新興公鏈尚未觸及的領域 1。  
其次，Soroban 智能合約的引入解決了 Stellar 長期以來缺乏可編程性的痛點，成功孵化出 Blend（借貸）、Aquarius（流動性管理）及 Soroswap（自動做市商）等原生 DeFi 協議，使得網路上的閒置資產得以產生收益（Yield），從而根本性地改變了 XLM 的代幣經濟模型 3。  
再者，透過與 MoneyGram 的全球合作及 USDC 的原生整合，Stellar 構建了目前加密貨幣世界中最完善的「法幣—加密貨幣」出入金網路，這對於台灣等依賴跨境匯款與國際貿易的經濟體具有極高的實用價值 6。  
本報告將依序探討 Stellar 的歷史哲學、技術核心（SCP）、DeFi 與 RWA 生態系的現狀、全球支付網路的落地應用，並針對台灣使用者提供具體的交易所操作策略與風險防範指南，最終對 XLM 的投資價值進行機構級的風險評估。

## ---

**第二章 歷史淵源與哲學分歧：雙生子的決裂與獨立之路**

要深刻理解 Stellar 的戰略定位，必須回溯其與 Ripple (XRP) 的歷史糾葛，這不僅是技術路線的分歧，更是兩種截然不同的金融哲學之戰。

### **2.1 起源：Jed McCaleb 與 Ripple 的哲學決裂**

Stellar 的故事始於區塊鏈領域的傳奇人物 Jed McCaleb。作為 Mt. Gox 的早期創立者以及 Ripple 的共同創辦人，McCaleb 在 2012 年協助建立了 Ripple Labs，旨在利用區塊鏈技術現代化銀行間的結算系統 8。然而，隨著項目的發展，McCaleb 與 Ripple 管理層在發展方向上產生了不可調和的矛盾。  
這種分歧的核心在於「服務對象」的定義：

* **Ripple (XRP) 的精英路線：** Ripple Labs 選擇了一條營利性公司的道路，其戰略目標是「自上而下」（Top-Down）地改革金融體系。Ripple 致力於成為銀行與金融機構的合作夥伴，提供更高效的流動性解決方案以取代 SWIFT 系統。其代幣 XRP 被設計為機構間結算的橋樑貨幣，核心用戶是銀行家與支付處理商 8。  
* **Stellar (XLM) 的普惠願景：** 2014 年，McCaleb 因理念不合離開 Ripple，創立了非營利組織 Stellar Development Foundation (SDF)。SDF 的使命是「金融普惠」（Financial Inclusion），旨在「自下而上」（Bottom-Up）地賦能個人。Stellar 專注於連結分散的金融系統，特別是針對全球「無銀行帳戶」（Unbanked）群體，致力於降低跨境匯款的門檻與成本 8。

### **2.2 擺脫「分叉」標籤：代碼重寫與技術獨立**

儘管 Stellar 在 2014 年啟動初期確實使用了 Ripple 協議的原始代碼，導致市場長期誤將其視為 XRP 的分叉項目（Fork）。然而，這段「血緣關係」在網路上線僅六個月後便徹底終結。由於早期的共識機制在極端網路分區條件下展現出安全性隱憂，SDF 做出了極具魄力的決定：徹底重寫底層代碼 11。  
這一努力催生了由史丹佛大學教授 David Mazières 發明的「恆星共識協議」（Stellar Consensus Protocol, SCP）。SCP 的誕生標誌著 Stellar 在技術上與 Ripple 的徹底脫鉤。與 Ripple 依賴於一組選定的信任節點列表（Unique Node List, UNL）不同，SCP 允許更加開放與靈活的信任拓撲結構，這使得 Stellar 在保持去中心化精神的同時，實現了金融級別的安全性與結算速度 12。

### **2.3 經濟模型的里程碑：2019 通膨移除事件**

對於投資者而言，理解 XLM 價值主張的關鍵在於 2019 年發生的經濟模型重構。在此之前，Stellar 協議內置了每年 1% 的通貨膨脹機制，系統會自動增發代幣並分配給獲得選票最多的帳戶。這一機制原本旨在激勵生態貢獻者，但實務上卻導致了資金向少數大戶集中，且持續的通膨預期壓抑了幣價表現 14。  
2019 年 10 月，經過社區與驗證節點的投票，SDF 實施了兩項激進的改革：

1. **永久移除通膨機制：** 停止 XLM 的年增發，使 XLM 從通膨資產轉變為總量固定的資產（考慮到手續費銷毀，具有微弱的通縮屬性） 14。  
2. **供應量減半：** 為了展示對網路健康的承諾，SDF 銷毀了約 550 億枚由基金會持有的 XLM，將總供應量削減至約 500 億枚 14。

這一歷史性事件表明了項目方願意為了長期價值而犧牲短期控制權，並為 XLM 奠定了稀缺性的基礎。

## ---

**第三章 技術核心：恆星共識協議 (SCP) 與資產發行標準**

Stellar 之所以能成為全球支付網路的首選，歸功於其獨特的底層技術架構，這在效率、成本與安全性之間取得了不同於比特幣（PoW）或以太坊（PoS）的平衡。

### **3.1 聯邦拜占庭協議 (FBA) 的運作邏輯**

Stellar 的核心引擎是 **恆星共識協議 (SCP)**，這是第一個安全實施「聯邦拜占庭協議」（Federated Byzantine Agreement, FBA）的共識機制。  
在傳統的區塊鏈中（如比特幣），全網必須對同一個帳本達成共識。而在 SCP 中，每個節點不需要信任整個網路的每一個陌生節點，而是選擇自己信任的一組節點，稱為「切片」（Quorum Slices）。

* **信任的傳遞性：** 由於節點 A 信任節點 B，節點 B 信任節點 C，這些切片相互交織，最終形成了一個覆蓋全網的信任圖譜（Trust Graph）。  
* **安全性優勢：** 這種機制使得攻擊者極難控制網路，因為他們無法簡單地透過購買算力（PoW）或囤積代幣（PoS）來獲得控制權。攻擊者必須欺騙網路中大部分誠實節點將其納入信任切片，這在社會工程學上極為困難 12。  
* **性能指標：** SCP 允許 Stellar 網路在 3-5 秒內達成交易確認與最終性（Finality）。與比特幣需要等待數個區塊確認不同，Stellar 的交易一旦確認即為不可逆，這對於支付場景至關重要 17。

### **3.2 比較分析：Stellar vs. Solana vs. Ethereum**

為了更直觀地理解 Stellar 的技術定位，我們將其與當前主流公鏈進行對比：

| 特性 | Stellar (XLM) | Solana (SOL) | Ethereum (ETH) |
| :---- | :---- | :---- | :---- |
| **共識機制** | SCP (FBA) | Proof of History (PoH) \+ PoS | Proof of Stake (PoS) |
| **交易確認時間** | 3-5 秒 (即時最終性) | \~0.4 秒 (區塊時間) | \~12 秒 (區塊時間) |
| **平均手續費** | \< $0.00001 | \< $0.001 | $1.00 \- $50.00+ |
| **能源消耗** | 極低 (綠色區塊鏈) | 低 | 低 (Merge 後) |
| **主要應用場景** | 支付、匯款、RWA | 高頻交易、NFT、DeFi | 廣義智能合約、DeFi |
| **穩定性記錄** | 極高 (自 2014 年以來穩定運行) | 曾有多次停機記錄 | 極高 |

從上表可見 18，Stellar 在交易成本和確定性上具有顯著優勢，特別適合需要「高頻、小額、絕對安全」的金融結算業務。雖然 Solana 在理論 TPS 上更高，但 Stellar 在處理法幣代幣化和跨境支付時，提供了更為成熟且經歷史驗證的穩定性。

### **3.3 原生資產發行與路徑支付 (Path Payment)**

Stellar 不僅僅是傳輸 XLM 的管道，它本質上是一個去中心化的多幣種帳本。任何實體（稱為 Anchor，錨點）都可以在 Stellar 上發行資產（Token），代表美元、比特幣、股票或碳權。  
Stellar 協議層內置了去中心化交易所（SDEX），這使得它擁有一個獨有的殺手級功能：**路徑支付 (Path Payment)**。

* **場景：** 台灣的用戶 A 想要發送台幣（TWD），而美國的用戶 B 想要接收美元（USD）。  
* **自動轉換：** 當用戶 A 發起交易時，Stellar 協議會自動在訂單簿中尋找最佳的路徑（例如：TWD \-\> XLM \-\> USD，或 TWD \-\> USDC \-\> USD），並在一次原子交易中完成貨幣轉換與發送。  
* **原子性：** 整個過程要麼全部成功，要麼全部失敗，不存在「錢匯出去了但沒兌換成功」的風險 8。

## ---

**第四章 Soroban 智能合約：DeFi 生態的覺醒與可編程金融**

長期以來，Stellar 被批評為「功能單一」，雖然在支付上做到極致，但缺乏以太坊那樣的圖靈完備智能合約能力。這一局限性在 **Soroban** 平台推出後被徹底打破。Soroban 是 Stellar 歷史上最大規模的技術升級，標誌著網路從「單純的帳本」進化為「可編程的金融操作系統」。

### **4.1 Soroban 的技術架構優勢**

Soroban 並未盲目複製以太坊虛擬機（EVM），而是選擇了基於 **WebAssembly (WASM)** 和 **Rust** 語言的架構 21。

* **性能導向：** Rust 語言以其內存安全性和高效能著稱，這使得 Soroban 合約在執行效率上遠超傳統的 Solidity 合約，能夠支持更複雜的金融邏輯而不導致網路擁堵。  
* **狀態租賃機制 (State Expiry)：** 為了解決區塊鏈「狀態膨脹」（State Bloat）的通病，Soroban 引入了狀態租賃機制。用戶需要為合約佔用的帳本空間付費，未續費的數據將被存檔。這確保了 Stellar 網路在長期運行下依然能保持輕量與高速，這是為了大規模金融應用而設計的前瞻性功能。

### **4.2 DeFi 生態系普查：從 0 到 1 的爆發**

Soroban 上線後，Stellar 上迅速湧現了一批原生 DeFi 協議，成功激活了網路上沉澱的資金。

#### **4.2.1 Blend Protocol：借貸市場的基石**

Blend 是 Stellar 生態中的 Aave 或 Compound 3。

* **功能：** 它允許用戶存入 Stellar 上的資產（如 USDC, XLM）以賺取利息，或超額抵押借出資產。  
* **戰略意義：** 在 Soroban 之前，Stellar 上的 USDC 只能靜態持有。Blend 的出現為資金提供了「時間價值」，吸引了尋求收益（Yield）的資本留存。此外，Blend 採用了獨特的無許可池設計，允許任何資產發行方創建自己的借貸池，這極大擴展了長尾資產的流動性 24。

#### **4.2.2 Aquarius (AQUA)：流動性激勵的指揮棒**

Aquarius 解決了去中心化交易所（DEX）最核心的痛點——流動性引導 4。

* **機制：** 透過 AQUA 代幣，持有者可以投票決定哪些交易對（如 XLM/USDC, EUR/USDC）應該獲得更多的流動性挖礦獎勵。這類似於 Curve Finance 的賄賂（Bribe）機制。  
* **影響：** 這一層激勵機制成功將流動性引導至網路最需要的法幣通道上，大幅降低了滑點，使得 Stellar 的兌換匯率能與中心化交易所競爭 27。

#### **4.2.3 Soroswap 與 Phoenix：交易聚合與體驗**

* **Soroswap Finance：** 作為 AMM 聚合器，它能智能路由交易，同時連接 Soroban 的流動性池與傳統 SDEX 的訂單簿，確保用戶獲得最優價格 5。  
* **Phoenix DeFi Hub：** 專注於提供極致的 UI/UX 體驗，降低一般用戶進入 DeFi 的門檻，雖然目前 TVL 仍在成長期，但其用戶活躍度增長顯著 30。

根據 2025 年的生態報告，Stellar 上的 TVL（總鎖倉價值）年增長率達到 95%，顯示 Soroban 確實成功開啟了第二成長曲線 21。

## ---

**第五章 RWA 的王者：Franklin Templeton 與機構採用**

如果說 DeFi 是加密原生的創新，那麼 **現實世界資產（RWA）** 則是連接傳統金融的橋樑。在這一領域，Stellar 憑藉其合規友好的特性，已成為華爾街機構的首選。

### **5.1 案例研究：Franklin Templeton OnChain U.S. Government Money Fund (FOBXX)**

這是目前全球區塊鏈上最成功的 RWA 案例之一，也是 Stellar 生態皇冠上的明珠 1。

* **基金概述：** Franklin Templeton（富蘭克林坦伯頓）這家擁有 70 多年歷史的資產管理巨頭，選擇 Stellar 網路發行其美國政府貨幣市場基金（FOBXX）。每一份額由 **BENJI** 代幣代表。  
* **規模與合規：** 截至 2024 年，該基金資產管理規模（AUM）已突破 3.6 億美元，並持續增長。它是美國第一個使用公共區塊鏈處理交易和記錄股權的 SEC 註冊共同基金（1940 Act fund） 1。  
* **為何選擇 Stellar？** Franklin Templeton 的高管明確指出，Stellar 的極低交易成本（幾分之一美分）和原生的資產控制功能（如合規所需的凍結、回收權限）是其勝過以太坊的關鍵 20。  
* **創新突破——點對點轉帳：** 2024 年 4 月，該基金開啟了錢包間的點對點轉帳功能 34。這意味著投資者可以直接將價值 1 美元的生息資產（BENJI）轉給另一個投資者。這模糊了「投資」與「支付」的界限——BENJI 代幣實際上變成了一種「會生利息的穩定幣」。

### **5.2 聯合國難民署 (UNHCR) 的 Stellar Aid Assist**

這不僅僅是商業應用，更是技術向善的典範。UNHCR 利用 Stellar 網路向烏克蘭等戰亂地區的難民發放援助金（USDC） 35。

* **流程：** 援助金直接發送到難民的 Vibrant 錢包。  
* **效益：** 相比傳統銀行匯款，區塊鏈轉帳即時到帳，且全程透明可追溯，防止了貪污與中間人剝削。據統計，該項目已為 UNHCR 節省了數百萬美元的運營成本與匯兌損失 37。

## ---

**第六章 全球支付網路：MoneyGram 與 USDC 的落地**

Stellar 最強大的護城河在於其與實體世界的連接能力。

### **6.1 MoneyGram Access：打通現金與加密貨幣的最後一哩路**

對於許多沒有銀行帳戶的人來說，進入加密世界的最大門檻是如何將手中的「現金」數位化。Stellar 與全球匯款巨頭 MoneyGram 合作推出的 **MoneyGram Access** 服務完美解決了這個問題 6。

* **無銀行帳戶的入口：** 用戶不需要銀行帳戶，只需持有支援 Stellar 的錢包（如 Lobstr, Beans, Vibrant），即可在全球超過 180 個國家、數十萬個 MoneyGram 實體網點進行現金存取。  
* **操作流程：** 用戶在 App 上發起「存款」，獲得一組代碼，走到巷口的雜貨店（MoneyGram 代理點）將現金交給店員，幾秒鐘後，等值的 USDC 就會出現在用戶的手機錢包中。反之亦然，用戶可以將 USDC 變現為當地法幣 6。  
* **成本優勢：** 該服務在許多市場推出了零手續費推廣，且 Stellar 鏈上的轉帳費用幾乎可以忽略不計，這比傳統匯款節省了巨額費用 7。

## ---

**第七章 台灣在地實務：投資者的生存與操作指南**

對於台灣的使用者來說，Stellar 不僅是一個投資標的，更是一個極具實用價值的工具。以下針對台灣市場提供具體的操作建議。

### **7.1 交易所支援與資金調度策略**

台灣主要的合規交易所均對 Stellar 提供了完善的支援，這使得 XLM 成為跨交易所資金調度的首選「搬運工」。

* **MAX 交易所與 BitoPro (幣託)：**  
  * 這兩家交易所均支援 Stellar 鏈上的 USDC 及 XLM 充提 40。  
  * **策略：** 當你需要將資金從台灣交易所轉移至國際交易所（如 Binance, OKX, Bybit）時，強烈建議使用 Stellar 鏈上的 USDC 或 XLM。  
  * **成本對比：** 使用 Ethereum (ERC20) 傳輸 USDC 可能需要 3-10 美元的手續費，而使用 Stellar (XLM) 鏈傳輸 USDC 的成本通常低於 0.01 美元，且速度在 5 秒內完成 18。

### **7.2 跨境匯款實務：Beans App 與 MoneyGram 在台灣**

台灣擁有大量的移工社群及跨國商務需求。MoneyGram 在台灣擁有廣泛的代理點（通常與特定銀行如京城銀行、土地銀行合作） 43。

* **Beans App 的應用：** 這款基於 Stellar 的錢包專注於極簡體驗。台灣用戶可以利用 Beans App 發送 USDC 或其他貨幣，接收方（例如在菲律賓或印尼的家人）可以直接在當地的 MoneyGram 網點提取現金。這繞過了傳統銀行電匯的高昂手續費與漫長等待時間 45。

### **7.3 【極重要】MEMO (Tag) 防雷指南：避免資產永久遺失**

這是所有 Stellar 新手在台灣交易所操作時最容易犯的致命錯誤，必須反覆強調。

* 技術原理：  
  Stellar 採用「帳戶模型」。為了方便管理，交易所（如 Binance, MAX）通常使用一個公共的主錢包地址來接收所有用戶的充值。為了區分這筆錢屬於哪位用戶，交易所會分配一個唯一的 MEMO ID（或稱 Tag, 備註）給每位用戶 42。  
* 常見悲劇：  
  如果你從自己的私有錢包（如 Lobstr, Ledger）轉帳 XLM 到交易所，僅填寫了地址（Address）而忘記填寫 MEMO，你的資金將會成功進入交易所的公共池，但交易所的系統無法識別這是你的錢，導致資產「憑空消失」在交易所的帳戶中。  
* 補救措施與代價：  
  如果不慎遺漏 MEMO，你必須向交易所申請「資產找回」。這通常需要：  
  1. 提供交易哈希 (TXID)。  
  2. 提供錢包的所有權證明（如錄屏）。  
  3. 支付手續費（Binance 等平台通常會收取一定比例或固定金額的處理費，有時甚至高於轉帳金額本身）。  
  4. 等待數週的人工處理時間 42。  
* **黃金法則：**  
  * **轉入交易所：** 務必填寫 Address **和** MEMO。  
  * **轉入私有錢包：** 私有錢包通常不需要 MEMO（除非該錢包有特別說明）。  
  * **小額測試：** 在進行大額轉帳前，永遠先轉一筆最小金額（如 1 XLM）進行測試。

## ---

**第八章 投資價值與風險分析：機構視角**

### **8.1 投資價值論述 (Bull Case)**

1. **通縮與稀缺性：** 2019 年通膨機制的移除，加上活躍的網絡交易燃燒手續費（雖然微量），確立了 XLM 的稀缺性。隨著 Soroban 生態的繁榮，對區塊空間的需求將增加 XLM 的消耗。  
2. **RWA 的護城河：** 在監管日益嚴格的環境下，Stellar 在合規性上的先發優勢（Franklin Templeton, MoneyGram 合作）是其最大的資產。當傳統金融機構尋求代幣化方案時，Stellar 是比 Ethereum 更安全、比 Solana 更穩定的選擇。  
3. **支付效用的剛需：** 只要全球存在低成本跨境匯款的需求，XLM 作為橋樑貨幣的效用價值就存在。這為幣價提供了一個基於基本面的地板支撐。

### **8.2 風險因素 (Bear Case)**

1. **公鏈競爭白熱化：** Stellar 面臨來自 **Solana** 的強力競爭。Solana 同樣主打高性能與低費率，且在話題性、開發者數量和 DeFi 創新速度上目前領先 Stellar 19。此外，Layer 2（如 Base, Arbitrum）的興起也削弱了 Stellar 的低費率優勢。  
2. **生態爆發力滯後：** 雖然 Soroban 上線了，但 Stellar 上的「殺手級應用」數量仍遠少於 EVM 生態。開發者需要學習 Rust，這構成了一定的遷移門檻。  
3. **監管的不確定性：** 儘管 Stellar 積極遊說並參與 CFTC 委員會，試圖將自身定義為商品 49，但在美國證券法規徹底明朗前，所有 ICO 時期的老牌代幣都面臨潛在的監管陰影。然而，Ripple 訴訟案的判決為 Stellar 提供了有利的判例參考。

## ---

**第九章 結論與展望**

Stellar (XLM) 已經完成了一場寧靜但深刻的革命。它不再是 XRP 的影子，而是一個擁有獨立技術靈魂（SCP）、強大智能合約平台（Soroban）以及頂級機構背書（Franklin Templeton, MoneyGram）的成熟金融基礎設施。  
對於台灣投資者而言，XLM 是一個兼具「防禦性」與「成長性」的獨特標的。它或許不會像某些迷因幣（Meme Coins）那樣在一夜之間暴漲百倍，但其在真實世界資產代幣化和全球支付網絡中的深耕，為其提供了在下一個加密週期中持續增長的確定性。  
**關鍵行動建議：**

* **關注指標：** 密切追蹤 Soroban 上的 TVL 增長數據，以及 Franklin Templeton 基金在 Stellar 上的資產規模變化，這是機構採用的風向標。  
* **資產配置：** 將 XLM 視為加密投資組合中的「基礎設施層」配置，用於對沖純投機性資產的風險。  
* **安全操作：** 在享受低費率轉帳的同時，永遠不要忘記 MEMO 的重要性。

Stellar 的願景是讓金錢像電子郵件一樣自由流動。隨著技術的成熟與生態的擴張，這個願景正一步步變為現實。  
*(報告結束)*

#### **引用的著作**

1. Franklin OnChain US Government Money Fund \- TheValueProp, 檢索日期：1月 3, 2026， [https://thevalueprop.io/projects/franklin-onchain-u-s-government-money-fund](https://thevalueprop.io/projects/franklin-onchain-u-s-government-money-fund)  
2. Franklin OnChain U.S. Government Money Fund \- FOBXX, 檢索日期：1月 3, 2026， [https://www.franklintempleton.com/investments/options/money-market-funds/products/29386/SINGLCLASS/franklin-on-chain-u-s-government-money-fund/FOBXX](https://www.franklintempleton.com/investments/options/money-market-funds/products/29386/SINGLCLASS/franklin-on-chain-u-s-government-money-fund/FOBXX)  
3. How DeFi Works for Lending and Borrowing Markets \- Stellar.org, 檢索日期：1月 3, 2026， [https://stellar.org/learn/lending-and-borrowing-markets](https://stellar.org/learn/lending-and-borrowing-markets)  
4. What is Aquarius? \- LOBSTR \- Freshdesk, 檢索日期：1月 3, 2026， [https://lobstr.freshdesk.com/support/solutions/articles/151000184882-what-is-aquarius-](https://lobstr.freshdesk.com/support/solutions/articles/151000184882-what-is-aquarius-)  
5. docs/readme/what-is-soroswap-finance.md at main \- GitHub, 檢索日期：1月 3, 2026， [https://github.com/soroswap/docs/blob/main/readme/what-is-soroswap-finance.md](https://github.com/soroswap/docs/blob/main/readme/what-is-soroswap-finance.md)  
6. MoneyGram Ramps | Connect Crypto to Cash in Minutes, 檢索日期：1月 3, 2026， [https://www.moneygram.com/us/en/ramps](https://www.moneygram.com/us/en/ramps)  
7. MoneyGram Launches Pioneering Global Crypto-to-Cash Service on the Stellar Network, 檢索日期：1月 3, 2026， [https://www.prnewswire.com/news-releases/moneygram-launches-pioneering-global-crypto-to-cash-service-on-the-stellar-network-301565815.html](https://www.prnewswire.com/news-releases/moneygram-launches-pioneering-global-crypto-to-cash-service-on-the-stellar-network-301565815.html)  
8. XLM vs XRP: A Deep Dive into Two Cross-Border Crypto Giants \- Switchere, 檢索日期：1月 3, 2026， [https://switchere.com/guides/xlm-vs-xrp](https://switchere.com/guides/xlm-vs-xrp)  
9. Stellar Crypto: Who Is The Founder? \- G.Flexsim, 檢索日期：1月 3, 2026， [https://git.flexsim.com/blog/stellar-crypto-who-is-the-founder-1764805200](https://git.flexsim.com/blog/stellar-crypto-who-is-the-founder-1764805200)  
10. Stellar vs. Ripple – Which One Should You Choose? \- Stilt, 檢索日期：1月 3, 2026， [https://stilt.com/crypto/stellar-vs-ripple-which-one-should-you-choose/](https://stilt.com/crypto/stellar-vs-ripple-which-one-should-you-choose/)  
11. Ripple vs Stellar: The history, rivalry, and future | by Fifi Arisandi \- Medium, 檢索日期：1月 3, 2026， [https://medium.com/@fifiarisandi\_/ripple-vs-stellar-the-history-rivalry-and-future-53de6a6f5add](https://medium.com/@fifiarisandi_/ripple-vs-stellar-the-history-rivalry-and-future-53de6a6f5add)  
12. Ripple vs Stellar: How are These Blockchains Different? \- YouHodler, 檢索日期：1月 3, 2026， [https://www.youhodler.com/blog/ripple-vs-stellar](https://www.youhodler.com/blog/ripple-vs-stellar)  
13. Stellar | Swap Functionality and AMMs, 檢索日期：1月 3, 2026， [https://stellar.org/learn/swap-functionality-and-amms](https://stellar.org/learn/swap-functionality-and-amms)  
14. Stellar Lumens (XLM) Price Prediction 2024, 2025-2030 \- PrimeXBT, 檢索日期：1月 3, 2026， [https://primexbt.com/for-traders/stellar-lumens-price-prediction-forecast/](https://primexbt.com/for-traders/stellar-lumens-price-prediction-forecast/)  
15. Stellar (XLM) Analysis | News | Description \- altFINS, 檢索日期：1月 3, 2026， [https://altfins.com/blog/stellar-xlm-analysis/](https://altfins.com/blog/stellar-xlm-analysis/)  
16. Grayscale Stellar Lumens Trust (XLM) \- SEC.gov, 檢索日期：1月 3, 2026， [https://www.sec.gov/Archives/edgar/data/1761325/000119312522222422/d348502dex991.htm](https://www.sec.gov/Archives/edgar/data/1761325/000119312522222422/d348502dex991.htm)  
17. Stellar | Blockchain Network for DeFi, Payments & Asset Tokenization, 檢索日期：1月 3, 2026， [https://stellar.org/](https://stellar.org/)  
18. Which Blockchain Has the Lowest Fees in 2025? Full Comparison \- Bleap, 檢索日期：1月 3, 2026， [https://www.bleap.finance/blog/which-blockchain-has-the-lowest-fees](https://www.bleap.finance/blog/which-blockchain-has-the-lowest-fees)  
19. Top 10 Blockchains: Fastest Transaction Speed (TPS) in 2025 \- NOWPayments, 檢索日期：1月 3, 2026， [https://nowpayments.io/blog/top-10-cryptos-with-fastest-transactions](https://nowpayments.io/blog/top-10-cryptos-with-fastest-transactions)  
20. Blockchain speed and cost comparisons \- Brale.xyz, 檢索日期：1月 3, 2026， [https://brale.xyz/blog/blockchain-speed-cost-comparisons](https://brale.xyz/blog/blockchain-speed-cost-comparisons)  
21. Stellar 2025: A Podium Finish, 檢索日期：1月 3, 2026， [https://stellar.org/blog/ecosystem/stellar-2025-year-in-review](https://stellar.org/blog/ecosystem/stellar-2025-year-in-review)  
22. XLM Stellar in 2024 (deep research) for CRYPTO:XLMUSD by EXCAVO \- TradingView, 檢索日期：1月 3, 2026， [https://www.tradingview.com/chart/XLMUSD/ahbRshPt-XLM-Stellar-in-2024-deep-research/](https://www.tradingview.com/chart/XLMUSD/ahbRshPt-XLM-Stellar-in-2024-deep-research/)  
23. Introducing Blend. A Liquidity Protocol Primitive for… | by Script3 \- Medium, 檢索日期：1月 3, 2026， [https://medium.com/script3/introducing-blend-95aaf66bdf41](https://medium.com/script3/introducing-blend-95aaf66bdf41)  
24. Connecting DeFi to the Real World on Stellar (with Blend Protocol) \- YouTube, 檢索日期：1月 3, 2026， [https://www.youtube.com/watch?v=5paS9-8d5l4](https://www.youtube.com/watch?v=5paS9-8d5l4)  
25. Blend Blastoff: How to use DeFi Protocol to Drive User Adoption | Meridian 2024 \- YouTube, 檢索日期：1月 3, 2026， [https://www.youtube.com/watch?v=58j0QkXKiDU](https://www.youtube.com/watch?v=58j0QkXKiDU)  
26. Introducing Aquarius. We are introducing a new liquidity… | by Aquarius | Aquarius / AQUA | Medium, 檢索日期：1月 3, 2026， [https://medium.com/aquarius-aqua/introducing-aquarius-fab7a02530dc](https://medium.com/aquarius-aqua/introducing-aquarius-fab7a02530dc)  
27. AQUAnomics. Learn more about AQUA, the token that… | by Aquarius \- Medium, 檢索日期：1月 3, 2026， [https://medium.com/aquarius-aqua/aquanomics-c8a70c6ff3f7](https://medium.com/aquarius-aqua/aquanomics-c8a70c6ff3f7)  
28. Passive Earning with Aquarius Rewards | Hidden Gem : r/Stellar \- Reddit, 檢索日期：1月 3, 2026， [https://www.reddit.com/r/Stellar/comments/1ana8dk/passive\_earning\_with\_aquarius\_rewards\_hidden\_gem/](https://www.reddit.com/r/Stellar/comments/1ana8dk/passive_earning_with_aquarius_rewards_hidden_gem/)  
29. Protocol Selection: Customize Your Swapping Experience : r/Stellar \- Reddit, 檢索日期：1月 3, 2026， [https://www.reddit.com/r/Stellar/comments/1fokvyh/protocol\_selection\_customize\_your\_swapping/](https://www.reddit.com/r/Stellar/comments/1fokvyh/protocol_selection_customize_your_swapping/)  
30. Best DeFi & DEX Protocols on Stellar: TVL Rankings \- DappRadar, 檢索日期：1月 3, 2026， [https://dappradar.com/narratives/defi/protocols/chain/stellar](https://dappradar.com/narratives/defi/protocols/chain/stellar)  
31. Top Stellar Dapps | DappRadar, 檢索日期：1月 3, 2026， [https://dappradar.com/rankings/protocol/stellar](https://dappradar.com/rankings/protocol/stellar)  
32. Franklin Templeton Announces the Franklin OnChain U.S. Government Money Fund Surpasses $270 Million in Assets Under Management, 檢索日期：1月 3, 2026， [https://www.franklintempleton.com/press-releases/news-room/2023/franklin-templeton-announces-the-franklin-onchain-u.s.-government-money-fund-surpasses-usd270-million-in-assets-under-management](https://www.franklintempleton.com/press-releases/news-room/2023/franklin-templeton-announces-the-franklin-onchain-u.s.-government-money-fund-surpasses-usd270-million-in-assets-under-management)  
33. Franklin Templeton Announces the Franklin OnChain U.S. Government Money Fund Surpasses $270 Million in Assets Under Management, 檢索日期：1月 3, 2026， [https://www.franklintempleton.co.uk/press-releases/news-room/2023/franklin-templeton-announces-the-franklin-onchain-u.s.-government-money-fund-surpasses-usd270-million-in-assets-under-management](https://www.franklintempleton.co.uk/press-releases/news-room/2023/franklin-templeton-announces-the-franklin-onchain-u.s.-government-money-fund-surpasses-usd270-million-in-assets-under-management)  
34. Franklin Templeton Announces Availability of Peer-to-Peer Transfers for Franklin OnChain U.S. Government Money Fund, 檢索日期：1月 3, 2026， [https://www.franklintempleton.com/press-releases/news-room/2024/franklin-templeton-announces-availability-of-peer-to-peer-transfers-for-franklin-onchain-u.s.-government-money-fund](https://www.franklintempleton.com/press-releases/news-room/2024/franklin-templeton-announces-availability-of-peer-to-peer-transfers-for-franklin-onchain-u.s.-government-money-fund)  
35. How UNHCR Distributes Cash Assistance Through Stellar Aid Assist, 檢索日期：1月 3, 2026， [https://stellar.org/case-studies/unhcr](https://stellar.org/case-studies/unhcr)  
36. UNHCR wins award for innovative use of blockchain solutions to provide cash to forcibly displaced in Ukraine, 檢索日期：1月 3, 2026， [https://www.unhcr.org/us/news/press-releases/unhcr-wins-award-innovative-use-blockchain-solutions-provide-cash-forcibly](https://www.unhcr.org/us/news/press-releases/unhcr-wins-award-innovative-use-blockchain-solutions-provide-cash-forcibly)  
37. Stellar Aid Assist \- Transforming Humanitarian Aid Delivery Through Blockchain \- ICVA Network, 檢索日期：1月 3, 2026， [https://www.icvanetwork.org/uploads/2025/01/Stellar-Aid-Assist-Transforming-Humanitarian-Aid-Delivery-Through-Blockchain.pdf](https://www.icvanetwork.org/uploads/2025/01/Stellar-Aid-Assist-Transforming-Humanitarian-Aid-Delivery-Through-Blockchain.pdf)  
38. Life-saving, efficient and secure: humanitarian aid that gives refugees choices | UNHCR, 檢索日期：1月 3, 2026， [https://www.unhcr.org/us/news/stories/life-saving-efficient-and-secure-humanitarian-aid-gives-refugees-choices](https://www.unhcr.org/us/news/stories/life-saving-efficient-and-secure-humanitarian-aid-gives-refugees-choices)  
39. Stellar | Three Years of Impact: How MoneyGram is Unlocking Financial Accessibility on Stellar, 檢索日期：1月 3, 2026， [https://stellar.org/blog/foundation-news/three-years-with-moneygram](https://stellar.org/blog/foundation-news/three-years-with-moneygram)  
40. 【新幣開放存提】 USDC 今日開放加值提領 \- 幣託BitoPro, 檢索日期：1月 3, 2026， [https://support.bitopro.com/hc/zh-tw/articles/4408056932377--%E6%96%B0%E5%B9%A3%E9%96%8B%E6%94%BE%E5%AD%98%E6%8F%90-USDC-%E4%BB%8A%E6%97%A5%E9%96%8B%E6%94%BE%E5%8A%A0%E5%80%BC%E6%8F%90%E9%A0%98](https://support.bitopro.com/hc/zh-tw/articles/4408056932377--%E6%96%B0%E5%B9%A3%E9%96%8B%E6%94%BE%E5%AD%98%E6%8F%90-USDC-%E4%BB%8A%E6%97%A5%E9%96%8B%E6%94%BE%E5%8A%A0%E5%80%BC%E6%8F%90%E9%A0%98)  
41. Stellar区块链现支持USDC稳定币 \- 中华网, 檢索日期：1月 3, 2026， [https://m.tech.china.com/digi/digi/20201016/20201016625460.html](https://m.tech.china.com/digi/digi/20201016/20201016625460.html)  
42. 忘填/錯填標籤(Tag/Memo)找回申請指南| Binance Support, 檢索日期：1月 3, 2026， [https://www.binance.com/zh-TC/support/faq/detail/40b87335db904481888ef406b105442b](https://www.binance.com/zh-TC/support/faq/detail/40b87335db904481888ef406b105442b)  
43. Find MoneyGram Locations in Taiwan | Nearby Agents & Partners, 檢索日期：1月 3, 2026， [https://www.moneygram.com/locations/tw/en](https://www.moneygram.com/locations/tw/en)  
44. How to Receive Money in Taiwan \- MoneyGram, 檢索日期：1月 3, 2026， [https://www.moneygram.com/r/tw/en/how-to-receive-money](https://www.moneygram.com/r/tw/en/how-to-receive-money)  
45. Beans App: Money Transfers \- Apps on Google Play, 檢索日期：1月 3, 2026， [https://play.google.com/store/apps/details?id=com.beansapp.app\&hl=en\_US](https://play.google.com/store/apps/details?id=com.beansapp.app&hl=en_US)  
46. Instant, free & safe international money transfers | Beans App, 檢索日期：1月 3, 2026， [https://www.beansapp.com/?cdcbc5f5\_page=2](https://www.beansapp.com/?cdcbc5f5_page=2)  
47. 未填/錯填標籤(Memo/Tag)找回申請指南, 檢索日期：1月 3, 2026， [https://www.mexc.com/uk-UA/support/article/applying-to-recover-a-deposit-due-to-an-unfilled-incorrectly-filled-memo-tag-15441726005529](https://www.mexc.com/uk-UA/support/article/applying-to-recover-a-deposit-due-to-an-unfilled-incorrectly-filled-memo-tag-15441726005529)  
48. SOLANA VS THE WORLD. STELLAR | by Ayorinde John \- Medium, 檢索日期：1月 3, 2026， [https://medium.com/@ayorinde270/solana-vs-the-world-de98d038b17b](https://medium.com/@ayorinde270/solana-vs-the-world-de98d038b17b)  
49. Coinbase Hires Avoq to Push Digital Asset Clarity \- Legis1, 檢索日期：1月 3, 2026， [https://legis1.com/news/digital-asset-regulation-coinbase-avoq/](https://legis1.com/news/digital-asset-regulation-coinbase-avoq/)  
50. Stellar and the CFTC: A Recognized Player in the Financial Regulatory Landscape, 檢索日期：1月 3, 2026， [https://scopuly.medium.com/stellar-and-the-cftc-a-recognized-player-in-the-financial-regulatory-landscape-8e1e06108a52](https://scopuly.medium.com/stellar-and-the-cftc-a-recognized-player-in-the-financial-regulatory-landscape-8e1e06108a52)  
51. Stellar | Representing Blockchain on the Commodity Futures Trading Commission's Global Market Advisory Committee, 檢索日期：1月 3, 2026， [https://stellar.org/blog/policy/representing-blockchain-on-the-commodity-futures-trading-commissions-global-market-advisory-committee](https://stellar.org/blog/policy/representing-blockchain-on-the-commodity-futures-trading-commissions-global-market-advisory-committee)