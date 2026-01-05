---
title: "Custody（託管）"
date: 2026-01-05
description: "誰真正持有你的私鑰？幣圈生存法則第一條：Not your keys, not your coins."
author: unendless314
image: "../../assets/astrogon-star.svg"
imageAlt: "保險箱與鑰匙"
categories: ["C"]
tags: ["安全", "錢包", "基礎知識"]
---

## 什麼是 Custody？

Custody (託管) 指的是對加密資產（具體來說是**私鑰 Private Key**）的保管權。

在幣圈，根據「誰拿著鑰匙」，分為兩大類：
1.  **Custodial (託管式/中心化):** 鑰匙由第三方（如交易所）保管。
2.  **Non-Custodial / Self-Custody (非託管/自託管):** 鑰匙由你自己保管。

## 大白話解釋

**差別在於錢是「存在銀行」還是「塞在床底下的保險箱」。**

*   **Custodial (比如 Binance 帳戶):** 
    *   你看到的餘額只是數據庫裡的一個數字。
    *   真正的幣在 Binance 的錢包裡。
    *   如果 Binance 倒閉（如 FTX）或捲款跑路，你的錢就沒了。你對資產只有「請求權」，沒有「所有權」。
*   **Self-Custody (比如 MetaMask, Ledger):**
    *   私鑰（註記詞）只有你知道。
    *   幣真的在區塊鏈上屬於你。
    *   沒人能凍結你的資產，但如果你弄丟了私鑰，也沒人能幫你找回（神仙難救）。

## 機構級託管 (Institutional Custody)

對於大資金或基金公司來說，Self-Custody 風險太大（員工可能偷私鑰）。所以他們會找專業的「託管商」 (如 Coinbase Custody, BitGo)。這些公司提供銀行級別的物理安全防護、多重簽名管理和保險，這是 ETF 能夠通過的關鍵基礎設施。

## 如何選擇？

*   **小額資金/頻繁交易:** 放在 **Custodial** (大交易所) 比較方便，省 Gas 費。
*   **大額資金/長期持有:** 務必使用 **Self-Custody** (冷錢包)，確保資產絕對安全。

## 總結

**"Not your keys, not your coins" (沒有私鑰，就不是你的幣)**。這是無數人用血淚換來的教訓。理解 Custody 是保護自己資產的第一步。
