---
id: Set-VSTeamAPIVersion
title: Set-VSTeamAPIVersion
hide_title: true
hide_table_of_contents: false
custom_edit_url: https://github.com/MethodsAndPractices/vsteam/edit/master/.docs/Set-VSTeamAPIVersion.md
description: 
keywords:
  - vsteam
  - cmdlet
  - azure devops
---

# Set-VSTeamAPIVersion

## SYNOPSIS
Sets the API versions to support either TFS2017, TFS2018, AzD2019 or AzD.

## SYNTAX

### Target (Default)
```
Set-VSTeamAPIVersion [[-Target] <String>] [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]
```

### Service
```
Set-VSTeamAPIVersion -Service <String> -Version <String> [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
Set-VSTeamAPIVersion sets the versions of APIs used.

## EXAMPLES

### EXAMPLE 1
```
PS C:\> Set-VSTeamAPIVersion AzD
```

This command sets the API versions to support AzD.

### EXAMPLE 2
```
PS C:\> Set-VSTeamAPIVersion -Service Release -Version '5.0'
```

This command sets the version of the Release calls to 5.0.

## PARAMETERS

### -Target
Specifies the version to use.
The acceptable values for this parameter are:

- TFS2017
- TFS2017U1
- TFS2017U2
- TFS2017U3
- TFS2018
- TFS2018U1
- TFS2018U2
- TFS2018U3
- AzD2019
- AzD2019U1
- VSTS
- AzD

```yaml
Type: String
Parameter Sets: Target
Aliases:

Required: False
Position: 0
Default value: TFS2017
Accept pipeline input: False
Accept wildcard characters: False
```

### -Service
Specifies the service to change.
The acceptable values for this parameter are:

- Build
- Release
- Core
- Git
- DistributedTask
- Tfvc
- Packaging
- MemberEntitlementManagement
- ExtensionsManagement
- ServiceEndpoints

```yaml
Type: String
Parameter Sets: Service
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Version
Specifies the version to use.

```yaml
Type: String
Parameter Sets: Service
Aliases:

Required: True
Position: Named
Default value: None
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

## NOTES

## RELATED LINKS

