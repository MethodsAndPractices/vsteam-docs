---
id: Update-VSTeamProject
title: Update-VSTeamProject
hide_title: true
hide_table_of_contents: false
custom_edit_url: https://github.com/MethodsAndPractices/vsteam/edit/master/.docs/Update-VSTeamProject.md
description: 
keywords:
  - vsteam
  - cmdlet
  - azure devops
---

# Update-VSTeamProject

## SYNOPSIS
Updates the project name, description or both.

## SYNTAX

### ByName (Default)
```
Update-VSTeamProject [-NewName <String>] [-NewDescription <String>] [-Force] [-Name <String>] [-WhatIf]
 [-Confirm] [<CommonParameters>]
```

### ByID
```
Update-VSTeamProject [-NewName <String>] [-NewDescription <String>] [-Force] [-Id <String>] [-WhatIf]
 [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
Updates the project name, description or both.

## EXAMPLES

### EXAMPLE 1
```
PS C:\> Update-VSTeamProject -Name Demo -NewName aspDemo
```

This command changes the name of your project from Demo to aspDemo.

## PARAMETERS

### -NewName
The new name for the project.

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

### -NewDescription
The new description for the project.

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

### -Id
The id of the project to update.

```yaml
Type: String
Parameter Sets: ByID
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName)
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

### -Name
{{ Fill Name Description }}

```yaml
Type: String
Parameter Sets: ByName
Aliases: ProjectName

Required: False
Position: Named
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

## RELATED LINKS

