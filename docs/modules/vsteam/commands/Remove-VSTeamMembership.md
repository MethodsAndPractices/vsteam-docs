---
id: Remove-VSTeamMembership
title: Remove-VSTeamMembership
hide_title: true
hide_table_of_contents: false
custom_edit_url: https://github.com/MethodsAndPractices/vsteam/edit/master/.docs/Remove-VSTeamMembership.md
description: 
keywords:
  - vsteam
  - cmdlet
  - azure devops
---

# Remove-VSTeamMembership

## SYNOPSIS
Removes a membership to a container.

## SYNTAX

```
Remove-VSTeamMembership [-MemberDescriptor] <String> [-ContainerDescriptor] <String> [-Force] [-WhatIf]
 [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
Removes a membership to a container.

## EXAMPLES

### EXAMPLE 1
```
PS C:\> $user = Get-VSTeamUser | ? DisplayName -eq 'Test User'
PS C:\> $group = Get-VSTeamGroup | ? DisplayName -eq 'Endpoint Administrators'
PS C:\> Remove-VSTeamMembership -MemberDescriptor $user.Descriptor -ContainerDescriptor $group.Descriptor
```

Removes Test User from the Endpoint Administrators group.

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

### -Confirm
Prompts you for confirmation before running the cmdlet.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force
{{ Fill Force Description }}

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
Shows what would happen if the cmdlet runs.
The cmdlet is not run.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi

Required: False
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

[Get-VsTeamUser]()

[Get-VsTeamGroup]()

[Add-VsTeamMembership]()

[Get-VsTeamMembership]()

[Test-VsTeamMembership]()


