// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Nassim Taoussi',
  tagline: 'Développeur PHP/Symfony',
  favicon: 'img/avatar.svg',

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'NassimTaoussi', // Usually your GitHub org/user name.
  projectName: 'MyWebsite', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'fr',
    locales: ['fr', 'en'],
    path: 'i18n',
    localeConfigs: {
      en: {
        label: 'English',
        direction: 'ltr',
        htmlLang: 'en-US',
        calendar: 'gregory',
        path: 'en',
      },
      fr: {
        label: 'French',
        direction: 'ltr',
        htmlLang: 'en-fr',
        calendar: 'gregory',
        path: 'fr',
      }
    },
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: '',
        logo: {
          alt: 'Nassim Avatar',
          src: 'img/avatar.svg',
        },
        items: [
          {to: '/projects', label: 'Projets', position: 'left'},
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            type: 'localeDropdown',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Sections',
            items: [
              {
                label: 'Accueil',
                to: '/',
              },
              {
                label: 'Mes articles',
                to: '/blog',
              },
              {
                label: 'Mes projets',
                to: '/projects',
              },
            ],
          },
          {
            title: 'Contact',
            items: [
              {
                label: '06 58 31 53 26',
                href: '#',
              },
              {
                label: 'nassim-taoussi@hotmail.com',
                href: '#',
              },
            ],
          },
          {
            title: 'Où me retrouver ?',
            items: [
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/in/nassim-taoussi-435279171/',
              },
              {
                label: 'Medium',
                href: 'https://medium.com/@nassim-taoussi',
              },
              {
                label: 'Gitlab',
                href: 'https://gitlab.com/NassimTaoussi',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/NassimTaoussi',
              },
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/users/21119488/nassim-taoussi',
              },
              {
                label:'Dev Community',
                href:'https://dev.to/nassimtaoussi'
              }
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()}.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
