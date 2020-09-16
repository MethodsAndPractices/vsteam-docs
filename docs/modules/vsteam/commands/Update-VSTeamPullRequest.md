---
id: Update-VSTeamPullRequest
title: Update-VSTeamPullRequest
hide_title: true
hide_table_of_contents: false
custom_edit_url: https://github.com/MethodsAndPractices/vsteam/edit/master/.docs/Update-VSTeamPullRequest.md
description: 
keywords:
  - vsteam
  - cmdlet
  - azure devops
---

# Update-VSTeamPullRequest

## SYNOPSIS
Update a pull request

## SYNTAX

### Draft (Default)
```
Update-VSTeamPullRequest -RepositoryId <Guid> -PullRequestId <Int32> [-Draft] [-Force] [-WhatIf] [-Confirm]
 [<CommonParameters>]
```

### Status
```
Update-VSTeamPullRequest -RepositoryId <Guid> -PullRequestId <Int32> -Status <String> [-Force] [-WhatIf]
 [-Confirm] [<CommonParameters>]
```

### EnableAutoComplete
```
Update-VSTeamPullRequest -RepositoryId <Guid> -PullRequestId <Int32> [-EnableAutoComplete]
 -AutoCompleteIdentity <VSTeamUser> [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]
```

### DisableAutoComplete
```
Update-VSTeamPullRequest -RepositoryId <Guid> -PullRequestId <Int32> [-DisableAutoComplete] [-Force] [-WhatIf]
 [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
Update a pull request

## EXAMPLES

### EXAMPLE 1
```
PS C:\> Set-VSTeamAccount -Account mydemos -Token $(System.AccessToken) -UseBearerToken
PS C:\> $r = Get-VSTeamGitRepository -ProjectName project -Name demorepo
PS C:\> Update-VSTeamPullRequest -RepositoryId $r.RepositoryId -Draft
```

Set the pull request to be a draft

### EXAMPLE 2
```
PS C:\> Set-VSTeamAccount -Account mydemos -Token $(System.AccessToken) -UseBearerToken
PS C:\> $r = Get-VSTeamGitRepository -ProjectName project -Name demorepo
PS C:\> Update-VSTeamPullRequest -RepositoryId $r.RepositoryId -Status abandoned
```

Abandon a pull request

## PARAMETERS

### -RepositoryId
The id of the repository

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

### -PullRequestId
The id of the pull request

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Status
The status to set the pull request to.
Valid values for this are:

- abandoned
- active
- completed
- notSet

```yaml
Type: String
Parameter Sets: Status
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EnableAutoComplete
Set the pull requests auto complete status

```yaml
Type: SwitchParameter
Parameter Sets: EnableAutoComplete
Aliases:

Required: True
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -AutoCompleteIdentity
The identity that enabled autocomplete.
This is mandatory if -AutoComplete is set to $true

```yaml
Type: VSTeamUser
Parameter Sets: EnableAutoComplete
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DisableAutoComplete
Unset the pull requests auto complete status

```yaml
Type: SwitchParameter
Parameter Sets: DisableAutoComplete
Aliases:

Required: True
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -Draft
Set the pull request as a draft

```yaml
Type: SwitchParameter
Parameter Sets: Draft
Aliases:

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm
Prompts you for confirmation before running the function.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force
Forces the function without confirmation

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

### -WhatIf
Shows what would happen if the function runs.
The function is not run.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi

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

### Team.PullRequest
## NOTES

## RELATED LINKS

