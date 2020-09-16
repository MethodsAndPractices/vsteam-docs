---
id: Remove-VSTeamProject
title: Remove-VSTeamProject
hide_title: true
hide_table_of_contents: false
custom_edit_url: https://github.com/MethodsAndPractices/vsteam/edit/master/.docs/Remove-VSTeamProject.md
description: 
keywords:
  - vsteam
  - cmdlet
  - azure devops
---

# Remove-VSTeamProject

## SYNOPSIS
Deletes the Team Project from your Team Services account.

## SYNTAX

```
Remove-VSTeamProject [-Force] -Name <String> [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
This will permanently delete your Team Project from your Team Services account.

This function takes a DynamicParam for ProjectName that can be read from the Pipeline by Property Name

## EXAMPLES

### EXAMPLE 1
```
PS C:\> Remove-VSTeamProject 'MyProject'
```

You will be prompted for confirmation and the project will be deleted.

### EXAMPLE 2
```
PS C:\> Remove-VSTeamProject 'MyProject' -Force
```

You will NOT be prompted for confirmation and the project will be deleted.

### EXAMPLE 3
```
PS C:\> Get-VSTeamProject | Remove-VSTeamProject -Force
```

This will remove all projects

## PARAMETERS

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
Parameter Sets: (All)
Aliases: ProjectName

Required: True
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

## OUTPUTS

## NOTES

## RELATED LINKS

[Set-VSTeamAccount]()

[Add-VSTeamProject]()


