Portfolio

A site to host a quick frontend portfolio

## Current Version

v0.4.4: Update Resume

## GitHub Pages Notes

Published on GitHub Pages from docs folder

Must remove superfluous DNS records

Add A records:

```bash
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

Add AAAA records:

```bash
2606:50c0:8000::153
2606:50c0:8001::153
2606:50c0:8002::153
2606:50c0:8003::153
```

Change CNAME record to dgray.github.io or HTTPS won't work

A CNAME file with the custom domain (e.g. danielgray.online) should get added automatically