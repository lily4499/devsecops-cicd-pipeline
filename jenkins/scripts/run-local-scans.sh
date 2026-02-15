#!/usr/bin/env bash
set -euo pipefail

IMAGE="${1:-}"
if [[ -z "$IMAGE" ]]; then
  echo "Usage: ./jenkins/scripts/run-local-scans.sh <image>"
  exit 1
fi

mkdir -p reports/trivy reports/dependency-check .dc-data

echo "== Trivy scan =="
trivy image --severity CRITICAL,HIGH --format table "$IMAGE" | tee reports/trivy/trivy.txt

echo "== Dependency-Check (HTML report) =="
docker run --rm \
  -v "$(pwd)/app":/src \
  -v "$(pwd)/reports/dependency-check":/report \
  -v "$(pwd)/.dc-data":/usr/share/dependency-check/data \
  owasp/dependency-check:latest \
  --scan /src \
  --format "HTML" \
  --out /report || true

echo "Done. Check reports/ folder."
