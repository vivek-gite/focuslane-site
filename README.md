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

The site is built with Vinext.

## Cloudflare Pages

GitHub Actions deploys this site to Cloudflare Pages with Wrangler after each
push to `main`, and creates preview deployments for pull requests.

Create the Cloudflare Pages project once before the first automated deployment
if it does not already exist:

```bash
npx wrangler pages project create
```

Required GitHub secrets:

- `CLOUDFLARE_ACCOUNT_ID`
- `CLOUDFLARE_API_TOKEN`

Required GitHub variable:

- `CLOUDFLARE_PAGES_PROJECT_NAME`

The deployment workflow runs `npm run build:pages`, which prerenders the site
and prepares the upload folder at `pages-dist`.
