---
id: Get-VSTeamPool
title: Get-VSTeamPool
hide_title: true
hide_table_of_contents: false
custom_edit_url: https://github.com/MethodsAndPractices/vsteam/edit/master/.docs/Get-VSTeamPool.md
description: 
keywords:
  - vsteam
  - cmdlet
  - azure devops
---

# Get-VSTeamPool

## SYNOPSIS
Returns the agent pools.

## SYNTAX

### List (Default)
```
Get-VSTeamPool [<CommonParameters>]
```

### ByID
```
Get-VSTeamPool -Id <Int32> [<CommonParameters>]
```

## DESCRIPTION
Returns the agent pools.

## EXAMPLES

### Example 1
```powershell
PS C:\> {{ Add example code here }}
```

{{ Add example description here }}

## PARAMETERS

### -Id
Id of the pool to return.

```yaml
Type: Int32
Parameter Sets: ByID
Aliases: PoolID

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

## RELATED LINKS

