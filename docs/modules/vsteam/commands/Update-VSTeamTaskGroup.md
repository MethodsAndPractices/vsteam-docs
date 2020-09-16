---
id: Update-VSTeamTaskGroup
title: Update-VSTeamTaskGroup
hide_title: true
hide_table_of_contents: false
custom_edit_url: https://github.com/MethodsAndPractices/vsteam/edit/master/.docs/Update-VSTeamTaskGroup.md
description: 
keywords:
  - vsteam
  - cmdlet
  - azure devops
---

# Update-VSTeamTaskGroup

## SYNOPSIS
Updates an existing task group

## SYNTAX

### ByFile
```
Update-VSTeamTaskGroup -Id <String> -InFile <String> [-Force] [-ProjectName] <String> [-WhatIf] [-Confirm]
 [<CommonParameters>]
```

### ByBody
```
Update-VSTeamTaskGroup -Id <String> -Body <String> [-Force] [-ProjectName] <String> [-WhatIf] [-Confirm]
 [<CommonParameters>]
```

## DESCRIPTION
Updates an existing task group

## EXAMPLES

### EXAMPLE 1
```
$projectName = "projectName"

$taskGroup = Get-VSTeamTaskGroup -Name "taskGroupName" -ProjectName $projectName

# Make some change, e.g.
$taskGroup.description = "new description"

$taskGroupJson = ConvertTo-Json -InputObject $taskGroup -Depth 10

Update-VSTeamTaskGroup -ProjectName $projectName -Id $taskGroup.id -Body $taskGroupJson
```

## PARAMETERS

### -Confirm
Prompts you for confirmation before running the cmdlet.

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

### -Force
Does not prompt

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

### -WhatIf
Shows what would happen if the cmdlet runs.
The cmdlet is not run.

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

### -Id
ID of the existing task group

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

### -InFile
The path to the json file that represents the task group

```yaml
Type: String
Parameter Sets: ByFile
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -Body
The json that represents the task group as a string

```yaml
Type: String
Parameter Sets: ByBody
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

### System.String
## OUTPUTS

### System.Object
## NOTES

## RELATED LINKS

[Add-VSTeamTaskGroup]()

[Get-VSTeamTaskGroup]()

[Remove-VSTeamTaskGroup]()


