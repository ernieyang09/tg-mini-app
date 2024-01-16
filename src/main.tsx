import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.tsx"
import "./index.css"
import WebApp from "@twa-dev/sdk"

WebApp.ready()

import { TonConnectUIProvider } from "@tonconnect/ui-react"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <TonConnectUIProvider manifestUrl='https://ernieyang09.github.io/tg-mini-app/manifest.json'>
      <App />
    </TonConnectUIProvider>
  </React.StrictMode>
)
