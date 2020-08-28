[CmdletBinding()]
param (
    [Parameter(Mandatory=$false)]
    [string]
    $Module
)

if (-not (Get-Module $Module -ListAvailable)) {
    Install-Module $Module -Scope CurrentUser -Force
}

if (-not (Get-Module platyPS -ListAvailable)) {
    Install-Module platyPS -Scope CurrentUser -Force
}

$OutputFolder = "./modules/$Module"

New-MarkdownHelp -Module $Module -OutputFolder $OutputFolder -Force
. $PSScriptRoot\Create-DocusaurusMenuFile.ps1 -MarkdownPath $OutputFolder

. $PSScriptRoot\Create-ModuleIndex.ps1 -Module $Module