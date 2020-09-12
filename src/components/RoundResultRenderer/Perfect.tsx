import React from 'react'
import { animated, useSpring } from 'react-spring'
import { PLAYER_PARTY_ID } from '../../game/Party/constants'
import { Theme } from '../../theme'

export interface PerfectPropsT {
  show: boolean | undefined
  partyId: string
}
export const Perfect = (props: PerfectPropsT) => {
  const { show, partyId } = props
  const style = useSpring({ opacity: show ? 1 : 0 })
  return show ? (
    <animated.div
      style={{
        display: 'flex',
        justifyContent: 'center',
        marginTop: 16,
        fontSize: 42,
        color: partyId === PLAYER_PARTY_ID ? 'rgba(255,255,255,1)' : '#c95738',
        textShadow: '4px 4px 4px black',
        fontFamily: Theme.titleFont,
        ...style,
      }}
    >
      Perfect!
    </animated.div>
  ) : null
}
