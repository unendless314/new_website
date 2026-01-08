---
title: "【深度研報】Multicoin Capital：Ethena 如何用合成美元挑戰雙寡頭壟斷"
date: 2025-11-13
author: wu-yan
categories: ["深度研究", "穩定幣", "DeFi"]
tags: ["Ethena", "USDe", "Multicoin", "Stablecoin", "Basis Trade", "Real Yield"]
description: "Multicoin Capital 發布重磅報告，解析 Ethena 如何透過「Delta 中性」策略重構穩定幣市場，並探討 USDe 挑戰 USDT/USDC 霸權的底氣與風險。"
image: "@assets/news/ethena-synthetic-dollars.webp"
imageAlt: "Ethena Synthetic Dollar Analysis"
complexity: 3
---

## 來源資訊
- **發布日期**：2025 年 11 月 13 月
- **原文來源**：[Multicoin Capital Blog](https://multicoin.capital/2025/11/13/ethena-synthetic-dollars-challenge-stablecoins-duopoly/)
- **關鍵詞**：Synthetic Dollar, Basis Trade, Internet Bond

## 前言：穩定幣的「不可能三角」與第三條路

長期以來，穩定幣市場被兩大陣營割據：
1.  **法幣託管型 (USDT, USDC)**：資本效率高 (1:1)，但存在中心化審查與銀行託管風險。
2.  **超額抵押型 (DAI)**：去中心化，但資本效率極低（需抵押 >\$1 的資產），無法大規模擴張。

Multicoin Capital 認為，**Ethena (USDe)** 代表了第三種演進路徑：**合成美元 (Synthetic Dollar)**。它不依賴傳統銀行體系，卻能保持 1:1 的資本效率，這是一場關於「貨幣發行權」的技術革命。

## 核心機制拆解：收益來自何方？

USDe 的高收益並非憑空而來的 Ponzi，而是來自兩個真實的鏈上與市場來源。這就是所謂的 **「網際網路債券 (The Internet Bond)」** 模型。

### 1. 基礎交易 (The Basis Trade)
這是 Ethena 的核心引擎。簡單來說，它執行一個自動化的 **Delta 中性對沖** 策略：
- **做多 (Long)**：持有現貨 ETH 或 LST (如 stETH)。
- **做空 (Short)**：在交易所 (CEX) 開設等值的 ETH 永續合約空單。

**收益來源 A：質押收益**
持有的 stETH 能夠獲得以太坊網路的 PoS 質押獎勵（約 3-4%）。

**收益來源 B：資金費率 (Funding Rate)**
在加密貨幣的多頭市場中，做多者通常需要支付費用給做空者。Ethena 作為大規模的空頭持有者，能夠持續收取這筆資金費率。歷史數據顯示，這筆收益年化可達 5-20% 不等。

## 鏈魂點評：風險與護城河 (Chain Soul Insights)

Multicoin 的報告極度看好 Ethena，但作為客觀的教育者，我們必須審視其潛在的脆弱性與價值捕獲能力。

### 1. 負費率風險 (The Bear Market Test)
Ethena 最大的敵人是「長期熊市」。如果市場情緒極度悲觀，資金費率轉負（做空者需付費給做多者），且幅度超過了 stETH 的質押收益，USDe 的錨定機制就會面臨考驗。
*   **應對機制**：Ethena 設有保險基金 (Insurance Fund)，在正收益時期抽成儲備，用於在負收益時期補貼用戶。目前的保險基金規模能否抵禦「黑天鵝」級別的長期深熊，是觀察重點。

### 2. 託管與交易對手風險
與完全鏈上的 MakerDAO 不同，Ethena 依賴 CEX (Binance, Bybit) 進行對沖。這引入了兩個風險：
- **交易所倒閉**：雖然 Ethena 使用「場外結算 (Off-Exchange Settlement, OES)」技術，資金託管在第三方（如 Copper, Fireblocks），不直接進入交易所，大幅降低了 FTX 式的挪用風險，但交易對手違約仍是理論風險。

### 3. ENA 代幣的價值捕獲
報告最後提到了 ENA 代幣的潛力。隨著 USDe 發行量突破百億規模，協議收入極其驚人。
- **費用切換 (Fee Switch)**：未來若開啟費用開關，部分協議收入可直接分配給 sENA 持有者。
- **治理權**：控制各個交易所的資金分配權重，這對於爭奪流動性的交易所來說具有極高的戰略價值（類似 Curve Wars 的邏輯）。

## 總結

Ethena 正在做一件大膽的事：它試圖將加密原生收益（Staking + Basis）打包成一種基礎貨幣。如果它成功，USDe 將不僅僅是交易所裡的籌碼，而會成為 DeFi 世界甚至傳統金融眼中的「高收益美元定存」。

對於投資者而言，理解 Ethena 就是理解 **「收益結構」** 與 **「風險定價」** 的過程。
