function doGet(e) {
  return tg.util.outputText("Hanya data POST yang kita proses yak!");
}

function doPost(e) {
  let update = tg.doPost(e);

  try {
    if (debug) return tg.sendMessage(adminBot, JSON.stringify(update, null, 2))
    prosesPesan(update)
  } catch (e) {
    tg.sendMessage(adminBot, e.message)
  }

}

function prosesPesan(update) {

  if (update.callback_query) { 
    return prosesCallback(update.callback_query)
  }

  if (update.message) {

    var msg = update.message;

    if (msg.text) {

      var group = msg.chat.title;
      var username = msg.from.username;
      var tipe = msg.chat.type;
      var idchat = msg.chat.id;
      var chatadmin = 1281755925;
      var userid = msg.from.id;
      var n = msg.from.first_name;
      var h = 11111111;
      var banned = 1005235304;

    // if user press start:
    var pola = /\/start/i
    if (pola.exec(msg.text)) {
      var nama = msg.from.first_name
      var userid = msg.from.id;
      
        var pesan = 'ð Hello <a href="tg://user?id=' + userid + '">' + tg.util.clearHTML(nama) + '</a> Im a Debug Bot, For instructions, please press the "How to use â" button and enjoy.'

        var keyboard = []

       keyboard[0] = [
          tg.button.text('âHow to use', 'how')
       ]
       keyboard[1] = [
          tg.button.url('ð Support Bot', 'https://t.me/JGCHBot'),
          tg.button.url('ð Open Source', 'https://github.com/Jevrin/DebugBot')
       ]
       keyboard[2] = [
          tg.button.url('ð Website', 'https://wwww.jevrinsupport.ml')
       ]

       return tg.sendMessageKeyboardInline(msg.chat.id, pesan, keyboard, 'HTML', true, msg.message_id)
    }
  }

    var pola = /^\/about$/i
    if (pola.exec(msg.text)) {
      var pesan = 'I am a Debug bot you can use to check JSON structure of the file/media/text that you have sent. Send /help for more, I made using JavaScript with Library V10.'
      var keyb = []

      keyb[0] = [
        tg.button.url('ð¨âð» Developer', 'https://t.me/JevrinGarmindo'),
        tg.button.url('â¹ï¸ About Me', 'https://www.jevrinsupport.ml/p/about-me.html')
      ]
      keyb[1] = [
        tg.button.url('ð My Website', 'https://www.jevrinsupport.ml'),
        tg.button.url('ð Support Bot', 'https://t.me/jgchbot')
      ]
      keyb[2] = [
        tg.button.url('ð£ Join Channel', 'https://t.me/JevrinBio')
      ]

      return tg.sendMsgKeyboardInline(msg, pesan, keyb, 'html')
    }

    /**************************** AWAL BAGIAN CEK ****************************/

    var user = new jevrin.user();

    var pola = /^\/msgid$/i
    if (pola.exec(msg.text)) {
      if (!msg.reply_to_message) return tg.sendMsg(msg, "â ï¸ Must reply message.")
      var msgr = msg.reply_to_message;

      if (!msgr.text) return tg.sendMsg(msg, "â Error: <code>Text is not defined</code>", 'html', true)
      var msgid = msgr.message_id;
      var char = msgr.text.length;
      
      try {
        var pesan = "âââã â¹ï¸ Information"
        pesan += "\nâ"
        pesan += `\nââ¢ ð Date: <code>${dateCon(msgr.date, true)}</code>`
        pesan += `\nââ¢ ð Day: <code>${dayCon(msgr.date, true)}</code>`
        pesan += `\nââ¢ ð Time: <code>${timeConverter(msgr.date, true)}</code>`
        pesan += "\nââ¢ ð Message ID: <code>" + msgid + "</code>"
        pesan += "\nââ¢ ð Character: <code>" + char + "</code>"
        
        tg.sendMsg(msg, pesan, 'html', true)
      } catch (e) {
        var pesanError = e.message;

        if (error = /({(?:.*)})/gmi.exec(pesanError))
          pesanError = error[1];

        var psnErr = "â Error: <code>"+pesanError+"</code>"
        var keyb = []

        keyb[0] = [
          tg.button.text('ð® Report Error', 'sendError')
        ]

        user.setValue('bugError'+msg.chat.id, psnErr)

        tg.sendMsgKeyboardInline(msg, psnErr, keyb, 'html', true)
      }
      return;
    }

    if (cocok = /^([\/]pop+ )/i.exec(msg.text)) {
      var cck = msg.text.replace(cocok[1], '');
      
      try {
        var pesan = "Here is the result of the popup that I have created."
        var keyb = []

        keyb[0] = [
          tg.button.text('ð View Popup', 'view_pop')
        ]

        user.setValue('popup_'+msg.chat.id, cck)

        tg.sendMsgKeyboardInline(msg, pesan, keyb, 'html', true)
      } catch(e) {
        var pesanError = e.message;

        if (error = /({(?:.*)})/gmi.exec(pesanError))
          pesanError = error[1];

        var psnErr = "â Error: <code>"+pesanError+"</code>"
        var keyb = []

        keyb[0] = [
          tg.button.text('ð® Report Error', 'sendError')
        ]

        user.setValue('bugError'+msg.chat.id, psnErr)

        tg.sendMsgKeyboardInline(msg, psnErr, keyb, 'html', true)
      }
      return;
    }

    var pola = /^\/pop$/i
    if (pola.exec(msg.text)) {
      var pesan = "â ï¸ There is no text."
      pesan += "\n\nEX: <code>/pop your message</code>"
      return tg.sendMsg(msg, pesan, 'html', true)
    }

    /**************************** AKHIR BAGIAN CEK ****************************/
    
    var pola = /^\/me$/i
    if (pola.exec(msg.text)) {
      var his = user.getValue('his_' + msg.chat.id)
      var userid = msg.from.id
      var nn = msg.from.first_name;
      if (msg.from.last_name) {
        nn += " "+msg.from.last_name;
      }

      if (!his) return tg.sendMsg(msg, "â ï¸ You must send something to view information", 'html', true)

      var pesan = "â¹ï¸ Information"
      pesan += "\n â ð ID: <code>" + userid + "</code>"
      pesan += "\n â ð§ Name: <a href='tg://user?id=" + userid + "'>" + nn + "</a>"
      pesan += "\n\nð Your History"
      pesan += "\n â <code>" + his + "</code>"
      var keyb = []

      keyb[0] = [
        tg.button.text('â Close', 'closeWindow')
      ]

      return tg.sendMsgKeyboardInline(msg, pesan, keyb, 'html', true)
    }

    var pola = /^\/help$/i
    if (pola.exec(msg.text)) {
      var pesan = "<b>Help</b>"
      pesan += "\nHow to use this bot?\nTo use me: send whatever it is and I'm going to convert it to a JSON structure."
      pesan += "\n\nAny command:"
      pesan += "\n/help - this command"
      pesan += "\n/msgid - check message info"
      pesan += "\n/pop - create your own popup"
      pesan += "\n/about - about this bot"

      return tg.sendMsg(msg, pesan, 'html', true)
    }

    if (msg.text) {
      var inf = msg;
      var txt = msg.text;
      var tp = msg.chat.type;
      var js = JSON.stringify(inf, null, 2)

    try {
      var pesan = "<code>" + js + "</code>"
      var psn = "ð Text: <code>" + txt + "</code>"
      psn += "\nð Type: <code>" + tp + "</code>"
      var keyb = []

      keyb[0] = [
        tg.button.text('â Close', 'closeWindow'),
        tg.button.text('ð¡ HTML Mode', 'ht_txt')
      ]

      user.setValue('json_txt' + msg.chat.id, js)
      user.setValue('html_txt' + msg.chat.id, psn)

      tg.sendMsgKeyboardInline(msg, pesan, keyb, 'html', true, msg.message_id)
    } catch(e) {
      var pesanError = e.message;

      if (error = /({(?:.*)})/gmi.exec(pesanError))
        pesanError = error[1];

      var psnErr = "â Error: <code>"+pesanError+"</code>"
      var keyb = []

      keyb[0] = [
        tg.button.text('ð® Report Error', 'sendError')
      ]
      
      user.setValue('bugError'+msg.chat.id, psnErr)

      tg.sendMsgKeyboardInline(msg, psnErr, keyb, 'html', true)
    }
   return;
  }

    if (msg.photo) {
      var fileid = msg.photo[0].file_id;
      var unique = msg.photo[0].file_unique_id;
      var size = msg.photo[0].file_size;
      var width = msg.photo[0].width;
      var height = msg.photo[0].height;
      var pht = msg.photo[0];
      var js = JSON.stringify(pht, null, 2);

    try {
      var psn = "<code>" + js + "</code>"
      var pesan = "â¹ï¸ Information"
      pesan += "\n\nð File ID: <code>" + fileid + "</code>"
      pesan += "\nð° Unique ID: <code>" + unique + "</code>"
      pesan += "\nð Size: <code>" + size + " B</code>"
      pesan += "\nð Type: <code>photo</code>"
      pesan += "\nð Width: <code>" + width + "</code>"
      pesan += "\n â Height: <code>" + height + "</code>"
      var keyb = []

      keyb[0] = [
        tg.button.text('â Close', 'closeWindow'),
        tg.button.text('ð¡ HTML Mode', 'html_1')
      ]

      user.setValue('json_' + msg.chat.id, js)
      user.setValue('psn_' + msg.chat.id, pesan)

      tg.sendMsgKeyboardInline(msg, psn, keyb, 'html', true, msg.message_id)
    } catch(e) {
      var pesanError = e.message;

      if (error = /({(?:.*)})/gmi.exec(pesanError))
        pesanError = error[1];

      var psnErr = "â Error: <code>"+pesanError+"</code>"
      var keyb = []

      keyb[0] = [
        tg.button.text('ð® Report Error', 'sendError')
      ]

      user.setValue('bugError'+msg.chat.id, psnErr)

      tg.sendMsgKeyboardInline(msg, psnErr, keyb, 'html', true)
    }
    return;
  } 

    if (msg.sticker) {
      var fileid = msg.sticker.file_id;
      var setname = msg.sticker.set_name;
      var unique = msg.sticker.file_unique_id;
      var size = msg.sticker.file_size;
      var width = msg.sticker.width;
      var height = msg.sticker.height;
      var emoji = msg.sticker.emoji;
      var anim = msg.sticker.is_animated;
      var pht = msg.sticker;
      var js = JSON.stringify(pht, null, 2);

    try {
      var psn = "<code>" + js + "</code>"
      var pesan = "â¹ï¸ Information"
      pesan += "\n\nð File ID: <code>" + fileid + "</code>"
      pesan += "\nð° Unique ID: <code>" + unique + "</code>"
      pesan += "\nð Size: <code>" + size + " B</code>"
      pesan += "\nð Name: <code>" + setname + "</code>"
      pesan += "\nð» Emoji: <code>" + emoji + "</code>"
      pesan += "\nð¥ Animated: <code>" + anim + "</code>"
      pesan += "\nð Type: <code>sticker</code>"
      pesan += "\nð Width: <code>" + width + "</code>"
      pesan += "\n â Height: <code>" + height + "</code>"
      var keyb = []

      keyb[0] = [
        tg.button.url('ð­ add sticker', 'https://t.me/addstickers/' + setname + '')
      ]
      keyb[1] = [
        tg.button.text('â Close', 'closeWindow'),
        tg.button.text('ð¡ HTML Mode', 'stic_1')
      ]

      var stt = "" + setname
      user.setValue('json_stic' + msg.chat.id, js)
      user.setValue('psn_stic' + msg.chat.id, pesan)
      user.setValue('stt_' + msg.chat.id, stt)

      tg.sendMessageKeyboardInline(msg.chat.id, psn, keyb, 'html', true, msg.message_id)
    } catch(e) {
      var pesanError = e.message;

      if (error = /({(?:.*)})/gmi.exec(pesanError))
        pesanError = error[1];

      var psnErr = "â Error: <code>"+pesanError+"</code>"
      var keyb = []

      keyb[0] = [
        tg.button.text('ð® Report Error', 'sendError')
      ]

      user.setValue('bugError'+msg.chat.id, psnErr)

      tg.sendMsgKeyboardInline(msg, psnErr, keyb, 'html', true)
    }
    return;
  }

    if (msg.video) {
      var fileid = msg.video.file_id;
      var unique = msg.video.file_unique_id;
      var dur = msg.video.duration;
      var width = msg.video.width;
      var height = msg.video.height;
      var tp = msg.video.mime_type;
      var size = msg.video.file_size;
      var pht = msg.video;
      var js = JSON.stringify(pht, null, 2);

    try {
      var psn = "<code>" + js + "</code>"
      var pesan = "â¹ï¸ Information"
      pesan += "\n\nð File ID: <code>" + fileid + "</code>"
      pesan += "\nð° Unique ID: <code>" + unique + "</code>"
      pesan += "\nð Size: <code>" + size + " B</code>"
      pesan += "\nâï¸ Duration: <code>" + dur + "</code>"
      pesan += "\nð Type: <code>" + tp + "</code>"
      pesan += "\nð Width: <code>" + width + "</code>"
      pesan += "\n â Height: <code>" + height + "</code>"
      var keyb = []

      keyb[0] = [
        tg.button.text('â Close', 'closeWindow'),
        tg.button.text('ð¡ HTML Mode', 'vid_1')
      ]

      user.setValue('json_vid' + msg.chat.id, js)
      user.setValue('vid_html' + msg.chat.id, pesan)

      tg.sendMessageKeyboardInline(msg.chat.id, psn, keyb, 'html', true, msg.message_id)
    } catch(e) {
      var pesanError = e.message;

      if (error = /({(?:.*)})/gmi.exec(pesanError))
        pesanError = error[1];

      var psnErr = "â Error: <code>"+pesanError+"</code>"
      var keyb = []

      keyb[0] = [
        tg.button.text('ð® Report Error', 'sendError')
      ]

      user.setValue('bugError'+msg.chat.id, psnErr)

      tg.sendMsgKeyboardInline(msg, psnErr, keyb, 'html', true)
    }
    return;
  }

    if (msg.animation) {
      var fileid = msg.animation.file_id;
      var unique = msg.animation.file_unique_id;
      var size = msg.animation.file_size;
      var dur = msg.animation.duration;
      var width = msg.animation.width;
      var height = msg.animation.height;
      var fname = msg.animation.mime_type;
      var pht = msg.animation;
      var js = JSON.stringify(pht, null, 2);

    try {
      var psn = "<code>" + js + "</code>"
      var pesan = "â¹ï¸ Information"
      pesan += "\n\nð File ID: <code>" + fileid + "</code>"
      pesan += "\nð° Unique ID: <code>" + unique + "</code>"
      pesan += "\nð Size: <code>" + size + " B</code>"
      pesan += "\nâï¸ Duration: <code>" + dur + "</code>"
      pesan += "\nð Type: <code>" + fname + "</code>"
      pesan += "\nð Width: <code>" + width + "</code>"
      pesan += "\n â Height: <code>" + height + "</code>"
      var keyb = []

      keyb[0] = [
        tg.button.text('â Close', 'closeWindow'),
        tg.button.text('ð¡ HTML Mode', 'html_gif')
      ]

      user.setValue('json_anim' + msg.chat.id, js)
      user.setValue('html_anim' + msg.chat.id, pesan)

      tg.sendMessageKeyboardInline(msg.chat.id, psn, keyb, 'html', true, msg.message_id)
    } catch(e) {
      var pesanError = e.message;

      if (error = /({(?:.*)})/gmi.exec(pesanError))
        pesanError = error[1];

      var psnErr = "â Error: <code>"+pesanError+"</code>"
      var keyb = []

      keyb[0] = [
        tg.button.text('ð® Report Error', 'sendError')
      ]

      user.setValue('bugError'+msg.chat.id, psnErr)

      tg.sendMsgKeyboardInline(msg, psnErr, keyb, 'html', true)
    }
    return;
  }

    if (msg.audio) {
      var fileid = msg.audio.file_id;
      var unique = msg.audio.file_unique_id;
      var size = msg.audio.file_size;
      var dur = msg.audio.duration;
      var width = msg.audio.width;
      var height = msg.audio.height;
      var title = msg.audio.title;
      var tp = msg.audio.mime_type;
      var per = msg.audio.performer;
      var fname = msg.audio.file_name;
      var pht = msg.audio;
      var js = JSON.stringify(pht, null, 2);

    try {
      var psn = "<code>" + js + "</code>"
      var pesan = "â¹ï¸ Information"
      pesan += "\n\nð File ID: <code>" + fileid + "</code>"
      pesan += "\nð° Unique ID: <code>" + unique + "</code>"
      pesan += "\nð File name: <code>" + fname + "</code>"
      pesan += "\nð Title: <code>" + title + "</code>"
      pesan += "\nð Performer: <code>" + per + "</code>"
      pesan += "\nð Size: <code>" + size + " B</code>"
      pesan += "\nâï¸ Duration: <code>" + dur + "</code>"
      pesan += "\nð Type: <code>" + tp + "</code>"
      var keyb = []

      keyb[0] = [
        tg.button.text('â Close', 'closeWindow'),
        tg.button.text('ð¡ HTML Mode', 'jss_aud')
      ]

      user.setValue('json_aud' + msg.chat.id, js)
      user.setValue('html_aud' + msg.chat.id, pesan)

      tg.sendMessageKeyboardInline(msg.chat.id, psn, keyb, 'html', true, msg.message_id)
    } catch(e) {
      var pesanError = e.message;

      if (error = /({(?:.*)})/gmi.exec(pesanError))
        pesanError = error[1];

      var psnErr = "â Error: <code>"+pesanError+"</code>"
      var keyb = []

      keyb[0] = [
        tg.button.text('ð® Report Error', 'sendError')
      ]

      user.setValue('bugError'+msg.chat.id, psnErr)

      tg.sendMsgKeyboardInline(msg, psnErr, keyb, 'html', true)
    }
    return;
  }

    if (msg.voice) {
      var fileid = msg.voice.file_id;
      var unique = msg.voice.file_unique_id;
      var size = msg.voice.file_size;
      var dur = msg.voice.duration;
      var tp = msg.voice.mime_type;
      var pht = msg.voice;
      var js = JSON.stringify(pht, null, 2);

    try {
      var psn = "<code>" + js + "</code>"
      var pesan = "â¹ï¸ Information"
      pesan += "\n\nð File ID: <code>" + fileid + "</code>"
      pesan += "\nð° Unique ID: <code>" + unique + "</code>"
      pesan += "\nð Size: <code>" + size + " B</code>"
      pesan += "\nâï¸ Duration: <code>" + dur + "</code>"
      pesan += "\nð Type: <code>" + tp + "</code>"
      var keyb = []

      keyb[0] = [
        tg.button.text('â Close', 'closeWindow'),
        tg.button.text('ð¡ HTML Mode', 'jss_voi')
      ]

      user.setValue('json_voi' + msg.chat.id, js)
      user.setValue('html_voi' + msg.chat.id, pesan)

      tg.sendMessageKeyboardInline(msg.chat.id, psn, keyb, 'html', true, msg.message_id)
    } catch(e) {
      var pesanError = e.message;

      if (error = /({(?:.*)})/gmi.exec(pesanError))
        pesanError = error[1];

      var psnErr = "â Error: <code>"+pesanError+"</code>"
      var keyb = []

      keyb[0] = [
        tg.button.text('ð® Report Error', 'sendError')
      ]

      user.setValue('bugError'+msg.chat.id, psnErr)

      tg.sendMsgKeyboardInline(msg, psnErr, keyb, 'html', true)
    }
    return;
  }

    if (msg.dice) {
      var emoji = msg.dice.emoji;
      var value = msg.dice.value;
      var pht = msg.dice;
      var js = JSON.stringify(pht, null, 2);

    try {
      var psn = "<code>" + js + "</code>"
      var pesan = "â¹ï¸ Information"
      pesan += "\n\nð» Emoji: <code>" + emoji + "</code>"
      pesan += "\nâ³ï¸ Value: <code>" + value + "</code>"
      pesan += "\nð Type: <code>dice</code>"
      var keyb = []

      keyb[0] = [
        tg.button.text('â Close', 'closeWindow'),
        tg.button.text('ð¡ HTML Mode', 'jss_dice')
      ]

      user.setValue('json_dice' + msg.chat.id, js)
      user.setValue('html_dice' + msg.chat.id, pesan)

      tg.sendMessageKeyboardInline(msg.chat.id, psn, keyb, 'html', true, msg.message_id)
    } catch(e) {
      var pesanError = e.message;

      if (error = /({(?:.*)})/gmi.exec(pesanError))
        pesanError = error[1];

      var psnErr = "â Error: <code>"+pesanError+"</code>"
      var keyb = []

      keyb[0] = [
        tg.button.text('ð® Report Error', 'sendError')
      ]

      user.setValue('bugError'+msg.chat.id, psnErr)

      tg.sendMsgKeyboardInline(msg, psnErr, keyb, 'html', true)
    }
    return;
  }

    if (msg.document) {
      var fileid = msg.document.file_id;
      var unique = msg.document.file_unique_id;
      var size = msg.document.file_size;
      var width = msg.document.width;
      var height = msg.document.height;
      var fname = msg.document.file_name;
      var tp = msg.document.mime_type;
      var pht = msg.document;
      var js = JSON.stringify(pht, null, 2);

    try {
      var psn = "<code>" + js + "</code>"
      var pesan = "â¹ï¸ Information"
      pesan += "\n\nð File ID: <code>" + fileid + "</code>"
      pesan += "\nð° Unique ID: <code>" + unique + "</code>"
      pesan += "\nð File name: <code>" + fname + "</code>"
      pesan += "\nð Type: <code>" + tp + "</code>"
      pesan += "\nð Size: <code>" + size + " B</code>"
      var keyb = []

      keyb[0] = [
        tg.button.text('â Close', 'closeWindow'),
        tg.button.text('ð¡ HTML Mode', 'jss_doc')
      ]

      user.setValue('json_doc' + msg.chat.id, js)
      user.setValue('html_doc' + msg.chat.id, pesan)

      tg.sendMessageKeyboardInline(msg.chat.id, psn, keyb, 'html', true, msg.message_id)
    } catch(e) {
      var pesanError = e.message;

      if (error = /({(?:.*)})/gmi.exec(pesanError))
        pesanError = error[1];

      var psnErr = "â Error: <code>"+pesanError+"</code>"
      var keyb = []

      keyb[0] = [
        tg.button.text('ð® Report Error', 'sendError')
      ]

      user.setValue('bugError'+msg.chat.id, psnErr)

      tg.sendMsgKeyboardInline(msg, psnErr, keyb, 'html', true)
    }
    return;
  }

    if (msg.game) {
      var title = msg.game.title;
      var desc = msg.game.description;
      var uname = msg.via_bot.first_name;
      var botid = msg.via_bot.id;
      var ubot = msg.via_bot.username;
      var pht = msg.game;
      var js = JSON.stringify(pht, null, 2);

    try {
      var psn = "<code>" + js + "</code>"
      var pesan = "â¹ï¸ Information"
      pesan += "\n\nð Title: <code>" + title + "</code>"
      pesan += "\nð Desc: <code>" + desc + "</code>"
      pesan += "\nð Type: <code>game</code>"
      pesan += "\nð¤ Bot name: <code>" + uname + "</code>"
      pesan += "\n â Username: <code>@" + ubot + "</code>"
      pesan += "\n â ID: <code>" + botid + "</code>"
      var keyb = []

      keyb[0] = [
        tg.button.text('â Close', 'closeWindow'),
        tg.button.text('ð¡ HTML Mode', 'jss_game')
      ]

      user.setValue('json_game' + msg.chat.id, js)
      user.setValue('html_game' + msg.chat.id, pesan)

      tg.sendMessageKeyboardInline(msg.chat.id, psn, keyb, 'html', true, msg.message_id)
    } catch(e) {
      var pesanError = e.message;

      if (error = /({(?:.*)})/gmi.exec(pesanError))
        pesanError = error[1];

      var psnErr = "â Error: <code>"+pesanError+"</code>"
      var keyb = []

      keyb[0] = [
        tg.button.text('ð® Report Error', 'sendError')
      ]

      user.setValue('bugError'+msg.chat.id, psnErr)

      tg.sendMsgKeyboardInline(msg, psnErr, keyb, 'html', true)
    }
    return;
  }

    if (msg.location) {
      var lat = msg.location.latitude;
      var long = msg.location.longitude;
      var address = msg.venue.address;
      var title = msg.venue.title;
      var pht = msg.location;
      var js = JSON.stringify(pht, null, 2);

    try {
      var psn = "<code>" + js + "</code>"
      var pesan = "â¹ï¸ Information"
      pesan += "\n\nð Title: <code>" + title + "</code>"
      pesan += "\nð¬ Address: <code>" + address + "</code>"
      pesan += "\nð Type: <code>location/venue</code>"
      pesan += "\nð Latitude: <code>" + lat + "</code>"
      pesan += "\n â Longitude: <code>" + long + "</code>"
      var keyb = []

      keyb[0] = [
        tg.button.url('ð Search Location', 'https://t.me/SearchLocationnBot')
      ]
      keyb[1] = [
        tg.button.text('â Close', 'closeWindow'),
        tg.button.text('ð¡ HTML Mode', 'jss_loc')
      ]

      user.setValue('json_loc' + msg.chat.id, js)
      user.setValue('html_loc' + msg.chat.id, pesan)

      tg.sendMessageKeyboardInline(msg.chat.id, psn, keyb, 'html', true, msg.message_id)
    } catch(e) {
      var pesanError = e.message;

      if (error = /({(?:.*)})/gmi.exec(pesanError))
        pesanError = error[1];

      var psnErr = "â Error: <code>"+pesanError+"</code>"
      var keyb = []

      keyb[0] = [
        tg.button.text('ð® Report Error', 'sendError')
      ]

      user.setValue('bugError'+msg.chat.id, psnErr)

      tg.sendMsgKeyboardInline(msg, psnErr, keyb, 'html', true)
    }
    return;
  }

    if (msg.poll) {
      var poli = msg.poll.id;
      var que = msg.poll.question;
      var tp = msg.poll.type;
      var pg = msg.poll.allows_multiple_answers;
      var tot = msg.poll.total_voter_count;
      var cr = msg.poll.correct_option_id;
      var clo = msg.poll.is_closed;
      var anon = msg.poll.is_anonymous;
      var pht = msg.poll;
      var js = JSON.stringify(pht, null, 2);

    try {
      var psn = "<code>" + js + "</code>"
      var pesan = "â¹ï¸ Information"
      pesan += "\n\nð Poll ID: <code>" + poli + "</code>"
      pesan += "\nâQuestion: <code>" + que + "</code>"
      pesan += "\nð Type: <code>" + tp + "</code>"
      pesan += "\nð¡ Mutiple Answer: <code>" + pg + "</code>"
      pesan += "\nâï¸ Total Voter: <code>" + tot + "</code>"
      pesan += "\nâ Correct Option ID: <code>" + cr + "</code>"
      pesan += "\nâ Closed: <code>" + clo + "</code>"
      pesan += "\nð¥· Anonymous: <code>" + anon + "</code>"
      var keyb = []

      keyb[0] = [
        tg.button.text('â Close', 'closeWindow'),
        tg.button.text('ð¡ HTML Mode', 'jss_poll')
      ]

      user.setValue('json_poll' + msg.chat.id, js)
      user.setValue('html_poll' + msg.chat.id, pesan)

      tg.sendMessageKeyboardInline(msg.chat.id, psn, keyb, 'html', true, msg.message_id)
    } catch(e) {
      var pesanError = e.message;

      if (error = /({(?:.*)})/gmi.exec(pesanError))
        pesanError = error[1];

      var psnErr = "â Error: <code>"+pesanError+"</code>"
      var keyb = []

      keyb[0] = [
        tg.button.text('ð® Report Error', 'sendError')
      ]

      user.setValue('bugError'+msg.chat.id, psnErr)

      tg.sendMsgKeyboardInline(msg, psnErr, keyb, 'html', true)
    }
    return;
  }

    if (msg.video_note) {
      var fileid = msg.video_note.file_id;
      var unique = msg.video_note.file_unique_id;
      var dur = msg.video_note.duration;
      var size = msg.video_note.file_size;
      var lg = msg.video_note.length;
      var pht = msg.video_note;
      var js = JSON.stringify(pht, null, 2);

    try {
      var psn = "<code>" + js + "</code>"
      var pesan = "â¹ï¸ Information"
      pesan += "\n\nð File ID: <code>" + fileid + "</code>"
      pesan += "\nð° Unique ID: <code>" + unique + "</code>"
      pesan += "\nð Size: <code>" + size + " B</code>"
      pesan += "\nâï¸ Duration: <code>" + dur + "</code>"
      pesan += "\nð Type: <code>video_note/mp4</code>"
      pesan += "\nð Length: <code>" + lg + "</code>"
      var keyb = []

      keyb[0] = [
        tg.button.text('â Close', 'closeWindow'),
        tg.button.text('ð¡ HTML Mode', 'jss_note')
      ]

      user.setValue('json_note' + msg.chat.id, js)
      user.setValue('html_note' + msg.chat.id, pesan)

      tg.sendMessageKeyboardInline(msg.chat.id, psn, keyb, 'html', true, msg.message_id)
    } catch(e) {
      var pesanError = e.message;

      if (error = /({(?:.*)})/gmi.exec(pesanError))
        pesanError = error[1];

      var psnErr = "â Error: <code>"+pesanError+"</code>"
      var keyb = []

      keyb[0] = [
        tg.button.text('ð® Report Error', 'sendError')
      ]

      user.setValue('bugError'+msg.chat.id, psnErr)

      tg.sendMsgKeyboardInline(msg, psnErr, keyb, 'html', true)
    }
    return;
  }

  var chace = CacheService.getDocumentCache();

  function rateLimit(options) {
    return (msg,next) => {
    let data = chache.get(msg.from.id)
      if (data !== null) {
        let count = Number(data)
        count ++
        chace.put(msg.from.id, count, options.time)
        if (count > options.limit) {
          return options.onlimit(msg)
      }
    }
    if (data == null) chace.put(msg.from.id, 0, options.time)
    return next()
    }
  }

   // end of code
  }
}
