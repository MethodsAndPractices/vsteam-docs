---
id: introduction
title: Introduction
hide_title: true
---

import ModuleOnly from './../common/only-modules.md'

# Contributing to the VSTeam Projects

We are truly grateful for all the support developing VSTeam. It means a lot that you spend your time to help improve this module. With more people wanting to help we need to agree in some standards so your pull requests can be processed faster with less frustration and waiting time.

:::caution Housekeeping
This module runs on Mac, PC and Linux. Therefore, **casing is very important**.  When you update the psd1 file the casing of the files must match those on disk. If they do not there could be issue loading the module on Mac and Linux.
:::

## Get the code

Now it is time to get your hands on one of the repositories. Fork your repository, clone it to your development machine and create a branch for your work.

Check [GitHub documentation](https://docs.github.com/en/github/getting-started-with-github/fork-a-repo) on how to do it.

## Write Help

Every new function must have help that explains how to use it. The help can be authored using Markdown in the .docs folder. The help is generated using a combination of [platyPS](https://github.com/PowerShell/platyPS) and [markdown-include](https://github.com/sethen/markdown-include). platyPS enables the authoring of External Help with Markdown.  When creating help for a PowerShell module you will find yourself writing a lot of the same Markdown multiple times. markdown-include enables reuse of the Markdown by allowing you to include markdown files into other markdown files using a C style include syntax.

I have found writing the help before I start to write the function saves me a lot of time. This forces me to think of all the use cases of the function and which parameters I plan to support. It also allows me to get the boring part out of the way so I end on a high note writing the code.

You can run gen-help.ps1 from the .docs folder to make sure you can generate the help file.

## Write Unit Test

Using [Pester](https://github.com/pester/Pester) 5.x write unit test for the new function. I am a firm believer if I cannot write a test before I write the code I am not clear on what I expect the code to do. After writing the help first writing the unit tests should be pretty straight forward.

At first it will feel odd to write the help and test first but the more you do it the easier it gets.

Because I will not be over your shoulder you could write the tests and even the help after. **Just know if your pull request does not have tests and help it will be rejected.**

## Code the function / script

When starting to code a new cmdlet for either of the existing modules, then take an existing cmdlet and take it as a blueprint. We want to keep the style similar so we are able to read the code faster.
Even if your code seems much more shorter or technically more elegant it does not mean it is better for the project.

But if you still think you have good ideas for coding style, then please come to us and we can discuss.

We also run the standard rules for the PSScriptAnalyzer and we enforced that no warning should appear. This is as well a minimum we expect to have.
The build will fail if there is any warning.

## Add a type file

<ModuleOnly />

Type files go in the types folder.

See [PowerShell documentation](https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_types.ps1xml) for more explanation.

## Add a format file

<ModuleOnly />

Format files go in the formats folder.

See [PowerShell documentation](https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_format.ps1xml) for more explanation.

## Update CHANGELOG.md

Update the CHANGELOG.md file with your changes in the respective repository.
