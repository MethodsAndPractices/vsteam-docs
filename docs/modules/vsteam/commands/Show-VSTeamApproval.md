---
id: Show-VSTeamApproval
title: Show-VSTeamApproval
hide_title: true
hide_table_of_contents: false
custom_edit_url: https://github.com/MethodsAndPractices/vsteam/edit/master/.docs/Show-VSTeamApproval.md
description: 
keywords:
  - vsteam
  - cmdlet
  - azure devops
---

# Show-VSTeamApproval

## SYNOPSIS
Opens the release associated with the waiting approval in the default browser.

## SYNTAX

```
Show-VSTeamApproval [-ReleaseDefinitionId] <Int32> [-ProjectName] <String> [<CommonParameters>]
```

## DESCRIPTION
Opens the release associated with the waiting approval in the default browser.

## EXAMPLES

### EXAMPLE 1
```
PS C:\> Get-VSTeamApproval -ProjectName Demo | Show-VSTeamApproval
```

This command opens a web browser showing the release requiring approval.

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

### -ReleaseDefinitionId
Only approvals for the release id provided will be returned.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases: Id

Required: True
Position: 1
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

### Team.BuildDefinition
## NOTES
This function has a Dynamic Parameter for ProjectName that specifies the project for which this function gets build definitions.

You can tab complete from a list of available projects.

You can use Set-VSTeamDefaultProject to set a default project so you do not have to pass the ProjectName with each call.

You can pipe build definition IDs to this function.

## RELATED LINKS

[Set-VSTeamAccount]()

[Set-VSTeamDefaultProject]()

[Add-VSTeamBuildDefinition]()

[Remove-VSTeamBuildDefinition]()


