const token = '1180083258:AAFcMhA_E2x-R_4euE-uNUs7-YEKokES04Q'
const {Telegraf} = require('telegraf')
const Extra = require('telegraf/extra')
const Markup = require('telegraf/markup')

const keyboard = Markup.inlineKeyboard([
  Markup.urlButton('❤️', 'http://telegraf.js.org'),
  Markup.callbackButton('Delete', 'delete')
]) 
// https://api.telegram.org/bot1180083258:AAFcMhA_E2x-R_4euE-uNUs7-YEKokES04Q/sendMessage?chat_id=@testBot4359348534&text=Hello%20World



exports.handler = async (event , context ) => {
  try {
    const bot = new Telegraf(token)
    bot.telegram.sendMessage('@test3242324323', 'функция включилась');
    console.log('SUCSESS')
  } catch (err) {
    console.log('ERROR');
  }
  return { 
    statusCode : 200 , body : ("We are now split testing!" + token)
  }
}
