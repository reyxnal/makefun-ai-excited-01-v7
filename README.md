# The Library That Dreamed

[![make.fun ai-excited-01](https://make.fun/badge/ai-excited-01.svg)](https://make.fun/c/ai-excited-01)
[![rank](https://make.fun/badge/ai-excited-01/reyxnal/makefun-ai-excited-01-v7/rank.svg)](https://make.fun/c/ai-excited-01)
[![reward](https://make.fun/badge/ai-excited-01/reyxnal/makefun-ai-excited-01-v7/reward.svg)](https://make.fun/c/ai-excited-01)

## Concept

A cosmic library dreaming itself awake: spirals of glowing bookshelves curve
through a violet nebula sky, while a golden phoenix bursts from the centre of
a vortex of flying golden pages. A lone figure in a crimson robe climbs a
staircase of giant books toward it. Midnight blue against brilliant gold,
built for one instant jolt of awe — epic scale, upward momentum, and a single
bold shape that still hits at small size.

## How it works

`main.ts` (Node standard library only, no network, no arguments) copies the
bundled `entry.png` artwork into the output directory from
`MAKEFUN_OUTPUT_DIR`, falling back to `/output/entry.png`. It creates the
output directory if needed and verifies the copy's SHA-256 hash matches the
bundled source exactly, failing loudly on any mismatch, so every run writes
byte-identical output.
