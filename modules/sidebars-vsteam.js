let vsTeamModuleCommands = require("./vsteam/sidebars.js");

module.exports = {
    modules: {
        "Getting Started": [
            'index'
        ],
        "About": [
            'about/about_vsteam.help',
            'about/about_vsteam_profiles.help',
            'about/about_vsteam_provider.help'
        ],
        "Commands": vsTeamModuleCommands
    }
};