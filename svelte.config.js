import adapter from "@sveltejs/adapter-auto";
import { vitePreprocess } from "@sveltejs/kit/vite";
import { s } from "hastscript";
import { mdsvex } from "mdsvex";
import mdsvexamples from "mdsvexamples";
import link_headings from "rehype-autolink-headings";
import heading_slugs from "rehype-slug";

const rehypePlugins = [
  heading_slugs,
  [
    link_headings,
    {
      behavior: `append`,
      test: [`h2`, `h3`, `h4`, `h5`, `h6`], // don't auto-link <h1>
      content: s(
        `svg`,
        { width: 16, height: 16, viewBox: `0 0 16 16` },
        // symbol #octicon-link defined in app.html
        s(`use`, { "xlink:href": `#octicon-link` })
      ),
    },
  ],
];
const { default: pkg } = await import(`./package.json`, {
  assert: { type: `json` },
});
const defaults = {
  Wrapper: `svelte-zoo/CodeExample.svelte`,
  pkg: pkg.name,
  repo: pkg.repository,
};
const remarkPlugins = [[mdsvexamples, { defaults }]];

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: [`.svelte`, `.svx`, `.md`],
  // Consult https://kit.svelte.dev/docs/integrations#preprocessors
  // for more information about preprocessors
  preprocess: [
    vitePreprocess(),
    mdsvex({ rehypePlugins, remarkPlugins, extensions: [`.svx`, `.md`] }),
  ],

  kit: {
    adapter: adapter(),
    alias: {
      $site: `./src/site`,
    },
  },
};

export default config;
