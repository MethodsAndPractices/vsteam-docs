---
id: Add-VSTeamGitRepository
title: Add-VSTeamGitRepository
hide_title: true
hide_table_of_contents: false
custom_edit_url: https://github.com/MethodsAndPractices/vsteam/edit/master/.docs/Add-VSTeamGitRepository.md
description: 
keywords:
  - vsteam
  - cmdlet
  - azure devops
---

# Add-VSTeamGitRepository

## SYNOPSIS
Adds a Git repository to your Azure DevOps or Team Foundation Server account.

## SYNTAX

```
Add-VSTeamGitRepository -Name <String> [-ProjectName] <String> [<CommonParameters>]
```

## DESCRIPTION
Add-VSTeamGitRepository adds a Git repository to your Azure DevOps or Team Foundation Server account.

## EXAMPLES

### EXAMPLE 1
```
PS C:\> Add-VSTeamGitRepository -ProjectName Demo -Name Temp
```

This command adds a new repository named Temp to the Demo project.

## PARAMETERS

### -ProjectName
Specifies the team project for which this function operates.

You can tab complete from a list of available projects.

You can use Set-VSTeamDefaultProject to set a default project so you do not have to pass the ProjectName with each call.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: True
Position: 0
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -Name
Specifies the name of the repository.

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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

