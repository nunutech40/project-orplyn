const fs = require('fs');
const path = require('path');
const cp = require('child_process');

const root = path.resolve(__dirname, '..');
const out = path.join(root, 'deliverables/launch-readiness/Orplyn - Jembatan Setup Web Google Ads.docx');
const tmp = '/private/tmp/orplyn-bridge-docx';

function esc(value) {
  return String(value).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function run(text, bold = false, italic = false) {
  const props = [
    '<w:rFonts w:ascii="Arial" w:hAnsi="Arial"/>',
    bold ? '<w:b/>' : '',
    italic ? '<w:i/>' : '',
  ].join('');
  return `<w:r><w:rPr>${props}</w:rPr><w:t xml:space="preserve">${esc(text)}</w:t></w:r>`;
}

function paragraph(text = '', style = 'Normal', opts = {}) {
  const ppr = [
    `<w:pStyle w:val="${style}"/>`,
    opts.before != null ? `<w:spacing w:before="${opts.before}" w:after="${opts.after ?? 160}" w:line="276" w:lineRule="auto"/>` : '',
    opts.keepNext ? '<w:keepNext/>' : '',
  ].join('');
  const content = Array.isArray(text) ? text.map(item => run(item.text, item.bold, item.italic)).join('') : run(text, opts.bold, opts.italic);
  return `<w:p><w:pPr>${ppr}</w:pPr>${content}</w:p>`;
}

function bullet(text) {
  return `<w:p><w:pPr><w:pStyle w:val="Normal"/><w:numPr><w:ilvl w:val="0"/><w:numId w:val="1"/></w:numPr><w:spacing w:after="80" w:line="276" w:lineRule="auto"/></w:pPr>${run(text)}</w:p>`;
}

function number(text) {
  return `<w:p><w:pPr><w:pStyle w:val="Normal"/><w:numPr><w:ilvl w:val="0"/><w:numId w:val="2"/></w:numPr><w:spacing w:after="80" w:line="276" w:lineRule="auto"/></w:pPr>${run(text)}</w:p>`;
}

function cell(text, width, header = false) {
  return `<w:tc><w:tcPr><w:tcW w:w="${width}" w:type="dxa"/><w:tcMar><w:top w:w="100" w:type="dxa"/><w:bottom w:w="100" w:type="dxa"/><w:start w:w="120" w:type="dxa"/><w:end w:w="120" w:type="dxa"/></w:tcMar></w:tcPr><w:p><w:pPr><w:spacing w:after="0" w:line="276" w:lineRule="auto"/></w:pPr>${run(text, header)}</w:p></w:tc>`;
}

function table(rows) {
  const widths = [1800, 3900, 3660];
  const grid = widths.map(w => `<w:gridCol w:w="${w}"/>`).join('');
  const body = rows.map((row, i) => `<w:tr>${row.map((text, j) => cell(text, widths[j], i === 0)).join('')}</w:tr>`).join('');
  return `<w:tbl><w:tblPr><w:tblW w:w="9360" w:type="dxa"/><w:tblLayout w:type="fixed"/><w:tblBorders><w:top w:val="single" w:sz="4" w:color="DADCE0"/><w:left w:val="single" w:sz="4" w:color="DADCE0"/><w:bottom w:val="single" w:sz="4" w:color="DADCE0"/><w:right w:val="single" w:sz="4" w:color="DADCE0"/><w:insideH w:val="single" w:sz="4" w:color="DADCE0"/><w:insideV w:val="single" w:sz="4" w:color="DADCE0"/></w:tblBorders></w:tblPr><w:tblGrid>${grid}</w:tblGrid>${body}</w:tbl>`;
}

const body = [
  paragraph('Jembatan Setup Web, Google Ads, dan WhatsApp Orplyn', 'DocTitle', { after: 60 }),
  paragraph('Panduan ringkas untuk memahami setup tracking dan kesiapan iklan | 21 Juli 2026', 'Meta', { after: 240 }),
  paragraph([{ text: 'Jawaban singkat: ', bold: true }, { text: 'setup ini diperlukan supaya iklan Google Ads tidak berhenti di klik. Kita bisa melihat apakah orang dari iklan masuk ke WhatsApp, lalu apakah chat itu menjadi lead yang memenuhi syarat, quotation, dan penjualan.' }], 'Callout', { after: 240 }),
  paragraph('Alur Sederhana', 'Heading1'),
  number('Orang mencari kebutuhan kaos event atau komunitas di Google.'),
  number('Iklan membawa mereka ke landing page event Orplyn.'),
  number('CTA membuka WhatsApp Aulia dengan template brief singkat.'),
  number('Website mencatat Lead ID dan sumber kunjungan.'),
  number('Admin mencatat perkembangan lead sampai quote, sale, revenue, dan gross profit.'),
  number('Data penjualan nantinya bisa dipakai untuk menilai keyword dan campaign.'),
  paragraph('Setup yang Menghubungkan Semuanya', 'Heading1'),
  table([
    ['Bagian', 'Fungsi', 'Status Orplyn'],
    ['Landing page', 'Halaman tujuan iklan yang fokus pada kaos event/komunitas dan CTA WhatsApp.', 'Sudah ada: orplyn.id/lp/kaos-event-komunitas. Masih noindex sampai aktivasi SEO/Ads disetujui.'],
    ['Google tag', 'Mengenalkan website ke akun Google Ads agar aktivitas website bisa diukur.', 'Sudah aktif: AW-374076115.'],
    ['Conversion action', 'Menentukan tindakan yang dihitung sebagai konversi oleh Google Ads.', 'Sudah dibuat: Mengirim formulir lead.'],
    ['Event conversion', 'Mencatat ketika pengunjung menekan CTA WhatsApp dari website.', 'Sudah dipasang pada CTA WhatsApp dengan label -KloCLqt6NMcENPlr7IB.'],
    ['Lead ID dan UTM', 'Membantu menghubungkan chat dengan sumber traffic, campaign, dan landing page.', 'Sudah disiapkan di alur form/brief website.'],
    ['Lead log', 'Mengukur kualitas chat sampai quotation dan penjualan nyata.', 'Struktur field sudah tersedia. Pengisian dimulai saat lead nyata masuk.'],
    ['Campaign Google Ads', 'Mengatur keyword, lokasi, budget, jam tayang, dan iklan.', 'Belum dinyalakan. Menunggu kesiapan offer, admin, dan pengecekan tracking.'],
    ['Offline conversion', 'Mengirim kembali data qualified lead atau sale ke Google Ads.', 'Tahap lanjutan, setelah lead log punya data nyata yang cukup.'],
  ]),
  paragraph('Kenapa Klik WhatsApp Saja Belum Cukup?', 'Heading1'),
  paragraph('Klik WhatsApp adalah sinyal awal, bukan otomatis penjualan. Orang bisa membuka chat lalu tidak membalas, tidak cocok dengan MOQ, atau belum jadi memesan. Karena itu pencatatan harus dilanjutkan sampai status qualified, quotation, won/lost, revenue, dan gross profit.'),
  paragraph('Yang Sudah Beres Sekarang', 'Heading1'),
  bullet('Landing page event/komunitas sudah live di domain utama.'),
  bullet('Google tag AW-374076115 sudah terpasang.'),
  bullet('Conversion action dan label lead sudah dibuat di Google Ads.'),
  bullet('CTA WhatsApp mengirim event conversion ke Google Ads.'),
  bullet('Website sudah dideploy dan halaman LP mengembalikan HTTP 200.'),
  paragraph('Yang Belum Boleh Dilakukan', 'Heading1'),
  bullet('Menyalakan campaign sebelum tracking dan alur admin diuji end-to-end.'),
  bullet('Menganggap semua klik WhatsApp sebagai lead berkualitas.'),
  bullet('Mengoptimasi iklan berdasarkan klik tanpa melihat quote dan sale.'),
  bullet('Memasang klaim harga, testimoni, garansi, atau hasil yang belum disetujui dan dibuktikan.'),
  paragraph('Patokan Membaca Hasil Iklan', 'Heading1'),
  paragraph('Gunakan funnel berikut saat mengevaluasi data. Setiap tahap menjawab pertanyaan yang berbeda; jangan memakai metrik tahap awal sebagai pengganti hasil bisnis.'),
  table([
    ['Tahap', 'Metrik', 'Cara membaca'],
    ['Iklan tampil', 'Impression', 'Apakah iklan mendapat kesempatan tampil?'],
    ['Iklan diklik', 'Click, CTR, CPC', 'Apakah keyword dan iklan menarik bagi pencari?'],
    ['Landing dibuka', 'Page view/session', 'Apakah traffic sampai ke halaman yang benar?'],
    ['Isi dibaca', 'Scroll, waktu aktif, section viewed', 'Apakah halaman relevan dan mudah dipahami? Ini diagnosis, bukan tujuan utama.'],
    ['CTA ditekan', 'CTA click', 'Apakah pengunjung mulai berminat?'],
    ['WhatsApp dibuka', 'whatsapp_open dan Ads conversion', 'Lead started; belum berarti lead berkualitas.'],
    ['Chat memenuhi syarat', 'Qualified lead', 'Apakah kebutuhan cocok dengan fokus event/komunitas dan bisa ditindaklanjuti?'],
    ['Estimasi dikirim', 'Quote sent', 'Apakah percakapan sudah masuk proses penawaran?'],
    ['Penjualan terjadi', 'Won, revenue, gross profit', 'Ini hasil bisnis yang menjadi dasar keputusan budget.'],
  ]),
  paragraph('Cara Menentukan Langkah Berikutnya', 'Heading2'),
  number('Banyak impression tetapi sedikit click: periksa keyword, headline iklan, dan relevansi offer.'),
  number('Banyak click tetapi sedikit page engagement: periksa kecepatan, pesan hero, dan kecocokan landing dengan keyword.'),
  number('Banyak pengunjung tetapi sedikit WhatsApp open: periksa CTA, proof, lokasi, dan hambatan di halaman.'),
  number('Banyak WhatsApp open tetapi sedikit qualified lead: periksa kualitas traffic, template chat, MOQ, dan segmentasi keyword.'),
  number('Banyak qualified lead tetapi sedikit quote/sale: periksa respons admin, offer, harga, kapasitas, dan proses quotation.'),
  paragraph('Scroll dan waktu baca boleh ditambahkan sebagai diagnostic, tetapi tidak dijadikan conversion utama. Patokan utama Orplyn: Biaya iklan -> chat -> qualified lead -> quote -> sale -> revenue/profit.', 'Callout', { after: 240 }),
  paragraph('Kesimpulan', 'Heading1'),
  paragraph('Jembatan teknis utama antara website dan Google Ads sudah terpasang. Website mengirim sinyal ketika orang membuka WhatsApp, sementara lead log menjadi jembatan bisnis untuk mengetahui apakah sinyal itu benar-benar menghasilkan penjualan. Yang tersisa bukan sekadar kode, tetapi pengujian nyata, kesiapan admin, dan disiplin mencatat hasil chat sampai sale.'),
].join('');

const styles = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?><w:styles xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main"><w:style w:type="paragraph" w:default="1" w:styleId="Normal"><w:name w:val="Normal"/><w:rPr><w:rFonts w:ascii="Arial" w:hAnsi="Arial"/><w:sz w:val="22"/></w:rPr><w:pPr><w:spacing w:after="160" w:line="276" w:lineRule="auto"/></w:pPr></w:style><w:style w:type="paragraph" w:styleId="DocTitle"><w:name w:val="Document title"/><w:rPr><w:rFonts w:ascii="Arial" w:hAnsi="Arial"/><w:sz w:val="52"/><w:color w:val="000000"/></w:rPr><w:pPr><w:spacing w:before="0" w:after="60"/></w:pPr></w:style><w:style w:type="paragraph" w:styleId="Meta"><w:name w:val="Metadata"/><w:rPr><w:rFonts w:ascii="Arial" w:hAnsi="Arial"/><w:sz w:val="20"/><w:color w:val="555555"/></w:rPr></w:style><w:style w:type="paragraph" w:styleId="Callout"><w:name w:val="Callout"/><w:rPr><w:rFonts w:ascii="Arial" w:hAnsi="Arial"/><w:sz w:val="22"/></w:rPr><w:pPr><w:ind w:left="180"/><w:pBdr><w:left w:val="single" w:sz="18" w:space="8" w:color="555555"/></w:pBdr><w:spacing w:after="160" w:line="276" w:lineRule="auto"/></w:pPr></w:style><w:style w:type="paragraph" w:styleId="Heading1"><w:name w:val="heading 1"/><w:rPr><w:rFonts w:ascii="Arial" w:hAnsi="Arial"/><w:sz w:val="32"/><w:color w:val="000000"/></w:rPr><w:pPr><w:keepNext/><w:spacing w:before="360" w:after="120"/></w:pPr></w:style></w:styles>`;
const numbering = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?><w:numbering xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main"><w:abstractNum w:abstractNumId="0"><w:multiLevelType w:val="singleLevel"/><w:lvl w:ilvl="0"><w:start w:val="1"/><w:numFmt w:val="bullet"/><w:lvlText w:val="●"/><w:lvlJc w:val="left"/><w:pPr><w:tabs><w:tab w:val="num" w:pos="720"/></w:tabs><w:ind w:left="720" w:hanging="360"/></w:pPr><w:rPr><w:rFonts w:ascii="Arial" w:hAnsi="Arial"/></w:rPr></w:lvl></w:abstractNum><w:abstractNum w:abstractNumId="1"><w:multiLevelType w:val="singleLevel"/><w:lvl w:ilvl="0"><w:start w:val="1"/><w:numFmt w:val="decimal"/><w:lvlText w:val="%1."/><w:lvlJc w:val="left"/><w:pPr><w:tabs><w:tab w:val="num" w:pos="720"/></w:tabs><w:ind w:left="720" w:hanging="360"/></w:pPr></w:lvl></w:abstractNum><w:num w:numId="1"><w:abstractNumId w:val="0"/></w:num><w:num w:numId="2"><w:abstractNumId w:val="1"/></w:num></w:numbering>`;
const documentXml = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?><w:document xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main"><w:body>${body}<w:sectPr><w:pgSz w:w="12240" w:h="15840"/><w:pgMar w:top="1440" w:right="1440" w:bottom="1440" w:left="1440" w:header="708" w:footer="708"/><w:cols w:space="720"/></w:sectPr></w:body></w:document>`;
const rels = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="word/document.xml"/></Relationships>`;
const documentRels = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/><Relationship Id="rId2" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/numbering" Target="numbering.xml"/></Relationships>`;
const contentTypes = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types"><Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/><Default Extension="xml" ContentType="application/xml"/><Override PartName="/word/document.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml"/><Override PartName="/word/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.styles+xml"/><Override PartName="/word/numbering.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.numbering+xml"/></Types>`;

fs.rmSync(tmp, { recursive: true, force: true });
for (const dir of ['_rels', 'word', 'word/_rels']) fs.mkdirSync(path.join(tmp, dir), { recursive: true });
fs.writeFileSync(path.join(tmp, '[Content_Types].xml'), contentTypes);
fs.writeFileSync(path.join(tmp, '_rels/.rels'), rels);
fs.writeFileSync(path.join(tmp, 'word/document.xml'), documentXml);
fs.writeFileSync(path.join(tmp, 'word/styles.xml'), styles);
fs.writeFileSync(path.join(tmp, 'word/numbering.xml'), numbering);
fs.writeFileSync(path.join(tmp, 'word/_rels/document.xml.rels'), documentRels);
fs.mkdirSync(path.dirname(out), { recursive: true });
fs.rmSync(out, { force: true });
cp.execFileSync('zip', ['-q', '-r', out, '.'], { cwd: tmp });
console.log(out);
