#!/bin/bash
set -e
source .env

echo "Building Hugo site..."
hugo --config ./hugo.yaml

REMOTE_DIR="/public_html/blog"        # Usually this for the root of your site

# Deploy with lftp using plain FTP
echo "Deploying to $FTP_HOST..."
lftp -e "
set ftp:ssl-allow no;
open -u $FTP_USER,$FTP_PASS $FTP_HOST
mirror -R --parallel=5 --exclude .DS_Store --exclude .git --exclude .gitignore ./public $REMOTE_DIR
bye
"
