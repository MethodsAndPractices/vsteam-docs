---
id: Set-VSTeamAccount
title: Set-VSTeamAccount
hide_title: true
hide_table_of_contents: false
custom_edit_url: https://github.com/MethodsAndPractices/vsteam/edit/master/.docs/Set-VSTeamAccount.md
description: 
keywords:
  - vsteam
  - cmdlet
  - azure devops
---

# Set-VSTeamAccount

## SYNOPSIS
Stores your account name and personal access token for use with the other functions in this module.

## SYNTAX

### Secure (Default)
```
Set-VSTeamAccount [-Account] <String> -SecurePersonalAccessToken <SecureString> [[-Version] <String>]
 [-Drive <String>] [-UseBearerToken] [-Force] [-WhatIf] [-Confirm] [-Level <String>] [<CommonParameters>]
```

### Plain
```
Set-VSTeamAccount [-Account] <String> [-PersonalAccessToken] <String> [[-Version] <String>] [-Drive <String>]
 [-UseBearerToken] [-Force] [-WhatIf] [-Confirm] [-Level <String>] [<CommonParameters>]
```

### Windows
```
Set-VSTeamAccount [-Account] <String> [[-Version] <String>] [-Drive <String>] [-Force] [-WhatIf] [-Confirm]
 [-Level <String>] [-UseWindowsAuthentication] [<CommonParameters>]
```

### Profile
```
Set-VSTeamAccount [-Drive <String>] [-Force] [-WhatIf] [-Confirm] [-Profile <String>] [-Level <String>]
 [<CommonParameters>]
```

## DESCRIPTION
On Windows you have to option to store the information at the process, user or machine (you must be running PowerShell as administrator to store at the machine level) level.

On Linux and Mac you can only store at the process level.

Calling Set-VSTeamAccount will clear any default project.

## EXAMPLES

### EXAMPLE 1
```
PS C:\> Set-VSTeamAccount
```

You will be prompted for the account name and personal access token.

### EXAMPLE 2
```
PS C:\> Set-VSTeamAccount -Account mydemos -PersonalAccessToken 7a8ilh6db4aforlrnrthisisnotreal4uhlh5vgbmgap3mziwnga
```

Allows you to provide all the information on the command line.

### EXAMPLE 3
```
PS C:\> Set-VSTeamAccount -Account http://localtfs:8080/tfs/DefaultCollection -UseWindowsAuthentication
```

On Windows, allows you use to use Windows authentication against a local TFS server.

### EXAMPLE 4
```
PS C:\> Set-VSTeamAccount -Profile demonstrations
```

Will add the account from the profile provided.

### EXAMPLE 5
```
PS C:\> Set-VSTeamAccount -Profile demonstrations -Drive demo | Invoke-Expression
PS C:\> Set-Location demo:
PS demo:\> Get-ChildItem
```

Will add the account from the profile provided and mount a drive named demo that you can navigate like a file system.
If you do not pipe to Invoke-Expression you can simply copy and paste the output and execute it.

### EXAMPLE 6
```
PS C:\> Set-VSTeamAccount -Profile demonstrations -Level Machine
```

Will add the account from the profile provided and store the information at the Machine level.
Now any new PowerShell sessions will auto load this account.

Note: You must run PowerShell as an Administrator to store at the Machine level.

### EXAMPLE 7
```
PS C:\> Set-VSTeamAccount -Account mydemos -Token $(System.AccessToken) -UseBearerToken
```

Will add the account and use the OAuth Token provided by AzD when you check the Allow scripts to access OAuth token checkbox on the phase.
Using this method removes the need to create a Personal Access Token.
Note -Token is just an alias for -PersonalAccessToken. 
The token is scoped to only allow access to the account running the build or release.
To access other accounts you will have to use a personal access token.

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
Parameter Sets: Secure, Plain, Windows
Aliases:

Required: True
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SecurePersonalAccessToken
A secured string to capture your personal access token.

This will allow you to provide your personal access token without displaying it in plain text.

To use pat simply omit it from the Set-VSTeamAccount command.

```yaml
Type: SecureString
Parameter Sets: Secure
Aliases: PAT

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Level
On Windows allows you to store your account information at the Process, User or Machine levels.
When saved at the User or Machine level your account information will be in any future PowerShell processes.

To store at the Machine level you must be running PowerShell as an Administrator.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -PersonalAccessToken
The personal access token from AzD/TFS to use to access this account.

```yaml
Type: String
Parameter Sets: Plain
Aliases: Token

Required: True
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UseWindowsAuthentication
Allows the use of the current user's Windows credentials to authenticate against a local Team Foundation Server or Azure DevOps Server.
This cannot be used to connect to Azure DevOps Services.

```yaml
Type: SwitchParameter
Parameter Sets: Windows
Aliases:

Required: True
Position: Named
Default value: False
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -UseBearerToken
Switches the authorization from Basic to Bearer. 
You still use the PAT for PersonalAccessToken parameters to store the token.

```yaml
Type: SwitchParameter
Parameter Sets: Secure, Plain
Aliases:

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -Profile
The profile name stored using Add-VSTeamProfile function.
You can tab complete through existing profile names.

```yaml
Type: String
Parameter Sets: Profile
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName)
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
Parameter Sets: Secure, Plain, Windows
Aliases:

Required: False
Position: 3
Default value: TFS2017 for TFS and AzD for AzD
Accept pipeline input: False
Accept wildcard characters: False
```

### -Drive
The name of the drive you want to mount to this account.
The command you need to run will be presented.
Simply copy and paste the command to mount the drive.
To use the drive run Set-Location \[driveName\]:

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
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

[Set-VSTeamAccount]()

[Add-VSTeamProfile]()

[Clear-VSTeamDefaultProject]()

[Set-VSTeamDefaultProject]()


