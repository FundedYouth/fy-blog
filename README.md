# FundedYouth Blog

This repo is a backup of the FundedYouth blog called **The STEAM Engine**. This is a Vitepress site that utilizes a shell script to publish via `LFTP`.

## Upload a New Article

```bash
# Build / Update Local VitePress with changes for Static Site
npm run docs:build

# Upload any changes to Local .vitepress/dist directory
./deploy.sh
```

## Build Package Commands

```json
"scripts": {
    "docs:dev": "vitepress dev docs",
    "docs:build": "vitepress build docs",
    "docs:preview": "vitepress preview docs"
}
```

## Deploy LFTP Shell Script

- In the root of the project create a file called `deploy.sh`
- Then give it read/write priveleges by running the command:

```sh
chmod +x deploy.sh
```

- Add the following to the script. _Note: this site is uploaded to a blog directory_

```sh
#!/bin/bash

# Exit if anything fails
set -e

# Build the VitePress site
echo "Building VitePress site..."
npm run docs:build
# Hostinger FTP Settings — replace these
FTP_HOST="insert_ip_address"       # Use the **actual IP address** from Hostinger
FTP_USER="insert_username"     # FTP details
FTP_PASS="insert_password"
REMOTE_DIR="/public_html/blog"        # Usually this for the root of your site

# Deploy with lftp using plain FTP
echo "Deploying to $FTP_HOST..."
lftp -e "
set ftp:ssl-allow no;
open -u $FTP_USER,$FTP_PASS $FTP_HOST
mirror -R --parallel=5 docs/.vitepress/dist $REMOTE_DIR
bye
"
```

## Apache Server and Correct Routing

To run this site on a hosting platform that uses an **Apache Server** like Hostinger.com or similar shared webhosting you will need to manually create and upload a `.htaccess` file.

> This example assumes the vitepress will be placed in a folder called `blog`

```bash
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /blog/
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /blog/index.html [L]
</IfModule>
```
