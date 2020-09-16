---
id: Get-VSTeamWorkItemType
title: Get-VSTeamWorkItemType
hide_title: true
hide_table_of_contents: false
custom_edit_url: https://github.com/MethodsAndPractices/vsteam/edit/master/.docs/Get-VSTeamWorkItemType.md
description: 
keywords:
  - vsteam
  - cmdlet
  - azure devops
---

# Get-VSTeamWorkItemType

## SYNOPSIS
Gets a list of all Work Item Types or a single work item type.

## SYNTAX

```
Get-VSTeamWorkItemType [-ProjectName] <String> [-WorkItemType <String>] [<CommonParameters>]
```

## DESCRIPTION
Gets a list of all Work Item Types or a single work item type.

## EXAMPLES

### EXAMPLE 1
```
PS R:\repos\vsteam> Get-WorkItemType -ProjectName test -WorkItemType 'Code Review Response'
```

This command gets a single work item type.

## PARAMETERS

### -ProjectName
Specifies the team project for which this function operates.

You can tab complete from a list of available projects.

You can use Set-VSTeamDefaultProject to set a default project so you do not have to pass the ProjectName with each call.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: True
Position: 0
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -WorkItemType
The type of work item to retrieve.

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
## OUTPUTS

### System.Object
## NOTES
The JSON returned has empty named items i.e.
"": "To Do" This causes issues with the ConvertFrom-Json CmdLet. 
Therefore, all "": are replaced with "_end":

## RELATED LINKS

[Set-VSTeamAccount]()


