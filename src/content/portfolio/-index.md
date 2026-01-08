---
title: 作品集
description: 鏈魂宗開發與監測的技術項目，專注於鏈上數據、風險控管與 Web3 基礎設施。

projects:
  - title: "Cross-Chain Bridge Monitor (跨鏈橋監視器)"
    technologies:
      - "TypeScript"
      - "Ethers.js"
      - "Next.js"
    content:
      - "監控跨鏈橋（如 Wormhole、LayerZero、Axelar）的儲備、費率與安全事件。提供 TVL 與資產分佈概覽，支援穩定幣與主流幣分組。"
      - "具備智能異常偵測功能，能識別閃電貸突增、預言機偏移及池子快速抽乾等風險訊號。"
  - title: "DeFi Lending Aggregator (借貸聚合面板)"
    technologies:
      - "React"
      - "GraphQL"
      - "Subgraphs"
    content:
      - "聚合多鏈借貸利率與抵押參數的決策面板，彙總 Aave、Compound、Maker、Spark 等協議的利率、抵押參數與清算閾值。"
      - "支援多鏈市場與資產，顯示供給/借款 APR，並提供大額錢包健康度監控與清算觀察。"
  - title: "Layer2 Observer (L2 觀察者)"
    technologies:
      - "Python"
      - "Pandas"
      - "Plotly"
    content:
      - "追蹤主流 Rollup (Arbitrum, Optimism, Base) 的手續費、TPS 與 TVL 變化的儀表板。"
      - "實時 Gas 追蹤，顯示 EIP-4844 後的 blob 費用與 calldata 費用對比，提供合約互動排名與常用 DApp 熱度。"
  - title: "NFT Market Intel (NFT 市場情報)"
    technologies:
      - "Node.js"
      - "Reservoir API"
      - "PostgreSQL"
    content:
      - "提供 NFT 集合的成交量、地板價、版稅政策與洗單偵測。跨市場聚合 Blur、OpenSea 與 MagicEden 的數據。"
      - "具備洗單分數與異常錢包標記，並提供版稅政策變動提醒與實際收取率分析。"
  - title: "On-chain Identity Hub (鏈上身分中心)"
    technologies:
      - "Solidity"
      - "DID Standards"
      - "Ceramic Network"
    content:
      - "管理 DID、聲譽分數與憑證的統一資料層。提供 DID 綁定、鏈上聲譽累積與可驗證憑證管理的工具組。"
      - "支援多鏈 DID 解析與社交綁定，聲譽模型可插拔，支援任務與交互積分系統。"
  - title: "Stablecoin Radar (穩定幣雷達)"
    technologies:
      - "Dune Analytics"
      - "SQL"
      - "FastAPI"
    content:
      - "跟蹤主流穩定幣（USDC, USDT, FDUSD）儲備、鏈上流通與利率曲線的數據站。"
      - "提供多鏈供給與流通去向總覽，儲備證明快照，以及定存/借貸/質押利率曲線的橫向比較。"
---