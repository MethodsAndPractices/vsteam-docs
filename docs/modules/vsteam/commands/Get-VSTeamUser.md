---
id: Get-VSTeamUser
title: Get-VSTeamUser
hide_title: true
hide_table_of_contents: false
custom_edit_url: https://github.com/MethodsAndPractices/vsteam/edit/master/.docs/Get-VSTeamUser.md
description: 
keywords:
  - vsteam
  - cmdlet
  - azure devops
---

# Get-VSTeamUser

## SYNOPSIS
Returns a list of users for the account.

## SYNTAX

### List (Default)
```
Get-VSTeamUser [-SubjectTypes <String[]>] [<CommonParameters>]
```

### ByUserDescriptor
```
Get-VSTeamUser -Descriptor <String> [<CommonParameters>]
```

## DESCRIPTION
Returns a list of users for the account.

## EXAMPLES

### Example 1
```powershell
PS C:\> {{ Add example code here }}
```

{{ Add example description here }}

## PARAMETERS

### -SubjectTypes
A comma separated list of user subject subtypes to reduce the retrieved results.
Valid subject types:

- vss (Azure DevOps User)
- aad (Azure Active Directory User)
- svc (Azure DevOps Service Identity)
- imp (Imported Identity)
- msa (Microsoft Account)

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

### -Descriptor
The descriptor of the desired graph user.

```yaml
Type: String
Parameter Sets: ByUserDescriptor
Aliases: UserDescriptor

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

