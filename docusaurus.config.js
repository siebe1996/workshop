// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  plugins: [
    require.resolve('@cmfcmf/docusaurus-search-local')
  ],
  title: 'Workshop GIT',
  tagline: 'labs & notes',
  url: 'https://gitworkshop.ikdoeict.be',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/ikdoeict.png',
  organizationName: 'ikdoeict', // Usually your GitHub org/user name.
  projectName: 'git-workshop', // Usually your repo name.

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://gitlab.com/ikdoeict/public/workshop/git/workshop',
        },
        
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Opleiding Odisee/ELO-ICT: workshop GIT',
        logo: {
          alt: 'ikdoeict',
          src: 'img/ikdoeict.png',
        },
        items: [

      
         
          {
            href: 'https://gitlab.com/ikdoeict/public/workshop/git',
            label: 'GitLab',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Labs',
                to: '/',
              },
            ],
          },
          
          {
            title: 'More',
            items: [
              {
                label: 'website',
                to: 'https://www.odisee.be',
              },
              {
                label: 'GitLab',
                href: 'https://gitlab.com/ikdoeict',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Odisee-opleiding Elektronica-ict, built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['markdown'],
      },
    }),
};

module.exports=config
