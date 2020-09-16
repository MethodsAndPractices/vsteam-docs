---
id: Clear-VSTeamDefaultProject
title: Clear-VSTeamDefaultProject
hide_title: true
hide_table_of_contents: false
custom_edit_url: https://github.com/MethodsAndPractices/vsteam/edit/master/.docs/Clear-VSTeamDefaultProject.md
description: 
keywords:
  - vsteam
  - cmdlet
  - azure devops
---

# Clear-VSTeamDefaultProject

## SYNOPSIS
Clears the value stored in the default project parameter value.

## SYNTAX

```
Clear-VSTeamDefaultProject [-Level <String>] [<CommonParameters>]
```

## DESCRIPTION
Clears the value stored in the default project parameter value.

## EXAMPLES

### EXAMPLE 1
```
PS C:\> Clear-VSTeamDefaultProject
```

This will clear the default project parameter value.
You will now have to provide a project for any functions that require a project.

## PARAMETERS

### -Level
On Windows allows you to clear your default project at the Process, User or Machine levels.

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

## NOTES

## RELATED LINKS

[Set-VSTeamDefaultProject]()

[Set-VSTeamAccount]()


