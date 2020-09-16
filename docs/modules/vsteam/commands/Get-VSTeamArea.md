---
id: Get-VSTeamArea
title: Get-VSTeamArea
hide_title: true
hide_table_of_contents: false
custom_edit_url: https://github.com/MethodsAndPractices/vsteam/edit/master/.docs/Get-VSTeamArea.md
description: 
keywords:
  - vsteam
  - cmdlet
  - azure devops
---

# Get-VSTeamArea

## SYNOPSIS
Gets the area node for a given area path.

## SYNTAX

### ByIds (Default)
```
Get-VSTeamArea [-Ids <Int32[]>] [-Depth <Int32>] [-ProjectName] <String> [<CommonParameters>]
```

### ByPath
```
Get-VSTeamArea [-Path <String>] [-Depth <Int32>] [-ProjectName] <String> [<CommonParameters>]
```

## DESCRIPTION
Gets the area node for a given area path.

## EXAMPLES

### Example 1
```powershell
PS C:\> {{ Add example code here }}
```

{{ Add example description here }}

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

### -Depth
Depth of children to fetch.

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

### -Path
Path of the classification node.

```yaml
Type: String
Parameter Sets: ByPath
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Ids
Integer classification nodes ids.

```yaml
Type: Int32[]
Parameter Sets: ByIds
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

## OUTPUTS

### System.Object
## NOTES
This is a wrapper function for Get-VSTeamClassificationNode

## RELATED LINKS

[Get-VSTeamClassificationNode]()

[Get-VSTeamIteration]()


