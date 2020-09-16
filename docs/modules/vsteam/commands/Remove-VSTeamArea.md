---
id: Remove-VSTeamArea
title: Remove-VSTeamArea
hide_title: true
hide_table_of_contents: false
custom_edit_url: https://github.com/MethodsAndPractices/vsteam/edit/master/.docs/Remove-VSTeamArea.md
description: 
keywords:
  - vsteam
  - cmdlet
  - azure devops
---

# Remove-VSTeamArea

## SYNOPSIS
Removes an existing area from the project

## SYNTAX

```
Remove-VSTeamArea [-ReClassifyId <Int32>] [-Path <String>] [-ProjectName] <String> [-Force] [-WhatIf]
 [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
Removes an existing area from the project

## EXAMPLES

### EXAMPLE 1
```
PS C:\> Remove-VSTeamArea -ProjectName Demo -Path "\MyIteration\Path"
```

This command removes an existing area with the path MyIteration/Path to the Demo project.
Any work items that are assigned to that path get reassigned to the root area, since no reclassification id has been given.

### EXAMPLE 2
```
PS C:\> Remove-VSTeamArea -ProjectName "Demo" -Path "\MyIteration\Path" -ReClassifyId 19
```

This command removes an existing area with the path \MyIteration\Path to the Demo project.
Any work items that are assigned to that path get reassigned to the area with the id 19.

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

### -Path
Path of the area node.

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

### -ReClassifyId
Id of an area where work items should be reassigned to if they are currently assigned to the area being deleted.

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

## OUTPUTS

### System.Object
## NOTES
This function is a wrapper of the base function Remove-VSTeamClassificationNode.md.

## RELATED LINKS

[Remove-VSTeamClassificationNode]()

[Remove-VSTeamIteration]()


