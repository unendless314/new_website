---
title: "Collateral（抵押品）"
date: 2026-01-05
description: "DeFi 借貸的基石，想借錢？先把你的資產押在這裡。"
author: unendless314
image: "../../assets/astrogon-star.svg"
imageAlt: "當鋪的櫃檯"
categories: ["C"]
tags: ["DeFi", "借貸", "金融"]
---

## 什麼是 Collateral？

在 DeFi (去中心化金融) 協議中，Collateral (抵押品) 是借款人為了獲得貸款而鎖定在智能合約中的資產。

由於區塊鏈上沒有信用評分系統 (Credit Score)，無法進行信用貸款，所以幾乎所有的 DeFi 借貸（如 Aave, Compound, MakerDAO）都是**「超額抵押 (Over-Collateralized)」**的。

## 大白話解釋

**這就像是「線上當鋪」。**

*   **傳統貸款:** 銀行看你的薪資證明、信用分數，決定借你多少錢。
*   **DeFi 貸款:** 協議不認識你。你想借 1000 美金的 USDT？沒問題，請先抵押價值 1500 美金的 ETH 在我這裡。如果你不還錢，或者 ETH 跌太慘，我就把你的 ETH 賣掉（清算）來抵債。

## 關鍵指標

1.  **LTV (Loan-to-Value, 貸款價值比):** 
    *   你能借多少錢的比例。
    *   *例:* LTV 75% 代表抵押 100 元資產，最多能借 75 元。
2.  **Liquidation Threshold (清算門檻):**
    *   當資產跌到什麼程度會被強制賣出。
    *   *例:* 如果 ETH 價格大跌，導致你的抵押品價值低於借款金額的一定比例，你的 ETH 就會被清算 (Liquidation)。

## 為什麼要抵押借貸？

*   **不想賣幣:** 你急需用錢（USDT），但你覺得 ETH 未來會漲，不想現在賣掉。於是你抵押 ETH 借出 USDT。
*   **槓桿 (Leverage):** 抵押 ETH 借出 USDT，再用 USDT 買更多 ETH。循環操作可以放大你的獲利（和虧損）。

## 總結

Collateral 是 DeFi 系統信任的來源。它確保了即使借款人跑路，放款人的錢也是安全的。
