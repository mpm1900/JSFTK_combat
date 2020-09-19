import React from 'react'
import { noneg } from '../../util'
import { tProcessedCharacter } from '../../game/Character/type'
import { Theme } from '../../theme'
import { NumberChange } from '../NumberChange'

export interface HealthPropsT {
  character: tProcessedCharacter
}

export const Health = (props: HealthPropsT) => {
  const { character } = props
  const health = noneg(character.health)

  return (
    <div
      style={{
        position: 'relative',
        zIndex: 3,
      }}
    >
      <div
        style={{
          marginLeft: 44,
          fontSize: 56,
          height: 64,
          minWidth: 86,
          lineHeight: '72px',
          color: Theme.healthRedColor,
          fontFamily: 'New Rocker',
          display: 'flex',
          textAlign: 'center',
          textShadow: '1px 1px 3px black',
          justifyContent: 'center',
          boxShadow: 'inset 0px 0px 3px black',
        }}
      >
        <NumberChange value={health} />
      </div>
    </div>
  )
}
