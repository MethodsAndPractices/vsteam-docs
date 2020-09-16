let vsTeamModuleCommands = require("./vsteam/commands/sidebars.js");

let cmdlets = [...['commands/index'], ...vsTeamModuleCommands]

module.exports = {
    modules: {
        "Getting Started": [
            'index',
            'contribute',
            'integration-tests',
            'build-with-docker'
        ],
        "About": [
            'about/about_vsteam.help',
            'about/about_vsteam_profiles.help',
            'about/about_vsteam_provider.help'
        ],
        "Commands": cmdlets
    }
};