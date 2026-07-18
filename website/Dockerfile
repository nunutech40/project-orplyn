FROM node:22-bookworm-slim AS builder

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .

ARG NEXT_PUBLIC_SITE_URL=http://localhost:3010
ARG NEXT_PUBLIC_ALLOW_INDEXING=false
ARG NEXT_PUBLIC_WHATSAPP_NUMBER=6280000000000
ARG NEXT_PUBLIC_GOOGLE_TAG_ID=
ARG NEXT_PUBLIC_GOOGLE_ADS_ID=
ARG NEXT_PUBLIC_GOOGLE_ADS_LEAD_STARTED_LABEL=
ARG GOOGLE_SITE_VERIFICATION=

ENV NEXT_PUBLIC_SITE_URL=$NEXT_PUBLIC_SITE_URL \
    NEXT_PUBLIC_ALLOW_INDEXING=$NEXT_PUBLIC_ALLOW_INDEXING \
    NEXT_PUBLIC_WHATSAPP_NUMBER=$NEXT_PUBLIC_WHATSAPP_NUMBER \
    NEXT_PUBLIC_GOOGLE_TAG_ID=$NEXT_PUBLIC_GOOGLE_TAG_ID \
    NEXT_PUBLIC_GOOGLE_ADS_ID=$NEXT_PUBLIC_GOOGLE_ADS_ID \
    NEXT_PUBLIC_GOOGLE_ADS_LEAD_STARTED_LABEL=$NEXT_PUBLIC_GOOGLE_ADS_LEAD_STARTED_LABEL \
    GOOGLE_SITE_VERIFICATION=$GOOGLE_SITE_VERIFICATION

RUN npm run build

FROM node:22-bookworm-slim AS runtime

WORKDIR /app

ARG ORPLYN_RELEASE=dev

LABEL org.opencontainers.image.title="Orplyn web funnel" \
    org.opencontainers.image.description="Portable production image for the Orplyn lead funnel" \
    org.opencontainers.image.source="https://github.com/nunutech40/project-orplyn" \
    org.opencontainers.image.revision=$ORPLYN_RELEASE

ENV NODE_ENV=production \
    HOSTNAME=0.0.0.0 \
    PORT=3000 \
    ORPLYN_RELEASE=$ORPLYN_RELEASE

COPY --from=builder /app/dist/standalone ./

EXPOSE 3000

USER node

CMD ["node", "server.js"]
