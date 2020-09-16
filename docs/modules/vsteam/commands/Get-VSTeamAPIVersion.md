---
id: Get-VSTeamAPIVersion
title: Get-VSTeamAPIVersion
hide_title: true
hide_table_of_contents: false
custom_edit_url: https://github.com/MethodsAndPractices/vsteam/edit/master/.docs/Get-VSTeamAPIVersion.md
description: 
keywords:
  - vsteam
  - cmdlet
  - azure devops
---

# Get-VSTeamAPIVersion

## SYNOPSIS
Returns the versions of APIs used.

## SYNTAX

```
Get-VSTeamAPIVersion [-Service <String>] [<CommonParameters>]
```

## DESCRIPTION
Returns the versions of APIs used.

## EXAMPLES

### EXAMPLE 1
```
PS C:\> Get-VSTeamAPIVersion
```

This command gets the API versions currently in use.

### EXAMPLE 2
```
PS C:\> Get-VSTeamAPIVersion -Service Release
```

This command gets the version of the Release API currently in use.

## PARAMETERS

### -Service
Specifies the service to change.
The acceptable values for this parameter are:

- Build
- Release
- Core
- Git
- DistributedTask
- Tfvc
- Packaging
- MemberEntitlementManagement
- ExtensionsManagement
- ServiceEndpoints

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

