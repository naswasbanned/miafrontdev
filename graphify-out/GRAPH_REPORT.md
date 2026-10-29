# Graph Report - app  (2026-10-30)

## Corpus Check
- 105 files · ~83,885 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 31 file(s) not represented in the graph (top: .css 29, (none) 2)

## Summary
- 533 nodes · 1247 edges · 35 communities (17 shown, 18 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 16 edges (avg confidence: 0.89)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `a9ef0774`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- kebijakan-rasio/page.tsx
- base64
- steps.tsx
- Shell.tsx
- json
- package.json
- os
- next
- compilerOptions
- pathlib
- App Icon (favicon)
- What You Must Do When Invoked
- LandingPage.tsx
- argparse
- re
- components/index.ts
- Button.tsx
- subprocess
- src_components_hero_hero
- 4. Isi navbar per keadaan
- sys
- tempfile
- time
- graphify reference: extra exports and benchmark
- urllib_error
- urllib_request
- graphify reference: query, path, explain
- Footer.tsx
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

## Communities (35 total, 18 thin omitted)

### Community 0 - "kebijakan-rasio/page.tsx"
Cohesion: 0.15
Nodes (18): KebijakanRasioPage(), metadata, ZONE_KIND, KebijakanRingkasanPage(), LABEL, MapLegend(), MapSchools(), MapZones() (+10 more)

### Community 2 - "steps.tsx"
Cohesion: 0.11
Nodes (23): WizardLayout(), generateMetadata(), IsiDataPage(), LOCKED_LABEL, Props, AFTER_LAST, BEFORE_FIRST, DataAnak() (+15 more)

### Community 3 - "Shell.tsx"
Cohesion: 0.05
Nodes (70): Fase C — Komponen navbar, IndexPage(), metadata, AnakSayaPage(), ChildCard(), metadata, AksesDitolakPage(), AREA (+62 more)

### Community 5 - "package.json"
Cohesion: 0.08
Nodes (25): dependencies, next, react, react-dom, devDependencies, prettier, @types/node, @types/react (+17 more)

### Community 7 - "next"
Cohesion: 0.06
Nodes (48): config, next, metadata, metadata, metadata, metadata, metadata, metadata (+40 more)

### Community 8 - "compilerOptions"
Cohesion: 0.11
Nodes (18): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+10 more)

### Community 11 - "What You Must Do When Invoked"
Cohesion: 0.08
Nodes (24): For /graphify add and --watch, For /graphify query, For the commit hook and native CLAUDE.md integration, For --update and --cluster-only, /graphify, Honesty Rules, Interpreter guard for subcommands, Part A - Structural extraction for code files (+16 more)

### Community 12 - "LandingPage.tsx"
Cohesion: 0.05
Nodes (24): 5. Daftar tugas (dieksekusi setelah disetujui), Fase A — Fondasi sesi dan akses, Fase B — Konfigurasi navigasi, Fase D — Isi halaman yang mendukung alur, Fase E — Verifikasi, MasukFlow(), metadata, TOY_COLOR_MAP (+16 more)

### Community 15 - "components/index.ts"
Cohesion: 0.06
Nodes (48): react, metadata, metadata, ICON, Badge(), STATUS, src_components_bottom_nav_bottom_nav, Card() (+40 more)

### Community 16 - "Button.tsx"
Cohesion: 0.09
Nodes (28): metadata, handleClick(), Props, Dialog(), Control, ErrorContext, Errors, Form() (+20 more)

### Community 19 - "4. Isi navbar per keadaan"
Cohesion: 0.12
Nodes (16): 1. Masalah di navigasi sekarang, 2.1 Gambaran besar, 2.2 Aturan perjalanan, 2.3 Routing setelah login (`/masuk`), 2. Roadmap perjalanan orang tua, 3. Hak akses: tamu vs sudah login, 4.1 Tamu (belum login), 4.2 Orang tua sudah login, di halaman publik (`/`, `/panduan`, `/tanya-jawab`) (+8 more)

### Community 23 - "graphify reference: extra exports and benchmark"
Cohesion: 0.22
Nodes (8): graphify reference: extra exports and benchmark, Step 6b - Wiki (only if --wiki flag), Step 7 - Neo4j export (only if --neo4j or --neo4j-push flag), Step 7a - FalkorDB export (only if --falkordb or --falkordb-push flag), Step 7b - SVG export (only if --svg flag), Step 7c - GraphML export (only if --graphml flag), Step 7d - MCP server (only if --mcp flag), Step 8 - Token reduction benchmark (only if total_words > 5000)

### Community 26 - "graphify reference: query, path, explain"
Cohesion: 0.33
Nodes (5): For /graphify explain, For /graphify path, graphify reference: query, path, explain, Step 0 — Constrained query expansion (REQUIRED before traversal), Step 1 — Traversal

### Community 27 - "Footer.tsx"
Cohesion: 0.29
Nodes (6): Brand(), AKUN, Footer(), JALUR, LAYANAN, PANDUAN

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
- **179 isolated node(s):** `config`, `name`, `version`, `private`, `dev` (+174 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 251 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **18 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `next` connect `next` to `kebijakan-rasio/page.tsx`, `steps.tsx`, `Shell.tsx`, `package.json`, `LandingPage.tsx`, `components/index.ts`, `Button.tsx`, `Footer.tsx`?**
  _High betweenness centrality (0.130) - this node is a cross-community bridge._
- **Why does `react` connect `components/index.ts` to `kebijakan-rasio/page.tsx`, `steps.tsx`, `Shell.tsx`, `package.json`, `next`, `LandingPage.tsx`, `Button.tsx`?**
  _High betweenness centrality (0.084) - this node is a cross-community bridge._
- **Why does `5. Daftar tugas (dieksekusi setelah disetujui)` connect `LandingPage.tsx` to `4. Isi navbar per keadaan`, `Shell.tsx`?**
  _High betweenness centrality (0.057) - this node is a cross-community bridge._
- **What connects `config`, `name`, `version` to the rest of the system?**
  _179 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `kebijakan-rasio/page.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.14761904761904762 - nodes in this community are weakly interconnected._
- **Should `steps.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.10591133004926108 - nodes in this community are weakly interconnected._
- **Should `Shell.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.05133599831685252 - nodes in this community are weakly interconnected._