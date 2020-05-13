const {Telegraf} = require('telegraf')

exports.handler = async (event, context, callback) => {
  console.log("Я ВЫЗВЛАСЬ")
  try {
    const bot = new Telegraf(process.env.telegramKey)
    const {identity, user} = context.clientContext;
    await bot.telegram.sendMessage(process.env.notificationChatId, 'reg функция включилась ' + 
    `\`${JSON.stringify(event.body)}\``
    );
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
}