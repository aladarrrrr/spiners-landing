const { Client, GatewayIntentBits } = require('discord.js')

/**
 * Vercel Serverless Function - Discord Bot Notification
 *
 * Envoie une notification Discord au propriétaire lorsqu'une nouvelle candidature est soumise.
 * Cette fonction se connecte à Discord, envoie le message, puis se déconnecte.
 */
module.exports = async (req, res) => {
  // Vérifier la méthode HTTP
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { discordId, fullName, rowNumber, email, profession } = req.body

  // Validation des champs requis
  if (!discordId || !fullName) {
    return res.status(400).json({
      success: false,
      error: 'Missing required fields: discordId and fullName'
    })
  }

  // Créer le client Discord
  const client = new Client({
    intents: [
      GatewayIntentBits.Guilds,
      GatewayIntentBits.DirectMessages
    ]
  })

  try {
    // Connexion au bot Discord
    await client.login(process.env.DISCORD_BOT_TOKEN)

    // Attendre que le bot soit prêt (événement 'ready')
    await new Promise((resolve) => {
      client.once('ready', () => {
        console.log(`✅ Bot connecté: ${client.user.tag}`)
        resolve()
      })
    })

    // Essayer de récupérer le tag Discord de l'applicant (optionnel)
    let applicantTag = discordId
    try {
      const applicant = await client.users.fetch(discordId)
      applicantTag = applicant.tag
      console.log(`✅ Tag Discord trouvé: ${applicantTag}`)
    } catch (error) {
      console.log(`⚠️ Impossible de récupérer le tag Discord, utilisation de l'ID: ${discordId}`)
    }

    // Vérifier que l'ID propriétaire est configuré
    const ownerId = process.env.OWNER_DISCORD_ID
    if (!ownerId) {
      console.error('❌ OWNER_DISCORD_ID non défini dans les variables d\'environnement')
      client.destroy()
      return res.status(500).json({
        success: false,
        error: 'Owner ID not configured'
      })
    }

    // Récupérer le propriétaire
    const owner = await client.users.fetch(ownerId)
    console.log(`✅ Propriétaire trouvé: ${owner.tag}`)

    // Construire le message de notification
    let ownerMessage = `📋 **Nouvelle candidature reçue!**\n\n`
    ownerMessage += `**Nom:** ${fullName}\n`
    ownerMessage += `**Discord:** ${applicantTag}\n`
    if (email) ownerMessage += `**Email:** ${email}\n`
    if (profession) ownerMessage += `**Profession:** ${profession}\n`
    ownerMessage += `**Ligne Google Sheets:** #${rowNumber}\n\n`
    ownerMessage += `💬 **Action:** Envoie un DM à <@${discordId}> pour discuter de sa candidature.`

    // Envoyer le DM au propriétaire
    await owner.send({ content: ownerMessage })
    console.log(`✅ DM envoyé au propriétaire pour la candidature de ${fullName}`)

    // Déconnecter le bot
    client.destroy()
    console.log('✅ Bot déconnecté')

    // Réponse de succès
    return res.status(200).json({
      success: true,
      message: 'Owner notified'
    })

  } catch (error) {
    console.error('❌ Erreur:', error)

    // S'assurer de déconnecter le bot en cas d'erreur
    try {
      client.destroy()
    } catch (destroyError) {
      console.error('Erreur lors de la déconnexion:', destroyError)
    }

    return res.status(500).json({
      success: false,
      error: error.message
    })
  }
}
