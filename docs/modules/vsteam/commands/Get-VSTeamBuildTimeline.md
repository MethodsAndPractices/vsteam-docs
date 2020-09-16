---
id: Get-VSTeamBuildTimeline
title: Get-VSTeamBuildTimeline
hide_title: true
hide_table_of_contents: false
custom_edit_url: https://github.com/MethodsAndPractices/vsteam/edit/master/.docs/Get-VSTeamBuildTimeline.md
description: 
keywords:
  - vsteam
  - cmdlet
  - azure devops
---

# Get-VSTeamBuildTimeline

## SYNOPSIS
Get the timelines for builds

## SYNTAX

```
Get-VSTeamBuildTimeline -BuildID <Int32[]> [-Id <Guid>] [-ChangeId <Int32>] [-PlanId <Guid>]
 [-ProjectName] <String> [<CommonParameters>]
```

## DESCRIPTION
The Get-VSTeamBuildTimeline function gets the timelines for a build.

With just a project name and the build id, this function gets all the timelines of a build for that team project.

You can also specify a particular timeline by ID to get .

## EXAMPLES

### EXAMPLE 1
```
PS C:\> Get-VSTeamBuildTimeline -ProjectName demo -BuildId 1 | Format-List *
```

This command gets a list of all timelines of thr build with Id 1 in the demo project.

The pipeline operator (|) passes the data to the Format-List cmdlet, which displays all available properties (*) of the timeline objects.

### EXAMPLE 2
```
PS C:\> Get-VSTeamBuildTimeline -ProjectName demo -BuildId 1 -Id 595dac0c-0f1a-4bfd-a35f-e5a838ac71d7 -ChangeId 2 -PlanId 356de525-47a9-4251-80c6-d3849a9d6382
```

This command gets the timelines with ID 1 and timeline id 595dac0c-0f1a-4bfd-a35f-e5a838ac71d7.
It is filtered with the change ID and plan ID.

### EXAMPLE 3
```
PS C:\> Get-VSTeamBuildTimeline -ProjectName demo -BuildId 1 -ID @(1,2)
```

This command gets timelines with IDs 1 and 2 by using the ID parameter.

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
Returns the timelines with the given timeline id.

Specifies one or more builds by ID.

To specify multiple IDs, use commas to separate the IDs.

To find the ID of a build, type Get-VSTeamBuild.

```yaml
Type: Guid
Parameter Sets: (All)
Aliases: TimelineId

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ChangeId
Returns the timelines with the given change id.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PlanId
Returns the timelines with the given plan id.

```yaml
Type: Guid
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -BuildID
Build id where you get the time line from

```yaml
Type: Int32[]
Parameter Sets: (All)
Aliases:

Required: True
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

[Get-VSTeamBuild]()


