const manualTechniques = [
  "Plastisol",
  "Rubber / pasta",
  "Discharge",
  "High density",
  "Foil dan glitter",
  "Flocking",
  "Glow in the dark",
  "Superwhite",
];

export function ManualPrintProcess() {
  return (
    <section className="manual-process-section" aria-label="Cara Orplyn mengerjakan sablon manual">
      <div className="manual-process-intro">
        <p className="eyebrow eyebrow-dark">CARA KAMI NGERJAIN</p>
        <h2>Sablon manual dikerjakan lewat screen, satu tahap demi satu tahap.</h2>
        <p>
          Untuk teknik manual, setiap warna disiapkan melalui screen tersendiri.
          Tinta kemudian diaplikasikan bertahap mengikuti desain yang sudah
          disetujui sebelum produksi dimulai.
        </p>
      </div>
      <figure className="manual-process-visual">
        <img
          src="/catalog/process/manual/13-process-manual-large-format-squeegee.jpeg"
          alt="Tarik rakel pada proses sablon manual Orplyn"
          width="963"
          height="1600"
          loading="lazy"
        />
        <figcaption>Tarik rakel pada proses sablon manual.</figcaption>
      </figure>
      <div className="manual-process-detail">
        <dl>
          <div>
            <dt>Per warna</dt>
            <dd>Screen tersendiri</dd>
          </div>
          <div>
            <dt>Pengerjaan</dt>
            <dd>Bertahap sesuai desain</dd>
          </div>
        </dl>
        <p>
          Admin membantu memilih teknik manual yang sesuai dengan desain, bahan,
          jumlah, dan kebutuhan acara.
        </p>
        <div className="method-list" aria-label="Teknik sablon manual">
          {manualTechniques.map((technique) => (
            <span key={technique}>{technique}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
