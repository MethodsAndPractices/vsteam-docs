module.exports = {
  title: 'VSTeam',
  tagline: 'A PowerShell Module to make it easier to automate Azure DevOps',
  url: 'https://methodsandpractices.github.io',
  baseUrl: '/vsteam-docs/',
  favicon: 'img/favicon.ico',
  organizationName: 'MethodsAndPractices', // Usually your GitHub org/user name.
  projectName: 'vsteam-docs', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'VSTeam Docs',
      logo: {
        alt: 'VSTeam Site Logo',
        src: 'img/logo.svg',
      },
      links: [{
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        /*
        {
          to: 'blog',
          label: 'Blog',
          position: 'left'
        },
        */
        {
          href: 'https://github.com/MethodsAndPractices/vsteam-docs',
          label: 'GitHub',
          position: 'right',
        },
        {
          to: 'modules/vsteam/index',
          activeBasePath: 'modules/vsteam',
          label: 'VSTeam Module',
          position: 'left'
        }
      ]
    },
    prism: {
      additionalLanguages: [
        'powershell'
      ]
    },
    footer: {
      style: 'dark',
      links: [{
          title: 'Docs',
          items: [{
            label: 'VSTeam Module',
            to: 'modules/vsteam/index',
          }],
        },
        {
          title: 'Community',
          items: [{
            label: 'Stack Overflow',
            href: 'https://stackoverflow.com/questions/tagged/VSTeam',
          }, ],
        },
        {
          title: 'More',
          items: [{
            label: 'GitHub',
            href: 'https://github.com/MethodsAndPractices/vsteam-docs',
          }],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} VSTeam, Donovan Brown.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          showReadingTime: true,
          homePageId: 'getting-started',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/MethodsAndPractices/vsteam-docs/edit/master/',
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/MethodsAndPractices/vsteam-docs/edit/master/website/blog/',
        },
        modules: {
          showReadingTime: true,
          editURl: 'https://github.com/MethodsAndPractices/vsteam-docs/edit/master/website/blog/'
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  plugins: [
    require.resolve('docusaurus-lunr-search'), {
      languages: ['en']
    },
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'vsteam-module',
        path: 'modules/vsteam',
        editUrl: 'https://github.com/MethodsAndPractices/vsteam/.docs',
        routeBasePath: 'modules/vsteam',
        sidebarPath: require.resolve('./modules/sidebars-vsteam.js'),
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
      }
    ],
  ]
};