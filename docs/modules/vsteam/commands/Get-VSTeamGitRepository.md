---
id: Get-VSTeamGitRepository
title: Get-VSTeamGitRepository
hide_title: true
hide_table_of_contents: false
custom_edit_url: https://github.com/MethodsAndPractices/vsteam/edit/master/.docs/Get-VSTeamGitRepository.md
description: 
keywords:
  - vsteam
  - cmdlet
  - azure devops
---

# Get-VSTeamGitRepository

## SYNOPSIS
Get all the repositories in your Azure DevOps or Team Foundation Server account, or a specific project.

## SYNTAX

### ByID (Default)
```
Get-VSTeamGitRepository [-Id <Guid[]>] [[-ProjectName] <String>] [<CommonParameters>]
```

### ByName
```
Get-VSTeamGitRepository [-Name <String[]>] [[-ProjectName] <String>] [<CommonParameters>]
```

## DESCRIPTION
Get-VSTeamGitRepository gets all the repositories in your Azure DevOps or Team Foundation Server account, or a specific project.

## EXAMPLES

### EXAMPLE 1
```
PS C:\> Get-VSTeamGitRepository
```

This command returns all the Git repositories for your TFS or Team Services account.

### EXAMPLE 2
```
PS C:\> Get-VSTeamGitRepository -ProjectName Demo
```

This command returns all the Git repositories for the Demo team project.

### EXAMPLE 3
```
PS C:\> git clone (Get-VSTeamGitRepository | select -ExpandProperty remoteUrl)
```

This command gets the remote URL and passes it to git clone command.

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

### -Id
Specifies one or more repositories by ID.

To specify multiple IDs, use commas to separate the IDs.

To find the ID of a repository, type Get-VSTeamGitRepository.

```yaml
Type: Guid[]
Parameter Sets: ByID
Aliases: RepositoryID

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -Name
Specifies one or more repositories by name.

To specify multiple names, use commas to separate the names.

To find the name of a repository, type Get-VSTeamGitRepository.

```yaml
Type: String[]
Parameter Sets: ByName
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

