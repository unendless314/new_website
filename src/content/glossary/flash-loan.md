---
title: "Flash Loan（閃電貸）"
date: 2025-12-31
description: "無抵押即借但須在單一交易內歸還的流動性工具。"
author: wu-yan
image: "../../assets/astrogon-star.svg"
imageAlt: "Flash Loan"
categories: ["F"]
tags: ["困難"]
---

## 定義
Flash Loan 允許使用者在同一筆交易中借入資金，執行套利或清算，交易結束前必須還款，否則整筆交易會 revert，因此不需抵押。

## 常見用途
- **套利**：跨平台價格差異瞬間套利。 
- **再平衡**：在複雜策略中一次性調整多組頭寸。 
- **資本效率**：省下持倉成本但需搭配冷啟動資金池。

## 風險
Flash Loan 也常被用作攻擊工具（如 Oracle 操作、資產抽走）；因此建議在出借合約加入借貸限額、動態費率與白名單，以降低被濫用的機會。
