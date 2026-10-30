# Graph Report - app  (2026-10-30)

## Corpus Check
- 113 files · ~90,966 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 32 file(s) not represented in the graph (top: .css 30, (none) 2)

## Summary
- 602 nodes · 1470 edges · 47 communities (29 shown, 18 thin omitted)
- Extraction: 96% EXTRACTED · 4% INFERRED · 0% AMBIGUOUS · INFERRED: 63 edges (avg confidence: 0.94)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `6c685203`
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
- react
- Form.tsx
- subprocess
- src_components_hero_hero
- PageHeader
- sys
- tempfile
- time
- graphify reference: extra exports and benchmark
- urllib_error
- urllib_request
- graphify reference: query, path, explain
- Shell.tsx
- next
- QuickCheck.tsx
- graphify reference: add a URL and watch a folder
- graphify reference: commit hook and native CLAUDE.md integration
- graphify reference: incremental update and cluster-only
- Fase B: Halaman Cek Cepat
- graphify reference: GitHub clone and cross-repo merge
- graphify reference: transcribe video and audio
- getSession
- extraction-spec.md
- Navbar.tsx
- components/index.ts
- strategi/page.tsx
- Map.tsx
- panduan/page.tsx
- anak-saya/page.tsx
- Footer.tsx
- 6.2 Berkas yang diubah

## God Nodes (most connected - your core abstractions)
1. `next` - 47 edges
2. `react` - 37 edges
3. `Button()` - 35 edges
4. `Icon()` - 27 edges
5. `PageHeader()` - 25 edges
6. `getSession()` - 25 edges
7. `Alert()` - 23 edges
8. `Select()` - 21 edges
9. `Field()` - 18 edges
10. `Badge()` - 17 edges

## Surprising Connections (you probably didn't know these)
- `11. Cara mundur (rollback)` --references--> `rolesFor()`  [INFERRED]
  docs/guest-check-plan.md → src/lib/accounts.ts
- `Fase B: Halaman Cek Cepat` --references--> `Alert()`  [INFERRED]
  docs/guest-check-plan.md → src/components/alert/Alert.tsx
- `4.3 Langkah 3: Hasil` --references--> `Disclaimer()`  [INFERRED]
  docs/guest-check-plan.md → src/components/alert/Disclaimer.tsx
- `Fase B: Halaman Cek Cepat` --references--> `Disclaimer()`  [INFERRED]
  docs/guest-check-plan.md → src/components/alert/Disclaimer.tsx
- `Fase B: Halaman Cek Cepat` --references--> `ChoiceGroup()`  [INFERRED]
  docs/guest-check-plan.md → src/components/choice/Choice.tsx

## Import Cycles
- None detected.

## Communities (47 total, 18 thin omitted)

### Community 0 - "kebijakan-rasio/page.tsx"
Cohesion: 0.18
Nodes (16): metadata, metadata, KebijakanRasioPage(), metadata, ZONE_KIND, KebijakanRingkasanPage(), metadata, Select() (+8 more)

### Community 2 - "steps.tsx"
Cohesion: 0.09
Nodes (28): WizardLayout(), generateMetadata(), IsiDataPage(), LOCKED_LABEL, Props, ExternalLink(), KEC_NAMES, AFTER_LAST (+20 more)

### Community 3 - "accounts.ts"
Cohesion: 0.16
Nodes (21): AccountKey, ACCOUNTS, AccountSeed, buildSession(), COOKIE, isAccount(), nextWizardHref(), PARENT_PREFIXES (+13 more)

### Community 5 - "package.json"
Cohesion: 0.08
Nodes (25): dependencies, next, react, react-dom, devDependencies, prettier, @types/node, @types/react (+17 more)

### Community 7 - "[id]/page.tsx"
Cohesion: 0.11
Nodes (18): metadata, DetailSekolahPage(), generateMetadata(), Props, Breadcrumb(), SchoolCard(), getSchool(), Kind (+10 more)

### Community 8 - "compilerOptions"
Cohesion: 0.11
Nodes (18): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+10 more)

### Community 11 - "What You Must Do When Invoked"
Cohesion: 0.08
Nodes (24): For /graphify add and --watch, For /graphify query, For the commit hook and native CLAUDE.md integration, For --update and --cluster-only, /graphify, Honesty Rules, Interpreter guard for subcommands, Part A - Structural extraction for code files (+16 more)

### Community 12 - "LandingPage.tsx"
Cohesion: 0.11
Nodes (8): FAQS, LandingCta, LandingPage(), PATHS, STRATEGY_STEPS, VALUES, Props, SectionHeading()

### Community 15 - "react"
Cohesion: 0.06
Nodes (40): 4.2 Langkah 2: Isian ringkas (satu layar), react, ICON, STATUS, src_components_bottom_nav_bottom_nav, handleClick(), Props, Props (+32 more)

### Community 16 - "Form.tsx"
Cohesion: 0.12
Nodes (20): metadata, Control, ErrorContext, Errors, Form(), onBlur(), onChange(), onSubmit() (+12 more)

### Community 19 - "PageHeader"
Cohesion: 0.16
Nodes (8): metadata, metadata, Accordion(), Container(), PageHeader(), Faq, FAQ_GROUPS, FaqGroup

### Community 23 - "graphify reference: extra exports and benchmark"
Cohesion: 0.22
Nodes (8): graphify reference: extra exports and benchmark, Step 6b - Wiki (only if --wiki flag), Step 7 - Neo4j export (only if --neo4j or --neo4j-push flag), Step 7a - FalkorDB export (only if --falkordb or --falkordb-push flag), Step 7b - SVG export (only if --svg flag), Step 7c - GraphML export (only if --graphml flag), Step 7d - MCP server (only if --mcp flag), Step 8 - Token reduction benchmark (only if total_words > 5000)

### Community 26 - "graphify reference: query, path, explain"
Cohesion: 0.33
Nodes (5): For /graphify explain, For /graphify path, graphify reference: query, path, explain, Step 0 — Constrained query expansion (REQUIRED before traversal), Step 1 — Traversal

### Community 27 - "Shell.tsx"
Cohesion: 0.12
Nodes (12): DashChrome(), QuickChrome(), SiteChrome(), stagesFor(), DashMenu, Sidebar(), STAGES, ADMIN (+4 more)

### Community 28 - "next"
Cohesion: 0.13
Nodes (12): config, next, metadata, metadata, metadata, metadata, metadata, Button() (+4 more)

### Community 29 - "QuickCheck.tsx"
Cohesion: 0.07
Nodes (51): 5. Aturan "tanpa jejak", 6.1 Berkas baru, 6.3 Alur data, 6.4 Model hitungan tiruan (`estimate`), 6. Arsitektur, Fase A: Model dan aturan tanpa jejak, Fase C: Pindah ke akun, CekCepatPage() (+43 more)

### Community 30 - "graphify reference: add a URL and watch a folder"
Cohesion: 0.50
Nodes (3): For /graphify add, For --watch, graphify reference: add a URL and watch a folder

### Community 31 - "graphify reference: commit hook and native CLAUDE.md integration"
Cohesion: 0.50
Nodes (3): For git commit hook, For native CLAUDE.md integration, graphify reference: commit hook and native CLAUDE.md integration

### Community 32 - "graphify reference: incremental update and cluster-only"
Cohesion: 0.50
Nodes (3): For --cluster-only, For --update (incremental re-extraction), graphify reference: incremental update and cluster-only

### Community 33 - "Fase B: Halaman Cek Cepat"
Cohesion: 0.09
Nodes (25): 10. Catatan pelaksanaan (deviasi dari rencana), 10. Risiko, 11. Cara mundur (rollback), 1. Ringkasan, 2.1 Penyimpangan dari PRD dan mitigasinya, 2. Keputusan, 3. Lingkup, 4.1 Langkah 1: NISN (+17 more)

### Community 36 - "getSession"
Cohesion: 0.16
Nodes (14): IndexPage(), metadata, AnakSayaPage(), PetaSekolahPage(), AksesDitolakPage(), AREA, metadata, continueFor() (+6 more)

### Community 39 - "Navbar.tsx"
Cohesion: 0.15
Nodes (13): BottomNav(), Menu(), ChildMenu(), DashBar(), firstName(), Navbar(), NavbarProps, NavChild (+5 more)

### Community 40 - "components/index.ts"
Cohesion: 0.21
Nodes (9): metadata, metadata, Alert(), Disclaimer(), DashSection(), NextStep(), Section(), Stats() (+1 more)

### Community 41 - "strategi/page.tsx"
Cohesion: 0.19
Nodes (11): metadata, StrategiPage(), metadata, UnduhanPage(), MasukFlow(), metadata, Badge(), ButtonGroup() (+3 more)

### Community 42 - "Map.tsx"
Cohesion: 0.27
Nodes (9): LABEL, MapLegend(), MapSchools(), MapZones(), Pin, PIN_ICON, pos(), Roads (+1 more)

### Community 43 - "panduan/page.tsx"
Cohesion: 0.25
Nodes (5): metadata, TOY_COLOR_MAP, Card(), Tabs(), JALUR

### Community 44 - "anak-saya/page.tsx"
Cohesion: 0.46
Nodes (7): ChildCard(), metadata, Child, continueTarget(), isComplete(), stageStatus(), selectChild()

### Community 45 - "Footer.tsx"
Cohesion: 0.32
Nodes (6): Brand(), Column, Footer(), JALUR, LAYANAN, panduan()

### Community 46 - "6.2 Berkas yang diubah"
Cohesion: 0.40
Nodes (5): 6.2 Berkas yang diubah, FocusBar(), firstName(), FocusChrome(), Progress

## Knowledge Gaps
- **193 isolated node(s):** `config`, `name`, `version`, `private`, `dev` (+188 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 270 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **18 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `next` connect `next` to `kebijakan-rasio/page.tsx`, `steps.tsx`, `accounts.ts`, `getSession`, `package.json`, `[id]/page.tsx`, `components/index.ts`, `strategi/page.tsx`, `Navbar.tsx`, `panduan/page.tsx`, `anak-saya/page.tsx`, `Footer.tsx`, `react`, `Form.tsx`, `PageHeader`, `Shell.tsx`, `QuickCheck.tsx`?**
  _High betweenness centrality (0.133) - this node is a cross-community bridge._
- **Why does `react` connect `react` to `steps.tsx`, `getSession`, `package.json`, `Navbar.tsx`, `components/index.ts`, `strategi/page.tsx`, `Map.tsx`, `LandingPage.tsx`, `Form.tsx`, `Shell.tsx`, `QuickCheck.tsx`?**
  _High betweenness centrality (0.090) - this node is a cross-community bridge._
- **Why does `Button()` connect `next` to `kebijakan-rasio/page.tsx`, `steps.tsx`, `getSession`, `[id]/page.tsx`, `components/index.ts`, `strategi/page.tsx`, `Navbar.tsx`, `panduan/page.tsx`, `anak-saya/page.tsx`, `LandingPage.tsx`, `react`, `Form.tsx`, `PageHeader`, `QuickCheck.tsx`?**
  _High betweenness centrality (0.046) - this node is a cross-community bridge._
- **What connects `config`, `name`, `version` to the rest of the system?**
  _193 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `steps.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.08571428571428572 - nodes in this community are weakly interconnected._
- **Should `package.json` be split into smaller, more focused modules?**
  _Cohesion score 0.07692307692307693 - nodes in this community are weakly interconnected._
- **Should `[id]/page.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.1111111111111111 - nodes in this community are weakly interconnected._