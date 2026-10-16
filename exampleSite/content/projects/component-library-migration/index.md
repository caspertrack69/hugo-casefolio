---
title: "Component library migration"
date: 2026-01-15
summary: "Moving a small UI kit from ad-hoc styles to tokens."
description: "Case study: migrating a small component library to design tokens."
draft: false
featured: false
weight: 3
cover: cover.svg
coverAlt: "Abstract dark gradient with a subtle grid."
tags: ["design-systems"]
categories: ["Frontend"]
---
## Overview

A migration of a small internal UI kit from scattered CSS values to a token-driven model.

## Approach

Extracted repeated values into CSS custom properties and documented each token's purpose. No component was allowed to reference a raw value after the migration.

## Outcome

- One source of truth for spacing, color, and radius.
- Easier theming for future surfaces.
