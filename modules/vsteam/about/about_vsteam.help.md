---
title: About VSTeam
sidebar_label: about_VSTeam
---

## TOPIC
VSTeam

## SHORT DESCRIPTION
Provides access to your Azure DevOps (AzD) and Team 
Foundation Server (TFS) from macOS, Linux and Windows.

## LONG DESCRIPTION
Add an account using Set-VSTeamAccount and then you can call the rest of the 
functions.

Use `Set-VSTeamDefaultProject` so you do not have to provide the `-ProjectName` 
parameter with the rest of the calls in the module. However, the 
`-ProjectName` parameter is dynamic and you can use tab completion to cycle
through all the projects.

All the calls have a default 60 second timeout. Use Set-VSTeamDefaultAPITimeout
to adjust the timeout.

Using the `Set-VSTeamAPIVersion` function you can control which version of the APIs are used.

```powershell
PS C:\> Get-VSTeamAPIVersion
```

```
Name                           Value
----                           -----
Release                        3.0-preview
DistributedTask                3.0-preview
Git                            3.0
ServiceEndpoints               3.0-preview
Packaging                      3.0-preview
ExtensionsManagement           3.0-preview
Policy                         3.0
Build                          3.0
Core                           3.0
TaskGroups                     3.0-preview
Processes
Graph
Tfvc                           3.0
VariableGroups
Version                        TFS2017
MemberEntitlementManagement
```

To use different API versions you can update the version in the version table.

```powershell
PS C:\> Set-VSTeamAPIVersion -Service Build -Version '4.0'
```

You can also use Set-VSTeamAPIVersion to set all the API versions for either 
TFS2017, TFS2017U1, TFS2017U2, TFS2017U3, TFS2018, TFS2018U1, TFS2018U2, TFS2018U3, AzD2019, AzD2019U1 or AzD. TFS2017 is the default. 

```powershell
PS C:\> Set-VSTeamAPIVersion TFS2018U3
```
    

## EXAMPLES

```powershell
Get-VSTeamProject
```

This will return all the WellFormed team projects.

```powershell
Get-VSTeamProject | Remove-VSTeamProject -Force
```

This will delete all the projects in your AzD for TFS. Use with caution.

## KEYWORDS
Team Services, VSTS, TFS, VSO, TFS, DevOps

## SEE ALSO
Set-VSTeamAccount
Get-VSTeamProject
