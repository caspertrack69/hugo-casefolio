---
title: "RSS and sitemaps with Hugo"
date: 2025-12-10
summary: "How to enable feeds and sitemaps without plugins."
description: "Configuring RSS feeds and sitemaps in Hugo."
draft: false
author: "Casefolio"
cover: cover.svg
coverAlt: "Dark feed motif with rounded tiles."
tags: ["hugo", "static-sites"]
categories: ["Engineering"]
series: "Hugo essentials"
toc: true
---
Hugo generates RSS feeds and sitemaps from configuration — no plugins, no Node, no runtime.

## RSS

Add `rss` to your output formats for the home and section pages.

```toml
[outputs]
home = ["html", "rss"]
section = ["html", "rss"]
```

Hugo then writes `index.xml` for each, linked from the document `<head>`.

## Sitemap

Hugo writes `sitemap.xml` automatically. Tune change frequency and priority under the `[sitemap]` table.

```toml
[sitemap]
changefreq = "monthly"
priority = 0.5
```

## Robots

Set `enableRobotsTXT = true` and Hugo emits a `robots.txt` that points crawlers at the sitemap.
