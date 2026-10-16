---
title: "Design tokens in practice"
date: 2026-03-02
summary: "From a JSON style profile to CSS custom properties."
description: "A practical guide to mapping design tokens to CSS custom properties."
draft: false
author: "Casefolio"
cover: cover.svg
coverAlt: "Dark UI with token color swatches."
tags: ["design-systems", "css"]
categories: ["Frontend"]
toc: true
---
A design token is a named decision: a color, a spacing step, a radius. The value is secondary; the name is the contract between design and code.

## Why tokens

Hard-coded values drift across components. Tokens stay consistent because every component references the same name, and a change in one place propagates everywhere.

```css
:root {
  --bg: #000000;
  --text: #ffffff;
  --border: #1a1a1a;
}
```

## Mapping JSON to CSS

Read the source of truth once, emit CSS variables, and never repeat a raw value in a component.

```css
.card {
  border: 1px solid var(--border);
  border-radius: var(--radius-xl);
  background: var(--bg);
}
```

## Keeping it honest

If the source of truth says no shadows, do not add a shadow. The token layer exists to prevent exactly that kind of drift.
