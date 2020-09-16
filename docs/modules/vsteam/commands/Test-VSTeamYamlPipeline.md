---
id: Test-VSTeamYamlPipeline
title: Test-VSTeamYamlPipeline
hide_title: true
hide_table_of_contents: false
custom_edit_url: https://github.com/MethodsAndPractices/vsteam/edit/master/.docs/Test-VSTeamYamlPipeline.md
description: 
keywords:
  - vsteam
  - cmdlet
  - azure devops
---

# Test-VSTeamYamlPipeline

## SYNOPSIS
Tests the commited YAML pipeline files to check for inconsitencies.
Now, you can try out a YAML pipeline without committing it to a repo or running it.
Given an existing pipeline and an optional new YAML payload, this function will give you back the full YAML pipeline.

## SYNTAX

### WithFilePath (Default)
```
Test-VSTeamYamlPipeline [-PipelineId] <Int32> [-FilePath <String>] [-ProjectName] <String> [<CommonParameters>]
```

### WithYamlOverride
```
Test-VSTeamYamlPipeline [-PipelineId] <Int32> [-YamlOverride <String>] [-ProjectName] <String>
 [<CommonParameters>]
```

## DESCRIPTION
Tests the commited YAML pipeline files to check for inconsitencies.
Now, you can try out a YAML pipeline without committing it to a repo or running it.
Given an existing pipeline and an optional new YAML payload, this function will give you back the full YAML pipeline.

## EXAMPLES

### EXAMPLE 1
```
PS C:\> Test-VSTeamYamlPipeline -Project DemoProject -PipelineId 24 -FilePath './azure-pipelines.yml'

Name Id url                                                                                           state
---
id: Test-VSTeamYamlPipeline
title: Test-VSTeamYamlPipeline
hide_title: true
hide_table_of_contents: false
custom_edit_url: https://github.com/MethodsAndPractices/vsteam/edit/master/.docs/Test-VSTeamYamlPipeline.md
description: 
keywords:
  - vsteam
  - cmdlet
  - azure devops
---                                                                                           -----
     -1 https://dev.azure.com/devsdb/3428bdd7-9fed-4c30-a6c9-fcb52f084ab9/_apis/pipelines/24/runs/-1 unknown
```

This example checks the YAML pipeline with ID 24 and the file './azure-pipelines.yml' for consistency on Azure DevOps to see if the changes still work.

### EXAMPLE 2
```
PS C:\> $yamlOverride = [string](Get-Content -raw $FilePath)
PS C:\> Test-VSTeamYamlPipeline -Project DemoProject -PipelineId 24 -YamlOverride $yamlOverride
```

This example checks the YAML pipeline with ID 24 and the content of a yaml file in the variable $yamlOverride for consistency on Azure DevOps to see if the changes still work.

### EXAMPLE 3
```
PS C:\> $yamlOverride = [string](Get-Content -raw $FilePath)
PS C:\> Test-VSTeamYamlPipeline -Project DemoProject -PipelineId 24
```

This example checks the YAML pipeline with ID 24 for consistency on Azure DevOps to see if the existing YAML of the pipeline works.

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

### -PipelineId
Id of the YAML pipeline to be checked

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:

Required: True
Position: 1
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -FilePath
Path to the file that should be checked

```yaml
Type: String
Parameter Sets: WithFilePath
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -YamlOverride
{{ Fill YamlOverride Description }}

```yaml
Type: String
Parameter Sets: WithYamlOverride
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
FilePath

### System.Int32
PipelineId

## OUTPUTS

### Team.YamlPipelineResult
## NOTES
If you do not set the default project by called Set-VSTeamDefaultProject before calling Add-VSTeamBuild you will have to type in the names.

Currently the API that is used by this cmdlet is only supporting YAML pipelines without template references.
This will be supported soon.
see the issue in GitHub: https://github.com/microsoft/azure-pipelines-yaml/issues/34#issuecomment-591092498 (https://github.com/microsoft/azure-pipelines-yaml/issues/34#issuecomment-591092498)

## RELATED LINKS

[Get-VSTeamBuildDefinition]()


