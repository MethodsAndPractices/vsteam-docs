---
id: Add-VSTeamGitRepositoryPermission
title: Add-VSTeamGitRepositoryPermission
hide_title: true
hide_table_of_contents: false
custom_edit_url: https://github.com/MethodsAndPractices/vsteam/edit/master/.docs/Add-VSTeamGitRepositoryPermission.md
description: 
keywords:
  - vsteam
  - cmdlet
  - azure devops
---

# Add-VSTeamGitRepositoryPermission

## SYNOPSIS
Add permissions to a git repository, all repositories in a project, or a specific branch

## SYNTAX

### ByProjectAndUser (Default)
```
Add-VSTeamGitRepositoryPermission -Project <VSTeamProject> -User <VSTeamUser>
 -Allow <VSTeamGitRepositoryPermissions> -Deny <VSTeamGitRepositoryPermissions> [<CommonParameters>]
```

### ByRepositoryNameAndDescriptor
```
Add-VSTeamGitRepositoryPermission -Project <VSTeamProject> -RepositoryName <String> [-BranchName <String>]
 -Descriptor <String> -Allow <VSTeamGitRepositoryPermissions> -Deny <VSTeamGitRepositoryPermissions>
 [<CommonParameters>]
```

### ByRepositoryIdAndDescriptor
```
Add-VSTeamGitRepositoryPermission -Project <VSTeamProject> -RepositoryId <Guid> [-BranchName <String>]
 -Descriptor <String> -Allow <VSTeamGitRepositoryPermissions> -Deny <VSTeamGitRepositoryPermissions>
 [<CommonParameters>]
```

### ByRepositoryNameAndUser
```
Add-VSTeamGitRepositoryPermission -Project <VSTeamProject> -RepositoryName <String> [-BranchName <String>]
 -User <VSTeamUser> -Allow <VSTeamGitRepositoryPermissions> -Deny <VSTeamGitRepositoryPermissions>
 [<CommonParameters>]
```

### ByRepositoryNameAndGroup
```
Add-VSTeamGitRepositoryPermission -Project <VSTeamProject> -RepositoryName <String> [-BranchName <String>]
 -Group <VSTeamGroup> -Allow <VSTeamGitRepositoryPermissions> -Deny <VSTeamGitRepositoryPermissions>
 [<CommonParameters>]
```

### ByRepositoryIdAndUser
```
Add-VSTeamGitRepositoryPermission -Project <VSTeamProject> -RepositoryId <Guid> [-BranchName <String>]
 -User <VSTeamUser> -Allow <VSTeamGitRepositoryPermissions> -Deny <VSTeamGitRepositoryPermissions>
 [<CommonParameters>]
```

### ByRepositoryIdAndGroup
```
Add-VSTeamGitRepositoryPermission -Project <VSTeamProject> -RepositoryId <Guid> [-BranchName <String>]
 -Group <VSTeamGroup> -Allow <VSTeamGitRepositoryPermissions> -Deny <VSTeamGitRepositoryPermissions>
 [<CommonParameters>]
```

### ByProjectAndGroup
```
Add-VSTeamGitRepositoryPermission -Project <VSTeamProject> -Group <VSTeamGroup>
 -Allow <VSTeamGitRepositoryPermissions> -Deny <VSTeamGitRepositoryPermissions> [<CommonParameters>]
```

### ByProjectAndDescriptor
```
Add-VSTeamGitRepositoryPermission -Project <VSTeamProject> -Descriptor <String>
 -Allow <VSTeamGitRepositoryPermissions> -Deny <VSTeamGitRepositoryPermissions> [<CommonParameters>]
```

## DESCRIPTION
Add permissions to a git repository, all repositories in a project, or a specific branch

## EXAMPLES

### Example 1
```powershell
PS C:\> {{ Add example code here }}
```

{{ Add example description here }}

## PARAMETERS

### -RepositoryId
@{Text=}

```yaml
Type: Guid
Parameter Sets: ByRepositoryIdAndDescriptor, ByRepositoryIdAndUser, ByRepositoryIdAndGroup
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RepositoryName
@{Text=}

```yaml
Type: String
Parameter Sets: ByRepositoryNameAndDescriptor, ByRepositoryNameAndUser, ByRepositoryNameAndGroup
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -BranchName
@{Text=}

```yaml
Type: String
Parameter Sets: ByRepositoryNameAndDescriptor, ByRepositoryIdAndDescriptor, ByRepositoryNameAndUser, ByRepositoryNameAndGroup, ByRepositoryIdAndUser, ByRepositoryIdAndGroup
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Descriptor
@{Text=}

```yaml
Type: String
Parameter Sets: ByRepositoryNameAndDescriptor, ByRepositoryIdAndDescriptor, ByProjectAndDescriptor
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -User
@{Text=}

```yaml
Type: VSTeamUser
Parameter Sets: ByProjectAndUser, ByRepositoryNameAndUser, ByRepositoryIdAndUser
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Group
@{Text=}

```yaml
Type: VSTeamGroup
Parameter Sets: ByRepositoryNameAndGroup, ByRepositoryIdAndGroup, ByProjectAndGroup
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Allow
@{Text=}

```yaml
Type: VSTeamGitRepositoryPermissions
Parameter Sets: (All)
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Deny
@{Text=}

```yaml
Type: VSTeamGitRepositoryPermissions
Parameter Sets: (All)
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Project
{{ Fill Project Description }}

```yaml
Type: VSTeamProject
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

### System.Object
## NOTES

## RELATED LINKS

