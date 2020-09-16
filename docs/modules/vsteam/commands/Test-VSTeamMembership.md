---
id: Test-VSTeamMembership
title: Test-VSTeamMembership
hide_title: true
hide_table_of_contents: false
custom_edit_url: https://github.com/MethodsAndPractices/vsteam/edit/master/.docs/Test-VSTeamMembership.md
description: 
keywords:
  - vsteam
  - cmdlet
  - azure devops
---

# Test-VSTeamMembership

## SYNOPSIS
Tests the membership in a container.

## SYNTAX

```
Test-VSTeamMembership [-MemberDescriptor] <String> [-ContainerDescriptor] <String> [<CommonParameters>]
```

## DESCRIPTION
Tests the membership in a container.

## EXAMPLES

### Example 1
```powershell
PS C:\> {{ Add example code here }}
```

{{ Add example description here }}

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
Accept pipeline input: True (ByPropertyName)
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
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

### System.Boolean
## NOTES

## RELATED LINKS

[Get-VsTeamUser]()

[Get-VsTeamGroup]()

[Add-VsTeamMembership]()

[Get-VsTeamMembership]()

[Remove-VsTeamMembership]()


