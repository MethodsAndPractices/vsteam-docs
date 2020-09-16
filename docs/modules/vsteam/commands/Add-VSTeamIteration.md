---
id: Add-VSTeamIteration
title: Add-VSTeamIteration
hide_title: true
hide_table_of_contents: false
custom_edit_url: https://github.com/MethodsAndPractices/vsteam/edit/master/.docs/Add-VSTeamIteration.md
description: 
keywords:
  - vsteam
  - cmdlet
  - azure devops
---

# Add-VSTeamIteration

## SYNOPSIS
Adds a new iteration to the project

## SYNTAX

```
Add-VSTeamIteration -Name <String> [-Path <String>] [-StartDate <DateTime>] [-FinishDate <DateTime>]
 [-ProjectName] <String> [<CommonParameters>]
```

## DESCRIPTION
Adds a new iteration to the project

## EXAMPLES

### EXAMPLE 1
```
PS C:\> Add-VSTeamIteration -ProjectName Demo -Name "NewIteration" -Path "MyIteration/Path"
```

This command adds a new iteration named NewIteration to the Demo project under the iteration path MyIteration/Path.

### EXAMPLE 2
```
PS C:\> Add-VSTeamIteration -ProjectName "Demo" -FinishDate (Get-Date "31.01.2020") -StartDate (Get-Date "01.01.2020") -Name "NewIteration"
```

This command adds a new iteration named NewIteration to the Demo project with the start date 01.01.2020 and finish date 31.01.2020.

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
Name of the new iteration.

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
Path of the existing iteration under where the new one will be created.

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

### -StartDate
Start date of the iteration.

```yaml
Type: DateTime
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -FinishDate
Finish date of the iteration.

```yaml
Type: DateTime
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

[Add-VSTeamArea]()

[Add-VSTeamClassificationNode]()


