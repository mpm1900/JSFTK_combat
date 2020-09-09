import React from 'react'
import { ArmorPreview } from '../ArmorPreview'
import { WeaponPreview } from '../WeaponPreview'
import { tWeapon } from '../../game/Weapon/type'
import { tArmor } from '../../game/Armor/type'

export interface ItemPreviewPropsT {
  item: tWeapon | tArmor
}

export const ItemPreivew = (props: ItemPreviewPropsT) => {
  const { item } = props

  if (item.itemType === 'armor') return <ArmorPreview armor={item as tArmor} />
  if (item.itemType === 'weapon')
    return <WeaponPreview weapon={item as tWeapon} />
  return <div />
}
