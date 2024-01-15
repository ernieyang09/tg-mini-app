import { useTonConnectUI } from "@tonconnect/ui-react"
import { address, beginCell, toNano } from "@ton/core"

import { storeBuy } from "../../../contracts/tact_Inshrimption"

const examplePayload = `{"p":"pzc-20","op":"mint","amt":"300"}`

const buildInscriptionPoc = (comment: string) =>
  beginCell().storeUint(0, 32).storeStringTail(comment).endCell()

const buyPoc = (addr: string) =>
  beginCell()
    .store(
      storeBuy({
        $$type: "Buy",
        seller: address(addr),
        amount: toNano("2"),
        price: toNano("0.5"),
        expiry: BigInt(123),
      })
    )
    .endCell()

const Debug = () => {
  const [tonConnectUi] = useTonConnectUI()

  return (
    <div>
      <div>
        <div>Send inscription</div>
        <div>{examplePayload}</div>
        <button
          onClick={() => {
            tonConnectUi.sendTransaction({
              validUntil: Math.floor(Date.now() / 1000) + 600,
              messages: [
                {
                  address: "EQA3poYSZxqqei9fvfNkdRnM5U5Phc8UwCIXXUQdxYg59o6i",
                  amount: "20000000",
                  payload: buildInscriptionPoc(examplePayload)
                    .toBoc()
                    .toString("base64"),
                },
              ],
            })
          }}
        >
          Send
        </button>
      </div>
      <div>
        <div>Buy buy</div>
        <button
          onClick={() => {
            tonConnectUi.sendTransaction({
              validUntil: Math.floor(Date.now() / 1000) + 600,
              messages: [
                {
                  address: "EQA3poYSZxqqei9fvfNkdRnM5U5Phc8UwCIXXUQdxYg59o6i",
                  amount: "700000000",
                  payload: buyPoc(
                    "0QCaKr_2QRjvFy4IwXAx6czp5o4tNfMiVQ_gWdYH_TZ6uX9K"
                  )
                    .toBoc()
                    .toString("base64"),
                },
              ],
            })
          }}
        >
          Send
        </button>
      </div>
    </div>
  )
}

export default Debug
