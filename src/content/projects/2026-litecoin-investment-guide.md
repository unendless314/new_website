---
title: "重塑數位白銀：萊特幣 (Litecoin) 生態系深度研究與台灣市場投資價值評估報告"
description: "深度解析 Litecoin (LTC) 的 MWEB 隱私協議、LTC-20 銘文生態與實體支付場景，並提供台灣投資者合規操作指南。"
date: 2026-01-03
author: wu-yan
categories: ["深度研究", "萊特幣"]
tags: ["Litecoin", "LTC", "MWEB", "Payment", "LTC-20", "Investment", "Research"]
complexity: 3
---

## 第一章：緒論：在數位黃金陰影下的價值重構

### **1.1 研究背景與動機**

在加密貨幣的發展史中，比特幣（Bitcoin）作為「數位黃金」的地位已然確立，而萊特幣（Litecoin, LTC）自 2011 年誕生以來，便長期承載著「數位白銀」的敘事。然而，隨著區塊鏈技術的日新月異，單純作為比特幣的「輕量級測試網」或「備用支付手段」已不足以支撐一個千億級別資產的長期估值。2024 年至 2025 年的市場週期展現了一個明顯的趨勢：老牌公鏈若無法在技術效用（Utility）或生態應用上實現突破，將面臨被新興高性能公鏈（如 Solana、Sui）邊緣化的風險。  
本報告旨在打破市場對萊特幣的刻板印象，將其重新定義為一個結合了「選擇性隱私協議（MWEB）」、「資產發行層（LTC-20）」以及「高滲透率支付網絡」的綜合金融協議。針對台灣投資者，本研究將特別聚焦於本地監管環境（金管會 VASP 規範）下的合規操作策略，以及如何利用台灣豐富的支付場景（如 Bitrefill 整合的 7-Eleven、家樂福生態）來實現資產的真實效用 1。

### **1.2 萊特幣的核心哲學與技術護城河**

萊特幣由前 Google 工程師 Charlie Lee 於 2011 年創立，其核心代碼庫基於比特幣進行修改。不同於比特幣使用的 SHA-256 演算法，萊特幣採用了 Scrypt 演算法。這一選擇在早期是為了阻止 ASIC（專用集成電路）礦機的壟斷，雖然現在 Scrypt ASIC 已普及，但這一差異化設計意外地為萊特幣構建了獨特的算力市場 2。  
更為關鍵的是，萊特幣擁有長達 13 年以上、100% 正常運行的網絡紀錄。在去中心化金融（DeFi）頻繁遭遇駭客攻擊與網絡宕機的今天，這種極致的穩定性（Lindy Effect）本身就是一種稀缺資產。萊特幣的供應上限為 8,400 萬枚，是比特幣的四倍，這使其在心理帳戶上更適合做為日常交易的計價單位 2。

---

## 第二章：安全性架構：聯合挖礦（Merged Mining）與算力共生

在深入探討新技術之前，必須先理解萊特幣網絡安全的基石——這是一個常被台灣投資者忽視，卻決定了萊特幣生死的關鍵機制：與狗狗幣（Dogecoin）的聯合挖礦。

### **2.1 2014 年的算力危機與 AuxPoW 的引入**

回溯至 2013-2014 年，當時的加密貨幣市場處於「山寨幣（Altcoin）」的戰國時代。狗狗幣作為一個迷因（Meme）幣誕生，初期採用極高通膨的獎勵機制，導致其算力在區塊獎勵快速減半後面臨崩潰的風險。若單一幣種算力過低，極易遭受 51% 攻擊。  
為了解決這一問題，狗狗幣在 2014 年 8 月切換至輔助工作量證明（Auxiliary Proof of Work, AuxPoW）機制，允許萊特幣礦工在計算萊特幣區塊雜湊值的同時，將該工作量「免費」貢獻給狗狗幣網絡，而無需消耗額外的電力 4。這一歷史性轉折創造了加密貨幣史上最強大的「共生關係」。

### **2.2 經濟激勵的雙重鎖定效應**

聯合挖礦的機制意味著，任何一台 Scrypt 礦機（如 Antminer L7）在挖掘萊特幣時，同時也在挖掘狗狗幣。這對網絡安全產生了深遠的影響：

1. **算力相關性（Hashrate Correlation）：** 數據顯示，狗狗幣與萊特幣的算力相關係數高達 0.95 4。這意味著攻擊萊特幣網絡的成本，等同於攻擊擁有龐大市值的狗狗幣網絡，攻擊者必須掌握全網絕大多數的 Scrypt 算力。  
2. **礦工收益的多元化（Revenue Diversification）：** 對於礦工而言，收益不再單純依賴 LTC 的價格。當 2021 年及 2024-2025 年狗狗幣價格因 Elon Musk 等名人效應飆升時，挖掘 Scrypt 算法的總收益暴漲。這導致大量新算力湧入，直接提升了萊特幣網絡的安全性（Hashrate），即便在 LTC 價格相對低迷時，網絡依然堅不可摧 5。

**深度洞察：** 這種共生關係是萊特幣在 2025 年依然屹立不搖的隱形支柱。投資者在分析萊特幣的基本面時，不能將其視為孤立的資產，而必須將其視為「Scrypt 算力經濟體」的雙核心之一。只要迷因經濟（Meme Economy）持續繁榮，萊特幣的物理層安全就擁有極高的保障。

---

## 第三章：MWEB 協議：隱私、可替代性與監管博弈

2022 年 5 月激活的 MWEB（MimbleWimble Extension Blocks）升級，是萊特幣歷史上最具野心的技術迭代。它試圖解決區塊鏈透明性與個人財務隱私之間的矛盾，但也將萊特幣推向了監管的風口浪尖。

### **3.1 技術深度解析：如何實現「隱形」**

MWEB 的名稱源自《哈利波特》中的結舌咒，意指防止洩密。其技術架構並非直接修改主鏈，而是掛載了一個「擴展區塊（Extension Block）」。

#### **3.1.1 擴展區塊與 Peg-in/Peg-out 機制**

想像萊特幣主鏈是一條公開的高速公路，所有車輛（交易）的型號和載貨量（金額）都一覽無遺。MWEB 則是在這條公路旁建立了一條平行的「地下隧道」。

* **匯入（Peg-in）：** 用戶將 LTC 發送到一個特殊的 MWEB 地址（以 ltc1 開頭的特定格式），資金便進入了隧道。在主鏈上，這筆資金看起來像是鎖定在一個合約中，但在 MWEB 層內部，它變成了隱私資產 7。  
* **匯出（Peg-out）：** 當用戶需要將資金轉回普通地址（如交易所充值）時，資金從隧道回到高速公路，變回普通的 LTC。

#### **3.1.2 機密交易與 CoinJoin**

在 MWEB 層內部，隱私是通過以下技術實現的：

* **機密交易（Confidential Transactions, CT）：** 使用佩德森承諾（Pedersen Commitments）隱藏交易金額。只有發送方和接收方知道具體數額，而礦工僅驗證輸入金額等於輸出金額加上手續費，無需知道具體數值 9。  
* **CoinJoin（混幣）：** 多個用戶的交易在區塊中被混合，消除了輸入與輸出之間的直接鏈接。這使得外部觀察者無法追蹤資金的具體流向 9。  
* **Cut-through（核銷）：** 為了提高效率，MWEB 允許刪除中間交易數據，只保留未花費的輸出（UTXO）。這不僅保護隱私，還顯著減少了區塊鏈的數據量，提升了網絡的可擴展性 8。

### **3.2 可替代性（Fungibility）的革命**

MWEB 最重要的經濟意義在於提升了萊特幣的「可替代性」。在比特幣等透明帳本上，一枚曾經涉及黑市交易的比特幣可能被標記為「受污染（Tainted）」，導致被合規交易所拒收，其價值低於一枚「乾淨」的比特幣。  
通過 MWEB，資金經過「清洗」後，其歷史路徑被切斷。這在理論上使得每一枚萊特幣都具有相同的價值，回歸了貨幣應有的同質化屬性，使其更接近現金（Cash）的本質 8。

### **3.3 台灣監管環境下的 MWEB 生存指南**

對於台灣投資者而言，MWEB 是一把雙面刃。雖然它提供了隱私保護，但在金管會（FSC）日益嚴格的反洗錢（AML）規範下，使用不當可能導致資產凍結。

#### **3.3.1 台灣 VASP 規範與旅行規則（Travel Rule）**

台灣金管會依據《洗錢防制法》對虛擬資產服務提供商（VASP）實施嚴格監管。所有在台灣運營的交易所（如 MAX、BitoPro、ACE）都必須遵循「旅行規則」，即在轉帳時必須識別發送方與接收方的身份資訊 12。  
隱私幣（如 Monero, Zcash）通常被視為高風險資產。雖然萊特幣尚未被全面禁止，但交易所普遍不支持 MWEB 地址的直接互動。

#### **3.3.2 交易所政策實務**

* **MAX 交易所（MaiCoin 集團）：** 用戶條款明確指出需配合定期身份審查。若用戶試圖從 MWEB 地址直接充值，交易所節點無法解析發送方資訊，這將觸發 AML 警報，導致資金無法入帳甚至被退回（需支付高額人工處理費）15。  
* **BitoPro（幣託）：** 已發布公告更新錢包地址，並強烈建議用戶不要使用不支援的協議。MWEB 屬於不支援的充值方式，直接充值將導致資產「永久遺失」或需極長時間的找回流程 17。  
* **國際交易所（Binance, OKX）：** 部分國際大所如 Binance 雖然支援 LTC，但也明確表示不支援 MWEB 充提，這是為了符合全球合規要求 11。

#### **3.3.3 合規操作策略（SOP）**

為了在享受隱私的同時確保資產安全，台灣投資者應遵循以下 SOP：

1. **隔離操作：** 使用支援 MWEB 的非託管錢包（如 **Litecoin Core** 全節點錢包或 **Cake Wallet**、**Electrum-LTC**）作為中轉站 8。  
2. **Peg-out 流程：** 在將資金轉入台灣交易所之前，**必須**先在自己的錢包中執行 Peg-out 操作，將 MWEB 資金轉回標準的 LTC 地址（L開頭或M開頭）。  
3. **等待確認：** 等待主鏈確認數達到要求（通常為 6-12 個確認）後，再發送至交易所。  
4. **禁止直連：** 絕對不要從 MWEB 地址直接發送至任何中心化交易所（CEX）。

---

## 第四章：LTC-20 與 Ordinals：銘文生態的崛起與風險

2023 年，隨著比特幣 Ordinals 協議的爆發，萊特幣社區迅速跟進，推出了 LTC-20 標準。這標誌著萊特幣從單純的支付貨幣，意外轉型為具備資產發行能力的平台。

### **4.1 從 BRC-20 到 LTC-20 的技術移植**

LTC-20 本質上是 BRC-20 的分叉。它利用萊特幣區塊中的隔離見證（SegWit）數據欄位，寫入 JSON 格式的文本數據。這些數據定義了代幣的名稱、總量、鑄造限制等 20。  
由於萊特幣的區塊時間（2.5分鐘）比比特幣（10分鐘）快四倍，且手續費極低（通常低於 $0.01），這使得在萊特幣上進行銘文鑄造和交易的體驗更加流暢，成本更低 22。

### **4.2 生態系發展與基礎設施隱憂**

LTC-20 吸引了大量投機資金，市值排名前列的代幣如 $LITE、$LOLS 等一度引發 FOMO（錯失恐懼症）。然而，生態系的基礎設施仍處於早期階段，存在顯著風險。

#### **4.2.1 索引器（Indexer）的中心化風險**

銘文技術的核心在於「鏈下索引」。區塊鏈本身只記錄了 JSON 文本，代幣的餘額計算依賴於特定的索引器服務器。這導致了一個嚴重的問題：如果不同的市場（如 Litescribe 與 Unilit）使用不同的索引規則，用戶的餘額可能在不同平台上顯示不一致。  
案例分析： Litescribe.io 曾發生索引錯誤事件，導致大量交易的回滾與資產錯置，引發了社區對於中心化索引器的信任危機 23。這提醒投資者，LTC-20 資產的安全性不僅取決於萊特幣網絡，還取決於這些第三方服務商的代碼質量。

#### **4.2.2 錢包與交易市場**

目前，LTC-20 的操作主要依賴瀏覽器插件錢包，如 **Litescribe Wallet**（基於 UniSat 開發）。用戶可以通過這些工具進行銘刻（Inscribe）、轉帳與交易 24。然而，相較於以太坊的 MetaMask 或 Solana 的 Phantom，這些工具的用戶體驗與安全性仍有待提升。

### **4.3 對萊特幣經濟模型的影響**

LTC-20 的出現對萊特幣的經濟模型產生了積極的副作用：

1. **手續費收入增加：** 銘文活動產生了大量的微交易，雖然單筆費用低，但總量巨大，顯著增加了礦工的手續費收入。在區塊獎勵減半的背景下，這成為維持網絡安全的重要激勵來源 22。  
2. **活躍地址數（Active Addresses）飆升：** 數據顯示，LTC-20 推出後，萊特幣的日活躍地址數一度突破歷史新高，超越了許多市值更高的公鏈，證明了其網絡在處理高併發交易時的穩定性 22。

---

## 第五章：實體支付場景：數據驗證的真實效用

如果說 MWEB 是理想，LTC-20 是投機，那麼實體支付就是萊特幣最堅實的基本面。在這一領域，萊特幣展現出了驚人的滲透率，是真正的「王者」。

### **5.1 全球支付數據的統治力**

根據全球最大的加密貨幣支付處理商 **BitPay** 的年度報告，萊特幣在 2024-2025 年間的支付佔比長期穩居前列，經常與比特幣爭奪第一的位置，佔比超過 25% 25。

* **優勢分析：** 消費者傾向於「囤積比特幣（Store of Value），消費萊特幣（Medium of Exchange）」。萊特幣低廉的手續費使其非常適合支付 100 美元以下的中小額商品，如遊戲點數、VPN 服務、網域託管等 26。  
* **CoinGate 數據：** 在另一大支付網關 CoinGate 的報告中，萊特幣也穩居第二，僅次於比特幣或穩定幣 USDT，顯示其在全球電商支付中的普及度 27。

### **5.2 台灣在地化支付：Bitrefill 的應用實例**

對於台灣用戶而言，萊特幣的支付功能並非遙不可及。透過加密貨幣禮品卡平台 **Bitrefill**，萊特幣可以無縫對接台灣的實體經濟 1。

#### **5.2.1 支援商家清單（台灣地區）**

透過 Bitrefill，持有 LTC 的台灣用戶可以購買以下商家的數位禮券，幾乎涵蓋了食衣住行育樂：

* **便利商店：** **7-Eleven**（面額 50 TWD \- 1000 TWD）。這是台灣密度最高的零售網絡，意味著 LTC 可以間接購買茶葉蛋、咖啡與便當。  
* **量販超市：** **家樂福（Carrefour）**（面額 200 TWD \- 3000 TWD）。適合家庭日常用品採購。  
* **百貨購物：** **SOGO 百貨**（面額 1000 TWD \- 3000 TWD）。  
* **數位娛樂：** **Steam** 儲值卡（115 TWD \- 2310 TWD）、**Roblox**、**G2A** 等遊戲平台。  
* **旅遊出行：** **Uber Eats**（澳洲區較常用，台灣區視庫存而定）、**Hotels.com**、**AirlineGift**。  
* **通訊服務：** **Bitrefill eSIM Taiwan**（1GB \- 100GB 數據流量包），這對國際旅客或需要臨時流量的用戶極為便利。

#### **5.2.2 支付體驗與優勢**

使用萊特幣在 Bitrefill 支付通常在幾分鐘內完成確認，且無需支付如以太坊網絡那樣高昂的 Gas Fee。對於希望將加密獲利變現為生活物資的投資者，這是一條規避繁瑣出金流程（Cashing out）的有效路徑，同時也維持了資金的流動性。

---

## 第六章：投資價值評估與 2026 年展望

### **6.1 減半週期的價格行為學**

萊特幣的減半週期（每四年一次）呈現出與比特幣截然不同的「預期交易」模式。歷史數據（2015, 2019, 2023）顯示，LTC 往往在減半前 45-60 天達到週期高點，呈現「買在謠言，賣在事實（Buy the Rumor, Sell the News）」的特徵 28。

* **投資啟示：** 對於長期投資者，應關注減半後的漫長盤整期作為積累區間。2023 年減半後，LTC 經歷了長時間的價格修正，這在歷史上往往是新一輪週期的起點。

### **6.2 估值模型：NVT 與流動性溢價**

不同於依賴 TVL（總鎖倉量）的 DeFi 公鏈，萊特幣的估值應參考 **NVT 比率（網絡價值對交易量比率）**。由於其極高的鏈上轉帳與支付頻率，萊特幣在熊市中往往能維持比其他山寨幣更堅實的底部。其實際使用率（Adoption）為價格提供了支撐 11。

### **6.3 2026 年關鍵催化劑（Catalysts）**

1. **現貨 ETF 的申請：** 機構 Canary Capital 已向美國 SEC 提交萊特幣現貨 ETF 的申請 31。由於萊特幣在代碼結構上與比特幣高度相似，且未曾進行 ICO（首次代幣發行），被 SEC 認定為「非證券」的概率極高。若 ETF 獲批，將帶來巨大的機構資金流入。  
2. **支付賽道的整合：** 隨著 PayPal、Venmo 等傳統金融巨頭整合加密貨幣，萊特幣作為元老級資產，始終在首批支援名單中。  
3. **隱私需求的覺醒：** 在全球金融監管收緊的背景下，MWEB 提供的合規隱私方案可能會吸引更多高淨值用戶將 LTC 作為資產隱蔽的手段。

### **6.4 風險提示**

* **監管風險：** 若台灣或全球監管機構將 MWEB 視為完全的黑名單特徵，LTC 可能面臨流動性分裂（合規池與隱私池）的風險。  
* **競爭風險：** Solana 等高性能公鏈在支付領域的崛起，以及比特幣閃電網絡（Lightning Network）的普及，都對萊特幣的支付地位構成挑戰。

---

## 第七章：結論：從影子走向實體的穩健選擇

萊特幣不再僅僅是比特幣的影子。通過 **MWEB**，它實現了數位現金的隱私理想；通過 **LTC-20**，它展示了老牌公鏈的適應性；通過 **聯合挖礦**，它構築了堅不可摧的安全壁壘；通過 **BitPay 與 Bitrefill**，它證明了自己在真實世界中的不可或缺。  
對於台灣投資者而言，萊特幣提供了一個獨特的投資定位：它比比特幣更具彈性（高 Beta 值），比大多數山寨幣更具安全性與實用性。在合規操作的前提下，萊特幣是構建多元化加密資產組合中，兼具防禦性與潛在爆發力的優質標的。  
**核心建議：**

1. **善用工具：** 利用 Bitrefill 解決小額出金需求。  
2. **嚴守合規：** 避免 MWEB 直連交易所，保護帳戶安全。  
3. **長期視角：** 關注 ETF 進展與支付數據，而非短期的價格波動。

*(本報告內容基於截至 2026 年 1 月的研究數據，僅供教育與資訊參考，不構成財務建議。加密貨幣投資具有高度風險，請謹慎評估。)*

---

**附錄：關鍵數據表**

#### **表 1：萊特幣歷次減半價格表現分析**

| 減半次數 | 日期 | 減半前觸底時間 | 減半前漲幅 | 減半後短期表現 |
| :---- | :---- | :---- | :---- | :---- |
| **第一次** | 2015/08/25 | 減半前 122 天 | \+820% | 下跌 (-73% 在 578 天內) |
| **第二次** | 2019/08/05 | 減半前 243 天 | \+550% | 下跌 (-83% 在 458 天內) |
| **第三次** | 2023/08/02 | 減半前約 7-8 個月 | \+75% | 下跌 (減半後兩週跌破 $80) |

**資料來源：** 28

#### **表 2：台灣主要交易所對萊特幣與 MWEB 的支援狀態**

| 交易所/平台 | LTC 交易對 | MWEB 充值支援 | 風險提示與備註 |
| :---- | :---- | :---- | :---- |
| **MAX 交易所** | TWD/LTC, USDT/LTC | **不支援** | 需先 Peg-out，否則可能觸發 AML 審查或退款 15 |
| **BitoPro 幣託** | TWD/LTC, USDT/LTC | **不支援** | 使用舊地址或 MWEB 地址可能導致資產永久遺失 17 |
| **Bitrefill** | 支付 (禮品卡) | 支援 (視錢包) | 可購買 7-11, 家樂福, Steam 等禮券 1 |

**資料來源：** 1

#### **引用的著作**

1. Bitrefill (Taiwan) \- Buy Gift Cards, eSIM & Airtime with Bitcoin or Crypto, 檢索日期：1月 2, 2026， [https://www.bitrefill.com/tw/en/](https://www.bitrefill.com/tw/en/)  
2. Litecoin Price: LTC Live Price Chart, Market Cap & News Today | CoinGecko, 檢索日期：1月 2, 2026， [https://www.coingecko.com/en/coins/litecoin](https://www.coingecko.com/en/coins/litecoin)  
3. Litecoin price today, LTC to USD live price, marketcap and chart | CoinMarketCap, 檢索日期：1月 2, 2026， [https://coinmarketcap.com/currencies/litecoin/](https://coinmarketcap.com/currencies/litecoin/)  
4. Case Study: Merged Mining in Dogecoin & Litecoin \- Binance, 檢索日期：1月 2, 2026， [https://www.binance.com/en/research/analysis/merged-mining](https://www.binance.com/en/research/analysis/merged-mining)  
5. Dogecoin's merge mining profitability has flipped Litecoin by over 200% | The Block, 檢索日期：1月 2, 2026， [https://www.theblock.co/linked/103969/dogecoin-merge-mining-flip-litecoin](https://www.theblock.co/linked/103969/dogecoin-merge-mining-flip-litecoin)  
6. How Litecoin and Dogecoin Created One of the Most Robust PoW Network's, 檢索日期：1月 2, 2026， [https://litecoin.com/news/how-litecoin-and-dogecoin-created-one-of-the-most-robust-pow-networks](https://litecoin.com/news/how-litecoin-and-dogecoin-created-one-of-the-most-robust-pow-networks)  
7. All About Litecoin | Features, Speed & Use Cases \- Klever.io, 檢索日期：1月 2, 2026， [https://klever.io/blog/all-about-litecoin/](https://klever.io/blog/all-about-litecoin/)  
8. Litecoin and MWEB: What it is and how to use it, 檢索日期：1月 2, 2026， [https://litecoin.com/learning-center/litecoin-and-mweb-what-it-is-and-how-to-use-it](https://litecoin.com/learning-center/litecoin-and-mweb-what-it-is-and-how-to-use-it)  
9. Litecoin's MWEB Milestone: Unlocking Privacy and Scalability for the Future \- OKX, 檢索日期：1月 2, 2026， [https://www.okx.com/en-us/learn/litecoin-mweb-privacy-scalability](https://www.okx.com/en-us/learn/litecoin-mweb-privacy-scalability)  
10. MWEB: How Litecoin Is Restoring Privacy and Redefining the Future of Digital Money, 檢索日期：1月 2, 2026， [https://litecoin.com/news/litecoin-is-privacy](https://litecoin.com/news/litecoin-is-privacy)  
11. LITECOIN REDEFINING PRIVACY WITH MWEB\! There was a | Thanh Nhựt CRYPTO on Binance Square, 檢索日期：1月 2, 2026， [https://www.binance.com/en/square/post/32929861627730](https://www.binance.com/en/square/post/32929861627730)  
12. Is Crypto Legal in Taiwan? Regulations & Compliance in 2025 \- Lightspark, 檢索日期：1月 2, 2026， [https://www.lightspark.com/knowledge/is-crypto-legal-in-taiwan](https://www.lightspark.com/knowledge/is-crypto-legal-in-taiwan)  
13. Ensuring Legality in Cryptocurrency Transactions: Key Points on AML Compliance in Taiwan \- Authme, 檢索日期：1月 2, 2026， [https://authme.com/blog/aml-in-crypto/](https://authme.com/blog/aml-in-crypto/)  
14. Bumpy road to navigating Taiwan's crypto conundrum \- Law.asia, 檢索日期：1月 2, 2026， [https://law.asia/taiwan-crypto-regulations-challenges/](https://law.asia/taiwan-crypto-regulations-challenges/)  
15. 2025/12/31 Notice of Periodic User Information Review \- MAX Exchange / MaiCoin, 檢索日期：1月 2, 2026， [https://support.maicoin.com/en/support/solutions/articles/32000036294-2025-12-31-notice-of-periodic-user-information-review](https://support.maicoin.com/en/support/solutions/articles/32000036294-2025-12-31-notice-of-periodic-user-information-review)  
16. 2025/12/30 Bade Business Office (MaiCoin Taipei Store) and customer service are closed on New Year's Day, 檢索日期：1月 2, 2026， [https://support.maicoin.com/en/support/solutions/articles/32000036292-2025-12-30-bade-business-office-maicoin-taipei-store-and-customer-service-are-closed-on-new-year-](https://support.maicoin.com/en/support/solutions/articles/32000036292-2025-12-30-bade-business-office-maicoin-taipei-store-and-customer-service-are-closed-on-new-year-)  
17. Announcements \- BitoPro, 檢索日期：1月 2, 2026， [https://www.bitopro.com/ns/en-US/announcements/1178](https://www.bitopro.com/ns/en-US/announcements/1178)  
18. Update Deposit Address Before 3/30: BTC, DOGE, LTC, BCH, ADA, SOL, TRX, USDT (TRC20), XRP \- 幣託BitoPro, 檢索日期：1月 2, 2026， [https://support.bitopro.com/hc/en-us/articles/45040834728345-Update-Deposit-Address-Before-3-30-BTC-DOGE-LTC-BCH-ADA-SOL-TRX-USDT-TRC20-XRP](https://support.bitopro.com/hc/en-us/articles/45040834728345-Update-Deposit-Address-Before-3-30-BTC-DOGE-LTC-BCH-ADA-SOL-TRX-USDT-TRC20-XRP)  
19. Understanding Mimblewimble (MWEB on Litecoin), Part 2 : r/CryptoCurrency \- Reddit, 檢索日期：1月 2, 2026， [https://www.reddit.com/r/CryptoCurrency/comments/1fjpoua/understanding\_mimblewimble\_mweb\_on\_litecoin\_part\_2/](https://www.reddit.com/r/CryptoCurrency/comments/1fjpoua/understanding_mimblewimble_mweb_on_litecoin_part_2/)  
20. Litecoin's New Standard LTC-20 Is What? \- CryptoRank, 檢索日期：1月 2, 2026， [https://cryptorank.io/news/feed/ac33c-190357-litecoins-new-standard-ltc-20-is-what](https://cryptorank.io/news/feed/ac33c-190357-litecoins-new-standard-ltc-20-is-what)  
21. Litecoin Launches LTC-20 Token Standard Ushering in Ordinals \- BeInCrypto, 檢索日期：1月 2, 2026， [https://beincrypto.com/litecoin-community-ltc-20-experimental-standard-litecoin-nfts/](https://beincrypto.com/litecoin-community-ltc-20-experimental-standard-litecoin-nfts/)  
22. LTC-20 Standard Ignites Bullish Surge in Litecoin Price | Voice Of Crypto on Binance Square, 檢索日期：1月 2, 2026， [https://www.binance.com/en-NG/square/post/548934](https://www.binance.com/en-NG/square/post/548934)  
23. UniLit Answer to Litescribe. Updated to 08/02/2023 \- Medium, 檢索日期：1月 2, 2026， [https://medium.com/@unilit.io/unilit-answer-to-litescribe-fc1d7eb7f3a0](https://medium.com/@unilit.io/unilit-answer-to-litescribe-fc1d7eb7f3a0)  
24. Litescribe Wallet \- Chrome Web Store, 檢索日期：1月 2, 2026， [https://chromewebstore.google.com/detail/litescribe-wallet/ajofhbfomojicfifgoeeimefklkfdkfn?hl=en](https://chromewebstore.google.com/detail/litescribe-wallet/ajofhbfomojicfifgoeeimefklkfdkfn?hl=en)  
25. BitPay Decrypted 2025: Crypto & Bitcoin Stats from 2025, 檢索日期：1月 2, 2026， [https://www.bitpay.com/decrypted/2025](https://www.bitpay.com/decrypted/2025)  
26. Litecoin on the Rise as Top Crypto Payment Method \- BitPay, 檢索日期：1月 2, 2026， [https://www.bitpay.com/blog/litecoin-payments-on-the-rise](https://www.bitpay.com/blog/litecoin-payments-on-the-rise)  
27. CoinGate data revealed that Litecoin ranked second in cryptocurrency payment changes | ALL-TRADE31 on Binance Square, 檢索日期：1月 2, 2026， [https://www.binance.com/en/square/post/27903005690938](https://www.binance.com/en/square/post/27903005690938)  
28. Halvings Seem to Move Bitcoin and Litecoin in Very Different Ways \- Blockworks, 檢索日期：1月 2, 2026， [https://blockworks.co/news/bitcoin-litecoin-halvings](https://blockworks.co/news/bitcoin-litecoin-halvings)  
29. Litecoin Halving 2023 Explained & What it Means for LTC \- BitPay, 檢索日期：1月 2, 2026， [https://www.bitpay.com/blog/litecoin-halving](https://www.bitpay.com/blog/litecoin-halving)  
30. When will the next Litecoin halving be and what impact will it have? \- Binance, 檢索日期：1月 2, 2026， [https://www.binance.com/en/square/post/6299893106986](https://www.binance.com/en/square/post/6299893106986)  
31. Litecoin MWEB Balance Hits ATH, Here's Implication for Adoption and LTC Price \- MEXC, 檢索日期：1月 2, 2026， [https://www.mexc.co/en-NG/news/149892](https://www.mexc.co/en-NG/news/149892)  
32. Research Weekly \- Litecoin's Halving Cycle May Hold Clues for Bitcoin Investors \- NYDIG, 檢索日期：1月 2, 2026， [https://www.nydig.com/research/litecoins-halving-cycle-may-hold-clues-for-bitcoin-investors](https://www.nydig.com/research/litecoins-halving-cycle-may-hold-clues-for-bitcoin-investors)
