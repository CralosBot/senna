import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'

global.owner = [
  ['593961745744', 'Carlos', true],
  ['593961745744']
] //Numeros de owner 

global.mods = [''] 
global.prems = ['593961745744', '593961745744']
global.APIs = { // API Prefix
  // name: 'https://website' 
  nrtm: 'https://fg-nrtm.ddns.net',
  fgmods: 'https://api.fgmods.xyz'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.fgmods.xyz': 'DRLg5kY7' //--- 100 de límite diario --- Regístrese en https://api.fgmods.xyz/
}

// Sticker WM
global.packname = 'Mordecai┃ᴮᴼᵀ' 
global.author = '@Carlos' 

//--info FG
global.botName = 'Mordecai'
global.fgig = 'N/A' 
global.fgsc = 'https://github.com/CralosBot/senna' 
global.fgyt = 'https://www.youtube.com/@ChumoGH'
global.fgpyp = 'N/A'
global.fglog = 'https://chat.whatsapp.com/Kh8QYTDVC4oHlNYBPmFCkx' 

//--- Grupos WA
global.fgcanal = 'https://chat.whatsapp.com/Kh8QYTDVC4oHlNYBPmFCkx'
global.bgp = 'https://chat.whatsapp.com/Kh8QYTDVC4oHlNYBPmFCkx'
global.bgp2 = 'https://chat.whatsapp.com/Kh8QYTDVC4oHlNYBPmFCkx'
global.bgp3 = 'https://chat.whatsapp.com/Kh8QYTDVC4oHlNYBPmFCkx' //--GP NSFW

global.wait = '⌛ _Cargando..._\n*▬▬▬▭*'
global.rwait = '⌛'
global.dmoji = '🤭'
global.done = '✅'
global.error = '❌' 
global.xmoji = '🔥' 

global.multiplier = 69 
global.maxwarn = '2' // máxima advertencias

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
