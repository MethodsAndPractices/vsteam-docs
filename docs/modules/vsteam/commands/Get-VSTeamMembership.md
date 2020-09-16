---
id: Get-VSTeamMembership
title: Get-VSTeamMembership
hide_title: true
hide_table_of_contents: false
custom_edit_url: https://github.com/MethodsAndPractices/vsteam/edit/master/.docs/Get-VSTeamMembership.md
description: 
keywords:
  - vsteam
  - cmdlet
  - azure devops
---

# Get-VSTeamMembership

## SYNOPSIS
Gets a memberships for a container or member.

## SYNTAX

### ByContainerId
```
Get-VSTeamMembership [-ContainerDescriptor] <String> [<CommonParameters>]
```

### ByMemberId
```
Get-VSTeamMembership [-MemberDescriptor] <String> [<CommonParameters>]
```

## DESCRIPTION
Gets a memberships for a container or member.

## EXAMPLES

### EXAMPLE 1
```
(Get-VSTeamMembership -MemberDescriptor $user.ID).value | % { Get-VSTeamGroup -Descriptor $_.containerDescriptor }
```

Get all the groups for a user

### EXAMPLE 2
```
(Get-VSTeamMembership -ContainerDescriptor $group.id).value | % {Get-VSTeamUser -Descriptor $_.memberDescriptor }
```

Get all the members for a group

## PARAMETERS

### -ContainerDescriptor
A container descriptor retrieved by Get-VsTeamGroup

```yaml
Type: String
Parameter Sets: ByContainerId
Aliases:

Required: True
Position: 0
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### -MemberDescriptor
A member descriptor retrieved by Get-VsTeamUser

```yaml
Type: String
Parameter Sets: ByMemberId
Aliases:

Required: True
Position: 0
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

[Get-VsTeamUser]()

[Get-VsTeamGroup]()

[Add-VsTeamMembership]()

[Remove-VsTeamMembership]()

[Test-VsTeamMembership]()


