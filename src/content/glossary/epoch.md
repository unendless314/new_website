---
title: "Epoch（紀元）"
date: 2026-01-05
description: "區塊鏈世界的時間單位，用於結算獎勵與更新驗證者名單的週期。"
author: unendless314
image: "../../assets/astrogon-star.svg"
imageAlt: "時鐘與日曆"
categories: ["E"]
tags: ["時間", "機制", "Staking"]
---

## 什麼是 Epoch？

在區塊鏈網路（特別是 PoS 公鏈，如 Solana, Cardano, Ethereum）中，Epoch (紀元) 是一個特定的時間單位，通常包含了一定數量的區塊 (Slots/Blocks)。

它不是我們習慣的「分鐘」或「小時」，而是區塊鏈自己的心跳節奏。

## 大白話解釋

**Epoch 就像是學校的「學期」或公司的「會計年度」。**

*   **結算週期:** 區塊鏈不會每秒鐘都發薪水（質押獎勵）。它會累積一個 Epoch（比如 2 天），然後在 Epoch 結束時統一結算：誰這段時間表現好發獎金，誰表現不好扣錢。
*   **換屆選舉:** 每個 Epoch 結束時，系統可能會重新洗牌，選出下一個 Epoch 的驗證者 (Validator) 名單。

## 不同鏈的 Epoch 長度

*   **Ethereum:** 1 個 Epoch 約為 **6.4 分鐘** (32 個 Slot)。
*   **Solana:** 1 個 Epoch 約為 **2-3 天** (432,000 個 Slot)。如果你在 Solana 上質押，你通常要等一個 Epoch 結束才能看到獎勵入帳，或者在解除質押時要等一個 Epoch 才能拿回幣。
*   **Cardano:** 1 個 Epoch 為 **5 天**。

## 為什麼需要 Epoch？

1.  **效率:** 批量處理獎勵發放比每筆交易都處理更節省資源。
2.  **安全性:** 定期更換驗證者委員會 (Committee)，讓攻擊者難以預測和賄賂下一個負責記帳的人。
3.  **緩衝期:** 解除質押通常需要經過數個 Epoch 的「冷靜期 (Unbonding Period)」，防止大戶在幣價崩盤時瞬間撤資砸盤，保護網路安全。

## 總結

Epoch 是區塊鏈內部的生理時鐘，理解它有助於你計算質押收益的發放時間與資金流動性。
