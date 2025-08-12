// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
  integrations: [
      starlight({
          title: '🦉 Owl Doc',
          social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
          sidebar: [
              {
                  label: 'Comp Comm',
                autogenerate: { directory: 'comp' },
            
              },
              {
                  label: 'Guides',
                  autogenerate: { directory: 'guides' },
              },
              {
                  label: 'Syllabus',
                  autogenerate: { directory: 'syllabus' },
              },
          ],
          }
      )
	],

  adapter: netlify(),
});