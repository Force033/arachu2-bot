//Ini untuk setting Bot
//Untuk gambar background menu ada -
//Dalam file menu 
//untuk lainya saran jangan di ubah bre nanti eror
//misal gua lupa nambah atau typo benerin aja bre gua pusing njir awokawok 

//Global Owner//
global.owner = ['6285771798036']  // isi jika perlu
global.mods = ['6285771798036']   // isi jika perlu
global.prems = ['6285771798036']  // isi jika perlu

//Nomor Owner & payment//
global.nameowner = 'AndiiForce' // isi nama kalian bebas
global.numberowner = '62885771798036' // isi ini untuk mengendalikan bot
global.dana = '628571798036' // isi dengan nomor dana yg kamu punya 
global.pulsa = '62' // isi dengan nomor pulsa hp kalian
global.gopay = '6285771798036'

//Nama Bot & Grouplink//
global.namebot = 'FORCE-BOT'
global.gc = 'https://chat.whatsapp.com/'
global.web = 'https://github.com/' //ubah jadi website lu, bisa link ig, link github, link yt, klo link gc ntr beda tampilan lagi. 
global.instagram = 'https://instagram.com/andii_force'

//Tampilan wm Bot dan pesan bot//
global.lolkey = 'rey2k22' //biar mudah ngegantinya semisal apikeynya expired:v
global.zenzkey = 'BagasPrdn' //ganti jadi apikey lu kalau expired
global.wm = '© R-FORCE-MD'
global.watermark = wm
global.wm2 = '⫹⫺ R-FORCE-MD'
global.wm3 = '© R-FORCE-MD'
global.wm4 = '© 2021/2022'
global.fla = 'https://botcahx.ddns.net/api/photooxy/harry-potter?text='
global.wait = '_*Tunggu sedang di proses...*_'
global.eror = '_*Server Error*_'
global.benar = 'Benar ✅\n'
global.salah = 'Salah ❌\n'
global.stiker_wait = '*⫹⫺ Stiker sedang dibuat...*'
global.packname = 'Made with'
global.author = 'Bot WhatsApp\nR-AndiiForce-MD'

//Apikey Setting//
global.APIs = { // API Prefix
  // name: 'https://website'
  amel: 'https://melcanz.com',
  bx: 'https://bx-hunter.herokuapp.com',
  dhnjing: 'https://dhnjing.xyz',
  hardianto: 'https://hardianto-chan.herokuapp.com',
  jonaz: 'https://jonaz-api-v2.herokuapp.com',
  neoxr: 'https://api.neoxr.my.id',
  nrtm: 'https://nurutomo.herokuapp.com',
  xteam: 'https://api.xteam.xyz',
  nzcha: 'http://nzcha-apii.herokuapp.com',
  bg: 'http://bochil.ddns.net',
  fdci: 'https://api.fdci.se',
  dzx: 'https://api.dhamzxploit.my.id',
  bsbt: 'https://bsbt-api-rest.herokuapp.com',
  zahir: 'https://zahirr-web.herokuapp.com',
  zeks: 'https://api.zeks.xyz',
  zekais: 'http://zekais.com',
  hardianto: 'https://hardianto-chan.herokuapp.com',
  pencarikode: 'https://pencarikode.xyz', 
  erdwepe: 'https://erdwpe-api.herokuapp.com',
  lolhuman: 'https://api.lolhuman.xyz',
  tio: 'https://botcahx.ddns.net', 
  LeysCoder: 'https://leyscoders-api.herokuapp.com',
  rey: 'https://sekha.me',
  males: 'https://malesin.xyz'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://melcanz.com': 'elaina',
  'https://api.neoxr.my.id': 'Register',
  'https://sekha.me': 'apirey',
  'https://api.xteam.xyz': 'd37372311698ed1d',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://bsbt-api-rest.herokuapp.com': 'benniismael',
  'https://api.zeks.xyz': 'apivinz',
  'https://hardianto-chan.herokuapp.com': 'hardianto',
  'https://pencarikode.xyz': 'pais', 
  'https://leyscoders-api.herokuapp.com': 'dappakntlll',
  'https://zekais.com': 'apikeymu',
  'https://api.lolhuman.xyz': 'Deffbotz',
}

//Setting Rpg//
global.multiplier = 69 // The higher, The harder levelup
global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      exp: '✉️',
      money: '💵',
      potion: '🥤',
      diamond: '💎',
      common: '📦',
      uncommon: '🎁',
      mythic: '🗳️',
      legendary: '🗃️',
      pet: '🎁',
      sampah: '🗑',
      armor: '🥼',
      sword: '⚔️',
      kayu: '🪵',
      batu: '🪨',
      string: '🕸️',
      kuda: '🐎',
      kucing: '🐈' ,
      anjing: '🐕',
      petFood: '🍖',
      gold: '👑',
      emerald: '💚'
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
}

//Jangan merubah bagian ini! //
let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
