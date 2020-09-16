---
id: Add-VSTeamWorkItem
title: Add-VSTeamWorkItem
hide_title: true
hide_table_of_contents: false
custom_edit_url: https://github.com/MethodsAndPractices/vsteam/edit/master/.docs/Add-VSTeamWorkItem.md
description: 
keywords:
  - vsteam
  - cmdlet
  - azure devops
---

# Add-VSTeamWorkItem

## SYNOPSIS
Adds a work item to your project.

## SYNTAX

```
Add-VSTeamWorkItem -Title <String> [-Description <String>] [-IterationPath <String>] [-AssignedTo <String>]
 [-ParentId <Int32>] [-AdditionalFields <Hashtable>] [[-ProjectName] <String>] -WorkItemType <String>
 [<CommonParameters>]
```

## DESCRIPTION
Add-VSTeamWorkItem will add a new work item to your project.

## EXAMPLES

### EXAMPLE 1
```
PS C:\> Set-VSTeamDefaultProject Demo
PS C:\> Add-VSTeamWorkItem -Title "New Work Item" -WorkItemType Task

ID Title          Status
-- ---
id: Add-VSTeamWorkItem
title: Add-VSTeamWorkItem
hide_title: true
hide_table_of_contents: false
custom_edit_url: https://github.com/MethodsAndPractices/vsteam/edit/master/.docs/Add-VSTeamWorkItem.md
description: 
keywords:
  - vsteam
  - cmdlet
  - azure devops
------
id: Add-VSTeamWorkItem
title: Add-VSTeamWorkItem
hide_title: true
hide_table_of_contents: false
custom_edit_url: https://github.com/MethodsAndPractices/vsteam/edit/master/.docs/Add-VSTeamWorkItem.md
description: 
keywords:
  - vsteam
  - cmdlet
  - azure devops
-----          ---
id: Add-VSTeamWorkItem
title: Add-VSTeamWorkItem
hide_title: true
hide_table_of_contents: false
custom_edit_url: https://github.com/MethodsAndPractices/vsteam/edit/master/.docs/Add-VSTeamWorkItem.md
description: 
keywords:
  - vsteam
  - cmdlet
  - azure devops
---
6  New Work Item  To Do
```

### EXAMPLE 3
```
PS C:\> Set-VSTeamDefaultProject Demo
PS C:\> $additionalFields = @{"System.Tags"= "TestTag"; "System.AreaPath" = "Project\\MyPath"}
PS C:\> Add-VSTeamWorkItem -Title "New Work Item" -WorkItemType Task -Description "This is a description" -AdditionalFields $additionalFields

ID Title          Status
-- ---
id: Add-VSTeamWorkItem
title: Add-VSTeamWorkItem
hide_title: true
hide_table_of_contents: false
custom_edit_url: https://github.com/MethodsAndPractices/vsteam/edit/master/.docs/Add-VSTeamWorkItem.md
description: 
keywords:
  - vsteam
  - cmdlet
  - azure devops
------
6  New Work Item  To Do
```

## PARAMETERS

### -ProjectName
Specifies the team project for which this function operates.

You can tab complete from a list of available projects.

You can use Set-VSTeamDefaultProject to set a default project so you do not have to pass the ProjectName with each call.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: 0
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -Title
The title of the work item

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

### -WorkItemType
The type of work item to add.

You can tab complete from a list of available work item types.

You must use Set-VSTeamDefaultProject to set a default project to enable the tab completion.

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

### -ParentId
The Id of the parent work item that this work item will be related to.

```yaml
Type: Int32
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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### System.String
ProjectName

WorkItemType

## OUTPUTS

## NOTES
WorkItemType is a dynamic parameter and use the default project value to query their validate set.

If you do not set the default project by called Set-VSTeamDefaultProject before calling Add-VSTeamWorkItem you will have to type in the names.

Any of the basic work item parameters defined in this method, will cause an exception if also added to the parameter AdditionalFields, since it is redundant.
Either only use the parameter OR define them in the AdditionalFields parameter.

## RELATED LINKS

