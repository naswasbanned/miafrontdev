# Graph Report - app  (2026-10-30)

## Corpus Check
- 105 files · ~85,320 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 31 file(s) not represented in the graph (top: .css 29, (none) 2)

## Summary
- 533 nodes · 1248 edges · 36 communities (18 shown, 18 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 16 edges (avg confidence: 0.89)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `afaecf27`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- kebijakan-rasio/page.tsx
- base64
- steps.tsx
- accounts.ts
- json
- package.json
- os
- [id]/page.tsx
- compilerOptions
- pathlib
- App Icon (favicon)
- What You Must Do When Invoked
- LandingPage.tsx
- argparse
- re
- components/index.ts
- Form.tsx
- subprocess
- src_components_hero_hero
- tanya-jawab/page.tsx
- sys
- tempfile
- time
- graphify reference: extra exports and benchmark
- urllib_error
- urllib_request
- graphify reference: query, path, explain
- Shell.tsx
- Button
- graphify reference: add a URL and watch a folder
- graphify reference: commit hook and native CLAUDE.md integration
- graphify reference: incremental update and cluster-only
- graphify reference: GitHub clone and cross-repo merge
- graphify reference: transcribe video and audio
- extraction-spec.md

## God Nodes (most connected - your core abstractions)
1. `next` - 42 edges
2. `react` - 34 edges
3. `Button()` - 33 edges
4. `Icon()` - 27 edges
5. `PageHeader()` - 24 edges
6. `Alert()` - 20 edges
7. `getSession()` - 20 edges
8. `Badge()` - 17 edges
9. `Select()` - 17 edges
10. `compilerOptions` - 16 edges

## Surprising Connections (you probably didn't know these)
- `Fase D — Isi halaman yang mendukung alur` --references--> `CtaBand()`  [INFERRED]
  docs/navigation-plan.md → src/components/page/Page.tsx
- `Fase C — Komponen navbar` --references--> `Stepper()`  [INFERRED]
  docs/navigation-plan.md → src/components/stepper/Stepper.tsx
- `Fase A — Fondasi sesi dan akses` --references--> `getSession()`  [INFERRED]
  docs/navigation-plan.md → src/lib/session.ts
- `Fase A — Fondasi sesi dan akses` --references--> `MasukFlow()`  [INFERRED]
  docs/navigation-plan.md → src/app/(public)/masuk/MasukFlow.tsx
- `Fase C — Komponen navbar` --references--> `BottomNav()`  [INFERRED]
  docs/navigation-plan.md → src/components/bottom-nav/BottomNav.tsx

## Import Cycles
- None detected.

## Communities (36 total, 18 thin omitted)

### Community 0 - "kebijakan-rasio/page.tsx"
Cohesion: 0.12
Nodes (23): metadata, KebijakanRasioPage(), metadata, ZONE_KIND, KebijakanRingkasanPage(), metadata, LABEL, MapLegend() (+15 more)

### Community 2 - "steps.tsx"
Cohesion: 0.11
Nodes (23): WizardLayout(), generateMetadata(), IsiDataPage(), LOCKED_LABEL, Props, AFTER_LAST, BEFORE_FIRST, DataAnak() (+15 more)

### Community 3 - "accounts.ts"
Cohesion: 0.10
Nodes (43): IndexPage(), ChildCard(), metadata, AksesDitolakPage(), AREA, metadata, continueFor(), publicNav() (+35 more)

### Community 5 - "package.json"
Cohesion: 0.08
Nodes (25): dependencies, next, react, react-dom, devDependencies, prettier, @types/node, @types/react (+17 more)

### Community 7 - "[id]/page.tsx"
Cohesion: 0.10
Nodes (29): AnakSayaPage(), metadata, DetailSekolahPage(), generateMetadata(), Props, metadata, PetaSekolahPage(), metadata (+21 more)

### Community 8 - "compilerOptions"
Cohesion: 0.11
Nodes (18): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+10 more)

### Community 11 - "What You Must Do When Invoked"
Cohesion: 0.08
Nodes (24): For /graphify add and --watch, For /graphify query, For the commit hook and native CLAUDE.md integration, For --update and --cluster-only, /graphify, Honesty Rules, Interpreter guard for subcommands, Part A - Structural extraction for code files (+16 more)

### Community 12 - "LandingPage.tsx"
Cohesion: 0.07
Nodes (14): metadata, metadata, TOY_COLOR_MAP, FAQS, LandingCta, LandingPage(), PATHS, STRATEGY_STEPS (+6 more)

### Community 15 - "components/index.ts"
Cohesion: 0.06
Nodes (50): metadata, metadata, Accordion(), Alert(), ICON, Badge(), STATUS, src_components_bottom_nav_bottom_nav (+42 more)

### Community 16 - "Form.tsx"
Cohesion: 0.12
Nodes (19): metadata, Control, ErrorContext, Errors, Form(), onBlur(), onChange(), onSubmit() (+11 more)

### Community 19 - "tanya-jawab/page.tsx"
Cohesion: 0.07
Nodes (27): 1. Masalah di navigasi sekarang, 2.1 Gambaran besar, 2.2 Aturan perjalanan, 2.3 Routing setelah login (`/masuk`), 2. Roadmap perjalanan orang tua, 3. Hak akses: tamu vs sudah login, 4.1 Tamu (belum login), 4.2 Orang tua sudah login, di halaman publik (`/`, `/panduan`, `/tanya-jawab`) (+19 more)

### Community 23 - "graphify reference: extra exports and benchmark"
Cohesion: 0.22
Nodes (8): graphify reference: extra exports and benchmark, Step 6b - Wiki (only if --wiki flag), Step 7 - Neo4j export (only if --neo4j or --neo4j-push flag), Step 7a - FalkorDB export (only if --falkordb or --falkordb-push flag), Step 7b - SVG export (only if --svg flag), Step 7c - GraphML export (only if --graphml flag), Step 7d - MCP server (only if --mcp flag), Step 8 - Token reduction benchmark (only if total_words > 5000)

### Community 26 - "graphify reference: query, path, explain"
Cohesion: 0.33
Nodes (5): For /graphify explain, For /graphify path, graphify reference: query, path, explain, Step 0 — Constrained query expansion (REQUIRED before traversal), Step 1 — Traversal

### Community 27 - "Shell.tsx"
Cohesion: 0.06
Nodes (33): Fase C — Komponen navbar, config, next, react, BottomNav(), Brand(), Column, Footer() (+25 more)

### Community 28 - "Button"
Cohesion: 0.09
Nodes (20): metadata, metadata, metadata, metadata, metadata, metadata, Button(), handleClick() (+12 more)

### Community 30 - "graphify reference: add a URL and watch a folder"
Cohesion: 0.50
Nodes (3): For /graphify add, For --watch, graphify reference: add a URL and watch a folder

### Community 31 - "graphify reference: commit hook and native CLAUDE.md integration"
Cohesion: 0.50
Nodes (3): For git commit hook, For native CLAUDE.md integration, graphify reference: commit hook and native CLAUDE.md integration

### Community 32 - "graphify reference: incremental update and cluster-only"
Cohesion: 0.50
Nodes (3): For --cluster-only, For --update (incremental re-extraction), graphify reference: incremental update and cluster-only

## Knowledge Gaps
- **178 isolated node(s):** `config`, `name`, `version`, `private`, `dev` (+173 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 250 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **18 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `next` connect `Shell.tsx` to `kebijakan-rasio/page.tsx`, `steps.tsx`, `accounts.ts`, `package.json`, `[id]/page.tsx`, `LandingPage.tsx`, `components/index.ts`, `Form.tsx`, `tanya-jawab/page.tsx`, `Button`?**
  _High betweenness centrality (0.130) - this node is a cross-community bridge._
- **Why does `react` connect `Shell.tsx` to `kebijakan-rasio/page.tsx`, `steps.tsx`, `package.json`, `LandingPage.tsx`, `components/index.ts`, `Form.tsx`, `Button`?**
  _High betweenness centrality (0.084) - this node is a cross-community bridge._
- **Why does `5. Daftar tugas (dieksekusi setelah disetujui)` connect `tanya-jawab/page.tsx` to `Shell.tsx`?**
  _High betweenness centrality (0.057) - this node is a cross-community bridge._
- **What connects `config`, `name`, `version` to the rest of the system?**
  _178 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `kebijakan-rasio/page.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.11724137931034483 - nodes in this community are weakly interconnected._
- **Should `steps.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.10591133004926108 - nodes in this community are weakly interconnected._
- **Should `accounts.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.0975177304964539 - nodes in this community are weakly interconnected._