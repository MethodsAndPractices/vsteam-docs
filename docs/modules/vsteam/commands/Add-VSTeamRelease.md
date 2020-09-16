---
id: Add-VSTeamRelease
title: Add-VSTeamRelease
hide_title: true
hide_table_of_contents: false
custom_edit_url: https://github.com/MethodsAndPractices/vsteam/edit/master/.docs/Add-VSTeamRelease.md
description: 
keywords:
  - vsteam
  - cmdlet
  - azure devops
---

# Add-VSTeamRelease

## SYNOPSIS
Queues a new release

## SYNTAX

### ById (Default)
```
Add-VSTeamRelease -DefinitionId <Int32> [-Description <String>] -ArtifactAlias <String> [-Name <String>]
 -BuildId <String> [-SourceBranch <String>] [-Force] [-ProjectName] <String> [-DefinitionName <String>]
 [-WhatIf] [-Confirm] [<CommonParameters>]
```

### ByName
```
Add-VSTeamRelease [-Description <String>] [-Name <String>] -BuildNumber <String> [-SourceBranch <String>]
 [-Force] [-ProjectName] <String> [-DefinitionName <String>] [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
Add-VSTeamRelease will queue a new release.

The environments will deploy according to how the release definition is configured in the Triggers tab.

You must call Set-VSTeamAccount before calling this function.

## EXAMPLES

### EXAMPLE 1
```
PS C:\> Get-VSTeamBuild | ft id,name

id name
-- ---
id: Add-VSTeamRelease
title: Add-VSTeamRelease
hide_title: true
hide_table_of_contents: false
custom_edit_url: https://github.com/MethodsAndPractices/vsteam/edit/master/.docs/Add-VSTeamRelease.md
description: 
keywords:
  - vsteam
  - cmdlet
  - azure devops
----    -----
 1 Demo-CD Demo-CI

PS C:\> Add-VSTeamRelease -DefinitionId 1 -Description Test -ArtifactAlias Demo-CI -BuildId 44
```

This example shows how to find the Build ID, Artifact Alias, and Release definition ID required to start a release.
If you call Set-VSTeamDefaultProject you can use Example 2 which is much easier.

### EXAMPLE 2
```
PS C:\> Add-VSTeamRelease -DefinitionName Demo-CD -Description Test -BuildNumber Demo-CI-44
```

This command starts a new release using the Demo-CD release definition and the build with build number Demo-CI-44.

You must set a default project to tab complete DefinitionName and BuildNumber.

## PARAMETERS

### -ProjectName
Specifies the team project for which this function operates.

You can tab complete from a list of available projects.

You can use Set-VSTeamDefaultProject to set a default project so you do not have to pass the ProjectName with each call.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: True
Position: 0
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -DefinitionId
The id of the release definition to use.

```yaml
Type: Int32
Parameter Sets: ById
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Description
The description to use on the release.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ArtifactAlias
The alias of the artifact to use with this release.

```yaml
Type: String
Parameter Sets: ById
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Name
The name of this release.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -BuildId
The id of the build to use with this release.

```yaml
Type: String
Parameter Sets: ById
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DefinitionName
The name of the release definition to use.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SourceBranch
The branch of the artifact

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -BuildNumber
The number of the build to use.

```yaml
Type: String
Parameter Sets: ByName
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force
Forces the function without confirmation

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm
Prompts you for confirmation before running the cmdlet.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
Shows what would happen if the cmdlet runs.
The cmdlet is not run.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES
This function has a Dynamic Parameter for ProjectName that specifies the project for which this function gets releases.

You can tab complete from a list of available projects.

You can use Set-VSTeamDefaultProject to set a default project so you do not have to pass the ProjectName with each call.

## RELATED LINKS

