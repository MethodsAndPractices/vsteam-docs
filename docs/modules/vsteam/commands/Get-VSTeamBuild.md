---
id: Get-VSTeamBuild
title: Get-VSTeamBuild
hide_title: true
hide_table_of_contents: false
custom_edit_url: https://github.com/MethodsAndPractices/vsteam/edit/master/.docs/Get-VSTeamBuild.md
description: 
keywords:
  - vsteam
  - cmdlet
  - azure devops
---

# Get-VSTeamBuild

## SYNOPSIS
Gets the builds for a team project.

## SYNTAX

### List (Default)
```
Get-VSTeamBuild [-Top <Int32>] [-ResultFilter <String>] [-ReasonFilter <String>] [-StatusFilter <String>]
 [-Queues <Int32[]>] [-Definitions <Int32[]>] [-BuildNumber <String>] [-Type <String>]
 [-MaxBuildsPerDefinition <Int32>] [-Properties <String[]>] [-ProjectName] <String> [<CommonParameters>]
```

### ByID
```
Get-VSTeamBuild [-Id <Int32[]>] [-ProjectName] <String> [<CommonParameters>]
```

## DESCRIPTION
The Get-VSTeamBuild function gets the builds for a team project.

With just a project name, this function gets all of the builds for that team project.

You can also specify a particular build by ID.

## EXAMPLES

### EXAMPLE 1
```
PS C:\> Get-VSTeamBuild -ProjectName demo | Format-List *
```

This command gets a list of all builds in the demo project.

The pipeline operator (|) passes the data to the Format-List cmdlet, which displays all available properties (*) of the build objects.

### EXAMPLE 2
```
PS C:\> Get-VSTeamBuild -ProjectName demo -top 5 -resultFilter failed
```

This command gets a list of 5 failed builds in the demo project.

### EXAMPLE 3
```
PS C:\> 1203,1204 | Get-VSTeamBuild -ProjectName demo
```

This command gets builds with IDs 1203 and 1204 by using the pipeline.

### EXAMPLE 4
```
PS C:\> Get-VSTeamBuild -ProjectName demo -ID 1203,1204
```

This command gets builds with IDs 1203 and 1204 by using the ID parameter.

### EXAMPLE 5
```
PS C:\> Get-VSTeamBuild -ProjectName demo -ID 1203 -Raw
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

### -Top
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

### -ResultFilter
Specifies the result of the builds to return Succeeded, PartiallySucceeded, Failed, or Canceled.

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

### -ReasonFilter
Specifies the reason the build was created of the builds to return Manual, IndividualCI, BatchedCI, Schedule, UserCreated, ValidateShelveSet, CheckInShelveSet, Triggered, or All.

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

### -StatusFilter
Specifies the status of the builds to return InProgress, Completed, Cancelling, Postponed, NotStarted, or All.

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

### -Queues
A comma-delimited list of queue IDs that specifies the builds to return.

```yaml
Type: Int32[]
Parameter Sets: List
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Definitions
A comma-delimited list of build definition IDs that specifies the builds to return.

```yaml
Type: Int32[]
Parameter Sets: List
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -BuildNumber
Returns the build with this build number.

You can also use * for a starts with search.
For example: 2015* Will return all build numbers that start with 2015.

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
The type of builds to retrieve.

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

### -MaxBuildsPerDefinition
The maximum number of builds to retrieve for each definition.

This is only valid when definitions is also specified.

```yaml
Type: Int32
Parameter Sets: List
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Properties
A comma-delimited list of extended properties to retrieve.

```yaml
Type: String[]
Parameter Sets: List
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Id
Specifies one or more builds by ID.

To specify multiple IDs, use commas to separate the IDs.

To find the ID of a build, type Get-VSTeamBuild.

```yaml
Type: Int32[]
Parameter Sets: ByID
Aliases: BuildID

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

### Team.Build
## NOTES
This function has a Dynamic Parameter for ProjectName that specifies the project for which this function gets builds.

You can tab complete from a list of available projects.

You can use Set-VSTeamDefaultProject to set a default project so you do not have to pass the ProjectName with each call.

You can pipe build IDs to this function.

## RELATED LINKS

[Set-VSTeamAccount]()

[Set-VSTeamDefaultProject]()

[Add-VSTeamBuild]()

[Remove-VSTeamBuild]()


