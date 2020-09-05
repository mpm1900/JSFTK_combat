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

  return (
    <div>
      {activeItem.itemType === 'armor' && (
        <FlexContainer>
          {character.armor.find(
            (a) => a.resource === (activeItem as ArmorT).resource,
          ) && (
            <ArmorPreview
              armor={
                character.armor.find(
                  (a) => a.resource === (activeItem as ArmorT).resource,
                ) as ArmorT
              }
              showEquipButton={false}
            />
          )}
          <ArmorPreview armor={activeItem as ArmorT} showEquipButton={false} />
        </FlexContainer>
      )}
      {activeItem.itemType === 'weapon' && (
        <FlexContainer>
          <WeaponPreview weapon={character.weapon} showEquipButton={false} />
          <WeaponPreview
            weapon={activeItem as ProcessedWeaponT}
            showEquipButton={false}
          />
        </FlexContainer>
      )}
    </div>
  )
}
