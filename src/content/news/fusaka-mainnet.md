---
title: "【深度解讀】以太坊 Fusaka 升級：PeerDAS 開啟 L2 擴容新紀元"
date: 2025-11-06
author: wu-yan
categories: ["深度研究", "以太坊", "基礎設施"]
tags: ["Ethereum", "Fusaka", "PeerDAS", "EIP-7594", "BPO", "Layer2"]
description: "Fusaka 升級不僅是例行維護，更是 PeerDAS 技術的首次主網實戰。本文深入拆解升級細節、關鍵 EIP 與其對 L2 經濟模型的深遠影響。"
image: "@assets/news/fusaka-mainnet.webp"
imageAlt: "Ethereum Fusaka Upgrade Technical Diagram"
complexity: 3
---

## 來源資訊
- **發布日期**：2025 年 11 月 06 日
- **原文來源**：[Ethereum Foundation Blog](https://blog.ethereum.org/en/2025/11/06/fusaka-mainnet-announcement)
- **關鍵詞**：Fusaka Upgrade, PeerDAS, EIP-7594, BPO, Blob Throughput

## 從 Dencun 到 Fusaka
2024 年的 Dencun 升級引入了 EIP-4844（Proto-Danksharding），透過 Blob 交易成功將 Layer 2 的成本降低了 10 倍以上。然而，Dencun 只是「臨時解決方案」，每個區塊的 Blob 數量仍受到節點頻寬的嚴格限制。

**Fusaka 升級（Fusaka Upgrade）** 正是為了突破這一瓶頸而來。它標誌著以太坊正式邁入 **PeerDAS（對等數據可用性採樣）** 時代，這是實現最終願景——完全分片（Danksharding）的關鍵前哨戰。

## 技術深鑽 (Technical Deep Dive)

本次升級的核心不在於「新功能」，而在於「底層驗證機制的重構」。

### 1. PeerDAS：數據可用性的質變 (EIP-7594)
在 Dencun 時代，驗證者必須下載「完整」的 Blob 數據才能確認其可用性，這導致節點負擔過重。
**PeerDAS (Peer Data Availability Sampling)** 改變了這個規則：

- **分佈式儲存**：Blob 數據不再由單個節點完整下載，而是被切割並分散儲存在網路中。
- **子網採樣 (Subnet Sampling)**：驗證者只需隨機下載（採樣）極小部分的數據碎片（Chunks），即可透過數學機率（Erasure Coding）驗證整個 Blob 是否可用。
- **結果**：在不增加單一節點頻寬壓力的情況下，網路整體的 Blob 吞吐量可以提升 2-4 倍（目標是單區塊 16-32 MB）。

### 2. BPO 分叉：靈活的參數調整機制
過去，調整區塊大小或 Gas 上限需要經歷完整的硬分叉流程，耗時且充滿政治摩擦。
**Blob Parameter Only (BPO)** 分叉是一種輕量級的升級路徑：

- **解耦參數**：將 Blob 的數量上限（Max Blobs）和目標數量（Target Blobs）與執行層的其他複雜邏輯解耦。
- **動態調整**：允許網路根據 L2 的實際需求，透過更簡單的客戶端配置更新來動態調整吞吐量參數，無需暫停或大規模重啟。

## 關鍵 EIP 清單全解析

Fusaka 升級打包了以下關鍵提案，每一個都針對特定的痛點：

| EIP 編號 | 名稱 | 技術解讀 |
| :--- | :--- | :--- |
| **EIP-7594** | **PeerDAS** | 本次升級的核心。引入了矩陣映射與列採樣機制，允許節點驗證他們未完整下載的數據。 |
| **EIP-7702** | **EOA 帳戶抽象增強** | 允許普通錢包（EOA）在交易執行期間「臨時」具備合約功能（如批次交易、代付 Gas），是邁向全面帳戶抽象的過渡方案。 |
| **EIP-7251** | **MaxEB (增加最大有效餘額)** | 將驗證者的最大質押上限從 32 ETH 提升至 2048 ETH。這能顯著減少 P2P 網路中的訊息負載，降低對網路頻寬的需求。 |
| **EIP-7002** | **執行層觸發退出** | 允許智能合約（如 Lido, Rocket Pool）直接觸發驗證者退出信標鏈，增強了流動性質押協議的去中心化與安全性。 |

## 鏈魂點評 (Chain Soul Insights)

作為長期關注基礎設施的觀察者，我們認為 Fusaka 的影響將體現在以下三個維度：

### 1. L2 經濟模型的二次革命
隨著 PeerDAS 上線，Blob 的供應量將大幅增加。短期內，**L2 的 DA 成本可能趨近於零**。這將迫使 L2 項目方尋找新的商業模式——單純靠「轉售以太坊區塊空間」賺取價差的日子即將結束。未來 L2 的競爭將完全轉向**排序器（Sequencer）服務**與**生態應用**。

### 2. 驗證者門檻的微妙平衡
EIP-7594 雖然減少了頻寬需求，但增加了對**計算能力（CPU）**和**記憶體（RAM）**的要求（用於處理 Erasure Coding）。這可能導致部分低階家用節點退出，專業化驗證節點的優勢將進一步擴大。社群需密切關注中心化風險。

### 3. 流動性質押 (LSD) 的風險釋放
EIP-7002 是 LSD 賽道被低估的利好。過去，LSD 協議依賴節點運營商「手動」退出質押來應對贖回潮；現在，協議可以透過程式碼強制執行退出。這消除了「運營商挾持資金」的尾部風險，可能吸引更多機構資金進入 ETH 質押市場。

---

## 總結
Fusaka 不是終點，而是以太坊擴容路線圖中最艱難的一段爬坡。它證明了以太坊有能力在運行中更換引擎（從全量下載轉向採樣驗證）。對於投資者而言，現在是關注那些能利用高性能 DA 層構建「高頻應用」（如全鏈遊戲、去中心化社交）的最佳時機。

> **延伸閱讀**：[PeerDAS 技術規範書] | [EIP-7702 實作指南]
