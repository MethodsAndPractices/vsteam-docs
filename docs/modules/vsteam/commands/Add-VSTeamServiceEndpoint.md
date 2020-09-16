---
id: Add-VSTeamServiceEndpoint
title: Add-VSTeamServiceEndpoint
hide_title: true
hide_table_of_contents: false
custom_edit_url: https://github.com/MethodsAndPractices/vsteam/edit/master/.docs/Add-VSTeamServiceEndpoint.md
description: 
keywords:
  - vsteam
  - cmdlet
  - azure devops
---

# Add-VSTeamServiceEndpoint

## SYNOPSIS
Adds a generic service connection

## SYNTAX

```
Add-VSTeamServiceEndpoint [-endpointName] <String> [-endpointType] <String> -object <Hashtable>
 [-ProjectName] <String> [<CommonParameters>]
```

## DESCRIPTION
The cmdlet adds a new generic connection between TFS/AzD and a third party service (see AzD for available connections).

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

Required: True
Position: 2
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -endpointType
Type of endpoint (eg.
\`kubernetes\`, \`sonarqube\`).
See AzD service page for supported endpoints.

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

### -object
Hashtable of Payload for REST call

```yaml
Type: Hashtable
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

## OUTPUTS

### Team.ServiceEndpoint
## NOTES

## RELATED LINKS

[Get-VSTeamServiceEndpoint]()

[Get-VSTeamServiceEndpointType]()

[Remove-VSTeamServiceEndpoint]()


