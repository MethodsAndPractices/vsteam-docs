[CmdletBinding()]
param (
    [Parameter(Mandatory=$true)]
    [string]
    $MarkdownPath
)

Write-Output 'Retrieving docusaurus markdown files'
$markdownFiles = Get-ChildItem -Path $MarkdownPath -Filter '*-*.md'

# for the sidebar menu in the docs
$sb = New-Object System.Text.StringBuilder

$null = $sb.Append("module.exports = [")
foreach ($file in $markdownFiles) {
    $null = $sb.Append("'module-vsteam/$($file.BaseName)',")
}
$null = $sb.Append("];")

Write-Output 'Creating docusaurus sidebars file'
Set-Content -Path "$MarkdownPath/sidebars.js" -Value $sb.ToString()