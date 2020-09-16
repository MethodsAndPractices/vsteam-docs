---
id: Show-VSTeamBuildDefinition
title: Show-VSTeamBuildDefinition
hide_title: true
hide_table_of_contents: false
custom_edit_url: https://github.com/MethodsAndPractices/vsteam/edit/master/.docs/Show-VSTeamBuildDefinition.md
description: 
keywords:
  - vsteam
  - cmdlet
  - azure devops
---

# Show-VSTeamBuildDefinition

## SYNOPSIS
Opens the build definition in the default browser.

## SYNTAX

### List (Default)
```
Show-VSTeamBuildDefinition [-Type <String>] [-Path <String>] [-ProjectName] <String> [<CommonParameters>]
```

### ByID
```
Show-VSTeamBuildDefinition -Id <Int32[]> [-ProjectName] <String> [<CommonParameters>]
```

## DESCRIPTION
Opens the build definition in the default browser.

The project name is a Dynamic Parameter which may not be displayed in the syntax above but is mandatory.

With just a project name, this function shows all of the build definitions for that team project.

You can also specify a particular build definition by ID.

## EXAMPLES

### EXAMPLE 1
```
PS C:\> Show-VSTeamBuildDefinition -ProjectName Demo
```

This command will open a web browser with All Definitions for this project showing.

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

### -Type
The type of the build definitions to retrieve. 
The acceptable values for this parameter are:

- Mine
- All
- Queued
- XAML

If not specified, all types will be returned.

```yaml
Type: String
Parameter Sets: List
Aliases:

Required: False
Position: Named
Default value: All
Accept pipeline input: False
Accept wildcard characters: False
```

### -Path
The folder of the build definitions to retrieve.

```yaml
Type: String
Parameter Sets: List
Aliases:

Required: False
Position: Named
Default value: \
Accept pipeline input: False
Accept wildcard characters: False
```

### -Id
Specifies build definition by ID.

```yaml
Type: Int32[]
Parameter Sets: ByID
Aliases: BuildDefinitionID

Required: True
Position: Named
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
You can pipe build definition IDs to this function.

## RELATED LINKS

[Set-VSTeamAccount]()

[Set-VSTeamDefaultProject]()

[Add-VSTeamBuildDefinition]()

[Remove-VSTeamBuildDefinition]()


