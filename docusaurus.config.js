// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Wireshape',
  tagline: 'Product Data Blockchain',
  url: 'https://wireshape.org',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'wireshape', // Usually your GitHub org/user name.
  projectName: 'wireshape-org', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/wireshape/wireshape-org/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/wireshape/wireshape-org/',
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
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
      navbar: {
        title: 'My Site',
        logo: {
          alt: 'My Site Logo',
          src: 'img/ws-logo.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'quick-start/introduction',
            position: 'right',
            label: 'Documentation',
          },
          // {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://floripa-explorer.wireshape.org',
            label: 'Block Explorer',
            position: 'right',
          },
        ],
      },
      metadata: [{property: 'og:description', content: 'The open blockchain for global product data'}],
      image: 'img/splash.jpg',
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Tools',
            items: [
              {
                label: 'Wireshape dApp',
                href: 'https://beta.wireshape.com',
              },
              {
                label: 'Wireshape Studio',
                href: 'https://studio.wireshape.com',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Galxe',
                href: 'https://galxe.com/wireshape',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/wireshape',
              },
              {
                label: 'Discord',
                href: 'https://discord.com/invite/pP6PATrAGZ',
              },
              {
                label: 'Telegram',
                href: 'https://t.me/wireshape',
              },
            ],
          },
          {
            title: 'More',
            items: [
              // {
              //   label: 'Blog',
              //   to: '/blog',
              // },
              {
                label: 'Get Involved',
                href: 'https://docs.google.com/forms/d/e/1FAIpQLSfjMtXpoBhIzrHqlCZQs7CapgMXDxYJI22iXvAfNX7h7rNaFw/viewform',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/wireshape',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
