require('dotenv').config();
module.handler = async (event, context, callback) => {
  const {identity, user} = context.clientContext;
  try {
    const bot = new Telegraf(process.env.telegramKey)
    await bot.telegram.sendMessage(process.env.notificationChatId, 'функция включилась ' + 
    JSON.stringify(user) + ' ' + JSON.stringify(identity));
    console.log('SUCSESS')
  } catch (err) {
    console.log('ERROR', JSON.stringify(err));
    console.log(JSON.stringify(process.env))
  }
  return { 
    statusCode : 200
  }
}