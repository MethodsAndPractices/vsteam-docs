---
id: Get-VSTeamProfile
title: Get-VSTeamProfile
hide_title: true
hide_table_of_contents: false
custom_edit_url: https://github.com/MethodsAndPractices/vsteam/edit/master/.docs/Get-VSTeamProfile.md
description: 
keywords:
  - vsteam
  - cmdlet
  - azure devops
---

# Get-VSTeamProfile

## SYNOPSIS
Returns the saved profiles.

## SYNTAX

```
Get-VSTeamProfile [-Name <String>] [<CommonParameters>]
```

## DESCRIPTION
Returns the saved profiles.

## EXAMPLES

### EXAMPLE 1
```
PS C:\> Get-VSTeamProfile
```

Return the list of saved profiles

### EXAMPLE 2
```
PS C:\> Get-VSTeamProfile -Name mydemos
```

Will return details of the profile provided

## PARAMETERS

### -Name
Optional name for the profile.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

[Set-VSTeamAccount]()

[Add-VSTeamProfile]()


