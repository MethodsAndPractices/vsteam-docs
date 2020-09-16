---
id: Add-VSTeamFeed
title: Add-VSTeamFeed
hide_title: true
hide_table_of_contents: false
custom_edit_url: https://github.com/MethodsAndPractices/vsteam/edit/master/.docs/Add-VSTeamFeed.md
description: 
keywords:
  - vsteam
  - cmdlet
  - azure devops
---

# Add-VSTeamFeed

## SYNOPSIS
Adds a new feed to package management.

## SYNTAX

```
Add-VSTeamFeed -Name <String> [-Description <String>] [-EnableUpstreamSources] [-showDeletedPackageVersions]
 [<CommonParameters>]
```

## DESCRIPTION
Adds a new feed to package management.

## EXAMPLES

### EXAMPLE 1
```
PS C:\> Add-VSTeamFeed -Name test -Description 'Test Description'
```

This command adds a new package feed to the account.

## PARAMETERS

### -Name
Name of the feed

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Description
Description of the feed

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

### -EnableUpstreamSources
Enables npm and nuget upstream sources for the feed

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

### -showDeletedPackageVersions
The feed will show deleted version in the feed

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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

