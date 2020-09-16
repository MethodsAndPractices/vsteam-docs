---
id: Get-VSTeamTaskGroup
title: Get-VSTeamTaskGroup
hide_title: true
hide_table_of_contents: false
custom_edit_url: https://github.com/MethodsAndPractices/vsteam/edit/master/.docs/Get-VSTeamTaskGroup.md
description: 
keywords:
  - vsteam
  - cmdlet
  - azure devops
---

# Get-VSTeamTaskGroup

## SYNOPSIS
Gets a task group

## SYNTAX

### List (Default)
```
Get-VSTeamTaskGroup [-ProjectName] <String> [<CommonParameters>]
```

### ByID
```
Get-VSTeamTaskGroup -Id <String> [-ProjectName] <String> [<CommonParameters>]
```

### ByName
```
Get-VSTeamTaskGroup -Name <String> [-ProjectName] <String> [<CommonParameters>]
```

## DESCRIPTION
Gets a task group

## EXAMPLES

### EXAMPLE 1
```
$methodParameters = @{
   ProjectName = "some_project_name"
}

Get-VSTeamTaskGroup @methodParameters
```

Get all the task groups for the some_project_name project. 
Here we are splatting the parameter, but it may also be directly specified. 
See a non-splatting example below.

### EXAMPLE 2
```
Get-VSTeamTaskGroup -ProjectName "some_project_name" -Id "Task_group_id"
```

Get a task group when the ID is already known.

### EXAMPLE 3
```
$methodParameters = @{
   ProjectName = "some_project_name"
   Name        = "Task_group_name"
}

Get-VSTeamTaskGroup @methodParameters
```

Get a task group by name, when the ID is not known. 
Here we are splatting the parameters, but they may also be directly specified. 
Getting by ID is preferred, as it's more efficient; but getting by name is, of course, handy.

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
ID of the existing task group

```yaml
Type: String
Parameter Sets: ByID
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -Name
Name of the existing task group

```yaml
Type: String
Parameter Sets: ByName
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

[Add-VSTeamTaskGroup]()

[Update-VSTeamTaskGroup]()

[Remove-VSTeamTaskGroup]()


