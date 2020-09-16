---
id: Get-VSTeamGitCommit
title: Get-VSTeamGitCommit
hide_title: true
hide_table_of_contents: false
custom_edit_url: https://github.com/MethodsAndPractices/vsteam/edit/master/.docs/Get-VSTeamGitCommit.md
description: 
keywords:
  - vsteam
  - cmdlet
  - azure devops
---

# Get-VSTeamGitCommit

## SYNOPSIS
Retrieve git commits for a project

## SYNTAX

### All (Default)
```
Get-VSTeamGitCommit -RepositoryID <Guid> [-FromDate <DateTime>] [-ToDate <DateTime>]
 [-ItemVersionVersionType <String>] [-ItemVersionVersion <String>] [-ItemVersionVersionOptions <String>]
 [-CompareVersionVersionType <String>] [-CompareVersionVersion <String>]
 [-CompareVersionVersionOptions <String>] [-FromCommitId <String>] [-ToCommitId <String>] [-Author <String>]
 [-ItemPath <String>] [-Top <Int32>] [-Skip <Int32>] [-User <String>] [[-ProjectName] <String>]
 [<CommonParameters>]
```

### ItemPath
```
Get-VSTeamGitCommit -RepositoryID <Guid> [-FromDate <DateTime>] [-ToDate <DateTime>]
 [-ItemVersionVersionType <String>] [-ItemVersionVersion <String>] [-ItemVersionVersionOptions <String>]
 [-CompareVersionVersionType <String>] [-CompareVersionVersion <String>]
 [-CompareVersionVersionOptions <String>] [-FromCommitId <String>] [-ToCommitId <String>] [-Author <String>]
 -ItemPath <String> [-ExcludeDeletes] [-Top <Int32>] [-Skip <Int32>] [-HistoryMode <String>] [-User <String>]
 [[-ProjectName] <String>] [<CommonParameters>]
```

### ByIds
```
Get-VSTeamGitCommit -RepositoryID <Guid> [-Ids <String[]>] [[-ProjectName] <String>] [<CommonParameters>]
```

### CompareVersion
```
Get-VSTeamGitCommit -RepositoryID <Guid> [-FromDate <DateTime>] [-ToDate <DateTime>]
 [-ItemVersionVersionType <String>] [-ItemVersionVersion <String>] [-ItemVersionVersionOptions <String>]
 -CompareVersionVersionType <String> -CompareVersionVersion <String> [-CompareVersionVersionOptions <String>]
 [-FromCommitId <String>] [-ToCommitId <String>] [-Author <String>] [-Top <Int32>] [-Skip <Int32>]
 [-User <String>] [[-ProjectName] <String>] [<CommonParameters>]
```

### ItemVersion
```
Get-VSTeamGitCommit -RepositoryID <Guid> [-FromDate <DateTime>] [-ToDate <DateTime>]
 -ItemVersionVersionType <String> -ItemVersionVersion <String> [-ItemVersionVersionOptions <String>]
 [-CompareVersionVersionType <String>] [-CompareVersionVersion <String>]
 [-CompareVersionVersionOptions <String>] [-FromCommitId <String>] [-ToCommitId <String>] [-Author <String>]
 [-Top <Int32>] [-Skip <Int32>] [-User <String>] [[-ProjectName] <String>] [<CommonParameters>]
```

## DESCRIPTION
The Get-VSTeamGitCommit function gets the commits for a git repository.

## EXAMPLES

### EXAMPLE 1
```
PS C:\> Get-VSTeamGitCommit -ProjectName demo -RepositoryId 118C262F-0D4C-4B76-BD9B-7DD8CA12F196
```

This command gets a list of all commits in the demo project for a specific repository.

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

### -FromDate
If provided, only include history entries created after this date (string)

```yaml
Type: DateTime
Parameter Sets: All, ItemPath, CompareVersion, ItemVersion
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ToDate
If provided, only include history entries created before this date (string)

```yaml
Type: DateTime
Parameter Sets: All, ItemPath, CompareVersion, ItemVersion
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ItemVersionVersionType
Version type (branch, tag, or commit).
Determines how Id is interpreted.
The acceptable values for this parameter are:

- branch
- commit
- tag

```yaml
Type: String
Parameter Sets: All, ItemPath, CompareVersion
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

```yaml
Type: String
Parameter Sets: ItemVersion
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ItemVersionVersion
Version string identifier (name of tag/branch, SHA1 of commit)

```yaml
Type: String
Parameter Sets: All, ItemPath, CompareVersion
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

```yaml
Type: String
Parameter Sets: ItemVersion
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ItemVersionVersionOptions
Version options - Specify additional modifiers to version (e.g Previous).
The acceptable values for this parameter are:

- firstParent
- none
- previousChange

```yaml
Type: String
Parameter Sets: All, ItemPath, CompareVersion, ItemVersion
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CompareVersionVersionType
Version type (branch, tag, or commit).
Determines how Id is interpreted.
The acceptable values for this parameter are:

- branch
- commit
- tag

```yaml
Type: String
Parameter Sets: All, ItemPath, ItemVersion
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

```yaml
Type: String
Parameter Sets: CompareVersion
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CompareVersionVersion
Version string identifier (name of tag/branch, SHA1 of commit).
The acceptable values for this parameter are:

- firstParent
- none
- previousChange

```yaml
Type: String
Parameter Sets: All, ItemPath, ItemVersion
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

```yaml
Type: String
Parameter Sets: CompareVersion
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CompareVersionVersionOptions
Version options - Specify additional modifiers to version (e.g Previous)

```yaml
Type: String
Parameter Sets: All, ItemPath, CompareVersion, ItemVersion
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -FromCommitId
If provided, a lower bound for filtering commits alphabetically

```yaml
Type: String
Parameter Sets: All, ItemPath, CompareVersion, ItemVersion
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ToCommitId
If provided, an upper bound for filtering commits alphabetically

```yaml
Type: String
Parameter Sets: All, ItemPath, CompareVersion, ItemVersion
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Author
Alias or display name of the author

```yaml
Type: String
Parameter Sets: All, ItemPath, CompareVersion, ItemVersion
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Ids
If provided, specifies the exact commit ids of the commits to fetch.
May not be combined with other parameters.

```yaml
Type: String[]
Parameter Sets: ByIds
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ItemPath
Path of item to search under

```yaml
Type: String
Parameter Sets: All
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

```yaml
Type: String
Parameter Sets: ItemPath
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExcludeDeletes
Only applies when an itemPath is specified.
This determines whether to exclude delete entries of the specified path.

```yaml
Type: SwitchParameter
Parameter Sets: ItemPath
Aliases:

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -Top
Maximum number of entries to retrieve

```yaml
Type: Int32
Parameter Sets: All, ItemPath, CompareVersion, ItemVersion
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Skip
Number of entries to skip

```yaml
Type: Int32
Parameter Sets: All, ItemPath, CompareVersion, ItemVersion
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -HistoryMode
What Git history mode should be used.
This only applies to the search criteria when Ids = null and an itemPath is specified.
The acceptable values for this parameter are:

- firstParent
- fullHistory
- fullHistorySimplifyMerges
- simplifiedHistory

```yaml
Type: String
Parameter Sets: ItemPath
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -User
Alias or display name of the committer

```yaml
Type: String
Parameter Sets: All, ItemPath, CompareVersion, ItemVersion
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RepositoryID
The id or friendly name of the repository.
To use the friendly name, projectId must also be specified.

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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES
This function has a Dynamic Parameter for ProjectName that specifies the project for which this function gets commits.

You can tab complete from a list of available projects.

You can use Set-VSTeamDefaultProject to set a default project so you do not have to pass the ProjectName with each call.

You can pipe a repository ID to this function.

## RELATED LINKS

