---
id: Update-VSTeamBuildDefinition
title: Update-VSTeamBuildDefinition
hide_title: true
hide_table_of_contents: false
custom_edit_url: https://github.com/MethodsAndPractices/vsteam/edit/master/.docs/Update-VSTeamBuildDefinition.md
description: 
keywords:
  - vsteam
  - cmdlet
  - azure devops
---

# Update-VSTeamBuildDefinition

## SYNOPSIS
Updates a build definition for a team project.

## SYNTAX

### JSON (Default)
```
Update-VSTeamBuildDefinition -Id <Int32> [-BuildDefinition] <String> [-Force] [-ProjectName] <String> [-WhatIf]
 [-Confirm] [<CommonParameters>]
```

### File
```
Update-VSTeamBuildDefinition -Id <Int32> [-InFile] <String> [-Force] [-ProjectName] <String> [-WhatIf]
 [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
Reads a JSON file off disk or string and uses that file to update an existing build definition in the provided project.

You must call Set-VSTeamAccount before calling this function.

## EXAMPLES

### EXAMPLE 1
```
PS C:\> Update-VSTeamBuildDefinition -ProjectName Demo -Id 123 -InFile build.json
```

This command reads build.json and updates existing build definition with id 123 from it on the demo team project.

### EXAMPLE 2
```
PS C:\> $b = Get-VSTeamBuildDefinition -ProjectName Demo -Id 23 -Raw
PS C:\> $b.variables.subscriptionId.value = 'Some New Value'
PS C:\> $body = $b | ConvertTo-Json -Depth 100
PS C:\> Update-VSTeamBuildDefinition -ProjectName Demo -Id 23 -BuildDefinition $body
```

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
Specifies the build definition to update by ID.

To find the ID of a build definition, type Get-VSTeamBuildDefinition.

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

### -BuildDefinition
JSON string of build definition.

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
Prompts you for confirmation before running the cmdlet.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force
{{ Fill Force Description }}

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
Shows what would happen if the cmdlet runs.
The cmdlet is not run.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi

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

### None
## NOTES
This function has a Dynamic Parameter for ProjectName that specifies the project for which this function gets build definitions.

You can tab complete from a list of available projects.

You can use Set-VSTeamDefaultProject to set a default project so you do not have to pass the ProjectName with each call.

## RELATED LINKS

