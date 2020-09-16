---
id: Add-VSTeamBuildDefinition
title: Add-VSTeamBuildDefinition
hide_title: true
hide_table_of_contents: false
custom_edit_url: https://github.com/MethodsAndPractices/vsteam/edit/master/.docs/Add-VSTeamBuildDefinition.md
description: 
keywords:
  - vsteam
  - cmdlet
  - azure devops
---

# Add-VSTeamBuildDefinition

## SYNOPSIS
Creates a new build definition from a JSON file.

## SYNTAX

```
Add-VSTeamBuildDefinition [-InFile] <String> [-ProjectName] <String> [<CommonParameters>]
```

## DESCRIPTION
Reads a JSON file off disk and uses that file to create a new build definition in the provided project.

You must call Set-VSTeamAccount before calling this function.

## EXAMPLES

### EXAMPLE 1
```
PS C:\> Add-VSTeamBuildDefinition -ProjectName Demo -InFile build.json
```

This command reads build.json and creates a new build definition from it on the demo team project.

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

### -InFile
Path and file name to the JSON file that contains the definition to be created.
If the path is omitted, the default is the current location.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: True
Position: 1
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### System.String
## OUTPUTS

## NOTES
This function has a Dynamic Parameter for ProjectName that specifies the project for which this function gets build definitions.

You can tab complete from a list of available projects.

You can use Set-VSTeamDefaultProject to set a default project so you do not have to pass the ProjectName with each call.

## RELATED LINKS

