# Graph Report - app  (2026-10-29)

## Corpus Check
- 96 files · ~78,032 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 31 file(s) not represented in the graph (top: .css 29, (none) 2)

## Summary
- 443 nodes · 991 edges · 35 communities (16 shown, 19 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 9 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `a9ef0774`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- components/index.ts
- base64
- steps.tsx
- next
- json
- package.json
- os
- Button
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
- Dialog
- sys
- tempfile
- time
- graphify reference: extra exports and benchmark
- urllib_error
- urllib_request
- graphify reference: query, path, explain
- graphify reference: add a URL and watch a folder
- graphify reference: commit hook and native CLAUDE.md integration
- graphify reference: incremental update and cluster-only
- graphify reference: GitHub clone and cross-repo merge
- graphify reference: transcribe video and audio
- SiteChrome
- extraction-spec.md

## God Nodes (most connected - your core abstractions)
1. `next` - 35 edges
2. `react` - 32 edges
3. `Button()` - 31 edges
4. `Icon()` - 27 edges
5. `PageHeader()` - 23 edges
6. `Alert()` - 18 edges
7. `Badge()` - 18 edges
8. `Select()` - 17 edges
9. `compilerOptions` - 16 edges
10. `Table()` - 15 edges

## Surprising Connections (you probably didn't know these)
- `KebijakanRingkasanPage()` --calls--> `fmt()`  [EXTRACTED]
  src/app/(dash)/(kebijakan)/kebijakan-ringkasan/page.tsx → src/data/kecamatan.ts
- `generateMetadata()` --calls--> `getSchool()`  [EXTRACTED]
  src/app/(parent)/detail-sekolah/[id]/page.tsx → src/data/schools.ts
- `WizardLayout()` --calls--> `getStep()`  [EXTRACTED]
  src/app/(parent)/isi-data/[langkah]/layout.tsx → src/features/isi-data/steps.tsx
- `generateMetadata()` --calls--> `getStep()`  [EXTRACTED]
  src/app/(parent)/isi-data/[langkah]/page.tsx → src/features/isi-data/steps.tsx
- `StrategiPage()` --calls--> `strategySchools()`  [EXTRACTED]
  src/app/(parent)/strategi/page.tsx → src/data/schools.ts

## Import Cycles
- None detected.

## Communities (35 total, 19 thin omitted)

### Community 0 - "components/index.ts"
Cohesion: 0.06
Nodes (44): metadata, metadata, metadata, metadata, metadata, metadata, metadata, KebijakanRasioPage() (+36 more)

### Community 2 - "steps.tsx"
Cohesion: 0.11
Nodes (22): WizardLayout(), generateMetadata(), IsiDataPage(), Props, ExternalLink(), HelpLink(), AFTER_LAST, BEFORE_FIRST (+14 more)

### Community 3 - "next"
Cohesion: 0.10
Nodes (22): config, next, BottomNav(), Brand(), COLUMNS, Footer(), DashBar(), Navbar() (+14 more)

### Community 5 - "package.json"
Cohesion: 0.08
Nodes (25): dependencies, next, react, react-dom, devDependencies, prettier, @types/node, @types/react (+17 more)

### Community 7 - "Button"
Cohesion: 0.06
Nodes (35): metadata, DetailSekolahPage(), generateMetadata(), Props, metadata, metadata, StrategiPage(), UnduhanPage() (+27 more)

### Community 8 - "compilerOptions"
Cohesion: 0.11
Nodes (18): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+10 more)

### Community 11 - "What You Must Do When Invoked"
Cohesion: 0.08
Nodes (24): For /graphify add and --watch, For /graphify query, For the commit hook and native CLAUDE.md integration, For --update and --cluster-only, /graphify, Honesty Rules, Interpreter guard for subcommands, Part A - Structural extraction for code files (+16 more)

### Community 12 - "LandingPage.tsx"
Cohesion: 0.10
Nodes (8): metadata, FAQS, LandingPage(), PATHS, STRATEGY_STEPS, VALUES, Props, SectionHeading()

### Community 15 - "react"
Cohesion: 0.07
Nodes (34): react, metadata, ICON, STATUS, src_components_bottom_nav_bottom_nav, Props, Props, Icon() (+26 more)

### Community 16 - "Form.tsx"
Cohesion: 0.09
Nodes (29): metadata, MasukFlow(), metadata, Item, Choice(), ChoiceGroup(), ChoiceProps, GroupProps (+21 more)

### Community 19 - "Dialog"
Cohesion: 0.48
Nodes (5): Dialog(), dialogs, registerDialog(), triggerOf(), triggers

### Community 23 - "graphify reference: extra exports and benchmark"
Cohesion: 0.22
Nodes (8): graphify reference: extra exports and benchmark, Step 6b - Wiki (only if --wiki flag), Step 7 - Neo4j export (only if --neo4j or --neo4j-push flag), Step 7a - FalkorDB export (only if --falkordb or --falkordb-push flag), Step 7b - SVG export (only if --svg flag), Step 7c - GraphML export (only if --graphml flag), Step 7d - MCP server (only if --mcp flag), Step 8 - Token reduction benchmark (only if total_words > 5000)

### Community 26 - "graphify reference: query, path, explain"
Cohesion: 0.33
Nodes (5): For /graphify explain, For /graphify path, graphify reference: query, path, explain, Step 0 — Constrained query expansion (REQUIRED before traversal), Step 1 — Traversal

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
- **151 isolated node(s):** `config`, `name`, `version`, `private`, `dev` (+146 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 222 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **19 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `next` connect `next` to `components/index.ts`, `steps.tsx`, `package.json`, `Button`, `LandingPage.tsx`, `react`, `Form.tsx`?**
  _High betweenness centrality (0.114) - this node is a cross-community bridge._
- **Why does `react` connect `react` to `components/index.ts`, `steps.tsx`, `next`, `SiteChrome`, `package.json`, `LandingPage.tsx`, `Form.tsx`, `Dialog`?**
  _High betweenness centrality (0.072) - this node is a cross-community bridge._
- **Why does `Button()` connect `Button` to `components/index.ts`, `steps.tsx`, `next`, `LandingPage.tsx`, `react`, `Form.tsx`, `Dialog`?**
  _High betweenness centrality (0.046) - this node is a cross-community bridge._
- **What connects `config`, `name`, `version` to the rest of the system?**
  _151 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `components/index.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.06378378378378378 - nodes in this community are weakly interconnected._
- **Should `steps.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.11330049261083744 - nodes in this community are weakly interconnected._
- **Should `next` be split into smaller, more focused modules?**
  _Cohesion score 0.0960960960960961 - nodes in this community are weakly interconnected._