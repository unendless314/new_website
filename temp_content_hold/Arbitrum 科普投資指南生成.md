# **Arbitrum (ARB) 深度投資研報：以太坊擴容霸主的技術護城河、經濟模型轉型與台灣市場指南**

報告日期：2026年1月  
報告類型：深度投資研究 / 基礎設施與 DeFi 分析  
目標受眾：加密貨幣投資者、區塊鏈開發者、台灣理財大眾

## ---

**1\. 執行摘要 (Executive Summary)**

在區塊鏈技術邁向大規模採用的關鍵十年中，以太坊（Ethereum）作為智能合約的結算層，其擴容問題一直是行業的核心矛盾。Arbitrum，作為由 Offchain Labs 開發的 Optimistic Rollup 擴容方案，在 2023 年至 2025 年間成功確立了其在 Layer 2 (L2) 賽道中的統治地位。截至 2025 年末，Arbitrum 不僅在總鎖倉價值（TVL）上持續領先，更在實際協議收入、活躍用戶數以及原生 DeFi 生態的繁榮度上展現出顯著的「護城河」效應。  
本報告旨在為台灣投資者提供一份詳盡的 Arbitrum 生態投資指南。我們將深入剖析 Arbitrum 如何通過 Nitro 技術堆棧、Stylus 升級以及 BOLD 協議構建技術壁壘；探討 ARB 代幣從單純的治理權向「質押收益（Real Yield）」資產轉型的投資邏輯，特別是近期通過的 Tally 質押提案對代幣經濟模型的重塑；並詳細解構其獨有的「真實收益」DeFi 生態。此外，針對台灣用戶，本報告提供了本地化的法幣出入金渠道分析、跨鏈橋接策略以及穩定幣（Native vs Bridged USDC）的操作風險提示。  
研究表明，儘管面臨 Optimism 超級鏈（Superchain）與 ZK-Rollups 的激烈競爭，Arbitrum 憑藉其在金融基礎設施上的先發優勢、技術上的 EVM+ 創新（Stylus）以及代幣經濟模型的優化，仍是目前最具基本面支撐的 L2 標的之一。

## ---

**2\. 宏觀背景：以太坊擴容戰局與 Layer 2 的必然性**

### **2.1 區塊鏈三難困境與 Rollup 的勝利**

以太坊主網（Layer 1）長期受困於「區塊鏈三難困境（Trilemma）」，即難以同時實現去中心化、安全性和可擴展性。在 2020 年至 2022 年的公鏈大戰中，Solana、Avalanche 等 Layer 1 試圖通過犧牲一定程度的去中心化來換取高性能，但以太坊堅持了以 Rollup 為中心的擴容路線圖（Rollup-centric Roadmap）。  
Rollup 的核心哲學是「鏈下執行，鏈上結算」。它將數千筆交易在 Layer 2 進行計算和打包，僅將壓縮後的交易數據（Calldata）或狀態根（State Root）發佈到以太坊主網。這種方式使得 L2 能夠繼承以太坊主網的安全性，同時大幅降低 Gas 費用。  
在 Rollup 的兩大技術流派——Optimistic Rollup（樂觀匯總）與 ZK-Rollup（零知識匯總）的競爭中，Arbitrum 選擇了前者。與 ZK-Rollup 需要生成複雜且計算密集的零知識證明不同，Optimistic Rollup 採用「無罪推定」原則，默認所有交易有效，僅在出現爭議時通過「欺詐證明（Fraud Proofs）」進行回滾和懲罰 1。這一策略使得 Arbitrum 在早期能夠以更低的工程難度實現與以太坊虛擬機（EVM）的完全兼容，從而迅速吸納了從 Layer 1 溢出的 DeFi 應用和資金，建立了早期的網絡效應。

### **2.2 EIP-4844 與 L2 經濟學的變革**

2024 年以太坊的「Dencun」升級（包含 EIP-4844）是 L2 發展史上的分水嶺。在此之前，L2 需要支付昂貴的費用將數據存儲在以太坊的 calldata 中。EIP-4844 引入了「Blob」交易類型，為 L2 提供了一種廉價的、臨時性的數據存儲空間。  
這一升級對 Arbitrum 的經濟模型產生了深遠影響：

1. **成本驟降**：Arbitrum 提交數據到 L1 的成本降低了 90% 以上，直接大幅提升了排序器（Sequencer）的利潤率 2。  
2. **競爭加劇**：成本的降低使得 L2 之間的費率差異縮小，競爭焦點從「誰更便宜」轉向了「誰的生態更豐富」和「誰的代幣更有價值」。

## ---

**3\. 技術護城河：從 Nitro 到 Stylus 的全棧解析**

Arbitrum 之所以能維持龍頭地位，並非僅靠先發優勢，更在於 Offchain Labs 團隊持續的技術迭代。其技術架構已經從早期的 Classic 演進為 Nitro，並正在向 Stylus 和 BOLD 邁進。

### **3.1 Nitro 堆棧：性能與兼容性的基石**

Arbitrum Nitro 是當前網絡運行的核心引擎。與早期版本不同，Nitro 直接編譯了 Geth（以太坊最主流的客戶端）的核心代碼，將其集成到 L2 節點軟件中。

* **Geth 核心集成**：這意味著 Arbitrum 的執行層與以太坊高度一致，開發者在遷移智能合約時幾乎無需修改代碼，極大降低了開發門檻 3。  
* **WASM 轉譯**：Nitro 將 Geth 的執行模塊編譯為 WebAssembly (WASM)。在發生爭議需要進行欺詐證明時，可以將執行過程在鏈上以 WASM指令的形式進行重放和驗證。這種設計使得正常的執行速度極快（Native 執行），而爭議解決又能保證精確性。

### **3.2 交互式欺詐證明 (Interactive Fraud Proofs)**

這是 Arbitrum 與 Optimism 等競爭對手最大的技術差異點，也是其安全性的核心。

* **二分法博弈 (Bisection Game)**：當驗證者對某個區塊的狀態根提出挑戰時，Arbitrum 不會在以太坊上重跑整個區塊（這會消耗極高的 Gas，甚至超過區塊 Gas 上限）。相反，它啟動一個交互式協議。挑戰雙方通過多輪交互，不斷將爭議範圍二分（把 N 個指令切分為 N/2），直到雙方在單個計算步驟（Single Instruction）上產生分歧 4。  
* **單步執行**：最後，以太坊主網的智能合約只需執行這一個指令，即可裁決誰對誰錯。這種機制極大地降低了鏈上裁決的成本，並提高了系統能處理的交易復雜度上限。

### **3.3 BOLD 協議：去中心化驗證的終局**

長期以來，Optimistic Rollup 面臨「驗證者白名單」的批評。如果完全開放驗證，惡意攻擊者可以通過發起大量無效挑戰（DoS 攻擊）來延遲網絡結算。

* **BOLD (Bounded Liquidity Delay)**：這是 Arbitrum 為解決此問題推出的創新協議。BOLD 允許任何人無許可地（Permissionless）成為驗證者。它引入了一種新的爭議解決模式，允許一個誠實的驗證者同時對抗多個惡意挑戰者 6。  
* **確定性延遲**：BOLD 通過算法保證，無論攻擊者投入多少資金進行挑戰，爭議解決的時間都有一個固定的上限（約 6.4 天），且誠實方必勝 7。這標誌著 Arbitrum 即將完成從「輔助輪」階段向完全去中心化 Rollup 的跨越，預計在 2025 年全面成熟。

### **3.4 Stylus：EVM+ 與多語言支持**

**Stylus** 是 Arbitrum 最具野心的技術升級，被稱為「EVM+」。

* **多語言智能合約**：傳統以太坊開發受限於 Solidity 語言。Stylus 引入了第二個與 EVM 並行的 WASM 虛擬機，允許開發者使用 **Rust、C++、C** 等高性能語言編寫智能合約 8。  
* **互操作性**：Stylus 合約與 Solidity 合約可以無縫交互。Solidity 合約可以調用 Rust 編寫的高性能庫，Rust 合約也可以調用現有的 Uniswap 池子。  
* **性能與成本**：WASM 合約的執行效率遠高於 EVM 字節碼。根據官方文檔，Stylus 可以將內存使用成本降低 100-500 倍 10。這對於需要大量計算的應用（如鏈上密碼學驗證、高頻交易算法、復雜遊戲邏輯）是革命性的突破。對於擁有數百萬 C++/Rust 開發者的 Web2 世界而言，Stylus 是進入 Web3 的最佳入口。

### **3.5 Timeboost：交易排序的貨幣化**

**Timeboost** 是 Arbitrum 推出的一種新的交易排序機制，旨在規範化 MEV（最大可提取價值）並增加協議收入。

* **機制**：它允許用戶支付額外費用以獲得交易的優先快速處理權（約 200 毫秒的加速優勢）。這對於套利機器人和做市商至關重要 11。  
* **收入歸屬**：Timeboost 產生的收入預計將相當可觀（數據顯示僅上線初期就產生了數百萬美元收入），並且這部分收入將歸屬於 DAO 或通過銷毀/分紅回饋給代幣持有者，而非被底層礦工提取 12。

## ---

**4\. 產品矩陣：One, Nova 與 Orbit 的三駕馬車**

Arbitrum 並非單一的區塊鏈，而是一個產品矩陣，針對不同的市場需求進行了精細化分層。

### **4.1 Arbitrum One：金融資產的堡壘**

* **定位**：核心主網，完全繼承以太坊安全性。所有交易數據發佈在 L1。  
* **適用場景**：DeFi (Uniswap, Aave, GMX)、算法穩定幣、藍籌 NFT。這是目前 TVL 和交易量最集中的地方，也是「以太坊 L2 龍頭」稱號的實際承載者 14。  
* **優勢**：安全性最高，去中心化程度最高，適合承載數十億美元級別的資金。

### **4.2 Arbitrum Nova：高頻交互的試驗場**

* **定位**：基於 **AnyTrust** 技術的側鏈/Rollup 混合體。  
* **數據可用性 (DA)**：Nova 將數據存儲在鏈下的「數據可用性委員會 (DAC)」中，只有在 DAC 失效時才回退到以太坊 L1。這種設計繞過了以太坊昂貴的數據存儲成本 14。  
* **成本**：Gas 費用極低（通常在 $0.01 以下），TPS 極高。  
* **適用場景**：GameFi、SocialFi（如 Reddit 的社群積分系統遷移至此）、高頻微支付。  
* **投資啟示**：雖然 Nova 的 TVL 不如 One，但其交易筆數（Tx Count）往往更高，是 Arbitrum 捕獲 Web3 大規模用戶（Mass Adoption）的關鍵抓手。

### **4.3 Arbitrum Orbit：Layer 3 的定製化未來**

面對 Optimism 推出的 OP Stack 超級鏈戰略，Arbitrum 推出了 **Orbit**。

* **定義**：允許開發者基於 Arbitrum One 或 Nova 構建自己的專屬鏈（Layer 3）。  
* **定製化**：開發者可以自定義 Gas 代幣（例如使用自己的遊戲代幣作為 Gas）、隱私設置、治理模式，甚至選擇數據可用性層（如 Celestia）3。  
* **經濟模型**：根據「Arbitrum 擴展計劃 (AEP)」，構建在 Orbit 上的 L3 鏈若結算到以太坊，需要向 Arbitrum DAO 繳納一定比例的收入（例如 10% 的協議淨收入）15。這為 ARB 代幣持有者創造了潛在的長期現金流，將 Arbitrum 從一條鏈變成了一個生態系統的底層結算層。

**表 1：Arbitrum 產品矩陣對比**

| 特性 | Arbitrum One | Arbitrum Nova | Arbitrum Orbit (L3) |
| :---- | :---- | :---- | :---- |
| **技術架構** | Optimistic Rollup | AnyTrust (DAC) | 基於 Nitro 的定製鏈 |
| **數據可用性** | Ethereum L1 (On-chain) | DAC (Off-chain) | 可配置 (L2, Celestia, DAC) |
| **安全性** | 以太坊級別 | 依賴 DAC 信任假設 | 繼承自結算層 (One/Nova) |
| **Gas 成本** | 低 ($0.1-$0.5) | 極低 (\<$0.01) | 可自定義 (甚至免費) |
| **核心用例** | DeFi, 穩定幣 | 遊戲, 社交 | 專用應用鏈 (AppChain) |

## ---

**5\. ARB 代幣經濟學：從治理向收益的關鍵轉折**

對於投資者而言，ARB 代幣的價值捕獲能力一直是爭議的焦點。長期以來，L2 代幣被視為「無用的治理幣」，因為網絡 Gas 費是用 ETH 支付的。然而，隨著 2024-2025 年的一系列提案，這一邏輯正在發生質變。

### **5.1 代幣基礎與解鎖懸崖**

* **總供應量**：100 億枚 ARB。  
* **初始分配**：約 42.78% 歸屬 DAO 國庫，26.94% 歸屬團隊與顧問，17.53% 歸屬投資者，11.62% 用於空投，1.13% 給予生態 DAO 16。  
* **解鎖衝擊**：  
  * 2024 年 3 月 16 日發生了巨大的懸崖解鎖（Cliff Unlock），釋放了超過 11 億枚代幣給團隊和投資者 17。  
  * 此後進入線性解鎖階段，每月約有 9000 萬至 1 億枚 ARB 進入流通。  
  * **2025 年關鍵節點**：投資者需密切關注 **2025 年 1 月 16 日** 和 **8 月 16 日** 的大額解鎖事件，歷史數據顯示這類事件前後往往伴隨價格波動 18。

### **5.2 治理結構與 DAO**

Arbitrum DAO 是目前加密世界最活躍、最富有的 DAO 之一。它不僅管理著巨額的國庫資金，還通過選舉產生的「安全委員會（Security Council）」擁有對鏈上合約進行緊急升級的權力（如應對漏洞）。這種「憲法」治理架構被視為行業標杆。

### **5.3 價值捕獲革命：質押與費用開關 (The Staking Proposal)**

這是 ARB 投資邏輯的核心轉折點。

* **背景**：Arbitrum 排序器通過向用戶收取 L2 費用並支付 L1 成本，產生了可觀的利潤（Surplus Fees）。早期這些利潤僅積累在 DAO 國庫中。  
* **Tally 提案**：2024 年下半年，治理平台 Tally 提出並推動通過了一項關鍵提案——**開啟 ARB 質押並分配排序器收入** 20。  
* **機制詳情**：  
  1. **質押代幣 (stARB)**：用戶將 ARB 質押到合約中，獲得流動性代幣 stARB。  
  2. **收益來源**：提案批准將**未來排序器產生的剩餘費用（Sequencer Surplus Fees）的 50%** 分配給質押者 22。此外，Timeboost 產生的 MEV 收入也計劃納入分配池 13。  
  3. **治理權保留**：stARB 採用 Tally 的流動性治理架構，用戶在享受收益的同時，仍可保留投票權或將其委託給代表 23。  
* **收益率預估**：根據提案時的網絡收入測算，若分配 50% 利潤，ARB 質押的年化收益率（APY）可能在 **7% \- 8%** 左右 24。  
* **投資意義**：這標誌著 ARB 從「純治理代幣」轉型為「收益型資產（Yield-bearing Asset）」。這相當於股票的回購分紅，為代幣提供了基於現金流的估值底部（P/E Ratio）。這對於機構投資者極具吸引力。

## ---

**6\. 生態系統：原生 DeFi 與真實收益 (Real Yield)**

Arbitrum 的生態並非以太坊的簡單複製，它孕育了一批具有原創性的「Arbitrum Native」協議，這些協議定義了「真實收益」的敘事——即收益來源於實際的業務收入（交易手續費），而非單純的代幣通脹。

### **6.1 GMX：衍生品賽道的王者**

GMX 是 Arbitrum 生態的基石，是一個去中心化永續合約交易所。

* **GLP 機制**：GMX V1 創造了 GLP（流動性池代幣），用戶存入 ETH/USDC 成為交易者的對手方。若交易者虧損，GLP 持有者獲利。  
* **真實收益**：GMX 將平台手續費的 30% 分給 GMX 質押者，70% 分給 GLP 持有者，且以 **ETH** 形式發放。這種模式吸引了大量尋求穩健收益的資金 25。  
* **V2 升級**：GMX V2 引入了隔離池和更低的費率，進一步鞏固了其相對於 Synthetix 或 dYdX 的競爭力。儘管面臨來自 Hyperliquid 等新興對手的挑戰，GMX 在 Arbitrum 上的流動性深度依然是統治級的 26。

### **6.2 Pendle Finance：利率互換的革命**

Pendle 允許用戶將生息資產（如 stETH, GLP）拆分為本金代幣 (PT) 和收益代幣 (YT)。

* **LRT 浪潮**：在 2024-2025 年的流動性再質押（Liquid Restaking）熱潮中，Pendle 成為了核心樞紐。用戶可以通過購買 YT 來槓桿化積分或收益，或者購買 PT 來鎖定固定收益。  
* **數據表現**：Pendle 在 Arbitrum 上的 TVL 和交易量常年位居前列，展示了 Arbitrum 作為高階 DeFi 樂園的屬性 28。

### **6.3 Camelot (GRAIL)：生態流動性發動機**

Camelot 是 Arbitrum 原生的 DEX，採用雙代幣模型 (GRAIL/xGRAIL)。

* **Launchpad**：它不僅是交易所，更是新項目在 Arbitrum 上發行的首選平台。  
* **插件系統**：xGRAIL 持有者可以通過插件系統獲得分紅或加速收益。Camelot 通過與生態項目的深度綁定（如為 GMX 或 Jones DAO 提供激勵），成為了生態的流動性中樞 30。

### **6.4 STIP 與激勵計劃 (Incentive Programs)**

Arbitrum DAO 通過短期激勵計劃（STIP）向生態項目分發了數千萬枚 ARB。

* **效果分析**：數據顯示，STIP 顯著提升了活躍用戶數（增長 29%）和交易量（增長 47%），且相比直接空投更具成本效益 32。這證明了 DAO 具備有效運用國庫資金刺激生態增長的能力。

## ---

**7\. 財務健康度分析**

投資者應像分析上市公司財報一樣分析 L2 的財務狀況。

* **收入來源**：Arbitrum 的收入主要來自用戶支付的 L2 Gas 費用（ETH）。  
* **成本結構**：主要成本是向以太坊 L1 支付的數據發佈費用。  
* **利潤表現**：  
  * 在 Dencun 升級前，Arbitrum 的利潤率受到 L1 Gas 波動的影響較大。  
  * 升級後，數據成本大幅下降，利潤率顯著提升。  
  * **具體數據**：根據 DefiLlama 和 Dune Analytics 的數據，2025 年 Arbitrum 的月度協議收入保持在數百萬美元級別（例如 2025 年 10 月單月營收約 450 萬美元），Timeboost 功能上線後也貢獻了數百萬美元的額外收入 12。  
  * **國庫儲備**：Arbitrum DAO 擁有價值數十億美元的資產（主要是 ARB 和 ETH），這為其長期的生態激勵和技術開發提供了充足的「彈藥」36。

**表 2：Arbitrum 財務指標概覽 (2025 預估)**

| 指標 | 數值範圍 | 備註 |
| :---- | :---- | :---- |
| **月度協議收入** | $3M \- $5M | 來源於 Gas 差價與 Timeboost |
| **年度化利潤** | $30M \- $50M | 扣除 L1 成本後的淨利潤 |
| **DAO 國庫資產** | \> $20 億 | 包含 ARB 與累積的 ETH |
| **Timeboost 收入** | \> $500 萬 (YTD) | 排序器優先費收入 |

## ---

**8\. 台灣投資者實戰指南 (Taiwan Investor Guide)**

針對台灣的一般理財大眾，如何安全、低成本地參與 Arbitrum 生態是關鍵。以下是具體的操作指引。

### **8.1 法幣出入金渠道 (Fiat On/Off Ramps)**

台灣投資者可以直接使用本地合規交易所進行新台幣（TWD）與 Arbitrum 鏈上資產的兌換，無需經過以太坊主網，從而節省高昂的跨鏈費用。

#### **8.1.1 MAX 交易所 (MaiCoin Group)**

* **支持情況**：MAX 是台灣流動性最好的交易所之一。截至 2025 年，MAX 已經支持 **Arbitrum One 網絡的 USDT 與 ETH 直接充提** 37。  
* **操作建議**：用戶在提現 USDT 或 ETH 時，務必在網絡選項中選擇「Arbitrum One (ARB)」。這通常是免手續費或手續費極低的。  
* **注意事項**：2025 年 2 月，MAX 曾因應 Arbitrum BOLD 升級暫停充提服務，用戶在操作前應檢查交易所的最新公告 39。

#### **8.1.2 BitoPro (幣託)**

* **支持情況**：BitoPro 也支持 ETH 和 USDT 的多鏈充提。用戶需在提現界面確認是否包含 Arbitrum 選項。BitoPro 的優勢在於其與全家便利商店的合作，方便法幣入金 40。

#### **8.1.3 Rybit (警示)**

* **風險提示**：Rybit 交易所已於 2024 年 8 月宣佈終止所有虛擬貨幣業務。投資者切勿再嘗試使用該平台，並應警惕任何冒充該平台的詐騙信息 41。

### **8.2 跨鏈橋接策略 (Bridging Strategy)**

如果你已經持有資產在以太坊主網或其他 L2，需要跨鏈到 Arbitrum，有以下兩種選擇：

#### **8.2.1 官方橋 (Arbitrum Native Bridge)**

* **特點**：最安全，由官方合約控制。  
* **缺點**：**提現（從 Arbitrum 回以太坊）需要等待約 7 天的挑戰期（Challenge Period）**。這是 Optimistic Rollup 的機制決定的，資金在此期間會被鎖定 42。  
* **適用人群**：超大額資金（百萬美元級）、對安全性要求極高且不急需流動性的機構用戶。

#### **8.2.2 第三方跨鏈橋 (Across, Hop, Synapse)**

* **推薦**：**Across Protocol**。  
* **原理**：Across 採用基於意圖（Intents-based）的架構，由中繼者（Relayers）代墊資金，用戶可以實現**幾分鐘內到賬**，且費用極低 44。  
* **對比**：相比 Hop 或 Synapse，Across 在 2024-2025 年的測試中展現了更優的成本效益和速度。  
* **適用人群**：絕大多數普通散戶和 DeFi 玩家。

### **8.3 穩定幣的選擇：Native USDC vs. Bridged USDC**

在 Arbitrum 上存在兩種 USDC，新手極易混淆，需特別注意。

* **Bridged USDC (USDC.e)**：  
  * **來源**：早期通過官方橋從以太坊跨鏈過來的 USDC。  
  * **合約地址**：通常以 0xff97 開頭。  
  * **現狀**：雖然仍被廣泛使用，但 Circle 和 Arbitrum 官方正在引導流動性遷移至原生版。  
* **Native USDC (USDC)**：  
  * **來源**：由 Circle 官方在 Arbitrum 上直接發行。  
  * **合約地址**：以 0xaf88 開頭。  
  * **優勢**：支持 **CCTP (Cross-Chain Transfer Protocol)**，可以與以太坊、Base、Solana 等鏈上的原生 USDC 進行 1:1 無滑點、無橋接風險的互換 45。  
  * **交易所支持**：目前主流交易所（如幣安、MAX、MEXC）的充提主要支持 Native USDC。**若將 USDC.e 充值到僅支持 Native USDC 的交易所地址，可能會導致資產丟失** 47。  
* **操作指南**：在使用 DEX（如 Uniswap, Camelot）或借貸協議時，務必看清資產代碼。若持有 USDC.e，可通過 Uniswap 兌換為 Native USDC。

## ---

**9\. 風險評估與投資總結**

### **9.1 潛在風險**

1. **排序器中心化 (Centralization)**：雖然 BOLD 協議推進了驗證的去中心化，但目前的排序器（負責交易排序）仍由官方控制。理論上存在單點故障或審查風險 48。官方路線圖計劃在 2026 年前後實現排序器去中心化 49。  
2. **競爭風險**：Optimism 的 Superchain 戰略吸引了 Coinbase (Base) 和 Worldcoin，Base 的活躍度在 2025 年甚至一度超越 Arbitrum。此外，ZK-Rollup 技術的成熟長期來看可能在安全性上超越 Optimistic Rollup。  
3. **代幣解鎖**：儘管最猛烈的懸崖解鎖已過，但每月持續的線性解鎖仍會帶來二級市場的拋壓。

### **9.2 總結**

Arbitrum 在 2025 年依然是 Layer 2 領域的絕對領跑者。它擁有最強大的 DeFi 生態、最健康的協議收入以及最明確的代幣價值捕獲路徑（質押分紅）。  
對於台灣投資者而言，ARB 代幣不僅是押注以太坊擴容賽道的 Beta 收益工具，隨著質押機制的上線，它正轉變為能夠產生現金流的 Alpha 資產。建議投資者關注 **Tally 質押系統的上線進度**、**原生 USDC 的生態佔比** 以及 **Orbit L3 鏈的擴張情況**，作為長期持有的判斷依據。  
---

*免責聲明：本報告僅供教育與研究用途，不構成任何財務建議。加密貨幣市場波動劇烈，投資請務必做好風險管理。*

#### **引用的著作**

1. A Comprehensive Guide to Arbitrum and its Security Features \- Halborn, 檢索日期：1月 2, 2026， [https://www.halborn.com/blog/post/a-comprehensive-guide-to-arbitrum-and-its-security-features](https://www.halborn.com/blog/post/a-comprehensive-guide-to-arbitrum-and-its-security-features)  
2. Best Data Availability Options in Arbitrum Orbit Rollup Providers (and Why Zeeve RaaS Stands Out) \- Medium, 檢索日期：1月 2, 2026， [https://medium.com/@Zeeve/best-data-availability-options-in-arbitrum-orbit-rollup-providers-and-why-zeeve-raas-stands-out-35d384a7338b](https://medium.com/@Zeeve/best-data-availability-options-in-arbitrum-orbit-rollup-providers-and-why-zeeve-raas-stands-out-35d384a7338b)  
3. A gentle introduction: Arbitrum chains, 檢索日期：1月 2, 2026， [https://docs.arbitrum.io/launch-arbitrum-chain/a-gentle-introduction](https://docs.arbitrum.io/launch-arbitrum-chain/a-gentle-introduction)  
4. 檢索日期：1月 2, 2026， [https://www.cube.exchange/what-is/fraud-proof\#:\~:text=Arbitrum%20uses%20an%20interactive%20bisection,L1%20computation%20while%20enforcing%20correctness.](https://www.cube.exchange/what-is/fraud-proof#:~:text=Arbitrum%20uses%20an%20interactive%20bisection,L1%20computation%20while%20enforcing%20correctness.)  
5. What is Fraud Proof? Definition, How It Works, Benefits & Risks | Cube Exchange, 檢索日期：1月 2, 2026， [https://www.cube.exchange/what-is/fraud-proof](https://www.cube.exchange/what-is/fraud-proof)  
6. A gentle introduction: BoLD \- Arbitrum Docs, 檢索日期：1月 2, 2026， [https://docs.arbitrum.io/how-arbitrum-works/bold/gentle-introduction](https://docs.arbitrum.io/how-arbitrum-works/bold/gentle-introduction)  
7. BoLD: a technical deep dive | Arbitrum Docs, 檢索日期：1月 2, 2026， [https://docs.arbitrum.io/how-arbitrum-works/bold/bold-technical-deep-dive](https://docs.arbitrum.io/how-arbitrum-works/bold/bold-technical-deep-dive)  
8. A gentle introduction to Stylus \- Arbitrum Docs, 檢索日期：1月 2, 2026， [https://docs.arbitrum.io/stylus/gentle-introduction](https://docs.arbitrum.io/stylus/gentle-introduction)  
9. Unlocking Performance: Writing a Stylus Contract in Rust for Arbitrum \- Medium, 檢索日期：1月 2, 2026， [https://medium.com/@marcellusv2/unlocking-performance-writing-a-stylus-contract-in-rust-for-arbitrum-916cbe691392](https://medium.com/@marcellusv2/unlocking-performance-writing-a-stylus-contract-in-rust-for-arbitrum-916cbe691392)  
10. Arbitrum Stylus: The Tangible Competitive Edge Your Rollups Badly Need \- Zeeve, 檢索日期：1月 2, 2026， [https://www.zeeve.io/blog/arbitrum-stylus-the-tangible-competitive-edge-your-rollups-badly-need/](https://www.zeeve.io/blog/arbitrum-stylus-the-tangible-competitive-edge-your-rollups-badly-need/)  
11. The Sequencer and Censorship Resistance \- Arbitrum Docs, 檢索日期：1月 2, 2026， [https://docs.arbitrum.io/how-arbitrum-works/deep-dives/sequencer](https://docs.arbitrum.io/how-arbitrum-works/deep-dives/sequencer)  
12. Arbitrum Timeboost \- DefiLlama, 檢索日期：1月 2, 2026， [https://defillama.com/protocol/arbitrum-timeboost](https://defillama.com/protocol/arbitrum-timeboost)  
13. Follow Up \-- DAO Income Sources and The Path to Staking \- Arbitrum Governance Forum, 檢索日期：1月 2, 2026， [https://forum.arbitrum.foundation/t/follow-up-dao-income-sources-and-the-path-to-staking/26447](https://forum.arbitrum.foundation/t/follow-up-dao-income-sources-and-the-path-to-staking/26447)  
14. Arbitrum One vs. Arbitrum Nova: Layer-2 Solutions Compared \- BeInCrypto, 檢索日期：1月 2, 2026， [https://beincrypto.com/learn/arbitrum-one-vs-arbitrum-nova/](https://beincrypto.com/learn/arbitrum-one-vs-arbitrum-nova/)  
15. Arbitrum Ecosystem Revenue From Orbit Chains, 檢索日期：1月 2, 2026， [https://dune.com/lamprosdao/arbitrum-ecosystem-revenue-from-orbit-chains](https://dune.com/lamprosdao/arbitrum-ecosystem-revenue-from-orbit-chains)  
16. TOKEN COMPARISON: OP vs ARB 1\. OP Token | spot mini on Binance Square, 檢索日期：1月 2, 2026， [https://www.binance.com/en/square/post/26978578020066](https://www.binance.com/en/square/post/26978578020066)  
17. Arbitrum to Unlock $2 Billion in ARB Tokens to Offchain Labs on Saturday, 檢索日期：1月 2, 2026， [https://unchainedcrypto.com/arbitrum-to-unlock-2-billion-in-arb-tokens-to-offchain-labs-on-saturday/](https://unchainedcrypto.com/arbitrum-to-unlock-2-billion-in-arb-tokens-to-offchain-labs-on-saturday/)  
18. Arbitrum (ARB) \- 92.65MM Token Unlock \- 16 Aug 2025 — TradingView News, 檢索日期：1月 2, 2026， [https://www.tradingview.com/news/coinmarketcal:49efe7433094b:0-arbitrum-arb-92-65mm-token-unlock-16-aug-2025/](https://www.tradingview.com/news/coinmarketcal:49efe7433094b:0-arbitrum-arb-92-65mm-token-unlock-16-aug-2025/)  
19. RISK WARNING: BIG UNLOCK OF ARB AND APT TOKENS IN JANUARY 2025 – INVESTORS SHOULD BE AWARE | Anh\_ba\_Cong on Binance Square, 檢索日期：1月 2, 2026， [https://www.binance.com/en/square/post/18620299637714](https://www.binance.com/en/square/post/18620299637714)  
20. Arbitrum | ARB Staking: Unlock ARB Utility and Align Governance \- Tally.xyz, 檢索日期：1月 2, 2026， [https://www.tally.xyz/gov/arbitrum/proposal/52793687237294107439411688810483120161857085958258363826553939061522164665920](https://www.tally.xyz/gov/arbitrum/proposal/52793687237294107439411688810483120161857085958258363826553939061522164665920)  
21. Arbitrum DAO votes to launch staking as $50M ARB tokens flood the market \- CryptoSlate, 檢索日期：1月 2, 2026， [https://cryptoslate.com/arbitrum-dao-votes-to-launch-staking-as-50m-arb-tokens-flood-the-market/](https://cryptoslate.com/arbitrum-dao-votes-to-launch-staking-as-50m-arb-tokens-flood-the-market/)  
22. New ARB Staking Mechanism Will Reward Holders With 50% | TopCryptoNews on Binance Square, 檢索日期：1月 2, 2026， [https://www.binance.com/en/square/post/9911146678458](https://www.binance.com/en/square/post/9911146678458)  
23. ARB Staking: Unlock ARB Utility and Align Governance \- Finalized AIPs \- Arbitrum, 檢索日期：1月 2, 2026， [https://forum.arbitrum.foundation/t/arb-staking-unlock-arb-utility-and-align-governance/25084](https://forum.arbitrum.foundation/t/arb-staking-unlock-arb-utility-and-align-governance/25084)  
24. Proposal: Launch Native $ARB Staking at ≈ 8% APY \- Arbitrum Governance Forum, 檢索日期：1月 2, 2026， [https://forum.arbitrum.foundation/t/proposal-launch-native-arb-staking-at-8-apy/29399](https://forum.arbitrum.foundation/t/proposal-launch-native-arb-staking-at-8-apy/29399)  
25. Observing GMX & GLP Patterns on Avalanche | by jp12 \- Medium, 檢索日期：1月 2, 2026， [https://jp12.medium.com/observing-gmx-glp-patterns-on-avalanche-6760f9b1851b](https://jp12.medium.com/observing-gmx-glp-patterns-on-avalanche-6760f9b1851b)  
26. GMX: Revolutionizing DeFi with Layer 2 Scaling, Governance, and Liquidity Innovation In 2025 \- TheStandard.io, 檢索日期：1月 2, 2026， [https://www.thestandard.io/blog/gmx-revolutionizing-defi-with-layer-2-scaling-governance-and-liquidity-innovation-in-2025-5](https://www.thestandard.io/blog/gmx-revolutionizing-defi-with-layer-2-scaling-governance-and-liquidity-innovation-in-2025-5)  
27. What is GMX V2? | Exponential DeFi, 檢索日期：1月 2, 2026， [https://exponential.fi/protocols/gmx-v2/b0e05956-de9e-4fd0-a6a4-d45828f8a4e7](https://exponential.fi/protocols/gmx-v2/b0e05956-de9e-4fd0-a6a4-d45828f8a4e7)  
28. Top Crypto Projects in the Arbitrum Ecosystem | Learn \- KuCoin, 檢索日期：1月 2, 2026， [https://www.kucoin.com/learn/crypto/top-crypto-projects-in-arbitrum-ecosystem](https://www.kucoin.com/learn/crypto/top-crypto-projects-in-arbitrum-ecosystem)  
29. What Is Pendle Finance? A Beginner's Guide to Tokenized Yield | CoinGecko, 檢索日期：1月 2, 2026， [https://www.coingecko.com/learn/pendle](https://www.coingecko.com/learn/pendle)  
30. What is Camelot? | Exponential DeFi, 檢索日期：1月 2, 2026， [https://exponential.fi/protocols/camelot/6aac0d68-aee2-4c91-abf6-7bfe02b2594f](https://exponential.fi/protocols/camelot/6aac0d68-aee2-4c91-abf6-7bfe02b2594f)  
31. Introducing Camelot: the ecosystem-centric Arbitrum DEX, 檢索日期：1月 2, 2026， [https://camelotdex.medium.com/camelot-dex-general-overview-af92f1e6f186](https://camelotdex.medium.com/camelot-dex-general-overview-af92f1e6f186)  
32. Analyzing STIP and LTIPP Incentive Programs at Arbitrum \- StableLab, 檢索日期：1月 2, 2026， [https://stablelab.xyz/blog/analyzing-stip-and-ltipp-incentive-programs-at-arbitrum](https://stablelab.xyz/blog/analyzing-stip-and-ltipp-incentive-programs-at-arbitrum)  
33. Arbitrum Key Metrics Grow by 25%+ Following Incentive Program \- Medium, 檢索日期：1月 2, 2026， [https://medium.com/sentora/arbitrum-key-metrics-grow-by-25-following-incentive-program-9aa0954bfeac](https://medium.com/sentora/arbitrum-key-metrics-grow-by-25-following-incentive-program-9aa0954bfeac)  
34. Myth or Fact: Arbitrum's Revenue YTD Exceeds $21M Dominated | KuCoin, 檢索日期：1月 2, 2026， [https://www.kucoin.com/news/insight/ETH/69479f65e090b600074eb0f0](https://www.kucoin.com/news/insight/ETH/69479f65e090b600074eb0f0)  
35. Arbitrum's 2025 Inflows and Fundamentals May Signal ARB Price Rebound Near $0.19 | MEXC News, 檢索日期：1月 2, 2026， [https://www.mexc.com/en-NG/news/365211](https://www.mexc.com/en-NG/news/365211)  
36. Arbitrum DAO: Financials, 檢索日期：1月 2, 2026， [https://dune.com/entropy\_advisors/arbitrum-dao-financials](https://dune.com/entropy_advisors/arbitrum-dao-financials)  
37. 2024/03/19 MAX 支援Arbitrum 鏈USDT 接收和發送, 檢索日期：1月 2, 2026， [https://support.maicoin.com/zh-TW/support/solutions/articles/32000034642-2024-03-19-max-%E6%94%AF%E6%8F%B4-arbitrum-%E9%8F%88-usdt-%E6%8E%A5%E6%94%B6%E5%92%8C%E7%99%BC%E9%80%81](https://support.maicoin.com/zh-TW/support/solutions/articles/32000034642-2024-03-19-max-%E6%94%AF%E6%8F%B4-arbitrum-%E9%8F%88-usdt-%E6%8E%A5%E6%94%B6%E5%92%8C%E7%99%BC%E9%80%81)  
38. 2025/02/10 MAX Arbitrum 主網相關幣種入金確認數調升公告, 檢索日期：1月 2, 2026， [https://support.maicoin.com/zh-TW/support/solutions/articles/32000035631-2025-02-10-max-arbitrum-%E4%B8%BB%E7%B6%B2%E7%9B%B8%E9%97%9C%E5%B9%A3%E7%A8%AE%E5%85%A5%E9%87%91%E7%A2%BA%E8%AA%8D%E6%95%B8%E8%AA%BF%E5%8D%87%E5%85%AC%E5%91%8A](https://support.maicoin.com/zh-TW/support/solutions/articles/32000035631-2025-02-10-max-arbitrum-%E4%B8%BB%E7%B6%B2%E7%9B%B8%E9%97%9C%E5%B9%A3%E7%A8%AE%E5%85%A5%E9%87%91%E7%A2%BA%E8%AA%8D%E6%95%B8%E8%AA%BF%E5%8D%87%E5%85%AC%E5%91%8A)  
39. 2025/02/10 MAX Will Support Arbitrum BoLD, 檢索日期：1月 2, 2026， [https://support.maicoin.com/en/support/solutions/articles/32000035633-2025-02-10-max-will-support-arbitrum-bold](https://support.maicoin.com/en/support/solutions/articles/32000035633-2025-02-10-max-will-support-arbitrum-bold)  
40. 支援貨幣介紹- 幣託BitoPro 幫助中心主題, 檢索日期：1月 2, 2026， [https://support.bitopro.com/hc/zh-tw/sections/16275369617049-%E6%94%AF%E6%8F%B4%E8%B2%A8%E5%B9%A3%E4%BB%8B%E7%B4%B9](https://support.bitopro.com/hc/zh-tw/sections/16275369617049-%E6%94%AF%E6%8F%B4%E8%B2%A8%E5%B9%A3%E4%BB%8B%E7%B4%B9)  
41. 【 Rybit 終止服務】- 已完全終止所有虛擬貨幣相關業務服務– 說明中心, 檢索日期：1月 2, 2026， [https://www.rybit.com/blog/suspend-announcement/](https://www.rybit.com/blog/suspend-announcement/)  
42. Why wait 7 days to claim funds when bridge to Ethereum? \- Arbitrum Foundation, 檢索日期：1月 2, 2026， [https://support.arbitrum.io/hc/en-gb/articles/19478133076123-Why-wait-7-days-to-claim-funds-when-bridge-to-Ethereum](https://support.arbitrum.io/hc/en-gb/articles/19478133076123-Why-wait-7-days-to-claim-funds-when-bridge-to-Ethereum)  
43. How to Bridge ETH to Arbitrum? \- Exolix, 檢索日期：1月 2, 2026， [https://exolix.com/blog/how-to-bridge-eth-to-arbitrum](https://exolix.com/blog/how-to-bridge-eth-to-arbitrum)  
44. Arbitrum Bridge: Guide to Fast & Secure Bridging in 2025 \- Across Protocol, 檢索日期：1月 2, 2026， [https://across.to/blog/arbitrum-bridge-guide-across-fast-secure-bridging](https://across.to/blog/arbitrum-bridge-guide-across-fast-secure-bridging)  
45. USDC on Arbitrum One, 檢索日期：1月 2, 2026， [https://docs.arbitrum.io/arbitrum-bridge/usdc-arbitrum-one](https://docs.arbitrum.io/arbitrum-bridge/usdc-arbitrum-one)  
46. USDC vs USDC.e: Key Differences Between Native and Bridged USDC, 檢索日期：1月 2, 2026， [https://www.usdc.com/learn/whats-the-difference-between-usdc-and-usdce](https://www.usdc.com/learn/whats-the-difference-between-usdc-and-usdce)  
47. MEXC Will Support Deposits and Withdrawals of Native USDC on the Arbitrum One Network, 檢索日期：1月 2, 2026， [https://www.mexc.com/announcements/article/mexc-will-support-deposits-and-withdrawals-of-native-usdc-on-the-arbitrum-one-network-17827791509023](https://www.mexc.com/announcements/article/mexc-will-support-deposits-and-withdrawals-of-native-usdc-on-the-arbitrum-one-network-17827791509023)  
48. L2 Sequencers Today and Tomorrow: Decentralization and AI Combination | Bitium Blog, 檢索日期：1月 2, 2026， [https://blog.bitium.agency/l2-sequencers-today-and-tomorrow-decentralization-and-ai-combination-a8b4b6475caf](https://blog.bitium.agency/l2-sequencers-today-and-tomorrow-decentralization-and-ai-combination-a8b4b6475caf)  
49. Your Chain, Your Rules: Offchain Labs' Technical Roadmap to Fuel Arbitrum Innovation, 檢索日期：1月 2, 2026， [https://medium.com/offchainlabs/your-chain-your-rules-offchain-labs-technical-roadmap-to-fuel-arbitrum-innovation-f787f2e85966](https://medium.com/offchainlabs/your-chain-your-rules-offchain-labs-technical-roadmap-to-fuel-arbitrum-innovation-f787f2e85966)