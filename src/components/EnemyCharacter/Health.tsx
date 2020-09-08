import React, { useState, useEffect } from 'react'
import { tProcessedCharacter } from '../../game/Character/type'
import { Spring } from 'react-spring/renderprops'
import { noneg } from '../../util'

export interface HealthPropsT {
  character: tProcessedCharacter
  push: (content: JSX.Element, type?: string) => void
}
export const Health = (props: HealthPropsT) => {
  const { character, push } = props
  const health = noneg(character.health)
  const [previousHealth, setPreviousHealth] = useState(character.health)
  useEffect(() => {
    const diff = previousHealth - health
    if (diff > 0) {
      push(<span>- {diff} HP</span>)
    }
    if (diff < 0) {
      push(<span>+ {Math.abs(diff)} HP</span>, 'good')
    }
  }, [health])
  return (
    <span
      style={{
        fontSize: 52,
        height: 52,
        width: 60,
        textShadow: '1px 1px 10px black',
        color: '#b55553',
        fontFamily: 'Bangers',
      }}
    >
      <Spring
        from={{ hp: previousHealth || 0 }}
        to={{ hp: health }}
        config={{ friction: 70, mass: 5, tension: 300, clamp: true }}
      >
        {(hpp) => <span>{Math.floor(hpp.hp)}</span>}
      </Spring>
    </span>
  )
}
