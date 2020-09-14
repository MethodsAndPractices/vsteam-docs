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

$OutputFolder = "./modules/$($Module.ToLower())/commands"

New-MarkdownHelp -Module $Module -OutputFolder $OutputFolder -Force

. $PSScriptRoot\Add-CustomYamMeta.ps1 -Path $OutputFolder -BaseEditUrlPath "https://github.com/MethodsAndPractices/$($Module.ToLower())/edit/master/.docs"

. $PSScriptRoot\Create-DocusaurusMenuFile.ps1 -MarkdownPath $OutputFolder -NavigationPath "commands/"

. $PSScriptRoot\Create-ModuleIndex.ps1 -Path $OutputFolder