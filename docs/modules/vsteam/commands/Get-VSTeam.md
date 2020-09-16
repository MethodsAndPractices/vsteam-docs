---
id: Get-VSTeam
title: Get-VSTeam
hide_title: true
hide_table_of_contents: false
custom_edit_url: https://github.com/MethodsAndPractices/vsteam/edit/master/.docs/Get-VSTeam.md
description: 
keywords:
  - vsteam
  - cmdlet
  - azure devops
---

# Get-VSTeam

## SYNOPSIS
Returns a team.

## SYNTAX

### List (Default)
```
Get-VSTeam [-Top <Int32>] [-Skip <Int32>] [-ProjectName] <String> [<CommonParameters>]
```

### ByID
```
Get-VSTeam [-Id <String[]>] [-ProjectName] <String> [<CommonParameters>]
```

### ByName
```
Get-VSTeam [-Name <String[]>] [-ProjectName] <String> [<CommonParameters>]
```

## DESCRIPTION
Returns a team.

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

### -Skip
The number of items to skip.

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

### -Top
Specifies the maximum number to return.

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

### -Name
The name of the team to retrieve.

```yaml
Type: String[]
Parameter Sets: ByName
Aliases: TeamName

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Id
{{ Fill Id Description }}

```yaml
Type: String[]
Parameter Sets: ByID
Aliases: TeamId

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

### Team.Team
## NOTES

## RELATED LINKS

