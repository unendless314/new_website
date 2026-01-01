---
title: "Oracle（預言機）"
date: 2025-12-31
description: "將鏈外資料安全送入智能合約的橋接層。"
author: wu-yan
image: "../../assets/astrogon-star.svg"
imageAlt: "Oracle"
categories: ["O"]
tags: ["普通"]
---

## 動機
智能合約本身無法直接讀取外部資料，Oracle 負責取得價格、天氣、結果等資料並透過簽名或多簽驗證寫入鏈上。

## 常見型態
- **集中式**：由單一提供者（Chainlink Price Feed）送出資料。 
- **去中心化**：多個資料源與聚合邏輯，降低單一失誤風險。 
- **自訂**：專案自建 Oracle 或使用 GELATO/Chainlink Automation 運行。

## 攻擊面
- 預言機操弄會造成合約錯誤判斷價格，因此需設定 TWAP、fallback 與延伸防護。
