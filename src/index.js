const token = '1180083258:AAFcMhA_E2x-R_4euE-uNUs7-YEKokES04Q'
const Telegraf = require('telegraf')
const Extra = require('telegraf/extra')
const Markup = require('telegraf/markup')

const keyboard = Markup.inlineKeyboard([
  Markup.urlButton('❤️', 'http://telegraf.js.org'),
  Markup.callbackButton('Delete', 'delete')
])

const bot = new Telegraf(token)
bot.start((ctx) => ctx.reply('Hello'))
bot.help((ctx) => ctx.reply('Help message'))
bot.on('message', (ctx) => ctx.telegram.sendCopy(ctx.chat.id, ctx.message, Extra.markup(keyboard)))
bot.action('delete', ({ deleteMessage }) => deleteMessage())
bot.launch()

exports.handler = async (event , context ) => {
  /*try {
    console.log('user connect');
    bot.start((ctx) => ctx.reply('Welcome'))
    bot.help((ctx) => ctx.reply('Send me a sticker'))
    bot.on('sticker', (ctx) => ctx.reply('👍'))
    bot.on('message', (ctx) => ctx.reply(ctx.message))
    bot.hears('hi', (ctx) => ctx.reply('Hey there'))
    bot.launch()
  } catch (err) {
    console.log('ERROR:' + err);
  }*/
  return { 
    statusCode : 200 , body : "We are now split testing!"
  }
}
