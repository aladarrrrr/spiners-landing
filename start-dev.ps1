# Start-dev helper: uses the local portable Node in ./node to run npm scripts
$base = Split-Path -Parent $MyInvocation.MyCommand.Definition
$nodePath = Join-Path $base 'node'
if (-Not (Test-Path "$nodePath\node.exe")) {
    Write-Error "Node not found in $nodePath. Run the setup steps or install Node globally."
    exit 1
}
$env:Path = "$nodePath;" + $env:Path
Set-Location -Path $base
& "$nodePath\node.exe" "$nodePath\node_modules\npm\bin\npm-cli.js" run dev
