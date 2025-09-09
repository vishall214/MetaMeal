# Backend Keep-Alive Test Script
# Run this locally to test if your backend stays awake

$backendUrl = "https://metameal-backend.onrender.com"
$endpoints = @("/", "/health")

Write-Host "🚀 Starting backend keep-alive test..." -ForegroundColor Green
Write-Host "Backend URL: $backendUrl" -ForegroundColor Yellow

while ($true) {
    $timestamp = Get-Date -Format "yyyy-MM-dd HH:mm:ss"
    Write-Host "`n[$timestamp] Pinging backend..." -ForegroundColor Cyan
    
    foreach ($endpoint in $endpoints) {
        try {
            $response = Invoke-WebRequest -Uri "$backendUrl$endpoint" -UseBasicParsing -TimeoutSec 30
            $status = $response.StatusCode
            Write-Host "  ✅ $endpoint - Status: $status" -ForegroundColor Green
        }
        catch {
            Write-Host "  ❌ $endpoint - Failed: $($_.Exception.Message)" -ForegroundColor Red
        }
    }
    
    Write-Host "Waiting 12 minutes for next ping..." -ForegroundColor Gray
    Start-Sleep -Seconds 720  # 12 minutes
}
