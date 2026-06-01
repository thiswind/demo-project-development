# Validation Checklist

| Step | Target | Verification |
| --- | --- | --- |
| Local Development | App and docs build locally | `npm run build` and `npm run docs:build` |
| GitHub Repository | Source code hosted on GitHub | `gh repo view thiswind/demo-project-development` |
| GitHub Actions | CI builds app and docs | Latest `ci.yml` run succeeds |
| GitHub Pages Docs | Docs hosted on GitHub Pages | `https://thiswind.github.io/demo-project-development/` returns 2xx/3xx |
| Vercel Deployment | App deployed to Vercel production | Vercel deployment URL returns this app |
| Vercel Domain | Custom domain bound to deployment | `https://demo-project-development.dev-learn-hub.me/` returns this app |
