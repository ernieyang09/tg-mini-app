# TG-mini-app

## Create Bot

1. Chat with BotFather and [create a bot](https://docs.ton.org/develop/dapps/telegram-apps/step-by-step-guide#1-start-a-chat-with-botfather)

2. Get the token from the BotFather, it will use for validate user.

3. Develop and deploy your bot

To know if users come from telegram app, we copy from notcoin logic

```javascript
import WebApp from "@twa-dev/sdk"
const isMiniApp = ["android", "android_x", "ios"].includes(WebApp.platform)
```

When you enter the mini-app page, it will bring hash data = #tgWebAppData=.....

This is used for user validation.
