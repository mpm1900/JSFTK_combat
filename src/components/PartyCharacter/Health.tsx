import React, { useEffect, useState } from 'react'
import { Spring } from 'react-spring/renderprops'
import { noneg } from '../../util'
import { usePrevious } from '../../hooks/usePrevious'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { tProcessedCharacter } from '../../game/Character/type'

export interface HealthPropsT {
  character: tProcessedCharacter
}

export const Health = (props: HealthPropsT) => {
  const { character } = props
  const health = noneg(character.health)
  const previousHealth = usePrevious<number>(health) || 0
  const [storedHealth, setStoredHealth] = useState(0)

  useEffect(() => {
    setStoredHealth(health)
    // toast(`${character.name} -${storedHealth - health} HP`)
  }, [health])

  return (
    <div style={{ position: 'relative' }}>
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
          from={{ hp: previousHealth || 0 }}
          to={{ hp: health }}
          config={{ friction: 70, mass: 5, tension: 300, clamp: true }}
        >
          {(hpp) => <span>{Math.floor(hpp.hp)}</span>}
        </Spring>
      </span>
      <ToastContainer />
    </div>
  )
}
