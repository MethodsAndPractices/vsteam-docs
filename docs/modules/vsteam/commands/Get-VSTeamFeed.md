---
id: Get-VSTeamFeed
title: Get-VSTeamFeed
hide_title: true
hide_table_of_contents: false
custom_edit_url: https://github.com/MethodsAndPractices/vsteam/edit/master/.docs/Get-VSTeamFeed.md
description: 
keywords:
  - vsteam
  - cmdlet
  - azure devops
---

# Get-VSTeamFeed

## SYNOPSIS
Returns a list of package feeds for the account.

## SYNTAX

### List (Default)
```
Get-VSTeamFeed [<CommonParameters>]
```

### ByID
```
Get-VSTeamFeed [-Id <String[]>] [<CommonParameters>]
```

## DESCRIPTION
Get-VSTeamFeed gets all the feeds for the account

## EXAMPLES

### EXAMPLE 1
```
PS C:\> Get-VSTeamFeed
```

This command returns all the package feeds for the account.

## PARAMETERS

### -Id
{{ Fill Id Description }}

```yaml
Type: String[]
Parameter Sets: ByID
Aliases: FeedId

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

