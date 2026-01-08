---
title: "【硬核技術】Trail of Bits：如何在後量子 Go 加密庫中封殺側信道攻擊"
date: 2025-11-14
author: wu-yan
categories: ["技術開發", "安全", "密碼學"]
tags: ["Go", "Cryptography", "Post-Quantum", "Side-channel", "ML-DSA"]
description: "安全公司 Trail of Bits 揭秘其後量子加密庫的開發細節，深入探討如何透過「無分支編程」與「Barrett Reduction」防禦側信道攻擊。"
image: "@assets/news/post-quantum-go-crypto.jpg"
imageAlt: "Side Channel Defense"
complexity: 4
---

## 來源資訊
- **發布日期**：2025 年 11 月 14 日
- **原文來源**：[Trail of Bits Blog](https://blog.trailofbits.com/2025/11/14/how-we-avoided-side-channels-in-our-new-post-quantum-go-cryptography-libraries/)
- **關鍵詞**：Side-channel Attacks, Constant-time Programming, ML-DSA, KyberSlash, Go

## 前言：當演算法完美，但實作有毒
在密碼學界，有一個常被忽視的真理：「安全的演算法不等於安全的程式碼」。即使數學證明了某個後量子演算法（如 ML-DSA）堅不可摧，但如果工程師在寫程式碼時留下了蛛絲馬跡，駭客依然能攻破系統。

這就是 Trail of Bits 這篇技術網誌的核心：他們如何在 Go 語言中實作最新的 FIPS-204 (ML-DSA) 與 FIPS-205 (SLH-DSA) 標準，同時堵死所有「側信道」。

## 什麼是側信道攻擊 (Side-Channel Attack)？
想像一個保險箱，雖然你不知道密碼，但如果你能聽到轉盤轉動時內部齒輪摩擦的聲音差異，你就有可能推算出密碼。

在電腦中，這就是**側信道**。當加密庫執行不同的運算（例如處理 0 和處理 1）時，如果消耗的時間、電力或產生的電磁波不同，攻擊者就能透過精密的測量反推出私鑰。最著名的案例之一就是針對 Kyber 演算法的 **KyberSlash** 攻擊，它利用了「除法運算」的時間差異來竊取密碼。

## 技術解密：Trail of Bits 的防禦術
為了在 Go 語言中實現絕對的安全性，Trail of Bits 團隊祭出了兩大黑科技：

### 1. 無分支密碼學 (Branchless Cryptography)
傳統程式碼充滿了 `if-else` 判斷。
*   **危險**：如果 `if (secret == 1)` 執行路徑 A，`else` 執行路徑 B，兩條路徑的指令數量不同，攻擊者一量時間就知道 `secret` 是 0 還是 1。
*   **解法**：完全禁用分支語句。程式會**同時計算**路徑 A 和路徑 B 的結果，然後透過位元運算（Constant-time Conditional Swap）選取正確的那個。無論輸入是什麼，CPU 執行的指令數永遠一樣。

### 2. 用 Barrett Reduction 取代除法
ML-DSA 演算法中包含大量的模數除法運算。
*   **危險**：CPU 執行除法指令（DIV）的時間通常取決於操作數的大小，這是不穩定的。
*   **解法**：引入 **Barrett Reduction** 技術。這是一種數學技巧，將「除法」轉化為一系列預先計算好的「乘法」與「位移」運算。乘法在現代 CPU 上的執行時間是固定的，從而實現了常數時間（Constant-time）的模運算。

## 鏈魂點評：底層安全的基石 (Chain Soul Insights)
這篇文章雖然讀起來生澀，但它展示了構建 Web3 基礎設施所需的極致工匠精神。

*   **對開發者的啟示**：在高階語言（如 Go, Rust）越來越普及的今天，開發者容易忽略底層 CPU 指令的行為。安全編碼不僅僅是邏輯正確，更是對硬體特性的精準把控。
*   **對生態的意義**：隨著以太坊和其他公鏈逐步引入後量子簽名，這些經過實戰驗證的底層庫（Library）將成為未來所有錢包、節點和驗證服務的共同基石。Trail of Bits 的工作，實際上是在為未來十年的加密安全鋪路。
