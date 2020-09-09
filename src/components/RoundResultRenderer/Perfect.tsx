import React from 'react'
import { animated, useSpring } from 'react-spring'
import { PLAYER_PARTY_ID } from '../../game/Party/constants'

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
        marginTop: 30,
        fontSize: 32,
        color:
          partyId === PLAYER_PARTY_ID ? 'rgba(255,255,255,0.8)' : '#c95738',
        textShadow: '4px 4px 4px black',
        fontFamily: 'Bangers',
        ...style,
      }}
    >
      Perfect!
    </animated.div>
  ) : null
}
