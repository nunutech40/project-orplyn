const manualResults = [
  {
    image: "/catalog/manual/01-hasil-plastisol-smoothie-kids.jpeg",
    title: "Plastisol desain ilustrasi",
    label: "HASIL SABLON MANUAL",
  },
  {
    image: "/catalog/manual/02-hasil-plastisol-ilustrasi.jpeg",
    title: "Plastisol pada kaos gelap",
    label: "HASIL SABLON MANUAL",
  },
  {
    image: "/catalog/manual/03-hasil-plastisol-desain-warna.jpeg",
    title: "Plastisol dengan beberapa warna",
    label: "HASIL SABLON MANUAL",
  },
  {
    image: "/catalog/manual/04-hasil-manual-puff-pasta.jpeg",
    title: "Efek puff dan pasta",
    label: "EFEK SABLON MANUAL",
  },
  {
    image: "/catalog/manual/05-hasil-manual-pasta-glitter.jpeg",
    title: "Pasta dengan efek glitter",
    label: "EFEK SABLON MANUAL",
  },
  {
    image: "/catalog/manual/06-hasil-discharge.jpeg",
    title: "Hasil sablon discharge",
    label: "HASIL SABLON MANUAL",
  },
];

const manualProcess = [
  {
    image:
      "/catalog/process/manual/10-process-manual-ink-screen-preparation.jpeg",
    title: "Persiapan screen dan tinta",
  },
  {
    image:
      "/catalog/process/manual/11-process-manual-squeegee-application.jpeg",
    title: "Penarikan rakel pada screen",
  },
  {
    image:
      "/catalog/process/manual/14-process-manual-color-layer-application.jpeg",
    title: "Pengerjaan lapisan warna",
  },
  {
    image:
      "/catalog/process/manual/16-process-manual-curing-before-finishing.jpeg",
    title: "Curing sebelum finishing",
  },
];

export function AdsManualProofGallery() {
  return (
    <section className="ads-manual-proof" aria-label="Hasil dan proses sablon manual Orplyn">
      <div className="ads-section-heading">
        <p className="eyebrow eyebrow-dark">HASIL SABLON MANUAL ORPLYN</p>
        <h2>Lihat tekniknya dari hasil yang sudah dikerjakan.</h2>
        <p>
          Setiap desain dapat membutuhkan teknik yang berbeda. Galeri ini
          menunjukkan contoh hasil plastisol, puff, pasta, glitter, dan
          discharge yang pernah dikerjakan Orplyn.
        </p>
      </div>

      <div className="ads-manual-result-grid">
        {manualResults.map((item) => (
          <figure key={item.image}>
            <div className="ads-proof-media">
              <img
                src={item.image}
                alt={`${item.title} produksi Orplyn`}
                width="900"
                height="900"
                loading="lazy"
              />
            </div>
            <figcaption>
              <span>{item.label}</span>
              <strong>{item.title}</strong>
            </figcaption>
          </figure>
        ))}
      </div>

      <div className="ads-process-proof">
        <div>
          <p className="eyebrow eyebrow-dark">DARI WORKSHOP CIPUTAT</p>
          <h3>Screen, rakel, warna, lalu curing.</h3>
          <p>
            Beberapa tahap pengerjaan manual di workshop Orplyn. Foto proses
            ditampilkan sebagai dokumentasi pengerjaan, bukan sebagai klaim
            untuk order tertentu.
          </p>
        </div>
        <div className="ads-process-proof-grid">
          {manualProcess.map((item) => (
            <figure key={item.image}>
              <div className="ads-proof-media">
                <img
                  src={item.image}
                  alt={`${item.title} di workshop Orplyn`}
                  width="900"
                  height="900"
                  loading="lazy"
                />
              </div>
              <figcaption>{item.title}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
