---
id: Get-VSTeamPolicyType
title: Get-VSTeamPolicyType
hide_title: true
hide_table_of_contents: false
custom_edit_url: https://github.com/MethodsAndPractices/vsteam/edit/master/.docs/Get-VSTeamPolicyType.md
description: 
keywords:
  - vsteam
  - cmdlet
  - azure devops
---

# Get-VSTeamPolicyType

## SYNOPSIS
Get the policy types in the specified Azure DevOps or Team Foundation Server project.

## SYNTAX

```
Get-VSTeamPolicyType [-Id <Guid[]>] [-ProjectName] <String> [<CommonParameters>]
```

## DESCRIPTION
Get the policy types in the specified Azure DevOps or Team Foundation Server project.

## EXAMPLES

### EXAMPLE 1
```
PS C:\> Get-VSTeamPolicyType -ProjectName Demo
```

This command returns all the policy types for the Demo project.

### EXAMPLE 3
```
PS C:\> Get-VSTeamPolicyType -ProjectName Demo -Id 73da726a-8ff9-44d7-8caa-cbb581eac991
```

This command gets the policy type by the specified id within the Demo project.

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
Specifies one policy type by id.

```yaml
Type: Guid[]
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

[Get-VSTeamPolicy]()


