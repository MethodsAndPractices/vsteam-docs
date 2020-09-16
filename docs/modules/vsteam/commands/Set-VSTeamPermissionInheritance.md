---
id: Set-VSTeamPermissionInheritance
title: Set-VSTeamPermissionInheritance
hide_title: true
hide_table_of_contents: false
custom_edit_url: https://github.com/MethodsAndPractices/vsteam/edit/master/.docs/Set-VSTeamPermissionInheritance.md
description: 
keywords:
  - vsteam
  - cmdlet
  - azure devops
---

# Set-VSTeamPermissionInheritance

## SYNOPSIS
Sets the permission inheritance to true or false.

## SYNTAX

```
Set-VSTeamPermissionInheritance -Name <String> -ResourceType <String> -NewState <Boolean> [-Force]
 [[-ProjectName] <String>] [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
Sets the permission inheritance to true or false.

## EXAMPLES

### EXAMPLE 1
```
PS C:\> Set-VSTeamPermissionInheritance -ProjectName Demo -Name Demo-CI -ResourceType BuildDefinition -NewState $true -Force
```

This command sets the permission inheritance to true.

### EXAMPLE 2
```
PS C:\> Get-VSTeamBuildDefinition | Set-VSTeamPermissionInheritance -ResourceType BuildDefinition -NewState $true -Force
```

ThisThis command sets the permission inheritance to true for every build definition returned from Get-VSTeamBuildDefinition.

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

### -ResourceType
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

### -NewState
The new state to set

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
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

## NOTES

## RELATED LINKS

[Add-VSTeamPolicy]()

[Remove-VSTeamPolicy]()

[Set-VSTeamPermissionInheritanceType]()


