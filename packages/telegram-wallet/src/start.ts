import { bot } from './env'

bot.start(async ctx => {
  console.dir(ctx.update)
  await ctx.reply(`Hello ${ctx.update.message.from.first_name}!`)
})
