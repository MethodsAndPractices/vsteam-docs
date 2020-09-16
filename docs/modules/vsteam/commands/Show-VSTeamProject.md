---
id: Show-VSTeamProject
title: Show-VSTeamProject
hide_title: true
hide_table_of_contents: false
custom_edit_url: https://github.com/MethodsAndPractices/vsteam/edit/master/.docs/Show-VSTeamProject.md
description: 
keywords:
  - vsteam
  - cmdlet
  - azure devops
---

# Show-VSTeamProject

## SYNOPSIS
Opens the project in the default browser.

## SYNTAX

### ByName (Default)
```
Show-VSTeamProject [-Name <String>] [<CommonParameters>]
```

### ByID
```
Show-VSTeamProject [-Id <String>] [<CommonParameters>]
```

## DESCRIPTION
Opens the project in default browser.

You must call Set-VSTeamAccount before calling this function.

## EXAMPLES

### EXAMPLE 1
```
PS C:\> Show-VSTeamProject TestProject
```

This will open a browser to the TestProject site

## PARAMETERS

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

### -Name
{{ Fill Name Description }}

```yaml
Type: String
Parameter Sets: ByName
Aliases: ProjectName

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName)
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


