---
title: "Static-first engineering for portfolio sites"
date: 2026-02-20
summary: "Why a static site is enough for most developer portfolios and case studies."
description: "Notes on static-first engineering for portfolio and case-study sites."
draft: false
author: "Casefolio"
cover: cover.svg
coverAlt: "Dark product UI screenshot with a faint blue edge glow."
tags: ["static-sites", "hugo"]
categories: ["Engineering"]
toc: true
---
A static site is often the right default for a portfolio: the content changes rarely, the audience expects speed, and there is nothing to hack.

This article uses the theme's article layout. The lead paragraph renders at full white; subsequent paragraphs render muted, matching the editorial style.

## Why static wins here

Portfolios are read-heavy and write-light. A static build means no runtime, no database, and a deploy that is just files on a CDN.

## What you trade away

You give up server-side features: search, comments, forms that submit directly. For a portfolio those are optional, and each can be added as an opt-in external service later.

```bash
hugo --gc --minify
```

The build above produces the entire site in seconds.
