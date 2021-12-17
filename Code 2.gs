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
      
        var pesan = '👋 Hello <a href="tg://user?id=' + userid + '">' + tg.util.clearHTML(nama) + '</a> Im a Debug Bot, For instructions, please press the "How to use ❔" button and enjoy.'

        var keyboard = []

       keyboard[0] = [
          tg.button.text('❔How to use', 'how')
       ]
       keyboard[1] = [
          tg.button.url('🆘 Support Bot', 'https://t.me/JGCHBot'),
          tg.button.url('🗂 Open Source', 'https://github.com/Jevrin/DebugBot')
       ]
       keyboard[2] = [
          tg.button.url('🌐 Website', 'https://wwww.jevrinsupport.ml')
       ]

       return tg.sendMessageKeyboardInline(msg.chat.id, pesan, keyboard, 'HTML', true, msg.message_id)
    }
  }

    var user = new jevrin.user();

    var pola = /^\/about$/i
    if (pola.exec(msg.text)) {
      var pesan = 'I am a Debug bot you can use to check JSON structure of the file/media/text that you have sent. Send /help for more, I made using JavaScript with Library V10.'
      var keyb = []

      keyb[0] = [
        tg.button.url('👨‍💻 Developer', 'https://t.me/JevrinGarmindo'),
        tg.button.url('ℹ️ About Me', 'https://www.jevrinsupport.ml/p/about-me.html')
      ]
      keyb[1] = [
        tg.button.url('🌐 My Website', 'https://www.jevrinsupport.ml'),
        tg.button.url('🆘 Support Bot', 'https://t.me/jgchbot')
      ]
      keyb[2] = [
        tg.button.url('📣 Join Channel', 'https://t.me/JevrinBio')
      ]

      return tg.sendMsgKeyboardInline(msg, pesan, keyb, 'html')
    }

    var pola = /^\/report$/i
    if (pola.exec(msg.text)) {
      var pesan = "If you find a bug or error in this bot, you can report it to @JGCHBot"
      return tg.sendMsg(msg, pesan, 'html')
    }

    var pola = /^\/msgid$/i
    if (pola.exec(msg.text)) {
      if (msg.reply_to_message) {
        var msgr = msg.reply_to_message;
        var msgid = msgr.message_id;
        var pesan = "🆔 Message ID: <code>" + msgid + "</code>"
        return tg.sendMsg(msg, pesan, 'html')
      }
    }

    if (/^\/msgid$/i.exec(msg.text)) {
      var pesan = "⚠️ Must reply message."
      var keyb = []

      keyb[0] = [
        tg.button.text('OK ✅', 'me_ok')
      ]

      return tg.sendMsgKeyboardInline(msg, pesan, keyb, 'html', true)
    }

    var pola = /^\/help$/i
    if (pola.exec(msg.text)) {
      var pesan = "How to use this bot?"
      pesan += "\nTo use me, send: text, photo, video, video_note, document, audio/music, voice, dice, gif, sticker, game, location, poll and I'm going to convert it in JSON structure."
      return tg.sendMsg(msg, pesan, 'html')
    }

    if (msg.text) {
      var inf = msg;
      var txt = msg.text;
      var js = JSON.stringify(inf, null, 2)
      var pesan = "<code>" + js + "</code>"
      var psn = "📝 Text: <code>" + txt + "</code>"
      var keyb = []

      keyb[0] = [
        tg.button.text('❌ Close', 'closeWindow'),
        tg.button.text('🔡 HTML Mode', 'ht_txt')
      ]

      user.setValue('json_txt' + msg.chat.id, js)
      user.setValue('html_txt' + msg.chat.id, psn)

      return tg.sendMsgKeyboardInline(msg, pesan, keyb, 'html', true, msg.message_id)
    }

    if (msg.photo) {
      var fileid = msg.photo[0].file_id;
      var unique = msg.photo[0].file_unique_id;
      var size = msg.photo[0].file_size;
      var width = msg.photo[0].width;
      var height = msg.photo[0].height;
      var pht = msg.photo[0];
      var js = JSON.stringify(pht, null, 2);

      var psn = "<code>" + js + "</code>"
      var pesan = "ℹ️ Information"
      pesan += "\n\n🆔 File ID: <code>" + fileid + "</code>"
      pesan += "\n🔰 Unique ID: <code>" + unique + "</code>"
      pesan += "\n🗃 Size: <code>" + size + " KB</code>"
      pesan += "\n🗂 Type: <code>photo</code>"
      pesan += "\n📏 Width: <code>" + width + "</code>"
      pesan += "\n └ Height: <code>" + height + "</code>"
      var keyb = []

      keyb[0] = [
        tg.button.text('❌ Close', 'closeWindow'),
        tg.button.text('🔡 HTML Mode', 'html_1')
      ]

      user.setValue('json_' + msg.chat.id, js)
      user.setValue('psn_' + msg.chat.id, pesan)

      return tg.sendMsgKeyboardInline(msg, psn, keyb, 'html', true, msg.message_id)
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

      var psn = "<code>" + js + "</code>"
      var pesan = "ℹ️ Information"
      pesan += "\n\n🆔 File ID: <code>" + fileid + "</code>"
      pesan += "\n🔰 Unique ID: <code>" + unique + "</code>"
      pesan += "\n🗃 Size: <code>" + size + " KB</code>"
      pesan += "\n📇 Name: <code>" + setname + "</code>"
      pesan += "\n👻 Emoji: <code>" + emoji + "</code>"
      pesan += "\n🌥 Animated: <code>" + anim + "</code>"
      pesan += "\n🗂 Type: <code>sticker</code>"
      pesan += "\n📏 Width: <code>" + width + "</code>"
      pesan += "\n └ Height: <code>" + height + "</code>"
      var keyb = []

      keyb[0] = [
        tg.button.url('🎭 add sticker', 'https://t.me/addstickers/' + setname + '')
      ]
      keyb[1] = [
        tg.button.text('❌ Close', 'closeWindow'),
        tg.button.text('🔡 HTML Mode', 'stic_1')
      ]

      var stt = "" + setname
      user.setValue('json_stic' + msg.chat.id, js)
      user.setValue('psn_stic' + msg.chat.id, pesan)
      user.setValue('stt_' + msg.chat.id, stt)

      return tg.sendMessageKeyboardInline(msg.chat.id, psn, keyb, 'html', true, msg.message_id)
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

      var psn = "<code>" + js + "</code>"
      var pesan = "ℹ️ Information"
      pesan += "\n\n🆔 File ID: <code>" + fileid + "</code>"
      pesan += "\n🔰 Unique ID: <code>" + unique + "</code>"
      pesan += "\n🗃 Size: <code>" + size + " KB</code>"
      pesan += "\n❇️ Duration: <code>" + dur + "</code>"
      pesan += "\n🗂 Type: <code>" + tp + "</code>"
      pesan += "\n📏 Width: <code>" + width + "</code>"
      pesan += "\n └ Height: <code>" + height + "</code>"
      var keyb = []

      keyb[0] = [
        tg.button.text('❌ Close', 'closeWindow'),
        tg.button.text('🔡 HTML Mode', 'vid_1')
      ]

      user.setValue('json_vid' + msg.chat.id, js)
      user.setValue('vid_html' + msg.chat.id, pesan)

      return tg.sendMessageKeyboardInline(msg.chat.id, psn, keyb, 'html', true, msg.message_id)
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

      var psn = "<code>" + js + "</code>"
      var pesan = "ℹ️ Information"
      pesan += "\n\n🆔 File ID: <code>" + fileid + "</code>"
      pesan += "\n🔰 Unique ID: <code>" + unique + "</code>"
      pesan += "\n🗃 Size: <code>" + size + " KB</code>"
      pesan += "\n❇️ Duration: <code>" + dur + "</code>"
      pesan += "\n🗂 Type: <code>" + fname + "</code>"
      pesan += "\n📏 Width: <code>" + width + "</code>"
      pesan += "\n └ Height: <code>" + height + "</code>"
      var keyb = []

      keyb[0] = [
        tg.button.text('❌ Close', 'closeWindow'),
        tg.button.text('🔡 HTML Mode', 'html_gif')
      ]

      user.setValue('json_anim' + msg.chat.id, js)
      user.setValue('html_anim' + msg.chat.id, pesan)

      return tg.sendMessageKeyboardInline(msg.chat.id, psn, keyb, 'html', true, msg.message_id)
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

      var psn = "<code>" + js + "</code>"
      var pesan = "ℹ️ Information"
      pesan += "\n\n🆔 File ID: <code>" + fileid + "</code>"
      pesan += "\n🔰 Unique ID: <code>" + unique + "</code>"
      pesan += "\n🔖 File name: <code>" + fname + "</code>"
      pesan += "\n📝 Title: <code>" + title + "</code>"
      pesan += "\n🎛 Performer: <code>" + per + "</code>"
      pesan += "\n🗃 Size: <code>" + size + " KB</code>"
      pesan += "\n❇️ Duration: <code>" + dur + "</code>"
      pesan += "\n🗂 Type: <code>" + tp + "</code>"
      var keyb = []

      keyb[0] = [
        tg.button.text('❌ Close', 'closeWindow'),
        tg.button.text('🔡 HTML Mode', 'jss_aud')
      ]

      user.setValue('json_aud' + msg.chat.id, js)
      user.setValue('html_aud' + msg.chat.id, pesan)

      return tg.sendMessageKeyboardInline(msg.chat.id, psn, keyb, 'html', true, msg.message_id)
    }

    if (msg.voice) {
      var fileid = msg.voice.file_id;
      var unique = msg.voice.file_unique_id;
      var size = msg.voice.file_size;
      var dur = msg.voice.duration;
      var tp = msg.voice.mime_type;
      var pht = msg.voice;
      var js = JSON.stringify(pht, null, 2);

      var psn = "<code>" + js + "</code>"
      var pesan = "ℹ️ Information"
      pesan += "\n\n🆔 File ID: <code>" + fileid + "</code>"
      pesan += "\n🔰 Unique ID: <code>" + unique + "</code>"
      pesan += "\n🗃 Size: <code>" + size + " KB</code>"
      pesan += "\n❇️ Duration: <code>" + dur + "</code>"
      pesan += "\n🗂 Type: <code>" + tp + "</code>"
      var keyb = []

      keyb[0] = [
        tg.button.text('❌ Close', 'closeWindow'),
        tg.button.text('🔡 HTML Mode', 'jss_voi')
      ]

      user.setValue('json_voi' + msg.chat.id, js)
      user.setValue('html_voi' + msg.chat.id, pesan)

      return tg.sendMessageKeyboardInline(msg.chat.id, psn, keyb, 'html', true, msg.message_id)
    }

    if (msg.dice) {
      var emoji = msg.dice.emoji;
      var value = msg.dice.value;
      var pht = msg.dice;
      var js = JSON.stringify(pht, null, 2);

      var psn = "<code>" + js + "</code>"
      var pesan = "ℹ️ Information"
      pesan += "\n\n👻 Emoji: <code>" + emoji + "</code>"
      pesan += "\n✳️ Value: <code>" + value + "</code>"
      pesan += "\n🗂 Type: <code>dice</code>"
      var keyb = []

      keyb[0] = [
        tg.button.text('❌ Close', 'closeWindow'),
        tg.button.text('🔡 HTML Mode', 'jss_dice')
      ]

      user.setValue('json_dice' + msg.chat.id, js)
      user.setValue('html_dice' + msg.chat.id, pesan)

      return tg.sendMessageKeyboardInline(msg.chat.id, psn, keyb, 'html', true, msg.message_id)
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

      var psn = "<code>" + js + "</code>"
      var pesan = "ℹ️ Information"
      pesan += "\n\n🆔 File ID: <code>" + fileid + "</code>"
      pesan += "\n🔰 Unique ID: <code>" + unique + "</code>"
      pesan += "\n🔖 File name: <code>" + fname + "</code>"
      pesan += "\n🗂 Type: <code>" + tp + "</code>"
      pesan += "\n🗃 Size: <code>" + size + " KB</code>"
      var keyb = []

      keyb[0] = [
        tg.button.text('❌ Close', 'closeWindow'),
        tg.button.text('🔡 HTML Mode', 'jss_doc')
      ]

      user.setValue('json_doc' + msg.chat.id, js)
      user.setValue('html_doc' + msg.chat.id, pesan)

      return tg.sendMessageKeyboardInline(msg.chat.id, psn, keyb, 'html', true, msg.message_id)
    }

    if (msg.game) {
      var title = msg.game.title;
      var desc = msg.game.description;
      var uname = msg.via_bot.first_name;
      var botid = msg.via_bot.id;
      var ubot = msg.via_bot.username;
      var pht = msg.game;
      var js = JSON.stringify(pht, null, 2);

      var psn = "<code>" + js + "</code>"
      var pesan = "ℹ️ Information"
      pesan += "\n\n📝 Title: <code>" + title + "</code>"
      pesan += "\n📋 Desc: <code>" + desc + "</code>"
      pesan += "\n🗂 Type: <code>game</code>"
      pesan += "\n🤖 Bot name: <code>" + uname + "</code>"
      pesan += "\n ├ Username: <code>@" + ubot + "</code>"
      pesan += "\n └ ID: <code>" + botid + "</code>"
      var keyb = []

      keyb[0] = [
        tg.button.text('❌ Close', 'closeWindow'),
        tg.button.text('🔡 HTML Mode', 'jss_game')
      ]

      user.setValue('json_game' + msg.chat.id, js)
      user.setValue('html_game' + msg.chat.id, pesan)

      return tg.sendMessageKeyboardInline(msg.chat.id, psn, keyb, 'html', true, msg.message_id)
    }

    if (msg.location) {
      var lat = msg.location.latitude;
      var long = msg.location.longitude;
      var address = msg.venue.address;
      var title = msg.venue.title;
      var pht = msg.location;
      var js = JSON.stringify(pht, null, 2);

      var psn = "<code>" + js + "</code>"
      var pesan = "ℹ️ Information"
      pesan += "\n\n📝 Title: <code>" + title + "</code>"
      pesan += "\n📬 Address: <code>" + address + "</code>"
      pesan += "\n🗂 Type: <code>location/venue</code>"
      pesan += "\n🌍 Latitude: <code>" + lat + "</code>"
      pesan += "\n └ Longitude: <code>" + long + "</code>"
      var keyb = []

      keyb[0] = [
        tg.button.url('🌏 Search Location', 'https://t.me/SearchLocationnBot')
      ]
      keyb[1] = [
        tg.button.text('❌ Close', 'closeWindow'),
        tg.button.text('🔡 HTML Mode', 'jss_loc')
      ]

      user.setValue('json_loc' + msg.chat.id, js)
      user.setValue('html_loc' + msg.chat.id, pesan)

      return tg.sendMessageKeyboardInline(msg.chat.id, psn, keyb, 'html', true, msg.message_id)
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

      var psn = "<code>" + js + "</code>"
      var pesan = "ℹ️ Information"
      pesan += "\n\n🆔 Poll ID: <code>" + poli + "</code>"
      pesan += "\n❔Question: <code>" + que + "</code>"
      pesan += "\n🗂 Type: <code>" + tp + "</code>"
      pesan += "\n🔡 Mutiple Answer: <code>" + pg + "</code>"
      pesan += "\n⛔️ Total Voter: <code>" + tot + "</code>"
      pesan += "\n✅ Correct Option ID: <code>" + cr + "</code>"
      pesan += "\n❌ Closed: <code>" + clo + "</code>"
      pesan += "\n🥷 Anonymous: <code>" + anon + "</code>"
      var keyb = []

      keyb[0] = [
        tg.button.text('❌ Close', 'closeWindow'),
        tg.button.text('🔡 HTML Mode', 'jss_poll')
      ]

      user.setValue('json_poll' + msg.chat.id, js)
      user.setValue('html_poll' + msg.chat.id, pesan)

      return tg.sendMessageKeyboardInline(msg.chat.id, psn, keyb, 'html', true, msg.message_id)
    }

    if (msg.video_note) {
      var fileid = msg.video_note.file_id;
      var unique = msg.video_note.file_unique_id;
      var dur = msg.video_note.duration;
      var size = msg.video_note.file_size;
      var lg = msg.video_note.length;
      var pht = msg.video_note;
      var js = JSON.stringify(pht, null, 2);

      var psn = "<code>" + js + "</code>"
      var pesan = "ℹ️ Information"
      pesan += "\n\n🆔 File ID: <code>" + fileid + "</code>"
      pesan += "\n🔰 Unique ID: <code>" + unique + "</code>"
      pesan += "\n🗃 Size: <code>" + size + " KB</code>"
      pesan += "\n❇️ Duration: <code>" + dur + "</code>"
      pesan += "\n🗂 Type: <code>video_note/mp4</code>"
      pesan += "\n📐 Length: <code>" + lg + "</code>"
      var keyb = []

      keyb[0] = [
        tg.button.text('❌ Close', 'closeWindow'),
        tg.button.text('🔡 HTML Mode', 'jss_note')
      ]

      user.setValue('json_note' + msg.chat.id, js)
      user.setValue('html_note' + msg.chat.id, pesan)

      return tg.sendMessageKeyboardInline(msg.chat.id, psn, keyb, 'html', true, msg.message_id)
    }

    // end of code
  }
}
