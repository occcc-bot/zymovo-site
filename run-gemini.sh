#!/usr/bin/env bash
set -euo pipefail
cd /home/node/projects/zymovo-site
printf '== IMAGE FILES ==\n'
find zymovoimages -maxdepth 1 -type f | sort
printf '\n== RUN GEMINI ==\n'
timeout 1800 sh -c 'GOOGLE_GENAI_USE_GCA=true gemini --approval-mode=yolo -m gemini-2.5-pro -p "$(cat TASK.md)
Do not ask for confirmation or alignment. Inspect the provided images, redesign the site now, modify files directly, commit your changes, and push to origin/main before finishing." </dev/null'
printf '\n== GIT STATUS ==\n'
git status --short || true
printf '\n== LAST LOG ==\n'
git --no-pager log -3 --oneline || true
