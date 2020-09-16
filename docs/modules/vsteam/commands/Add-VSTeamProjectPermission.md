---
id: Add-VSTeamProjectPermission
title: Add-VSTeamProjectPermission
hide_title: true
hide_table_of_contents: false
custom_edit_url: https://github.com/MethodsAndPractices/vsteam/edit/master/.docs/Add-VSTeamProjectPermission.md
description: 
keywords:
  - vsteam
  - cmdlet
  - azure devops
---

# Add-VSTeamProjectPermission

## SYNOPSIS
Add Permissions on Project Level

## SYNTAX

### ByProjectAndUser (Default)
```
Add-VSTeamProjectPermission -Project <VSTeamProject> -User <VSTeamUser> -Allow <VSTeamProjectPermissions>
 -Deny <VSTeamProjectPermissions> [<CommonParameters>]
```

### ByProjectAndGroup
```
Add-VSTeamProjectPermission -Project <VSTeamProject> -Group <VSTeamGroup> -Allow <VSTeamProjectPermissions>
 -Deny <VSTeamProjectPermissions> [<CommonParameters>]
```

### ByProjectAndDescriptor
```
Add-VSTeamProjectPermission -Project <VSTeamProject> -Descriptor <String> -Allow <VSTeamProjectPermissions>
 -Deny <VSTeamProjectPermissions> [<CommonParameters>]
```

## DESCRIPTION
Add Permissions on Project Level

## EXAMPLES

### Example 1
```powershell
PS C:\> {{ Add example code here }}
```

{{ Add example description here }}

## PARAMETERS

### -Descriptor
@{Text=}

```yaml
Type: String
Parameter Sets: ByProjectAndDescriptor
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
Parameter Sets: ByProjectAndUser
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
Parameter Sets: ByProjectAndGroup
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
Type: VSTeamProjectPermissions
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
Type: VSTeamProjectPermissions
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

