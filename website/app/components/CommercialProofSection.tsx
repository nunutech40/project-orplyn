import type { CommercialProof } from "../lib/commercial-proofs";

type CommercialProofSectionProps = {
  proofs: CommercialProof[];
  id?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
};

export function CommercialProofSection({
  proofs,
  id = "bukti-pesanan",
  eyebrow = "BUKTI PESANAN TERVERIFIKASI",
  title = "Detail pesanan nyata, bukan sekadar galeri.",
  description = "Bukti dipilih dari sumber yang ditinjau dan disetujui pemilik untuk ditampilkan. Detail yang tidak tersedia tidak kami tambahkan.",
}: CommercialProofSectionProps) {
  if (proofs.length === 0) return null;

  return (
    <section className="commercial-proof-section" id={id}>
      <div className="commercial-proof-inner">
        <div className="commercial-proof-heading">
          <div>
            <p className="eyebrow eyebrow-dark">{eyebrow}</p>
            <h2>{title}</h2>
          </div>
          <p>{description}</p>
        </div>

        <div className="commercial-proof-grid">
          {proofs.map((proof) => (
            <article className="commercial-proof-card" key={proof.id}>
              <div className="commercial-proof-image">
                <img
                  src={proof.image}
                  alt={proof.imageAlt}
                  width="900"
                  height="720"
                  loading="lazy"
                />
              </div>
              <div className="commercial-proof-content">
                <p className="eyebrow eyebrow-dark">{proof.eyebrow}</p>
                <h3>{proof.title}</h3>
                <p>{proof.summary}</p>
                <dl className="commercial-proof-facts">
                  {proof.facts.map((fact) => (
                    <div key={`${proof.id}-${fact.label}`}>
                      <dt>{fact.label}</dt>
                      <dd>{fact.value}</dd>
                    </div>
                  ))}
                </dl>
                {proof.quote && (
                  <blockquote>
                    <p>&ldquo;{proof.quote.text}&rdquo;</p>
                    <cite>{proof.quote.attribution}</cite>
                  </blockquote>
                )}
                {proof.source && (
                  <a href={proof.source.url} target="_blank" rel="noreferrer">
                    {proof.source.label}
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
