---
id: Add-VSTeamWorkItemIterationPermission
title: Add-VSTeamWorkItemIterationPermission
hide_title: true
hide_table_of_contents: false
custom_edit_url: https://github.com/MethodsAndPractices/vsteam/edit/master/.docs/Add-VSTeamWorkItemIterationPermission.md
description: 
keywords:
  - vsteam
  - cmdlet
  - azure devops
---

# Add-VSTeamWorkItemIterationPermission

## SYNOPSIS
Add Permissions to an Iteration

## SYNTAX

### ByProjectAndIterationIdAndUser (Default)
```
Add-VSTeamWorkItemIterationPermission -Project <VSTeamProject> -IterationID <Int32> -User <VSTeamUser>
 -Allow <VSTeamWorkItemIterationPermissions> -Deny <VSTeamWorkItemIterationPermissions> [<CommonParameters>]
```

### ByProjectAndIterationPathAndGroup
```
Add-VSTeamWorkItemIterationPermission -Project <VSTeamProject> -IterationPath <String> -Group <VSTeamGroup>
 -Allow <VSTeamWorkItemIterationPermissions> -Deny <VSTeamWorkItemIterationPermissions> [<CommonParameters>]
```

### ByProjectAndIterationPathAndUser
```
Add-VSTeamWorkItemIterationPermission -Project <VSTeamProject> -IterationPath <String> -User <VSTeamUser>
 -Allow <VSTeamWorkItemIterationPermissions> -Deny <VSTeamWorkItemIterationPermissions> [<CommonParameters>]
```

### ByProjectAndIterationPathAndDescriptor
```
Add-VSTeamWorkItemIterationPermission -Project <VSTeamProject> -IterationPath <String> -Descriptor <String>
 -Allow <VSTeamWorkItemIterationPermissions> -Deny <VSTeamWorkItemIterationPermissions> [<CommonParameters>]
```

### ByProjectAndIterationIdAndGroup
```
Add-VSTeamWorkItemIterationPermission -Project <VSTeamProject> -IterationID <Int32> -Group <VSTeamGroup>
 -Allow <VSTeamWorkItemIterationPermissions> -Deny <VSTeamWorkItemIterationPermissions> [<CommonParameters>]
```

### ByProjectAndIterationIdAndDescriptor
```
Add-VSTeamWorkItemIterationPermission -Project <VSTeamProject> -IterationID <Int32> -Descriptor <String>
 -Allow <VSTeamWorkItemIterationPermissions> -Deny <VSTeamWorkItemIterationPermissions> [<CommonParameters>]
```

## DESCRIPTION
Add Permissions to an Iteration

## EXAMPLES

### Example 1
```powershell
PS C:\> {{ Add example code here }}
```

{{ Add example description here }}

## PARAMETERS

### -IterationID
@{Text=}

```yaml
Type: Int32
Parameter Sets: ByProjectAndIterationIdAndUser, ByProjectAndIterationIdAndGroup, ByProjectAndIterationIdAndDescriptor
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IterationPath
@{Text=}

```yaml
Type: String
Parameter Sets: ByProjectAndIterationPathAndGroup, ByProjectAndIterationPathAndUser, ByProjectAndIterationPathAndDescriptor
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Descriptor
@{Text=}

```yaml
Type: String
Parameter Sets: ByProjectAndIterationPathAndDescriptor, ByProjectAndIterationIdAndDescriptor
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
Parameter Sets: ByProjectAndIterationIdAndUser, ByProjectAndIterationPathAndUser
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
Parameter Sets: ByProjectAndIterationPathAndGroup, ByProjectAndIterationIdAndGroup
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
Type: VSTeamWorkItemIterationPermissions
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
Type: VSTeamWorkItemIterationPermissions
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

