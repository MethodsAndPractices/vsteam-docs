---
id: Get-VSTeamAccessControlList
title: Get-VSTeamAccessControlList
hide_title: true
hide_table_of_contents: false
custom_edit_url: https://github.com/MethodsAndPractices/vsteam/edit/master/.docs/Get-VSTeamAccessControlList.md
description: 
keywords:
  - vsteam
  - cmdlet
  - azure devops
---

# Get-VSTeamAccessControlList

## SYNOPSIS
Return a list of access control lists for the specified security namespace and token.
All ACLs in the security namespace will be retrieved if no optional parameters are provided.

## SYNTAX

### ByNamespace (Default)
```
Get-VSTeamAccessControlList -SecurityNamespace <VSTeamSecurityNamespace> [-Token <String>]
 [-Descriptors <String[]>] [-IncludeExtendedInfo] [-Recurse] [<CommonParameters>]
```

### ByNamespaceId
```
Get-VSTeamAccessControlList -SecurityNamespaceId <Guid> [-Token <String>] [-Descriptors <String[]>]
 [-IncludeExtendedInfo] [-Recurse] [<CommonParameters>]
```

## DESCRIPTION
Return a list of access control lists for the specified security namespace and token.
All ACLs in the security namespace will be retrieved if no optional parameters are provided.

## EXAMPLES

### EXAMPLE 1
```
Get-VSTeamSecurityNamespace | Select-Object -First 1 | Get-VSTeamAccessControlList
```

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
Aliases: ID

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### -Token
Security token

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

### -Descriptors
An optional filter string containing a list of identity descriptors whose ACEs should be retrieved.
If this is not set entire ACLs will be returned.

```yaml
Type: String[]
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IncludeExtendedInfo
If set, populate the extended information properties for the access control entries contained in the returned lists.

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

### -Recurse
If true and this is a hierarchical namespace, return child ACLs of the specified token.

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

### VSTeamAccessControlList
## NOTES

## RELATED LINKS

