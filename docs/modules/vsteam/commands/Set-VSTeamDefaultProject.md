---
id: Set-VSTeamDefaultProject
title: Set-VSTeamDefaultProject
hide_title: true
hide_table_of_contents: false
custom_edit_url: https://github.com/MethodsAndPractices/vsteam/edit/master/.docs/Set-VSTeamDefaultProject.md
description: 
keywords:
  - vsteam
  - cmdlet
  - azure devops
---

# Set-VSTeamDefaultProject

## SYNOPSIS
Sets the default project to be used with other calls in the module.

## SYNTAX

```
Set-VSTeamDefaultProject [-Force] -Project <String> [-WhatIf] [-Confirm] [-Level <String>] [<CommonParameters>]
```

## DESCRIPTION
The majority of the functions in this module require a project name.

By setting a default project you can omit that parameter from your function calls and this default will be used instead.

## EXAMPLES

### EXAMPLE 1
```
PS C:\> Set-VSTeamDefaultProject Demo
```

This command sets Demo as the default project.

You can now call other functions that require a project name without passing the project.

## PARAMETERS

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

### -Project
Specifies the team project for which this function operates.

You can tab complete from a list of available projects.

You can use Set-VSTeamDefaultProject to set a default project so you do not have to pass the ProjectName with each call.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -Level
On Windows allows you to store your default project at the Process, User or Machine levels.

When saved at the User or Machine level your default project will be in any future PowerShell processes.

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

### System.String
## OUTPUTS

### System.Object
## NOTES
Setting a default project also enables tab completion of dynamic parameters when you call Add-VSTeamBuild.

## RELATED LINKS

