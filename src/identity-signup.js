const {Telegraf} = require('telegraf')

const bot = new Telegraf(process.env.telegramKey).catch((error) => {
  console.log('no connect', error)
})

exports.handler = async (event, context, callback) => {
  try {
    await bot.telegram.sendMessage(process.env.notificationChatId, 'пользователь с email ' + 
    `${JSON.parse(event.body).user.email} зарегистрирован`
    );
    callback(null, {
      statusCode: 200,
      body: '{}',
    })
  } catch (err) {
    console.log('ERROR', JSON.stringify(err));
  }
}