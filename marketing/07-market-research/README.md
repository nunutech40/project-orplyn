# Market Research

Folder ini menyimpan market intelligence eksternal Orplyn. Data pasar tidak menggantikan jawaban owner; keduanya dipakai bersama data lead/order dan customer interview.

## Files

- `market-landscape-2026-07-16.md`: market signals, discoverability, competitor and price benchmark, customer problems, segment opportunity, search intent, and strategic implications.
- `offer-serp-refresh-2026-07-18.md`: owner-informed offer and local SERP refresh used for the current web funnel.
- `differentiation-product-strategy-2026-07-19.md`: customer jobs, live competitor parity map, chosen product wedge, operating requirements, proof ladder, and validation plan.
- `growth-experiment-backlog.md`: prioritized tests with hypotheses, metrics, gates, and stop rules.

## Evidence Rules

- Semua angka dan klaim eksternal harus mempunyai source dan snapshot date.
- Public competitor claims dicatat sebagai `Observed`, bukan dianggap benar tanpa verifikasi.
- Search-result order bukan market share.
- Competitor price bukan rekomendasi harga Orplyn.
- Segment priority tetap `Hypothesis` sampai economics dan conversion Orplyn mendukungnya.
- Temuan penting harus disinkronkan ke `business-data/findings-register.md`.

## AI Reading Order

For product differentiation work:

1. Read root `PROJECT-HANDOFF.md` for current status and blockers.
2. Read `differentiation-product-strategy-2026-07-19.md` as the canonical strategy snapshot and obey its `AI Reading Contract`.
3. Verify confirmed facts in `business-data/owner-answers.md`.
4. Verify evidence status and decision IDs O-013, O-014, H-008, and D-011 in `business-data/findings-register.md`.
5. Use E-11 in `growth-experiment-backlog.md` for validation execution.

Never interpret `research_complete_validation_pending` as a proven market differentiator or permission to change public claims.
