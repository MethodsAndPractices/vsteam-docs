---
id: Set-VSTeamEnvironmentStatus
title: Set-VSTeamEnvironmentStatus
hide_title: true
hide_table_of_contents: false
custom_edit_url: https://github.com/MethodsAndPractices/vsteam/edit/master/.docs/Set-VSTeamEnvironmentStatus.md
description: 
keywords:
  - vsteam
  - cmdlet
  - azure devops
---

# Set-VSTeamEnvironmentStatus

## SYNOPSIS
Sets the status of a environment to canceled, inProgress, notStarted, partiallySucceeded, queued, rejected, scheduled, succeeded or undefined.

## SYNTAX

```
Set-VSTeamEnvironmentStatus -EnvironmentId <Int32[]> -ReleaseId <Int32> -Status <String> [-Comment <String>]
 [-ScheduledDeploymentTime <DateTime>] [-Force] [[-ProjectName] <String>] [-WhatIf] [-Confirm]
 [<CommonParameters>]
```

## DESCRIPTION
Sets the status of a environment to canceled, inProgress, notStarted, partiallySucceeded, queued, rejected, scheduled, succeeded or undefined.

## EXAMPLES

### EXAMPLE 1
```
PS C:\> Set-VSTeamEnvironmentStatus -ReleaseId 54 -Id 5 -status inProgress
```

This command will set the status of environment with id 5 of release 54 to inProgress.
You can use this call to redeploy an environment.

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

### -EnvironmentId
Specifies one or more environments by ID you wish to deploy.

The Environment Ids are unique for each environment and in each release.

To specify multiple IDs, use commas to separate the IDs.

To find the ID of an environment type Get-VSTeamRelease -expand environments.

```yaml
Type: Int32[]
Parameter Sets: (All)
Aliases: Id

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -ReleaseId
Specifies the release by ID.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -Status
The status to set for the environment to canceled, inProgress, notStarted, partiallySucceeded, queued, rejected, scheduled, succeeded or undefined.

```yaml
Type: String
Parameter Sets: (All)
Aliases: EnvironmentStatus

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Comment
The comment to set for the status change.

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

### -ScheduledDeploymentTime
The date and time to schedule when setting the status to scheduled.

```yaml
Type: DateTime
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force
Forces the function without confirmation

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm
Prompts you for confirmation before running the cmdlet.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
Shows what would happen if the cmdlet runs.
The cmdlet is not run.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES
This function has a Dynamic Parameter for ProjectName that specifies the project for which this function gets releases.

You can tab complete from a list of available projects.

You can use Set-VSTeamDefaultProject to set a default project so you do not have to pass the ProjectName with each call.

## RELATED LINKS

