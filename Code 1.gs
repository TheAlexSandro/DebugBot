// enter your token bot
const token = 'YOUR_TOKEN_BOT'

const tg = new jevrin.daftar(token)

// for admin bot
const adminBot = YOUR_ID;

const debug = false 

function getMe(){
  let me = tg.getMe()
  return Logger.log(me)
}

function setWebhook() {
  var url = "WEBHOOK_URL"
  var r = tg.setWebhook(url)
  return Logger.log(r)
}

function getWebhookInfo() {
  let hasil = tg.getWebhookInfo()
  return Logger.log(hasil)
}

function deleteWebhook() {
  let hasil = tg.deleteWebhook()
  return Logger.log(hasil)
  
}
