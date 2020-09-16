---
id: Get-VSTeamCloudSubscription
title: Get-VSTeamCloudSubscription
hide_title: true
hide_table_of_contents: false
custom_edit_url: https://github.com/MethodsAndPractices/vsteam/edit/master/.docs/Get-VSTeamCloudSubscription.md
description: 
keywords:
  - vsteam
  - cmdlet
  - azure devops
---

# Get-VSTeamCloudSubscription

## SYNOPSIS
Gets the Azure subscriptions associated with the Team Services account.

## SYNTAX

```
Get-VSTeamCloudSubscription [<CommonParameters>]
```

## DESCRIPTION
The Get-VSTeamCloudSubscription function gets the Azure subscriptions associated with the Team Services account.

## EXAMPLES

### EXAMPLE 1
```
PS C:\> Get-VSTeamCloudSubscription
```

This command gets a list of all Azure subscriptions associated with the Team Services account.

## PARAMETERS

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### None
## OUTPUTS

### Team.AzureSubscription
## NOTES
This function currently is not supported in TFS.

## RELATED LINKS

[Set-VSTeamAccount]()


