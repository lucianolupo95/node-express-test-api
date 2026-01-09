#!/usr/bin/env bash
set -euo pipefail

SERVICE_NAME="node-express-test-api"
COMPOSE_DIR="/srv/punk-records/infra"

cd "$COMPOSE_DIR"
docker compose up -d "$SERVICE_NAME"
