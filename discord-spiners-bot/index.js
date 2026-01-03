const express = require('express')
const { Client, GatewayIntentBits } = require('discord.js')
require('dotenv').config()

const app = express()
const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.DirectMessages],
  partials: ['CHANNEL']
})

app.use(express.json())

app.post('/new-application', async (req, res) => {
  const { discordId, fullName, rowNumber } = req.body || {}

  try {
    let user = null

    if (discordId) {
      user = await client.users.fetch(discordId).catch(() => null)
    }

    if (!user) {
      user = client.users.cache.find(u => u.username === discordId || u.tag === discordId) || null
    }

    if (user) {
      await user.send({
        content: `Salut ${fullName || 'candidat'} ! 👋\n\nMerci d'avoir postulé pour rejoindre **Spiners**.\n\nUn membre de notre équipe va examiner ta candidature et te contacter très prochainement.`
      })

      console.log(`✅ DM envoyé à ${fullName} (${discordId})`)
      return res.json({ success: true, message: 'DM sent' })
    }

    console.log(`❌ Utilisateur non trouvé: ${discordId}`)
    return res.json({ success: false, error: 'User not found' })
  } catch (error) {
    console.error('Erreur:', error)
    return res.json({ success: false, error: error.message })
  }
})

app.get('/health', (req, res) => {
  res.json({ status: 'ok', uptime: process.uptime() })
})

client.once('ready', () => {
  console.log(`✅ Bot connecté: ${client.user.tag}`)
})

client.login(process.env.DISCORD_BOT_TOKEN)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`🚀 Serveur démarré sur port ${PORT}`)
})
