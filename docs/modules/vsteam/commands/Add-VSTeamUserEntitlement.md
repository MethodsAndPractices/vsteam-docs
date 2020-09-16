---
id: Add-VSTeamUserEntitlement
title: Add-VSTeamUserEntitlement
hide_title: true
hide_table_of_contents: false
custom_edit_url: https://github.com/MethodsAndPractices/vsteam/edit/master/.docs/Add-VSTeamUserEntitlement.md
description: 
keywords:
  - vsteam
  - cmdlet
  - azure devops
---

# Add-VSTeamUserEntitlement

## SYNOPSIS
Add a user, assign license and extensions and make them a member of a project group in an account.

## SYNTAX

```
Add-VSTeamUserEntitlement -Email <String> [-License <String>] [-Group <String>] [-LicensingSource <String>]
 [-MSDNLicenseType <String>] [[-ProjectName] <String>] [<CommonParameters>]
```

## DESCRIPTION
Add a user, assign license and extensions and make them a member of a project group in an account.

## EXAMPLES

### Example 1
```powershell
PS C:\> {{ Add example code here }}
```

{{ Add example description here }}

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

### -License
Type of Account License.
The acceptable values for this parameter are:

- Advanced
- EarlyAdopter
- Express
- None
- Professional
- StakeHolder

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: EarlyAdopter
Accept pipeline input: False
Accept wildcard characters: False
```

### -Group
The acceptable values for this parameter are:

- Custom
- ProjectAdministrator
- ProjectContributor
- ProjectReader
- ProjectStakeholder

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: ProjectContributor
Accept pipeline input: False
Accept wildcard characters: False
```

### -LicensingSource
Licensing Source (e.g.
Account.
MSDN etc.).
The acceptable values for this parameter are:

- account
- auto
- msdn
- none
- profile
- trial

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: Account
Accept pipeline input: False
Accept wildcard characters: False
```

### -MSDNLicenseType
Type of MSDN License (e.g.
Visual Studio Professional, Visual Studio Enterprise etc.).
The acceptable values for this parameter are:

- eligible
- enterprise
- none
- platforms
- premium
- professional
- testProfessional
- ultimate

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

### -Email
{{ Fill Email Description }}

```yaml
Type: String
Parameter Sets: (All)
Aliases: UserEmail

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

### System.Object
## NOTES

## RELATED LINKS

