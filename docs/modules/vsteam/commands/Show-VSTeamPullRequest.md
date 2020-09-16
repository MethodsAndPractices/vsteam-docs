---
id: Show-VSTeamPullRequest
title: Show-VSTeamPullRequest
hide_title: true
hide_table_of_contents: false
custom_edit_url: https://github.com/MethodsAndPractices/vsteam/edit/master/.docs/Show-VSTeamPullRequest.md
description: 
keywords:
  - vsteam
  - cmdlet
  - azure devops
---

# Show-VSTeamPullRequest

## SYNOPSIS
Opens the pull request in the default browser.

## SYNTAX

```
Show-VSTeamPullRequest -Id <Int32> [<CommonParameters>]
```

## DESCRIPTION
Opens the pull request in the default browser.

## EXAMPLES

### EXAMPLE 1
```
PS C:\> Show-VSTeamPullRequest 3
```

This command will open a web browser with the pull request id of 3.

### EXAMPLE 2
```
PS C:\> Show-VSTeamPullRequest -Id 3
```

This command will open a web browser with the pull request id of 3.

## PARAMETERS

### -Id
{{ Fill Id Description }}

```yaml
Type: Int32
Parameter Sets: (All)
Aliases: PullRequestId

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

### Team.Release
## NOTES
You can pipe the pull request ID to this function.

## RELATED LINKS

[Get-VSTeamPullRequest]()


