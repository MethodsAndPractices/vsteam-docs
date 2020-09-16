---
id: Get-VSTeamVariableGroup
title: Get-VSTeamVariableGroup
hide_title: true
hide_table_of_contents: false
custom_edit_url: https://github.com/MethodsAndPractices/vsteam/edit/master/.docs/Get-VSTeamVariableGroup.md
description: 
keywords:
  - vsteam
  - cmdlet
  - azure devops
---

# Get-VSTeamVariableGroup

## SYNOPSIS
Gets a variable group

## SYNTAX

### List (Default)
```
Get-VSTeamVariableGroup [[-ProjectName] <String>] [<CommonParameters>]
```

### ByID
```
Get-VSTeamVariableGroup -Id <String> [[-ProjectName] <String>] [<CommonParameters>]
```

### ByName
```
Get-VSTeamVariableGroup -Name <String> [[-ProjectName] <String>] [<CommonParameters>]
```

## DESCRIPTION
Gets a variable group

## EXAMPLES

### EXAMPLE 1
```
$methodParameters = @{
   ProjectName = "some_project_name"
}

Get-VSTeamVariableGroup @methodParameters
```

### EXAMPLE 2
```
$methodParameters = @{
   ProjectName = "some_project_name"
   Id          = "variable_group_id"
}

Get-VSTeamVariableGroup @methodParameters
```

### EXAMPLE 3
```
$methodParameters = @{
   ProjectName = "some_project_name"
   Name        = "variable_group_name"
}

Get-VSTeamVariableGroup @methodParameters
```

## PARAMETERS

### -ProjectName
Specifies the team project for which this function operates.

You can tab complete from a list of available projects.

You can use Set-VSTeamDefaultProject to set a default project so you do not have to pass the ProjectName with each call.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: 0
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -Id
ID of the existing variable group

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
Name of the existing variable group

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

[Add-VSTeamVariableGroup]()

[Update-VSTeamVariableGroup]()

[Remove-VSTeamVariableGroup]()


