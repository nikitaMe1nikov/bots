declare global {
  namespace NodeJS {
    interface ProcessEnv {
      BOT_TOKEN: string
      ENV: 'test' | 'dev' | 'prod'
    }
  }
}
