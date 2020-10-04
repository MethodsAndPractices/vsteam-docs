[CmdletBinding()]
param (
   [Parameter(Mandatory = $false)]
   [string]
   $Module
)

if (-not (Get-Module platyPS -ListAvailable)) {
   Install-Module platyPS -Scope CurrentUser -Force
}

$OutputFolder = "./docs/modules/$($Module.ToLower())/commands"

New-MarkdownHelp -MamlFile "$($env:PIPELINE_WORKSPACE)/Package/en-US/$($Module)-Help.xml" `
   -OutputFolder $OutputFolder `
   -AlphabeticParamsOrder -Force

. $PSScriptRoot\Add-CustomYamMeta.ps1 -Path $OutputFolder `
   -BaseEditUrlPath "https://github.com/MethodsAndPractices/$($Module.ToLower())/edit/trunk/.docs"

. $PSScriptRoot\Create-DocusaurusMenuFile.ps1 -MarkdownPath $OutputFolder -NavigationPath "modules/vsteam/commands"

. $PSScriptRoot\Create-ModuleIndex.ps1 -Path $OutputFolder