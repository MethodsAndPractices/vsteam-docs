[CmdletBinding()]
param (
    [Parameter(Mandatory = $true)]
    [string]
    $Path,

    [Parameter(Mandatory = $true)]
    [string]
    $Destination
)

Write-Output 'Clearing old files'

if ((Test-Path $Destination) -eq $false) {
    New-Item -ItemType Directory -Name $Destination
}

Write-Output 'Creating file index'

# for the markdown index file
$sbMarkdownIndex = New-Object System.Text.StringBuilder


$files = Get-ChildItem -Path $Path -Filter '*-*.md'


foreach ($file in $files) {
    # Notice that I'm assigning the result of $sb.Append to $null,
    # to avoid sending any unwanted data down the pipeline.
    $null = $sbMarkdownIndex.Append("### [$($file.BaseName)]($($file.Name))`r`n`r`n")
    $null = $sbMarkdownIndex.Append("<!-- #include ""./synopsis/$($file.Name)"" -->`r`n`r`n")

    # fail the script if the title does not match the ps file name
    $stringToFind = "# $($file.BaseName)"
    if ($null -eq $(Get-ChildItem $($file.FullName) | Select-String $stringToFind)) {
        Write-Error "Title cannot be found in $($file.Name). Make sure the first header is # $($file.BaseName)`n$($File.Directory)\$File" -ErrorAction Stop
    }
}

Write-Output 'Creating cmdlet index file'
Set-Content -Path "$Path/files.md" -Value $sbMarkdownIndex.ToString()

Write-Output 'Merging Markdown files'
if (-not (Get-Module Trackyon.Markdown -ListAvailable)) {
    Install-Module Trackyon.Markdown -Scope CurrentUser -Force
}

if (-not (Get-Module platyPS -ListAvailable)) {
    Install-Module platyPS -Scope CurrentUser -Force
}

# Run again and strip header
Write-Output 'Cleaning doc files for publishing'
Get-ChildItem $Destination | Remove-Item
Set-Content -Path "$Path\common\header.md" -Value ''

# Docs now don't have headers
Merge-Markdown -InPath  $Path -OutPath $Destination

# Cleaning up merged files
$mergedFiles = Get-ChildItem -Path $Destination -Filter '*-*.md'

# for the sidebar menu in the docs
$sbDocuSaurusSidebar = New-Object System.Text.StringBuilder

$null = $sbDocuSaurusSidebar.Append("module.exports = [")
foreach ($file in $mergedFiles) {
    $null = $sbDocuSaurusSidebar.Append("'module-vsteam/$($file.BaseName)',")

    $fileContent = Get-Content -Path $file.FullName -Encoding utf8
    $fileContent = $fileContent -replace "(#){3}\s*(-)*\s(EXAMPLE [1-9]*)\s(-)*", '### $3'
    Set-Content -Path $file.FullName -Value $fileContent
}
$null = $sbDocuSaurusSidebar.Append("];")

Write-Output 'Creating docusaurus sidebars file'
Set-Content -Path "$Destination/sidebars.js" -Value $sbDocuSaurusSidebar.ToString()
