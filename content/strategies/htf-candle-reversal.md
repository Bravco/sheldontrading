---
date: 2026-01-15
minRead: 4
tags: [
    { label: Candle Behaviour, color: info },
    { label: Market Structure, color: warning }
]
title: HTF Candle Reversal
description: Uses higher-timeframe candle behavior to anticipate reversals and a return of price to fair value.
image: /images/indicators/htf-candles.webp
authors: [
    {
        name: Sheldon,
        to: https://x.com/sheldontrading,
        target: _blank,
        avatar: {
            src: /images/profile-picture.webp,
            alt: Sheldon
        }
    },
    {
        name: tomtrades,
        to: https://www.youtube.com/@itstomtrades,
        target: _blank,
        avatar: {
            src: /images/tomtrades.webp,
            alt: tomtrades
        }
    }
]
---

## How an HTF Candle Forms (Candle Behaviour)

A higher-timeframe (HTF) candle does not move randomly.

When a new candle starts, price usually moves **one direction first**, creating a **wick**.<br>
After that, price often **reverses**, forming **the candle body**.

This early movement of the HTF candle gives clues about what may happen next on lower timeframes (LTF).

**In a bullish trend:**
- If the new HTF candle **pushes down first** (creates a lower wick), it often means the **trend** will **continue upward**.
- If the candle **pushes up first** and takes out the previous high, it may signal a **reversal**.

**In a bearish trend:**
- If the new HTF candle **pushes up first**, look for **trend continuation downward**.
- If it **pushes down first** and breaks the previous low, a **reversal** may be coming.

::note
How an HTF candle is forming tells us whether to expect **continuation** or **reversal**.
::

## What is a Fair Value?

Market movement is driven by buyers and sellers who are constantly trying to agree on a **fair value (a balanced price)**.

When price moves too far in one direction, the market becomes **imbalanced**.

The price often wants to **return back to fair value** to rebalance.

We can spot this imbalance as **Fair Value Gap (FVG)** forming or price just becomes **overextended** to one side without proper pullbacks.

::note
**Fair value** is a **balanced price** where **buyers and sellers** participate **equally**.
::

## The Strategy

This strategy works in **any session**, but it performs best during high-volume periods, such as:
- **2nd hour of the Asia session**
- **London Killzone**
- **New York Open**

### Steps

1. **Wait for a new hourly candle to open.**

2. **Watch how the HTF candle moves.**  
    Price will usually push in one direction first, creating the HTF wick.   
    Look for:
    - Price becoming **overextended**
    - **Imbalance / Fair Value Gap** above or below
    - A **sweep** of the **previous hourly high or low**

3. Wait for an entry model on the LTF, such as:
    - **Inversion (IFVG)**
    - **Change in state of delivery (CISD)**
    - **Market structure shift (MSS)**

4. **Risk management**
    - **Stop loss:** above the high or below the low
    - **Take profit:**
        - **50% of the range**, or
        - Targeting **imbalance / fair value**, or
        - Fixed **1-2R risk-reward ratio (RR)**

### Example Trade

![Strategy Example 1](/images/strategies/htf-candle-reversal/example1.webp)

We first wait for the new hourly candle to open to sweep out the **sellside liquidity**.

::note
Notice that the hourly candle hadn't any top wick after open. **(The candle created its bottom wick first.)**
::

![Strategy Example 2](/images/strategies/htf-candle-reversal/example2.webp)

After it **taken out the liquidity**, we have waited for the **structure to change** and entered from the **CISD**.

### Indicator

Here is the link for the TradingView indicator:
[Sheldon HTF Candles](https://www.tradingview.com/script/AKhDtGVk-Sheldon-HTF-Candles/){:target="_blank"}

---

> This strategy was inspired by [tomtrades](https://www.youtube.com/@itstomtrades){:target="_blank"}