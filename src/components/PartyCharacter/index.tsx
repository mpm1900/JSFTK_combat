import React, { useEffect, useState } from 'react'
import { FlexContainer, FullContainer } from '../../elements/flex'
import { XPGauge, HealthGauge } from '../Gauge'
import { BoxContainer } from '../../elements/box'
import { styled } from 'styletron-react'
import { HoverBadge } from '../../elements/badge'
import { TagPreview } from '../TagPreview'
import { CharacterImage } from '../CharacterImage'

import { PartyCharacterConsumables } from '../PartyCharacterConsumables'
import { Stats } from './Stats'
import { Name } from './Name'
import { Actions } from './Actions'
import { Health } from './Health'
import { useUIContext } from '../../contexts/UIContext'
import { tProcessedCharacter } from '../../game/Character/type'
import { tConsumable } from '../../game/Consumable/type'
import { useLocalToast } from '../../contexts/LocalToastContext'
import { usePrevious } from '../../hooks/usePrevious'

export interface PartyCharacterProps {
  character: tProcessedCharacter
  selected?: boolean
  showActions?: boolean
  onClick?: () => void
  onConsumableClick?: (consumable: tConsumable, index: number) => void
  push: (contents: JSX.Element) => void
}
const Wrapper = styled('div', (props: any) => {
  const { $active } = props
  return {
    margin: 10,
    position: 'relative',
    boxShadow: $active ? '0px 0px 20px white' : 'none',
    transition: 'all 0.4s',
    userSelect: 'none',
  }
})

export const PartyCharacter = (props: PartyCharacterProps) => {
  const {
    character,
    selected,
    showActions = true,
    onConsumableClick,
    push,
  } = props
  // const { push } = useLocalToast()
  const { playerCanEquipItem } = useUIContext()
  const health = character.health
  const status = character.status.map((s) => s.type)
  const [previousHealth, setPreviousHealth] = useState(health)
  const [previousStatus, setPreviousStatus] = useState(status)
  useEffect(() => {
    const diff = previousHealth - health
    if (diff > 0) {
      push(<span>- {diff} HP</span>)
    }
    if (status.length > previousStatus.length) {
      const added = status[status.length - 1]
      push(<span>became {added}</span>)
    }
    setPreviousHealth(health)
  }, [health])
  return (
    <Wrapper
      $active={selected}
      style={{
        opacity: character.health <= 0 ? 0.5 : 1,
      }}
    >
      <BoxContainer
        style={{ borderWidth: 2 }}
        substyle={{ padding: 0, minWidth: 396 }}
      >
        <FlexContainer style={{ border: '2px solid black' }}>
          <FlexContainer
            style={{ borderRight: '2px solid black', background: '#111' }}
          >
            <CharacterImage character={character} size={115} />
          </FlexContainer>
          <FlexContainer $full $direction='column'>
            <Name character={character} />
            <FlexContainer>
              <Health character={character} />
              <FlexContainer $full style={{ maxWidth: 175, minWidth: 175 }}>
                <PartyCharacterConsumables
                  character={character}
                  consumables={character.consumables}
                  onClick={onConsumableClick}
                />
              </FlexContainer>
              <FlexContainer $full $direction='column'>
                {showActions && (
                  <Actions
                    character={character}
                    canEquip={playerCanEquipItem}
                  />
                )}
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
            <Stats character={character} />
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
        {character.status.map((status) => (
          <TagPreview direction='up' status={status} />
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
          {(character.weapon.damage.value +
            character.stats.attackDamageOffset) *
            character.stats.attackDamageModifier}
        </span>
      </HoverBadge>
    </Wrapper>
  )
}
