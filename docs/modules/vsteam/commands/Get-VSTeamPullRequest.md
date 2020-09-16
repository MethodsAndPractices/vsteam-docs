---
id: Get-VSTeamPullRequest
title: Get-VSTeamPullRequest
hide_title: true
hide_table_of_contents: false
custom_edit_url: https://github.com/MethodsAndPractices/vsteam/edit/master/.docs/Get-VSTeamPullRequest.md
description: 
keywords:
  - vsteam
  - cmdlet
  - azure devops
---

# Get-VSTeamPullRequest

## SYNOPSIS
Returns one or more open pull requests from your team, project, or Id.

## SYNTAX

### SearchCriteriaWithStatus (Default)
```
Get-VSTeamPullRequest [-RepositoryId <Guid>] [-SourceRepositoryId <Guid>] [-SourceBranchRef <String>]
 [-TargetBranchRef <String>] [-Status <String>] [-Top <Int32>] [-Skip <Int32>] [[-ProjectName] <String>]
 [<CommonParameters>]
```

### IncludeCommits
```
Get-VSTeamPullRequest [-Id <String>] -RepositoryId <Guid> [-IncludeCommits] [[-ProjectName] <String>]
 [<CommonParameters>]
```

### ById
```
Get-VSTeamPullRequest [-Id <String>] [-RepositoryId <Guid>] [[-ProjectName] <String>] [<CommonParameters>]
```

### SearchCriteriaWithAll
```
Get-VSTeamPullRequest [-RepositoryId <Guid>] [-SourceRepositoryId <Guid>] [-SourceBranchRef <String>]
 [-TargetBranchRef <String>] [-All] [-Top <Int32>] [-Skip <Int32>] [[-ProjectName] <String>]
 [<CommonParameters>]
```

## DESCRIPTION
Returns one or more open pull requests from your team, project, or Id.

## EXAMPLES

### EXAMPLE 1
```
PS C:\> Get-VSTeamPullRequest
```

This command returns all the open pull requests for your TFS or Team Services account.

### EXAMPLE 2
```
PS C:\> Get-VSTeamPullRequest -ProjectName Demo
```

This command returns all the open pull requests for the Demo team project.

### EXAMPLE 3
```
PS C:\> Get-VSTeamPullRequest -ProjectName Demo -All
```

This command returns all pull requests for the Demo team project.

### EXAMPLE 4
```
PS C:\> Get-VSTeamPullRequest -ProjectName Demo -TargetBranchRef "refs/heads/mybranch"
```

This command returns all open pull requests for a specific branch

### EXAMPLE 5
```
PS C:\> Get-VSTeamPullRequest -Id 123
```

This command gets the pull request with an Id of 123.

### EXAMPLE 6
```
PS C:\> Get-VSTeamPullRequest -Id 123 -RepositoryId "93BBA613-2729-4158-9217-751E952AB4AF" -IncludeCommits
```

This command gets the pull request with an Id of 123 and includes the commits that are part of the pull request.

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
Specifies the pull request by ID.

```yaml
Type: String
Parameter Sets: IncludeCommits, ById
Aliases: PullRequestId

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RepositoryId
The repository ID of the pull request's target branch.

```yaml
Type: Guid
Parameter Sets: SearchCriteriaWithStatus, ById, SearchCriteriaWithAll
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

```yaml
Type: Guid
Parameter Sets: IncludeCommits
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SourceRepositoryId
If set, search for pull requests whose source branch is in this repository.

```yaml
Type: Guid
Parameter Sets: SearchCriteriaWithStatus, SearchCriteriaWithAll
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SourceBranchRef
If set, search for pull requests from this branch.

```yaml
Type: String
Parameter Sets: SearchCriteriaWithStatus, SearchCriteriaWithAll
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TargetBranchRef
If set, search for pull requests into this branch.

```yaml
Type: String
Parameter Sets: SearchCriteriaWithStatus, SearchCriteriaWithAll
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Status
If set, search for pull requests that are in this state.
Defaults to Active if unset.
Valid values for this parameter are:

- abandoned
- active
- all
- completed
- notSet

```yaml
Type: String
Parameter Sets: SearchCriteriaWithStatus
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -All
@{Text=}

```yaml
Type: SwitchParameter
Parameter Sets: SearchCriteriaWithAll
Aliases:

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -Top
The number of pull requests to retrieve.

```yaml
Type: Int32
Parameter Sets: SearchCriteriaWithStatus, SearchCriteriaWithAll
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Skip
The number of pull requests to ignore.
For example, to retrieve results 101-150, set top to 50 and skip to 100.

```yaml
Type: Int32
Parameter Sets: SearchCriteriaWithStatus, SearchCriteriaWithAll
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IncludeCommits
If set, includes the commits that are part of the pull request.
Requires the RepositoryId to be set.

```yaml
Type: SwitchParameter
Parameter Sets: IncludeCommits
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

[Show-VSTeamPullRequest]()

[Add-VSTeamPullRequest]()

[Update-VSTeamPullRequest]()


