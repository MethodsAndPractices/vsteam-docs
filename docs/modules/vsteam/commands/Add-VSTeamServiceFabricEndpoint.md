---
id: Add-VSTeamServiceFabricEndpoint
title: Add-VSTeamServiceFabricEndpoint
hide_title: true
hide_table_of_contents: false
custom_edit_url: https://github.com/MethodsAndPractices/vsteam/edit/master/.docs/Add-VSTeamServiceFabricEndpoint.md
description: 
keywords:
  - vsteam
  - cmdlet
  - azure devops
---

# Add-VSTeamServiceFabricEndpoint

## SYNOPSIS
Adds a new Service Fabric service endpoint.

## SYNTAX

### Certificate (Default)
```
Add-VSTeamServiceFabricEndpoint [-endpointName] <String> [-url] <String> -certificate <String>
 -certificatePassword <SecureString> -serverCertThumbprint <String> [-ProjectName] <String>
 [<CommonParameters>]
```

### AzureAd
```
Add-VSTeamServiceFabricEndpoint [-endpointName] <String> [-url] <String> -serverCertThumbprint <String>
 -username <String> -password <SecureString> [-ProjectName] <String> [<CommonParameters>]
```

### None
```
Add-VSTeamServiceFabricEndpoint [-endpointName] <String> [-url] <String> [-clusterSpn <String>]
 [[-useWindowsSecurity] <Boolean>] [-ProjectName] <String> [<CommonParameters>]
```

## DESCRIPTION
The cmdlet adds a new Service Fabric service endpoint to an existing project.

## EXAMPLES

### EXAMPLE 1
```
PS C:\> Add-VSTeamServiceFabricEndpoint -ProjectName "SomeProjectName" -endpointName "NoAuthTest" -url "tcp://10.0.0.1:19000" -useWindowsSecurity $false
```

Adds a Service Fabric Endpoint for a non-secure cluster

### EXAMPLE 2
```
PS C:\> $password = '00000000-0000-0000-0000-000000000000' | ConvertTo-SecureString -AsPlainText -Force
PS C:\> Add-VSTeamServiceFabricEndpoint -ProjectName "SomeProjectName" -endpointName "AzureAdAuthTest" -url "tcp://10.0.0.1:19000" -serverCertThumbprint "SOMECERTTHUMBPRINT" -username "someUser@someplace.com" -password $password
```

Adds a Service Fabric Endpoint for an Azure AD secured cluster.

### EXAMPLE 3
```
PS C:\> $password = '00000000-0000-0000-0000-000000000000' | ConvertTo-SecureString -AsPlainText -Force
PS C:\> $pathToPFX = "C:\someFolder\theCertificateFile.pfx"
PS C:\> $base64Cert = [System.Convert]::ToBase64String([System.IO.File]::ReadAllBytes($pathToPFX))
PS C:\> Add-VSTeamServiceFabricEndpoint -ProjectName "SomeProjectName" -endpointName "CertificateAuthTest" -url "tcp://10.0.0.1:19000" -serverCertThumbprint "SOMECERTTHUMBPRINT" -certificate $base64Cert -certificatePassword $password
```

Adds a Service Fabric Endpoint for a certificate secured cluster.

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

### -url
The url of the Service Fabric management endpoint.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: True
Position: 1
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -useWindowsSecurity
If windows integrated authentication should be enabled.
If set to false, all authentication is disabled.

```yaml
Type: Boolean
Parameter Sets: None
Aliases:

Required: False
Position: 2
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -clusterSpn
Specify the cluster service principal name, for use with windows integrated authentication.

```yaml
Type: String
Parameter Sets: None
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -serverCertThumbprint
The server certificate thumbprint, used for communicating with the Service Fabric cluster.

```yaml
Type: String
Parameter Sets: Certificate, AzureAd
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -username
The Azure AD Username, used for communicating with the Service Fabric cluster.

```yaml
Type: String
Parameter Sets: AzureAd
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -password
The Password for the Azure AD User, used for communicating with the Service Fabric cluster.

```yaml
Type: SecureString
Parameter Sets: AzureAd
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -certificate
The certificate used for communicating with the Service Fabric cluster.

```yaml
Type: String
Parameter Sets: Certificate
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -certificatePassword
The Password for the certificate used for communicating with the Service Fabric cluster.

```yaml
Type: SecureString
Parameter Sets: Certificate
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -endpointName
The name displayed on the services page.
In AzD this is the Connection Name.

```yaml
Type: String
Parameter Sets: (All)
Aliases: displayName

Required: True
Position: 3
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

### Team.ServiceEndpoint
## NOTES

## RELATED LINKS

[Get-VSTeamServiceEndpoint]()

[Get-VSTeamServiceEndpointType]()

[Remove-VSTeamServiceEndpoint]()


