# Graph Report - app  (2026-10-29)

## Corpus Check
- 104 files · ~106,178 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 32 file(s) not represented in the graph (top: .css 29, (none) 2, .figcraft 1)

## Summary
- 625 nodes · 1202 edges · 42 communities (33 shown, 9 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 9 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `24fea219`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- components/index.ts
- state.md
- steps.tsx
- Shell.tsx
- Toast.tsx
- package.json
- 2. CLI Command Reference
- [id]/page.tsx
- compilerOptions
- 6. Components
- App Icon (favicon)
- What You Must Do When Invoked
- LandingPage.tsx
- image_gen.py
- 1. Quick Reference & Commands
- react
- Form.tsx
- Design Document: Aplikasi Strategi SPMB SMA/SMK Negeri
- styles/index.ts
- Button.tsx
- 6. Spesifikasi Layar
- 2. Best Practices by Asset Category
- Map.tsx
- graphify reference: extra exports and benchmark
- 9. Sistem Desain Visual
- 1. Supported Models
- graphify reference: query, path, explain
- 1. Ringkasan Produk
- 3. Persona
- 7. Model Peluang (Kebutuhan Produk)
- graphify reference: add a URL and watch a folder
- graphify reference: commit hook and native CLAUDE.md integration
- graphify reference: incremental update and cluster-only
- 5. Alur Pengguna
- graphify reference: GitHub clone and cross-repo merge
- graphify reference: transcribe video and audio
- SiteChrome
- extraction-spec.md
- faq.ts
- Footer.tsx

## God Nodes (most connected - your core abstractions)
1. `next` - 35 edges
2. `react` - 31 edges
3. `Button()` - 30 edges
4. `Icon()` - 29 edges
5. `PageHeader()` - 23 edges
6. `Design Document: Aplikasi Strategi SPMB SMA/SMK Negeri` - 19 edges
7. `Alert()` - 18 edges
8. `Badge()` - 18 edges
9. `Select()` - 17 edges
10. `compilerOptions` - 16 edges

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

## Communities (42 total, 9 thin omitted)

### Community 0 - "components/index.ts"
Cohesion: 0.05
Nodes (62): config, next, metadata, metadata, metadata, metadata, metadata, metadata (+54 more)

### Community 2 - "steps.tsx"
Cohesion: 0.09
Nodes (29): WizardLayout(), generateMetadata(), IsiDataPage(), Props, Item, Choice(), ChoiceGroup(), ExternalLink() (+21 more)

### Community 3 - "Shell.tsx"
Cohesion: 0.13
Nodes (16): BottomNav(), DashBar(), Navbar(), DashChrome(), DashMenu, Sidebar(), activeBottom(), activeHref() (+8 more)

### Community 4 - "Toast.tsx"
Cohesion: 0.19
Nodes (9): metadata, Sprite(), Ctx, ICONS, ToastContext, ToastData, ToastProvider(), ToastRegion() (+1 more)

### Community 5 - "package.json"
Cohesion: 0.08
Nodes (25): dependencies, next, react, react-dom, devDependencies, prettier, @types/node, @types/react (+17 more)

### Community 6 - "2. CLI Command Reference"
Cohesion: 0.10
Nodes (20): 1.1 Set Your Gemini API Token, 1.2 Verify Your Token, 1.3 Generate an Image, 1.4 Generate Instant SVG Placeholder (No API Key Required), 1. Quick Start, 2.1 `generate`, 2.2 `placeholder`, 2.3 `test-key` (+12 more)

### Community 7 - "[id]/page.tsx"
Cohesion: 0.13
Nodes (17): DetailSekolahPage(), generateMetadata(), Props, metadata, Disclaimer(), SchoolCard(), getSchool(), Kind (+9 more)

### Community 8 - "compilerOptions"
Cohesion: 0.11
Nodes (18): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+10 more)

### Community 9 - "6. Components"
Cohesion: 0.05
Nodes (36): 10. Design tokens (CSS variables), 11. Do and don't, 1. Design intent, 2.1 Core palette, 2.2 Category colors ("toy" palette), 2.3 Brand background gradient (marketing and onboarding screens only), 2.4 Semantic colors (not in the shot, add these), 2.5 Accessibility notes (+28 more)

### Community 11 - "What You Must Do When Invoked"
Cohesion: 0.08
Nodes (24): For /graphify add and --watch, For /graphify query, For the commit hook and native CLAUDE.md integration, For --update and --cluster-only, /graphify, Honesty Rules, Interpreter guard for subcommands, Part A - Structural extraction for code files (+16 more)

### Community 12 - "LandingPage.tsx"
Cohesion: 0.10
Nodes (6): metadata, FAQS, LandingPage(), PATHS, STRATEGY_STEPS, VALUES

### Community 13 - "image_gen.py"
Cohesion: 0.07
Nodes (45): argparse, base64, json, cmd_css_tokens(), cmd_export(), cmd_info(), cmd_node(), cmd_run() (+37 more)

### Community 14 - "1. Quick Reference & Commands"
Cohesion: 0.12
Nodes (16): 1.1 Inspect Document Structure, 1.2 Inspect a Specific Node or Component, 1.3 Export Visual Renders / Screenshots, 1.4 Extract Design Tokens to CSS, 1.5 Convert Document to / from JSON, 1. Quick Reference & Commands, 2. Design-to-Code Implementation Workflow, 3. Modifying FigCraft Files via Headless Batch (+8 more)

### Community 15 - "react"
Cohesion: 0.17
Nodes (10): react, ICON, STATUS, Props, ChoiceProps, GroupProps, Icon(), Item (+2 more)

### Community 16 - "Form.tsx"
Cohesion: 0.18
Nodes (16): ariaInvalid(), Field(), FieldError(), FieldProps, Control, ErrorContext, Errors, onBlur() (+8 more)

### Community 17 - "Design Document: Aplikasi Strategi SPMB SMA/SMK Negeri"
Cohesion: 0.14
Nodes (13): 10. Aksesibilitas dan Inklusivitas, 11. Panduan Penulisan (Microcopy), 12. Privasi, Keamanan, dan Etika, 13. Kebutuhan Non-Fungsional, 14. Kasus Khusus (Edge Cases), 15. Metrik Keberhasilan, 16. Rencana Rilis, 17. Pertanyaan Terbuka (Perlu Keputusan) (+5 more)

### Community 18 - "styles/index.ts"
Cohesion: 0.14
Nodes (11): src_components_bottom_nav_bottom_nav, src_components_hero_hero, src_components_landing_landing, src_components_link_link, src_components_school_card_school_card, src_components_section_heading_section_heading, Props, Tab (+3 more)

### Community 19 - "Button.tsx"
Cohesion: 0.26
Nodes (8): handleClick(), Props, HelpLink(), dialogs, openDialog(), registerDialog(), triggerOf(), triggers

### Community 20 - "6. Spesifikasi Layar"
Cohesion: 0.18
Nodes (11): 6.10 Panel Admin, 6.1 Beranda (publik), 6.2 Wizard Isi Data, 6.3 Penjelasan Jalur (komponen berulang), 6.4 Peta Titik Rumah, 6.5 Hasil: Peta dan Daftar Sekolah, 6.6 Strategi dan Kombinasi Pilihan, 6.7 Sekolah Swasta Cadangan (+3 more)

### Community 21 - "2. Best Practices by Asset Category"
Cohesion: 0.20
Nodes (9): 1. Core Anatomy of a Web Asset Prompt, 2. Best Practices by Asset Category, 3. Negative Prompts and Constraints, A. Landing Page Hero Banners (Aspect Ratio: `16:9`), B. User Avatars & Team Photos (Aspect Ratio: `1:1`), C. Feature Card Graphics & 3D Icons (Aspect Ratio: `1:1` or `4:3`), D. Empty States & Error Pages (Aspect Ratio: `4:3` or `1:1`), Example Breakdown: (+1 more)

### Community 22 - "Map.tsx"
Cohesion: 0.27
Nodes (9): LABEL, MapLegend(), MapSchools(), MapZones(), Pin, PIN_ICON, pos(), Roads (+1 more)

### Community 23 - "graphify reference: extra exports and benchmark"
Cohesion: 0.22
Nodes (8): graphify reference: extra exports and benchmark, Step 6b - Wiki (only if --wiki flag), Step 7 - Neo4j export (only if --neo4j or --neo4j-push flag), Step 7a - FalkorDB export (only if --falkordb or --falkordb-push flag), Step 7b - SVG export (only if --svg flag), Step 7c - GraphML export (only if --graphml flag), Step 7d - MCP server (only if --mcp flag), Step 8 - Token reduction benchmark (only if total_words > 5000)

### Community 24 - "9. Sistem Desain Visual"
Cohesion: 0.29
Nodes (7): 9.1 Nada dan kepribadian, 9.2 Warna, 9.3 Tipografi, 9.4 Jarak, bentuk, dan komponen, 9.5 Ikonografi dan ilustrasi, 9.6 Responsif, 9. Sistem Desain Visual

### Community 25 - "1. Supported Models"
Cohesion: 0.25
Nodes (7): 1. Supported Models, 2. Technical Parameter Specifications, 3. Resolving API Keys & Common Error Codes, Gemini & Imagen Models Reference, `imagen-3.0-fast-generate-001`, `imagen-3.0-generate-002` *(Default)*, Multimodal Gemini (`gemini-2.0-flash-exp`, `gemini-3.1-flash-image`)

### Community 26 - "graphify reference: query, path, explain"
Cohesion: 0.33
Nodes (5): For /graphify explain, For /graphify path, graphify reference: query, path, explain, Step 0 — Constrained query expansion (REQUIRED before traversal), Step 1 — Traversal

### Community 27 - "1. Ringkasan Produk"
Cohesion: 0.40
Nodes (5): 1.1 Apa ini, 1.2 Masalah yang diselesaikan, 1.3 Pengguna, 1.4 Contoh nilai yang disampaikan ke orang tua, 1. Ringkasan Produk

### Community 28 - "3. Persona"
Cohesion: 0.40
Nodes (5): 3.1 Ibu Sari (42), pedagang pasar, orang tua utama, 3.2 Pak Budi (50), PNS, orang tua yang teliti, 3.3 Ibu Rina (38), Kepala Bidang di Dinas Pendidikan, 3.4 Pak Andi (30), staf admin dinas, 3. Persona

### Community 29 - "7. Model Peluang (Kebutuhan Produk)"
Cohesion: 0.40
Nodes (5): 7.1 Input, 7.2 Langkah perhitungan (konseptual), 7.3 Aturan penyajian, 7.4 Pernyataan batasan (wajib tampil), 7. Model Peluang (Kebutuhan Produk)

### Community 30 - "graphify reference: add a URL and watch a folder"
Cohesion: 0.50
Nodes (3): For /graphify add, For --watch, graphify reference: add a URL and watch a folder

### Community 31 - "graphify reference: commit hook and native CLAUDE.md integration"
Cohesion: 0.50
Nodes (3): For git commit hook, For native CLAUDE.md integration, graphify reference: commit hook and native CLAUDE.md integration

### Community 32 - "graphify reference: incremental update and cluster-only"
Cohesion: 0.50
Nodes (3): For --cluster-only, For --update (incremental re-extraction), graphify reference: incremental update and cluster-only

### Community 33 - "5. Alur Pengguna"
Cohesion: 0.50
Nodes (4): 5.1 Orang tua (alur inti), 5.2 Pembuat kebijakan, 5.3 Admin, 5. Alur Pengguna

### Community 39 - "faq.ts"
Cohesion: 0.50
Nodes (3): Faq, FAQ_GROUPS, FaqGroup

## Knowledge Gaps
- **265 isolated node(s):** `config`, `name`, `version`, `private`, `dev` (+260 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 352 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **9 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `next` connect `components/index.ts` to `steps.tsx`, `Shell.tsx`, `Toast.tsx`, `package.json`, `[id]/page.tsx`, `Footer.tsx`, `LandingPage.tsx`, `react`, `Form.tsx`, `Button.tsx`?**
  _High betweenness centrality (0.069) - this node is a cross-community bridge._
- **Why does `react` connect `react` to `components/index.ts`, `steps.tsx`, `Shell.tsx`, `Toast.tsx`, `package.json`, `SiteChrome`, `Form.tsx`, `styles/index.ts`, `Button.tsx`, `Map.tsx`?**
  _High betweenness centrality (0.033) - this node is a cross-community bridge._
- **Why does `Icon()` connect `react` to `components/index.ts`, `steps.tsx`, `Shell.tsx`, `Toast.tsx`, `Footer.tsx`, `LandingPage.tsx`, `Form.tsx`, `Button.tsx`, `Map.tsx`?**
  _High betweenness centrality (0.017) - this node is a cross-community bridge._
- **What connects `config`, `name`, `version` to the rest of the system?**
  _265 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `components/index.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.05413507317933345 - nodes in this community are weakly interconnected._
- **Should `steps.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.09041835357624832 - nodes in this community are weakly interconnected._
- **Should `Shell.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.13105413105413105 - nodes in this community are weakly interconnected._