---
id: Remove-VSTeamRelease
title: Remove-VSTeamRelease
hide_title: true
hide_table_of_contents: false
custom_edit_url: https://github.com/MethodsAndPractices/vsteam/edit/master/.docs/Remove-VSTeamRelease.md
description: 
keywords:
  - vsteam
  - cmdlet
  - azure devops
---

# Remove-VSTeamRelease

## SYNOPSIS
Removes the releases for a team project.

## SYNTAX

```
Remove-VSTeamRelease -Id <Int32[]> [-Force] [-ProjectName] <String> [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
The Remove-VSTeamRelease function removes the releases for a team project.

The project name is a Dynamic Parameter which may not be displayed in the syntax above but is mandatory.

## EXAMPLES

### EXAMPLE 1
```
PS C:\> Get-VSTeamRelease -ProjectName demo | Remove-VSTeamRelease
```

This command gets a list of all releases in the demo project.

The pipeline operator (|) passes the data to the Remove-VSTeamRelease function, which removes each release definition object.

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
Specifies one or more releases by ID.

To specify multiple IDs, use commas to separate the IDs.

To find the ID of a release definition, type Get-VSTeamRelease.

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
This function has a Dynamic Parameter for ProjectName that specifies the project for which this function gets releases.

You can tab complete from a list of available projects.

You can use Set-VSTeamDefaultProject to set a default project so you do not have to pass the ProjectName with each call.

You can pipe release definition IDs to this function.

## RELATED LINKS

[Set-VSTeamAccount]()

[Set-VSTeamDefaultProject]()

[Add-VSTeamRelease]()

[Get-VSTeamRelease]()


