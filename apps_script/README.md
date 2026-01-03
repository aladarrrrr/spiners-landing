Fichiers Apps Script

- `spiners_apps_script.js` : code à copier dans l'éditeur Apps Script (Extensions → Apps Script).

Étapes rapides:
1. Créer Google Sheet et coller l'entête (voir APPS_SCRIPT_DEPLOY.md)
2. Coller `spiners_apps_script.js` dans Apps Script
3. Déployer en Web App et copier l'URL
4. Mettre à jour `.env` avec `VITE_GOOGLE_APPS_SCRIPT_URL=`

Notes:
- Configurez `BOT_WEBHOOK_URL` dans Script Properties si vous avez déployé le bot.
