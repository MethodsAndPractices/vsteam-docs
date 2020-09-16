---
id: Get-VSTeamJobRequest
title: Get-VSTeamJobRequest
hide_title: true
hide_table_of_contents: false
custom_edit_url: https://github.com/MethodsAndPractices/vsteam/edit/master/.docs/Get-VSTeamJobRequest.md
description: 
keywords:
  - vsteam
  - cmdlet
  - azure devops
---

# Get-VSTeamJobRequest

## SYNOPSIS
Returns all the job requests of an agent.

## SYNTAX

```
Get-VSTeamJobRequest -PoolId <Int32> -AgentID <Int32> [-completedRequestCount <Int32>] [<CommonParameters>]
```

## DESCRIPTION
Returns all the job requests of an agent.

## EXAMPLES

### EXAMPLE 1
```
PS C:\> Get-VSTeamJobRequest 1 111
```

This will display all the job request of agent with id 111 under the pool with id 1.

## PARAMETERS

### -PoolId
Id of the pool.

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

### -AgentID
Id of the agent to return.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases: ID

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### -completedRequestCount
The number of requests to return.

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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### System.String
## OUTPUTS

### System.Object
## NOTES

## RELATED LINKS

