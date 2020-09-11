import React from 'react'
import { FlexContainer } from '../../elements/flex'
import { ArmorPreview } from '../ArmorPreview'
import { WeaponPreview } from '../WeaponPreview'
import { tProcessedCharacter } from '../../game/Character/type'
import { tWeapon } from '../../game/Weapon/type'
import { tArmor } from '../../game/Armor/type'

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
          {foundArmor && (
            <ArmorPreview armor={foundArmor} showEquipButton={false} />
          )}
          {foundArmor?.id !== activeItem.id && (
            <ArmorPreview
              armor={activeItem as tArmor}
              showEquipButton={false}
            />
          )}
        </FlexContainer>
      )}
      {activeItem.itemType === 'weapon' && (
        <FlexContainer>
          <WeaponPreview
            weapon={character.weapon}
            showEquipButton={false}
            character={character}
          />
          {character.weapon.id !== activeItem.id && (
            <WeaponPreview
              character={character}
              weapon={activeItem as tWeapon}
              showEquipButton={false}
            />
          )}
        </FlexContainer>
      )}
    </div>
  )
}
