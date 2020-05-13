const Telegraf = require('telegraf')
const token = '1180083258:AAFcMhA_E2x-R_4euE-uNUs7-YEKokES04Q'

const bot = new Telegraf.Telegraf(token)
  

exports.handler = async (event , context ) => {
  try {
    console.log('user connect');
    bot.start((ctx) => ctx.reply('Welcome'))
    bot.help((ctx) => ctx.reply('Send me a sticker'))
    bot.on('sticker', (ctx) => ctx.reply('👍'))
    bot.on('message', (ctx) => ctx.reply(ctx.message))
    bot.hears('hi', (ctx) => ctx.reply('Hey there'))
    bot.launch()
  } catch (err) {
    console.log('ERROR:' + err);
  }
  return { 
    statusCode : 200 , body : "We are now split testing!"
  }
}
