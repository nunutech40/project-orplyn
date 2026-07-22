---
document_id: ORPLYN-MARKETING-ROUTER-001
document_type: internal_strategy_router
status: active
canonical_for: marketing_document_interpretation_and_active_direction
primary_segment: event_and_community
active_decision_id: D-015
last_updated: 2026-07-22
---

# Orplyn Marketing Strategy Router

Dokumen ini bukan strategi tambahan. Fungsinya menentukan dokumen mana yang aktif, mana yang hanya menjadi evidence historis, dan bagaimana AI menyelesaikan konflik antarversi.

## AI Reading Contract

1. `AGENTS.md` tetap memegang non-negotiable rules untuk seluruh workspace.
2. Jawaban owner/user terbaru selalu mengalahkan dokumen lama.
3. Baca `PROJECT-HANDOFF.md` untuk status teknis, keputusan, blocker, dan pekerjaan berikutnya.
4. Baca `business-data/owner-answers.md` untuk fakta bisnis; perhatikan field yang masih menunggu approval publik.
5. Untuk arah acquisition/retention terbaru, baca `07-market-research/owner-feedback-evolution-lens-2026-07-19.md` lalu `07-market-research/owner-feedback-response-plan-2026-07-19.md`.
6. Untuk sudut offer terbaru, baca `07-market-research/owner-direction-manual-printing-2026-07-20.md`; arahan sablon manual mempersempit copy event/community dan tidak membuktikan klaim superioritas.
7. Untuk keluasan domain utama, baca `07-market-research/owner-direction-service-capabilities-2026-07-22.md`; homepage boleh menjelaskan seluruh kemampuan terkonfirmasi tanpa mengubah fokus campaign.
8. Untuk karakter verbal sementara, baca `05-content/orplyn-brand-voice-2026-07-22.md`. Arah aktifnya tegas, keren, dapat dipercaya, dan membersamai; ini provisional dan dapat diperbarui owner/user.
9. Dokumen berstatus historical snapshot tidak boleh mengubah prioritas aktif tanpa owner decision baru.
10. Jangan menggabungkan semua segment, offer, dan eksperimen lama menjadi satu campaign. Domain utama boleh lengkap; LP Ads tetap sempit dan sesuai intent.
11. Tidak ada copy outcome yang boleh masuk ke website, GBP, WhatsApp, quotation, content, atau Ads hanya karena muncul sebagai hypothesis di dokumen internal.

## Active Direction

- Objective utama: sales; operational conversion: qualified WhatsApp lead.
- Bottleneck saat ini: top-of-funnel hanya sekitar 2-5 chat baru per minggu menurut owner; angka ini harus diverifikasi melalui lead log.
- Satu fokus acquisition: event/komunitas.
- Arahan owner terbaru: tonjolkan sablon manual sebagai offer angle utama untuk event/komunitas; ini bukan bukti bahwa manual lebih unggul.
- DTF satuan dan kaos polos tetap tersedia sebagai entry offer/inbound lane, bukan fokus campaign aktif.
- Layanan lain tetap capability sekunder, bukan parallel acquisition campaign.
- Domain utama memakai payung `Sablon dan apparel custom. Dibuat untuk dipakai bersama.` untuk memperkenalkan karakter dan cakupan Orplyn. Ini tidak menggantikan fokus event/community pada acquisition.
- Karakter kerja saat ini: tegas, keren, trustable, dan membersamai kebutuhan acara, tim, komunitas, brand, serta pelanggan personal. Kepercayaan dibangun lewat fakta, proses, lokasi, hasil, dan bukti berizin; bukan kata sifat atau sejarah buatan.
- H-009/E-12 menguji deadline-risk handling untuk first-order event acquisition. Ini belum menjadi public claim.
- H-008/E-11 menguji saved specification untuk repeat-order retention. Ini bukan acquisition headline.
- Public website boleh memakai fakta kategori, lokasi, MOQ, lead time normal, tanggal pakai sebagai input, serta proses pengecekan admin yang sudah benar-benar dilakukan.
- Public website tidak boleh menjanjikan `aman dari drama H-1`, `tepat waktu`, `no drama`, `slot aman`, `predictable`, `consistent`, atau `repeat lebih cepat` sampai gate terkait lulus.

## Current Work Order

Per status 22 Juli 2026:

1. Dokumentasi aktif sudah dikonsolidasikan ke D-015; snapshot lama tetap historical evidence.
2. Domain utama lokal sudah diperbarui menjadi payung Orplyn yang lebih lengkap, memakai aset terbaru, galeri tanpa crop, bukti pelanggan buyer-facing, dan brand voice provisional. Event/community tetap featured offer pertama.
3. `/lp/kaos-event-komunitas` tetap menjadi satu-satunya destination Ads: direct-to-WhatsApp, navigasi minim, CTA `Cek kebutuhan & minta estimasi`, bukti event/manual yang tersedia, FAQ, NAP, dan intentional `noindex`.
4. Google tag `AW-374076115` dan conversion label WhatsApp lead-start sudah live. Ini baru sinyal sekunder; qualified lead, quote, sale, revenue, dan gross profit tetap harus dicatat di lead log.
5. Bukti yang ada sudah dipakai sesuai izin dan konteks. Contoh event dengan teknik manual tetap menjadi peningkatan opsional ketika tersedia, bukan blocker website saat ini.
6. Release `orplyn-web:20260722T050533Z-8eae04a` sudah live; lanjutkan responsive/manual CTA QA pada ponsel dan pertahankan Public-Claim Gate pada iterasi berikutnya.
7. GBP, Search Console, indexing, lead-log operation, admin readiness, offer/capacity approval, dan pilot Ads masih belum selesai. Ads tetap OFF sampai gate lulus.

## Document Status Map

### Active and canonical

| File | Role |
| --- | --- |
| `../AGENTS.md` | Workspace rules, source hierarchy, website invariants, and work order |
| `../PROJECT-HANDOFF.md` | Current implementation status, decisions, blockers, and next actions |
| `../business-data/owner-answers.md` | Confirmed owner/admin business inputs and approval limits |
| `00-brief/project-brief.md` | Concise active business and funnel brief |
| `07-market-research/owner-feedback-evolution-lens-2026-07-19.md` | Latest owner priority direction, source-of-truth rank 1 |
| `07-market-research/owner-direction-manual-printing-2026-07-20.md` | Latest owner offer-angle direction: foreground manual printing within event/community |
| `07-market-research/owner-direction-service-capabilities-2026-07-22.md` | Owner direction for broader factual capability wording on the main domain |
| `05-content/orplyn-brand-voice-2026-07-22.md` | Provisional brand character and copy guardrails for current website/content work |
| `07-market-research/hermes-feedback-006-009-response-2026-07-20.md` | Advisory feedback reconciliation, accepted gate-safe changes, disagreements, and owner gates |
| `07-market-research/hermes-feedback-012-response-2026-07-20.md` | LP Ads conversion rewrite response: local gate-safe implementation and form/H1 owner gates |
| `07-market-research/owner-feedback-response-plan-2026-07-19.md` | Active role mapping, sequence, deferrals, and claim gates |
| `07-market-research/differentiation-product-strategy-2026-07-19.md` | Evolved acquisition/retention hypotheses and validation design |
| `../business-data/findings-register.md` | Evidence status, hypotheses H-008/H-009, and decisions D-011/D-012 |

### Active operational plans

| File | Role | Current execution status |
| --- | --- | --- |
| `01-web-funnel/funnel-plan.md` | Website hierarchy and conversion contract | Active now |
| `02-seo-google/seo-plan.md` | SEO route/intent and later setup | On-page active; account/indexing setup deferred |
| `02-seo-google/review-acquisition-plan-2026-07-18.md` | Authentic review workflow | Waiting for GBP/link/customer actions |
| `03-ai-search/ai-search-plan.md` | Entity/content guidance | Secondary; setup/indexing deferred |
| `04-google-ads/google-ads-plan.md` | Future event-first Search pilot | Deferred until launch gates pass |
| `04-google-ads/search-event-campaign-draft-2026-07-19.md` | Local-only campaign skeleton, keywords, negatives, bidding, and geo gate | Draft; Ads off |
| `05-content/asset-inventory.md` | Curated asset/proof inventory and rights boundaries | Active; current web assets permitted, new assets still require specific context/permission |
| `06-whatsapp-sales/wa-sales-flow.md` | Qualification, lead log, and sales handoff | Active; external/admin setup deferred |
| `06-whatsapp-sales/lead-log-schema.md` | Field contract from source through sale/gross profit | Skeleton ready; real operation pending |
| `07-market-research/growth-experiment-backlog.md` | Tests, metrics, gates, and stop rules | Active; owner priority override applies |

### Historical evidence snapshots

These files preserve what was observed at a point in time. Their strategic recommendations are superseded by D-012 when they conflict with the active direction.

| File | Snapshot role |
| --- | --- |
| `07-market-research/market-landscape-2026-07-16.md` | External market and competitor evidence as of 16 July |
| `07-market-research/offer-serp-refresh-2026-07-18.md` | Pre-D-012 offer/SERP decision as of 18 July |
| `02-seo-google/seo-acquisition-audit-2026-07-18.md` | Technical/public SEO evidence as of 18 July |
| `../business-data/owner-research-review-2026-07-18.md` | Owner/customer data review before the evolution lens |

### Templates and research instruments

Files under `00-brief/` with `survey`, `questions`, or `template` in the filename are research instruments. They are not owner answers and not active strategy.

## Conflict Resolution Examples

- If an old file says choose between DTF and event Ads, use event/community only under D-012.
- If an old file describes three equal homepage offers, keep all services findable but make event/community visually and semantically dominant.
- If an old file calls `spec-first` a differentiation wedge for first order, use it only for retention under H-008/E-11.
- If an old status says domain or Cloudflare delegation is pending, use the current handoff: domain, DNS, edge HTTPS, origin HTTPS, and redirect are active.
- If an old recommendation says run setup now, follow the latest user instruction: external setup is deferred while documentation and website readiness are completed.
- If a public claim conflicts with owner approval or evidence status, remove or gate the claim even when it could improve conversion.
- If an old plan maps Ads to `/layanan/kaos-event-komunitas`, use D-014: SEO stays on `/layanan/kaos-event-komunitas`, while the sole Ads destination is `/lp/kaos-event-komunitas`.
- If an old file treats three offers as equal or says the homepage must be event-only, use the current split: the main domain explains Orplyn's confirmed breadth, while event/community remains the featured offer and only paid acquisition focus.
- If old copy sounds defensive, audit-like, or purely technical, use the provisional brand voice. Never trade factual accuracy for style.

## Website Readiness Contract

Website source may be called `pre-Ads ready` only when:

- event/community is the dominant acquisition path;
- the event landing matches likely Search intent and does not overpromise;
- every primary CTA reaches the tracked brief flow;
- MOQ and lead-time wording matches owner data and includes qualification caveats;
- real production media is used;
- commercial proof renders only from publishable, permissioned records;
- no fake review, transaction, customer, logo, result, price, capacity, or guarantee is present;
- mobile layout, form interaction, build, and core routes pass verification;
- privacy, NAP, canonical behavior, and attribution hooks remain intact.

This status does not mean Ads can run. Account setup, indexing, tracking verification, lead log, admin readiness, economics, and Public-Claim Gates remain separate launch requirements.
