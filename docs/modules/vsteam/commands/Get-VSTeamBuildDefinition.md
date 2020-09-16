---
id: Get-VSTeamBuildDefinition
title: Get-VSTeamBuildDefinition
hide_title: true
hide_table_of_contents: false
custom_edit_url: https://github.com/MethodsAndPractices/vsteam/edit/master/.docs/Get-VSTeamBuildDefinition.md
description: 
keywords:
  - vsteam
  - cmdlet
  - azure devops
---

# Get-VSTeamBuildDefinition

## SYNOPSIS
Gets the build definitions for a team project.

## SYNTAX

### List (Default)
```
Get-VSTeamBuildDefinition [-Filter <String>] [-Type <String>] [-ProjectName] <String> [<CommonParameters>]
```

### ByID
```
Get-VSTeamBuildDefinition -Id <Int32[]> [-Revision <Int32>] [-ProjectName] <String> [<CommonParameters>]
```

### ByIdJson
```
Get-VSTeamBuildDefinition -Id <Int32[]> [-Revision <Int32>] [-JSON] [-ProjectName] <String>
 [<CommonParameters>]
```

### ByIdRaw
```
Get-VSTeamBuildDefinition -Id <Int32[]> [-Revision <Int32>] [-raw] [-ProjectName] <String> [<CommonParameters>]
```

## DESCRIPTION
The Get-VSTeamBuildDefinition function gets the build definitions for a team project.

The project name is a Dynamic Parameter which may not be displayed in the syntax above but is mandatory.

With just a project name, this function gets all of the build definitions for that team project.

You can also specify a particular build definition by ID.

## EXAMPLES

### EXAMPLE 1
```
PS C:\> Get-VSTeamBuildDefinition -ProjectName Demo | Format-List *
```

This command gets a list of all build definitions in the demo project.

The pipeline operator (|) passes the data to the Format-List cmdlet, which displays all available properties (*) of the build definition objects.

### EXAMPLE 2
```
PS C:\> Get-VSTeamBuildDefinition -ProjectName Demo -id 2 -Json
```

This command returns the raw object returned from the server formatted as a JSON string.

### EXAMPLE 3
```
PS C:\> Get-VSTeamBuildDefinition -ProjectName Demo -id 2 -Raw
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

### -Filter
Filters to definitions whose names equal this value.
Append a * to filter to definitions whose names start with this value.
For example: MS*

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

### -Type
The type of the build definitions to retrieve.
The acceptable values for this parameter are:

- build
- xaml
- All

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

### -Id
Specifies one or more build definitions by ID.

To specify multiple IDs, use commas to separate the IDs.

To find the ID of a build definition, type Get-VSTeamBuildDefinition.

```yaml
Type: Int32[]
Parameter Sets: ByID
Aliases: BuildDefinitionID

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

```yaml
Type: Int32[]
Parameter Sets: ByIdJson, ByIdRaw
Aliases: BuildDefinitionID

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### -Revision
Specifies the specific revision number of the definition to retrieve.

```yaml
Type: Int32
Parameter Sets: ByID, ByIdJson, ByIdRaw
Aliases:

Required: False
Position: Named
Default value: -1
Accept pipeline input: False
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

## OUTPUTS

### Team.BuildDefinition
## NOTES
You can pipe build definition IDs to this function.

## RELATED LINKS

[Set-VSTeamAccount]()

[Set-VSTeamDefaultProject]()

[Add-VSTeamBuildDefinition]()

[Remove-VSTeamBuildDefinition]()


