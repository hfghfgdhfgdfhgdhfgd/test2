const {Telegraf} = require('telegraf')
// https://api.telegram.org/bot1180083258:AAFcMhA_E2x-R_4euE-uNUs7-YEKokES04Q/sendMessage?chat_id=@testBot4359348534&text=Hello%20World
exports.handler = async (event , context ) => {
  try {
    const bot = new Telegraf(process.env.telegramKey)
    await bot.telegram.sendMessage(process.env.notificationChatId, 'функция включилась');
    console.log('SUCSESS')
  } catch (err) {
    console.log('ERROR', JSON.stringify(err));
    console.log(JSON.stringify(process.env.notificationChatId, process.env.telegramKey, 'test', process.env.telegramKey));
  }
  return { 
    statusCode : 200 , body : ("We are now split testing!")
  }
}
