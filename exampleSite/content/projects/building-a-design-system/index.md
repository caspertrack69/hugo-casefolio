---
title: "Building a token-driven design system"
date: 2026-03-12
summary: "How a single machine-readable style profile became a dark, editorial UI."
description: "A case study on building a token-driven design system from a machine-readable style profile."
draft: false
featured: true
weight: 1
cover: cover.svg
coverAlt: "Abstract dark gradient artwork with a faint cool-blue glow accent."
client: "Internal"
role: ["Design engineering", "Frontend"]
services: ["Design systems", "Frontend architecture"]
technologies: ["CSS", "Design tokens", "Hugo"]
projectType: "Design system"
year: "2026"
duration: "3 weeks"
liveURL: ""
sourceURL: ""
tags: ["design-systems", "css"]
categories: ["Frontend"]
---
## Overview

A short note on turning a machine-readable style profile into a working set of CSS custom properties and components, without inventing any visual decisions not present in the source.

## Context

The brief was a dark, editorial, content-first interface. Rather than sketch a palette by eye, the source of truth was a JSON document sampled from existing screens.

## Approach

Define a single `tokens.css` that maps every JSON value to a CSS custom property, then build components that reference only those variables. No color, radius, or spacing value is hard-coded in a component.

## Outcome

- One file controls every visual decision.
- Components stay consistent without a CSS framework.
- The same tokens drive responsive scaling via media queries.
