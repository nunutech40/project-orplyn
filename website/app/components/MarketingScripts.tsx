const googleTagId = process.env.NEXT_PUBLIC_GOOGLE_TAG_ID;

export function MarketingScripts() {
  if (!googleTagId) {
    return null;
  }

  const bootstrap = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    window.gtag = gtag;
    gtag('js', new Date());
    gtag('config', '${googleTagId}', { send_page_view: true });
  `;

  return (
    <>
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${googleTagId}`}
      />
      <script dangerouslySetInnerHTML={{ __html: bootstrap }} />
    </>
  );
}
