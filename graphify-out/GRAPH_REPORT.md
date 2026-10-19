# Graph Report - app  (2026-10-19)

## Corpus Check
- Corpus is ~16,613 words - fits in a single context window. You may not need a graph.

## Summary
- 350 nodes · 1200 edges · 11 communities (9 shown, 2 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 9 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- Dashboard & Policy Pages
- UI Component Library
- Data-Entry Wizard (Isi Data)
- App Shell, Layouts & Nav
- Forms, Dialogs & Toasts
- Package & Dependencies
- Public Pages & Content Data
- School Detail & School Data
- TypeScript Config
- Next.js Config

## God Nodes (most connected - your core abstractions)
1. `Button()` - 59 edges
2. `Icon()` - 52 edges
3. `PageHeader()` - 44 edges
4. `next` - 34 edges
5. `Alert()` - 33 edges
6. `Badge()` - 33 edges
7. `react` - 31 edges
8. `Select()` - 29 edges
9. `Table()` - 28 edges
10. `Container()` - 26 edges

## Surprising Connections (you probably didn't know these)
- `AdminAturanPage()` --calls--> `Choice()`  [EXTRACTED]
  src/app/(dash)/(admin)/admin-aturan/page.tsx → src/components/choice/Choice.tsx
- `AdminAturanPage()` --calls--> `ChoiceGroup()`  [EXTRACTED]
  src/app/(dash)/(admin)/admin-aturan/page.tsx → src/components/choice/Choice.tsx
- `AdminAturanPage()` --calls--> `Field()`  [EXTRACTED]
  src/app/(dash)/(admin)/admin-aturan/page.tsx → src/components/field/Field.tsx
- `AdminImporPage()` --calls--> `Upload()`  [EXTRACTED]
  src/app/(dash)/(admin)/admin-impor/page.tsx → src/components/upload/Upload.tsx
- `AdminModelPage()` --calls--> `Field()`  [EXTRACTED]
  src/app/(dash)/(admin)/admin-model/page.tsx → src/components/field/Field.tsx

## Import Cycles
- None detected.

## Communities (11 total, 2 thin omitted)

### Community 0 - "Dashboard & Policy Pages"
Cohesion: 0.12
Nodes (53): next, AdminAturanPage(), metadata, AdminImporPage(), metadata, AdminModelPage(), metadata, AdminPenggunaPage() (+45 more)

### Community 1 - "UI Component Library"
Cohesion: 0.07
Nodes (32): react, ICON, STATUS, Props, ChoiceProps, GroupProps, ariaInvalid(), Field() (+24 more)

### Community 2 - "Data-Entry Wizard (Isi Data)"
Cohesion: 0.10
Nodes (33): WizardLayout(), generateMetadata(), IsiDataPage(), Props, MasukFlow(), MasukPage(), metadata, ButtonGroup() (+25 more)

### Community 3 - "App Shell, Layouts & Nav"
Cohesion: 0.11
Nodes (26): AdminLayout(), KebijakanLayout(), NotFound(), ParentLayout(), PublicLayout(), BottomNav(), COLUMNS, Footer() (+18 more)

### Community 4 - "Forms, Dialogs & Toasts"
Cohesion: 0.09
Nodes (28): metadata, RootLayout(), handleClick(), Props, Control, ErrorContext, Errors, onBlur() (+20 more)

### Community 5 - "Package & Dependencies"
Cohesion: 0.08
Nodes (25): dependencies, next, react, react-dom, devDependencies, prettier, @types/node, @types/react (+17 more)

### Community 6 - "Public Pages & Content Data"
Cohesion: 0.20
Nodes (19): AnakSayaPage(), metadata, IndexPage(), metadata, metadata, PanduanPage(), metadata, TanyaJawabPage() (+11 more)

### Community 7 - "School Detail & School Data"
Cohesion: 0.14
Nodes (17): DetailSekolahPage(), generateMetadata(), Props, PREVIEW, SchoolCard(), Stats(), getSchool(), Kind (+9 more)

### Community 8 - "TypeScript Config"
Cohesion: 0.11
Nodes (18): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+10 more)

## Knowledge Gaps
- **6 isolated node(s):** `react-dom`, `@types/node`, `@types/react`, `@types/react-dom`, `prettier` (+1 more)
  These have ≤1 connection - possible missing edges. (Counts symbols only; 120 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **2 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `next` connect `Dashboard & Policy Pages` to `UI Component Library`, `Data-Entry Wizard (Isi Data)`, `App Shell, Layouts & Nav`, `Forms, Dialogs & Toasts`, `Package & Dependencies`, `Public Pages & Content Data`, `School Detail & School Data`, `Next.js Config`?**
  _High betweenness centrality (0.139) - this node is a cross-community bridge._
- **What connects `react-dom`, `@types/node`, `@types/react` to the rest of the system?**
  _6 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Dashboard & Policy Pages` be split into smaller, more focused modules?**
  _Cohesion score 0.11750503018108652 - nodes in this community are weakly interconnected._
- **Why does `react` connect `UI Component Library` to `Data-Entry Wizard (Isi Data)`, `App Shell, Layouts & Nav`, `Forms, Dialogs & Toasts`, `Package & Dependencies`, `Public Pages & Content Data`?**
  _High betweenness centrality (0.093) - this node is a cross-community bridge._
- **Should `UI Component Library` be split into smaller, more focused modules?**
  _Cohesion score 0.07211538461538461 - nodes in this community are weakly interconnected._
- **Why does `Button()` connect `Dashboard & Policy Pages` to `UI Component Library`, `Data-Entry Wizard (Isi Data)`, `App Shell, Layouts & Nav`, `Forms, Dialogs & Toasts`, `Public Pages & Content Data`, `School Detail & School Data`?**
  _High betweenness centrality (0.075) - this node is a cross-community bridge._
- **Should `Data-Entry Wizard (Isi Data)` be split into smaller, more focused modules?**
  _Cohesion score 0.09725158562367865 - nodes in this community are weakly interconnected._