import { mkdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const scriptDirectory = path.dirname(fileURLToPath(import.meta.url));
const websiteRoot = path.resolve(scriptDirectory, "..");
const workspaceRoot = path.resolve(websiteRoot, "..");
const sourceDirectory = path.join(
  workspaceRoot,
  "assets/raw/google-drive/logo",
);
const outputDirectory = path.join(websiteRoot, "public/brand");

const transparent = { r: 0, g: 0, b: 0, alpha: 0 };

const variants = [
  {
    color: "white",
    source: path.join(sourceDirectory, "LOGO ORPLYN.png"),
  },
  {
    color: "black",
    source: path.join(sourceDirectory, "LOGO ORPLYN HITAM.png"),
  },
];

async function extractTrimmed(source, region) {
  const extracted = await sharp(source).extract(region).png().toBuffer();

  return sharp(extracted).trim({ threshold: 10 }).png().toBuffer();
}

async function resizeWithInfo(input, options) {
  return sharp(input)
    .resize(options)
    .png()
    .toBuffer({ resolveWithObject: true });
}

async function buildVariant({ color, source }) {
  const metadata = await sharp(source).metadata();
  const width = metadata.width;
  const height = metadata.height;

  if (!width || !height) {
    throw new Error(`Unable to read dimensions for ${source}`);
  }

  const monogram = await extractTrimmed(source, {
    left: 0,
    top: 0,
    width,
    height: Math.floor(height * 0.49),
  });

  const wordmark = await extractTrimmed(source, {
    left: 0,
    top: Math.floor(height * 0.5),
    width,
    height: Math.floor(height * 0.45),
  });

  const squareMark = await resizeWithInfo(monogram, {
    width: 400,
    height: 400,
    fit: "inside",
  });

  await sharp({
    create: {
      width: 512,
      height: 512,
      channels: 4,
      background: transparent,
    },
  })
    .composite([
      {
        input: squareMark.data,
        left: Math.round((512 - squareMark.info.width) / 2),
        top: Math.round((512 - squareMark.info.height) / 2),
      },
    ])
    .png({ compressionLevel: 9, adaptiveFiltering: true })
    .toFile(path.join(outputDirectory, `orplyn-monogram-${color}.png`));

  const horizontalMark = await resizeWithInfo(monogram, {
    height: 320,
  });
  const horizontalWordmark = await resizeWithInfo(wordmark, {
    width: 1030,
  });
  const paddingX = 64;
  const paddingY = 54;
  const gap = 72;
  const canvasWidth =
    paddingX * 2 + horizontalMark.info.width + gap + horizontalWordmark.info.width;
  const canvasHeight =
    paddingY * 2 +
    Math.max(horizontalMark.info.height, horizontalWordmark.info.height);

  await sharp({
    create: {
      width: canvasWidth,
      height: canvasHeight,
      channels: 4,
      background: transparent,
    },
  })
    .composite([
      {
        input: horizontalMark.data,
        left: paddingX,
        top: Math.round((canvasHeight - horizontalMark.info.height) / 2),
      },
      {
        input: horizontalWordmark.data,
        left: paddingX + horizontalMark.info.width + gap,
        top: Math.round((canvasHeight - horizontalWordmark.info.height) / 2),
      },
    ])
    .png({ compressionLevel: 9, adaptiveFiltering: true })
    .toFile(path.join(outputDirectory, `orplyn-horizontal-${color}.png`));
}

await mkdir(outputDirectory, { recursive: true });
await Promise.all(variants.map(buildVariant));

console.log(`Logo variants written to ${outputDirectory}`);
