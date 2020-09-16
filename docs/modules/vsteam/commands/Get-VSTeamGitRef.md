---
id: Get-VSTeamGitRef
title: Get-VSTeamGitRef
hide_title: true
hide_table_of_contents: false
custom_edit_url: https://github.com/MethodsAndPractices/vsteam/edit/master/.docs/Get-VSTeamGitRef.md
description: 
keywords:
  - vsteam
  - cmdlet
  - azure devops
---

# Get-VSTeamGitRef

## SYNOPSIS
Queries the provided repository for its refs and returns them.

## SYNTAX

```
Get-VSTeamGitRef -RepositoryID <Guid> [-Filter <String>] [-FilterContains <String>] [-Top <Int32>]
 [-ContinuationToken <String>] [-ProjectName] <String> [<CommonParameters>]
```

## DESCRIPTION
Get-VSTeamGitRef gets all the refs for the provided repository.

## EXAMPLES

### EXAMPLE 1
```
PS C:\> Get-VSTeamGitRef -ProjectName Demo
```

This command returns all the Git refs for the Demo team project.

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

### -Filter
A filter to apply to the refs (starts with).

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

### -FilterContains
A filter to apply to the refs (contains).
(Azure DevOps Service and Azure DevOps Server 2019+ only)

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

### -Top
Maximum number of refs to return.
It cannot be bigger than 1000.
If it is not provided but continuationToken is, top will default to 100.
(Azure DevOps Service and Azure DevOps Server 2019+ only)

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ContinuationToken
The continuation token used for pagination.
(Azure DevOps Service and Azure DevOps Server 2019+ only)

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

### -RepositoryID
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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

