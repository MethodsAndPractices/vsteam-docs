---
id: Get-VSTeamWorkItem
title: Get-VSTeamWorkItem
hide_title: true
hide_table_of_contents: false
custom_edit_url: https://github.com/MethodsAndPractices/vsteam/edit/master/.docs/Get-VSTeamWorkItem.md
description: 
keywords:
  - vsteam
  - cmdlet
  - azure devops
---

# Get-VSTeamWorkItem

## SYNOPSIS
Returns one or more a work items from your project.

## SYNTAX

### ByID (Default)
```
Get-VSTeamWorkItem -Id <Int32[]> [-Expand <String>] [-Fields <String[]>] [<CommonParameters>]
```

### List
```
Get-VSTeamWorkItem -Id <Int32[]> [-ErrorPolicy <String>] [-Expand <String>] [-Fields <String[]>]
 [<CommonParameters>]
```

## DESCRIPTION
Returns one or more a work items from your project.

## EXAMPLES

### EXAMPLE 1
```
PS C:\> Get-VSTeamWorkItem -Id 47,48
```

This command gets work items with IDs 47 and 48 by using the IDs parameter.

## PARAMETERS

### -Id
The id of one or more work items.

```yaml
Type: Int32[]
Parameter Sets: (All)
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -ErrorPolicy
The flag to control error policy in a bulk get work items request. 
The acceptable values for this parameter are:

- Fail
- Omit

```yaml
Type: String
Parameter Sets: List
Aliases:

Required: False
Position: Named
Default value: Omit
Accept pipeline input: False
Accept wildcard characters: False
```

### -Fields
Comma-separated list of requested fields.

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

### -Expand
Comma-separated list of requested fields. 
The acceptable values for this parameter are:

- None
- Relations
- Fields
- Links
- All

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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### System.String
ProjectName

WorkItemType

## OUTPUTS

## NOTES
WorkItemType is a dynamic parameter and use the default project value to query their validate set.

If you do not set the default project by called Set-VSTeamDefaultProject before calling Get-VSTeamWorkItem you will have to type in the names.

## RELATED LINKS

