---
id: Remove-VSTeamBuildDefinition
title: Remove-VSTeamBuildDefinition
hide_title: true
hide_table_of_contents: false
custom_edit_url: https://github.com/MethodsAndPractices/vsteam/edit/master/.docs/Remove-VSTeamBuildDefinition.md
description: 
keywords:
  - vsteam
  - cmdlet
  - azure devops
---

# Remove-VSTeamBuildDefinition

## SYNOPSIS
Removes the build definitions for a team project.

## SYNTAX

```
Remove-VSTeamBuildDefinition -Id <Int32[]> [-Force] [-ProjectName] <String> [-WhatIf] [-Confirm]
 [<CommonParameters>]
```

## DESCRIPTION
The Remove-VSTeamBuildDefinition function removes the build definitions for a team project.

The project name is a Dynamic Parameter which may not be displayed in the syntax above but is mandatory.

## EXAMPLES

### EXAMPLE 1
```
PS C:\> Get-VSTeamBuildDefinition -ProjectName Demo | Remove-VSTeamBuildDefinition
```

This command gets a list of all build definitions in the demo project.

The pipeline operator (|) passes the data to the Remove-VSTeamBuildDefinition function, which removes each build definition object.

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

### -Id
Specifies one or more build definitions by ID.

To specify multiple IDs, use commas to separate the IDs.

To find the ID of a build definition, type Get-VSTeamBuildDefinition.

```yaml
Type: Int32[]
Parameter Sets: (All)
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName)
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

### None
## NOTES
This function has a Dynamic Parameter for ProjectName that specifies the project for which this function gets build definitions.

You can tab complete from a list of available projects.

You can use Set-VSTeamDefaultProject to set a default project so you do not have to pass the ProjectName with each call.

You can pipe build definition IDs to this function.

## RELATED LINKS

[Set-VSTeamAccount]()

[Set-VSTeamDefaultProject]()

[Add-VSTeamBuildDefinition]()

[Get-VSTeamBuildDefinition]()


