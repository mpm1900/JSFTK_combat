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

export interface PartyCharacterProps {
  character: ProcessedCharacterT
  activeCharacter: ProcessedCharacterT
  hoverable?: boolean
  selected?: boolean
  onClick?: () => void
}
const Wrapper = styled('div', (props: any) => {
  const { $selected, $active, $hoverable } = props
  const hoverable = $hoverable && !$selected
  return {
    ':hover': {
      boxShadow: hoverable ? '0px 0px 10px yellow' : undefined,
    },
    margin: 10,
    boxShadow: $selected
      ? '0px 0px 20px yellow'
      : $active
      ? '0px 0px 20px white'
      : 'none',
  }
})
export const PartyCharacter = (props: PartyCharacterProps) => {
  const { character, activeCharacter, hoverable, selected, onClick } = props
  const health = character.health - character.stats.healthOffset
  return (
    <Wrapper
      $hoverable={hoverable}
      $active={character.id === activeCharacter.id}
      $selected={selected}
    >
      <BoxContainer
        onClick={() => (onClick ? onClick() : null)}
        style={{
          borderWidth: 2,
          cursor: onClick ? 'pointer' : 'default',
        }}
        substyle={{ padding: 0, width: 420 }}
      >
        <FlexContainer style={{ border: '2px solid black' }}>
          <FlexContainer style={{ borderRight: '2px solid black' }}>
            <img
              alt='profile'
              src={`https://picsum.photos/seed/${character.name}/60/60`}
              style={{
                height: 115,
                width: 115,
              }}
            />
          </FlexContainer>
          <FlexContainer $full $direction='column'>
            <FlexContainer
              style={{
                padding: '2px 4px',
                paddingLeft: 8,
                background: 'rgba(255,255,255,0.2)',
                borderBottom: '1px solid rgba(255,255,255,0.4)',
              }}
            >
              <span
                style={{
                  fontWeight: 'bolder',
                  textShadow: '0px 0px 2px black',
                }}
              >
                {character.name}
              </span>
            </FlexContainer>
            <FlexContainer>
              <span
                style={{
                  fontWeight: 'bolder',
                  padding: '2px 8px',
                  fontSize: 42,
                  height: 42,
                  lineHeight: '42px',
                }}
              >
                {health > 0 ? health : 'Dead'}
              </span>
            </FlexContainer>
            <FullContainer />
            <Gauge
              name='Health'
              color='#8f4e4d'
              max={character.health}
              value={noneg(health)}
              height={12}
            >
              {noneg(health)}/{character.health}
            </Gauge>
            <Gauge
              name='XP'
              color='#5e8575'
              max={3300}
              value={1256}
              height={12}
            >
              1256/3300
            </Gauge>
            <FlexContainer>
              <ResourceE>S-{character.stats.strength}</ResourceE>
              <ResourceE>V-{character.stats.vigor}</ResourceE>
              <ResourceE>I-{character.stats.intelligence}</ResourceE>
              <ResourceE>P-{character.stats.perception}</ResourceE>
              <ResourceE>T-{character.stats.talent}</ResourceE>
              <ResourceE>A-{character.stats.agility}</ResourceE>
              <ResourceE>L-{character.stats.luck}</ResourceE>
            </FlexContainer>
          </FlexContainer>
        </FlexContainer>
      </BoxContainer>
    </Wrapper>
  )
}
