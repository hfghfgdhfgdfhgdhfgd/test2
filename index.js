  const Telegraf = require('telegraf')
  const token = '1180083258:AAHQDis2A4_OGsdjVBYiXTvhoPNkUVhYJwk'

  const bot = new Telegraf.Telegraf(token)
  bot.start((ctx) => ctx.reply('Welcome'))
  bot.help((ctx) => ctx.reply('Send me a sticker'))
  bot.on('sticker', (ctx) => ctx.reply('👍'))
  bot.on('message', (ctx) => ctx.reply(ctx.message))
  bot.hears('hi', (ctx) => ctx.reply('Hey there'))
  bot.launch()

exports.handler = async (event , context ) => {
  return { 
    statusCode : 200 , body : "We are now split testing!"
  }
}
