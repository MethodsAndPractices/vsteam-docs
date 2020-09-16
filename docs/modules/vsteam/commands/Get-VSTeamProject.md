---
id: Get-VSTeamProject
title: Get-VSTeamProject
hide_title: true
hide_table_of_contents: false
custom_edit_url: https://github.com/MethodsAndPractices/vsteam/edit/master/.docs/Get-VSTeamProject.md
description: 
keywords:
  - vsteam
  - cmdlet
  - azure devops
---

# Get-VSTeamProject

## SYNOPSIS
Returns a list of projects in the Team Services or Team Foundation Server account.

## SYNTAX

### List (Default)
```
Get-VSTeamProject [-StateFilter <String>] [-Top <Int32>] [-Skip <Int32>] [-IncludeCapabilities]
 [<CommonParameters>]
```

### ByID
```
Get-VSTeamProject [-Id <String>] [-IncludeCapabilities] [<CommonParameters>]
```

### ByName
```
Get-VSTeamProject [-IncludeCapabilities] -Name <String> [<CommonParameters>]
```

## DESCRIPTION
The list of projects returned can be controlled by using the stateFilter, top and skip parameters.

You can also get a single project by name or id.

You must call Set-VSTeamAccount before calling this function.

## EXAMPLES

### EXAMPLE 1
```
PS C:\> Get-VSTeamProject
```

This will return all the WellFormed team projects.

### EXAMPLE 2
```
PS C:\> Get-VSTeamProject -top 5 | Format-Wide
```

This will return the top five WellFormed team projects only showing their name

## PARAMETERS

### -StateFilter
Returns team projects in a specific team project state. 
The acceptable values for this parameter are:

- WellFormed
- CreatePending
- Deleting
- New
- All

```yaml
Type: String
Parameter Sets: List
Aliases:

Required: False
Position: Named
Default value: WellFormed
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
Default value: 100
Accept pipeline input: False
Accept wildcard characters: False
```

### -Skip
Defines the number of team projects to skip.
The default value is 0

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

### -Id
The id of the project to return.

```yaml
Type: String
Parameter Sets: ByID
Aliases: ProjectID

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IncludeCapabilities
Will return additional information about the project.

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

### -Name
{{ Fill Name Description }}

```yaml
Type: String
Parameter Sets: ByName
Aliases:

Required: True
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

## RELATED LINKS

[Set-VSTeamAccount]()

[Add-VSTeamProject]()

[Remove-VSTeamProject]()


