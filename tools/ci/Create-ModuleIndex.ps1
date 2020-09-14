[CmdletBinding()]
param (
    [Parameter(Mandatory = $true)]
    [string]
    $Path
)

Write-Output "Creating file index for module in path $Path"

# for the markdown index file
$sbMarkdownIndex = New-Object System.Text.StringBuilder

$files = Get-ChildItem -Path $Path  -Filter '*-*.md'


foreach ($file in $files) {

    $fileContent = (Get-Content -Path $file.FullName -Encoding utf8 | Out-String)

    $null = $sbMarkdownIndex.Append("### [$($file.BaseName)]($($file.Name))`r`n`r`n")

    #regex is search all text between the header '## SYNOPSIS' and '## SYNTAX' to get the cmdlet summary including new lines
    [regex] $regex = '(?s)(\#\# *SYNOPSIS)(.*?)(\#\# *SYNTAX)'

    if ($fileContent -match $regex) {
        $synopsis = $Matches[2].Trim("`r`n")
        $null = $sbMarkdownIndex.Append("$synopsis`r`n`r`n")
    }

}

$indexFile = "---
title: Command List
hide_title: false
keywords:
  - VSTeam
  - Team Services
  - VSTS
  - TFS
  - VSO
  - DevOps
  - Azure DevOps
  - Summary
---


:::note
Currently there are $($files.Count) commandlets in the module.
:::
"

$sbMarkdownIndex.Insert(0, "$indexFile`r`n")

Write-Output 'Creating cmdlet index file'
Set-Content -Path "$Path/index.md" -Value $sbMarkdownIndex.ToString()