---
id: Remove-VSTeamUserEntitlement
title: Remove-VSTeamUserEntitlement
hide_title: true
hide_table_of_contents: false
custom_edit_url: https://github.com/MethodsAndPractices/vsteam/edit/master/.docs/Remove-VSTeamUserEntitlement.md
description: 
keywords:
  - vsteam
  - cmdlet
  - azure devops
---

# Remove-VSTeamUserEntitlement

## SYNOPSIS
Delete a user from the account.

The delete operation includes unassigning Extensions and Licenses and removing the user from all project memberships.
The user would continue to have access to the account if she is member of an AAD group, that is added directly to the account.

## SYNTAX

### ById (Default)
```
Remove-VSTeamUserEntitlement -Id <String> [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]
```

### ByEmail
```
Remove-VSTeamUserEntitlement -Email <String> [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
Delete a user from the account.

The delete operation includes unassigning Extensions and Licenses and removing the user from all project memberships.
The user would continue to have access to the account if she is member of an AAD group, that is added directly to the account.

## EXAMPLES

### Example 1
```powershell
PS C:\> {{ Add example code here }}
```

{{ Add example description here }}

## PARAMETERS

### -Confirm
Prompts you for confirmation before running the function.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf

Required: False
Position: Named
Default value: False
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

### -Email
The email of the user to remove.

```yaml
Type: String
Parameter Sets: ByEmail
Aliases: UserEmail

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -WhatIf
Shows what would happen if the function runs.
The function is not run.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -Id
{{ Fill Id Description }}

```yaml
Type: String
Parameter Sets: ById
Aliases: UserId

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

