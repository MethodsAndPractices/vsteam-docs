---
id: Get-VSTeamTfvcBranch
title: Get-VSTeamTfvcBranch
hide_title: true
hide_table_of_contents: false
custom_edit_url: https://github.com/MethodsAndPractices/vsteam/edit/master/.docs/Get-VSTeamTfvcBranch.md
description: 
keywords:
  - vsteam
  - cmdlet
  - azure devops
---

# Get-VSTeamTfvcBranch

## SYNOPSIS
Gets a branch for a given path from TFVC source control.

## SYNTAX

```
Get-VSTeamTfvcBranch -Path <String[]> [-IncludeChildren] [-IncludeParent] [-IncludeDeleted]
 [<CommonParameters>]
```

## DESCRIPTION
Get-VSTeamTfvcBranch gets a branch for a given path from TFVC source control.

## EXAMPLES

### EXAMPLE 1
```
PS C:\> Get-VSTeamTfvcBranch -Path $/MyProject/MyBranch
```

This command returns the branch object for the path $/MyProject/MyBranch

### EXAMPLE 2
```
PS C:\> Get-VSTeamTfvcBranch -Path $/MyProject/MyBranch -IncludeChildren
```

This command returns the branch object for the path $/MyProject/MyBranch and its child branches.

### EXAMPLE 3
```
PS C:\> Get-VSTeamTfvcBranch -Path $/MyProject/MyBranch -IncludeParent
```

This command returns the branch object for the path $/MyProject/MyBranch and its parent.

### EXAMPLE 4
```
PS C:\> Get-VSTeamTfvcBranch -Path $/MyProject/MyBranch -IncludeDeleted
```

This command returns the branch object for the path $/MyProject/MyBranch, even if it's marked as deleted.

### EXAMPLE 5
```
PS C:\> '$/MyProject/MyBranch','$/AnotherProject/AnotherBranch' | Get-VSTeamTfvcBranch
```

This command returns the branch objects for the paths $/MyProject/MyBranch and $/AnotherProject/AnotherBranch by using the pipeline.

## PARAMETERS

### -Path
Full path to the branch.

```yaml
Type: String[]
Parameter Sets: (All)
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### -IncludeChildren
Return child branches, if there are any.

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

### -IncludeParent
Return the parent branch, if there is one.

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
Return branches marked as deleted.

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
You can pipe paths to this function.

## RELATED LINKS

