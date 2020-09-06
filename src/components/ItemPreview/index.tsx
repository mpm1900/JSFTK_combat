import React from 'react'
import { WeaponT, ArmorT, ProcessedWeaponT } from '../../types'
import { ArmorPreview } from '../ArmorPreview'
import { WeaponPreview } from '../WeaponPreview'

export interface ItemPreviewPropsT {
  item: WeaponT | ArmorT
}

export const ItemPreivew = (props: ItemPreviewPropsT) => {
  const { item } = props

  if (item.itemType === 'armor') return <ArmorPreview armor={item as ArmorT} />
  if (item.itemType === 'weapon')
    return <WeaponPreview weapon={item as ProcessedWeaponT} />
  return <div />
}
