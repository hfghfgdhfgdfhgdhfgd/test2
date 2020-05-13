const { Telegraf } = require('telegraf')

exports.handler = async (event , context ) => {
  const bot = new Telegraf(event.queryStringParameters.test)
  console.log('send message')
  bot.start((ctx) => ctx.reply('Welcome'))
  bot.help((ctx) => ctx.reply('Send me a sticker'))
  bot.on('sticker', (ctx) => ctx.reply('👍'))
  bot.on('message', (ctx) => ctx.reply(ctx.message))
  bot.hears('hi', (ctx) => ctx.reply('Hey there'))
  bot.launch()
  return { 
    statusCode : 200 , body : "We are now split testing!"
  }
}
