const {Telegraf} = require('telegraf')

exports.handler = async (event, context, callback) => {
  console.log("Я ВЫЗВЛАСЬ")
  const {identity, user} = context.clientContext;
  try {
    const bot = new Telegraf(process.env.telegramKey)
    await bot.telegram.sendMessage(process.env.notificationChatId, 'функция включилась ' + 
    JSON.stringify(user) + ' ' + JSON.stringify(identity));
    callback(null, {
      statusCode: 200,
      body: JSON.stringify(
        {app_metadata: {authorization: {roles: ["admin"]}}}
      )
    })
    console.log('SUCSESS')
  } catch (err) {
    console.log('ERROR', JSON.stringify(err));
  }
  return {
    statusCode: 200
  }
}