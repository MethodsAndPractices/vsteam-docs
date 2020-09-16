---
id: Get-VSTeamTfvcRootBranch
title: Get-VSTeamTfvcRootBranch
hide_title: true
hide_table_of_contents: false
custom_edit_url: https://github.com/MethodsAndPractices/vsteam/edit/master/.docs/Get-VSTeamTfvcRootBranch.md
description: 
keywords:
  - vsteam
  - cmdlet
  - azure devops
---

# Get-VSTeamTfvcRootBranch

## SYNOPSIS
Gets root branches for all projects with TFVC source control.

## SYNTAX

```
Get-VSTeamTfvcRootBranch [-IncludeChildren] [-IncludeDeleted] [<CommonParameters>]
```

## DESCRIPTION
Get-VSTeamTfvcRootBranch gets root branches for all projects with TFVC source control.

## EXAMPLES

### EXAMPLE 1
```
PS C:\> Get-VSTeamTfvcRootBranch
```

This command returns root branches for all projects.

### EXAMPLE 2
```
PS C:\> Get-VSTeamTfvcRootBranch -IncludeChildren
```

This command returns root branches for all projects and their respective child branches.

### EXAMPLE 3
```
PS C:\> Get-VSTeamTfvcRootBranch -IncludeDeleted
```

This command returns root branches for all projects, also those marked as deleted.

## PARAMETERS

### -IncludeChildren
Return the child branches for each root branch.

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

### -IncludeDeleted
Return deleted branches.

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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

