# VSTeam Help

This site is the central page for all repositories and modules that come with VSTeam. VSTeam is a bundle of PowerShell modules to access and get you started with

VSTeam is a PowerShell module with commands for accessing your [Azure DevOps Server (previously named Visual Studio Team Foundation Server) 2017/2018](https://cda.ms/Bf) and [Azure DevOps (previously named Visual Studio Team Services)](https://cda.ms/Bf).

The VSTeam module is also a provider allowing users to navigate their [Azure DevOps Server](https://cda.ms/Bf) and [Azure DevOps](https://cda.ms/Bf) as a file system.

To get started you can visit this blog [PowerShell I would like you to meet TFS and VSTS](http://www.donovanbrown.com/post/PowerShell-I-would-like-you-to-meet-TFS-and-VSTS)

Documentation of the cmdlets can be found in the [docs README](https://github.com/DarqueWarrior/vsteam/blob/master/docs/readme.md) or using `Get-Help VSTeam` once the module is installed.

## Requirements

- Windows PowerShell 5.0 or newer.
- PowerShell Core.

## Installation

Install this module from the [PowerShell Gallery](https://www.powershellgallery.com/packages/VSTeam)

```powershell
Install-Module -Name VSTeam -Scope CurrentUser
```

## Module Dependencies

- [SHiPS module](https://www.powershellgallery.com/packages/SHiPS/)
- [Trackyon.Utils module](https://www.powershellgallery.com/packages/Trackyon.Utils)

## About files

[VSTeam](Module/../en-US/about_vsteam.help.txt)

Learn about the goals of VSTeam.

[Profiles](Module/../en-US/about_vsteam_profiles.help.txt)

Profiles allow you to store your account information for easy switching of accounts.

[Provider](Module/../en-US/about_vsteam_provider.help.txt)

The provider allows you to navigate your TFS or AzD as a file system.

## VSTeam Functions
