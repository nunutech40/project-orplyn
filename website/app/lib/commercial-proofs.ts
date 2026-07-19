export type CommercialProofFact = {
  label: string;
  value: string;
};

export type CommercialProof = {
  id: string;
  serviceSlugs: string[];
  eyebrow: string;
  title: string;
  summary: string;
  image: string;
  imageAlt: string;
  facts: CommercialProofFact[];
  quote?: {
    text: string;
    attribution: string;
  };
  source?: {
    label: string;
    url: string;
  };
};

// Only records that have passed the commercial-proof publication contract belong here.
export const commercialProofs: CommercialProof[] = [];

export function getCommercialProofs(serviceSlug?: string) {
  if (!serviceSlug) return commercialProofs;

  return commercialProofs.filter((proof) =>
    proof.serviceSlugs.includes(serviceSlug),
  );
}
