---
id: Update-VSTeamReleaseDefinition
title: Update-VSTeamReleaseDefinition
hide_title: true
hide_table_of_contents: false
custom_edit_url: https://github.com/MethodsAndPractices/vsteam/edit/master/.docs/Update-VSTeamReleaseDefinition.md
description: 
keywords:
  - vsteam
  - cmdlet
  - azure devops
---

# Update-VSTeamReleaseDefinition

## SYNOPSIS
Updates a build definition for a team project.

## SYNTAX

### JSON (Default)
```
Update-VSTeamReleaseDefinition [-ReleaseDefinition] <String> [-Force] [-ProjectName] <String> [-WhatIf]
 [-Confirm] [<CommonParameters>]
```

### File
```
Update-VSTeamReleaseDefinition [-InFile] <String> [-Force] [-ProjectName] <String> [-WhatIf] [-Confirm]
 [<CommonParameters>]
```

## DESCRIPTION
Reads a JSON file off disk or from string and uses that file to update an existing release definition in the provided project.

You must call Set-VSTeamAccount before calling this function.

## EXAMPLES

### EXAMPLE 1
```
PS C:\> Update-VSTeamReleaseDefinition -ProjectName Demo -Id 123 -InFile release.json
```

This command reads release.json and updates existing release definition with id 123 from it on the demo team project.

### EXAMPLE 2
```
PS C:\> $b = Get-VSTeamReleaseDefinition -ProjectName Demo -Id 23 -Raw
PS C:\> $b.variables.subscriptionId.value = 'Some New Value'
PS C:\> $body = $b | ConvertTo-Json -Depth 100
PS C:\> Update-VSTeamReleaseDefinition -ProjectName Demo -ReleaseDefinition $body
```

This commands update the variables of the release definition.

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

### -InFile
Path and file name to the JSON file that contains the definition to be updated.
If the path is omitted, the default is the current location.

```yaml
Type: String
Parameter Sets: File
Aliases:

Required: True
Position: 1
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -ReleaseDefinition
JSON string of release definition.

```yaml
Type: String
Parameter Sets: JSON
Aliases:

Required: True
Position: 1
Default value: None
Accept pipeline input: True (ByPropertyName)
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

### None
## NOTES
This function has a Dynamic Parameter for ProjectName that specifies the project for which this function gets release definitions.

You can tab complete from a list of available projects.

You can use Set-VSTeamDefaultProject to set a default project so you do not have to pass the ProjectName with each call.

## RELATED LINKS

