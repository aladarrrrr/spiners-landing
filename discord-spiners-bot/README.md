# Discord Spiners Bot

Simple bot + webhook receiver to DM applicants when a new row is added.

Setup:

1. Install dependencies:

```bash
npm install
```

2. Fill `.env` with `DISCORD_BOT_TOKEN`.

3. Start locally:

```bash
npm start
```

Expose with Railway/Heroku/Vercel and set the `BOT_WEBHOOK_URL` in Google Apps Script to `https://your-deploy-url/new-application`.
