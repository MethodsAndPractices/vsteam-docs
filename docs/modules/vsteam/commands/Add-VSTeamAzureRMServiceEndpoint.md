---
id: Add-VSTeamAzureRMServiceEndpoint
title: Add-VSTeamAzureRMServiceEndpoint
hide_title: true
hide_table_of_contents: false
custom_edit_url: https://github.com/MethodsAndPractices/vsteam/edit/master/.docs/Add-VSTeamAzureRMServiceEndpoint.md
description: 
keywords:
  - vsteam
  - cmdlet
  - azure devops
---

# Add-VSTeamAzureRMServiceEndpoint

## SYNOPSIS
Adds a new Azure Resource Manager service endpoint.

## SYNTAX

### Automatic (Default)
```
Add-VSTeamAzureRMServiceEndpoint [-subscriptionName] <String> [-subscriptionId] <String>
 [-subscriptionTenantId] <String> [[-endpointName] <String>] [-ProjectName] <String> [<CommonParameters>]
```

### Manual
```
Add-VSTeamAzureRMServiceEndpoint [-subscriptionName] <String> [-subscriptionId] <String>
 [-subscriptionTenantId] <String> -servicePrincipalId <String> -servicePrincipalKey <String>
 [[-endpointName] <String>] [-ProjectName] <String> [<CommonParameters>]
```

## DESCRIPTION
The cmdlet adds a new connection between TFS/AzD and Azure using the Azure Resource Manager connection type.

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

### -endpointName
The name displayed on the services page.
In AzD this is the Connection Name.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: 4
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -servicePrincipalId
The ID of the Azure Service Principal to use with this service endpoint.

```yaml
Type: String
Parameter Sets: Manual
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -servicePrincipalKey
The key of the Azure Service Principal to use with this service endpoint.

```yaml
Type: String
Parameter Sets: Manual
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -subscriptionId
The id of the Azure subscription to use.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: True
Position: 2
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -subscriptionName
The name of the Azure Subscription.

```yaml
Type: String
Parameter Sets: (All)
Aliases: displayName

Required: True
Position: 1
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -subscriptionTenantId
The id of the Azure tenant to use.

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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

[Get-VSTeamServiceEndpoint]()

[Get-VSTeamServiceEndpointType]()

[Remove-VSTeamServiceEndpoint]()


