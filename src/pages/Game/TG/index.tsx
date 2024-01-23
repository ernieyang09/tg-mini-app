import WebApp from "@twa-dev/sdk"

const TG = () => {
  return (
    <div>
      <div
        style={{
          textAlign: "justify",
        }}
      >
        <pre>{JSON.stringify(WebApp.initDataUnsafe, null, 2)}</pre>
      </div>
      <a
        href='https://core.telegram.org/bots/webapps#validating-data-received-via-the-mini-app'
        target='_blank'
      >
        doc
      </a>
      <div>
        <a
          onClick={() => {
            WebApp.openTelegramLink(
              "https://t.me/wallet?startattach=send-assetCurrency__&choose=users"
            )
          }}
        >
          open wallet transfer
        </a>
      </div>
      <div>
        <a
          onClick={() => {
            WebApp.openTelegramLink(
              "https://t.me/share/url?url=https://www.google.com&text=Oi%20fren%2C%20let%27s%20click%20together%20%F0%9F%A4%99%0A%0A%F0%9F%8E%81%2010k%20notcoins%20for%20you%20and%20me%0A%F0%9F%8E%81%F0%9F%8E%81%F0%9F%8E%81%20100k%20if%20you%20have%20tg%20prem"
            )
          }}
        >
          Just Share button
        </a>
      </div>
      <div>
        <a
          onClick={() => {
            WebApp.openTelegramLink("https://t.me/ErnieTestBot?start=test")
            setTimeout(() => {
              WebApp.close()
            }, 1)
          }}
        >
          Need Server to reply bot
        </a>
      </div>
    </div>
  )
}

export default TG
