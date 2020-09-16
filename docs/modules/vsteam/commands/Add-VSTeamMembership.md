---
id: Add-VSTeamMembership
title: Add-VSTeamMembership
hide_title: true
hide_table_of_contents: false
custom_edit_url: https://github.com/MethodsAndPractices/vsteam/edit/master/.docs/Add-VSTeamMembership.md
description: 
keywords:
  - vsteam
  - cmdlet
  - azure devops
---

# Add-VSTeamMembership

## SYNOPSIS
Adds a membership to a container.

## SYNTAX

```
Add-VSTeamMembership [-MemberDescriptor] <String> [-ContainerDescriptor] <String> [<CommonParameters>]
```

## DESCRIPTION
Adds a membership to a container.

## EXAMPLES

### EXAMPLE 1
```
PS C:\> $user = Get-VSTeamUser | ? DisplayName -eq 'Test User'
PS C:\> $group = Get-VSTeamGroup | ? DisplayName -eq 'Endpoint Administrators'
PS C:\> Add-VSTeamMembership -MemberDescriptor $user.Descriptor -ContainerDescriptor $group.Descriptor
```

Adds Test User to the Endpoint Administrators group.

## PARAMETERS

### -MemberDescriptor
A member descriptor retrieved by Get-VsTeamUser

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: True
Position: 0
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ContainerDescriptor
A container descriptor retrieved by Get-VsTeamGroup

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: True
Position: 1
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

[Get-VsTeamUser]()

[Get-VsTeamGroup]()

[Get-VsTeamMembership]()

[Remove-VsTeamMembership]()

[Test-VsTeamMembership]()


