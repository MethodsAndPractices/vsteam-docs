module.exports = {
  title: 'VSTeam Docs',
  tagline: 'Documentation for the VSTeam PowerShell Module and its tools',
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
     /*   {
          to: 'blog',
          label: 'Blog',
          position: 'left'
        },*/
        {
          href: 'https://github.com/MethodsAndPractices/vsteam-docs',
          label: 'GitHub',
          position: 'right',
        },
        {
          to: 'docs/modules/vsteam/get-vsteam',
          activeBasePath: 'docs/modules/vsteam',
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
            label: 'Style Guide',
            to: 'docs/Module',
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
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/MethodsAndPractices/vsteam-docs',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} VSTeam, Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          homePageId: 'index',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/MethodsAndPractices/vsteam-docs/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: 'https://github.com/MethodsAndPractices/vsteam-docs/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  plugins: [ require.resolve('docusaurus-lunr-search'), {
    languages: ['en']
  }]
};