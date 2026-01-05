---
title: "Validator（驗證者）"
date: 2026-01-05
description: "PoS 區塊鏈的守護者，質押代幣並負責打包區塊的礦工。"
author: unendless314
image: "../../assets/astrogon-star.svg"
imageAlt: "檢視文件的檢察官"
categories: ["V"]
tags: ["PoS", "節點", "挖礦"]
---

## 什麼是 Validator？

在 Proof of Stake (PoS, 權益證明) 的區塊鏈網路（如 Ethereum 2.0, Solana, Cardano）中，Validator (驗證者) 取代了比特幣網路中 Miner (礦工) 的角色。

他們是負責運行節點軟體、儲存區塊鏈帳本、驗證交易合法性，並提議新區塊的參與者。

## 大白話解釋

**Validator 就是區塊鏈世界的「記帳員」兼「保全」。**

*   **工作:** 系統會隨機選人來記帳。被選中的 Validator 負責把大家的交易寫進帳本。其他 Validator 負責檢查他寫得對不對。
*   **薪水:** 做得好（誠實記帳、保持在線），系統會發給他代幣獎勵 (Staking Rewards)。
*   **懲罰:** 做得不好（亂記帳、離線偷懶），系統會沒收他抵押的錢 (Slashing)。

## 如何成為 Validator？

這需要「帶資進組」。
1.  **質押 (Staking):** 你必須鎖定一定數量的代幣作為保證金（例如以太坊要求 32 ETH）。這確保了如果你作惡，你有資產可以被沒收。
2.  **硬體設備:** 你需要一台 24 小時聯網、性能足夠的伺服器來運行節點軟體。

## 與 Delegator (委託人) 的關係

大多數散戶沒有 32 ETH，也不會架設伺服器。所以他們會把幣 **Delegate (委託)** 給專業的 Validator。
*   散戶分享收益。
*   Validator 收取一點手續費 (Commission)。
這就是一般的 Staking (質押) 理財。

## 總結

Validator 是 PoS 網路安全與運行的基礎。驗證者越分散、數量越多，區塊鏈就越去中心化、越安全。
