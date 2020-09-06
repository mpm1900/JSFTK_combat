import React from 'react'
import { ProcessedCharacterT } from '../../types'
import { Spring } from 'react-spring/renderprops'
import { noneg } from '../../util'
import { usePrevious } from '../../hooks/usePrevious'

export interface HealthPropsT {
  character: ProcessedCharacterT
}

export const Health = (props: HealthPropsT) => {
  const { character } = props
  const health = noneg(character.health - character.stats.healthOffset)
  const previousHealth = usePrevious<number>(health)
  return (
    <span
      style={{
        fontWeight: 'bolder',
        padding: 4,
        fontSize: 42,
        height: 62,
        lineHeight: '70px',
        color: '#b55553',
      }}
    >
      <Spring
        from={{ hp: previousHealth || health }}
        to={{ hp: health }}
        config={{ duration: 800 }}
      >
        {(hpp) => <span>{Math.floor(hpp.hp)}</span>}
      </Spring>
    </span>
  )
}