import React, { useMemo } from 'react'
import { ConsumableT } from '../../types/Consumable'
import { considateConsumableListToStack } from '../../functions/Consumable'
import { FlexContainer } from '../../elements/flex'
import { Icon } from '../Icon'
import { CONSUMABLE_ITEM_ICONS, CONSUMABLE_ITEM_COLORS } from '../../icons/maps'
import { ProcessedCharacterT } from '../../types'
import { HoverToolTip } from '../Tooltip'
import { BoxContainer } from '../../elements/box'

const HEIGHT = 70
export interface PartyCharacterConsumablesPropsT {
  character: ProcessedCharacterT
  consumables: ConsumableT[]
  onClick?: (consumable: ConsumableT, index: number) => void
}
export const PartyCharacterConsumables = (
  props: PartyCharacterConsumablesPropsT,
) => {
  const { character, consumables, onClick } = props
  const stack = useMemo(() => considateConsumableListToStack(consumables), [
    consumables,
  ])
  const onStackClick = (consumable: ConsumableT) => {
    let index = undefined
    consumables.forEach((c, i) => {
      if (c.id === consumable.id) index = i
    })
    if (consumable.skill.healing && !(character.stats.healthOffset === 0))
      return onClick && onClick(consumable, index || 0)
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
      {filler.map((f) => (
        <ConsumableBox />
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
        background: '#333',
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
  consumable: ConsumableT
  character: ProcessedCharacterT
  count: number
  onClick?: (consumable: ConsumableT) => void
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
            src={CONSUMABLE_ITEM_ICONS[consumable.id]}
            fill={CONSUMABLE_ITEM_COLORS[consumable.id]}
            size={24}
          />
          <div
            style={{
              position: 'absolute',
              bottom: -2,
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
  character: ProcessedCharacterT
  consumable: ConsumableT
}
export const PartyCharacterConsumableTooltip = (
  props: PartyCharacterConsumableTooltipProps,
) => {
  const { character, consumable } = props
  return (
    <BoxContainer>
      <strong>{consumable.name}</strong>
      {consumable.skill.healing && (
        <div>Heal for {character.stats.consumableHealthGainOffset} HP</div>
      )}
    </BoxContainer>
  )
}
