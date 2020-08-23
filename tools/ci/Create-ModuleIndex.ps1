[CmdletBinding()]
param (
    [Parameter(Mandatory = $false)]
    [string]
    $Module
)

$docsPath = "./docs/modules/$Module"

Write-Output "Creating file index for module $Module"

# for the markdown index file
$sbMarkdownIndex = New-Object System.Text.StringBuilder

$files = Get-ChildItem -Path $docsPath  -Filter '*-*.md'


foreach ($file in $files) {

    $fileContent = (Get-Content -Path $file.FullName -Encoding utf8 | Out-String)

    $null = $sbMarkdownIndex.Append("### [$($file.BaseName)]($($file.Name))`r`n`r`n")

    #regex is search all text between the header '## SYNOPSIS' and '## SYNTAX' to get the cmdlet summary including new lines
    [regex] $regex = '(?s)(\#\# *SYNOPSIS)(.*?)(\#\# *SYNTAX)'

    if($fileContent -match $regex){
        $synopsis = $Matches[2].Trim("`r`n")
        $null = $sbMarkdownIndex.Append("$synopsis`r`n`r`n")
    }

}

$indexFile = (Get-Content -Path "./docs/modules/index$Module.md" -Encoding utf8 | Out-String)

$sbMarkdownIndex.Insert(0,"$indexFile`r`n")

Write-Output 'Creating cmdlet index file'
Set-Content -Path "$docsPath/index.md" -Value $sbMarkdownIndex.ToString()