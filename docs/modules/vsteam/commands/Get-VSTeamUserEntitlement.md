---
id: Get-VSTeamUserEntitlement
title: Get-VSTeamUserEntitlement
hide_title: true
hide_table_of_contents: false
custom_edit_url: https://github.com/MethodsAndPractices/vsteam/edit/master/.docs/Get-VSTeamUserEntitlement.md
description: 
keywords:
  - vsteam
  - cmdlet
  - azure devops
---

# Get-VSTeamUserEntitlement

## SYNOPSIS
Get User Entitlement for a user.

## SYNTAX

### List (Default)
```
Get-VSTeamUserEntitlement [-Top <Int32>] [-Skip <Int32>] [-Select <String[]>] [<CommonParameters>]
```

### ByID
```
Get-VSTeamUserEntitlement [-Id <String[]>] [<CommonParameters>]
```

## DESCRIPTION
Get User Entitlement for a user.

## EXAMPLES

### Example 1
```powershell
PS C:\> {{ Add example code here }}
```

{{ Add example description here }}

## PARAMETERS

### -Skip
The number of items to skip.

```yaml
Type: Int32
Parameter Sets: List
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Top
Specifies the maximum number to return.

```yaml
Type: Int32
Parameter Sets: List
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Select
Comma (",") separated list of properties to select in the result entitlements. 
The acceptable values for this parameter are:

- Projects
- Extensions
- GroupRules

```yaml
Type: String[]
Parameter Sets: List
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Id
{{ Fill Id Description }}

```yaml
Type: String[]
Parameter Sets: ByID
Aliases: UserId

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

