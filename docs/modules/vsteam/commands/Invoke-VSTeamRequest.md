---
id: Invoke-VSTeamRequest
title: Invoke-VSTeamRequest
hide_title: true
hide_table_of_contents: false
custom_edit_url: https://github.com/MethodsAndPractices/vsteam/edit/master/.docs/Invoke-VSTeamRequest.md
description: 
keywords:
  - vsteam
  - cmdlet
  - azure devops
---

# Invoke-VSTeamRequest

## SYNOPSIS
Allows you to call any TFS/AzD REST API.
All the Auth and Route Structure is taken care of for you.
Just provide the parts of the API call you need. 
If you need to send a non-standard URL use the -Url parameter. 
If the -Url is used the Url is not changed but the header and UserAgent are added for you.

## SYNTAX

```
Invoke-VSTeamRequest [-resource <String>] [-area <String>] [-id <String>] [-version <String>]
 [-subDomain <String>] [-method <String>] [-body <Object>] [-InFile <String>] [-OutFile <String>] [-JSON]
 [-ContentType <String>] [-Url <String>] [-AdditionalHeaders <Hashtable>] [-QueryString <Object>]
 [-Team <String>] [[-ProjectName] <String>] [-UseProjectId] [-NoProject] [<CommonParameters>]
```

## DESCRIPTION
Invoke-VSTeamRequest allows you to call a TFS/AzD REST API much easier than using Invoke-WebRequest directly.
The shape of the URI and authentication is all handled for you.

## EXAMPLES

### EXAMPLE 1
```
PS C:\> Invoke-VSTeamRequest -resource projectHistory -version '4.1-preview' -Verbose
```

This command will return the project history.

### EXAMPLE 2
```
PS C:\> ivr -area release -resource releases -version '4.1-preview' -subDomain vsrm -Verbose
```

This command will return the releases for a project.

## PARAMETERS

### -ProjectName
Specifies the team project for which this function operates.

You can tab complete from a list of available projects.

You can use Set-VSTeamDefaultProject to set a default project so you do not have to pass the ProjectName with each call.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: 0
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -ContentType
Specifies the content type of the request.

If this parameter is omitted and the request method is POST, the content type will be set to application/json.

Otherwise, the content type is not specified in the call.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: Application/json
Accept pipeline input: False
Accept wildcard characters: False
```

### -InFile
Path and file name to the file that contains the contents of the request.
If the path is omitted, the default is the current location.

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

### -OutFile
Specifies the output file for which this function saves the response body.
Enter a path and file name.
If you omit the path, the default is the current location.

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

### -JSON
Converts the PowerShell object into JSON and displays in the console.

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

### -AdditionalHeaders
Adds additional headers to the request

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

### -UseProjectId
Converts the project name to project id before building the URI for the REST API call.

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

### -area
The area to find the resource.
You can tab complete this value.
It can be filtered by passing -subDomain first.

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

### -body
Specifies the body of the request.
The body is the content of the request that follows the headers.

You can pipe a body value to Invoke-VSTeamRequest.

The Body parameter can be used to specify a list of query parameters or specify the content of the response.

When the input is a GET request and the body is an IDictionary (typically, a hash table), the body is added to the URI as query parameters.
For other GET requests, the body is set as the value of the request body in the standard name=value format.

```yaml
Type: Object
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -id
The unique value of the item you want to work with.

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

### -method
Specifies the method used for the request.
The acceptable values for this parameter are:

- Get
- Post
- Patch
- Delete
- Options
- Put
- Default
- Trace
- Head
- Merge

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: Get
Accept pipeline input: False
Accept wildcard characters: False
```

### -NoProject
{{ Fill NoProject Description }}

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

### -QueryString
{{ Fill QueryString Description }}

```yaml
Type: Object
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -resource
The name of the feature you want to manipulate.
You can tab complete this value if you pass -Area before this parameter.

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

### -subDomain
The SubDomain before .dev.azure.com.
For example, to target Release Management you must use the SubDomain vsrm.

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

### -Team
{{ Fill Team Description }}

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

### -Url
{{ Fill Url Description }}

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

### -version
The version of the API you wish to target.

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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### System.String
## OUTPUTS

### System.Object
## NOTES

## RELATED LINKS

