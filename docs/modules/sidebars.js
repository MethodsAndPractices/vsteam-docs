let vsTeamModuleCommands = require("./vsteam/sidebars.js");

vsTeamModuleCommands.unshift('vsteam/index')

module.exports = {
    docs: {
        "Commands": vsTeamModuleCommands
    },
};