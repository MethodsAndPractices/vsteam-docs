---
id: Get-VSTeamPolicy
title: Get-VSTeamPolicy
hide_title: true
hide_table_of_contents: false
custom_edit_url: https://github.com/MethodsAndPractices/vsteam/edit/master/.docs/Get-VSTeamPolicy.md
description: 
keywords:
  - vsteam
  - cmdlet
  - azure devops
---

# Get-VSTeamPolicy

## SYNOPSIS
Get the code policies in the specified Azure DevOps or Team Foundation Server project.

## SYNTAX

```
Get-VSTeamPolicy [-Id <Int32[]>] [-ProjectName] <String> [<CommonParameters>]
```

## DESCRIPTION
Get the code policies in the specified Azure DevOps or Team Foundation Server project.

## EXAMPLES

### EXAMPLE 1
```
PS C:\> Get-VSTeamPolicy -ProjectName Demo
```

This command returns all the policies for the Demo project in your TFS or Team Services account.

### EXAMPLE 2
```
PS C:\> Get-VSTeamPolicy -ProjectName Demo -Id 1
```

This command gets the policy with an id of 1 within the Demo project.

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

### -Id
Specifies one code policy by id.

The id is an integer.
Unique within each project.

```yaml
Type: Int32[]
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

[Add-VSTeamPolicy]()

[Remove-VSTeamPolicy]()

[Get-VSTeamPolicyType]()


