Guide rapide: déployer Apps Script et lier au projet

1) Créer un Google Sheet
- Ouvrez https://sheets.google.com et créez un nouveau spreadsheet
- Renommez la feuille en "Applications"
- Collez cette ligne en première ligne (séparateur TAB):

Timestamp	Full Name	Birth Date	Profession	Email	Discord ID	Other Contact	Current Limit	Monthly Volume	Table Count	Weekly Hours	Bankroll	Pool EV	Previously Staked	Staked Details	Objectives	Additional Info	Status	DM Status	DM Timestamp

2) Ouvrir Apps Script
- Dans le Google Sheet: Extensions → Apps Script
- Supprimez le code existant
- Copiez le contenu de `apps_script/spiners_apps_script.js` et collez-le

3) Déployer comme Web App
- Deploy → New deployment → Select type: Web app
- Description: "Spiners Form Handler"
- Execute as: Me
- Who has access: Anyone
- Deploy et copiez l'URL publique (ressemble à https://script.google.com/macros/s/AKfycb.../exec)

4) Mettre à jour votre projet local
- Ouvrez le fichier `.env` à la racine du projet
- Ajoutez la ligne:

VITE_GOOGLE_APPS_SCRIPT_URL=https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec

- Remplacez par l'URL que vous avez copiée

5) (Optionnel) Configurer le webhook du bot
- Dans Apps Script: Project Settings → Script Properties
- Ajoutez `BOT_WEBHOOK_URL` = `https://YOUR_BOT_URL/new-application`

6) Tests
- Lancez le frontend local: `npm run dev`
- Ouvrez le site, remplissez le formulaire et soumettez
- Vérifiez que la nouvelle ligne apparait dans Google Sheets

Remarque: `mode: 'no-cors'` est utilisé côté frontend; la requête peut ne rien renvoyer côté client mais la Web App reçoit les données. Vérifiez les logs Apps Script pour débogage.
