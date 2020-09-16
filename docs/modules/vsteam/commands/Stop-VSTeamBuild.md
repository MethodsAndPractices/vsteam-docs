---
id: Stop-VSTeamBuild
title: Stop-VSTeamBuild
hide_title: true
hide_table_of_contents: false
custom_edit_url: https://github.com/MethodsAndPractices/vsteam/edit/master/.docs/Stop-VSTeamBuild.md
description: 
keywords:
  - vsteam
  - cmdlet
  - azure devops
---

# Stop-VSTeamBuild

## SYNOPSIS
Allows you to cancel a running build.

## SYNTAX

```
Stop-VSTeamBuild -Id <Int32> [-ProjectName] <String> [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
Stop-VSTeamBuild will cancel a build using the build id.

## EXAMPLES

### EXAMPLE 1
```
PS C:\> Set-VSTeamDefaultProject Demo
PS C:\> Stop-VSTeamBuild -id 1
```

This example cancels the build with build id 1.

### EXAMPLE 3
```
PS C:\> Set-VSTeamDefaultProject Demo
PS C:\> $buildsToCancel = Get-VSTeamBuild -StatusFilter "inProgress" | where-object definitionName -eq Build-Defenition-Name
PS C:\> ForEach($build in $buildsToCancel) { Stop-VSTeamBuild -id $build.id }
```

This example will find all builds with a status of "inProgress" and a defenitionName of "Build-Defenition-Name" and then cancel each of these builds.

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
The id of the build.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases: BuildID

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### -Confirm
Prompts you for confirmation before running the function.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
Shows what would happen if the function runs.
The function is not run.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### System.String
ProjectName

### System.Int32
BuildId

## OUTPUTS

## NOTES

## RELATED LINKS

