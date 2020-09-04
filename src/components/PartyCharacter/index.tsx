import React from 'react'
import { ProcessedCharacterT, StatsT } from '../../types'
import { FlexContainer, FullContainer } from '../../elements/flex'
import { XPGauge, HealthGauge } from '../Gauge'
import { BoxContainer } from '../../elements/box'
import { Monodiv } from '../../elements/monospace'
import { styled, withStyle } from 'styletron-react'
import { HoverBadge } from '../../elements/badge'
import { Icon } from '../Icon'
import { STATI_ICONS } from '../../icons/maps'
import Details from '../../icons/svg/delapouite/skills.svg'
import Inventory from '../../icons/svg/lorc/knapsack.svg'
import { TagPreview } from '../TagPreview'
import { CharacterImage } from '../CharacterImage'

const ResourceE = withStyle(Monodiv, (props: any) => ({
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
    boxShadow: $active ? '0px 0px 20px white' : 'none',
    transition: 'all 0.1s',
    userSelect: 'none',
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
  if (b > a) return 'lightcoral'
  return 'rgba(255,255,255,0.6)'
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
            <CharacterImage character={character} size={115} />
          </FlexContainer>
          <FlexContainer $full $direction='column'>
            <FlexContainer
              style={{
                marginTop: -3,
                marginRight: -3,
                padding: '0 4px',
                paddingLeft: 8,
                background: '#555',
                height: 24,
                lineHeight: '28px',
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
                  lineHeight: '48px',
                  color: '#b55553',
                }}
              >
                {health > 0 ? health : 0}
              </span>
              <FullContainer />
              <FlexContainer $direction='column'>
                <FullContainer />
                <FlexContainer>
                  <Icon
                    src={Inventory}
                    fill={'rgba(255,255,255,0.7)'}
                    size={18}
                    shadow
                    style={{ padding: 6, cursor: 'pointer' }}
                  />
                  <Icon
                    src={Details}
                    fill={'rgba(255,255,255,0.7)'}
                    size={18}
                    shadow
                    style={{ padding: 6, cursor: 'pointer' }}
                  />
                </FlexContainer>
              </FlexContainer>
            </FlexContainer>
            <FullContainer />
            <HealthGauge character={character} />
            <XPGauge character={character} />
            <HoverBadge
              badgeProps={{ $bottom: '18px', $left: '105px' }}
              content={<BoxContainer>Character Level</BoxContainer>}
            >
              <span>{character.level}</span>
            </HoverBadge>
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
      <FlexContainer
        style={{
          position: 'absolute',
          top: '-24px',
          right: '4px',
        }}
      >
        {character.tags.map((tag) => (
          <TagPreview direction='up' tag={tag} />
        ))}
      </FlexContainer>
      <HoverBadge
        badgeProps={{ $bottom: '64px', $left: '-12px', $color: 'lightblue' }}
        content={<BoxContainer>Armor</BoxContainer>}
      >
        <span>{character.stats.armor}</span>
      </HoverBadge>
      <HoverBadge
        badgeProps={{ $bottom: '26px', $left: '-12px', $color: 'plum' }}
        content={<BoxContainer>Magic Resistance</BoxContainer>}
      >
        <span>{character.stats.resistance}</span>
      </HoverBadge>
      <HoverBadge
        badgeProps={{ $bottom: '-10px', $left: '-12px', $color: 'lightgreen' }}
        content={<BoxContainer>Evasion</BoxContainer>}
      >
        <span>{character.stats.evasion}</span>
      </HoverBadge>
      <HoverBadge
        direction='up'
        content={<BoxContainer>Weapon Damage</BoxContainer>}
        badgeProps={{
          $bottom: '-12px',
          $left: '40px',
          $size: '35px',
          $color:
            character.weapon.damage.type === 'physical'
              ? 'rgba(255,255,255,0.8)'
              : 'plum',
          style: { fontSize: 24 },
        }}
      >
        <span>
          {character.weapon.damage.damage + character.stats.damageModifier}
        </span>
      </HoverBadge>
    </Wrapper>
  )
}