---
id: Get-VSTeamGroup
title: Get-VSTeamGroup
hide_title: true
hide_table_of_contents: false
custom_edit_url: https://github.com/MethodsAndPractices/vsteam/edit/master/.docs/Get-VSTeamGroup.md
description: 
keywords:
  - vsteam
  - cmdlet
  - azure devops
---

# Get-VSTeamGroup

## SYNOPSIS
Returns a Group or List of Groups.

## SYNTAX

### List (Default)
```
Get-VSTeamGroup [-SubjectTypes <String[]>] [-ScopeDescriptor <String>] [<CommonParameters>]
```

### ListByProjectName
```
Get-VSTeamGroup [-SubjectTypes <String[]>] [-ProjectName] <String> [<CommonParameters>]
```

### ByGroupDescriptor
```
Get-VSTeamGroup -Descriptor <String> [<CommonParameters>]
```

## DESCRIPTION
Returns a Group or List of Groups.

## EXAMPLES

### EXAMPLE 1
```
PS C:\> $group = Get-VSTeamGroup | ? DisplayName -eq 'Endpoint Administrators'
```

Assigns Endpoint Administrators group to $group variable.

## PARAMETERS

### -ProjectName
Specifies the team project for which this function operates.

You can tab complete from a list of available projects.

You can use Set-VSTeamDefaultProject to set a default project so you do not have to pass the ProjectName with each call.

```yaml
Type: String
Parameter Sets: ListByProjectName
Aliases:

Required: True
Position: 0
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SubjectTypes
A comma separated list of user subject subtypes to reduce the retrieved results.
Valid subject types:

- vssgp (Azure DevOps Group)
- aadgp (Azure Active Directory Group)

```yaml
Type: String[]
Parameter Sets: List, ListByProjectName
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ScopeDescriptor
Specify a non-default scope (collection, project) to search for groups.

```yaml
Type: String
Parameter Sets: List
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Descriptor
The descriptor of the desired graph group.

```yaml
Type: String
Parameter Sets: ByGroupDescriptor
Aliases: GroupDescriptor

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

## NOTES

## RELATED LINKS

