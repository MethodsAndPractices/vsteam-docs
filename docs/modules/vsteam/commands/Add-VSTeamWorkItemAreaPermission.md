---
id: Add-VSTeamWorkItemAreaPermission
title: Add-VSTeamWorkItemAreaPermission
hide_title: true
hide_table_of_contents: false
custom_edit_url: https://github.com/MethodsAndPractices/vsteam/edit/master/.docs/Add-VSTeamWorkItemAreaPermission.md
description: 
keywords:
  - vsteam
  - cmdlet
  - azure devops
---

# Add-VSTeamWorkItemAreaPermission

## SYNOPSIS
Add Permissions to a Work Item Area

## SYNTAX

### ByProjectAndAreaIdAndUser (Default)
```
Add-VSTeamWorkItemAreaPermission -Project <VSTeamProject> -AreaID <Int32> -User <VSTeamUser>
 -Allow <VSTeamWorkItemAreaPermissions> -Deny <VSTeamWorkItemAreaPermissions> [<CommonParameters>]
```

### ByProjectAndAreaPathAndGroup
```
Add-VSTeamWorkItemAreaPermission -Project <VSTeamProject> -AreaPath <String> -Group <VSTeamGroup>
 -Allow <VSTeamWorkItemAreaPermissions> -Deny <VSTeamWorkItemAreaPermissions> [<CommonParameters>]
```

### ByProjectAndAreaPathAndUser
```
Add-VSTeamWorkItemAreaPermission -Project <VSTeamProject> -AreaPath <String> -User <VSTeamUser>
 -Allow <VSTeamWorkItemAreaPermissions> -Deny <VSTeamWorkItemAreaPermissions> [<CommonParameters>]
```

### ByProjectAndAreaPathAndDescriptor
```
Add-VSTeamWorkItemAreaPermission -Project <VSTeamProject> -AreaPath <String> -Descriptor <String>
 -Allow <VSTeamWorkItemAreaPermissions> -Deny <VSTeamWorkItemAreaPermissions> [<CommonParameters>]
```

### ByProjectAndAreaIdAndGroup
```
Add-VSTeamWorkItemAreaPermission -Project <VSTeamProject> -AreaID <Int32> -Group <VSTeamGroup>
 -Allow <VSTeamWorkItemAreaPermissions> -Deny <VSTeamWorkItemAreaPermissions> [<CommonParameters>]
```

### ByProjectAndAreaIdAndDescriptor
```
Add-VSTeamWorkItemAreaPermission -Project <VSTeamProject> -AreaID <Int32> -Descriptor <String>
 -Allow <VSTeamWorkItemAreaPermissions> -Deny <VSTeamWorkItemAreaPermissions> [<CommonParameters>]
```

## DESCRIPTION
Add Permissions to a Work Item Area

## EXAMPLES

### Example 1
```powershell
PS C:\> {{ Add example code here }}
```

{{ Add example description here }}

## PARAMETERS

### -AreaID
@{Text=}

```yaml
Type: Int32
Parameter Sets: ByProjectAndAreaIdAndUser, ByProjectAndAreaIdAndGroup, ByProjectAndAreaIdAndDescriptor
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AreaPath
@{Text=}

```yaml
Type: String
Parameter Sets: ByProjectAndAreaPathAndGroup, ByProjectAndAreaPathAndUser, ByProjectAndAreaPathAndDescriptor
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
Parameter Sets: ByProjectAndAreaPathAndDescriptor, ByProjectAndAreaIdAndDescriptor
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
Parameter Sets: ByProjectAndAreaIdAndUser, ByProjectAndAreaPathAndUser
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
Parameter Sets: ByProjectAndAreaPathAndGroup, ByProjectAndAreaIdAndGroup
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
Type: VSTeamWorkItemAreaPermissions
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
Type: VSTeamWorkItemAreaPermissions
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

