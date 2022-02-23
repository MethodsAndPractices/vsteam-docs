[CmdletBinding()]
param (
   [Parameter(Mandatory = $false)]
   [string]
   $Module
)

$tmpModuleFolder = "./tmp"
$moduleVersion = (Find-Module -Name $Module).Version
$modulePath = "$tmpModuleFolder/$Module/$moduleVersion"
$xmlMamlHelpFile = "$modulePath/en-US/$Module-Help.xml"

if (-not (Test-Path $tmpModuleFolder)) {
   $null = New-Item -ItemType Directory -Force -Path $tmpModuleFolder
}

if (-not (Test-Path $modulePath)) {
   Save-Module $Module -Path $tmpModuleFolder -Repository PSGallery
}

if (-not (Get-Module platyPS -ListAvailable)) {
   Install-Module platyPS -Scope CurrentUser -Force
}

$OutputFolder = "./docs/modules/$($Module.ToLower())/commands"

Import-Module "$tmpModuleFolder/$Module"
New-MarkdownHelp -OutputFolder $OutputFolder -Module $Module -Force

. $PSScriptRoot\Add-CustomYamMeta.ps1 -Path $OutputFolder `
   -BaseEditUrlPath "https://github.com/MethodsAndPractices/$($Module.ToLower())/edit/trunk/.docs"

. $PSScriptRoot\Create-DocusaurusMenuFile.ps1 -MarkdownPath $OutputFolder -NavigationPath "modules/vsteam/commands"

. $PSScriptRoot\Create-ModuleIndex.ps1 -Path $OutputFolder