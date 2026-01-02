---
title: Deep Research Prompts
date: 2026-01-01
---

## 目錄
- `projects/`：放每個 focus topic 專用的 Deep Research prompt。

## 使用方式
1. 先依照 `docs/editing-plan.md` 的優先順序選定主題（例如「主流與學習入口」）。
2. 開啟對應 prompt 檔案（或新增）並替換裡面的前提背景（目前 placeholder 條目、目標受眾、希望補足的觀點）。
3. 在 ChatGPT 的 Deep Research 模式貼上 prompt，記得附上「期望輸出格式」與「更新頻率（日期）」。
4. 對 AI 提供的第一份草稿使用迭代提示（例如「針對這個段落加上兩個近期數據」），補足缺口後再整理成 `projects` 需要的 frontmatter/段落。

## 提示維護
- 建議每次 Deep Research 的 prompt 保留一份歷史版（`prompts/projects/*.md`），方便追蹤前後差異。
- 若 prompt 的 framing 顯著改動，請順便在 `docs/DEV_NOTES.md` 補上變更紀錄與原因。
