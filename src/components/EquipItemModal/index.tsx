import React from 'react'
import { useCombatContext } from '../../contexts/CombatContext'
import { FlexContainer } from '../../elements/flex'
import { Theme } from '../../theme'
import { ArmorList } from '../PartyActiveCharacter/ArmorList'
import { useModalContext } from '../../contexts/ModalContext'
import { tWeapon } from '../../game/Weapon/type'
import { tArmor } from '../../game/Armor/type'
import { WeaponList } from '../PartyActiveCharacter/WeaponList'

export interface EquipItemModalPropsT {
  equipItemCombat: (characterId: string, item: tWeapon | tArmor) => void
}

export const EquipItemModal = (props: EquipItemModalPropsT) => {
  const { equipItemCombat } = props
  const { activeCharacter } = useCombatContext()
  const { close } = useModalContext()
  const onEquipItem = (characterId: string, item: tWeapon | tArmor) => {
    equipItemCombat(characterId, item)
    close()
  }
  return (
    <FlexContainer
      $direction='column'
      style={{ maxHeight: 300, overflow: 'auto' }}
    >
      <h3 style={{ margin: 0, marginBottom: 32, fontFamily: Theme.titleFont }}>
        Choose an Item
      </h3>
      <WeaponList
        character={activeCharacter}
        setActiveItem={() => {}}
        canEquip={true}
        onEquipItem={onEquipItem}
      />
      <ArmorList
        character={activeCharacter}
        setActiveItem={() => {}}
        canEquip={true}
        onEquipItem={onEquipItem}
      />
    </FlexContainer>
  )
}
