---
id: ADR-0001
title: Use Stripe Payment Links for MVP checkout
status: Proposed
date: 2025-08-04
review_after: 2026-02-04
sunset_if:
  - "Better checkout solution needed or Stripe Payment Links discontinued"
evidence_strength: pilot
tags: [domain:payment, risk:low, scope:process]
related_runs: ["/ai/Runs/2025-08-04/run-2025-08-04-001.yaml"]
related_playbooks: []
related_policies: []
owner: agent:openai
---

## Context
The MVP requires a low-maintenance checkout for a static e-commerce site with minimal engineering effort. Options evaluated included PayPal Standard Cart, Stripe Payment Links, and Snipcart.

## Decision
Adopt Stripe Payment Links for the MVP. Each product links directly to a Stripe-hosted checkout page, eliminating the need for a custom cart or backend.

## Consequences
**Positive**
- No server infrastructure or complex cart logic required
- Supports multiple payment methods (credit card, Apple Pay, Google Pay)

**Negative**
- Lacks built-in cart; each item purchased separately
- Checkout experience depends on Stripe's hosted page

Rollback plan: replace Payment Links with PayPal Standard Cart or Snipcart if multi-item cart or alternative gateways become necessary.

## Evidence
- PR/Commit: (this PR)
- Bench/Tests: N/A

## How to Apply
1. Create a Stripe account and enable Payment Links.
2. In the Stripe Dashboard, create products and generate payment links.
3. Store each link in `products.yml` under `stripe_link` and use it for the "立即購買" button.

## Alternatives Considered
- **PayPal Standard Cart** – Requires cart flow and is limited to PayPal payments.
- **Snipcart** – Adds third-party JS library and monthly cost; heavier than needed for MVP.

