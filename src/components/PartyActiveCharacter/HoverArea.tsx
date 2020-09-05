import React from 'react'
import {
  ProcessedCharacterT,
  WeaponT,
  ArmorT,
  ProcessedWeaponT,
} from '../../types'
import { FlexContainer } from '../../elements/flex'
import { ArmorPreview } from '../ArmorPreview'
import { WeaponPreview } from '../WeaponPreview'

export interface HoverAreaPropsT {
  character: ProcessedCharacterT
  activeItem: WeaponT | ArmorT
}

export const HoverArea = (props: HoverAreaPropsT) => {
  const { character, activeItem } = props
  const foundArmor = character.armor.find(
    (a) => a.resource === (activeItem as ArmorT).resource,
  )

  return (
    <div>
      {activeItem.itemType === 'armor' && (
        <FlexContainer>
          {foundArmor && (
            <ArmorPreview armor={foundArmor} showEquipButton={false} />
          )}
          {foundArmor?.id !== activeItem.id && (
            <ArmorPreview
              armor={activeItem as ArmorT}
              showEquipButton={false}
            />
          )}
        </FlexContainer>
      )}
      {activeItem.itemType === 'weapon' && (
        <FlexContainer>
          <WeaponPreview weapon={character.weapon} showEquipButton={false} />
          {character.weapon.id !== activeItem.id && (
            <WeaponPreview
              weapon={activeItem as ProcessedWeaponT}
              showEquipButton={false}
            />
          )}
        </FlexContainer>
      )}
    </div>
  )
}
