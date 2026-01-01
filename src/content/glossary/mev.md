---
title: "MEV（Maximal Extractable Value）"
date: 2025-12-31
description: "驗證者或礦工按特定順序重組區塊所能提取的額外價值。"
author: wu-yan
image: "../../assets/astrogon-star.svg"
imageAlt: "MEV"
categories: ["M"]
tags: ["困難"]
---

## 基本概念
MEV 是指在區塊建立時，重排序、插入或刪除交易所能產生的額外收益。常見形式有前置交易（front-running）、三明治交易與回滾。

## 對一般用戶的影響
若頻繁遭遇前置交易，滑價與手續費會上升；某些協議因此推出 MEV 抑制器，如 Flashbots 的 MEV-Boost。

## 小技巧
- 設定更寬的 gas 價格範圍或使用私有交易池以避開公網抓包。
- 關注 MEV 監測儀表板（如 MEV-Explore）了解目前亞穩定策略。
