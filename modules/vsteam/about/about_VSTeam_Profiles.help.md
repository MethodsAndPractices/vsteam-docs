---
title: About VSTeam Profiles
sidebar_label: about_VSTeam_Profiles
---

## TOPIC
VSTeam Profiles

## SHORT DESCRIPTION
Profiles allow you to store account information so you do not have to 
remember your Personal Access Token (PAT). Simply create a profile for
the desired account and use the profile name to switch to that account
using the `Set-VSTeamAccount` function. You can press tab after the 
`-Profile` parameter to cycle through your profile names.

## LONG DESCRIPTION
Using profiles makes it easier to switch from one account to another. 
Profiles store the URL to the account and authentication information.

To use a profile with the `Set-VSTeamAccount` function use the `-Profile`
parameter.

Calling Add-VSTeamProfile with the same account as an existing entry will
overwrite that entry.

## EXAMPLES

```powershell
Add-VSTeamProfile -Account demonstrations -Name demonstrations -PersonalAccessToken 7a8ilh6db4aforlrnrqmdrmgap3mziwnga -Version VSTS
```

This will add a profile named demonstrations for use with Set-VSTeamAccount using the AzD API.

```powershell
Get-VSTeamProfiles | Remove-VSTeamProfiles -Force
```

This will delete all the profiles.

```powershell
Set-VSTeamAccount -Profile demonstrations
```

This will add the account https://dev.azure.com/demonstrations/

## KEYWORDS
Team Services, VSTS, TFS, VSO, TFS, DevOps, Azure DevOps

## SEE ALSO
Set-VSTeamAccount
Set-VSTeamAPIVersion
