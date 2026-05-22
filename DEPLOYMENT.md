# Firebase deploy (important)

If the site is blank after deploy, it's usually because Firebase is serving `public/` while Vite output is in `dist/`.

## Correct flow

1. Build the app:

```bash
npm install
npm run build
```

2. Configure hosting to serve `dist` in `firebase.json`:

```json
{
  "hosting": {
    "public": "dist",
    "ignore": ["firebase.json", "**/.*", "**/node_modules/**"],
    "rewrites": [{ "source": "**", "destination": "/index.html" }]
  }
}
```

3. Deploy:

```bash
firebase deploy --only hosting
```

## Why your screenshot shows blank output

Your terminal logs and file listing show deploys from `public` (old static files), while the current React app is built into `dist/assets/*`. That mismatch can load an outdated index or missing bundles.
