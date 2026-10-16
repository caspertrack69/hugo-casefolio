---
title: "Static-site performance audit"
date: 2026-02-08
summary: "A budget-driven audit that cut shipped weight without adding complexity."
description: "Case study: a budget-driven performance audit for a static marketing site."
draft: false
featured: true
weight: 2
cover: cover.svg
coverAlt: "Dark dashboard with faint grid lines and a blue accent dot."
client: "Open source"
role: "Performance engineering"
services: ["Performance audit", "Web performance"]
technologies: ["Lighthouse", "CSS", "Hugo"]
projectType: "Audit"
year: "2026"
duration: "1 week"
liveURL: "https://example.com"
sourceURL: ""
tags: ["performance", "css"]
categories: ["Frontend"]
---
## Overview

A short audit engagement for a static marketing site that shipped heavy CSS and unoptimized imagery.

## Context

The site loaded quickly on fast connections but struggled on constrained mobile networks, where every kilobyte mattered.

## Approach

Set a performance budget, measure against it, then remove unused CSS and constrain image dimensions to prevent layout shift.

## Outcome

- Fewer kilobytes shipped per page.
- No new runtime dependencies introduced.
- Predictable image layout with explicit width and height.
