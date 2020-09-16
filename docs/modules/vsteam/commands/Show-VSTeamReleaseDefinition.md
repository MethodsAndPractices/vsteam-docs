---
id: Show-VSTeamReleaseDefinition
title: Show-VSTeamReleaseDefinition
hide_title: true
hide_table_of_contents: false
custom_edit_url: https://github.com/MethodsAndPractices/vsteam/edit/master/.docs/Show-VSTeamReleaseDefinition.md
description: 
keywords:
  - vsteam
  - cmdlet
  - azure devops
---

# Show-VSTeamReleaseDefinition

## SYNOPSIS
Opens the release definitions for a team project in the default browser.

## SYNTAX

```
Show-VSTeamReleaseDefinition [-Id <Int32>] [-ProjectName] <String> [<CommonParameters>]
```

## DESCRIPTION
Opens the release definitions for a team project in the default browser.

## EXAMPLES

### EXAMPLE 1
```
PS C:\> Show-VSTeamReleaseDefinition -ProjectName Demo
```

This command will open a web browser with All Release Definitions for this project showing.

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
Specifies release definition by ID.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases: ReleaseDefinitionID

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

### Team.ReleaseDefinition
## NOTES
You can pipe the release definition ID to this function.

## RELATED LINKS

[Set-VSTeamAccount]()

[Set-VSTeamDefaultProject]()

[Add-VSTeamReleaseDefinition]()

[Remove-VSTeamReleaseDefinition]()


