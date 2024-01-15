import {
  useTonConnectModal,
  useTonWallet,
  useTonConnectUI,
} from "@tonconnect/ui-react"

import { TonConnectButton } from "@tonconnect/ui-react"

const ConnectButton = () => {
  const { open } = useTonConnectModal()

  const [tonConnectUI] = useTonConnectUI()
  const wallet = useTonWallet()

  return (
    <div style={{ display: "inline-flex", flexDirection: "column" }}>
      {!wallet ? (
        <button onClick={open}>Connect</button>
      ) : (
        <button
          onClick={() => {
            tonConnectUI.disconnect()
          }}
        >
          Connected
        </button>
      )}

      <TonConnectButton />
    </div>
  )
}

export default ConnectButton
