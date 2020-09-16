---
id: Set-VSTeamDefaultAPITimeout
title: Set-VSTeamDefaultAPITimeout
hide_title: true
hide_table_of_contents: false
custom_edit_url: https://github.com/MethodsAndPractices/vsteam/edit/master/.docs/Set-VSTeamDefaultAPITimeout.md
description: 
keywords:
  - vsteam
  - cmdlet
  - azure devops
---

# Set-VSTeamDefaultAPITimeout

## SYNOPSIS
Sets the default timeout to be used with other calls in the module.

## SYNTAX

```
Set-VSTeamDefaultAPITimeout [-Force] -TimeoutSec <Int32> [-WhatIf] [-Confirm] [-Level <String>]
 [<CommonParameters>]
```

## DESCRIPTION
By setting a default timeout you can adjust the value for your needs

## EXAMPLES

### EXAMPLE 1
```
PS C:\> Set-VSTeamDefaultAPITimeout 30
```

This command sets 30 seconds as the default timeout.

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

### -TimeoutSec
Specifies the timeout for all function calls.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Level
On Windows allows you to store your default timeout at the Process, User or Machine levels.

When saved at the User or Machine level your default timeout will be in any future PowerShell processes.

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

## RELATED LINKS

