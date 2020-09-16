---
id: Get-VSTeamReleaseDefinition
title: Get-VSTeamReleaseDefinition
hide_title: true
hide_table_of_contents: false
custom_edit_url: https://github.com/MethodsAndPractices/vsteam/edit/master/.docs/Get-VSTeamReleaseDefinition.md
description: 
keywords:
  - vsteam
  - cmdlet
  - azure devops
---

# Get-VSTeamReleaseDefinition

## SYNOPSIS
Gets the release definitions for a team project.

## SYNTAX

### List (Default)
```
Get-VSTeamReleaseDefinition [-Expand <String>] [-ProjectName] <String> [<CommonParameters>]
```

### ByID
```
Get-VSTeamReleaseDefinition -Id <Int32[]> [-ProjectName] <String> [<CommonParameters>]
```

### ByIdJson
```
Get-VSTeamReleaseDefinition -Id <Int32[]> [-JSON] [-ProjectName] <String> [<CommonParameters>]
```

### ByIdRaw
```
Get-VSTeamReleaseDefinition -Id <Int32[]> [-raw] [-ProjectName] <String> [<CommonParameters>]
```

## DESCRIPTION
The Get-VSTeamReleaseDefinition function gets the release definitions for a team project.

The project name is a Dynamic Parameter which may not be displayed in the syntax above but is mandatory.

With just a project name, this function gets all of the release definitions for that team project.

You can also specify a particular release definition by ID.

## EXAMPLES

### EXAMPLE 1
```
PS C:\> Get-VSTeamReleaseDefinition -ProjectName demo | Format-List *
```

This command gets a list of all release definitions in the demo project.

The pipeline operator (|) passes the data to the Format-List cmdlet, which displays all available properties (*) of the release definition objects.

### EXAMPLE 2
```
PS C:\> Get-VSTeamReleaseDefinition -ProjectName Demo -id 2 -Json
```

This command returns the raw object returned from the server formatted as a JSON string.

### EXAMPLE 3
```
PS C:\> Get-VSTeamReleaseDefinition -ProjectName Demo -id 2 -Raw
```

This command returns the raw object returned from the server.

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

### -Expand
Specifies which property should be expanded in the list of Release Definition (environments, artifacts, none).

```yaml
Type: String
Parameter Sets: List
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Id
Specifies one or more release definitions by ID.

To specify multiple IDs, use commas to separate the IDs.

To find the ID of a release definition, type Get-VSTeamReleaseDefinition.

```yaml
Type: Int32[]
Parameter Sets: ByID, ByIdJson, ByIdRaw
Aliases: ReleaseDefinitionID

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -JSON
Converts the raw response into JSON and displays in the console.
This is required when you need to use the object to send back. 
Without this switch the JSON produced from the returned object will not match the expected shape of the JSON for sending back to server.

```yaml
Type: SwitchParameter
Parameter Sets: ByIdJson
Aliases:

Required: True
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -raw
Returns the raw response.
This is required when you need to use the object to send back. 
Without this switch the object produced from the returned object will not match the expected shape of the JSON for sending back to server.

```yaml
Type: SwitchParameter
Parameter Sets: ByIdRaw
Aliases:

Required: True
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### Int[]
## OUTPUTS

### Team.ReleaseDefinition
## NOTES

## RELATED LINKS

[Set-VSTeamAccount]()

[Set-VSTeamDefaultProject]()

[Add-VSTeamReleaseDefinition]()

[Remove-VSTeamReleaseDefinition]()


