import {
  defineConfig,
  envField,
  fontProviders,
  svgoOptimizer,
} from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { unified } from "@astrojs/markdown-remark";
import remarkToc from "remark-toc";
import remarkCollapse from "remark-collapse";
import rehypeCallouts from "rehype-callouts";
import {
  transformerNotationDiff,
  transformerNotationHighlight,
  transformerNotationWordHighlight,
} from "@shikijs/transformers";
import { transformerFileName } from "./src/scripts/transformers/fileName";
import config from "./rendidi.config";

export default defineConfig({
  site: config.site.url,
  base: "/rendidi",
  integrations: [
    mdx(),
    sitemap({
      filter: page =>
        config.features?.showArchives !== false || !page.endsWith("/archives/"),
    }),
  ],
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
    routing: {
      prefixDefaultLocale: false,
    },
  },
  markdown: {
    processor: unified({
      remarkPlugins: [
        remarkToc,
        [remarkCollapse, { test: "Table of contents" }],
      ],
      rehypePlugins: [rehypeCallouts],
    }),
    shikiConfig: {
      themes: { light: "min-light", dark: "night-owl" },
      defaultColor: false,
      wrap: false,
      transformers: [
        transformerFileName({ style: "v2", hideDot: false }),
        transformerNotationHighlight(),
        transformerNotationWordHighlight(),
        transformerNotationDiff({ matchAlgorithm: "v3" }),
      ],
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
  fonts: [
    {
      name: "Google Sans Code",
      cssVariable: "--font-google-sans-code",
      provider: fontProviders.local(),
      fallbacks: ["monospace"],
      options: {
        variants: [
          {
            weight: 300,
            style: "normal",
            src: ["./src/assets/fonts/google-sans-code-latin-300-normal.woff2"],
          },
          {
            weight: 300,
            style: "italic",
            src: ["./src/assets/fonts/google-sans-code-latin-300-italic.woff2"],
          },
          {
            weight: 400,
            style: "normal",
            src: ["./src/assets/fonts/google-sans-code-latin-400-normal.woff2"],
          },
          {
            weight: 400,
            style: "italic",
            src: ["./src/assets/fonts/google-sans-code-latin-400-italic.woff2"],
          },
          {
            weight: 500,
            style: "normal",
            src: ["./src/assets/fonts/google-sans-code-latin-500-normal.woff2"],
          },
          {
            weight: 500,
            style: "italic",
            src: ["./src/assets/fonts/google-sans-code-latin-500-italic.woff2"],
          },
          {
            weight: 600,
            style: "normal",
            src: ["./src/assets/fonts/google-sans-code-latin-600-normal.woff2"],
          },
          {
            weight: 600,
            style: "italic",
            src: ["./src/assets/fonts/google-sans-code-latin-600-italic.woff2"],
          },
          {
            weight: 700,
            style: "normal",
            src: ["./src/assets/fonts/google-sans-code-latin-700-normal.woff2"],
          },
          {
            weight: 700,
            style: "italic",
            src: ["./src/assets/fonts/google-sans-code-latin-700-italic.woff2"],
          },
        ],
      },
    },
  ],
  env: {
    schema: {
      PUBLIC_GOOGLE_SITE_VERIFICATION: envField.string({
        access: "public",
        context: "client",
        optional: true,
      }),
    },
  },
  experimental: {
    svgOptimizer: svgoOptimizer(),
  },
});
