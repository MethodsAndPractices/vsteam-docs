---
id: Get-VSTeamProcess
title: Get-VSTeamProcess
hide_title: true
hide_table_of_contents: false
custom_edit_url: https://github.com/MethodsAndPractices/vsteam/edit/master/.docs/Get-VSTeamProcess.md
description: 
keywords:
  - vsteam
  - cmdlet
  - azure devops
---

# Get-VSTeamProcess

## SYNOPSIS
Returns a list of process templates in the Team Services or Team Foundation Server account.

## SYNTAX

### List (Default)
```
Get-VSTeamProcess [-Top <Int32>] [-Skip <Int32>] [<CommonParameters>]
```

### ByName
```
Get-VSTeamProcess [[-Name] <Object>] [<CommonParameters>]
```

### ByID
```
Get-VSTeamProcess [-Id <String>] [<CommonParameters>]
```

## DESCRIPTION
The list of Process Templates can be filtered by name  (which may include Wildcard).
You can also get a single Process Template by id

You must call Set-VSTeamAccount before calling this function.

## EXAMPLES

### EXAMPLE 1
```
PS C:\> Get-VSTeamProcess
```

This will return all the Process Templates

### EXAMPLE 2
```
PS C:\> Get-VSTeamProcess | Format-Wide
```

This will return the Process Templates only showing their name

### EXAMPLE 3
```
PS C:\> Get-VSTeamProcess *scrum*
```

This will return an process templates with names containing scrum, in other words, the default "Scrum" template and custom ones with names like "Custom Scrum", "Scrum for Contoso" will all be returned.

## PARAMETERS

### -Name
Specifies the process template name for which this function operates.

You can tab complete from a list of available process templates.

```yaml
Type: Object
Parameter Sets: ByName
Aliases: ProcessName, ProcessTemplate

Required: False
Position: 0
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Top
Specifies the maximum number to return.
If -Skip is specified and -Top is omitted the next 100 will be returned.
If neither Skip nor -Top is specified, all process templates will be returned.

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
Defines the number of Process Templates to skip.
If -Top is specified and -Skip is omitted none will be skipped.
If neither Skip nor -Top is specified, all process templates will be returned.

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
The id of the Process Template to return.

```yaml
Type: String
Parameter Sets: ByID
Aliases: ProcessTemplateID

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

## RELATED LINKS

[Set-VSTeamAccount]()

[Add-VSTeamProject]()


