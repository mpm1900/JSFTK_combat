import React from 'react'
import { FlexContainer } from '../../elements/flex'
import { tProcessedCharacter } from '../../game/Character/type'
import { tWeapon } from '../../game/Weapon/type'
import { tArmor } from '../../game/Armor/type'
import { ItemCard } from '../ItemCard'

export interface HoverAreaPropsT {
  character: tProcessedCharacter
  activeItem: tWeapon | tArmor
}

export const HoverArea = (props: HoverAreaPropsT) => {
  const { character, activeItem } = props
  const foundArmor = character.armor.find(
    (a) => a.resource === (activeItem as tArmor).resource,
  )

  return (
    <div>
      {activeItem.itemType === 'armor' && (
        <FlexContainer>
          {foundArmor && <ItemCard item={foundArmor} />}
          {foundArmor?.id !== activeItem.id && <ItemCard item={activeItem} />}
        </FlexContainer>
      )}
      {activeItem.itemType === 'weapon' && (
        <FlexContainer>
          <ItemCard item={character.weapon} />
          {character.weapon.id !== activeItem.id && (
            <ItemCard item={activeItem} />
          )}
        </FlexContainer>
      )}
    </div>
  )
}
