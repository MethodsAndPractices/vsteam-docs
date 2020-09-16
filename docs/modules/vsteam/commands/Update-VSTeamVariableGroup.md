---
id: Update-VSTeamVariableGroup
title: Update-VSTeamVariableGroup
hide_title: true
hide_table_of_contents: false
custom_edit_url: https://github.com/MethodsAndPractices/vsteam/edit/master/.docs/Update-VSTeamVariableGroup.md
description: 
keywords:
  - vsteam
  - cmdlet
  - azure devops
---

# Update-VSTeamVariableGroup

## SYNOPSIS
Updates an existing variable group

## SYNTAX

### ByHashtable
```
Update-VSTeamVariableGroup -Id <String> -Name <String> [-Description <String>] -Variables <Hashtable> [-Force]
 [-ProjectName] <String> [-WhatIf] [-Confirm] [<CommonParameters>]
```

### ByBody
```
Update-VSTeamVariableGroup -Id <String> -Body <String> [-Force] [-ProjectName] <String> [-WhatIf] [-Confirm]
 [<CommonParameters>]
```

## DESCRIPTION
Updates an existing variable group

## EXAMPLES

### EXAMPLE 1
```
$methodParameters = @{
   ProjectName              = "some_project_name"
   Name        = "new_variable_group"
   Description = "Describe the Variable Group"
   Type        = "Vsts"
   Variables   = @{
      key1 = @{
         value = "value1"
         isSecret = $true
      }
   }
}

$newVariableGroup = Add-VSTeamVariableGroup @methodParameters

$methodParameters = @{
   id                       = $newVariableGroup.id
   ProjectName              = "some_project_name"
   Name        = "new_variable_group"
   Description = "Describe the Variable Group"
   Type        = "AzureKeyVault"
   Variables   = @{
      name_of_existing_secret  = @{
         enabled     = $true
         contentType = ""
         value       = ""
         isSecret    = $true
      }
   }
   ProviderData =  @{
      serviceEndpointId = "AzureRMServiceEndpointGuid"
      vault             = "name_of_existing_key_vault"
   }
}

Update-VSTeamVariableGroup @methodParameters
```

### EXAMPLE 2
```
# Copy variable group varGroupName from project sourceProjectName to project targetProjectName.  If varGroupName already exists, we'll update it; else, we'll add it.

$Name = "varGroupName"
$FromProject  = "sourceProjectName"
$ToProject = "targetProjectName"

$FromVariableGroupObject = Get-VSTeamVariableGroup -Name $Name -ProjectName $FromProject
$body = ConvertTo-Json -InputObject $FromVariableGroupObject -Depth 100 -Compress
$toVariableGroupObject = Get-VSTeamVariableGroup -Name $Name -ProjectName $ToProject
if ($toVariableGroupObject) {
   Update-VSTeamVariableGroup -Body $body -ProjectName $ToProject -Id $toVariableGroupObject.id
}
else {
   Add-VSTeamVariableGroup -Body $body -ProjectName $ToProject
}
```

## PARAMETERS

### -Confirm
Prompts you for confirmation before running the cmdlet.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force
Does not prompt

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

### -WhatIf
Shows what would happen if the cmdlet runs.
The cmdlet is not run.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -Id
ID of the existing variable group

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -Description
The variable group description

```yaml
Type: String
Parameter Sets: ByHashtable
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -Name
The variable group name

```yaml
Type: String
Parameter Sets: ByHashtable
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -Variables
The variable group variables.

```yaml
Type: Hashtable
Parameter Sets: ByHashtable
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -Body
The json that represents the task group as a string

```yaml
Type: String
Parameter Sets: ByBody
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

### System.String
System.Collections.Hashtable

## OUTPUTS

### System.Object
## NOTES

## RELATED LINKS

[Add-VSTeamVariableGroup]()

[Get-VSTeamVariableGroup]()

[Remove-VSTeamVariableGroup]()


