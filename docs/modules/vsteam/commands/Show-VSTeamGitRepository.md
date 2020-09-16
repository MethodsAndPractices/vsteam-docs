---
id: Show-VSTeamGitRepository
title: Show-VSTeamGitRepository
hide_title: true
hide_table_of_contents: false
custom_edit_url: https://github.com/MethodsAndPractices/vsteam/edit/master/.docs/Show-VSTeamGitRepository.md
description: 
keywords:
  - vsteam
  - cmdlet
  - azure devops
---

# Show-VSTeamGitRepository

## SYNOPSIS
Opens the Git repository in the default browser.

## SYNTAX

```
Show-VSTeamGitRepository [-RemoteUrl <String>] [[-ProjectName] <String>] [<CommonParameters>]
```

## DESCRIPTION
Opens the Git repository in the default browser.

## EXAMPLES

### EXAMPLE 1
```
PS C:\> Show-VSTeamGitRepository -ProjectName Demo
```

This command opens the Git repository in a browser.

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

### -RemoteUrl
The RemoteUrl of the Git repository to open.

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

