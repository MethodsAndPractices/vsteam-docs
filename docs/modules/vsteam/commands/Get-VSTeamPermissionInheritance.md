---
id: Get-VSTeamPermissionInheritance
title: Get-VSTeamPermissionInheritance
hide_title: true
hide_table_of_contents: false
custom_edit_url: https://github.com/MethodsAndPractices/vsteam/edit/master/.docs/Get-VSTeamPermissionInheritance.md
description: 
keywords:
  - vsteam
  - cmdlet
  - azure devops
---

# Get-VSTeamPermissionInheritance

## SYNOPSIS
Returns true or false.

## SYNTAX

```
Get-VSTeamPermissionInheritance -Name <String> -resourceType <String> [[-ProjectName] <String>]
 [<CommonParameters>]
```

## DESCRIPTION
Returns true or false.

## EXAMPLES

### EXAMPLE 1
```
PS C:\> Get-VSTeamPermissionInheritance -ProjectName Demo -Name Demo-CI -ResourceType BuildDefinition
```

This command returns true or false.

### EXAMPLE 2
```
PS C:\> Get-VSTeamBuildDefinition | Get-VSTeamPermissionInheritance -ResourceType BuildDefinition
```

This command returns true or false for every build definition returned from Get-VSTeamBuildDefinition.

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

### -Name
Specifies the name of the resource.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### -resourceType
Specifies the type of resource.
The acceptable values for this parameter are:

- Repository
- BuildDefinition
- ReleaseDefinition

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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

[Add-VSTeamPolicy]()

[Remove-VSTeamPolicy]()

[Get-VSTeamPermissionInheritanceType]()


