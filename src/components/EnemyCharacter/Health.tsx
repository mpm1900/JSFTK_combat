import React, { useState, useEffect } from 'react'
import { tProcessedCharacter } from '../../game/Character/type'
import { animated, Spring } from 'react-spring/renderprops'
import { noneg } from '../../util'
import { usePlayerCharacterNotifications } from '../../hooks/usePlayerCharacterNotifications'
import { Theme } from '../../theme'
import { NumberChange } from '../NumberChange'

export interface HealthPropsT {
  character: tProcessedCharacter
  push: (content: JSX.Element, type?: string) => void
  shake?: () => void
}
export const Health = (props: HealthPropsT) => {
  const { character, push, shake } = props
  const health = noneg(character.health)
  usePlayerCharacterNotifications(character, push, shake || (() => {}))

  return (
    <animated.div
      style={{
        fontSize: 64,
        height: 64,
        width: 60,
        textShadow: '1px 1px 10px black',
        color: Theme.healthRedColor,
        fontFamily: 'New Rocker',
        userSelect: 'none',
      }}
    >
      <NumberChange value={health} />
    </animated.div>
  )
}
