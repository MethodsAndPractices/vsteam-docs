---
id: Remove-VSTeamWorkItem
title: Remove-VSTeamWorkItem
hide_title: true
hide_table_of_contents: false
custom_edit_url: https://github.com/MethodsAndPractices/vsteam/edit/master/.docs/Remove-VSTeamWorkItem.md
description: 
keywords:
  - vsteam
  - cmdlet
  - azure devops
---

# Remove-VSTeamWorkItem

## SYNOPSIS
Deletes the specified work item and sends it to the Recycle Bin, so that it can be restored back, if required.
Optionally, if the destroy parameter has been set to true, it destroys the work item permanently.
WARNING: If the destroy parameter is set to true, work items deleted by this command will NOT go to recycle-bin and there is no way to restore/recover them after deletion.
It is recommended NOT to use this parameter.
If you do, please use this parameter with extreme caution.

## SYNTAX

```
Remove-VSTeamWorkItem -Id <Int32[]> [-Destroy] [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
Deletes the specified work item and sends it to the Recycle Bin, so that it can be restored back, if required.
Optionally, if the destroy parameter has been set to true, it destroys the work item permanently.
WARNING: If the destroy parameter is set to true, work items deleted by this command will NOT go to recycle-bin and there is no way to restore/recover them after deletion.
It is recommended NOT to use this parameter.
If you do, please use this parameter with extreme caution.

## EXAMPLES

### EXAMPLE 1
```
PS C:\> Remove-VSTeamWorkItem -Id 47,48 -Force
```

This command deletes work items with IDs 47 and 48 by using the IDs parameter.

### EXAMPLE 2
```
PS C:\> Remove-VSTeamWorkItem -Id 47
```

This command deletes the work item with ID 47 by using the ID parameter.

### EXAMPLE 3
```
PS C:\> Remove-VSTeamWorkItem -Id 47 -Destroy -Force
```

This command deletes work item with IDs 47 permanently by using the Destroy parameter.

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

### -Destroy
Optional parameter, if set to true, the work item is deleted permanently.
Please note: the destroy action is PERMANENT and cannot be undone.

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
Prompts you for confirmation before running the function.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
Shows what would happen if the function runs.
The function is not run.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### System.String
ProjectName

## OUTPUTS

## NOTES
If you do not set the default project by called Set-VSTeamDefaultProject before calling Get-VSTeamWorkItem you will have to type in the names.

## RELATED LINKS

