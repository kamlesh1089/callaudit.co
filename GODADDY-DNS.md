# Connect callaudit.co from GoDaddy to GitHub Pages

## GitHub

1. Push this folder to a GitHub repository.
2. In **Settings → Pages**, choose **GitHub Actions** as the source.
3. Under **Custom domain**, enter `callaudit.co` and save.
4. After DNS is verified, enable **Enforce HTTPS**.

## GoDaddy DNS

Remove conflicting parking or forwarding records for `@` and `www`, then add:

| Type | Name | Value |
| --- | --- | --- |
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |
| CNAME | www | YOUR-GITHUB-USERNAME.github.io |

Replace `YOUR-GITHUB-USERNAME` with the GitHub account that owns the repository. DNS and HTTPS activation can take time to propagate.
