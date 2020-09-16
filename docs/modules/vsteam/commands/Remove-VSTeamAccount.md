---
id: Remove-VSTeamAccount
title: Remove-VSTeamAccount
hide_title: true
hide_table_of_contents: false
custom_edit_url: https://github.com/MethodsAndPractices/vsteam/edit/master/.docs/Remove-VSTeamAccount.md
description: 
keywords:
  - vsteam
  - cmdlet
  - azure devops
---

# Remove-VSTeamAccount

## SYNOPSIS
Clears your default project, account name and personal access token.

## SYNTAX

```
Remove-VSTeamAccount [-Force] [-WhatIf] [-Confirm] [-Level <String>] [<CommonParameters>]
```

## DESCRIPTION
Clears the environment variables that hold your default project, account, bearer token and personal access token.
You have to run Set-VSTeamAccount again before calling any other functions.

To remove from the Machine level you must be running PowerShell as administrator.

## EXAMPLES

### EXAMPLE 1
```
PS C:\> Remove-VSTeamAccount
```

This will clear your account name and personal access token.

## PARAMETERS

### -Level
On Windows allows you to clear your account information at the Process, User or Machine levels.

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

[Set-VSTeamAccount]()


