import React, { useEffect } from 'react'
import { useModalContext } from '../contexts/ModalContext'
import { useCombatLogContext } from '../contexts/CombatLogContext'
import { useCombatContext } from '../contexts/CombatContext'
import { FlexContainer } from '../elements/flex'
import { Icon } from '../components/Icon'
import { Theme } from '../theme'
import { useGameStateContext } from '../contexts/GameStateContext'

export const useCombatStart = (delay: number = 1000) => {
  const { open, close } = useModalContext()
  const { clear } = useCombatLogContext()
  const { started } = useGameStateContext()
  const { enemyParty, start, reset } = useCombatContext()
  useEffect(() => {
    clear()
    if (started) {
      open(
        <div style={{ textAlign: 'center' }}>
          <h1 style={{ fontFamily: Theme.titleFont, userSelect: 'none' }}>
            Combat Start!
          </h1>
          <FlexContainer
            style={{
              justifyContent: 'space-around',
              marginTop: 32,
              marginBottom: 40,
            }}
          >
            {enemyParty.characters.map((c) => (
              <FlexContainer
                key={c.id}
                style={{
                  background: '#c27a5d',
                  border: '2px solid rgba(255,255,255,0.8)',
                  height: 60,
                  width: 60,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Icon
                  src={c.icon || ''}
                  shadow
                  fill={'white'}
                  size={60}
                  style={{ zIndex: 1, position: 'relative' }}
                />
              </FlexContainer>
            ))}
          </FlexContainer>
        </div>,
        {},
        true,
      )
      setTimeout(() => {
        close()
        start()
      }, 1500)
    }
    return () => {
      reset()
      clear()
    }
  }, [])
}
