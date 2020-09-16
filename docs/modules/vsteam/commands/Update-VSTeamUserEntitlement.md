---
id: Update-VSTeamUserEntitlement
title: Update-VSTeamUserEntitlement
hide_title: true
hide_table_of_contents: false
custom_edit_url: https://github.com/MethodsAndPractices/vsteam/edit/master/.docs/Update-VSTeamUserEntitlement.md
description: 
keywords:
  - vsteam
  - cmdlet
  - azure devops
---

# Update-VSTeamUserEntitlement

## SYNOPSIS
Edit the entitlements (License, Extensions, Projects, Teams etc) for a user.

## SYNTAX

### ByEmailLicenseOnly (Default)
```
Update-VSTeamUserEntitlement -Email <String> -License <String> [-Force] [-WhatIf] [-Confirm]
 [<CommonParameters>]
```

### ByIdWithSource
```
Update-VSTeamUserEntitlement -Id <String> [-License <String>] [-LicensingSource <String>]
 [-MSDNLicenseType <String>] [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]
```

### ByIdLicenseOnly
```
Update-VSTeamUserEntitlement -Id <String> -License <String> [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]
```

### ByEmailWithSource
```
Update-VSTeamUserEntitlement -Email <String> [-License <String>] [-LicensingSource <String>]
 [-MSDNLicenseType <String>] [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
Edit the entitlements (License, Extensions, Projects, Teams etc) for a user.

## EXAMPLES

### Example 1
```powershell
PS C:\> {{ Add example code here }}
```

{{ Add example description here }}

## PARAMETERS

### -Id
The id of the user to be updated.

```yaml
Type: String
Parameter Sets: ByIdWithSource, ByIdLicenseOnly
Aliases: UserId

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -Email
The email address of the user to update.
For organizations with over 100 users this can be very slow and resource intensive.

```yaml
Type: String
Parameter Sets: ByEmailLicenseOnly, ByEmailWithSource
Aliases: UserEmail

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -License
Type of Account License you want to change to.
The acceptable values for this parameter are:

- Advanced
- EarlyAdopter
- Express
- None
- Professional
- StakeHolder

```yaml
Type: String
Parameter Sets: ByEmailLicenseOnly, ByIdLicenseOnly
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

```yaml
Type: String
Parameter Sets: ByIdWithSource, ByEmailWithSource
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

### -LicensingSource
{{ Fill LicensingSource Description }}

```yaml
Type: String
Parameter Sets: ByIdWithSource, ByEmailWithSource
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MSDNLicenseType
{{ Fill MSDNLicenseType Description }}

```yaml
Type: String
Parameter Sets: ByIdWithSource, ByEmailWithSource
Aliases:

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

[Get-VSTeamUserEntitlement]()


