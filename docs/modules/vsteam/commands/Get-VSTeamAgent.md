---
id: Get-VSTeamAgent
title: Get-VSTeamAgent
hide_title: true
hide_table_of_contents: false
custom_edit_url: https://github.com/MethodsAndPractices/vsteam/edit/master/.docs/Get-VSTeamAgent.md
description: 
keywords:
  - vsteam
  - cmdlet
  - azure devops
---

# Get-VSTeamAgent

## SYNOPSIS
Returns the agents in a pool.

## SYNTAX

### List (Default)
```
Get-VSTeamAgent -PoolId <Int32> [<CommonParameters>]
```

### ByID
```
Get-VSTeamAgent -PoolId <Int32> -Id <Int32> [<CommonParameters>]
```

## DESCRIPTION
Returns the agents in a pool.

## EXAMPLES

### Example 1
```powershell
PS C:\> {{ Add example code here }}
```

{{ Add example description here }}

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
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -Id
Id of the agent to return.

```yaml
Type: Int32
Parameter Sets: ByID
Aliases: AgentID

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### System.String
## OUTPUTS

### System.Object
## NOTES
To read system capabilities that contain dots you have to use the PSObject Properties property.

(Get-VSTeamAgent 1 91).systemCapabilities.PSObject.Properties\['Agent.OS'\].Value

## RELATED LINKS

