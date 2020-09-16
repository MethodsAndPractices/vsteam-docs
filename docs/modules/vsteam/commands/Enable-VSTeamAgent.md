---
id: Enable-VSTeamAgent
title: Enable-VSTeamAgent
hide_title: true
hide_table_of_contents: false
custom_edit_url: https://github.com/MethodsAndPractices/vsteam/edit/master/.docs/Enable-VSTeamAgent.md
description: 
keywords:
  - vsteam
  - cmdlet
  - azure devops
---

# Enable-VSTeamAgent

## SYNOPSIS
Enables an agent in a pool.

## SYNTAX

```
Enable-VSTeamAgent -PoolId <Int32> -Id <Int32[]> [<CommonParameters>]
```

## DESCRIPTION
Enables an agent in a pool.

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
Id of the agent to enable.

```yaml
Type: Int32[]
Parameter Sets: (All)
Aliases: AgentID

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### System.String
## OUTPUTS

## NOTES

## RELATED LINKS

