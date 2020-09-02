import React, { useState, useEffect } from 'react'
import { ProcessedCharacterT } from '../../types'
import { FlexContainer, FullContainer } from '../../elements/flex'
import { Gauge } from '../Gauge'
import { noneg } from '../../util'
import { BoxContainer } from '../../elements/box'
import { Monodiv } from '../../elements/monospace'
import { styled } from 'styletron-react'

const ResourceE = styled(Monodiv, () => ({
  height: 15,
  fontSize: '12px',
  fontWeight: 'bolder',
  padding: '0px 4px',
  lineHeight: '15px',
  flex: 1,
  textAlign: 'center',
  background: '#111',
}))

export interface EnemyCharacterPropsT {
  character: ProcessedCharacterT
  activeCharacter: ProcessedCharacterT
  hoverable?: boolean
  selected?: boolean
  isHovering?: boolean
  onClick?: () => void
}
const Wrapper = styled('div', (props: any) => {
  const { $selected, $active, $hoverable, $isHovering } = props
  const hoverable = $hoverable && !$selected
  return {
    margin: 10,
    boxShadow: $isHovering
      ? '0px 0px 20px black'
      : $selected
      ? '0px 0px 10px black'
      : $active
      ? '0px 0px 20px white'
      : 'none',
    ':hover': {
      boxShadow: hoverable ? '0px 0px 20px black' : undefined,
    },
    transition: 'all 0.1s',
  }
})
export const EnemyCharacter = (props: EnemyCharacterPropsT) => {
  const {
    character,
    activeCharacter,
    hoverable,
    selected,
    isHovering,
    onClick,
  } = props
  const health = character.health - character.stats.healthOffset
  return (
    <div
      onClick={() => (onClick && !character.dead ? onClick() : null)}
      style={{
        borderWidth: 2,
        width: 380,
        cursor: onClick ? 'pointer' : 'default',
        color: 'rgba(255,255,255,0.8)',
        opacity: character.dead ? 0.5 : 1,
      }}
    >
      <FlexContainer style={{ alignItems: 'center' }}>
        <FlexContainer style={{ border: '1px solid black' }}>
          <Wrapper
            $hoverable={hoverable && !character.dead}
            $active={character.id === activeCharacter.id}
            $selected={selected}
            $isHovering={isHovering}
          >
            <img
              alt='profile'
              height='94'
              width='94'
              src={`https://picsum.photos/seed/${character.name}/94/94`}
              style={{
                height: 94,
                width: 94,
              }}
            />
          </Wrapper>
        </FlexContainer>
        <FlexContainer $full $direction='column'>
          <FlexContainer
            style={{
              padding: '2px 4px',
            }}
          >
            <span
              style={{
                textAlign: 'right',
                fontWeight: 'bold',
                lineHeight: '12px',
                textShadow: '1px 1px 10px black',
                width: '100%',
              }}
            >
              {character.name}
            </span>
          </FlexContainer>

          <Gauge
            name='Health'
            color='#8f4e4d'
            max={character.health}
            value={noneg(health)}
            height={20}
          >
            {noneg(health)}/{character.health}
          </Gauge>
        </FlexContainer>
        <span
          style={{
            fontWeight: 'bolder',
            fontSize: 52,
            height: 52,
            lineHeight: '52px',
            textShadow: '1px 1px 10px black',
            color: '#b55553',
          }}
        >
          {health > 0 ? health : 0}
        </span>
      </FlexContainer>
    </div>
  )
}
