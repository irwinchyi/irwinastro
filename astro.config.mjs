// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
  integrations: [
      starlight({
          title: 'Irwins Doc',
          social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
          sidebar: [
              {
                  label: 'Guides',
                  items: [
                      // Each item here is one entry in the navigation menu.
                      { label: 'Example Guide', slug: 'guides/example' },
                  ],
              },
              {
                  label: 'Reference',
                  autogenerate: { directory: 'reference' },
              },
          ],
          redirects: {
            '/': 'reference'
          }
      }),
	],

  adapter: netlify(),
});