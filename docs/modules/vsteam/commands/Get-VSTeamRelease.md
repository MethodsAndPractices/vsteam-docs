---
id: Get-VSTeamRelease
title: Get-VSTeamRelease
hide_title: true
hide_table_of_contents: false
custom_edit_url: https://github.com/MethodsAndPractices/vsteam/edit/master/.docs/Get-VSTeamRelease.md
description: 
keywords:
  - vsteam
  - cmdlet
  - azure devops
---

# Get-VSTeamRelease

## SYNOPSIS
Gets the releases for a team project.

## SYNTAX

### List (Default)
```
Get-VSTeamRelease [-searchText <String>] [-statusFilter <String>] [-expand <String>] [-definitionId <Int32>]
 [-top <Int32>] [-createdBy <String>] [-minCreatedTime <DateTime>] [-maxCreatedTime <DateTime>]
 [-queryOrder <String>] [-continuationToken <String>] [[-ProjectName] <String>] [<CommonParameters>]
```

### ByID
```
Get-VSTeamRelease -id <Int32[]> [-expand <String>] [[-ProjectName] <String>] [<CommonParameters>]
```

### ByIdJson
```
Get-VSTeamRelease -id <Int32[]> [-expand <String>] [-JSON] [[-ProjectName] <String>] [<CommonParameters>]
```

### ByIdRaw
```
Get-VSTeamRelease -id <Int32[]> [-expand <String>] [-raw] [[-ProjectName] <String>] [<CommonParameters>]
```

## DESCRIPTION
The Get-VSTeamRelease function gets the releases for a team project.

The project name is a Dynamic Parameter which may not be displayed in the syntax above but is mandatory.

With just a project name, this function gets all of the releases for that team project.

You can also specify a particular release definition by ID.

## EXAMPLES

### EXAMPLE 1
```
PS C:\> Get-VSTeamRelease -ProjectName demo | Format-List *
```

This command gets a list of all releases in the demo project.

The pipeline operator (|) passes the data to the Format-List cmdlet, which displays all available properties (*) of the release definition objects.

### EXAMPLE 2
```
PS C:\> Get-VSTeamRelease -ProjectName demo -Id 10 -Raw
```

This command returns the raw object returned from the server.

### EXAMPLE 3
```
PS C:\> Get-VSTeamRelease -ProjectName demo -Id 10 -Json
```

This command returns the raw object returned from the server formated as JSON.

## PARAMETERS

### -ProjectName
Specifies the team project for which this function operates.

You can tab complete from a list of available projects.

You can use Set-VSTeamDefaultProject to set a default project so you do not have to pass the ProjectName with each call.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: 0
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

### -continuationToken
@{Text=}

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

### -createdBy
@{Text=}

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

### -definitionId
Id of the release definition

```yaml
Type: Int32
Parameter Sets: List
Aliases:

Required: False
Position: Named
Default value: 0
Accept pipeline input: False
Accept wildcard characters: False
```

### -expand
Specifies which property should be expanded in the list of Release (environments, artifacts, none).

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

### -id
Specifies one or more releases by ID.

To specify multiple IDs, use commas to separate the IDs.

To find the ID of a release definition, type Get-VSTeamRelease.

```yaml
Type: Int32[]
Parameter Sets: ByID
Aliases: ReleaseID

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

```yaml
Type: Int32[]
Parameter Sets: ByIdJson, ByIdRaw
Aliases: ReleaseID

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -maxCreatedTime
@{Text=}

```yaml
Type: DateTime
Parameter Sets: List
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -minCreatedTime
@{Text=}

```yaml
Type: DateTime
Parameter Sets: List
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -queryOrder
@{Text=}

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

### -searchText
{{ Fill searchText Description }}

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

### -statusFilter
Draft, Active or Abandoned.

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

### -top
Specifies the maximum number to return.

```yaml
Type: Int32
Parameter Sets: List
Aliases:

Required: False
Position: Named
Default value: 0
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

### Team.Release
## NOTES
This function has a Dynamic Parameter for ProjectName that specifies the project for which this function gets releases.

You can tab complete from a list of available projects.

You can use Set-VSTeamDefaultProject to set a default project so you do not have to pass the ProjectName with each call.

You can pipe release definition IDs to this function.

## RELATED LINKS

[Set-VSTeamAccount]()

[Set-VSTeamDefaultProject]()

[Add-VSTeamRelease]()

[Remove-VSTeamRelease]()


