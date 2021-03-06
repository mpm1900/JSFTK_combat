import React, { useMemo } from 'react'
import { FlexContainer } from '../../elements/flex'
import { Icon } from '../Icon'
import { CONSUMABLE_ITEM_ICONS, CONSUMABLE_ITEM_COLORS } from '../../icons/maps'
import { HoverToolTip } from '../Tooltip'
import { BoxContainer } from '../../elements/box'
import { tProcessedCharacter } from '../../game/Character/type'
import { tConsumable } from '../../game/Consumable/type'
import { considateConsumableListToStack } from '../../game/Consumable/util'
import { Theme } from '../../theme'
import { REMOVE_CURSES } from '../../game/Skill/skills/consumables'
import { hasAnyStatus } from '../../game/Character/util'
import { CONSUMABLE_DESCRIPTIONS } from '../../game/Consumable/constants'

const HEIGHT = 64
export interface PartyCharacterConsumablesPropsT {
  character: tProcessedCharacter
  consumables: tConsumable[]
  onClick?: (consumable: tConsumable, index: number) => void
}
export const PartyCharacterConsumables = (
  props: PartyCharacterConsumablesPropsT,
) => {
  const { character, consumables, onClick } = props
  const stack = useMemo(() => considateConsumableListToStack(consumables), [
    consumables,
  ])
  const onStackClick = (consumable: tConsumable) => {
    let index = undefined
    consumables.forEach((c, i) => {
      if (c.id === consumable.id) index = i
    })
    if (consumable.skill.healing && !(character.healthOffset === 0))
      return onClick && onClick(consumable, index || 0)
    if (
      consumable.skill.id === REMOVE_CURSES.id &&
      hasAnyStatus(character, [
        'cursed-vigor',
        'cursed-strength',
        'cursed-luck',
        'cursed-intelligence',
        'cursed-dexterity',
        'cursed-charisma',
        'cursed-agility',
      ])
    ) {
      return onClick && onClick(consumable, index || 0)
    }

    if (
      consumable.skill.name === 'Cure Potion' &&
      hasAnyStatus(character, ['poisoned', 'bleeding', 'burning', 'frozen'])
    ) {
      return onClick && onClick(consumable, index || 0)
    }
  }
  const filler = Array(10 - stack.length).fill(null)

  return (
    <FlexContainer
      $direction='column'
      style={{ flexWrap: 'wrap', height: HEIGHT }}
    >
      {stack.map((s) => (
        <PartyCharacterConsumable
          key={s.consumable.id}
          character={character}
          consumable={s.consumable}
          count={s.count}
          onClick={onStackClick}
        />
      ))}
      {filler.map((f, i) => (
        <ConsumableBox key={i} />
      ))}
    </FlexContainer>
  )
}

interface ConsumableBoxPropsT {
  children?: JSX.Element
  onClick?: () => void
}
const ConsumableBox = (props: ConsumableBoxPropsT) => {
  const { children, onClick } = props
  return (
    <FlexContainer
      onClick={() => onClick && onClick()}
      style={{
        height: HEIGHT / 2,
        width: HEIGHT / 2,
        boxSizing: 'border-box',
        border: '1px solid rgba(0,0,0,0.5)',
        background: Theme.otherGrey,
        alignItems: 'center',
        justifyContent: 'center',
        cursor: onClick ? 'pointer' : 'default',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      {children}
    </FlexContainer>
  )
}

export interface PartyCharacterConsumablePropsT {
  consumable: tConsumable
  character: tProcessedCharacter
  count: number
  onClick?: (consumable: tConsumable) => void
}
export const PartyCharacterConsumable = (
  props: PartyCharacterConsumablePropsT,
) => {
  const { character, consumable, count, onClick } = props
  return (
    <HoverToolTip
      content={
        <PartyCharacterConsumableTooltip
          character={character}
          consumable={consumable}
        />
      }
    >
      <ConsumableBox onClick={() => onClick && onClick(consumable)}>
        <>
          <Icon
            src={CONSUMABLE_ITEM_ICONS[consumable.cid]}
            fill={CONSUMABLE_ITEM_COLORS[consumable.cid]}
            size={24}
            shadow
          />
          <div
            style={{
              position: 'absolute',
              textShadow: '-1px 1px 1px black',
              bottom: -2,
              zIndex: 2,
              right: 1,
            }}
          >
            {count}
          </div>
        </>
      </ConsumableBox>
    </HoverToolTip>
  )
}

export interface PartyCharacterConsumableTooltipProps {
  character: tProcessedCharacter
  consumable: tConsumable
}
export const PartyCharacterConsumableTooltip = (
  props: PartyCharacterConsumableTooltipProps,
) => {
  const { character, consumable } = props
  const getText = CONSUMABLE_DESCRIPTIONS[consumable.cid]
  return (
    <BoxContainer
      style={{ maxWidth: 200 }}
      substyle={{ background: Theme.darkBgColor }}
    >
      <strong>{consumable.name}</strong>
      {getText && <div>{getText(character)}</div>}
    </BoxContainer>
  )
}
