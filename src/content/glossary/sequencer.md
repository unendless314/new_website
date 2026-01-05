---
title: "Sequencer（排序器）"
date: 2026-01-05
description: "Layer 2 的交通指揮官，決定交易順序的關鍵角色，也是目前的中心化隱憂。"
author: unendless314
image: "../../assets/astrogon-star.svg"
imageAlt: "指揮交通的警察"
categories: ["S"]
tags: ["Layer2", "Rollup", "基礎設施"]
---

## 什麼是 Sequencer？

Sequencer (排序器) 是 Layer 2 (如 Optimism, Arbitrum, Base) 網路中的一個核心組件。它的主要工作是接收用戶在 L2 上發出的交易請求，將它們**排序**，然後打包成一個批次 (Batch)，最後提交給 Layer 1 (以太坊)。

## 大白話解釋

**Sequencer 就像是公車上的「收票員」或「排隊引導員」。**

*   **沒有 L2 時 (直接用 L1):** 大家都要擠進以太坊這台小車，誰付的錢 (Gas) 多誰先上車，非常擁擠且昂貴。
*   **有了 L2:** 大家先在站牌把票交給 Sequencer。Sequencer 把幾千個人的票收好，整理一下順序，然後一次性幫大家把資料送到總站 (以太坊)。這樣大家分攤下來的車費就變得很便宜。

## 現狀與爭議：中心化問題

目前絕大多數主流的 Layer 2 Rollup，其 Sequencer 都是**中心化**的，通常由項目方自己運行。

這帶來了幾個風險：
1.  **單點故障 (SPOF):** 如果 Sequencer 當機，整個 L2 網路可能就會暫停運作（雖然資金通常是安全的，但無法交易）。
2.  **審查風險 (Censorship):** 理論上，中心化的 Sequencer 可以故意「拒絕」打包某個用戶的交易。
3.  **MEV 獨佔:** 排序器可以決定交易順序，意味著它可以自己提取 MEV (最大可提取價值) 利潤，而不用分給用戶。

## 未來展望：去中心化排序器 (Decentralized Sequencer)

為了解決上述問題，各大 L2 項目都在路線圖中承諾未來會實現「共享排序器 (Shared Sequencer)」或允許第三方運行排序器，讓 L2 真正回歸去中心化。

## 總結

Sequencer 是 L2 實現低費率、高速度的功臣，但也是目前 L2 最大的中心化短板。
