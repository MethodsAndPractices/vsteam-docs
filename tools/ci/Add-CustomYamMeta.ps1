[CmdletBinding()]
param (
    [Parameter(Mandatory = $false)]
    [string]
    $Path,
    [Parameter(Mandatory = $true)]
    [string]
    $BaseEditUrlPath
)

$files = Get-ChildItem -Path $Path  -Filter '*-*.md'

foreach ($file in $files) {

    $fileContent = (Get-Content -Path $file.FullName -Encoding UTF8)

    $stringContent = $fileContent | Out-String

    #get the snyopsis for the description
    [regex] $regex = '(?s)(\#\# *SYNOPSIS)(.*?)(\#\# *SYNTAX)'

    $synopsis = $null
    if ($fileContent -match $regex) {
        $synopsis = $Matches[2].Trim("`r`n")
    }

    #get the yaml meta data header
    [regex] $regex = '(?sm)(---)(.*?)(---)'

    $yamlMeta = @"
---
id: $($file.BaseName)
title: $($file.BaseName)
hide_title: true
hide_table_of_contents: false
custom_edit_url: $BaseEditUrlPath/$($file.Name)
description: '$synopsis'
keywords:
  - vsteam
  - cmdlet
  - azure devops
---
"@

    $formatedContent = $stringContent -replace $regex, $yamlMeta

    $formatedContent | Set-Content -Path $file.FullName -Encoding UTF8
}