[CmdletBinding()]
param (
    [Parameter(Mandatory=$false)]
    [string]
    $OutputFolder = ".\docs\modules\vsteam"
)

if (-not (Get-Module VSTeam -ListAvailable)) {
    Install-Module VSTeam -Scope CurrentUser -Force
}

if (-not (Get-Module platyPS -ListAvailable)) {
    Install-Module platyPS -Scope CurrentUser -Force
}

New-MarkdownHelp -Module VSTeam -OutputFolder $OutputFolder -Force
. $PSScriptRoot\Create-DocusaurusMenuFile.ps1 -MarkdownPath $OutputFolder