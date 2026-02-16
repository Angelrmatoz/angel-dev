#!/usr/bin/env pwsh
# Script para limpiar todos los contenedores, volúmenes y caché de Docker del backend

Write-Host "🧹 Limpiando entorno Docker del backend..." -ForegroundColor Cyan

# Detener todos los contenedores
Write-Host "`n📦 Deteniendo contenedores..." -ForegroundColor Yellow
docker-compose -f docker-compose.dev.yml down -v 2>$null
docker-compose -f docker-compose.yml down -v 2>$null

# Eliminar volúmenes específicos del proyecto
Write-Host "`n🗑️  Eliminando volúmenes..." -ForegroundColor Yellow
docker volume rm backend_backend_dev_node_modules 2>$null
docker volume rm backend_backend_dev_dist 2>$null
docker volume rm backend_backend_dev_pnpm 2>$null

# Eliminar imágenes del backend
Write-Host "`n🖼️  Eliminando imágenes..." -ForegroundColor Yellow
docker rmi backend-dev:latest -f 2>$null
docker rmi backend-prod:latest -f 2>$null

# Limpiar build cache de Docker
Write-Host "`n🧼 Limpiando build cache..." -ForegroundColor Yellow
docker builder prune -f

# Eliminar carpetas locales que puedan causar conflictos
Write-Host "`n📁 Limpiando carpetas locales..." -ForegroundColor Yellow
Remove-Item -Recurse -Force dist -ErrorAction SilentlyContinue
Remove-Item -Recurse -Force node_modules -ErrorAction SilentlyContinue
Remove-Item -Recurse -Force .pnpm-store -ErrorAction SilentlyContinue

Write-Host "`n✅ Limpieza completa!" -ForegroundColor Green
Write-Host "`nAhora puedes ejecutar:" -ForegroundColor Cyan
Write-Host "  • Para desarrollo:  docker-compose -f docker-compose.dev.yml up --build" -ForegroundColor White
Write-Host "  • Para producción:  docker-compose -f docker-compose.yml up --build -d" -ForegroundColor White

