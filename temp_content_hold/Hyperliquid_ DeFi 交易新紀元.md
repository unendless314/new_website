# **Hyperliquid (HYPE) 深度投資研究報告：從高性能 L1 架構到去中心化金融的終極型態**

## **摘要**

本報告旨在為台灣投資者與加密貨幣市場參與者提供一份關於 Hyperliquid (HYPE) 的詳盡分析。作為 2024-2025 年間去中心化金融（DeFi）領域最具顛覆性的協議之一，Hyperliquid 不僅是一個去中心化衍生品交易所（Perp DEX），更是一個為高性能金融應用量身打造的 Layer 1 區塊鏈。本報告將深入解析其「自建 L1」的架構哲學、HyperEVM 的生態擴展潛力、HLP 流動性引擎的經濟模型，以及其如何憑藉極致的產品體驗挑戰 dYdX 與 Binance 等中心化交易所（CEX）的市場地位。同時，我們將針對台灣市場的特殊性，提供詳盡的法幣入金路徑、稅務合規指引以及風險評估。

## **第一章：緒論——去中心化交易的「不可能三角」與 Hyperliquid 的破局**

在加密貨幣交易的演進史中，市場始終在尋找一個能夠平衡「性能」、「流動性」與「去中心化」的終極解決方案。長期以來，中心化交易所（CEX）如 Binance 和 Bybit 憑藉毫秒級的撮合速度和深厚的流動性佔據主導地位，但 FTX 的崩潰暴露了黑箱操作與資產挪用的系統性風險。另一方面，早期的去中心化交易所（DEX）如 Uniswap 雖然實現了資產自託管，但其自動做市商（AMM）機制在大額交易中面臨滑點高、資本效率低的問題，且受限於以太坊主網的擁堵與高昂 Gas 費，無法支持高頻合約交易 1。  
Hyperliquid 的橫空出世，正是為了打破這一僵局。不同於大多數試圖在通用 Layer 2（如 Arbitrum 或 Optimism）上構建訂單簿的競品，Hyperliquid 選擇了一條更為艱難但更具戰略深度的路徑：構建專用的高性能 Layer 1 區塊鏈。這一決策的核心邏輯在於，通用鏈的架構設計是為了適應多樣化的應用場景（從 NFT 到 遊戲），而非極致優化金融交易的延遲與吞吐量。  
本報告認為，Hyperliquid 代表了 DeFi 的「iPhone 時刻」——通過軟硬體（應用層與共識層）的垂直整合，提供了足以媲美 CEX 的用戶體驗，同時保留了區塊鏈的去中心化特質。其成功的關鍵在於「產品優先」的發展策略：先打造一個頂級的交易所產品積累流動性，再通過 HyperEVM 開放生態，這種路徑徹底顛覆了傳統公鏈「先基建、後應用」的發展模式 2。

## ---

**第二章：L1 架構哲學——為何拒絕通用 L2？**

### **2.1 通用型 L2 的結構性瓶頸**

在 2023 年，DeFi 開發者的主流共識是利用 Ethereum 的 Rollup 技術（Layer 2）來擴展應用。然而，對於試圖複製 CEX 體驗的全鏈上訂單簿（CLOB）交易所而言，通用型 L2 存在著難以克服的結構性瓶頸。

#### **2.1.1 共享排序器的資源爭奪**

在 Arbitrum 或 Optimism 等通用 L2 上，所有的交易——無論是 Uniswap 上的代幣兌換、Aave 上的借貸，還是某個熱門 NFT 的鑄造——都共享同一個排序器（Sequencer）資源。這意味著，當網絡因為某個熱門項目的空投而擁堵時，交易所的訂單處理也會隨之延遲。對於依賴微秒級反應的做市商而言，這種不確定性是致命的。一旦區塊確認延遲，做市商的掛單可能因無法及時撤銷而被套利機器人（MEV Bots）攻擊，導致「有毒流動性」流失 4。

#### **2.1.2 延遲與吞吐量的物理極限**

通用 L2 雖然比主網快，但其區塊時間（例如 Arbitrum 的 0.25 秒）對於高頻交易來說仍然過長。更重要的是，通用 EVM 的串行執行機制限制了吞吐量。Hyperliquid 團隊意識到，要實現每秒數十萬筆的訂單撮合，必須從底層共識機制進行優化，這是在通用鏈上無法實現的 6。

### **2.2 HyperCore：為金融特化的執行層**

Hyperliquid 的核心是由 Rust 語言編寫的高性能 L1，稱為 HyperCore。它不是一個通用的計算平台，而是一個專為金融邏輯優化的狀態機。

#### **2.2.1 性能指標與技術突破**

根據最新的測試數據與文檔顯示，HyperCore 能夠支持高達 200,000 TPS（每秒交易數），且端到端延遲低於 1 秒（包含網絡傳播與共識確認）。這一性能數量級的提升，使得 Hyperliquid 能夠運行全鏈上的中央限價訂單簿（CLOB），每一筆下單、取消、修改都在鏈上結算，沒有任何鏈下撮合環節 8。  
**表 2-1：Hyperliquid L1 與主流競爭對手的性能對比**

| 技術指標 | Hyperliquid L1 | Arbitrum One (L2) | Solana (L1) | dYdX v4 (Cosmos) |
| :---- | :---- | :---- | :---- | :---- |
| **架構類型** | 專用 L1 (Rust) | Optimistic Rollup | 通用 L1 | 應用鏈 (Cosmos SDK) |
| **共識機制** | HyperBFT (PoS) | 集中式排序器 (邁向去中心化) | Proof of History (PoH) | CometBFT (PoS) |
| **理論 TPS** | \~200,000 | \~40,000 | \~65,000 | \~2,000 |
| **結算延遲** | \< 1 秒 (最終性) | \~0.25 秒 (軟確認) | \~0.4 秒 | \~1.5 秒 |
| **訂單簿模式** | 全鏈上 (CLOB) | 無 (主要為 AMM) | 部分鏈上 (如 Phoenix) | 全鏈上 (CLOB) |
| **生態定位** | 金融特化 | 通用型 DeFi | 高性能通用 | 衍生品特化 |

資料來源：綜合整理自 4

#### **2.2.2 HyperBFT 共識機制**

HyperCore 採用了名為 HyperBFT 的改進版共識算法。它基於 HotStuff 協議，針對高頻交易場景進行了大幅優化。HyperBFT 允許網絡在無需許可的情況下擴展驗證者集合，目前雖然仍處於從團隊控制向完全社群控制的過渡期，但其設計初衷是為了支持數百個節點同時參與共識而不顯著增加延遲 8。這種共識機制確保了即使在極端市場波動下，交易所也不會宕機——這在 2024 年 5 月的市場崩盤壓力測試中得到了驗證，當時 Hyperliquid 清算了大量頭寸而未發生性能降級，相比之下，許多 L2 則出現了擁堵 7。

## ---

**第三章：HyperEVM 與生態擴展——從單點到面的戰略躍遷**

### **3.1 雙層架構的創新：原子級互操作性**

單純的訂單簿交易所（如早期的 dYdX）雖然能吸引交易員，但很難建立豐富的生態系統，因為開發者無法在其上構建複雜的借貸、穩定幣或衍生品組合應用。Hyperliquid 的解決方案是引入 **HyperEVM**。  
HyperEVM 不是一條獨立的側鏈，而是與 HyperCore 共享同一共識與狀態的虛擬機環境。這種設計實現了「原子級互操作性（Atomic Composability）」：

* **數據同步：** HyperEVM 上的智能合約可以通過預編譯合約（Precompiles）直接讀取 HyperCore 上的訂單簿狀態、資產價格和用戶倉位。  
* **無縫執行：** 開發者可以編寫一個合約，該合約在同一筆交易中，既能在 HyperEVM 上進行借貸操作，又能直接調用 HyperCore 的流動性進行對沖或平倉 5。

這一特性解決了 L1+L2 架構中存在的碎片化問題。在傳統架構中，L2 上的借貸協議無法實時感知 L1 交易所的價格變化，必須依賴預言機，這引入了延遲和風險。而在 Hyperliquid 上，HyperCore 本身就是最強大的預言機 9。

### **3.2 HyperEVM 生態概覽**

自 2025 年初 HyperEVM 上線以來，生態系統經歷了爆發式增長，驗證了「流動性在哪裡，開發者就在哪裡」的論點 2。  
**主要生態賽道與代表項目：**

1. **DeFi 協議：**  
   * **HypurrFi / Felix Protocol：** 這是構建在 HyperEVM 上的借貸與收益聚合器。用戶可以抵押 HYPE 或 USDC 進行借貸，同時協議會自動將閒置資金投入 HLP 獲取收益，實現資產效率的最大化。Felix 甚至為發現漏洞的安全研究員提供了高達 10 萬美元的賞金，顯示其對安全性的重視 12。  
   * **Kinetiq：** 專注於液體質押（Liquid Staking）的協議，釋放了被質押 HYPE 的流動性，讓用戶在維護網絡安全的同時，還能參與 DeFi 獲利 14。  
   * **HyperLend：** 原生借貸市場，提供類似 Aave 的體驗，支持多種長尾資產的借貸。  
2. **Meme 與文化資產：**  
   * **PURR：** 作為 HyperEVM 上的第一個 Spot Token，PURR 的發行是一次技術與市場的雙重實驗。它沒有 VC 投資，50% 空投給積分持有者。其獨特的機制是「交易即燃燒」，部分交易手續費會銷毀 PURR 代幣。這不僅測試了 HyperEVM 在高並發下的代幣傳輸能力，也為生態帶來了巨大的流量與關注度 15。  
3. **基礎設施與工具：**  
   * **跨鏈橋與預言機：** 除了原生橋接，Across Protocol、LayerZero 與 Chainlink 的整合正在推進，這使得資產進出 Hyperliquid 變得更加順滑 6。

## ---

**第四章：HYPE 與 HLP——代幣經濟學的飛輪效應**

Hyperliquid 的經濟模型是其能夠在拒絕 VC 融資的情況下實現冷啟動並爆發的核心驅動力。它設計了一套精密的利益分配機制，將交易者、做市商與代幣持有者深度綁定。

### **4.1 HYPE 代幣：治理、激勵與通縮**

HYPE 是 Hyperliquid 的原生代幣，於 2024 年底通過空投形式發行。這次發行被譽為 DeFi 史上最成功的「公平發射（Fair Launch）」案例之一，因為它完全排除了 VC 機構的早期低價籌碼 19。  
**HYPE 的核心效用：**

1. **PoS 質押：** 驗證者需質押 HYPE 以維護網絡安全。  
2. **Gas 費用：** 雖然交易免 Gas，但在 HyperEVM 上的操作需消耗 HYPE。  
3. **治理權：** 決定協議的關鍵參數與未來發展方向。

代幣分配與解鎖：  
根據 Tokenomist 與 Dropstab 的數據，HYPE 的總供應量為 10 億枚（動態調整）。

* **創世分發（空投）：** 31.0%（已全流通）。  
* **未來排放與社區獎勵：** 38.89%。  
* **核心貢獻者：** 23.80%（鎖倉期後線性釋放）。  
* **基金會預算：** 6.00%。  
* **HIP-2 流動性：** 部分用於提供初始流動性 20。

重要的通縮事件：  
2025 年初，Hyper Foundation 發起了一項關鍵的治理投票，提議將「援助基金（Assistance Fund）」中累積的 HYPE 代幣視為已銷毀（Burned），或者施加極其嚴格的鎖定條件。這一舉措實際上移除了市場對於潛在拋壓的擔憂，大幅強化了 HYPE 的稀缺性敘事 22。

### **4.2 HLP (Hyperliquidity Provider)：民主化的做市商**

HLP 是 Hyperliquid 最具創新性的產品之一，它讓普通散戶也能參與到通常只有專業機構才能觸及的做市業務中。

#### **4.2.1 運作機制**

用戶將 USDC 存入 HLP Vault，協議會自動使用這些資金在 Hyperliquid 的所有交易對上進行做市（同時掛買單與賣單）並參與清算。HLP 實際上充當了交易所的「對手方」。

* **收益來源：** 點差（Spread）、交易手續費分紅、清算收益。  
* **歷史表現：** 根據 DefiLlama 與 Oak Research 的數據，HLP 的年化回報率（APY）在 2024-2025 年間表現優異，雖然月度回報有波動，但長期來看大幅跑贏了單純持有 USDC 的無風險利率。其夏普比率（Sharpe Ratio）高達 2.89，遠高於比特幣的 1.80 24。

#### **4.2.2 逆向選擇風險 (Adverse Selection)**

投資者必須理解，HLP 並非無風險理財。它面臨著「逆向選擇」風險。當市場發生劇烈單邊行情（如比特幣在短時間內暴漲 20%），且聰明的交易員都在做多時，HLP 作為做市商會被迫持有大量空頭頭寸，從而產生虧損。

* **最大回撤：** 歷史數據顯示，HLP 的最大回撤曾達到 \-6.6%，雖然低於比特幣的波動，但仍需謹慎 24。  
* **防禦機制：** 協議通過算法不斷調整掛單價差，並在極端行情下優先保護 HLP 的資金安全。

## ---

**第五章：戰略對比——Hyperliquid vs. dYdX vs. CEX**

### **5.1 挑戰 dYdX：路線之爭的終局？**

dYdX 曾是衍生品 DEX 的絕對霸主，但其 v4 版本選擇遷移至 Cosmos 應用鏈，這一決策給了 Hyperliquid 可乘之機。  
**表 5-1：Hyperliquid 與 dYdX 的戰略對比**

| 比較維度 | Hyperliquid | dYdX (v4) | 分析 |
| :---- | :---- | :---- | :---- |
| **流動性來源** | 寄生於 Arbitrum (USDC) | Cosmos 原生/跨鏈 USDC | Hyperliquid 聰明地利用了 Arbitrum 龐大的 USDC 存量，用戶跨鏈門檻極低；dYdX 需用戶將資產跨鏈至 Cosmos，摩擦成本較高。 |
| **產品體驗** | 全功能 (Spot \+ Perp \+ EVM) | 專注於 Perp | Hyperliquid 的「全功能交易所」定位更具黏性，能在同一平台完成借貸、現貨與合約交易。 |
| **市場表現 (2025)** | 市佔率 \>60%，交易量領先 | 市佔率下滑 | 數據顯示市場更買單 Hyperliquid 的極致性能與財富效應。dYdX 的遷移過程導致了部分用戶流失 26。 |

### **5.2 挑戰 CEX：透明度的革命**

Hyperliquid 的真正野心是取代 Binance 或 Bybit。

* **資產透明：** CEX 的黑箱操作是用戶心中永遠的痛。Hyperliquid 的每一筆資產餘額都在鏈上可查，拒絕挪用 27。  
* **無縫體驗：** 通過「API 錢包」與「免簽名交易（Session Keys）」技術，Hyperliquid 實現了點擊即下單，無需每次彈出錢包簽名，這使得其操作體驗與 CEX 幾乎無異 28。

## ---

**第六章：台灣投資者實戰指南 (2025-2026 版)**

本章節專為台灣用戶設計，涵蓋從新台幣入金、跨鏈操作到稅務合規的全流程指引。

### **6.1 資金路徑：從新台幣到 Hyperliquid**

由於 Hyperliquid 尚未支持法幣直接入金，台灣用戶需通過「台灣合規交易所 \-\> 鏈上錢包 \-\> 跨鏈」的路徑。

#### **步驟一：新台幣入金與購買 USDC**

推薦使用台灣合規交易所（VASP）進行法幣兌換。

1. **MAX 交易所：** 台灣市佔率最高，支持銀行轉帳入金。  
   * *操作：* 綁定銀行帳戶 \-\> 轉帳 TWD \-\> 在 USDC/TWD 交易對買入 USDC。  
   * *提領：* 務必選擇 **Arbitrum One** 網絡提領 USDC。根據 MAX 官方數據，提領手續費約為 0.11 USDC，非常低廉且速度快 30。  
2. **Rybit 交易所：** 主打匯率最優。  
   * *操作：* 類似 MAX，Rybit 通常提供具競爭力的 USDT/USDC 匯率，且提領至 Arbitrum 網絡同樣高效 31。

#### **步驟二：跨鏈至 Hyperliquid**

Hyperliquid 的原生橋接主要支持 Arbitrum 網絡的 USDC。

1. **官方橋接 (Native Bridge)：**  
   * *網址：* app.hyperliquid.xyz/trade \-\> Deposit。  
   * *機制：* 用戶將 Arbitrum 上的 USDC 發送至官方 Bridge2 合約，HyperCore 監測到後會在 L1 上鑄造等額 USDC。  
   * *速度：* 充值約 1 分鐘內到帳；提現需等待 Arbitrum 的挑戰期（可能需 5-10 分鐘以上）33。  
2. **第三方橋接 (推薦 \- 速度更快)：**  
   * **Across Protocol / Jumper：** 如果你的資金在 Ethereum 主網、Polygon 或 Optimism，建議使用 Across 橋接。它利用意圖（Intents）機制，由中繼者預先墊付資金，速度極快（通常 \< 1 分鐘）且手續費低 6。

### **6.2 稅務指引與合規建議**

台灣針對加密貨幣的稅務規範主要依據「所得稅法」與「基本稅額條例」（AMT）。由於 Hyperliquid 是全鏈上操作，其獲利屬於「海外所得」。  
**表 6-1：台灣加密貨幣稅務申報門檻 (2025/2026 適用)**

| 收入來源 | 稅務分類 | 申報門檻與計算方式 |
| :---- | :---- | :---- |
| **境內交易所出金 (MAX/Rybit)** | 財產交易所得 | 併入個人綜合所得稅申報。若能舉證成本，以(賣價-成本)計算；若無法舉證，國稅局可能以高標準核定所得 34。 |
| **海外所得 (Hyperliquid 獲利)** | 海外所得 (基本稅額) | 1\. **海外所得 \< 100 萬台幣：** 免申報。 2\. **海外所得 ≥ 100 萬台幣：** 需計入基本所得額。 3\. **基本所得額 \> 750 萬台幣 (2024/2025免稅額調高)：** 需計算基本稅額（稅率 20%）。 *計算公式：(基本所得額 \- 750萬) x 20% \= 基本稅額*。 若基本稅額 \< 一般所得稅額，則無需補繳；若 \> 一般所得稅額，則需補繳差額。 |

**實務建議：**

* **保留證據：** 務必保留入金時的匯款紀錄與買入 USDC 的截圖，以及 Hyperliquid 上的交易歷史導出（Export Data），以作為未來報稅的成本證明。  
* **分批匯回：** 若年度獲利較高，建議諮詢專業會計師規劃匯回策略。

## ---

**第七章：風險評估與投資警示**

儘管 Hyperliquid 表現亮眼，但投資者必須清醒認識到其中的風險。

### **7.1 單點故障與中心化風險**

目前 Hyperliquid 的驗證者節點數量相對較少（主要由 4 個節點主導），且主要由 Hyper Foundation 及其合作夥伴控制 36。雖然團隊承諾逐步去中心化，但在當前階段，它相比 Ethereum 主網更為中心化。如果核心團隊遭遇不可抗力或網絡遭受 51% 攻擊，資產安全可能受威脅。

### **7.2 橋接風險 (Bridge Risk)**

Hyperliquid 的 L1 雖然安全，但其資金入口依賴於部署在 Arbitrum 上的橋接合約（Bridge2.sol）。這是一個託管合約 37。如果 Arbitrum 上的橋接合約被駭客攻擊，鎖定在裡面的 USDC 被盜，那麼 Hyperliquid L1 上的 USDC 將失去支撐，瞬間歸零。這是所有非原生資產鏈都存在的系統性風險。

### **7.3 HLP 的虧損風險**

許多投資者誤將 HLP 視為「保本理財」。這是錯誤的。HLP 是做市商基金，當市場發生劇烈單邊波動（如 2024 年初的暴漲或暴跌），且多數交易員方向正確時，HLP 會承受損失 38。

### **7.4 監管風險**

Hyperliquid 目前不強制 KYC，這使其處於監管的灰色地帶。隨著全球對 DeFi 監管的收緊，未來可能會面臨強制 KYC 或限制特定 IP 訪問的風險。HYPE 代幣也可能被 SEC 等機構視為未註冊證券 36。

## **結語**

Hyperliquid 的出現，標誌著 DeFi 從「積木拼搭（Modular）」向「垂直整合（Integrated）」的範式轉移。通過犧牲部分早期的去中心化程度，換取了能夠與 CEX 匹敵的極致性能。對於台灣投資者而言，這不僅是一個交易場所，更是一個捕捉高性能公鏈紅利的機會。然而，高收益伴隨高風險，建議在參與前充分理解其技術架構與潛在風險，合理配置資產。  
---

*免責聲明：本報告僅供資訊參考，不構成任何投資建議。加密貨幣市場波動劇烈，投資者應自行評估風險。*

#### **引用的著作**

1. What's all the HYPE? — Project Noisydata, 檢索日期：1月 2, 2026， [https://www.noisydata.io/blog/blog-post-hyperliquid](https://www.noisydata.io/blog/blog-post-hyperliquid)  
2. Understanding Hyperliquid: A Comprehensive Overview | by Dartmouth Blockchain, 檢索日期：1月 2, 2026， [https://medium.com/@dartmouthblockchain/understanding-hyperliquid-a-comprehensive-overview-f8a5ed1823a0](https://medium.com/@dartmouthblockchain/understanding-hyperliquid-a-comprehensive-overview-f8a5ed1823a0)  
3. Essential Resources | Hyperliquid Wiki \- GitBook, 檢索日期：1月 2, 2026， [https://hyperliquid-co.gitbook.io/wiki/guide/user-guide/essential-resources](https://hyperliquid-co.gitbook.io/wiki/guide/user-guide/essential-resources)  
4. Hyperliquid vs Arbitrum \[TPS, Max TPS, Block Time\] \- Chainspect, 檢索日期：1月 2, 2026， [https://chainspect.app/compare/hyperliquid-vs-arbitrum](https://chainspect.app/compare/hyperliquid-vs-arbitrum)  
5. Technical Architecture Comparison: Hyperliquid, dYdX, and Lighter.xyz | by Jung-Hua Liu | Dec, 2025 | Medium, 檢索日期：1月 2, 2026， [https://medium.com/@gwrx2005/technical-architecture-comparison-hyperliquid-dydx-and-lighter-xyz-2fd005854a7e](https://medium.com/@gwrx2005/technical-architecture-comparison-hyperliquid-dydx-and-lighter-xyz-2fd005854a7e)  
6. How to Bridge to Hyperliquid with Across (Step-By-Step Guide), 檢索日期：1月 2, 2026， [https://across.to/blog/hyperliquid-bridge](https://across.to/blog/hyperliquid-bridge)  
7. What is Hyperliquid's HyperEVM? \- Reflexivity Research, 檢索日期：1月 2, 2026， [https://www.reflexivityresearch.com/all-reports/what-is-hyperliquids-hyperevm](https://www.reflexivityresearch.com/all-reports/what-is-hyperliquids-hyperevm)  
8. Overview | Hyperliquid Wiki \- GitBook, 檢索日期：1月 2, 2026， [https://hyperliquid-co.gitbook.io/wiki/architecture/overview](https://hyperliquid-co.gitbook.io/wiki/architecture/overview)  
9. Developer Guide to Hyperliquid & HyperEVM | How to Get Started \- YouTube, 檢索日期：1月 2, 2026， [https://www.youtube.com/watch?v=ZESEkAKiJrg](https://www.youtube.com/watch?v=ZESEkAKiJrg)  
10. Hyperliquid vs. dYdX: Speed, Governance, and Market Dominance \- LBank, 檢索日期：1月 2, 2026， [https://www.lbank.com/explore/hyperliquid-vs-dydx-speed-governance-and-market-dominance](https://www.lbank.com/explore/hyperliquid-vs-dydx-speed-governance-and-market-dominance)  
11. HyperEVM \- Hyperliquid Docs \- GitBook, 檢索日期：1月 2, 2026， [https://hyperliquid.gitbook.io/hyperliquid-docs/hyperevm](https://hyperliquid.gitbook.io/hyperliquid-docs/hyperevm)  
12. Felix Bug Bounties | Immunefi, 檢索日期：1月 2, 2026， [https://immunefi.com/bug-bounty/felix/](https://immunefi.com/bug-bounty/felix/)  
13. Felix Bug Bounties \- Immunefi, 檢索日期：1月 2, 2026， [https://immunefi.com/bug-bounty/felix/resources/](https://immunefi.com/bug-bounty/felix/resources/)  
14. A Quick Guide to HyperEVM and Its Growing Ecosystem | Medium, 檢索日期：1月 2, 2026， [https://quillaudits.medium.com/a-quick-guide-to-hyperevm-and-its-growing-ecosystem-516faa84f68c](https://quillaudits.medium.com/a-quick-guide-to-hyperevm-and-its-growing-ecosystem-516faa84f68c)  
15. Purr (PURR) Price Today, News & Live Chart | Forbes Crypto Market Data, 檢索日期：1月 2, 2026， [https://www.forbes.com/digital-assets/assets/purr-purr/](https://www.forbes.com/digital-assets/assets/purr-purr/)  
16. Purr price today, PURR to USD live price, marketcap and chart | CoinMarketCap, 檢索日期：1月 2, 2026， [https://coinmarketcap.com/currencies/purr/](https://coinmarketcap.com/currencies/purr/)  
17. PURR Price \- Crypto Exchange \- KuCoin, 檢索日期：1月 2, 2026， [https://www.kucoin.com/price/PURR](https://www.kucoin.com/price/PURR)  
18. Hyperliquid Integration Guide \- Chainlink Documentation, 檢索日期：1月 2, 2026， [https://docs.chain.link/ccip/tools-resources/network-specific/hyperliquid-integration-guide](https://docs.chain.link/ccip/tools-resources/network-specific/hyperliquid-integration-guide)  
19. Hyperliquid Platform Airdrop: How It Became the Most Lucrative in Crypto History | OKX, 檢索日期：1月 2, 2026， [https://www.okx.com/learn/hyperliquid-platform-airdrop-lucrative-history](https://www.okx.com/learn/hyperliquid-platform-airdrop-lucrative-history)  
20. Hyperliquid (HYPE) | Tokenomics, Supply & Release Schedule \- Token Unlocks, 檢索日期：1月 2, 2026， [https://tokenomist.ai/hyperliquid](https://tokenomist.ai/hyperliquid)  
21. Hyperliquid HYPE Token Unlocks, Vesting Schedule & Tokenomics | DropsTab, 檢索日期：1月 2, 2026， [https://dropstab.com/coins/hyperliquid/vesting](https://dropstab.com/coins/hyperliquid/vesting)  
22. Hyperliquid Puts $1B HYPE Tokens Up for Burn Vote \- TradingView, 檢索日期：1月 2, 2026， [https://www.tradingview.com/news/coinpedia:98492b3c7094b:0-hyperliquid-puts-1b-hype-tokens-up-for-burn-vote/](https://www.tradingview.com/news/coinpedia:98492b3c7094b:0-hyperliquid-puts-1b-hype-tokens-up-for-burn-vote/)  
23. Hyperliquid Validators Vote on $1B HYPE Token Fund Status | CoinMarketCap, 檢索日期：1月 2, 2026， [https://coinmarketcap.com/academy/article/hyperliquid-validators-vote-1b-hype-fund-status](https://coinmarketcap.com/academy/article/hyperliquid-validators-vote-1b-hype-fund-status)  
24. A Risk & Return Analysis of Hyperliquid's HLP Vault | by Geronimo | Medium, 檢索日期：1月 2, 2026， [https://medium.com/@RyskyGeronimo/a-risk-return-analysis-of-hyperliquids-hlp-vault-7c164cd00a0d](https://medium.com/@RyskyGeronimo/a-risk-return-analysis-of-hyperliquids-hlp-vault-7c164cd00a0d)  
25. Hyperliquid (HYPE): S1 2025 Activity Report | OAK Research, 檢索日期：1月 2, 2026， [https://oakresearch.io/en/reports/protocols/hyperliquid-hype-s1-2025-activity-report](https://oakresearch.io/en/reports/protocols/hyperliquid-hype-s1-2025-activity-report)  
26. Hyperliquid vs dYdX: How This Decentralized Futures Platform Captured 60% Market Share, 檢索日期：1月 2, 2026， [https://www.okx.com/en-us/learn/hyperliquid-dydx-market-share](https://www.okx.com/en-us/learn/hyperliquid-dydx-market-share)  
27. Hyperliquid Denies $362M Risk Claims, Says Platform Is Fully Solvent \- CryptoPotato, 檢索日期：1月 2, 2026， [https://cryptopotato.com/hyperliquid-denies-362m-risk-claims-says-platform-is-fully-solvent/](https://cryptopotato.com/hyperliquid-denies-362m-risk-claims-says-platform-is-fully-solvent/)  
28. How to start trading \- Hyperliquid Docs \- GitBook, 檢索日期：1月 2, 2026， [https://hyperliquid.gitbook.io/hyperliquid-docs/onboarding/how-to-start-trading](https://hyperliquid.gitbook.io/hyperliquid-docs/onboarding/how-to-start-trading)  
29. How to Use Hyperliquid API \- Apidog, 檢索日期：1月 2, 2026， [https://apidog.com/blog/hyperliquid-api/](https://apidog.com/blog/hyperliquid-api/)  
30. Send Limits and Fees \- MaiCoin, 檢索日期：1月 2, 2026， [https://www.maicoin.com/docs/fees-limits/transfers](https://www.maicoin.com/docs/fees-limits/transfers)  
31. 提領加密貨幣（USDT）教學– 說明中心 \- Rybit 終止服務, 檢索日期：1月 2, 2026， [https://www.rybit.com/blog/withdraw\_usdt/](https://www.rybit.com/blog/withdraw_usdt/)  
32. 費率說明 \- Rybit 終止服務, 檢索日期：1月 2, 2026， [https://www.rybit.com/blog/fees/](https://www.rybit.com/blog/fees/)  
33. Bridge2 \- Hyperliquid Docs \- GitBook, 檢索日期：1月 2, 2026， [https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/bridge2](https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/bridge2)  
34. 2025最新》虛擬貨幣報稅怎麼算？加密貨幣節稅方法？附律師見解 \- 加密城市, 檢索日期：1月 2, 2026， [https://www.cryptocity.tw/news/2024-cryptocurrency-tax-filing-income](https://www.cryptocity.tw/news/2024-cryptocurrency-tax-filing-income)  
35. 台灣加密貨幣報稅攻略2025｜虛擬貨幣獲利需要報稅繳稅嗎？ \- 每日幣研, 檢索日期：1月 2, 2026， [https://cryptowesearch.com/articles/cryptocurrency-taiwan-tax](https://cryptowesearch.com/articles/cryptocurrency-taiwan-tax)  
36. A Hyperliquid Analysis \- Medium, 檢索日期：1月 2, 2026， [https://medium.com/@stevescryptocorner/a-hyperliquid-analysis-7b5787f98238](https://medium.com/@stevescryptocorner/a-hyperliquid-analysis-7b5787f98238)  
37. Cross-Chain Transfer Mechanism in Hyperliquid: Architecture and Proxy Design \- Medium, 檢索日期：1月 2, 2026， [https://medium.com/@gwrx2005/cross-chain-transfer-mechanism-in-hyperliquid-architecture-and-proxy-design-b3179e636ec7](https://medium.com/@gwrx2005/cross-chain-transfer-mechanism-in-hyperliquid-architecture-and-proxy-design-b3179e636ec7)  
38. Analysis of the Top 10 HyperLiquid vaults, and what quality returns mean \- Medium, 檢索日期：1月 2, 2026， [https://medium.com/@growi.fi/analysis-of-the-top-10-hyperliquid-vaults-and-what-quality-returns-mean-245fc1f5d2be](https://medium.com/@growi.fi/analysis-of-the-top-10-hyperliquid-vaults-and-what-quality-returns-mean-245fc1f5d2be)  
39. The Great Whale Slap: How a Whale Offloaded $4M in Losses to Hyperliquid's HLP Vault, 檢索日期：1月 2, 2026， [https://www.wisdomtreeprime.com/blog/the-great-whale-slap-how-a-whale-offloaded-4m-in-losses-to-hyperliquids-hlp-vault/](https://www.wisdomtreeprime.com/blog/the-great-whale-slap-how-a-whale-offloaded-4m-in-losses-to-hyperliquids-hlp-vault/)