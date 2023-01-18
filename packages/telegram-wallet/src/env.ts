import { Telegraf } from 'telegraf'

if (!process.env.BOT_TOKEN)
  throw new Error(`not found key in process.env.BOT_TOKEN=${process.env.BOT_TOKEN}`)

export const bot = new Telegraf(process.env.BOT_TOKEN)
