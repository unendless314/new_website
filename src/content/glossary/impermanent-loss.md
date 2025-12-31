---
title: "Impermanent Loss（無常損失）"
date: 2025-12-31
description: "在 AMM 提供流動性時遇到價格變動造成的潛在虧損。"
author: wu-yan
image: "../../assets/astrogon-star.svg"
imageAlt: "Impermanent Loss"
---

## 現象
當提供流動性給 AMM 時，若兩種資產價格發生偏離，提款時拿回的資金在美元計價可能少於單純持有，這便是無常損失。

## 怎麼減緩
- 選擇波動較低的資產配對（如穩定幣/穩定幣）。
- 使用 IL 保護功能（如 Balancer 的遮罩）。
- 經常監控 LP 池中的價格比與報酬，必要時退出或重平衡。

## 當收益抵銷
若交易手續費＋代幣獎勵大於 IL，仍可獲利；否則淺出場、以其他策略重新部署更合適。
