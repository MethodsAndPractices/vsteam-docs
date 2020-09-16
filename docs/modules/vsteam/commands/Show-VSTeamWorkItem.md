---
id: Show-VSTeamWorkItem
title: Show-VSTeamWorkItem
hide_title: true
hide_table_of_contents: false
custom_edit_url: https://github.com/MethodsAndPractices/vsteam/edit/master/.docs/Show-VSTeamWorkItem.md
description: 
keywords:
  - vsteam
  - cmdlet
  - azure devops
---

# Show-VSTeamWorkItem

## SYNOPSIS
Opens the work item in the default browser.

## SYNTAX

```
Show-VSTeamWorkItem -Id <Int32> -ProjectName <String> [<CommonParameters>]
```

## DESCRIPTION
Opens the work item in the default browser.

## EXAMPLES

### EXAMPLE 1
```
PS C:\> Show-VSTeamWorkItem -ProjectName Demo -Id 3
```

This command will open a web browser with the summary of work item 3.

## PARAMETERS

### -Id
Specifies work item by ID.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases: WorkItemID

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### -ProjectName
{{ Fill ProjectName Description }}

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

### Team.WorkItem
## NOTES
You can pipe the WorkItem ID to this function.

## RELATED LINKS

[Set-VSTeamAccount]()

[Set-VSTeamDefaultProject]()

[Add-VSTeamWorkItem]()

[Get-VSTeamWorkItem]()


