# Game Assets — Storyteller Reference

M20 (Mage: the Ascension 20th Anniversary) stat writeups for every piece of Technocratic
equipment, every Procedure/Adjustment,
vehicle, program, and notable biological **mentioned in the in-fiction Consensus Holdings
website**. These files translate the marketing copy on the site — and the candid horror on
the internal Kanban boards — into runnable game mechanics.

> **This folder is Storyteller-facing material.** It lives at the repo root, outside `src/`
> and `public/`, and is **never served by the site build**. Nothing here is diegetic; it is
> the truth the website is built to launder. Players should never see these pages.

## Conventions used here

- **Damian Scale** — this table's blatancy rating for each item: `0` = indistinguishable
  from mundane technology / fully coincidental, `10` = catastrophically vulgar, guaranteed
  Paradox in front of witnesses. Most Technocratic assets aim for `0–3` (an *Adjustment*);
  higher ratings are *Procedures* reserved for controlled environments.
- **Adjustment vs Procedure** — an Adjustment is a *subtle/coincidental* act of Enlightened
  Science; a Procedure is a *blatant/vulgar* one (TR, p.21–22).
- **Equipment categories** — hardware uses the seven M20 Technocratic categories (Gadget /
  Trinket / Device / Enhancement / Invention / Primer / Matrix), each with Enlightenment,
  Primal Energy, and Background Cost lines; mystic-built hazards (the SPD stock) keep
  Wonder/Talisman statting with Rank and Resonance.
- **Sphere names** — Technocratic usage throughout: **Data** for Correspondence in
  information contexts (Void Engineer spatial work keeps the name Correspondence),
  **Dimensional Science** for Spirit, **Primal Energy** for Quintessence; Prime and the
  rest keep their names.
- **HOAR** — the Hierarchy of Assets & Resources gates who may requisition what.
- **RSP** — Req Spec Phase, the pre-mission window in which gear is requested (form RSP-3).

## Index

| Asset | Type | Convention | Damian | Appears on site |
|---|---|---|---|---|
| [DermaTrue™ Synthetic Skin](wonders/dermatrue-synthetic-skin.md) | Gadget (bio-material) | Progenitors / Iteration X | 1 | Divisions: Iteration X, Progenitors; PR: prosthetics milestone |
| [Universal Nanoscale Interface (UNI)](wonders/uni-universal-nanoscale-interface.md) | Trinket (nanotech interface) | Iteration X | 2 | Divisions: Iteration X accomplishments |
| [EDG Virtuous 8 / Desire Engine](wonders/edg-virtuous-8-desire-engine.md) | Trinket (consumer device) | Syndicate (Eris Design Group) | 1 | PR: Virtuous 8 launch; Divisions: Syndicate |
| [BioMechanics Access Limb](wonders/biomechanics-prosthetic-limb.md) | Enhancement (implant) | Iteration X | 1 | Divisions: Iteration X; PR: 2-millionth limb |
| [SPD Reality-Toxin Hardware](wonders/spd-reality-toxin-hardware.md) | Talisman (tainted, Rank 6 est.) | Syndicate / defunct SPD | 6 | Board LEDGER (sy-06, sy-09) |
| [Social Conditioning Refresh](procedures/social-conditioning-refresh.md) | Procedure | New World Order | 4 | Boards: MIRRORGLASS (nwo-06/08), forms |
| [Processing](procedures/processing.md) | Procedure | Syndicate / NWO | 5 | Board LEDGER (sy-11) |
| [Canary-Trap Document Seeding](procedures/canary-trap-seeding.md) | Adjustment (tradecraft) | New World Order | 0 | Board MIRRORGLASS (nwo-04, nwo-12) |
| [Adjustment (Memory Revision)](procedures/adjustment-memory-revision.md) | Adjustment | NWO / Progenitors | 2 | Boards: multiple ("Adjusted", "Attuned") |
| [Narrative De-Amplification](procedures/narrative-de-amplification.md) | Adjustment | New World Order | 1 | Boards: FERAL BLOOM (pg-15), MIRRORGLASS; Divisions: NWO |
| [Sentinel-312 Constellation](programs/sentinel-312-constellation.md) | Program (vehicle network) | Void Engineers | 2 | Divisions: Void Eng.; PR: Sentinel complete |
| [THV-9 "Thornveldt" Specimen Line](programs/thv-9-thornveldt.md) | Biological | Progenitors | 3 | Board FERAL BLOOM |
| [FERAL BLOOM Cover Program](programs/feral-bloom-cover-program.md) | Program (cover) | Progenitors (Damage Control) | 0 | Board FERAL BLOOM |
| [DOAA Resilient Cultivars](programs/doaa-cultivars.md) | Program (biological) | Progenitors | 2 | Divisions: Progenitors; PR: harvest record |
| [FACADE Tissue-Engineering Platform](programs/facade-tissue-engineering.md) | Program (bio-Device) | Progenitors | 2 | Divisions: Progenitors; PR: Iridium coverage |
| [Feed Analytics / The Feed](programs/feed-analytics.md) | Program (surveillance) | New World Order | 1 | Divisions: NWO; boards passim |
| [Null Conditioning Screening Protocol](programs/null-conditioning-screening.md) | Program (protocol) | Void Engineers | 3 | Board DEEP PERIMETER |

## File layout

```
game-assets/
  README.md            this index
  wonders/*.md         Technocratic equipment & tainted Wonders (one per file)
  procedures/*.md      Procedures & Adjustments (Enlightened Effects)
  programs/*.md        Large systems, programs, and biologicals
```
