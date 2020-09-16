---
id: Clear-VSTeamDefaultAPITimeout
title: Clear-VSTeamDefaultAPITimeout
hide_title: true
hide_table_of_contents: false
custom_edit_url: https://github.com/MethodsAndPractices/vsteam/edit/master/.docs/Clear-VSTeamDefaultAPITimeout.md
description: 
keywords:
  - vsteam
  - cmdlet
  - azure devops
---

# Clear-VSTeamDefaultAPITimeout

## SYNOPSIS
Clears the value stored in the default timeout parameter value.

## SYNTAX

```
Clear-VSTeamDefaultAPITimeout [-Level <String>] [<CommonParameters>]
```

## DESCRIPTION
Clears the value stored in the default timeout parameter value.

## EXAMPLES

### EXAMPLE 1
```
PS C:\> Clear-VSTeamDefaultAPITimeout
```

This will clear the default timeout parameter value.

## PARAMETERS

### -Level
On Windows allows you to clear your default timeout at the Process, User or Machine levels.

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

[Set-VSTeamDefaultAPITimeout]()

[Set-VSTeamAccount]()


