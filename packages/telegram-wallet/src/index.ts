import { bot } from './env'
import './start'
import './help'
import './settings'

void bot.launch()

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))

// send webhook url to telegram api
// curl -F "url=https://my-telegram-bot-server.herokuapp.com/new-message" https://api.telegram.org/bot5372263544:.../setWebhook
