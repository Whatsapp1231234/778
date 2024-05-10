import fetch from 'node-fetch';




const handler = async (m, {conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems}) => {
  const datas = global
  const idioma = datas.db.data.users[m.sender].language
  const _translate = JSON.parse(fs.readFileSync(`./language/${idioma}.json`))
  const tradutor = _translate.plugins.menu_audios

  try {
    const pp = imagen4;
    // let vn = './media/menu.mp3'
    const img = './Menu2.jpg';
    const d = new Date(new Date + 3600000);
    const locale = 'es';
    const week = d.toLocaleDateString(locale, {weekday: 'long'});
    const date = d.toLocaleDateString(locale, {day: 'numeric', month: 'long', year: 'numeric'});
    const _uptime = process.uptime() * 1000;
    const uptime = clockString(_uptime);
    const user = global.db.data.users[m.sender];
    const {money, joincount} = global.db.data.users[m.sender];
    const {exp, limit, level, role} = global.db.data.users[m.sender];
    const rtotalreg = Object.values(global.db.data.users).filter((user) => user.registered == true).length;
    const more = String.fromCharCode(8206);
    const readMore = more.repeat(850);
    const taguser = '@' + m.sender.split('@s.whatsapp.net')[0];
    const doc = ['pdf', 'zip', 'vnd.openxmlformats-officedocument.presentationml.presentation', 'vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'vnd.openxmlformats-officedocument.wordprocessingml.document'];
    const document = doc[Math.floor(Math.random() * doc.length)];
    const str = `╭═══〘 ✯✯✯✯✯✯✯✯✯ 〙══╮
║    ◉— *Хищник* —◉
║≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡║
║➤ *Привет, ${taguser}*
║≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡║
╰═══╡✯✯✯✯✯✯✯✯✯╞═══╯



┏━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
┃ *<ღ꧁ *ГОЛОСОВЫЕ* ꧂ღ>*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ *- ${_translate.plugins.menu_audios.texto1}*
┣ >>>>>>>>>>>>>>>>>>>>>>
┣ 🔊 Красавчик
┣ 🔊 Где все
┣ 🔊 Что случилось
┣ 🔊 Дай
┣ 🔊 Группа
┣ 🔊 Как дела
┣ 🔊 Что нового
┣ 🔊 Что делаешь
┣ 🔊 Пока
┣ 🔊 До свидания
┣ 🔊 Псих
┣ 🔊 Идиот
┣ 🔊 Совет
┣ 🔊 Жопа
┣ 🔊 Как ты
┣ 🔊 Дай
┣ 🔊 Друг
┣ 🔊 Как жизнь
┣ 🔊 Девушка/и
┣ 🔊 Чего
┣ 🔊 Ух какая
┣ 🔊 Страшная
┣ 🔊 Мечта
┣ 🔊 Молчуны
┣ 🔊 Цель
┣ 🔊 Слышь ты
┣ 🔊 Кушаю
┣ 🔊 От души
┣ 🔊 😘
┣ 🔊 Надоел
┣ 🔊 Отвали
┣ 🔊 Нет настроения
┣ 🔊 Молодец
┣ 🔊 Споки ноки 
┣ 🔊 Заебал
┣ 🔊 Врун
┣ 🔊 Пиздабол
┣ 🔊 Правила
┣ 🔊 Здарова
┣ 🔊 Кто ты
┣ 🔊 Сука
┣ 🔊 Секс
┣ 🔊 Пошел ты
┣ 🔊 Хи хи
┣ 🔊 Помогите
┣ 🔊 До завтра
┣ 🔊 Красотка
┣ 🔊 Блять
┣ 🔊 Тупой/ая
┣ 🔊 Ты кто
┣ 🔊 Удали/ю
┣ 🔊 Понедельник
┣ 🔊 😡
┣ 🔊 😭
┣ 🔊 Кто звал
┣ 🔊 Пришел
┣ 🔊 Я тут
┣ 🔊 Дурак
┣ 🔊 Козел
┣ 🔊 Лох
┣ 🔊 Сиськи
┣ 🔊 Сюрприз
┣ 🔊 Чмо
┗━━━━━━━━━━━━━━━━┛`.trim();
    if (m.isGroup) {
      // await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      conn.sendMessage(m.chat, {image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: fkontak2});
    } else {
      // await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      conn.sendMessage(m.chat, {image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: fkontak2});
    }
  } catch {
    conn.reply(m.chat, tradutor.texto2, m);
  }
};
handler.command = /^(меню2|audios|menú2|memu2|menuaudio|menuaudios|memuaudios|memuaudio|audios|keyaudio|keyaudios)$/i;
handler.exp = 50;
handler.fail = null;
export default handler;
function clockString(ms) {
  const h = isNaN(ms) ? '--' : Math.floor(ms / 3600000);
  const m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
  const s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
  return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(':');
}
