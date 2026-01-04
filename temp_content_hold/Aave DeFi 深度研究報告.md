# **Aave (AAVE)：DeFi 世界的去中心化銀行與投資指南**

## **執行摘要 (Executive Summary)**

在當前全球金融體系經歷數位轉型的浪潮中，去中心化金融（Decentralized Finance, DeFi）已從一個實驗性的概念演變為不可忽視的金融力量。作為這場革命的核心支柱，Aave 協議不僅僅是一個借貸平台，它已經確立了自己作為「DeFi 世界的去中心化銀行」的地位。這份深度研究報告旨在為台灣的理財大眾與加密貨幣投資者提供一份詳盡的 Aave 分析指南，涵蓋其歷史演變、核心技術機制、代幣經濟模型、投資價值以及潛在風險。  
Aave 的成功在於其從點對點（P2P）模式向資金池（Pool-based）模式的關鍵轉型，這一轉變解決了流動性匹配的效率問題，奠定了現代 DeFi 借貸的標準。憑藉其獨創的「閃電貸（Flash Loans）」機制，Aave 為金融市場引入了前所未有的無抵押套利工具，極大提升了資本效率。隨著 V3 版本的推出，Aave 進一步引入了隔離模式（Isolation Mode）與電子模式（E-Mode），展現了其在風險控管與資本利用率上的持續創新。  
本報告將深入探討 Aave 最新的「Umbrella」安全模組提案，這標誌著協議風險管理從單一代幣（AAVE）擔保轉向更精細化的資產隔離與自動化壞帳處理機制。對於台灣投資者而言，理解 Aave 與中心化交易所（如 Binance, OKX, MAX, BitoPro）理財產品的本質差異至關重要。雖然中心化平台提供了便捷的入口，但 Aave 提供了真正的「真實收益（Real Yield）」與資產透明度。同時，本報告也將針對台灣稅法對於海外所得的規範，解析 DeFi 利息收入的稅務合規路徑。  
Aave 不僅是一個協議，它是構建在以太坊及多條區塊鏈上的流動性基礎設施。雖然智能合約風險與市場極端波動仍是不可忽視的挑戰，但 Aave 憑藉其強大的治理社區與經過實戰檢驗的代幣經濟模型，正逐步鞏固其作為加密資產領域「定海神針」的地位。本報告將從歷史沿革、技術架構、經濟模型、風險管理到在地實務應用，進行全方位的剖析，總字數約 15,000 字，旨在為讀者構建一個完整的 Aave 知識圖譜。

## ---

**1\. 歷史與地位：從 ETHLend 到 DeFi 基石 (History & Status)**

### **1.1 起源：ETHLend 與點對點借貸的侷限**

Aave 的故事始於 2017 年，當時區塊鏈技術主要聚焦於代幣發行（ICO），而金融應用尚處於萌芽階段。創辦人 Stani Kulechov 在芬蘭赫爾辛基創立了 ETHLend，這是一個建立在以太坊網絡上的點對點（Peer-to-Peer, P2P）借貸平台 1。當時的願景非常純粹：利用智能合約消除銀行中介，讓全球各地的借貸雙方直接對接。  
在 ETHLend 的運作模式下，借款人需要發布具體的借款需求，例如「我想要抵押 10 顆 ETH，借入 5,000 USDC，願意支付 5% 的年化利息，期限為 30 天」。發布後，這張訂單會掛在類似分類廣告的佈告欄上，等待潛在的貸款人來「接單」。這種模式類似於早期的分類廣告或拍賣網站，雖然實現了去中心化，但在實際的金融運作效率上卻存在著巨大的缺陷。  
首先，最致命的問題是**流動性割裂（Liquidity Fragmentation）**。在 P2P 模式下，借貸雙方的需求必須在金額、利率、期限和抵押品類型上完全匹配才能成交。這意味著如果貸款人只想借出 2,000 USDC，或者希望獲得 6% 的利息，這筆交易就無法達成。這種嚴格的雙邊匹配機制導致了極低的撮合效率，大量的借款需求懸而未決，大量的閒置資金無法生息。  
其次是**時間成本與不確定性**。借款人無法即時獲得資金，這對於需要快速周轉進行槓桿交易或支付緊急費用的用戶來說是不可接受的。相比之下，傳統銀行雖然流程繁瑣，但一旦授信額度通過，資金的調用通常是即時的。ETHLend 的非即時性使其難以與中心化金融競爭。  
最後是**利率發現機制的缺失**。由於每一筆交易都是獨立協商的結果，市場上缺乏統一的基準利率。一個借款人可能以 5% 成交，而另一個信用狀況相同的借款人可能被迫接受 10% 的利率，這取決於當時是否有貸款人剛好看到訂單。這種信息不對稱和定價效率低下 2，阻礙了大規模資金的進入。  
儘管 ETHLend 在 2017 年的 ICO 中成功籌集了 1620 萬美元 3，並發行了 LEND 代幣，但隨著 2018 年加密貨幣熊市的到來，P2P 模式的流動性枯竭問題暴露無遺。用戶體驗的瓶頸讓團隊意識到，要構建真正的去中心化金融基礎設施，必須徹底改變底層架構。

### **1.2 轉型與重生：Aave 的誕生與資金池革命**

面對 ETHLend 的瓶頸，Stani Kulechov 及其團隊做出了一個在當時極具風險但也極具遠見的決定：徹底放棄已經開發成型的 P2P 模式，轉向「資金池（Pool-based）」模式。這一轉變標誌著現代 DeFi 借貸標準的誕生。2018 年 9 月，團隊在布拉格的 Devcon IV 上宣布了新的願景；2020 年 1 月，Aave 協議正式在以太坊主網上線 4。  
**"Aave" 在芬蘭語中意為「幽靈」**。這個名字不僅致敬了團隊的北歐背景，更深刻地象徵了 DeFi 的核心願景：一個透明、開放、無處不在但又無形的金融基礎設施 1。在這個新系統中，使用者不再需要尋找特定的交易對手，而是與一個由智能合約管理的「幽靈」資金池互動。這是一個去中心化的共享流動性池，任何人都可以隨時存入資產，也可以隨時從中借出資產。  
這種從 P2P 到 Pool-based 的轉型是革命性的，它解決了 ETHLend 的所有痛點：

1. **即時流動性**：借款人只要提供足夠的抵押品，就可以從資金池中即時借款，無需等待對手方。這模擬了銀行「隨借隨還」的體驗。  
2. **被動收入**：存款人不再需要主動管理貸款訂單，只需將資金存入池中，就能立即開始賺取利息。這降低了參與門檻，吸引了大量零售資金。  
3. **演算法利率**：利率不再由雙方協商，而是由演算法根據資金池的供需狀態（利用率）自動調整。當資金緊缺時，利率自動上升以吸引存款並抑制借款；當資金充裕時，利率下降以刺激借貸。這實現了市場化的利率定價，極大提高了資本配置效率。

伴隨著協議的升級，代幣經濟也進行了遷移。2020 年 10 月，AAVE 代幣正式發行，持有舊版 LEND 代幣的用戶可以以 100:1 的比例兌換為新的 AAVE 代幣 4。這不僅是一次代幣更名，更是一次治理權與經濟模型的重塑，引入了安全模組（Safety Module）和治理投票功能，使 Aave 成為一個真正的去中心化自治組織（DAO）。

### **1.3 行業地位：DeFi 的流動性心臟**

從 V1 到 V3，Aave 的技術迭代始終引領著 DeFi 的發展方向，其歷史就是 DeFi 進化的縮影。

* **Aave V1 (2020)**：這是資金池模式的首次大規模驗證。V1 不僅證明了演算法利率的可行性，還引入了 DeFi 歷史上最具創新性的功能——**「閃電貸（Flash Loans）」**。這一功能允許開發者在無抵押的情況下借出巨額資金進行套利，前提是在同一筆交易中還款。這開啟了 DeFi 的「貨幣樂高」時代，極大提升了市場效率。  
* **Aave V2 (2020)**：在 V1 成功一年後，V2 針對用戶體驗和 Gas 費用進行了優化。關鍵創新包括：  
  * **信用委託（Credit Delegation）**：允許存款人將自己的借款額度委託給其他人，為無抵押借貸（信貸）打開了大門。  
  * **更穩健的清算機制**：優化了清算邏輯，減少了極端行情下的系統性風險。  
  * **抵押品互換（Collateral Swap）**：允許用戶在不還款的情況下直接更換抵押資產，提供了靈活的債務管理工具。  
* **Aave V3 (2022)**：這是目前最先進的 DeFi 借貸版本，旨在解決多鏈流動性割裂和資本效率問題 5。  
  * **跨鏈部署**：Aave V3 迅速在 Arbitrum, Optimism, Polygon, Avalanche, Base 等 Layer 2 和側鏈上部署，成為多鏈生態的流動性中樞。  
  * **隔離模式（Isolation Mode）**：允許協議安全地上架長尾資產（高風險資產），通過設置債務上限來隔離風險。  
  * **電子模式（Efficiency Mode / E-Mode）**：針對高度相關的資產（如穩定幣對、ETH/stETH 對）提供極高的貸款價值比（LTV），大幅提升資本效率。  
  * **傳送門（Portal）**：允許流動性在不同鏈上的 Aave 市場之間無縫流動，試圖統一全網流動性。

根據 Token Terminal 和 DeFi Llama 的數據，Aave 長期佔據借貸協議總鎖倉量（TVL）的榜首，其管理的資產規模一度超過百億美元，年化協議收入已突破數千萬美元級別 7。在 2024 至 2025 年間，隨著加密市場的復甦，Aave 更是展現了強大的韌性。即便經歷了像 Curve (CRV) 攻擊事件這樣的壓力測試，協議依然保持了償付能力，證明了其作為 DeFi 基礎設施的穩健性 9。  
對於台灣投資者而言，Aave 不僅僅是一個投資標的，它更像是區塊鏈世界中的「中央銀行」與「商業銀行」的混合體。它通過治理投票制定借貸規則（類似央行制定貨幣政策），又直接向用戶提供存貸服務（類似商業銀行業務）。理解 Aave 的運作機制，是理解整個 DeFi 生態資金流轉邏輯的最佳切入點，也是評估其他 DeFi 協議風險與價值的基準。

## ---

**2\. 核心機制白話解讀 (Core Tech)**

要理解 Aave 為什麼被稱為「去中心化銀行」，我們必須拆解其運作的核心引擎。不同於傳統銀行依賴信貸員的人工審核、後台的黑箱操作以及法幣體系的信用擴張，Aave 的一切運作都基於公開透明的智能合約代碼和嚴謹的數學公式。

### **2.1 資金池借貸 (Pooling)：無人管理的共享銀行**

Aave 的核心概念是「流動性池（Liquidity Pool）」。想像一個巨大的、透明的數位金庫，這個金庫不屬於任何人，而是由程式碼自動管理。  
存款（供給流動性）：  
當你將 1,000 USDC 存入 Aave 時，你實際上是將錢放入了這個公共金庫。在這個過程中，並沒有銀行櫃員給你開立存摺，而是智能合約會自動鑄造並發送給你 1,000 個 aUSDC（aToken）。

* **aToken 的奧妙**：aTokens 是 Aave 協議發行的憑證代幣，它與底層資產（這裡是 USDC）保持 1:1 的價值掛鉤。最神奇的是，aTokens 是**生息代幣（Interest-bearing Tokens）**。你的錢包裡的 1,000 aUSDC 餘額會隨著時間自動增長，每一秒都在變多，比如變成 1,000.00005 aUSDC。這增加的部分就是你的利息收入。這意味著利息是直接以「代幣數量增加」的形式體現的，而不是像傳統銀行那樣定期打入另一個利息帳戶 10。這種設計讓利息可以實現複利效應，並且隨時可以轉移或贖回。

借款（提取流動性）：  
如果有人想要借錢，他必須先存入抵押品。例如，借款人存入價值 $3,000 的 ETH。根據 Aave 的風險參數，ETH 的「最大貸款價值比（Max LTV）」可能是 80%，這意味著他最多可以借出價值 $2,400 的 USDC。

* 借出的錢是直接從上述的 USDC 公共金庫中取走的。借款人需要為此支付利息，這些利息大部分會分配給存款人（作為 Supply APY），這就是存款人收益的來源。另有一小部分利息會被協議扣除，進入 Aave 的國庫（DAO Treasury），作為協議的儲備金，用於未來的發展或應對壞帳風險 11。

利率演算法：看不見的手  
在 Aave 中，沒有央行總裁來宣布升息或降息。利率是由演算法根據\*\*資金利用率（Utilization Rate, $U$）\*\*自動決定的 12。

$$U \= \\frac{\\text{總借款量 (Total Borrows)}}{\\text{總流動性 (Total Liquidity)}}$$

* **資金充裕時（利用率低）**：假設池子裡有 100 億 USDC，只借出了 1 億。此時 $U$ 很低，演算法會將借款利率降得很低（例如 2%），鼓勵大家來借錢；同時存款利率也會很低，因為不需要那麼多存款。  
* **資金緊缺時（利用率高）**：假設池子裡的錢快被借光了，$U$ 接近 90% 或更高。此時演算法會觸發「扭結點（Kink）」，利率會呈指數級飆升（可能瞬間跳到 50% 甚至 100%）。高昂的借貸成本會迫使借款人趕緊還錢，同時超高的存款利率會吸引套利者存入資金。

這種動態平衡確保了資金池幾乎總是有錢可借，或者有足夠的動力讓流動性回流。這是一個完全由供需驅動的自由市場機制。

### **2.2 健康係數 (Health Factor)：借貸者的生命線**

在 Aave 上借錢不需要信用評分，不需要收入證明，因為一切都基於「超額抵押」。為了確保協議不產生壞帳，Aave 引入了一個核心指標：**健康係數（Health Factor, $H\_f$）**。這是每一個借款人都必須時刻盯緊的數字。

#### **計算公式詳解**

健康係數的計算涉及三個關鍵變量：

$$H\_f \= \\frac{\\sum (\\text{Collateral Value}\_i \\times \\text{Liquidation Threshold}\_i)}{\\text{Total Borrowed Value}}$$

1. **抵押品價值 (Collateral Value)**：你存入的所有資產的總市值（以 ETH 或 USD 計算）。  
2. **清算門檻 (Liquidation Threshold)**：這是一個由 Aave 治理決定的風險參數，代表抵押品的「安全折算率」。波動性越低的資產，這個數值越高。例如，ETH 的清算門檻可能是 83%，而 USDC 可能是 85%，但波動較大的小幣可能只有 65% 13。  
3. **總借款價值 (Total Borrowed Value)**：你借出的資產加上累積利息的總值。

#### **實戰比喻：數位當鋪**

把 Aave 想像成一家極度嚴格的數位當鋪。你拿了一塊價值 10 萬台幣的金塊（ETH）去當鋪。

* 當鋪規定這塊金塊的清算門檻是 80%，也就是說，它認可這塊金塊在極端情況下至少能值 8 萬（$100,000 \\times 0.8$）。這 8 萬元就是你的「清算線」。  
* 如果你借了 5 萬元，你的健康係數就是 $\\frac{80,000}{50,000} \= 1.6$。這很安全，因為 1.6 遠大於 1。  
* **市場下跌**：如果金價大跌，金塊現在只值 7 萬元了。你的清算線變成了 $70,000 \\times 0.8 \= 56,000$。此時健康係數降為 $\\frac{56,000}{50,000} \= 1.12$。係數變低，危險逼近。  
* **觸發清算**：如果金價繼續跌到 6.25 萬元，清算線變成了 $62,500 \\times 0.8 \= 50,000$。此時健康係數 $\\frac{50,000}{50,000} \= 1.0$。

**一旦 $H\_f \< 1$**，這條生命線就斷了。Aave 協議會判定你的倉位已經資不抵債（相對於安全標準），為了保護存款人的本金，協議會開放權限給第三方（稱為「清算人」）。清算人會幫你償還部分債務（例如 50%），作為回報，他們可以拿走你等值的抵押品，**並且額外獲得一筆「清算獎勵（Liquidation Bonus）」**（通常是 5%\~10%）14。這意味著你會損失比債務更多的資產。  
對於台灣投資者來說，理解這一點至關重要：\*\*在 DeFi 中，沒有催繳電話，沒有寬限期，只有無情的程式碼強制執行。\*\*保持健康係數在 1.5 甚至 2.0 以上，是避免資產被賤賣的唯一法則。

### **2.3 閃電貸 (Flash Loans)：Aave 的獨門絕技**

閃電貸是 Aave 對區塊鏈金融最偉大的貢獻之一，也是傳統金融（TradFi）中完全不存在的概念，它將資本效率推向了極致。  
**定義**：閃電貸允許開發者在**不需要任何抵押品**的情況下，借出資金池中幾乎所有的閒置資金（甚至數億美元），前提是借款人必須在\*\*同一個區塊交易（Transaction）\*\*結束之前，連本帶利（加上 0.09% 或更低的手續費）還回來 15。  
**技術原理**：這得益於以太坊等區塊鏈的交易特性——**原子性（Atomicity）**。在區塊鏈上，一筆交易可以包含數百個操作步驟。這些步驟要麼全部成功執行，要麼全部失敗回滾（Revert）。

* 如果你借了閃電貸，但在交易結束前沒有還錢（比如你的套利策略失敗了，虧了錢），智能合約會檢測到餘額不足，進而讓整筆交易失敗。  
* 對於區塊鏈來說，這筆交易就像從未發生過一樣。資金從未離開過 Aave 的金庫。因此，對協議來說，這幾乎是零信用風險的。

**實際應用場景**：

1. **無風險套利 (Arbitrage)**：假設 Uniswap 上的 ETH 價格是 $3,000，而 SushiSwap 上是 $3,050。  
   * 利用閃電貸借入 1,000 萬 USDC。  
   * 在 Uniswap 買入 3,333.33 ETH。  
   * 立即在 SushiSwap 賣出，得到 1,016.66 萬 USDC。  
   * 歸還閃電貸本金 1,000 萬 \+ 手續費 9,000 (0.09%)。  
   * 淨賺 15.76 萬 USDC。這一切都不需要動用你自己的本金 16。  
2. **清算 (Liquidation)**：清算人發現某個大戶的健康係數跌破 1，需要 1 億美元來幫他還債並吃掉抵押品。普通人沒有 1 億美元，但可以用閃電貸借出來，執行清算，拿到抵押品獎勵，賣掉抵押品換回現金，還掉閃電貸，賺取差價。  
3. **抵押品更換 (Collateral Swap)**：你抵押了 ETH 借了 USDT。現在你看空 ETH，想換成 BTC 抵押，但不想還錢再借。你可以用閃電貸借出 USDT 還債 \-\> 取出 ETH \-\> 賣成 BTC \-\> 存入 BTC \-\> 借出 USDT \-\> 還閃電貸。這實現了「以貸換貸」的一鍵操作。

閃電貸是 Aave 協議收入的重要來源之一，也是 DeFi 市場效率極高的原因——任何價格錯位都會被閃電貸機器人瞬間抹平，這也間接維護了市場的價格統一。

### **2.4 GHO 穩定幣：捕捉鑄幣稅的野心**

GHO（讀作 "Go"）是 Aave 推出的原生、去中心化、超額抵押穩定幣，與美元掛鉤 17。它的推出標誌著 Aave 從單純的借貸中介向貨幣發行方的戰略升級。

* **機制**：GHO 的鑄造機制與 MakerDAO 的 DAI 類似。用戶在 Aave V3 市場中存入抵押品（如 ETH, AAVE），然後可以選擇「借出」GHO。這實際上是鑄造了新的 GHO 進入市場。  
* **收益歸屬**：當用戶借出 USDC 時，利息主要給了 USDC 的存款人。但當用戶借出（鑄造）GHO 時，**GHO 並沒有對應的存款人**。因此，GHO 的借款利息 **100% 進入 Aave DAO 的國庫**。這意味著 Aave 可以直接捕捉「鑄幣稅」收入，這是協議收入增長的重要引擎 18。  
* **掛鉤穩定性**：GHO 在推出初期曾面臨長期低於 1 美元（脫鉤）的問題。為了決此問題，Aave 引入了 **GHO Stability Module (GSM)**。GSM 允許用戶用 USDC 1:1 剛性兌換 GHO。當 GHO 價格低於 $1 時，套利者可以用 $0.98 買入 GHO，然後通過 GSM 換成 $1 的 USDC，這種套利行為鎖定了 GHO 的價格下限 19。

### **2.5 V3 的進化：隔離模式與電子模式**

為了進一步提升安全性與效率，Aave V3 引入了兩個針對特定場景的優化模式，這顯示了 Aave 在資產風險分層管理上的精細化。

1. **隔離模式 (Isolation Mode)**：  
   * **背景**：DeFi 用戶總是希望上架更多種類的資產（例如新發行的迷因幣或小型項目代幣）。但這些資產波動性極大，如果允許它們作為全能抵押品，一旦價格被操縱暴漲，攻擊者可能用垃圾資產借空池子裡的優質資產（如 ETH, USDC），造成系統性壞帳。  
   * **機制**：被標記為「隔離」的資產，用戶在使用其作為抵押品時，**只能**借出特定的穩定幣（如 USDC, USDT），且**不能**同時使用其他資產作為抵押。更重要的是，每個隔離資產都有一個嚴格的**債務上限 (Debt Ceiling)**。例如，某個小幣的債務上限是 1000 萬美元。這意味著即使發生最壞的情況，協議的損失也被控制在 1000 萬美元以內，不會拖累整個協議的償付能力 6。  
2. **電子模式 (Efficiency Mode / E-Mode)**：  
   * **背景**：在 V2 中，如果你抵押 USDC 借入 USDT，由於兩者都是美元穩定幣，理論上價格波動風險極低。但 V2 的通用參數可能只允許 80% 的 LTV，這導致資金利用率低下。  
   * **機制**：E-Mode 允許將**價格高度相關**的資產歸為一類（Category）。  
     * **類別 1 (穩定幣)**：USDC, USDT, DAI, GHO。在 E-Mode 下，LTV 可以高達 **97%** 22。這意味著用戶可以用 100 萬 USDC 借出 97 萬 USDT。  
     * **類別 2 (ETH 衍生品)**：ETH, stETH, rETH。這允許用戶進行高效的「循環貸（Looping）」操作——抵押 stETH 借 ETH，買入更多 stETH，再抵押...從而放大質押收益（Staking Yield）。  
   * 這種設計使得 Aave 成為了鏈上外匯交易和槓桿質押的最佳場所。

## ---

**3\. 代幣經濟與風險管理轉型 (Tokenomics & Risk Evolution)**

AAVE 代幣不僅是治理權的象徵，更是協議最後一道防線的基石。然而，隨著協議規模的擴大，傳統的風險管理模型已顯得捉襟見肘。這道防線正在經歷一場名為 "Umbrella" 的重大變革，標誌著 DeFi 風險管理從「全域擔保」走向「精細化隔離」。

### **3.1 AAVE 代幣的傳統用途與安全模組 (Legacy Safety Module)**

在傳統模型中，AAVE 代幣主要有兩個功能：

1. **治理投票 (Governance)**：持有 AAVE 可以對協議的升級（AIPs）、新資產上架、風險參數調整（如 LTV, 清算門檻）進行投票。這是真正的「股東權利」，決定了協議的發展方向。  
2. **安全模組質押 (Safety Module, SM)**：  
   * 為了應對可能發生的「短缺事件（Shortfall Event）」（即壞帳超過了協議收入儲備的情況），Aave 設計了安全模組。  
   * 用戶將 AAVE 代幣質押到安全模組中，獲得 **stkAAVE**。  
   * **收益**：作為承擔風險的回報，質押者會獲得協議分配的 AAVE 代幣獎勵（來自生態系統儲備）。  
   * **風險（Slashing）**：如果協議發生嚴重壞帳（如黑客攻擊或市場崩盤導致大規模清算失敗），stkAAVE 包含的 AAVE 代幣將被拍賣（Slashing）以填補虧損，最高可扣除質押本金的 30% 23。

傳統模型的缺陷：  
這種機制將所有風險綑綁在一起。無論是 ETH 池出事、USDC 池出事，還是某個小幣池出事，都要賣 AAVE 來賠。

* **死亡螺旋風險**：如果在市場恐慌時大規模拍賣 AAVE，會導致 AAVE 幣價崩盤，進一步降低安全模組的賠付能力，形成死亡螺旋。  
* **流動性錯配**：壞帳通常是以 USDC 或 ETH 計價的，而賠付資產是 AAVE。在極端行情下，AAVE 的流動性可能不足以支撐巨額的賠付需求。  
* **激勵不對稱**：AAVE 持有者可能並不了解某個新上架資產的風險，卻要為其潛在的壞帳買單。

### **3.2 風險機制的典範轉移：Aave Umbrella 提案**

為了決上述問題，Aave 社區（由 BGD Labs 提出）推出了 **"Umbrella"** 升級計畫。這是一個將風險管理從「全域單一代幣擔保」轉向「按市場隔離、按資產賠付」的重大變革 24。

#### **Umbrella 的核心理念：風險自負與精準覆蓋**

Umbrella 引入了 **stk-aTokens** 的概念，徹底改變了保險邏輯。

1. **從 stkAAVE 到 stk-aTokens**：  
   * 新機制鼓勵流動性提供者（LP）質押他們持有的 aToken（例如 aUSDC, aETH, aUSDT）。  
   * **針對性賠付**：如果你質押的是 aUSDC（獲得 stk-aUSDC），你承擔的是 **USDC 市場**的壞帳風險。如果 USDC 池出現壞帳，你的 stk-aUSDC 會被\*\*直接銷毀（Burn）\*\*來抵消債務。  
   * **優勢 1：無需市場拋售**。這是一個巨大的進步。直接銷毀負債對應的資產（例如銷毀 aUSDC 來抵消 USDC 債務），不需要在市場上拋售 AAVE 換錢，完全避免了對 AAVE 幣價的衝擊和滑點損失 27。  
   * **優勢 2：風險隔離**。USDC 的風險由願意承擔 USDC 風險的人負責，而不是由全體 AAVE 持有者買單。這使得風險定價更加市場化。  
2. **激勵機制 (Incentive Structures) 與 stk 模式**：  
   * 為了吸引用戶質押 aTokens 承擔風險，協議會提供額外的獎勵（除了原本的存款利息外）。  
   * **自動化曲線**：Umbrella 引入了 **stk 利用率曲線**。每個資產都有一個「安全目標（Safety Target）」。  
     * 如果質押量低於目標，獎勵會呈指數級上升，吸引資本進入。  
     * 如果質押量高於目標，獎勵會下降，避免協議過度支付保險費 28。  
   * 這創造了一個自動平衡的保險市場，類似於借貸市場的利率機制。  
3. **AAVE 代幣的新角色**：  
   * 在 Umbrella 架構下，AAVE 代幣（及 stkAAVE）將逐漸退出第一線的壞帳擔保角色。  
   * 它將轉變為：  
     * **治理核心**：繼續控制協議參數。  
     * **最後的最後防線 (Last Resort)**：只有當 stk-aTokens 的賠付能力耗盡，且協議國庫也耗盡時，才會考慮動用 AAVE。  
     * **價值捕獲者**：隨著協議更安全、壞帳風險被隔離，AAVE 代幣的投資屬性將從「保險單」轉變為純粹的「收益權證」，這有助於提升其估值 23。

### **3.3 隔離模式 (Isolation Mode) 的風險防火牆細節**

在 Umbrella 全面實施之前，Aave V3 的隔離模式已經在前端發揮了重要的風險控制作用。

* **實例**：假設 Aave 上架了一個新的迷因幣 $PEPE。它被設為隔離資產，債務上限（Debt Ceiling）設為 500 萬美元。  
* **運作**：  
  1. 用戶存入 $PEPE，只能借出 USDC, USDT, DAI。  
  2. 一旦所有用戶抵押 $PEPE 借出的穩定幣總額達到 500 萬美元，該資產的借貸功能就會暫停，直到有人還款。  
* **意義**：這意味著即使 $PEPE 價格在一夜之間歸零，或者預言機被攻擊導致價格虛高，攻擊者也最多只能從協議中套走 500 萬美元的穩定幣。這個損失是「有上限的（Capped）」，處於協議國庫可以輕鬆吸收的範圍內，絕不會威脅到 ETH 或 BTC 等核心資產池的安全 21。

## ---

**4\. 投資價值分析 (Investment Thesis)**

Aave 的投資敘事已經從單純的「治理代幣」轉變為「現金流資產」。投資 Aave 實際上是在投資一家沒有實體分行、沒有冗員、由代幣持有者共同擁有的高效率銀行。其價值取決於協議能否持續產生真實收益（Real Yield）。

### **4.1 真實收益 (Real Yield) 的來源與結構**

與許多依賴增發代幣來補貼用戶、製造虛假繁榮的「龐氏」DeFi 協議不同，Aave 的收入來自真實的經濟活動。根據 Token Terminal 和 Dune Analytics 的數據，Aave 的營收結構非常多元且健康 11：

1. 借款利息抽成 (Reserve Factor)：  
   這是 Aave 最核心的收入。借款人支付的利息中，絕大部分給了存款人，但有一部分（例如 10%\~20%，具體取決於資產風險）會作為「準備金係數（Reserve Factor）」被協議扣除，進入 DAO 國庫。  
   * *分析*：這相當於銀行的「淨利息收入」。只要有人在 Aave 上借錢（無論是為了做多、做空還是套利），協議就在賺錢。  
2. 閃電貸手續費：  
   每筆閃電貸收取借款金額的 0.05%\~0.09%。  
   * *分析*：雖然比例極低，但閃電貸的交易量往往巨大（單筆可達數億美元）。在市場波動劇烈時，套利和清算活動頻繁，閃電貸收入會暴增。這是一項與市場波動率正相關的收入，具有很好的對沖屬性 15。  
3. GHO 鑄幣收入：  
   如前所述，GHO 的借款利息 100% 歸 DAO 所有。  
   * *展望*：目前 GHO 的供應量約為數億美元。如果未來 GHO 能成長到數十億規模（如 DAI 的規模），這將成為 Aave 最強勁的增長引擎，因為它沒有存款成本 18。  
4. 清算罰金分成：  
   在某些清算事件中，協議會從清算獎金中抽取一小部分。這部分收入較不穩定，通常不作為主要估值依據。

### **4.2 營收數據與趨勢分析**

數據顯示，Aave 的協議收入在 2024-2025 年間呈現顯著增長趨勢。

* **總收入**：根據 Token Terminal 數據，Aave 在 2024 年的年化收入已達到近 1 億美元級別 8。  
* **結構變化**：  
  * **2021 (牛市)**: 收入極高，但主要來自投機借貸。  
  * **2022-2023 (熊市)**: 收入下降，但即使在深熊中，協議依然保持盈利，證明了商業模式的韌性。  
  * **2024-2025 (復甦)**: 收入回升，且結構更健康。Layer 2（如 Arbitrum, Optimism, Base）上的交易量佔比大幅提升 30，這表明 Aave 已經成功卡位了未來的擴容生態。GHO 的收入佔比也開始顯著貢獻。

### **4.3 競爭護城河與同業比較**

為什麼選擇 Aave 而不是 Compound 或 MakerDAO？以下是三巨頭的對比分析：

| 特性 | Aave V3 | Compound V3 | MakerDAO (Sky) |
| :---- | :---- | :---- | :---- |
| **核心業務** | 綜合借貸市場 (多資產) | 簡化借貸 (主要藉 USDC/USDT) | 穩定幣發行 (CDP) |
| **資產多樣性** | **極高** (支援長尾資產、LSDs) | 低 (僅支援主流抵押品) | 中 (主要支援主流資產與 RWA) |
| **資本效率** | **極高** (E-Mode, 隔離模式) | 中 | 中 |
| **穩定幣戰略** | GHO (原生整合，收益歸 DAO) | 無原生穩定幣 | DAI/USDS (核心產品) |
| **跨鏈佈局** | **廣泛** (Arbitrum, OP, Polygon, Base, Avax...) | 較少 (主要集中在 ETH 與 Base) | 較少 (專注於主網與特定 L2) |
| **閃電貸** | **有** (DeFi 首創，流動性最強) | 無 | 閃電鑄造 (Flash Mint) |
| **風險管理** | 隔離模式、Umbrella (精細化) | 單一市場隔離 (Comet) | 治理參數調整 |

**Aave 的護城河**：

1. **流動性的網絡效應**：借貸市場具有雙邊網絡效應。越多的存款吸引越多的借款（因為利率低、滑點小），產生的利息又吸引更多的存款。Aave 作為 TVL 龍頭，這種效應最強。  
2. **多鏈部署的先發優勢**：Aave 在幾乎所有主流 EVM 鏈上都是借貸協議的統治者。這使得它成為了跨鏈流動性的事實標準。  
3. **技術創新速度**：從 V1 的閃電貸到 V3 的 E-Mode，Aave 團隊始終保持著極快的創新節奏，這在快速變化的 DeFi 領域是核心競爭力。

## ---

**5\. 風險提示與挑戰 (Risks)**

儘管 Aave 被視為 DeFi 的藍籌，且經過了多次市場崩盤的考驗，但投資者必須清楚認識到，高收益背後必然伴隨著特定的風險。

### **🔴 高風險 (Critical Risks)**

1. 智能合約風險 (Smart Contract Risk)：  
   這是所有 DeFi 協議的達摩克利斯之劍。Aave 掌管著數十億美元的資產，是黑客眼中的「終極目標」。  
   * 儘管 Aave 的代碼經過了多家頂級機構（如 Sigma Prime, ConsenSys Diligence）的審計，並且有 Certora 進行形式化驗證，但\*\*代碼漏洞（Bug）\*\*是無法從數學上完全排除的。  
   * *潛在威脅*：2023 年 Curve 發生的 Vyper 編譯器漏洞事件提醒我們，即使業務邏輯沒問題，底層編譯語言的 Bug 也可能導致災難。如果 Aave 的核心合約被攻破，損失可能是毀滅性的，現有的安全模組可能不足以賠付。  
2. 清算連鎖反應與壞帳 (Liquidation Cascades & Bad Debt)：  
   在極端行情下（如 312 或 519 暴跌），資產價格可能在短時間內腰斬。  
   * **擁堵風險**：同時，恐慌交易會導致以太坊網絡極度擁堵，Gas 費飆升。清算機器人可能因為 Gas 費過高或交易無法上鏈，而無法及時執行清算。  
   * **壞帳產生**：如果清算不及時，抵押品的價值可能跌破借款價值（資不抵債）。這就是壞帳的來源。  
   * *歷史案例*：**2022 年 11 月 CRV 攻擊事件**。一名巨鯨試圖做空 CRV，導致 CRV 價格劇烈波動。由於 CRV 在鏈上的流動性不足以支撐如此大規模的清算，Aave 最終產生了約 **260 萬顆 CRV（當時約值 160 萬美元）的壞帳**。雖然 Aave DAO 最終使用國庫資金成功填補了這個漏洞，但這暴露了流動性不足資產在大額清算時的脆弱性 31。

### **🟡 中風險 (Moderate Risks)**

1. GHO 脫鉤風險：  
   雖然 GHO 有超額抵押和 GSM 機制，但如果市場對 Aave 協議失去信心，或者抵押品價值發生系統性崩潰，GHO 仍可能面臨脫鉤壓力。嚴重的脫鉤會損害 Aave 的聲譽，並可能導致依賴 GHO 的流動性池枯竭。  
2. 監管風險 (Regulatory Risk)：  
   全球監管機構（如美國 SEC, 歐盟 ESMA）正試圖將 DeFi 納入管轄範圍。  
   * **爭議點**：Aave 的開發者或 DAO 成員是否屬於「金融中介」？還是單純的軟體開發者？  
   * *潛在影響*：如果監管收緊，Aave 的前端網頁（aave.com）可能會被迫屏蔽特定地區的 IP（如 Uniswap 已經做的那樣），或者強制要求 KYC。雖然協議底層在區塊鏈上無法被關閉，但這會大幅提高普通用戶的參與門檻，影響流動性增長 34。

## ---

**6\. 台灣在地實務：CeFi vs DeFi 與稅務指南**

對於台灣投資者來說，參與 Aave 及其底層收益的方式主要有兩種：直接操作（DeFi）或透過交易所（CeFi）。理解兩者的差異對於資產保護至關重要。

### **6.1 CeFi vs DeFi：風險與收益的權衡**

許多台灣投資者習慣使用 **Binance (幣安)、OKX、MAX、BitoPro** 等中心化交易所（CEX）提供的「理財寶」、「Earn」或「放貸」功能。

* **CeFi 理財 (交易所)**：  
  * **運作模式**：你把 USDT 存給交易所，交易所給你一個固定或浮動的年化報酬（例如 5%）。  
  * **底層邏輯**：這是一個黑箱。交易所可能會把你的錢借給站內的槓桿交易者，也可能會把錢**再存入 Aave 或 Compound** 賺取利差，甚至可能挪用於高風險投資（如 FTX 案例）。  
  * **收益**：交易所會抽成（中間商差價），所以你的收益通常低於直接使用 DeFi 36。例如 Aave 上 USDT 利率是 8%，交易所可能只給你 5%。  
  * **風險：平台倒閉風險 (Counterparty Risk)**。這是最大的隱憂。如 **FTX、JPEX、Steaker** 等事件所示，如果交易所挪用資產、經營不善或捲款潛逃，你的錢可能血本無歸。在台灣，JPEX 和 Steaker 案件中，投資者因為無法掌握私鑰，在平台出事後只能走漫長的法律訴訟，且往往難以追回資產 37。  
  * **優點**：操作簡單，法幣出入金方便，有客服支持。  
* **DeFi 直連 (Aave)**：  
  * **運作模式**：你直接透過自託管錢包（Metamask, Ledger, Trust Wallet）與 Aave 的智能合約互動。  
  * **收益**：獲得 **100% 的協議真實收益**（Supply APY），沒有中間商賺差價。在特定時期還可能獲得 OP, ARB 等代幣的額外獎勵。  
  * **風險：智能合約漏洞與操作風險**。需自行保管私鑰（助記詞）。如果丟失私鑰或授權了惡意網站，資產會丟失。但你**不需要擔心 Aave 創辦人捲款潛逃**，因為資產都在智能合約裡，除了你自己，沒人能動用。  
  * **優點**：資產完全由自己掌控（Not your keys, not your coins），透明度極高（鏈上可查），抗審查。

**實務建議**：

* **大額資金**：強烈建議學習使用\*\*硬體錢包（Cold Wallet）\*\*直接參與 Aave。這能規避中心化交易所的黑箱風險，是保護資產的最佳方式。  
* **小額資金/新手**：可以使用 MAX 或 BitoPro 等台灣合規交易所的理財產品作為入門，但應意識到其背後的託管風險，並避免將所有資金放在單一平台。

### **6.2 台灣稅務觀念：DeFi 利息的申報指南**

隨著加密貨幣投資普及，台灣國稅局也開始關注相關稅務。針對 Aave 這類 DeFi 協議的放貸利息，目前的實務見解與申報邏輯如下 40：

1. **所得性質認定**：  
   * **海外所得**：DeFi 協議（如 Aave）並非台灣註冊實體，其運作伺服器（節點）與智能合約均位於海外（網路空間）。因此，你在 Aave 上獲得的利息收入（Supply APY），通常被視為\*\*「海外所得」\*\*。  
   * **區別於資本利得**：這與買賣比特幣產生的「資本利得（價差）」性質不同。目前台灣個人買賣加密貨幣價差的課稅規定尚不明確（常被討論是否屬於財產交易所得），但**海外利息收入**的歸類相對明確，屬於最低稅負制的範疇。  
2. 申報門檻與計算 (2025 年標準)：  
   海外所得適用於\*\*「最低稅負制（Alternative Minimum Tax, AMT）」\*\*。  
   * **門檻一：100 萬元**。如果你的全年海外所得（包含 DeFi 利息、美股股息等）合計**未達新台幣 100 萬元**，則完全**免予計入**基本所得額，也就是不用申報。  
   * **門檻二：750 萬元（基本所得免稅額）**。如果海外所得超過 100 萬，需全數計入「基本所得額」。但如果你的「基本所得額」（包含綜合所得淨額 \+ 海外所得 \+ 其他特定保險給付等）合計**未達新台幣 750 萬元**（此數字隨財政部每年公告調整，2024/2025 約為 750 萬 43），則**無需繳納**基本稅額。  
   * 繳稅公式：

     $$基本稅額 \= (\\text{基本所得額} \- 750\\text{萬}) \\times 20\\%$$

     如果計算出的「基本稅額」大於你原本的一般所得稅額，才需要補繳差額。  
3. **舉證與金流軌跡**：  
   * **金流斷點**：雖然 DeFi 是匿名的，但如果你最終是透過台灣交易所（如 MAX, BitoPro）將 USDT/USDC 換成台幣出金到銀行帳戶，金流軌跡是清晰的。如果單筆出金金額巨大（例如數百萬台幣）且無法解釋成本，國稅局可能會將其全額視為所得進行查核。  
   * **保留紀錄**：建議投資者善用區塊鏈瀏覽器（Etherscan）或資產儀表板（如 DeBank, Zapper），定期匯出 Aave 的存取款與利息紀錄截圖。這可以作為證明「這是本金取回而非全是獲利」以及「這是海外利息」的重要依據。

## ---

**7\. 結論：DeFi 基礎設施的定海神針**

Aave 已經超越了一個單純的借貸平台，它構建了一套完整的去中心化金融流動性標準，成為了區塊鏈世界中不可或缺的基礎設施。

* **對於使用者**：它是存放資產賺取被動收入的避風港，也是獲取靈活資金（如循環貸、過橋資金）的來源。  
* **對於開發者**：它是可組合性的基石，無數的 Yield Aggregator（收益聚合器）和策略協議都建立在 Aave 之上，利用其流動性構建更複雜的金融產品。  
* **對於投資者**：AAVE 代幣代表了這個龐大金融網絡的治理權與剩餘價值索取權。隨著協議收入的增長和 GHO 生態的擴張，AAVE 正展現出強大的基本面價值。

展望未來，隨著 **Umbrella 安全模組**的落地，Aave 正朝著更成熟、更具抗脆弱性的方向演進。它通過技術手段解決了傳統金融中「大到不能倒」的道德風險問題，將風險精細化並交由市場定價。在傳統金融與加密金融加速融合的未來，Aave 作為「去中心化流動性層」的價值將愈發凸顯。  
對於台灣投資者而言，理解並善用 Aave，不僅是為了獲取比傳統銀行更高的收益，更是在這個高通膨與金融不確定性並存的時代，掌握自主金融權、實踐資產自我保護的重要一步。  
*(本報告僅供教育與研究用途，不構成任何財務投資建議。加密貨幣投資具有高度風險，請務必做好 DYOR，並根據自身風險承受能力進行決策。)*

### ---

**\[附錄：借貸實戰教學 \- 如何計算安全邊際\]**

**情境**：你是一位長期持有者，手上有 10 顆 ETH，現價 $3,000/顆。你急需一筆資金支付生活開銷或裝潢費用，但不想賣掉 ETH（因為看好其長線漲幅）。你決定在 Aave 上抵押 ETH 借出 USDC。  
**關鍵數據**：

* **抵押品價值**：$30,000 ($3,000 \\times 10$)  
* **ETH 清算門檻 (Liquidation Threshold)**：83% (假設值，請以 Aave 當下參數為準)  
* **安全建議**：永遠不要借滿。為了應對幣圈 30%-50% 的閃崩，建議保持健康係數 $H\_f \\ge 2.0$。

步驟一：計算最大借款額與安全借款額

$$H\_f \= \\frac{\\text{抵押品價值} \\times \\text{清算門檻}}{\\text{借款金額}}$$  
若要 $H\_f \= 2.0$：

$$2.0 \= \\frac{30,000 \\times 0.83}{\\text{借款金額}} \\Rightarrow \\text{借款金額} \= \\frac{24,900}{2} \= 12,450$$  
**結論**：雖然系統允許你最多借 $24,900，但為了安全（保持係數 2.0），你最多只應借 **12,450 USDC**。  
步驟二：計算清算價格（你的死亡線）  
你最關心的是：ETH 跌到多少錢，我的資產會被強制拍賣？

$$\\text{清算價} \= \\frac{\\text{借款金額}}{\\text{ETH數量} \\times \\text{清算門檻}}$$

$$\\text{清算價} \= \\frac{12,450}{10 \\times 0.83} \= \\frac{12,450}{8.3} \\approx \\$1,500$$  
**意義**：只要 ETH 的價格不跌破 **$1,500**，你的倉位就是安全的。

* 當前價格 $3,000 $\\rightarrow$ 清算價格 $1,500。  
* 這意味著 ETH 需要**下跌 50%**，你才會面臨清算。這就是你留給自己的「安全邊際」。

**操作心法**：

1. **設置警報**：使用 Aave Watch 或 Hal 等工具，當健康係數低於 1.5 時發送手機通知。  
2. **預留補倉資金**：錢包裡隨時準備一些額外的 USDC 或 ETH。如果市場暴跌，立即「還款」或「增加抵押品」來拉高健康係數。  
3. **不要忽視利息**：借款是會產生利息的，這會讓你的「借款金額（分母）」隨著時間慢慢變大，導致健康係數緩慢下降。需定期檢查。

#### **引用的著作**

1. Aave's Evolution: From ETHLend to DeFi Powerhouse with GHO Stablecoin and Real-World Asset Integration | OKX, 檢索日期：1月 2, 2026， [https://www.okx.com/learn/aave-evolution-defi-gho-stablecoin](https://www.okx.com/learn/aave-evolution-defi-gho-stablecoin)  
2. The History of Aave: From Peer-to-Peer Lending to DeFi Powerhouse | A\_OHM on Binance Square, 檢索日期：1月 2, 2026， [https://www.binance.com/en/square/post/20706925625017](https://www.binance.com/en/square/post/20706925625017)  
3. Who is Stani Kulechov? \- Bitstamp, 檢索日期：1月 2, 2026， [https://www.bitstamp.net/learn/people-profiles/stani-kulechov/](https://www.bitstamp.net/learn/people-profiles/stani-kulechov/)  
4. What is Aave? — AAVE Crypto Introduction \- Coinmotion, 檢索日期：1月 2, 2026， [https://coinmotion.com/what-is-aave-crypto/](https://coinmotion.com/what-is-aave-crypto/)  
5. On Aave's E-mode Classes and their Risk Parameters \- Chaos Labs, 檢索日期：1月 2, 2026， [https://chaoslabs.xyz/resources/chaos\_aave\_e\_mode.pdf](https://chaoslabs.xyz/resources/chaos_aave_e_mode.pdf)  
6. Isolation Mode \- Aave, 檢索日期：1月 2, 2026， [https://aave.com/help/supplying/isolation-mode](https://aave.com/help/supplying/isolation-mode)  
7. Aave overview \- Token Terminal, 檢索日期：1月 2, 2026， [https://tokenterminal.com/explorer/projects/aave](https://tokenterminal.com/explorer/projects/aave)  
8. Aave Protocol's Revenue Growth Continues in 2025 \- Binance, 檢索日期：1月 2, 2026， [https://www.binance.com/en/square/post/09-12-2025-aave-protocol-s-revenue-growth-continues-in-2025-29579796567889](https://www.binance.com/en/square/post/09-12-2025-aave-protocol-s-revenue-growth-continues-in-2025-29579796567889)  
9. Aave's Q3 showed resilient revenue and calmer rates — and Stani is eyeing a Q4 macro tailwind \- Blockworks, 檢索日期：1月 2, 2026， [https://blockworks.co/news/aave-stani](https://blockworks.co/news/aave-stani)  
10. Contract Architecture \- Health Factor \- Aave V3 Protocol Development \- Video, 檢索日期：1月 2, 2026， [https://updraft.cyfrin.io/courses/aave-v3/contract-architecture/health-factor](https://updraft.cyfrin.io/courses/aave-v3/contract-architecture/health-factor)  
11. Aave Revenue \- Token Terminal, 檢索日期：1月 2, 2026， [https://tokenterminal.com/explorer/projects/aave/metrics/revenue](https://tokenterminal.com/explorer/projects/aave/metrics/revenue)  
12. Aave Interest Rate Model Explained \- Krayon Digital, 檢索日期：1月 2, 2026， [https://www.krayondigital.com/blog/aave-interest-rate-model-explained](https://www.krayondigital.com/blog/aave-interest-rate-model-explained)  
13. Aave Protocol Parameter Dashboard, 檢索日期：1月 2, 2026， [https://aave.com/docs/resources/parameters](https://aave.com/docs/resources/parameters)  
14. Health Factor & Liquidations \- Aave, 檢索日期：1月 2, 2026， [https://aave.com/help/borrowing/liquidations](https://aave.com/help/borrowing/liquidations)  
15. Flash Loans | Aave Protocol Documentation, 檢索日期：1月 2, 2026， [https://aave.com/docs/aave-v3/guides/flash-loans](https://aave.com/docs/aave-v3/guides/flash-loans)  
16. Flash Loans: Aave. How are Aave flash loans used? | by Maddy Bergen | ElektraVC, 檢索日期：1月 2, 2026， [https://medium.com/elektravc/flash-loans-aave-a0a2e8791a60](https://medium.com/elektravc/flash-loans-aave-a0a2e8791a60)  
17. GHO Stablecoin | Aave, 檢索日期：1月 2, 2026， [https://aave.com/help/gho-stablecoin/gho](https://aave.com/help/gho-stablecoin/gho)  
18. How Aave's stablecoin GHO is core to its plan to 10X its revenue | The Block, 檢索日期：1月 2, 2026， [https://www.theblock.co/post/350525/how-aaves-stablecoin-gho-is-core-to-its-plan-to-10x-its-revenue](https://www.theblock.co/post/350525/how-aaves-stablecoin-gho-is-core-to-its-plan-to-10x-its-revenue)  
19. Aave's GHO stablecoin finally reaches $1 peg \- DL News, 檢索日期：1月 2, 2026， [https://www.dlnews.com/articles/defi/aave-stablecoin-gho-finally-reaches-1-peg/](https://www.dlnews.com/articles/defi/aave-stablecoin-gho-finally-reaches-1-peg/)  
20. Foundation \- Isolation Mode \- Aave V3 Protocol Development \- Video, 檢索日期：1月 2, 2026， [https://updraft.cyfrin.io/courses/aave-v3/foundation/isolation-mode](https://updraft.cyfrin.io/courses/aave-v3/foundation/isolation-mode)  
21. A Note on Isolation Mode Risk Parameters \- Chaos Labs, 檢索日期：1月 2, 2026， [https://chaoslabs.xyz/resources/chaos\_aave\_isolation\_mode.pdf](https://chaoslabs.xyz/resources/chaos_aave_isolation_mode.pdf)  
22. Aave V3 Technical Paper \- CryptoCompare, 檢索日期：1月 2, 2026， [https://resources.cryptocompare.com/asset-management/9/1682584843504.pdf](https://resources.cryptocompare.com/asset-management/9/1682584843504.pdf)  
23. \[TEMP CHECK\] AAVEnomics update \- Aave \- Governance Forum, 檢索日期：1月 2, 2026， [https://governance.aave.com/t/temp-check-aavenomics-update/18379](https://governance.aave.com/t/temp-check-aavenomics-update/18379)  
24. \[ARFC\] Safety Module & Umbrella Emission Update \- Governance \- Aave forum, 檢索日期：1月 2, 2026， [https://governance.aave.com/t/arfc-safety-module-umbrella-emission-update/23103](https://governance.aave.com/t/arfc-safety-module-umbrella-emission-update/23103)  
25. BGD. Aave Safety Module \- Umbrella \- \#5 by karpatkey\_TokenLogic \- Development, 檢索日期：1月 2, 2026， [https://governance.aave.com/t/bgd-aave-safety-module-umbrella/18366/5](https://governance.aave.com/t/bgd-aave-safety-module-umbrella/18366/5)  
26. Umbrella | Aave Protocol Documentation, 檢索日期：1月 2, 2026， [https://aave.com/docs/aave-v3/umbrella](https://aave.com/docs/aave-v3/umbrella)  
27. BGD. Aave Safety Module \- Umbrella \- Development \- Aave, 檢索日期：1月 2, 2026， [https://governance.aave.com/t/bgd-aave-safety-module-umbrella/18366](https://governance.aave.com/t/bgd-aave-safety-module-umbrella/18366)  
28. Aave Umbrella: Turning risk into yield | Exponential DeFi, 檢索日期：1月 2, 2026， [https://exponential.fi/blog/aave-umbrella-turning-risk-into-yield](https://exponential.fi/blog/aave-umbrella-turning-risk-into-yield)  
29. Methodology: Isolation Mode | by Gauntlet \- Medium, 檢索日期：1月 2, 2026， [https://medium.com/gauntlet-networks/methodology-isolation-mode-3b8d67eee695](https://medium.com/gauntlet-networks/methodology-isolation-mode-3b8d67eee695)  
30. Arbitrum | Aave, 檢索日期：1月 2, 2026， [https://aave.com/blog/aave-arbitrum](https://aave.com/blog/aave-arbitrum)  
31. Aave V3 Risk Parameter Methodology \- Chaos Labs, 檢索日期：1月 2, 2026， [https://chaoslabs.xyz/resources/chaos\_aave\_risk\_param\_methodology.pdf](https://chaoslabs.xyz/resources/chaos_aave_risk_param_methodology.pdf)  
32. An In-depth Analysis of How AAVE's $1.6 Million Bad Debt Was Created \- Medium, 檢索日期：1月 2, 2026， [https://medium.com/@eigenphi/an-in-depth-analysis-of-how-aaves-1-6-million-bad-debt-was-created-ab74027ea108](https://medium.com/@eigenphi/an-in-depth-analysis-of-how-aaves-1-6-million-bad-debt-was-created-ab74027ea108)  
33. CRV, Aave, and the Art of Liquidation \- Kaiko \- Research, 檢索日期：1月 2, 2026， [https://research.kaiko.com/insights/crv-aave-liquidation](https://research.kaiko.com/insights/crv-aave-liquidation)  
34. Digital Assets Regulation: Insights from Jurisdictional Approaches \- World Economic Forum: Publications, 檢索日期：1月 2, 2026， [https://www3.weforum.org/docs/WEF\_Digital\_Assets\_Regulation\_2024.pdf](https://www3.weforum.org/docs/WEF_Digital_Assets_Regulation_2024.pdf)  
35. Regulation (EU) 2023/ of the European Parliament and of the Council of 31 May 2023 on markets in crypto-assets, and amending Re \- EUR-Lex, 檢索日期：1月 2, 2026， [https://eur-lex.europa.eu/legal-content/EN/TXT/PDF/?uri=CELEX:32023R1114](https://eur-lex.europa.eu/legal-content/EN/TXT/PDF/?uri=CELEX:32023R1114)  
36. Yield Generation in Crypto: Passive Income (2025) \- XBTO, 檢索日期：1月 2, 2026， [https://www.xbto.com/resources/what-is-yield-generation-in-crypto-a-beginners-guide-to-earning-passive-income-2025](https://www.xbto.com/resources/what-is-yield-generation-in-crypto-a-beginners-guide-to-earning-passive-income-2025)  
37. The JPEX scandal: a test case for Hong Kong's new cryptocurrency regulatory regime or is it still the wild west? \- Frontiers, 檢索日期：1月 2, 2026， [https://www.frontiersin.org/journals/blockchain/articles/10.3389/fbloc.2024.1492739/full](https://www.frontiersin.org/journals/blockchain/articles/10.3389/fbloc.2024.1492739/full)  
38. The Taiwan Banker DeFi faces a credibility problem, 檢索日期：1月 2, 2026， [https://service.tabf.org.tw/TTB/Article/DetailEn?aID=672](https://service.tabf.org.tw/TTB/Article/DetailEn?aID=672)  
39. Founder of Taiwan's crypto currency startup Steaker detained \- CommonWealth Magazine, 檢索日期：1月 2, 2026， [https://english.cw.com.tw/article/article.action?id=3364](https://english.cw.com.tw/article/article.action?id=3364)  
40. 報稅大限倒數！加密貨幣在台灣要報稅嗎？境內、海外所得不一樣？一次搞懂比特幣報稅重點｜幣圈新手村 \- Yahoo股市, 檢索日期：1月 2, 2026， [https://tw.stock.yahoo.com/news/%E5%A0%B1%E7%A8%85%E5%A4%A7%E9%99%90%E5%80%92%E6%95%B8%EF%BC%81%E5%8A%A0%E5%AF%86%E8%B2%A8%E5%B9%A3%E5%9C%A8%E5%8F%B0%E7%81%A3%E8%A6%81%E5%A0%B1%E7%A8%85%E5%97%8E%EF%BC%9F%E5%A2%83%E5%85%A7%E3%80%81%E6%B5%B7%E5%A4%96%E6%89%80%E5%BE%97%E4%B8%8D%E4%B8%80%E6%A8%A3%EF%BC%9F%E4%B8%80%E6%AC%A1%E6%90%9E%E6%87%82%E6%AF%94%E7%89%B9%E5%B9%A3%E5%A0%B1%E7%A8%85%E9%87%8D%E9%BB%9E-%EF%BD%9C%E5%B9%A3%E5%9C%88%E6%96%B0%E6%89%8B%E6%9D%91-100039860.html](https://tw.stock.yahoo.com/news/%E5%A0%B1%E7%A8%85%E5%A4%A7%E9%99%90%E5%80%92%E6%95%B8%EF%BC%81%E5%8A%A0%E5%AF%86%E8%B2%A8%E5%B9%A3%E5%9C%A8%E5%8F%B0%E7%81%A3%E8%A6%81%E5%A0%B1%E7%A8%85%E5%97%8E%EF%BC%9F%E5%A2%83%E5%85%A7%E3%80%81%E6%B5%B7%E5%A4%96%E6%89%80%E5%BE%97%E4%B8%8D%E4%B8%80%E6%A8%A3%EF%BC%9F%E4%B8%80%E6%AC%A1%E6%90%9E%E6%87%82%E6%AF%94%E7%89%B9%E5%B9%A3%E5%A0%B1%E7%A8%85%E9%87%8D%E9%BB%9E-%EF%BD%9C%E5%B9%A3%E5%9C%88%E6%96%B0%E6%89%8B%E6%9D%91-100039860.html)  
41. 加密貨幣投資者需要報稅嗎？境內/外收入有何差異、虛擬貨幣虧損可認列損失？ | 動區動趨, 檢索日期：1月 2, 2026， [https://www.blocktempo.com/tax-regulations-that-taiwanese-crypto-investors-need-to-know/](https://www.blocktempo.com/tax-regulations-that-taiwanese-crypto-investors-need-to-know/)  
42. 2025最新》虛擬貨幣報稅怎麼算？加密貨幣節稅方法？附律師見解 \- 加密城市, 檢索日期：1月 2, 2026， [https://www.cryptocity.tw/news/2024-cryptocurrency-tax-filing-income](https://www.cryptocity.tw/news/2024-cryptocurrency-tax-filing-income)  
43. Finance ministry pledges to address cryptocurrency taxation issue \- Taipei Times, 檢索日期：1月 2, 2026， [https://www.taipeitimes.com/News/biz/archives/2024/11/19/2003827113](https://www.taipeitimes.com/News/biz/archives/2024/11/19/2003827113)