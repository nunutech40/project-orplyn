import {
  adsTrustEvidence,
  getPublishableAdsTrustEvidence,
} from "../lib/ads-trust-evidence";

export function AdsTrustBridge() {
  const evidence = getPublishableAdsTrustEvidence(adsTrustEvidence);
  const hasEvidence = Object.values(evidence).some(
    (records) => records.length > 0,
  );

  if (!hasEvidence) return null;

  return (
    <section className="ads-trust-bridge" data-testid="ads-trust-bridge">
      <div className="ads-section-heading">
        <p className="eyebrow eyebrow-dark">BUKTI PESANAN EVENT</p>
        <h2>Hasil order event yang bisa dilihat konteksnya.</h2>
      </div>

      {evidence.eventCount.length > 0 && (
        <div className="ads-proof-count-grid" data-proof-kind="event-count">
          {evidence.eventCount.map((proof) => (
            <article key={proof.id}>
              <strong>{proof.count}</strong>
              <span>{proof.scopeLabel}</span>
              <small>{proof.periodLabel}</small>
            </article>
          ))}
        </div>
      )}

      {evidence.onTime.length > 0 && (
        <div className="ads-proof-list" data-proof-kind="on-time">
          <h3>Catatan jadwal dari order nyata</h3>
          {evidence.onTime.map((proof) => (
            <article key={proof.id}>
              <h4>{proof.title}</h4>
              <p>{proof.context}</p>
              <dl>
                <div>
                  <dt>Tanggal acara</dt>
                  <dd>{proof.eventDate}</dd>
                </div>
                <div>
                  <dt>Target selesai</dt>
                  <dd>{proof.promisedDate}</dd>
                </div>
                <div>
                  <dt>Selesai aktual</dt>
                  <dd>{proof.completedDate}</dd>
                </div>
              </dl>
            </article>
          ))}
        </div>
      )}

      {evidence.contextualPortfolio.length > 0 && (
        <div className="ads-context-proof-grid" data-proof-kind="portfolio">
          {evidence.contextualPortfolio.map((proof) => (
            <article key={proof.id}>
              <img
                src={proof.image}
                alt={proof.imageAlt}
                width="900"
                height="900"
                loading="lazy"
              />
              <div>
                <p className="ads-proof-label">
                  {proof.eventType} · {proof.materialAndTechnique} · {proof.quantityLabel} · {proof.locationLabel}
                </p>
                <h3>{proof.title}</h3>
                <p>{proof.context}</p>
                <dl>
                  <div>
                    <dt>Jumlah</dt>
                    <dd>{proof.quantityLabel}</dd>
                  </div>
                  <div>
                    <dt>Bahan & teknik</dt>
                    <dd>{proof.materialAndTechnique}</dd>
                  </div>
                </dl>
              </div>
            </article>
          ))}
        </div>
      )}

      {evidence.testimonials.length > 0 && (
        <div className="ads-testimonial-grid" data-proof-kind="testimonial">
          {evidence.testimonials.map((proof) => (
            <blockquote key={proof.id}>
              <p>&ldquo;{proof.quote}&rdquo;</p>
              <cite>{proof.attribution}</cite>
              <span>{proof.eventContext}</span>
            </blockquote>
          ))}
        </div>
      )}
    </section>
  );
}
