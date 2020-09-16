---
id: Get-VSTeamExtension
title: Get-VSTeamExtension
hide_title: true
hide_table_of_contents: false
custom_edit_url: https://github.com/MethodsAndPractices/vsteam/edit/master/.docs/Get-VSTeamExtension.md
description: 
keywords:
  - vsteam
  - cmdlet
  - azure devops
---

# Get-VSTeamExtension

## SYNOPSIS
Get the installed extensions in the specified Azure DevOps or Team Foundation Server project.

## SYNTAX

### List
```
Get-VSTeamExtension [-IncludeInstallationIssues] [-IncludeDisabledExtensions] [-IncludeErrors]
 [<CommonParameters>]
```

### GetById
```
Get-VSTeamExtension -PublisherId <String> -ExtensionId <String> [<CommonParameters>]
```

## DESCRIPTION
Get the installed extensions in the specified Azure DevOps or Team Foundation Server project.

## EXAMPLES

### Example 1
```powershell
PS C:\> {{ Add example code here }}
```

{{ Add example description here }}

## PARAMETERS

### -PublisherId
The id of the publisher.

```yaml
Type: String
Parameter Sets: GetById
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExtensionId
The id of the extension.

```yaml
Type: String
Parameter Sets: GetById
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IncludeInstallationIssues
If true (the default), include installed extensions with issues.

```yaml
Type: SwitchParameter
Parameter Sets: List
Aliases:

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -IncludeDisabledExtensions
If true (the default), include disabled extensions in the results.

```yaml
Type: SwitchParameter
Parameter Sets: List
Aliases:

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -IncludeErrors
If true, include installed extensions with errors.

```yaml
Type: SwitchParameter
Parameter Sets: List
Aliases:

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

## NOTES

## RELATED LINKS

[Add-VSTeamExtension]()

[Get-VSTeamExtension]()

[Remove-VSTeamExtension]()

[Update-VSTeamExtension]()


