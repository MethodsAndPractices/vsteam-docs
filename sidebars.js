let vsTeamModuleCommands = require("./docs/modules/vsteam/commands/sidebars.js");

let cmdlets = [...['modules/vsteam/commands/index'], ...vsTeamModuleCommands]


module.exports = {
  overview: {
    Introduction: [
      'overview/getting-started',
      'overview/code-of-conduct'
    ],
    Contributing: [
      'overview/contributing/introduction',
      'overview/contributing/explore-api'
    ]
  },
  vsteam: {
    "Getting Started": [
      'modules/vsteam/index',
      'modules/vsteam/contribute',
      'modules/vsteam/integration-tests',
      'modules/vsteam/build-with-docker'
    ],
    "About": [
      'modules/vsteam/about/about_vsteam.help',
      'modules/vsteam/about/about_vsteam_profiles.help',
      'modules/vsteam/about/about_vsteam_provider.help'
    ],
    "Commands": cmdlets
  },
  vsteam_quickstart: {
    "Getting-Started": [
      'quickstart-scripts/index'
    ]
  }
};