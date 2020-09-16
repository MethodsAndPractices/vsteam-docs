---
id: Remove-VSTeamTaskGroup
title: Remove-VSTeamTaskGroup
hide_title: true
hide_table_of_contents: false
custom_edit_url: https://github.com/MethodsAndPractices/vsteam/edit/master/.docs/Remove-VSTeamTaskGroup.md
description: 
keywords:
  - vsteam
  - cmdlet
  - azure devops
---

# Remove-VSTeamTaskGroup

## SYNOPSIS
Removes a task group

## SYNTAX

```
Remove-VSTeamTaskGroup -Id <String[]> [-Force] [-ProjectName] <String> [-WhatIf] [-Confirm]
 [<CommonParameters>]
```

## DESCRIPTION
Removes a task group

## EXAMPLES

### EXAMPLE 1
```
$projectName = "some_project_name"
$taskGroup = Get-VSTeamTaskGroup -Name "taskName" -ProjectName $projectName

$methodParameters = @{
   Id                       = $taskGroup.id
   ProjectName              = $projectName
   Force                    = $true
}

Remove-VSTeamTaskGroup @methodParameters
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
Type: String[]
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

### System.String[]
System.String

## OUTPUTS

### System.Object
## NOTES

## RELATED LINKS

[Add-VSTeamTaskGroup]()

[Get-VSTeamTaskGroup]()

[Update-VSTeamTaskGroup]()


