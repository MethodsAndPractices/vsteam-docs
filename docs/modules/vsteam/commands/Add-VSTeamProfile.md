---
id: Add-VSTeamProfile
title: Add-VSTeamProfile
hide_title: true
hide_table_of_contents: false
custom_edit_url: https://github.com/MethodsAndPractices/vsteam/edit/master/.docs/Add-VSTeamProfile.md
description: 
keywords:
  - vsteam
  - cmdlet
  - azure devops
---

# Add-VSTeamProfile

## SYNOPSIS
Stores your account name and personal access token as a profile for use with the Add-TeamAccount function in this module.

## SYNTAX

### Secure (Default)
```
Add-VSTeamProfile [-Account] <String> -SecurePersonalAccessToken <SecureString> [[-Name] <String>]
 [[-Version] <String>] [-UseBearerToken] [<CommonParameters>]
```

### Plain
```
Add-VSTeamProfile [[-Account] <String>] [-PersonalAccessToken] <String> [[-Name] <String>]
 [[-Version] <String>] [-UseBearerToken] [<CommonParameters>]
```

### Windows
```
Add-VSTeamProfile [-Account] <String> [[-Name] <String>] [[-Version] <String>] [-UseBearerToken]
 [-UseWindowsAuthentication] [<CommonParameters>]
```

## DESCRIPTION

## EXAMPLES

### EXAMPLE 1
```
PS C:\> Add-VSTeamProfile
```

You will be prompted for the account name and personal access token.

### EXAMPLE 2
```
PS C:\> Add-VSTeamProfile -Account mydemos -PersonalAccessToken 7a8ilh6db4aforlrnrqmdrxdztkjvcc4uhlh5vgbteserp3mziwnga -Version TFS2018
```

Allows you to provide all the information on the command line.

### EXAMPLE 3
```
PS C:\> Add-VSTeamProfile -Account http://localtfs:8080/tfs/DefaultCollection -UseWindowsAuthentication
```

On Windows, allows you use to use Windows authentication against a local TFS server.

## PARAMETERS

### -Account
The Azure DevOps (AzD) account name to use.
DO NOT enter the entire URL.

Just the portion after dev.azure.com.
For example in the following url mydemos is the account name.
\<https://dev.azure.com/mydemos\> or The full Team Foundation Server (TFS) url including the collection.
\<http://localhost:8080/tfs/DefaultCollection\>

```yaml
Type: String
Parameter Sets: Secure, Windows
Aliases:

Required: True
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

```yaml
Type: String
Parameter Sets: Plain
Aliases:

Required: False
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

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

### -UseWindowsAuthentication
Allows the use of the current user's Windows credentials to authenticate against a local TFS.

```yaml
Type: SwitchParameter
Parameter Sets: Windows
Aliases:

Required: True
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -UseBearerToken
Switches the authorization from Basic to Bearer. 
You still use the PAT for PersonalAccessToken parameters to store the token.

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
Optional name for the profile.
If this parameter is not provided the account will also serve as the name.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: 3
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Version
Specifies the version to use.
The acceptable values for this parameter are:

- TFS2017
- TFS2018
- AzD2019
- VSTS
- AzD

If you are on AzD it will default to Azd otherwise it will default to TFS2017

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: 3
Default value: TFS2017 for TFS and AzD for AzD
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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

[Set-VSTeamAccount]()

[Set-VSTeamDefaultProject]()


