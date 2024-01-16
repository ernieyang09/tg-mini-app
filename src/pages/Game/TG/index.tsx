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
    </div>
  )
}

export default TG
