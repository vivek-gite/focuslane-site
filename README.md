# focuslane site

Premium landing page for focuslane, a Firefox extension that makes YouTube
calmer and more intentional.

## Commands

```bash
npm install
npm run dev
npm run build
npm run build:pages
```

The site is built with Vinext and deployed to Cloudflare Pages through GitHub
Actions.

## Cloudflare Pages deployment

This project includes a GitHub Actions workflow at:

```text
.github/workflows/deploy-cloudflare-pages.yml
```

The workflow deploys to Cloudflare Pages on pushes to `main` and from manual
workflow dispatch.

Before the first deployment:

1. Create a Cloudflare Pages project named `focuslane`.
2. Create a Cloudflare API token with permission to edit Cloudflare Pages.
3. Add these GitHub repository secrets:
   - `CLOUDFLARE_API_TOKEN`
   - `CLOUDFLARE_ACCOUNT_ID`
4. Push this folder as the root of the GitHub repository.

If you use a different Cloudflare Pages project name, update `name` in
`wrangler.toml`.

The deploy workflow runs:

```bash
npm ci
npm run lint
npm run build:pages
npx wrangler pages deploy dist/client --branch=<branch> --no-bundle
```
