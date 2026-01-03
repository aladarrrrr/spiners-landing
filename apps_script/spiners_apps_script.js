// Apps Script: doPost handler for Spiners form
function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents)
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Applications')

    sheet.appendRow([
      data.timestamp,
      data.fullName,
      data.birthDate,
      data.profession,
      data.email,
      data.discordId,
      data.otherContact,
      data.currentLimit,
      data.monthlyVolume,
      data.tableCount,
      data.weeklyHours,
      data.bankroll,
      data.poolEV,
      data.previouslyStaked,
      data.stakedDetails,
      data.objectives,
      data.additionalInfo,
      'Pending',
      '',
      ''
    ])

    // Notify Discord Bot if BOT_WEBHOOK_URL is set in Script Properties
    const botUrl = PropertiesService.getScriptProperties().getProperty('BOT_WEBHOOK_URL')

    if (botUrl) {
      UrlFetchApp.fetch(botUrl, {
        method: 'post',
        contentType: 'application/json',
        payload: JSON.stringify({
          discordId: data.discordId,
          fullName: data.fullName,
          rowNumber: sheet.getLastRow()
        })
      })
    }

    return ContentService.createTextOutput('Success')
  } catch (error) {
    return ContentService.createTextOutput('Error: ' + error)
  }
}
