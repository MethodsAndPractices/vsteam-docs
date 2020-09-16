---
id: Update-VSTeamWorkItem
title: Update-VSTeamWorkItem
hide_title: true
hide_table_of_contents: false
custom_edit_url: https://github.com/MethodsAndPractices/vsteam/edit/master/.docs/Update-VSTeamWorkItem.md
description: 
keywords:
  - vsteam
  - cmdlet
  - azure devops
---

# Update-VSTeamWorkItem

## SYNOPSIS
Update a work item in your project.

## SYNTAX

```
Update-VSTeamWorkItem -Id <Int32> [-Title <String>] [-Description <String>] [-IterationPath <String>]
 [-AssignedTo <String>] [-AdditionalFields <Hashtable>] [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
Update-VSTeamWorkItem will update a new work item in your project.

## EXAMPLES

### EXAMPLE 1
```
PS C:\> Set-VSTeamDefaultProject Demo
PS C:\> Update-VSTeamWorkItem -WorkItemId 1 -Title "Updated Work Item"

ID Title              Status
-- ---
id: Update-VSTeamWorkItem
title: Update-VSTeamWorkItem
hide_title: true
hide_table_of_contents: false
custom_edit_url: https://github.com/MethodsAndPractices/vsteam/edit/master/.docs/Update-VSTeamWorkItem.md
description: 
keywords:
  - vsteam
  - cmdlet
  - azure devops
------
id: Update-VSTeamWorkItem
title: Update-VSTeamWorkItem
hide_title: true
hide_table_of_contents: false
custom_edit_url: https://github.com/MethodsAndPractices/vsteam/edit/master/.docs/Update-VSTeamWorkItem.md
description: 
keywords:
  - vsteam
  - cmdlet
  - azure devops
-----              ---
id: Update-VSTeamWorkItem
title: Update-VSTeamWorkItem
hide_title: true
hide_table_of_contents: false
custom_edit_url: https://github.com/MethodsAndPractices/vsteam/edit/master/.docs/Update-VSTeamWorkItem.md
description: 
keywords:
  - vsteam
  - cmdlet
  - azure devops
---
6  Updated Work Item  To Do
```

### EXAMPLE 3
```
PS C:\> Set-VSTeamDefaultProject Demo
PS C:\> $additionalFields = @{"System.Tags"= "TestTag"; "System.AreaPath" = "Project\\MyPath"}
PS C:\> Update-VSTeamWorkItem -Title "Updated Work Item" -WorkItemType Task -Description "This is a description" -AdditionalFields $additionalFields

ID Title          Status
-- ---
id: Update-VSTeamWorkItem
title: Update-VSTeamWorkItem
hide_title: true
hide_table_of_contents: false
custom_edit_url: https://github.com/MethodsAndPractices/vsteam/edit/master/.docs/Update-VSTeamWorkItem.md
description: 
keywords:
  - vsteam
  - cmdlet
  - azure devops
------
6  Updated Work Item  To Do
```

## PARAMETERS

### -Id
The id of the work item.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -Title
The title of the work item

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

### -Description
The Description of the work item

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

### -IterationPath
The IterationPath of the work item

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

### -AssignedTo
The email address of the user this work item will be assigned to.

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

### -AdditionalFields
Hashtable which contains a key value pair of any field that should be filled with values.
Key is the internal name of the field and the value is the content of the field being filled.
E.g.
the internal name for the area path is 'System.AreaPath'.

```yaml
Type: Hashtable
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force
Forces the function without confirmation

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

### -Confirm
Prompts you for confirmation before running the cmdlet.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
Shows what would happen if the cmdlet runs.
The cmdlet is not run.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi

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

If you do not set the default project by called Set-VSTeamDefaultProject before calling Update-VSTeamWorkItem you will have to type in the names.

Any of the basic work item parameters defined in this method, will cause an exception if also added to the parameter AdditionalFields, since it is redundant.
Either only use the parameter OR define them in the AdditionalFields parameter.

## RELATED LINKS

