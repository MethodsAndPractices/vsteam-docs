module.exports = {
  title: 'VSTeam Docs',
  tagline: 'A collection of resources and modules to make it easier to automate Azure DevOps',
  url: 'https://methodsandpractices.github.io',
  baseUrl: '/vsteam-docs/',
  favicon: 'img/favicon.ico',
  onBrokenLinks: 'ignore',
  organizationName: 'MethodsAndPractices', // Usually your GitHub org/user name.
  projectName: 'vsteam-docs', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'VSTeam Docs',
      logo: {
        alt: 'VSTeam Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'docs/overview/getting-started',
          activeBasePath: 'docs/overview',
          label: 'Overview',
          position: 'left',
        },
        {
          href: 'https://github.com/MethodsAndPractices/vsteam-docs',
          label: 'GitHub',
          position: 'right',
        },
        {
          to: 'docs/modules/vsteam',
          activeBasePath: 'docs/modules/vsteam',
          label: 'VSTeam Module',
          position: 'left'
        },
        {
          to: 'docs/quickstart-scripts',
          activeBasePath: 'docs/quickstart-scripts',
          label: 'Quickstart Scripts',
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
        },],
      },
      {
        title: 'GitHub',
        items: [{
          label: 'VSTeam Docs',
          href: 'https://github.com/MethodsAndPractices/vsteam-docs',
        },
        {
          label: 'VSTeam Module',
          href: 'https://github.com/MethodsAndPractices/vsteam',
        },
        {
          label: 'VSTeam Quickstart Scripts',
          href: 'https://github.com/MethodsAndPractices/vsteam-quickstart-scripts',
        }],
      },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} VSTeam, Donovan Brown.`,
    },
  },
  presets: [
    [
      'classic',
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/MethodsAndPractices/vsteam-docs/edit/trunk/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  plugins: [
    [
      require.resolve('docusaurus-lunr-search'),
      { languages: ['en'] }
    ]
  ]
};