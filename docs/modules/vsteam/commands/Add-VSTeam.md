---
id: Add-VSTeam
title: Add-VSTeam
hide_title: true
hide_table_of_contents: false
custom_edit_url: https://github.com/MethodsAndPractices/vsteam/edit/master/.docs/Add-VSTeam.md
description: 
keywords:
  - vsteam
  - cmdlet
  - azure devops
---

# Add-VSTeam

## SYNOPSIS
Adds a team to a team project.

## SYNTAX

```
Add-VSTeam [-Name] <String> [[-Description] <String>] [-ProjectName] <String> [<CommonParameters>]
```

## DESCRIPTION
Adds a team to a team project.

## EXAMPLES

### Example 1
```powershell
PS C:\> {{ Add example code here }}
```

{{ Add example description here }}

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

### -Description
The description of the team.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Name
The name of the team

```yaml
Type: String
Parameter Sets: (All)
Aliases: TeamName

Required: True
Position: 1
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

[Get-VSTeam]()

[Remove-VSTeam]()

[Show-VSTeam]()

[Update-VSTeam]()


