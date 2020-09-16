---
id: Show-VSTeamFeed
title: Show-VSTeamFeed
hide_title: true
hide_table_of_contents: false
custom_edit_url: https://github.com/MethodsAndPractices/vsteam/edit/master/.docs/Show-VSTeamFeed.md
description: 
keywords:
  - vsteam
  - cmdlet
  - azure devops
---

# Show-VSTeamFeed

## SYNOPSIS
Opens the feed in the default browser.

## SYNTAX

```
Show-VSTeamFeed [-Name <String>] [<CommonParameters>]
```

## DESCRIPTION
Opens the feed in the default browser.

## EXAMPLES

### EXAMPLE 1
```
PS C:\> Show-VSTeamFeed -Name Demo
```

This command will open a web browser with this feed showing.

## PARAMETERS

### -Name
{{ Fill Name Description }}

```yaml
Type: String
Parameter Sets: (All)
Aliases: ID

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

### Team.Feed
## NOTES

## RELATED LINKS

[Set-VSTeamAccount]()

[Add-VSTeamFeed]()


