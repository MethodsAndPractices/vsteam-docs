---
id: Get-VSTeamGitStat
title: Get-VSTeamGitStat
hide_title: true
hide_table_of_contents: false
custom_edit_url: https://github.com/MethodsAndPractices/vsteam/edit/master/.docs/Get-VSTeamGitStat.md
description: 
keywords:
  - vsteam
  - cmdlet
  - azure devops
---

# Get-VSTeamGitStat

## SYNOPSIS
Retrieves statistics about branches within a repository.

## SYNTAX

### ByOptionalName (Default)
```
Get-VSTeamGitStat -RepositoryId <Guid> [-BranchName <String>] [[-ProjectName] <String>] [<CommonParameters>]
```

### ByVersion
```
Get-VSTeamGitStat -RepositoryId <Guid> [-BranchName <String>] [-VersionOptions <String>] -Version <String>
 -VersionType <String> [[-ProjectName] <String>] [<CommonParameters>]
```

## DESCRIPTION
Retrieves statistics about branches within a repository.

## EXAMPLES

### EXAMPLE 1
```
PS C:\> Get-VSTeamGitStat -ProjectName Demo -RepositoryId 011E421A-2A54-4491-B370-9256AD8A1BDD
```

This command returns all the Git stats for the entire repository

### EXAMPLE 2
```
PS C:\> Get-VSTeamGitStat -ProjectName Demo -RepositoryId 011E421A-2A54-4491-B370-9256AD8A1BDD -BranchName develop
```

This command returns all the Git stats for a specific branch

### EXAMPLE 3
```
PS C:\> Get-VSTeamGitStat -ProjectName Demo -RepositoryId 011E421A-2A54-4491-B370-9256AD8A1BDD -BranchName develop -VersionType branch -Version 67cae2b029dff7eb3dc062b49403aaedca5bad8d
```

This command returns all the Git stats for a specific commit

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

### -RepositoryId
Specifies the ID of the repository.

```yaml
Type: Guid
Parameter Sets: (All)
Aliases: Id

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -BranchName
Name of the branch.

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

### -VersionOptions
Version options - Specify additional modifiers to version (e.g Previous).
Valid options for this parameter are:

- firstParent
- none
- previousChange

```yaml
Type: String
Parameter Sets: ByVersion
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Version
Version string identifier (name of tag/branch, SHA1 of commit)

```yaml
Type: String
Parameter Sets: ByVersion
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -VersionType
Version type (branch, tag, or commit).
Determines how Id is interpreted.
Valid options for this parameter are:

- branch
- commit
- tag

```yaml
Type: String
Parameter Sets: ByVersion
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

