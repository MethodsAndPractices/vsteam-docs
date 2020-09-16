---
id: Remove-VSTeamGitRepository
title: Remove-VSTeamGitRepository
hide_title: true
hide_table_of_contents: false
custom_edit_url: https://github.com/MethodsAndPractices/vsteam/edit/master/.docs/Remove-VSTeamGitRepository.md
description: 
keywords:
  - vsteam
  - cmdlet
  - azure devops
---

# Remove-VSTeamGitRepository

## SYNOPSIS
Removes the Git repository from your Azure DevOps or Team Foundation Server account.

## SYNTAX

```
Remove-VSTeamGitRepository -Id <Guid[]> [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
Remove-VSTeamGitRepository removes the Git repository from your Azure DevOps or Team Foundation Server account.

## EXAMPLES

### EXAMPLE 1
```
PS C:\> Remove-VSTeamGitRepository -Id 687c53f8-1a82-4e89-9a86-13d51bc4a8d5
```

This command removes all the Git repositories for your TFS or Team Services account.

## PARAMETERS

### -Id
Specifies one or more repositories by ID.

To specify multiple IDs, use commas to separate the IDs.

To find the ID of a repository, type Get-Repository.

```yaml
Type: Guid[]
Parameter Sets: (All)
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
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

### -Confirm
Prompts you for confirmation before running the cmdlet.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
Shows what would happen if the cmdlet runs.
The cmdlet is not run.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi

Required: False
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

