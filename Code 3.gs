function prosesCallback(cb) {
  var msg = cb.message;
  var chatID = msg.chat.id
  var user = new jevrin.user();

  if (/closeWindow$/i.exec(cb.data)) {
    tg.answerCallbackQuery(cb.id, "❌ Closed.", true)
    return tg.deleteMessage(chatID, msg.message_id)
  }

  if (/help_sdedwbwdyud$/i.exec(cb.data)) {
    var pesan = "<b>Help</b>"
    pesan += "\nHow to use this bot?\nTo use me: send whatever it is and I'm going to convert it to a JSON structure."
    pesan += "\n\nAny command:"
    pesan += "\n/help - this command"
    pesan += "\n/msgid - check message info"
    pesan += "\n/pop - create your own popup"
    pesan += "\n/about - about this bot"
    var keyb = { inline_keyboard: [[tg.button.text('⬅️ Back', 'start')]] }

    tg.editMessageText(chatID, msg.message_id, msg.inline_message_id, pesan, 'html', true, keyb)
    return tg.request('answerCallbackQuery', { callback_query_id: cb.id, text: '' });
  }

  if (/start$/i.exec(cb.data)) {
    var nama = cb.from.first_name
    var userid = cb.from.id;

    var pesan = '👋 Hello <a href="tg://user?id=' + userid + '">' + tg.util.clearHTML(nama) + '</a> Im a Debug Bot, send me text or whatever and i will convert it to JSON structure, For more... press "How to use ❔" button.'
    pesan += "\n\n<b><i>By using this bot you agree to this <a href='https://www.jevrinsupport.ml/p/privacy-policy-of-debug-bot.html'>Privacy Policy</a>.</i></b>"

    var keyboard = []

    keyboard[0] = [
      tg.button.text('❔How to use', 'help_sdedwbwdyud')
    ]
    
    keyboard[1] = [
      tg.button.url('🆘 Support Bot', 'https://t.me/JGCHBot'),
      tg.button.url('🗂 Open Source', 'https://github.com/Jevrin/DebugBot')
    ]
    keyboard[2] = [
      tg.button.url('🌐 Website', 'https://wwww.jevrinsupport.ml')
    ]
    var keyb = { inline_keyboard: keyboard }

    tg.editMessageText(chatID, msg.message_id, msg.inline_message_id, pesan, 'html', true, keyb)
    return tg.request('answerCallbackQuery', { callback_query_id: cb.id, text: '' });
  }

  /****************** HANDEL PHOTO ******************/

  if (/html_1$/i.exec(cb.data)) {
    var js1 = user.getValue('psn_' + chatID)
    var pesan = "" + js1
    var keyb = { inline_keyboard: [[tg.button.text('⚙️ JSON Mode', 'json_1')]] }

    tg.editMessageText(chatID, msg.message_id, msg.inline_message_id, pesan, 'html', true, keyb)
    return tg.request('answerCallbackQuery', { callback_query_id: cb.id, text: '' });
  }

  if (/json_1$/i.exec(cb.data)) {
    var html1 = user.getValue('json_' + chatID)
    var pesan = "<code>" + html1 + "</code>"
    var keyb = []

    keyb[0] = [
      tg.button.text('❌ Close', 'closeWindow'),
      tg.button.text('🔡 HTML Mode', 'html_1')
    ]
    var keybMsg = { inline_keyboard: keyb }

    tg.editMessageText(chatID, msg.message_id, msg.inline_message_id, pesan, 'html', true, keybMsg)
    return tg.request('answerCallbackQuery', { callback_query_id: cb.id, text: '' });
  }

  /****************** END OF HANDEL PHOTO ******************/

  /****************** HANDEL STIKER ******************/

  if (/stic_1$/i.exec(cb.data)) {
    var js1 = user.getValue('psn_stic' + chatID)
    var namestt = user.getValue('stt_' + chatID)
    var pesan = "" + js1
    var keyb = []

    keyb[0] = [
      tg.button.url('🎭 add sticker', 'https://t.me/addstickers/' + namestt + '')
    ]
    keyb[1] = [
      tg.button.text('⚙️ JSON Mode', 'json_stic')
    ]
    var keybMsg = { inline_keyboard: keyb }

    tg.editMessageText(chatID, msg.message_id, msg.inline_message_id, pesan, 'html', true, keybMsg)
    return tg.request('answerCallbackQuery', { callback_query_id: cb.id, text: '' });
  }

  if (/json_stic$/i.exec(cb.data)) {
    var getstt = user.getValue('json_stic' + msg.chat.id)
    var namestt = user.getValue('stt_' + chatID)
    var pesan = "<code>" + getstt + "</code>"
    var keyb = []

    keyb[0] = [
      tg.button.url('🎭 add sticker', 'https://t.me/addstickers/' + namestt + '')
    ]
    keyb[1] = [
      tg.button.text('❌ Close', 'closeWindow'),
      tg.button.text('🔡 HTML Mode', 'stic_1')
    ]
    var keybMsg = { inline_keyboard: keyb }

    tg.editMessageText(chatID, msg.message_id, msg.inline_message_id, pesan, 'html', true, keybMsg)
    return tg.request('answerCallbackQuery', { callback_query_id: cb.id, text: '' });
  }

  /****************** END OF HANDEL STIKER ******************/

  /****************** HANDEL VIDEO ******************/

  if (/vid_1$/i.exec(cb.data)) {
    var js1 = user.getValue('vid_html' + chatID)
    var pesan = "" + js1
    var keyb = { inline_keyboard: [[tg.button.text('⚙️ JSON Mode', 'jss_vid')]] }

    tg.editMessageText(chatID, msg.message_id, msg.inline_message_id, pesan, 'html', true, keyb)
    return tg.request('answerCallbackQuery', { callback_query_id: cb.id, text: '' });
  }

  if (/jss_vid$/i.exec(cb.data)) {
    var getstt = user.getValue('json_vid' + msg.chat.id)
    var pesan = "<code>" + getstt + "</code>"
    var keyb = []

    keyb[0] = [
      tg.button.text('❌ Close', 'closeWindow'),
      tg.button.text('🔡 HTML Mode', 'vid_1')
    ]
    var keybMsg = { inline_keyboard: keyb }

    tg.editMessageText(chatID, msg.message_id, msg.inline_message_id, pesan, 'html', true, keybMsg)
    return tg.request('answerCallbackQuery', { callback_query_id: cb.id, text: '' });
  }

  /****************** END OF HANDEL VIDEO ******************/

  /****************** HANDEL ANIMATION/GIF ******************/

  if (/html_gif$/i.exec(cb.data)) {
    var js1 = user.getValue('html_anim' + chatID)
    var pesan = "" + js1
    var keyb = { inline_keyboard: [[tg.button.text('⚙️ JSON Mode', 'json_gif')]] }

    tg.editMessageText(chatID, msg.message_id, msg.inline_message_id, pesan, 'html', true, keyb)
    return tg.request('answerCallbackQuery', { callback_query_id: cb.id, text: '' });
  }

  if (/json_gif$/i.exec(cb.data)) {
    var getstt = user.getValue('json_anim' + msg.chat.id)
    var pesan = "<code>" + getstt + "</code>"
    var keyb = []

    keyb[0] = [
      tg.button.text('❌ Close', 'closeWindow'),
      tg.button.text('🔡 HTML Mode', 'html_gif')
    ]
    var keybMsg = { inline_keyboard: keyb }

    tg.editMessageText(chatID, msg.message_id, msg.inline_message_id, pesan, 'html', true, keybMsg)
    return tg.request('answerCallbackQuery', { callback_query_id: cb.id, text: '' });
  }

  /****************** END OF HANDEL ANIMATION/GIF ******************/

  /****************** HANDEL AUDIO ******************/

  if (/jss_aud$/i.exec(cb.data)) {
    var js1 = user.getValue('html_aud' + chatID)
    var pesan = "" + js1
    var keyb = { inline_keyboard: [[tg.button.text('⚙️ JSON Mode', 'aud_json')]] }

    tg.editMessageText(chatID, msg.message_id, msg.inline_message_id, pesan, 'html', true, keyb)
    return tg.request('answerCallbackQuery', { callback_query_id: cb.id, text: '' });
  }

  if (/aud_json$/i.exec(cb.data)) {
    var getstt = user.getValue('json_aud' + msg.chat.id)
    var pesan = "<code>" + getstt + "</code>"
    var keyb = []

    keyb[0] = [
      tg.button.text('❌ Close', 'closeWindow'),
      tg.button.text('🔡 HTML Mode', 'jss_aud')
    ]
    var keybMsg = { inline_keyboard: keyb }

    tg.editMessageText(chatID, msg.message_id, msg.inline_message_id, pesan, 'html', true, keybMsg)
    return tg.request('answerCallbackQuery', { callback_query_id: cb.id, text: '' });
  }

  /****************** END OF HANDEL AUDIO ******************/

  /****************** HANDEL VOICE ******************/

  if (/jss_voi$/i.exec(cb.data)) {
    var js1 = user.getValue('html_voi' + chatID)
    var pesan = "" + js1
    var keyb = { inline_keyboard: [[tg.button.text('⚙️ JSON Mode', 'voi_json')]] }

    tg.editMessageText(chatID, msg.message_id, msg.inline_message_id, pesan, 'html', true, keyb)
    return tg.request('answerCallbackQuery', { callback_query_id: cb.id, text: '' });
  }

  if (/voi_json$/i.exec(cb.data)) {
    var getstt = user.getValue('json_voi' + msg.chat.id)
    var pesan = "<code>" + getstt + "</code>"
    var keyb = []

    keyb[0] = [
      tg.button.text('❌ Close', 'closeWindow'),
      tg.button.text('🔡 HTML Mode', 'jss_voi')
    ]
    var keybMsg = { inline_keyboard: keyb }

    tg.editMessageText(chatID, msg.message_id, msg.inline_message_id, pesan, 'html', true, keybMsg)
    return tg.request('answerCallbackQuery', { callback_query_id: cb.id, text: '' });
  }

  /****************** END OF HANDEL VOICE ******************/

  /****************** HANDEL DICE ******************/

  if (/jss_dice$/i.exec(cb.data)) {
    var js1 = user.getValue('html_dice' + chatID)
    var pesan = "" + js1
    var keyb = { inline_keyboard: [[tg.button.text('⚙️ JSON Mode', 'dice_json')]] }

    tg.editMessageText(chatID, msg.message_id, msg.inline_message_id, pesan, 'html', true, keyb)
    return tg.request('answerCallbackQuery', { callback_query_id: cb.id, text: '' });
  }

  if (/dice_json$/i.exec(cb.data)) {
    var getstt = user.getValue('json_dice' + msg.chat.id)
    var pesan = "<code>" + getstt + "</code>"
    var keyb = []

    keyb[0] = [
      tg.button.text('❌ Close', 'closeWindow'),
      tg.button.text('🔡 HTML Mode', 'jss_dice')
    ]
    var keybMsg = { inline_keyboard: keyb }

    tg.editMessageText(chatID, msg.message_id, msg.inline_message_id, pesan, 'html', true, keybMsg)
    return tg.request('answerCallbackQuery', { callback_query_id: cb.id, text: '' });
  }

  /****************** END OF HANDEL DICE ******************/

  /****************** HANDEL DOCUMENT ******************/

  if (/jss_doc$/i.exec(cb.data)) {
    var js1 = user.getValue('html_doc' + chatID)
    var pesan = "" + js1
    var keyb = { inline_keyboard: [[tg.button.text('⚙️ JSON Mode', 'doc_json')]] }

    tg.editMessageText(chatID, msg.message_id, msg.inline_message_id, pesan, 'html', true, keyb)
    return tg.request('answerCallbackQuery', { callback_query_id: cb.id, text: '' });
  }

  if (/doc_json$/i.exec(cb.data)) {
    var getstt = user.getValue('json_doc' + msg.chat.id)
    var pesan = "<code>" + getstt + "</code>"
    var keyb = []

    keyb[0] = [
      tg.button.text('❌ Close', 'closeWindow'),
      tg.button.text('🔡 HTML Mode', 'jss_doc')
    ]
    var keybMsg = { inline_keyboard: keyb }

    tg.editMessageText(chatID, msg.message_id, msg.inline_message_id, pesan, 'html', true, keybMsg)
    return tg.request('answerCallbackQuery', { callback_query_id: cb.id, text: '' });
  }

  /****************** END OF HANDEL DOCUMENT ******************/

  /****************** HANDEL GAME ******************/

  if (/jss_game$/i.exec(cb.data)) {
    var js1 = user.getValue('html_game' + chatID)
    var pesan = "" + js1
    var keyb = { inline_keyboard: [[tg.button.text('⚙️ JSON Mode', 'game_json')]] }

    tg.editMessageText(chatID, msg.message_id, msg.inline_message_id, pesan, 'html', true, keyb)
    return tg.request('answerCallbackQuery', { callback_query_id: cb.id, text: '' });
  }

  if (/game_json$/i.exec(cb.data)) {
    var getstt = user.getValue('json_game' + msg.chat.id)
    var pesan = "<code>" + getstt + "</code>"
    var keyb = []

    keyb[0] = [
      tg.button.text('❌ Close', 'closeWindow'),
      tg.button.text('🔡 HTML Mode', 'jss_game')
    ]
    var keybMsg = { inline_keyboard: keyb }

    tg.editMessageText(chatID, msg.message_id, msg.inline_message_id, pesan, 'html', true, keybMsg)
    return tg.request('answerCallbackQuery', { callback_query_id: cb.id, text: '' });
  }

  /****************** END OF HANDEL GAME ******************/

  /****************** HANDEL LOCATION ******************/

  if (/jss_loc$/i.exec(cb.data)) {
    var js1 = user.getValue('html_loc' + chatID)
    var pesan = "" + js1
    var keyb = []

    keyb[0] = [
      tg.button.url('🌏 Search Location', 'https://t.me/SearchLocationnBot')
    ]
    keyb[1] = [
      tg.button.text('⚙️ JSON Mode', 'loc_json')
    ]
    var keybMsg = { inline_keyboard: keyb }

    tg.editMessageText(chatID, msg.message_id, msg.inline_message_id, pesan, 'html', true, keybMsg)
    return tg.request('answerCallbackQuery', { callback_query_id: cb.id, text: '' });
  }

  if (/loc_json$/i.exec(cb.data)) {
    var getstt = user.getValue('json_loc' + msg.chat.id)
    var pesan = "<code>" + getstt + "</code>"
    var keyb = []

    keyb[0] = [
      tg.button.url('🌏 Search Location', 'https://t.me/SearchLocationnBot')
    ]
    keyb[1] = [
      tg.button.text('❌ Close', 'closeWindow'),
      tg.button.text('🔡 HTML Mode', 'jss_loc')
    ]
    var keybMsg = { inline_keyboard: keyb }

    tg.editMessageText(chatID, msg.message_id, msg.inline_message_id, pesan, 'html', true, keybMsg)
    return tg.request('answerCallbackQuery', { callback_query_id: cb.id, text: '' });
  }

  /****************** END OF HANDEL LOCATION ******************/

  /****************** HANDEL POLL ******************/

  if (/jss_poll$/i.exec(cb.data)) {
    var js1 = user.getValue('html_poll' + chatID)
    var pesan = "" + js1
    var keyb = { inline_keyboard: [[tg.button.text('⚙️ JSON Mode', 'poll_json')]] }

    tg.editMessageText(chatID, msg.message_id, msg.inline_message_id, pesan, 'html', true, keyb)
    return tg.request('answerCallbackQuery', { callback_query_id: cb.id, text: '' });
  }

  if (/poll_json$/i.exec(cb.data)) {
    var getstt = user.getValue('json_poll' + msg.chat.id)
    var pesan = "<code>" + getstt + "</code>"
    var keyb = []

    keyb[0] = [
      tg.button.text('❌ Close', 'closeWindow'),
      tg.button.text('🔡 HTML Mode', 'jss_poll')
    ]
    var keybMsg = { inline_keyboard: keyb }

    tg.editMessageText(chatID, msg.message_id, msg.inline_message_id, pesan, 'html', true, keybMsg)
    return tg.request('answerCallbackQuery', { callback_query_id: cb.id, text: '' });
  }

  /****************** END OF HANDEL POLL ******************/

  /****************** HANDEL VIDEO_NOTE ******************/

  if (/jss_note$/i.exec(cb.data)) {
    var js1 = user.getValue('html_note' + chatID)
    var pesan = "" + js1
    var keyb = { inline_keyboard: [[tg.button.text('⚙️ JSON Mode', 'note_json')]] }

    tg.editMessageText(chatID, msg.message_id, msg.inline_message_id, pesan, 'html', true, keyb)
    return tg.request('answerCallbackQuery', { callback_query_id: cb.id, text: '' });
  }

  if (/note_json$/i.exec(cb.data)) {
    var getstt = user.getValue('json_note' + msg.chat.id)
    var pesan = "<code>" + getstt + "</code>"
    var keyb = []

    keyb[0] = [
      tg.button.text('❌ Close', 'closeWindow'),
      tg.button.text('🔡 HTML Mode', 'jss_note')
    ]
    var keybMsg = { inline_keyboard: keyb }

    tg.editMessageText(chatID, msg.message_id, msg.inline_message_id, pesan, 'html', true, keybMsg)
    return tg.request('answerCallbackQuery', { callback_query_id: cb.id, text: '' });
  }

  /****************** END OF HANDEL VIDEO_NOTE ******************/

  /****************** HANDEL TEXT ******************/

  if (/ht_txt$/i.exec(cb.data)) {
    var js1 = user.getValue('html_txt' + chatID)
    var pesan = "" + js1
    var keyb = { inline_keyboard: [[tg.button.text('⚙️ JSON Mode', 'txt_json')]] }

    tg.editMessageText(chatID, msg.message_id, msg.inline_message_id, pesan, 'html', true, keyb)
    return tg.request('answerCallbackQuery', { callback_query_id: cb.id, text: '' });
  }

  if (/txt_json$/i.exec(cb.data)) {
    var getstt = user.getValue('json_txt' + msg.chat.id)
    var pesan = "<code>" + getstt + "</code>"
    var keyb = []

    keyb[0] = [
      tg.button.text('❌ Close', 'closeWindow'),
      tg.button.text('🔡 HTML Mode', 'ht_txt')
    ]
    var keybMsg = { inline_keyboard: keyb }

    tg.editMessageText(chatID, msg.message_id, msg.inline_message_id, pesan, 'html', true, keybMsg)
    return tg.request('answerCallbackQuery', { callback_query_id: cb.id, text: '' });
  }

  /****************** END OF HANDEL TEXT ******************/

  if (/view_pop$/i.exec(cb.data)) {
    var popup = user.getValue('popup_'+msg.chat.id)
    try {
      tg.answerCallbackQuery(cb.id, ""+popup, true)
  } catch(e) {
    var pesanError = e.message;

    if (error = /({(?:.*)})/gmi.exec(pesanError))
      pesanError = error[1];

    var psnErr = "❌ Error: <code>"+pesanError+"</code>"
    var keyb = []

    keyb[0] = [
      tg.button.text('👮 Report Error', 'sendError')
    ]

    user.setValue('bugError'+msg.chat.id, psnErr)

    tg.sendMsgKeyboardInline(msg, psnErr, keyb, 'html', true)
  }
  return;
}

  if (/sendError$/i.exec(cb.data)) {
    var logError = user.getValue('bugError'+chatID)
    
    var pesan = "Ada laporan error dari:"
    pesan += "\n\nNama: <a href='tg://user?id="+iduser+"'>"+nn+"</a>"
    pesan += "\nID: <code>"+iduser+"</code>"
    pesan += "\nIsi laporan:"
    pesan += "\n\n<code>"+logError+"</code>"
    var keyb = []

    keyb[0] = [
      tg.button.text('❌ Tolak', 'closeWindow'),
      tg.button.text('✅ Terima', 'me_accept')
    ]

    var psn = ""+logError
    var keybMsg = { inline_keyboard: [[tg.button.text('👮 Report Error', 'failedErr')]] }

    tg.sendMessageKeyboardInline(adminBot, pesan, keyb, 'html', true)
    tg.answerCallbackQuery(cb.id, "✅ Your report have been sent. Now that your report is being moderated", true)
    tg.editMessageText(chatID, msg.message_id, msg.inline_message_id, psn, 'html', true, keybMsg)
    return;
  }

  if (/failedErr$/i.exec(cb.data)) {
    return tg.answerCallbackQuery(cb.id, "Don't click again 🤦‍♂️", true)
  }

  if (/me_accept$/i.exec(cb.data)) { 
    var pesan = "<code>We have received your report, we will fix it immediately.</code>"

    tg.request('answerCallbackQuery', { callback_query_id: cb.id, text: '' });
    return tg.sendMessage(adminBot, pesan, 'html', true)
  }

}
