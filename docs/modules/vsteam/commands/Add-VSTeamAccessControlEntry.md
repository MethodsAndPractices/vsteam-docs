---
id: Add-VSTeamAccessControlEntry
title: Add-VSTeamAccessControlEntry
hide_title: true
hide_table_of_contents: false
custom_edit_url: https://github.com/MethodsAndPractices/vsteam/edit/master/.docs/Add-VSTeamAccessControlEntry.md
description: 
keywords:
  - vsteam
  - cmdlet
  - azure devops
---

# Add-VSTeamAccessControlEntry

## SYNOPSIS
Add or update ACEs in the ACL for the provided token.
The request contains the target token, a list of ACEs and a optional merge parameter.
In the case of a collision (by identity descriptor) with an existing ACE in the ACL, the "merge" parameter determines the behavior.
If set, the existing ACE has its allow and deny merged with the incoming ACE's allow and deny.
If unset, the existing ACE is displaced.

Note: This is a low-level function.
You should really use a high level function (Add-VSTeam Permission / Set-VSTeam Permission / Get-VSTeam*Permission) unless you know what you are doing.

## SYNTAX

### ByNamespace (Default)
```
Add-VSTeamAccessControlEntry -SecurityNamespace <VSTeamSecurityNamespace> -Token <String> -Descriptor <String>
 -AllowMask <Int32> -DenyMask <Int32> [<CommonParameters>]
```

### ByNamespaceId
```
Add-VSTeamAccessControlEntry -SecurityNamespaceId <Guid> -Token <String> -Descriptor <String>
 -AllowMask <Int32> -DenyMask <Int32> [<CommonParameters>]
```

## DESCRIPTION
Add or update ACEs in the ACL for the provided token.
The request contains the target token, a list of ACEs and a optional merge parameter.
In the case of a collision (by identity descriptor) with an existing ACE in the ACL, the "merge" parameter determines the behavior.
If set, the existing ACE has its allow and deny merged with the incoming ACE's allow and deny.
If unset, the existing ACE is displaced.

Note: This is a low-level function.
You should really use a high level function (Add-VSTeam Permission / Set-VSTeam Permission / Get-VSTeam*Permission) unless you know what you are doing.

## EXAMPLES

### Example 1
```powershell
PS C:\> {{ Add example code here }}
```

{{ Add example description here }}

## PARAMETERS

### -SecurityNamespace
Security namespace identifier.

```yaml
Type: VSTeamSecurityNamespace
Parameter Sets: ByNamespace
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -SecurityNamespaceId
Security namespace identifier.

```yaml
Type: Guid
Parameter Sets: ByNamespaceId
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Token
The security Token

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowMask
Bitmask for Allow Permissions

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

### -DenyMask
Bitmask for Deny Permissions

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

### -Descriptor
{{ Fill Descriptor Description }}

```yaml
Type: String
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

### VSTeamAccessControlEntry
## NOTES

## RELATED LINKS

