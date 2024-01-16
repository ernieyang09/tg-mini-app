import { useState } from "react"
import ConnectButton from "../../components/ConnectButton"

import "./styles.scss"

import View from "./View"
import Debug from "./Debug"
import TG from "./TG"

const Game = () => {
  const [view, setView] = useState("view")

  return (
    <div className='game'>
      <div className='header'>
        <div className='tab-wrap'>
          <div className='tab' onClick={() => setView("view")}>
            View
          </div>
          <div className='tab' onClick={() => setView("debug")}>
            Debug
          </div>
          <div className='tab' onClick={() => setView("tg")}>
            TG info
          </div>
        </div>
        <ConnectButton />
      </div>
      {view === "view" && <View />}
      {view === "debug" && <Debug />}
      {view === "tg" && <TG />}
    </div>
  )
}

export default Game
