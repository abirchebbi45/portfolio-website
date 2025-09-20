#!/bin/bash
echo "🚀 Building frontend for Vercel..."
npm run build:vercel
echo "✅ Frontend build completed!"
echo "📂 Output directory: dist/public"
ls -la dist/public/
