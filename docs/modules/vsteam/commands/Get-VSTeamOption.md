---
id: Get-VSTeamOption
title: Get-VSTeamOption
hide_title: true
hide_table_of_contents: false
custom_edit_url: https://github.com/MethodsAndPractices/vsteam/edit/master/.docs/Get-VSTeamOption.md
description: 
keywords:
  - vsteam
  - cmdlet
  - azure devops
---

# Get-VSTeamOption

## SYNOPSIS
Returns all the versions of supported APIs of your TFS or AzD.

## SYNTAX

```
Get-VSTeamOption [-subDomain <String>] [-area <String>] [-resource <String>] [<CommonParameters>]
```

## DESCRIPTION
Returns all the versions of supported APIs of your TFS or AzD.

There are two table formats defined for the Team.Option type, Default and Versions.

Default view contains Name, Area, Max Version and URI Template.

Version view contains Name, Area, Min Version, Max Version, Released Version and Resource Version.

## EXAMPLES

### EXAMPLE 1
```
PS C:\> Get-VSTeamOption
```

This will display all the versions of supported APIs for your account using the 'Default' table format.

### EXAMPLE 2
```
PS C:\> Get-VSTeamOption | Format-Table -View Versions
```

This will display all the versions of supported APIs for your account using the 'Versions' custom table format.

### EXAMPLE 3
```
PS C:\> Get-VSTeamOption -SubDomain vsrm
```

This will display all the versions of supported APIs for the release management service.

### EXAMPLE 4
```
PS C:\> Get-VSTeamOption -Area core
```

This will display all the versions of supported APIs for the area core.

### EXAMPLE 5
```
PS C:\> Get-VSTeamOption -Area core -Resource teams
```

This will display all the versions of supported APIs for resources teams under the area core.

## PARAMETERS

### -area
Returns options for that area's APIs.

```yaml
Type: String
Parameter Sets: (All)
Aliases: Service

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -resource
Returns options for that resource's APIs.

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

### -subDomain
Returns options for that sub domain APIs.
Some examples include:

- vsaex = Member Entitlement Management
- feeds = Artifacts
- vsrm = Release Management
- vssps = Graph
- extmgmt = Extensions

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

[Set-VSTeamAccount]()


