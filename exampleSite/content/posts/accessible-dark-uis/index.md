---
title: "Designing accessible dark UIs"
date: 2026-01-25
summary: "Contrast, focus, and motion on a black canvas."
description: "Notes on designing accessible dark user interfaces."
draft: false
author: ""
cover: ""
coverAlt: ""
tags: ["accessibility", "css"]
categories: ["Frontend"]
toc: false
---
Dark interfaces fail accessibility when contrast drops. Pure black is a strong background, but only if text is light enough to read.

## Contrast

Gray-on-black at roughly 40% white is below AA for body text. Reserve the dimmest gray for non-essential metadata at small sizes, and lift it to a legible step wherever the text carries meaning.

## Focus

Borders separate regions on a black canvas, so focus rings must be obvious. A two-pixel white outline with offset is visible against every surface in the system.

## Motion

Respect `prefers-reduced-motion`. Transitions should be subtle and fast; never rely on movement to convey meaning.

{{< callout >}}
Accessible dark UIs are not just "invert the colors." Contrast, focus, and motion each need their own pass.
{{< /callout >}}
