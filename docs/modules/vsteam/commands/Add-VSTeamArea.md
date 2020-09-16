---
id: Add-VSTeamArea
title: Add-VSTeamArea
hide_title: true
hide_table_of_contents: false
custom_edit_url: https://github.com/MethodsAndPractices/vsteam/edit/master/.docs/Add-VSTeamArea.md
description: 
keywords:
  - vsteam
  - cmdlet
  - azure devops
---

# Add-VSTeamArea

## SYNOPSIS
Adds a new area to the project

## SYNTAX

```
Add-VSTeamArea -Name <String> [-Path <String>] [-ProjectName] <String> [<CommonParameters>]
```

## DESCRIPTION
Adds a new area to the project

## EXAMPLES

### EXAMPLE 1
```
PS C:\> Add-VSTeamArea -ProjectName Demo -Name "NewArea" -Path "MyArea/Path"
```

This command adds a new area named NewArea to the Demo project under the area path MyArea/Path.

### EXAMPLE 2
```
PS C:\> Add-VSTeamArea -ProjectName Demo -Name "NewArea"
```

This command adds a new area named NewArea to the Demo project.

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

### -Name
Name of the new area.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Path
Path of the existing area under where the new one will be created.

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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

### System.Object
## NOTES
This function is a wrapper of the base function Add-VSTeamClassificationNode.

## RELATED LINKS

[Add-VSTeamClassificationNode]()

[Add-VSTeamIteration]()


