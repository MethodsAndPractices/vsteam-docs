---
id: Update-VSTeamProfile
title: Update-VSTeamProfile
hide_title: true
hide_table_of_contents: false
custom_edit_url: https://github.com/MethodsAndPractices/vsteam/edit/master/.docs/Update-VSTeamProfile.md
description: 
keywords:
  - vsteam
  - cmdlet
  - azure devops
---

# Update-VSTeamProfile

## SYNOPSIS
Allows you to update the Personal Access Token for your profile.

## SYNTAX

### Secure (Default)
```
Update-VSTeamProfile -SecurePersonalAccessToken <SecureString> [-Force] [-WhatIf] [-Confirm] [-Name] <String>
 [<CommonParameters>]
```

### Plain
```
Update-VSTeamProfile [-PersonalAccessToken] <String> [-Force] [-WhatIf] [-Confirm] [-Name] <String>
 [<CommonParameters>]
```

## DESCRIPTION

## EXAMPLES

### EXAMPLE 1
```
PS C:\> Update-VSTeamProfile -Name ProfileName
```

You will be prompted for the account name and personal access token.

### EXAMPLE 2
```
PS C:\> Update-VSTeamProfile -Name mydemos -PersonalAccessToken 7a8ilh6db4aforlrnrqmdrxdztkjvcc4uhlh5vgbteserp3mziwnga
```

Allows you to provide all the information on the command line.

### EXAMPLE 3
```
PS C:\> Get-VSTeamProfile | Where-Object version -eq vsts | Select-Object -skip 1 | Update-VSTeamProfile -PersonalAccessToken 7a8ilh6db4aforlrnrqmdrxdztkjvcc4uhlh5vgbteserp3mziwnga -Force
```

This will update all but the first AzD profile

## PARAMETERS

### -PersonalAccessToken
The personal access token from AzD/TFS to use to access this account.

```yaml
Type: String
Parameter Sets: Plain
Aliases:

Required: True
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Name
Name of the profile to be updated

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: True
Position: 3
Default value: None
Accept pipeline input: True (ByPropertyName)
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

### -SecurePersonalAccessToken
Personal Access Token

```yaml
Type: SecureString
Parameter Sets: Secure
Aliases:

Required: True
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

[Update-VSTeamAccount]()

[Set-VSTeamDefaultProject]()


