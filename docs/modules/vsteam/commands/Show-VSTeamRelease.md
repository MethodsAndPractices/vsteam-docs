---
id: Show-VSTeamRelease
title: Show-VSTeamRelease
hide_title: true
hide_table_of_contents: false
custom_edit_url: https://github.com/MethodsAndPractices/vsteam/edit/master/.docs/Show-VSTeamRelease.md
description: 
keywords:
  - vsteam
  - cmdlet
  - azure devops
---

# Show-VSTeamRelease

## SYNOPSIS
Opens the release summary in the default browser.

## SYNTAX

### ById (Default)
```
Show-VSTeamRelease -ProjectName <String> [<CommonParameters>]
```

### ByID
```
Show-VSTeamRelease -id <Int32> -ProjectName <String> [<CommonParameters>]
```

## DESCRIPTION
Opens the release summary in the default browser.

## EXAMPLES

### EXAMPLE 1
```
PS C:\> Show-VSTeamRelease -ProjectName Demo -Id 3
```

This command will open a web browser with the summary of release 3.

## PARAMETERS

### -id
Specifies release by ID.

```yaml
Type: Int32
Parameter Sets: ByID
Aliases: ReleaseID

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -ProjectName
{{ Fill ProjectName Description }}

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

### Team.Release
## NOTES
You can pipe the release ID to this function.

## RELATED LINKS

[Set-VSTeamAccount]()

[Set-VSTeamDefaultProject]()

[Add-VSTeamRelease]()

[Remove-VSTeamRelease]()


