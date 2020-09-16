---
id: Add-VSTeamProject
title: Add-VSTeamProject
hide_title: true
hide_table_of_contents: false
custom_edit_url: https://github.com/MethodsAndPractices/vsteam/edit/master/.docs/Add-VSTeamProject.md
description: 
keywords:
  - vsteam
  - cmdlet
  - azure devops
---

# Add-VSTeamProject

## SYNOPSIS
Adds a Team Project to your account.

## SYNTAX

```
Add-VSTeamProject [-ProjectName] <String> [-Description <String>] [-TFVC] [-ProcessTemplate <String>]
 [<CommonParameters>]
```

## DESCRIPTION
This will create a new Team Project in your Team Foundation Server or Team Services account.

## EXAMPLES

### EXAMPLE 1
```
PS C:\> Add-VSTeamProject 'MyProject'
```

This will add a project name MyProject with no description using the Scrum process template and Git source control.

### EXAMPLE 2
```
PS C:\> Add-VSTeamProject 'MyProject' -TFVC -ProcessTemplate Agile
```

This will add a project name MyProject with no description using the Agile process template and TFVC source control.

## PARAMETERS

### -ProjectName
The name of the project to create.

```yaml
Type: String
Parameter Sets: (All)
Aliases: Name

Required: True
Position: 0
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ProcessTemplate
The name of the process template to use for the project.

You can tab complete from a list of available projects.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: Scrum
Accept pipeline input: False
Accept wildcard characters: False
```

### -Description
The description of the team project.

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

### -TFVC
Switches the source control from Git to TFVC.

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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

[Set-VSTeamAccount]()

[Remove-VSTeamProject]()

[Get-VSTeamProcess]()


