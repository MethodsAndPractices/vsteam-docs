---
id: Set-VSTeamApproval
title: Set-VSTeamApproval
hide_title: true
hide_table_of_contents: false
custom_edit_url: https://github.com/MethodsAndPractices/vsteam/edit/master/.docs/Set-VSTeamApproval.md
description: 
keywords:
  - vsteam
  - cmdlet
  - azure devops
---

# Set-VSTeamApproval

## SYNOPSIS
Sets the status of approval to Approved, Rejected, Pending, or ReAssigned.

## SYNTAX

```
Set-VSTeamApproval -Id <Int32[]> -Status <String> [-Approver <String>] [-Comment <String>] [-Force]
 [-ProjectName] <String> [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
Set-VSTeamApproval sets the status of approval to Approved, Rejected, Pending, or ReAssigned.

## EXAMPLES

### EXAMPLE 1
```
PS C:\> Get-VSTeamApproval | Set-VSTeamApproval
```

This command sets all pending approvals to approved.

### EXAMPLE 2
```
PS C:\> Set-VSTeamApproval -Id 1 -Status Rejected
```

This command rejects approval with Id of 1.

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

### -Id
Specifies the approval IDs of the approvals to set.

```yaml
Type: Int32[]
Parameter Sets: (All)
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -Status
Specifies the status to set for the approval.
The acceptable values for this parameter are:

- Approved
- Rejected
- Pending
- ReAssigned

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: True
Position: Named
Default value: Approved
Accept pipeline input: False
Accept wildcard characters: False
```

### -Approver
Specifies the user to whom the approval has been re-assigned to Alias of the user chuckreinhart@outlook.com, for example.

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

### -Comment
Specifies the comment to be stored with this approval.

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

## NOTES

## RELATED LINKS

