import React, { useState, useEffect } from 'react'
import { ProcessedCharacterT, StatsT } from '../../types'
import { FlexContainer, FullContainer } from '../../elements/flex'
import { Gauge } from '../Gauge'
import { noneg } from '../../util'
import { BoxContainer } from '../../elements/box'
import { Monodiv } from '../../elements/monospace'
import { styled } from 'styletron-react'
import { Badge } from '../../elements/badge'
import { Icon } from '../Icon'
import { STATI_ICONS } from '../../icons/maps'

const ResourceE = styled(Monodiv, (props: any) => ({
  height: 15,
  color: props.$color,
  fontSize: '12px',
  fontWeight: 'bolder',
  padding: '0px 4px',
  lineHeight: '15px',
  flex: 1,
  textAlign: 'center',
  background: '#111',
  display: 'flex',
}))

export interface PartyCharacterProps {
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
    position: 'relative',
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

interface CharacterStatPropsT {
  statKey: keyof StatsT
  character: ProcessedCharacterT
}
const CharacterStat = (props: CharacterStatPropsT) => {
  const { statKey, character } = props
  return (
    <ResourceE $color={getStatColor(character, statKey)}>
      <Icon
        src={STATI_ICONS[statKey] || ''}
        fill={getStatColor(character, statKey)}
        size={14}
        style={{ marginRight: 4 }}
      />
      {character.stats[statKey]}
    </ResourceE>
  )
}

const getStatColor = (
  character: ProcessedCharacterT,
  key: keyof StatsT,
): string => {
  const a = character.stats[key]
  const b = character.rawStats[key]
  if (a > b) return 'lightgreen'
  if (b < a) return 'lightcoral'
  return 'white'
}

export const PartyCharacter = (props: PartyCharacterProps) => {
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
    <Wrapper
      $hoverable={hoverable && !character.dead}
      $active={character.id === activeCharacter.id}
      $selected={selected}
      $isHovering={isHovering}
      style={{
        opacity: character.dead ? 0.5 : 1,
      }}
    >
      <BoxContainer
        onClick={() => (onClick && !character.dead ? onClick() : null)}
        style={{
          borderWidth: 2,
          cursor: onClick ? 'pointer' : 'default',
        }}
        substyle={{ padding: 0, minWidth: 380 }}
      >
        <FlexContainer style={{ border: '2px solid black' }}>
          <FlexContainer style={{ borderRight: '2px solid black' }}>
            <img
              alt='profile'
              height='115'
              width='115'
              src={`https://picsum.photos/seed/${character.name}/115/115`}
              style={{
                height: 115,
                width: 115,
              }}
            />
          </FlexContainer>
          <FlexContainer $full $direction='column'>
            <FlexContainer
              style={{
                marginTop: -3,
                marginRight: -3,
                padding: '2px 4px',
                paddingLeft: 8,
                background: '#555',
                borderBottom: '1px solid rgba(255,255,255,0.2)',
                boxShadow: '0px 4px 5px black',
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
                  padding: 4,
                  fontSize: 42,
                  height: 42,
                  lineHeight: '42px',
                  color: '#b55553',
                }}
              >
                {health > 0 ? health : 0}
              </span>
              <FlexContainer $direction='column' $full>
                <span>
                  {character.status.map((s) => `${s.type} (${s.duration})`)}
                </span>
                <span>
                  {character.tags.map((s) => `${s.type} (${s.duration})`)}
                </span>
              </FlexContainer>
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
            <Badge $bottom='18px' $left='105px'>
              {character.level}
            </Badge>
            <FlexContainer>
              <CharacterStat statKey='strength' character={character} />
              <CharacterStat statKey='vigor' character={character} />
              <CharacterStat statKey='intelligence' character={character} />
              <CharacterStat statKey='perception' character={character} />
              <CharacterStat statKey='talent' character={character} />
              <CharacterStat statKey='agility' character={character} />
              <CharacterStat statKey='luck' character={character} />
            </FlexContainer>
          </FlexContainer>
        </FlexContainer>
      </BoxContainer>
      <Badge $bottom='64px' $left='-12px' $color='lightblue'>
        {character.stats.armor}
      </Badge>
      <Badge $bottom='26px' $left='-12px' $color='plum'>
        {character.stats.resistance}
      </Badge>
      <Badge $bottom='-10px' $left='-12px' $color='lightgreen'>
        {character.stats.evasion}
      </Badge>
      <Badge
        $bottom='-12px'
        $left='40px'
        $size='35px'
        $color={
          character.weapon.damage.type === 'physical'
            ? 'rgba(255,255,255,0.8)'
            : 'plum'
        }
        style={{ fontSize: 24 }}
      >
        {character.weapon.damage.damage}
      </Badge>
    </Wrapper>
  )
}
