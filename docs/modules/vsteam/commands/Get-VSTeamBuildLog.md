---
id: Get-VSTeamBuildLog
title: Get-VSTeamBuildLog
hide_title: true
hide_table_of_contents: false
custom_edit_url: https://github.com/MethodsAndPractices/vsteam/edit/master/.docs/Get-VSTeamBuildLog.md
description: 
keywords:
  - vsteam
  - cmdlet
  - azure devops
---

# Get-VSTeamBuildLog

## SYNOPSIS
Displays the logs for the build.

## SYNTAX

```
Get-VSTeamBuildLog -Id <Int32[]> [-Index <Int32>] [-ProjectName] <String> [<CommonParameters>]
```

## DESCRIPTION
Displays the logs for the build.

## EXAMPLES

### EXAMPLE 1
```
PS C:\> Get-VSTeamBuild -Top 1 | Get-VSTeamBuildLog
```

This command displays the logs of the first build.

The pipeline operator (|) passes the build id to the Get-VSTeamBuildLog cmdlet, which displays the logs.

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
Specifies one or more builds by ID.

To specify multiple IDs, use commas to separate the IDs.

To find the ID of a build, type Get-VSTeamBuild.

```yaml
Type: Int32[]
Parameter Sets: (All)
Aliases: BuildID

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### -Index
Each task stores its logs in an array.
If you know the index of a specific task you can return just its logs.
If you do not provide a value all the logs are displayed.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:

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

### System.Object
## NOTES

## RELATED LINKS

