const {Telegraf} = require('telegraf')

const bot = new Telegraf(process.env.telegramKey).catch((error) => {
  console.log('no connect', error)
})

exports.handler = async (event, context, callback) => {
  try {
    await bot.telegram.sendMessage(process.env.notificationChatId, 'reg функция включилась ' + 
    `\`${JSON.parse(event.body).user.email}\``
    );
    callback(null, {
      statusCode: 200,
      body: JSON.stringify(
        {app_metadata: {authorization: {roles: ["admin"]}}}
      )
    })
  } catch (err) {
    console.log('ERROR', JSON.stringify(err));
  }
}