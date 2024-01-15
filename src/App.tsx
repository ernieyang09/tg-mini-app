import { useEffect, useState } from "react"
import { useTonConnectUI, useTonWallet } from "@tonconnect/ui-react"

import "./App.css"
import Login from "./pages/Login"
import Game from "./pages/Game"

function App() {
  const [loading, setLoading] = useState(true)
  const [tonConnectUI] = useTonConnectUI()
  const wallet = useTonWallet()

  useEffect(() => {
    tonConnectUI.connectionRestored.then(() => setLoading(false))
  }, [tonConnectUI.connectionRestored])

  return loading ? <div>loading</div> : wallet ? <Game /> : <Login />
}

export default App
