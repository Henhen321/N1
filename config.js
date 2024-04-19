global.owner = ['6285866034212']  
global.mods = ['6285866034212'] 
global.prems = ['6285866034212']
global.nameowner = 'HENs'
global.numberowner = '6285866034212' 
global.mail = 'drazathenhen@gmail.com ' 
global.gc = 'https://whatsapp.com/channel/0029VaEeSo61XquWVHpWmp0w'
global.instagram = 'https://instagram.com/henhen.drajat'
global.wm = '®HENs'
global.wait = '_*Tunggu sedang di proses...*_'
global.eror = '_*Server Error*_'
global.stiker_wait = '*⫹⫺ Stiker sedang dibuat...*'
global.packname = '© Sticker'
global.author = 'Created By HENs ID'
global.maxwarn = '2' // Peringatan maksimum

//INI WAJIB DI ISI!//
global.btc = '7TpjAsAR' 
//Daftar terlebih dahulu https://api.botcahx.live

//INI OPTIONAL BOLEH DI ISI BOLEH JUGA ENGGA//
global.lann = 'Henhen'
//Daftar https://api.betabotz.org 

global.APIs = {   
  btc: 'https://api.botcahx.live'
}
global.APIKeys = { 
  'https://api.botcahx.live': 'Aliaputri' 
}

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})