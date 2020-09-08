[CmdletBinding()]
param (
    [Parameter(Mandatory=$true)]
    [string]
    $MarkdownPath,
    [Parameter(Mandatory=$false)]
    [string]
    $NavigationPath
)

Write-Output 'Retrieving docusaurus markdown files'
$markdownFiles = Get-ChildItem -Path $MarkdownPath -Filter '*-*.md'

Write-Output "Found $($markdownFiles.Count) markdown files"
# for the sidebar menu in the docs
$sb = New-Object System.Text.StringBuilder

if($NavigationPath){
    $NavigationPath = "$NavigationPath/"
}
$null = $sb.Append("module.exports = [")
foreach ($file in $markdownFiles) {
    $null = $sb.Append("'$NavigationPath$($file.BaseName)',")
}
$null = $sb.Append("];")

Write-Output "Creating docusaurus sidebars file: $MarkdownPath/sidebars.js"
Set-Content -Path "$MarkdownPath/sidebars.js" -Value $sb.ToString()