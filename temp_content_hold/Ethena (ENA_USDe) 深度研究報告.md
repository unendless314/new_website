# **Ethena (ENA / USDe) 深度投資研究報告：合成美元的金融架構、收益來源與風險全景**

## **第一章：緒論——從穩定幣的三難困境到合成美元的誕生**

在加密貨幣市場的演進歷程中，穩定幣（Stablecoin）始終扮演著最關鍵的基礎設施角色。作為連接傳統法幣世界與區塊鏈金融（DeFi）的橋樑，穩定幣的總市值已突破 1,600 億美元，成為衡量加密經濟體活躍度的重要指標。然而，現有的穩定幣解決方案長期受困於著名的「穩定幣三難困境（The Stablecoin Trilemma）」，即難以同時兼顧去中心化（Decentralization）、價格穩定性（Stability）與資本效率（Capital Efficiency）。  
目前市場上的主導者 USDT 與 USDC 採用法幣儲備模式，雖然保證了價格穩定與資本效率（1:1 鑄造），但其中心化的本質引入了不可忽視的單點故障風險。矽谷銀行（Silicon Valley Bank）倒閉事件曾導致 USDC 短暫脫鉤，這凸顯了依賴傳統銀行體系的脆弱性。另一方面，以 MakerDAO 的 DAI 為代表的去中心化穩定幣，雖然實現了抗審查性，但其超額抵押機制（Over-collateralization）導致資本效率低下，限制了規模的擴張。至於曾試圖通過算法調節供應的 Terra (UST)，則因陷入死亡螺旋（Death Spiral）而崩盤，給市場留下了深刻的創傷。  
在此背景下，Ethena Labs 推出的 USDe 並非傳統意義上的穩定幣，而是一種全新的金融原語——「合成美元（Synthetic Dollar）」。其設計理念深受 BitMEX 創始人 Arthur Hayes 關於「中本聰美元（Nakamoto Dollar）」構想的啟發，試圖構建一種不依賴傳統銀行體系、完全由加密原生資產支持，且能捕捉市場內生收益的貨幣工具 1。Ethena 的核心突破在於利用衍生品市場的對沖機制來實現價值穩定，將傳統金融中對沖基金專屬的「基差交易（Basis Trade）」轉化為一種可編程的、大眾化的儲蓄產品。  
本報告旨在為台灣的專業投資者與一般理財大眾提供一份詳盡的指南，深入剖析 USDe 的運作機制、收益來源的可持續性、以及在極端市場環境下的潛在風險。我們將剝開其高收益的表象，從金融工程的角度審視其資產負債表的穩健性，並針對台灣稅務環境提供實務分析。

## **第二章：金融工程原理——Delta 中性與基差交易機制**

要理解 USDe 為何能提供收益且保持穩定，必須深入其底層的金融工程設計。不同於將美元存入銀行，Ethena 的運作更像是一個自動化的對沖基金。

### **2.1 Delta 中性對沖機制的數學原理**

在金融衍生品交易中，「Delta」($\\Delta$) 衡量的是資產價格變動對投資組合價值的影響。一個 Delta 為 0 的投資組合（Delta Neutral），意味著無論標的資產價格上漲或下跌，該組合的總價值在法幣計價下保持不變。這正是 USDe 維持與美元錨定的核心機制。  
當用戶向 Ethena 協議存入 $100 美元價值的加密資產（例如 ETH 或 stETH）以鑄造 $100 USDe 時，協議會在後端執行兩個同步操作：

1. **持有現貨（Long Spot）：** 協議將用戶的 stETH 作為抵押品持有。此時，協議擁有 \+1 的 Delta 敞口（即 ETH 漲 $1，資產增值 $1）。  
2. **建立空頭頭寸（Short Perpetual Futures）：** 協議在中心化交易所（如 Binance, Bybit, OKX）開設等值 $100 美元的 ETH 永續合約空單。此時，協議建立了 \-1 的 Delta 敞口（即 ETH 漲 $1，合約虧損 $1）。

投資組合總價值公式：

$$V\_{total} \= V\_{spot} \+ V\_{short}$$

$$\\Delta\_{total} \= \\Delta\_{spot} (+1) \+ \\Delta\_{short} (-1) \\approx 0$$  
通過這種完美的對沖，Ethena 鎖定了資產的美元價值 1。如果 ETH 價格從 $3,000 上漲至 $4,000，協議持有的現貨資產增值 $1,000，但空頭合約同時虧損 $1,000，兩者相抵，總價值仍維持在初始水平。這種機制使得 USDe 雖然由波動性極大的加密資產支持，但其自身價值卻能保持穩定。

### **2.2 基差交易（Basis Trade）的收益邏輯**

Ethena 的創新不僅在於穩定，更在於收益。傳統穩定幣發行商（如 Tether）將用戶的美元投資於美國國債，並獨享由此產生的利息收入。而 Ethena 則通過捕捉加密市場特有的「基差」來產生收益，並將其分配給 USDe 的質押者（sUSDe 持有者）。這種策略在傳統金融中被稱為「期現套利（Cash and Carry Trade）」。  
加密貨幣市場長期存在一種結構性的供需不平衡：**對槓桿的多頭需求遠大於空頭需求**。為了維持永續合約價格與現貨價格的收斂，交易所引入了「資金費率（Funding Rate）」機制。

* 當永續合約價格高於現貨價格（正基差，Contango）時，多頭交易者必須向空頭交易者支付資金費。  
* 當永續合約價格低於現貨價格（負基差，Backwardation）時，空頭向多頭支付資金費。

由於加密市場的投機屬性，大部分時間處於正基差狀態。Ethena 作為市場上最大的空頭持有者之一，被動地從所有做多的交易者那裡收取資金費。這筆收入構成了 sUSDe 高收益的主要來源。據歷史數據回測，在牛市期間，這種資金費率年化收益可輕易超過 20% 甚至 50%；即便在熊市，長期平均費率也往往保持正值 3。

### **2.3 雙引擎收益結構解析**

Ethena 的收益來源實際上由兩部分組成，這使其具有比單純套利策略更強的韌性：

| 收益組分 | 來源說明 | 經濟學本質 | 風險屬性 |
| :---- | :---- | :---- | :---- |
| **1\. 共識層收益 (Consensus Yield)** | 協議持有的抵押品主要是流動性質押代幣 (LST)，如 Lido 的 stETH。這部分資產直接參與以太坊 PoS 質押，獲取網絡通膨獎勵與交易手續費。 | 來自以太坊網絡的「無風險利率」。 | 相對穩定，年化約 3% \- 4%。風險在於 LST 智能合約漏洞或罰沒 (Slashing)。 |
| **2\. 執行層收益 (Funding Yield)** | 來自永續合約市場的資金費率收入。 | 來自市場投機者的「波動性溢價」。 | 高度波動。取決於市場情緒與槓桿需求。 |

這兩種收益的疊加，使得 sUSDe 本質上成為了一種\*\*「代幣化的對沖基金份額」\*\*。投資者持有 sUSDe，實際上是在做多「全球加密貨幣市場的槓桿需求」與「以太坊網絡的經濟活動」 6。

## **第三章：風險全景深度解析——壓力測試與極端情境**

儘管 Ethena 的機制在理論上是完美的，但在現實世界的金融市場中，沒有無風險的收益。對於台灣投資者而言，理解潛在的尾部風險（Tail Risks）至關重要。Ethena 面臨的風險與 LUNA/UST 這類算法穩定幣截然不同，它更接近於傳統金融機構面臨的流動性與對手方風險。

### **3.1 資金費率轉負風險 (Funding Risk)：當空頭必須付費**

這是 Ethena 模型中最直觀的經濟風險。如果市場情緒極度悲觀，大量投資者做空 ETH，導致永續合約價格低於現貨價格，資金費率將轉為負值。此時，Ethena 作為空頭持有者，必須向多頭支付費用。

* **影響機制：** 負費率會直接侵蝕協議的抵押品價值。如果這種情況持續過久，協議的資產淨值可能低於已發行的 USDe 總額，導致資不抵債。  
* **數據回測：** 根據 Chaos Labs 的詳細報告，過去三年中，資金費率為正的天數佔絕大多數。即便在 2022 年加密貨幣寒冬，加權平均資金費率也僅在極短時間內為負。然而，這並不意味著未來不會發生長期負費率的情況 8。  
* **防禦機制：** Ethena 設立了**保險基金（Reserve Fund）**。當資金費率為正時，協議會將部分收入撥入保險基金；當費率轉負時，則由保險基金支付費用，以保護用戶本金不受侵蝕。截至 2024 年第四季度，該基金規模約為 4,660 萬美元 10。投資者需密切關注保險基金的消耗速度，這是在極端熊市下的安全氣囊。

### **3.2 LST 脫鉤與流動性風險 (Liquidity & Depeg Risk)**

Ethena 使用 stETH 等 LST 作為抵押品，這引入了額外的基差風險。雖然長期來看 1 stETH 可兌換 1 ETH，但在二級市場上，stETH 可能出現折價（Depeg）。

* **情境模擬：** 假設市場出現恐慌，stETH 價格跌至 0.95 ETH。此時，Ethena 的空頭倉位（對沖 ETH）價值不變，但手手中的現貨抵押品（stETH）價值縮水。這會導致協議的整體抵押率下降。  
* **流動性錯配：** 更危險的是，如果 Ethena 需要緊急平倉或應對用戶贖回，它必須將 stETH 換成 ETH 或 USDT。如果 stETH 的市場流動性（如 Curve 池）枯竭，Ethena 的大規模拋售將加劇 stETH 的脫鉤，形成「負向反饋循環」。  
* **Chaos Labs 的壓力測試：** 報告指出，以太坊的提款隊列機制（Exit Queue）限制了 stETH 轉換回 ETH 的速度。如果 Ethena 的規模過大（例如持有超過全網 20% 的 stETH），在面臨大規模贖回時，可能無法及時變現資產，導致 USDe 短暫脫鉤 8。為此，Ethena 限制了 LST 在抵押品中的佔比，並持有一定比例的 USDT/USDC 硬資產。

### **3.3 交易所與託管風險 (Exchange & Custodial Risk)**

Ethena 需要在中心化交易所（CEX）持有龐大的空頭頭寸。FTX 的倒閉讓所有人對 CEX 的安全性心存芥蒂。如果 Binance 或 Bybit 倒閉，Ethena 的資產是否會隨之蒸發？

* **場外結算（OES）架構：** Ethena 採用了一種名為\*\*「場外結算（Off-Exchange Settlement）」\*\*的託管架構來緩解這一風險。  
  * **運作原理：** Ethena 的本金資產並非存放在交易所的錢包中，而是託管在第三方機構（如 **Copper, Ceffu, Fireblocks**）的 MPC 錢包內。  
  * **映射交易：** 交易所（如 Bybit）與託管方（如 Copper）建立合作，允許 Ethena 以託管錢包中的資產作為映射保證金進行交易。  
  * **風險隔離：** 這種架構確保了資產的所有權始終歸屬於 Ethena，且在法律上與交易所的資產負債表隔離（Bankruptcy Remote）。即使交易所破產，Ethena 的本金也不會被列入破產清算資產 3。  
* **殘餘風險：** 雖然本金安全，但\*\*「未實現盈虧（Unrealized PnL）」\*\*仍面臨風險。如果 Ethena 在某交易所擁有大量盈利尚未結算，而該交易所倒閉，這部分利潤可能無法收回。此外，託管商本身也存在理論上的單點故障風險，儘管其概率遠低於交易所倒閉。

## **第四章：生態系統深度解析——ENA 代幣與 Pendle 的槓桿效應**

### **4.1 ENA 代幣經濟學與價值捕獲**

ENA 作為 Ethena 協議的治理代幣，其價值模型正在經歷從單純治理向價值捕獲的轉變。

* **治理權：** ENA 持有者可以對協議的關鍵參數進行投票，包括抵押品類型、交易所合作夥伴、風險參數等。  
* **費用開關與回購（Fee Switch & Buyback）：** 2025 年，Ethena 基金會啟動了大規模的代幣回購計劃，通過旗下的 StablecoinX 財庫執行，旨在將 ENA 納入協議的儲備資產。更重要的是，根據 Wintermute 提出的治理提案，協議正在討論激活「費用開關」，將部分協議收入（原全數分配給 sUSDe 或保險基金）直接分配給 sENA（質押的 ENA）持有者。這將使 ENA 轉變為具有現金流屬性的生息資產，極大提升其估值邏輯 13。

### **4.2 Pendle 與 USDe：收益的金融衍生品**

在 DeFi 生態中，Pendle Finance 與 Ethena 的結合創造了極具吸引力但也更為複雜的投資工具。Pendle 允許用戶將生息資產（如 sUSDe）拆分為**本金代幣（PT）與收益代幣（YT）**。

#### **A. PT-sUSDe（固定收益策略）**

* **機制：** 用戶放棄未來的浮動收益，以折價購買 sUSDe 的本金部分。到期後，1 PT 可兌換 1 sUSDe。  
* **優勢：** 鎖定固定收益（Fixed Yield）。對於厭惡資金費率波動的保守投資者，PT 往往能提供高於市場平均水平的確定性回報（例如鎖定 15% APY）。

#### **B. YT-ENA / YT-sUSDe（槓桿收益策略）**

* **機制：** 用戶僅購買未來的收益流和積分（Points/Airdrops）。這是一種極高槓桿的博弈。  
* **風險警告（Time Decay）：** YT 具有**時間衰減**特性。隨著到期日臨近，YT 的價值會歸零。投資者購買 YT 實際上是在**做多隱含收益率（Implied Yield）**。如果實際產生的收益（資金費率 \+ 空投價值）低於購買 YT 時支付的成本，投資者將面臨本金虧損，甚至全額損失 16。  
* **實例：** 若市場預期 ENA 空投價值極高，YT-USDe 的價格會被推高。此時購買 YT 的隱含年化成本可能高達 80%。如果最終空投價值不如預期，或 Ethena 資金費率下降，YT 持有者將遭受巨額損失。這不適合普通散戶，而是專業交易員的工具。

## **第五章：台灣投資者實戰指南——稅務合規與操作策略**

對於台灣的加密貨幣投資者而言，除了市場風險，稅務合規是另一個必須考量的維度。由於台灣目前的加密貨幣稅法尚未有專法規範，實務上主要依據《所得稅法》及《所得基本稅額條例》（最低稅負制）進行認定。

### **5.1 收益性質認定與稅務申報**

投資 Ethena (USDe/ENA) 產生的收益，通常涉及以下兩種稅務類別：

#### **A. 海外所得（Overseas Income）**

由於 Ethena 是去中心化協議，且大多數台灣用戶是通過海外交易所（如 Binance, Bybit）或鏈上錢包（如 MetaMask）進行操作，其產生的收益在稅務實務上通常被認定為**海外所得**。

* **申報門檻與計算：**  
  1. **第一道門檻：** 全戶全年海外所得合計**未達新台幣 100 萬元**者，無須計入基本所得額；超過 100 萬元者，全數計入。  
  2. **第二道門檻：** 基本所得額（含綜合所得淨額 \+ 海外所得 \+ 其他特定保險給付等）**未達新台幣 750 萬元**（2025 年標準，具體金額依財政部當年度公告為準）者，無須繳納基本稅額。  
  3. **稅率：** 若超過 750 萬元，超過部分適用 **20%** 的單一稅率，並可扣抵一般所得稅額 18。

**重要洞察：** 對於絕大多數台灣散戶而言，如果年度海外獲利未超過 750 萬元，投資 USDe 的稅務成本可能遠低於國內銀行存款利息（利息超過 27 萬元即需課稅）或國內股票股利。這使得 USDe 在稅後收益率上更具優勢。

#### **B. 質押獎勵（Staking Rewards）的特殊性**

sUSDe 產生的每日收益或 ENA 的空投獎勵，其性質認定較為複雜。

* **財產交易所得 vs. 其他所得：** 目前國稅局傾向於將加密貨幣視為數位資產。因此，獲利通常被視為**財產交易所得**。  
* **成本認定問題：** 當您領取 sUSDe 的利息或 ENA 空投時，這筆資產的「取得成本」是多少？  
  * **保守做法：** 認定成本為 0。這樣在賣出時，全額售價皆視為獲利，稅負最重。  
  * **合理做法：** 以「領取當下的市價」作為取得成本，並列入當年度所得；後續賣出時，僅就「賣出價 \- 領取時市價」的差額申報損益。建議保留所有鏈上交易紀錄（Transaction Hash）與當時的匯率截圖，以備國稅局查核 21。

### **5.2 投資策略建議**

針對不同風險偏好的台灣投資者，我們建議採取差異化的配置策略：

| 投資者類型 | 推薦工具 | 策略描述 | 風險等級 | 預期收益來源 |
| :---- | :---- | :---- | :---- | :---- |
| **保守型 (存款替代)** | **USDe / sUSDe** | 直接持有 sUSDe，享受浮動 APY。適合閒置美元資金。 | 中低 | 資金費率 \+ ETH 質押獎勵 |
| **穩健型 (鎖定收益)** | **Pendle PT-sUSDe** | 在 Pendle 購買 PT 代幣，持有至到期。 | 低 (無幣價與費率波動風險) | 固定 APY (通常高於 sUSDe 均值) |
| **進階型 (看好生態)** | **ENA / sENA** | 購買並質押 ENA，參與潛在的費用分潤。 | 高 (代幣價格波動) | 幣價增值 \+ 協議收入分潤 |
| **激進型 (博取高賠率)** | **Pendle YT-ENA** | 購買 YT 代幣，博取積分與空投價值。 | 極高 (本金可能歸零) | 槓桿化的積分與空投收益 |

### **5.3 實務操作警告**

1. **出金合規：** 若從海外交易所將獲利匯回台灣銀行帳戶，且金額較大（如超過 50 萬台幣），銀行可能會要求說明資金來源。請務必保存交易所的交易紀錄與出金紀錄，以證明資金為海外投資所得，而非不明資金。  
2. **合約授權風險：** 參與 DeFi（如 Curve, Pendle）需授權智能合約動用您的 USDe。請務必使用硬體錢包（如 Ledger, Trezor），並定期使用 Revoke.cash 等工具檢查並撤銷不必要的無限授權。

## **第六章：USDe 與主流穩定幣的終極對比**

為了更清晰地定位 USDe，我們將其與市場上的主要競爭者進行對比：

| 特徵 | Ethena (USDe) | Tether (USDT) / Circle (USDC) | MakerDAO (DAI) |
| :---- | :---- | :---- | :---- |
| **核心機制** | **合成美元 (Synthetic)** 現貨抵押 \+ 空頭對沖 | **法幣託管 (Fiat-Backed)** 銀行存款 \+ 美債 | **超額抵押 (Over-collateralized)** 加密資產抵押債倉 (CDP) |
| **價值支撐** | Delta 中性投資組合 (100% Crypto) | 法幣資產 (100% RWA) | 加密資產 \+ RWA (如 USDC PSM) |
| **收益分配** | **用戶共享** (sUSDe) | **發行商獨享** (Tether/Circle) | **部分共享** (DAI Savings Rate) |
| **抗審查性** | **中等** 依賴 CEX 流動性與 OES 託管商 | **低** 中心化實體可隨時凍結地址 | **高** 去中心化治理 (但依賴 USDC) |
| **擴張能力** | **受限** 受限於期貨市場未平倉量 (OI) | **無限** 取決於銀行存款規模 | **受限** 受限於鏈上抵押品需求 |
| **主要風險** | 負資金費率、CEX 對手方風險 | 銀行倒閉、監管查封 | 智能合約風險、預言機故障 |

## **第七章：結論與展望**

Ethena 的出現標誌著加密穩定幣市場進入了「3.0 時代」。它不再試圖通過複雜的算法憑空創造穩定（如 Terra/UST），也不再單純依賴傳統法幣系統的背書（如 USDC）。它回歸金融本質，通過將市場中最穩健的套利策略（基差交易）代幣化，創造了一種既能抗審查、又能產生內生收益的「互聯網債券（Internet Bond）」。  
然而，**高收益必然伴隨著特定的風險結構**。USDe 的收益並非無中生有，而是對投資者承擔「衍生品市場系統性風險」與「流動性錯配風險」的補償。它不是銀行存款，而是一個精密構建的結構化金融產品。  
**給交易所與投資者的最終建議：**  
對於**交易所**而言，在推廣 USDe 相關產品時，應準確定義其風險屬性，避免將其簡單等同於 USDT 儲蓄。清晰披露資金費率轉負的可能性及保險基金的水位，是負責任的表現。  
對於**台灣投資者**而言，USDe 提供了一個極佳的美元資產增值渠道，特別是在稅務優勢下。但切勿將其視為無風險資產。建議將 USDe 作為資產配置的一部分（例如佔穩定幣倉位的 20-30%），利用 Pendle 的 PT 代幣鎖定收益，並始終關注 Ethena 官方儀表板中的保險基金狀況與 stETH 流動性指標。在享受加密金融創新帶來的紅利時，保持對風險的敬畏，方能行穩致遠。  
---

*(免責聲明：本報告內容基於截至 2026 年 1 月的市場資訊與公開數據，僅供教育與研究用途，不構成具體投資建議。加密貨幣市場波動劇烈，投資人應審慎評估自身風險承受能力，並諮詢專業稅務與財務顧問。)*

#### **引用的著作**

1. Ethena (ENA): Is the USDe Synthetic Dollar the Future of DeFi? | Learn \- KuCoin, 檢索日期：1月 2, 2026， [https://www.kucoin.com/learn/web3/what-is-ethena-ena](https://www.kucoin.com/learn/web3/what-is-ethena-ena)  
2. Ethena Overview | Ethena, 檢索日期：1月 2, 2026， [https://docs.ethena.fi/](https://docs.ethena.fi/)  
3. Inside Modern Stablecoin Architecture: How Ethena's USDe Work, 檢索日期：1月 2, 2026， [https://rocknblock.io/blog/stablecoin-architecture-how-ethena-usde-works](https://rocknblock.io/blog/stablecoin-architecture-how-ethena-usde-works)  
4. Analyzing the Technical Stack of Synthetic Dollar Stablecoins | by Jung-Hua Liu \- Medium, 檢索日期：1月 2, 2026， [https://medium.com/@gwrx2005/analyzing-the-technical-stack-of-synthetic-dollar-stablecoins-0a39560c52cb](https://medium.com/@gwrx2005/analyzing-the-technical-stack-of-synthetic-dollar-stablecoins-0a39560c52cb)  
5. What is Ethena Staked USDe (sUSDe)? Everything You Need to Know \- OSL, 檢索日期：1月 2, 2026， [https://www.osl.com/academy/article/what-is-ethena-staked-usde-susde-everything-you-need-to-know](https://www.osl.com/academy/article/what-is-ethena-staked-usde-susde-everything-you-need-to-know)  
6. From High Yields to Potential Collapse: An Analysis of the Logic Behind USDe Incentives, 檢索日期：1月 2, 2026， [https://news.futunn.com/en/post/60089319/from-high-yields-to-potential-collapse-an-analysis-of-the](https://news.futunn.com/en/post/60089319/from-high-yields-to-potential-collapse-an-analysis-of-the)  
7. Ethena: Delving into the Mechanics and Risks of USDe \- Chorus One, 檢索日期：1月 2, 2026， [https://chorus.one/reports-research/ethena-delving-into-the-mechanics-and-risks-of-usde](https://chorus.one/reports-research/ethena-delving-into-the-mechanics-and-risks-of-usde)  
8. Untitled \- Chaos Labs, 檢索日期：1月 2, 2026， [https://chaoslabs.xyz/resources/chaos-labs-ethena-lst-market-risk.pdf](https://chaoslabs.xyz/resources/chaos-labs-ethena-lst-market-risk.pdf)  
9. Untitled \- Chaos Labs, 檢索日期：1月 2, 2026， [https://chaoslabs.xyz/resources/chaos\_Labs\_ethena\_perpetual\_assessment\_risk\_report.pdf](https://chaoslabs.xyz/resources/chaos_Labs_ethena_perpetual_assessment_risk_report.pdf)  
10. Reserve Fund \- Ethena Docs, 檢索日期：1月 2, 2026， [https://docs.ethena.fi/solution-design/reserve-fund](https://docs.ethena.fi/solution-design/reserve-fund)  
11. Understanding Off-Exchange Settlement \- Ceffu, 檢索日期：1月 2, 2026， [https://www.ceffu.com/it/blog/ceffu-understanding-off-exchange-settlement](https://www.ceffu.com/it/blog/ceffu-understanding-off-exchange-settlement)  
12. Ethena Has Integrated Ceffu's MirrorX Solution for Off-Exchange Settlement, 檢索日期：1月 2, 2026， [https://www.ceffu.com/pt-BR/blog/ethena-has-integrated-ceffu-mirrorx-off-exchange-settlement](https://www.ceffu.com/pt-BR/blog/ethena-has-integrated-ceffu-mirrorx-off-exchange-settlement)  
13. Ethena Labs Buys 25M ENA Amid Whale Accumulation, Potentially Boosting Price Momentum | MEXC News, 檢索日期：1月 2, 2026， [https://www.mexc.co/en-PH/news/244597](https://www.mexc.co/en-PH/news/244597)  
14. Ethena & ENA Coin Explained: Governance, Fee Switch, and Market Outlook \- LBank, 檢索日期：1月 2, 2026， [https://www.lbank.com/explore/ethena-ena-coin-governance-fee-switch-market-outlook](https://www.lbank.com/explore/ethena-ena-coin-governance-fee-switch-market-outlook)  
15. Wintermute Governance: Proposal for ENA Fee Switch, 檢索日期：1月 2, 2026， [https://gov.ethenafoundation.com/t/wintermute-governance-proposal-for-ena-fee-switch/306](https://gov.ethenafoundation.com/t/wintermute-governance-proposal-for-ena-fee-switch/306)  
16. Annualized 393%: An In-Depth Analysis of the True Yield and Risks of the Pendle YT Leveraged Points Strategy | 币界网 on Binance Square, 檢索日期：1月 2, 2026， [https://www.binance.com/en-AE/square/post/24757267289825](https://www.binance.com/en-AE/square/post/24757267289825)  
17. Pendle (PENDLE): A comprehensive overview of the leading platform for on-chain yield, 檢索日期：1月 2, 2026， [https://oakresearch.io/en/reports/protocols/pendle-pendle-comprehensive-overview-leading-platform-on-chain-yield](https://oakresearch.io/en/reports/protocols/pendle-pendle-comprehensive-overview-leading-platform-on-chain-yield)  
18. Blockchain & Cryptocurrency Laws & Regulations 2026 | Taiwan \- Global Legal Insights, 檢索日期：1月 2, 2026， [https://www.globallegalinsights.com/practice-areas/blockchain-cryptocurrency-laws-and-regulations/taiwan/](https://www.globallegalinsights.com/practice-areas/blockchain-cryptocurrency-laws-and-regulations/taiwan/)  
19. Crypto Tax Migration: Your Jurisdiction Guide \- Henley & Partners, 檢索日期：1月 2, 2026， [https://www.henleyglobal.com/publications/crypto-wealth-report-2025/crypto-tax-migration-your-jurisdiction-guide](https://www.henleyglobal.com/publications/crypto-wealth-report-2025/crypto-tax-migration-your-jurisdiction-guide)  
20. Finance ministry pledges to address cryptocurrency taxation issue \- Taipei Times, 檢索日期：1月 2, 2026， [https://www.taipeitimes.com/News/biz/archives/2024/11/19/2003827113](https://www.taipeitimes.com/News/biz/archives/2024/11/19/2003827113)  
21. Managing Investment Fund Tax Exposure to Income from Staking Cryptocurrencies, 檢索日期：1月 2, 2026， [https://andersen.com/resources/managing-investment-fund-tax-exposure-to-income-from-staking-cryptocurrenci](https://andersen.com/resources/managing-investment-fund-tax-exposure-to-income-from-staking-cryptocurrenci)  
22. Virtual Currency Transaction Tax Advisory \- 立行會計師事務所 LY CPA Firm, 檢索日期：1月 2, 2026， [https://lytax.com.tw/eng-services/eng-virtual-currency/](https://lytax.com.tw/eng-services/eng-virtual-currency/)