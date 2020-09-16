# Website

This website is built using [Docusaurus 2](https://v2.docusaurus.io/), a modern static website generator.

### Module documentation

Part of the documentation is not saved in the repository.
Especially the module documentation is generated on the fly by downloading the modules and generating the markdown files with [platyPS](https://github.com/PowerShell/platyPS).
Building of these files is integrated with the `yarn start` and `yarn build` commands.

### Installation

Install all dependencies

```
$ yarn
```

### Local Development

```
$ yarn start:generate
```

This command starts a local development server and open up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

```
$ GIT_USER=<Your GitHub username> USE_SSH=true yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

### Limitations

When using `yarn start` the module markdown is only generated once and not updating automatically. It only watches changed files which are part of the documentation.
