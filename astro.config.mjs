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
                  label: 'Comp Comm',
                autogenerate: { directory: 'comp' },
            
              },
              {
                  label: 'Reference',
                  autogenerate: { directory: 'reference' },
              },
          ],
          }
      )
	],

  adapter: netlify(),
  adapter: cloudflare(),
});