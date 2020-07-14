


# Add-VSTeamIteration

## SYNOPSIS

Adds a new iteration to the project

## SYNTAX

## EXAMPLES

### -------------------------- EXAMPLE 1 --------------------------

```PowerShell
PS C:\> Add-VSTeamIteration -ProjectName Demo -Name "NewIteration" -Path "MyIteration/Path"
```

This command adds a new iteration named NewIteration to the Demo project under the iteration path MyIteration/Path.

### -------------------------- EXAMPLE 2 --------------------------

```PowerShell
PS C:\> Add-VSTeamIteration -ProjectName "Demo" -FinishDate (Get-Date "31.01.2020") -StartDate (Get-Date "01.01.2020") -Name "NewIteration"
```

This command adds a new iteration named NewIteration to the Demo project with the start date 01.01.2020 and finish date 31.01.2020.

## DESCRIPTION

Adds a new iteration to the project

## PARAMETERS

### -ProjectName

Specifies the team project for which this function operates.

You can tab complete from a list of available projects.

You can use Set-VSTeamDefaultProject to set a default project so
you do not have to pass the ProjectName with each call.

```yaml
Type: String
Position: 0
Required: True
Accept pipeline input: true (ByPropertyName)
```

### -Name

Name of the new iteration.

```yaml
Type: string
```

### -Path

Path of the existing iteration under where the new one will be created.

```yaml
Type: string
```

### -StartDate

Start date of the iteration.

```yaml
Type: datetime
```

### -FinishDate

Finish date of the iteration.

```yaml
Type: datetime
```

## INPUTS

## OUTPUTS

### System.Object

## NOTES

This function is a wrapper of the base function Add-VSTeamClassificationNode.

## RELATED LINKS

[Add-VSTeamArea](Add-VSTeamArea.md)

[Add-VSTeamClassificationNode](Add-VSTeamClassificationNode.md)

