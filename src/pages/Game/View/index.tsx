import { BaseTexture, Texture, Rectangle } from "pixi.js"
import { PixelateFilter } from "@pixi/filter-pixelate"
import { Stage, Container, AnimatedSprite } from "@pixi/react"
import { useMemo } from "react"
import spritepng from "../../../assets/spritesheet.png"

const ssheet = new BaseTexture(spritepng)

const w = 16

const yy = [...Array(8)].map(
  (_, i) => new Texture(ssheet, new Rectangle(i * w, 0, w, w))
)

const jj = [...Array(8)].map(
  (_, i) => new Texture(ssheet, new Rectangle(8 * w + i * w, 0, w, w))
)

const kk = [...Array(8)].map(
  (_, i) => new Texture(ssheet, new Rectangle(i * w, 15 * w, w, w))
)

const View = () => {
  const filter = useMemo(() => new PixelateFilter(4), [])

  return (
    <div style={{ flex: 1 }}>
      <Stage options={{ backgroundAlpha: 0 }}>
        <AnimatedSprite
          // anchor={0.5}
          textures={yy}
          isPlaying={true}
          initialFrame={0}
          animationSpeed={0.1}
          width={64}
          height={64}
          filters={[filter]}
        />

        <AnimatedSprite
          // anchor={0.5}
          x={64}
          y={0}
          textures={jj}
          isPlaying={true}
          initialFrame={0}
          animationSpeed={0.1}
          width={64}
          height={64}
          // filters={[filter]}
        />

        <AnimatedSprite
          // anchor={0.5}
          x={128}
          y={0}
          textures={kk}
          isPlaying={true}
          initialFrame={0}
          animationSpeed={0.1}
          width={64}
          height={64}
          // filters={[filter]}
        />

        <Container></Container>
      </Stage>
    </div>
  )
}

export default View
