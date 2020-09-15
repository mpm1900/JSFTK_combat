import React, { useEffect, useState } from 'react'
import { Spring } from 'react-spring/renderprops'
import { noneg } from '../../util'
import { usePrevious } from '../../hooks/usePrevious'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { tProcessedCharacter } from '../../game/Character/type'
import { Theme } from '../../theme'

export interface HealthPropsT {
  character: tProcessedCharacter
}

export const Health = (props: HealthPropsT) => {
  const { character } = props
  const health = noneg(character.health)
  const [storedHealth, setStoredHealth] = useState(0)

  useEffect(() => {
    setStoredHealth(health)
  }, [health])

  return (
    <div style={{ position: 'relative', zIndex: 3 }}>
      <span
        style={{
          padding: '4px 0',
          paddingLeft: 44,
          fontSize: 56,
          height: 56,
          minWidth: 86,
          lineHeight: '64px',
          color: Theme.healthRedColor,
          fontFamily: 'New Rocker',
          display: 'flex',
          textAlign: 'center',
          textShadow: '1px 1px 3px black',
          justifyContent: 'center',
        }}
      >
        <Spring
          from={{ hp: storedHealth || 0 }}
          to={{ hp: health }}
          config={{ friction: 70, mass: 5, tension: 300, clamp: true }}
        >
          {(hpp) => <span style={{}}>{Math.floor(hpp.hp)}</span>}
        </Spring>
      </span>
      <ToastContainer />
    </div>
  )
}
