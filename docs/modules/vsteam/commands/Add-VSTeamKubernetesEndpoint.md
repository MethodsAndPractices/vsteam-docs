---
id: Add-VSTeamKubernetesEndpoint
title: Add-VSTeamKubernetesEndpoint
hide_title: true
hide_table_of_contents: false
custom_edit_url: https://github.com/MethodsAndPractices/vsteam/edit/master/.docs/Add-VSTeamKubernetesEndpoint.md
description: 
keywords:
  - vsteam
  - cmdlet
  - azure devops
---

# Add-VSTeamKubernetesEndpoint

## SYNOPSIS
Adds connections to Kubernetes clusters

## SYNTAX

```
Add-VSTeamKubernetesEndpoint [-endpointName] <String> -kubeconfig <String> -kubernetesUrl <String>
 -clientCertificateData <String> -clientKeyData <String> [-acceptUntrustedCerts] [-generatePfx]
 [-ProjectName] <String> [<CommonParameters>]
```

## DESCRIPTION
The cmdlet adds a new connection between TFS/AzD and a Kubernetes cluster using kubeconfig json.

This is only used when using the Kubernetes tasks.

## EXAMPLES

### Example 1
```powershell
PS C:\> {{ Add example code here }}
```

{{ Add example description here }}

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

### -acceptUntrustedCerts
Accept untrusted certificates for cluster

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

### -clientCertificateData
Client certificate from Kubeconfig

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

### -clientKeyData
Client private key from Kubeconfig

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

### -endpointName
The name displayed on the services page.
In AzD this is the Connection Name.

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

### -generatePfx
Generate pfx file

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

### -kubeconfig
kubeconfig as JSON string

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

### -kubernetesUrl
URL of Kubernetes cluster

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

### System.String
## OUTPUTS

### System.Object
## NOTES

## RELATED LINKS

[Get-VSTeamServiceEndpoint]()

[Get-VSTeamServiceEndpointType]()

[Remove-VSTeamServiceEndpoint]()


