---
id: Add-VSTeamPolicy
title: Add-VSTeamPolicy
hide_title: true
hide_table_of_contents: false
custom_edit_url: https://github.com/MethodsAndPractices/vsteam/edit/master/.docs/Add-VSTeamPolicy.md
description: 
keywords:
  - vsteam
  - cmdlet
  - azure devops
---

# Add-VSTeamPolicy

## SYNOPSIS
Adds a new policy to the specified project.

## SYNTAX

```
Add-VSTeamPolicy -type <Guid> [-enabled] [-blocking] -settings <Hashtable> [-ProjectName] <String>
 [<CommonParameters>]
```

## DESCRIPTION
Adds a new policy to the specified project.

## EXAMPLES

### EXAMPLE 1
```
PS C:\> Add-VSTeamPolicy -ProjectName Demo -type 687c53f8-1a82-4e89-9a86-13d51bc4a8d5 -enabled -blocking -settings @{MinimumApproverCount = 1;Scope=@(@{repositoryId=b87c5af8-1a82-4e59-9a86-13d5cbc4a8d5; matchKind="Exact"; refName="refs/heads/master"})}
```

This command adds a new policy to the Demo project's repository specified.
The policy added requires a minimum number of reviewers and applies to the master branch.
Specifying \`-blocking\` will block pushes to master directly.

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

### -type
Specifies the id of the type of policy to be created.

```yaml
Type: Guid
Parameter Sets: (All)
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -enabled
Enables the policy

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

### -blocking
Determines if the policy will block pushes to the branch if the policy is not adhered to.

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

### -settings
The settings for the policy.

Each policy type has it's own settings that will need to be set.

```yaml
Type: Hashtable
Parameter Sets: (All)
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

[Get-VSTeamPolicy]()

[Remove-VSTeamPolicy]()

[Get-VSTeamPolicyType]()


