import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";

const fontsDir = fileURLToPath(new URL("../assets/fonts", import.meta.url));

/**
 * Load TTF buffers for Satori OG image generation.
 * Satori does not support woff2, so we read local TTF files directly.
 */
export async function getOgFontBuffers() {
  const [regularData, boldData] = await Promise.all([
    readFile(`${fontsDir}/google-sans-code-latin-400-normal.ttf`),
    readFile(`${fontsDir}/google-sans-code-latin-700-normal.ttf`),
  ]);

  return {
    regularData: regularData.buffer.slice(
      regularData.byteOffset,
      regularData.byteOffset + regularData.byteLength
    ),
    boldData: boldData.buffer.slice(
      boldData.byteOffset,
      boldData.byteOffset + boldData.byteLength
    ),
  };
}
