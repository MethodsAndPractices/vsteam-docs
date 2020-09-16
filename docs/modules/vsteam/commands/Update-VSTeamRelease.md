---
id: Update-VSTeamRelease
title: Update-VSTeamRelease
hide_title: true
hide_table_of_contents: false
custom_edit_url: https://github.com/MethodsAndPractices/vsteam/edit/master/.docs/Update-VSTeamRelease.md
description: 
keywords:
  - vsteam
  - cmdlet
  - azure devops
---

# Update-VSTeamRelease

## SYNOPSIS
Allows you to update release variables for future stages to read.

## SYNTAX

```
Update-VSTeamRelease -Id <Int32> -Release <PSObject> [-Force] [-ProjectName] <String> [-WhatIf] [-Confirm]
 [<CommonParameters>]
```

## DESCRIPTION
Allows you to update release variables for future stages to read.

## EXAMPLES

### EXAMPLE 1
```
PS C:\> Set-VSTeamAccount -Account mydemos -Token $(System.AccessToken) -UseBearerToken
PS C:\> $r = Get-VSTeamRelease -ProjectName project -Id 76 -Raw
PS C:\> $r.variables.temp.value='temp'
PS C:\> Update-VSTeamRelease -ProjectName project -Id 76 -release $r
```

Changes the variable temp on the release.
This can be done in one stage and read in another stage.

### EXAMPLE 2
```
PS C:\> Set-VSTeamAccount -Account mydemos -Token $(System.AccessToken) -UseBearerToken
PS C:\> $r = Get-VSTeamRelease -ProjectName project -Id 76 -Raw
PS C:\> $r.variables | Add-Member NoteProperty temp([PSCustomObject]@{value='test'})
PS C:\> Update-VSTeamRelease -ProjectName project -Id 76 -release $r
```

Adds a variable temp to the release with a value of test.

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

### -Id
The id of the release to update

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

### -Release
The updated release to save in AzD

```yaml
Type: PSObject
Parameter Sets: (All)
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm
Prompts you for confirmation before running the function.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force
Forces the function without confirmation

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

### -WhatIf
Shows what would happen if the function runs.
The function is not run.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

### Team.Release
## NOTES

## RELATED LINKS

