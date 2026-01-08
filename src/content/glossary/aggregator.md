---
title: "Aggregator（聚合器）"
date: 2026-01-05
description: "幣圈的 Skyscanner，幫你在幾十個市場中找到最划算的價格。"
author: unendless314
image: "../../assets/glossary/aggregator.webp"
imageAlt: "多條路徑匯聚一點"
categories: ["A"]
tags: ["DeFi", "工具", "交易"]
---

## 什麼是 Aggregator？

DeFi Aggregator (聚合器) 是一種工具平台，它不提供自己的流動性，而是連接了幾十個、甚至上百個其他的去中心化交易所 (DEX) 或借貸協議。

它的目標是幫用戶找到**「最佳路徑」 (Best Execution)**。

## 大白話解釋

**Aggregator 就是「比價網」或「機票搜尋引擎」。**

*   **不用聚合器:** 你想買 ETH。你去 Uniswap 看是 2000，去 SushiSwap 看是 1998，去 Curve 看是 2002...你需要自己開好幾個分頁比價，很麻煩。
*   **使用聚合器 (如 1inch, Jupiter):** 你輸入「我想用 USDC 買 ETH」。聚合器會瞬間掃描所有交易所，告訴你：「去 SushiSwap 買一半，去 Uniswap 買一半，這樣平均價格最便宜」，並且幫你一鍵執行。

## 常見類型

1.  **DEX Aggregator (交易聚合):** 如 1inch, Jupiter, ParaSwap。幫你買得最便宜。
2.  **Yield Aggregator (收益聚合):** 如 Yearn Finance, Beefy。幫你找到利息最高的地方存錢。
3.  **NFT Aggregator (NFT 聚合):** 如 Gem (OpenSea Pro), Blur。幫你一次掃貨多個市場的 NFT。

## 優點

*   **更優價格:** 通常比單一交易所的價格更好。
*   **節省時間:** 不需要自己到處找。
*   **解決流動性問題:** 對於大額交易，聚合器可以把單子拆散到多個池子消化，減少滑點。

## 總結

在 DeFi 世界，Aggregator 是是用戶最常接觸的入口 (Frontend)。「與其自己造輪子，不如整合所有的輪子」，這就是聚合器的核心價值。
