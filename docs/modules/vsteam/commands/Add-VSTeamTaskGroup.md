---
id: Add-VSTeamTaskGroup
title: Add-VSTeamTaskGroup
hide_title: true
hide_table_of_contents: false
custom_edit_url: https://github.com/MethodsAndPractices/vsteam/edit/master/.docs/Add-VSTeamTaskGroup.md
description: 
keywords:
  - vsteam
  - cmdlet
  - azure devops
---

# Add-VSTeamTaskGroup

## SYNOPSIS
Adds a task group.

## SYNTAX

### ByFile
```
Add-VSTeamTaskGroup -InFile <String> [-ProjectName] <String> [<CommonParameters>]
```

### ByBody
```
Add-VSTeamTaskGroup -Body <String> [-ProjectName] <String> [<CommonParameters>]
```

## DESCRIPTION
Adds a task group.

## EXAMPLES

### EXAMPLE 1
```
$taskGroup = Get-VSTeamTaskGroup -Name "taskGroupName" -ProjectName "sourceProjectName"

# Set the ID and revision to null, so AzD is happy.
$taskGroup.id = $null
$taskGroup.revision = $null

$taskGroupJson = ConvertTo-Json -InputObject $taskGroup -Depth 10

Add-VSTeamTaskGroup -Body $taskGroupJson -ProjectName "destinationProjectName"
```

This example is useful for when one wants to copy an existing task group in one project into another project.

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

### -InFile
The path to the json file that represents the task group

```yaml
Type: String
Parameter Sets: ByFile
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -Body
The json that represents the task group as a string

```yaml
Type: String
Parameter Sets: ByBody
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### System.String
## OUTPUTS

### System.Object
## NOTES

## RELATED LINKS

[Update-VSTeamTaskGroup]()

[Get-VSTeamTaskGroup]()

[Remove-VSTeamTaskGroup]()


