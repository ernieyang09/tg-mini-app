import { useEffect, useState } from "react"
import { useTonConnectUI, useTonWallet } from "@tonconnect/ui-react"

import "./App.css"
import Login from "./pages/Login"
import Game from "./pages/Game"
import WebApp from "@twa-dev/sdk"

function App() {
  const [loading, setLoading] = useState(true)
  const [tonConnectUI] = useTonConnectUI()
  const wallet = useTonWallet()
  const isMiniApp = ["android", "android_x", "ios"].includes(WebApp.platform)
  const initData = WebApp.initData

  const display = isMiniApp && initData

  useEffect(() => {
    tonConnectUI.connectionRestored.then(() => setLoading(false))
  }, [tonConnectUI.connectionRestored])

  return loading ? (
    <div>loading</div>
  ) : display ? (
    wallet ? (
      <Game />
    ) : (
      <Login />
    )
  ) : (
    <img src='pu-ton.png' />
  )
}

export default App
