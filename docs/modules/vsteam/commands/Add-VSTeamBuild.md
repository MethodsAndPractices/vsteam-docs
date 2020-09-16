---
id: Add-VSTeamBuild
title: Add-VSTeamBuild
hide_title: true
hide_table_of_contents: false
custom_edit_url: https://github.com/MethodsAndPractices/vsteam/edit/master/.docs/Add-VSTeamBuild.md
description: 
keywords:
  - vsteam
  - cmdlet
  - azure devops
---

# Add-VSTeamBuild

## SYNOPSIS
Queues a new build.

## SYNTAX

### ByName (Default)
```
Add-VSTeamBuild [-SourceBranch <String>] [-BuildParameters <Hashtable>] [-ProjectName] <String>
 [-QueueName <String>] [-BuildDefinitionName <String>] [<CommonParameters>]
```

### ByID
```
Add-VSTeamBuild [-BuildDefinitionId <Int32>] [-SourceBranch <String>] [-BuildParameters <Hashtable>]
 [-ProjectName] <String> [-QueueName <String>] [-BuildDefinitionName <String>] [<CommonParameters>]
```

## DESCRIPTION
Add-VSTeamBuild will queue a new build.

You can override the queue in the build definition by using the QueueName parameter.
You can override the default source branch by using the SourceBranch parameter.
You can also set specific build parameters by using the BuildParameters parameter.

To have the BuildDefinition and QueueNames tab complete you must set a default project by calling Set-VSTeamDefaultProject before you call Add-VSTeamBuild.

## EXAMPLES

### EXAMPLE 1
```
PS C:\> Set-VSTeamDefaultProject Demo
PS C:\> Add-VSTeamBuild -BuildDefinition Demo-CI

Build Definition Build Number  Status     Result
---
id: Add-VSTeamBuild
title: Add-VSTeamBuild
hide_title: true
hide_table_of_contents: false
custom_edit_url: https://github.com/MethodsAndPractices/vsteam/edit/master/.docs/Add-VSTeamBuild.md
description: 
keywords:
  - vsteam
  - cmdlet
  - azure devops
------
id: Add-VSTeamBuild
title: Add-VSTeamBuild
hide_title: true
hide_table_of_contents: false
custom_edit_url: https://github.com/MethodsAndPractices/vsteam/edit/master/.docs/Add-VSTeamBuild.md
description: 
keywords:
  - vsteam
  - cmdlet
  - azure devops
------
id: Add-VSTeamBuild
title: Add-VSTeamBuild
hide_title: true
hide_table_of_contents: false
custom_edit_url: https://github.com/MethodsAndPractices/vsteam/edit/master/.docs/Add-VSTeamBuild.md
description: 
keywords:
  - vsteam
  - cmdlet
  - azure devops
------
id: Add-VSTeamBuild
title: Add-VSTeamBuild
hide_title: true
hide_table_of_contents: false
custom_edit_url: https://github.com/MethodsAndPractices/vsteam/edit/master/.docs/Add-VSTeamBuild.md
description: 
keywords:
  - vsteam
  - cmdlet
  - azure devops
------
id: Add-VSTeamBuild
title: Add-VSTeamBuild
hide_title: true
hide_table_of_contents: false
custom_edit_url: https://github.com/MethodsAndPractices/vsteam/edit/master/.docs/Add-VSTeamBuild.md
description: 
keywords:
  - vsteam
  - cmdlet
  - azure devops
------
id: Add-VSTeamBuild
title: Add-VSTeamBuild
hide_title: true
hide_table_of_contents: false
custom_edit_url: https://github.com/MethodsAndPractices/vsteam/edit/master/.docs/Add-VSTeamBuild.md
description: 
keywords:
  - vsteam
  - cmdlet
  - azure devops
------
id: Add-VSTeamBuild
title: Add-VSTeamBuild
hide_title: true
hide_table_of_contents: false
custom_edit_url: https://github.com/MethodsAndPractices/vsteam/edit/master/.docs/Add-VSTeamBuild.md
description: 
keywords:
  - vsteam
  - cmdlet
  - azure devops
------
id: Add-VSTeamBuild
title: Add-VSTeamBuild
hide_title: true
hide_table_of_contents: false
custom_edit_url: https://github.com/MethodsAndPractices/vsteam/edit/master/.docs/Add-VSTeamBuild.md
description: 
keywords:
  - vsteam
  - cmdlet
  - azure devops
------
id: Add-VSTeamBuild
title: Add-VSTeamBuild
hide_title: true
hide_table_of_contents: false
custom_edit_url: https://github.com/MethodsAndPractices/vsteam/edit/master/.docs/Add-VSTeamBuild.md
description: 
keywords:
  - vsteam
  - cmdlet
  - azure devops
---- ---
id: Add-VSTeamBuild
title: Add-VSTeamBuild
hide_title: true
hide_table_of_contents: false
custom_edit_url: https://github.com/MethodsAndPractices/vsteam/edit/master/.docs/Add-VSTeamBuild.md
description: 
keywords:
  - vsteam
  - cmdlet
  - azure devops
------
id: Add-VSTeamBuild
title: Add-VSTeamBuild
hide_title: true
hide_table_of_contents: false
custom_edit_url: https://github.com/MethodsAndPractices/vsteam/edit/master/.docs/Add-VSTeamBuild.md
description: 
keywords:
  - vsteam
  - cmdlet
  - azure devops
---  ---
id: Add-VSTeamBuild
title: Add-VSTeamBuild
hide_title: true
hide_table_of_contents: false
custom_edit_url: https://github.com/MethodsAndPractices/vsteam/edit/master/.docs/Add-VSTeamBuild.md
description: 
keywords:
  - vsteam
  - cmdlet
  - azure devops
---     ---
id: Add-VSTeamBuild
title: Add-VSTeamBuild
hide_title: true
hide_table_of_contents: false
custom_edit_url: https://github.com/MethodsAndPractices/vsteam/edit/master/.docs/Add-VSTeamBuild.md
description: 
keywords:
  - vsteam
  - cmdlet
  - azure devops
---
Demo-CI           Demo-CI-45   notStarted
```

This example queues the build for the 'develop' branch, overriding the default branch in the build definition.

### EXAMPLE 3
```
PS C:\> Set-VSTeamDefaultProject Demo
PS C:\> Add-VSTeamBuild -BuildDefinition Demo-CI -BuildParameters @{msg="hello world!"; 'system.debug'='true'}

Build Definition Build Number  Status     Result
---
id: Add-VSTeamBuild
title: Add-VSTeamBuild
hide_title: true
hide_table_of_contents: false
custom_edit_url: https://github.com/MethodsAndPractices/vsteam/edit/master/.docs/Add-VSTeamBuild.md
description: 
keywords:
  - vsteam
  - cmdlet
  - azure devops
------
id: Add-VSTeamBuild
title: Add-VSTeamBuild
hide_title: true
hide_table_of_contents: false
custom_edit_url: https://github.com/MethodsAndPractices/vsteam/edit/master/.docs/Add-VSTeamBuild.md
description: 
keywords:
  - vsteam
  - cmdlet
  - azure devops
------
id: Add-VSTeamBuild
title: Add-VSTeamBuild
hide_title: true
hide_table_of_contents: false
custom_edit_url: https://github.com/MethodsAndPractices/vsteam/edit/master/.docs/Add-VSTeamBuild.md
description: 
keywords:
  - vsteam
  - cmdlet
  - azure devops
------
id: Add-VSTeamBuild
title: Add-VSTeamBuild
hide_title: true
hide_table_of_contents: false
custom_edit_url: https://github.com/MethodsAndPractices/vsteam/edit/master/.docs/Add-VSTeamBuild.md
description: 
keywords:
  - vsteam
  - cmdlet
  - azure devops
------
id: Add-VSTeamBuild
title: Add-VSTeamBuild
hide_title: true
hide_table_of_contents: false
custom_edit_url: https://github.com/MethodsAndPractices/vsteam/edit/master/.docs/Add-VSTeamBuild.md
description: 
keywords:
  - vsteam
  - cmdlet
  - azure devops
------
id: Add-VSTeamBuild
title: Add-VSTeamBuild
hide_title: true
hide_table_of_contents: false
custom_edit_url: https://github.com/MethodsAndPractices/vsteam/edit/master/.docs/Add-VSTeamBuild.md
description: 
keywords:
  - vsteam
  - cmdlet
  - azure devops
------
Demo-CI           Demo-CI-45   notStarted
```

This example queues the build and sets the system.debug variable to true and msg to 'hello world!'.

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

### -BuildDefinitionName
The name of the build definition to use to queue to build.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -QueueName
The name of the queue to use for this build.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -BuildDefinitionId
The Id of the build definition to use to queue to build.

```yaml
Type: Int32
Parameter Sets: ByID
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -SourceBranch
Which source branch to use for this build.
Overrides default branch in build definition.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -BuildParameters
A hashtable with build parameters.

```yaml
Type: Hashtable
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### System.String
ProjectName

BuildDefinitionName

QueueName

SourceBranch

### System.Int32
BuildDefinitionId

### System.Collections.Hashtable
Build Parameters

## OUTPUTS

### Team.Build
## NOTES
BuildDefinition and QueueName are dynamic parameters and use the default project value to query their validate set.

If you do not set the default project by called Set-VSTeamDefaultProject before calling Add-VSTeamBuild you will have to type in the names.

## RELATED LINKS

