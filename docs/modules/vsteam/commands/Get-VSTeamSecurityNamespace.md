---
id: Get-VSTeamSecurityNamespace
title: Get-VSTeamSecurityNamespace
hide_title: true
hide_table_of_contents: false
custom_edit_url: https://github.com/MethodsAndPractices/vsteam/edit/master/.docs/Get-VSTeamSecurityNamespace.md
description: 
keywords:
  - vsteam
  - cmdlet
  - azure devops
---

# Get-VSTeamSecurityNamespace

## SYNOPSIS
List all security namespaces or just the specified namespace.

## SYNTAX

### List (Default)
```
Get-VSTeamSecurityNamespace [-LocalOnly] [<CommonParameters>]
```

### ByNamespaceName
```
Get-VSTeamSecurityNamespace -Name <String> [<CommonParameters>]
```

### ByNamespaceId
```
Get-VSTeamSecurityNamespace -Id <Guid> [<CommonParameters>]
```

## DESCRIPTION
List all security namespaces or just the specified namespace.

## EXAMPLES

### Example 1
```powershell
PS C:\> {{ Add example code here }}
```

{{ Add example description here }}

## PARAMETERS

### -Id
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

### -Name
Security namespace name.

```yaml
Type: String
Parameter Sets: ByNamespaceName
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LocalOnly
If true, retrieve only local security namespaces.

```yaml
Type: SwitchParameter
Parameter Sets: List
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

### VSTeamSecurityNamespace
## NOTES

## RELATED LINKS

