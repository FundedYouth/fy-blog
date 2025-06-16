# FundedYouth Blog

**Active Site:** <a href="https://fundedyouth.org/blog" target="_blank">https://fundedyouth.org/blog</a>

This site was created using https://gohugo.io/ - For the fun of it, the archives page is listed as "The Vault".

<img src="https://gohugo.io/images/hugo-logo-wide.svg" style="width: 150px;">
<br />

```yaml
Theme: PaperMod
https://themes.gohugo.io/themes/hugo-papermod/
```

## LFTP Deploy Script

This site includes a `deploy.sh` script. It's purpose is to run the command:

```sh
hugo --config ./hugo.yaml
```

and then upload to our blog the static site. The shell script is referencing a local `.env` file.

```sh
FTP_HOST="XXX.XXX.XX.XXX"       # Use the **actual IP address** from Hostinger
FTP_USER="your_ftp_username"     # From Hostinger FTP details
FTP_PASS="your_ftp_password"
```
