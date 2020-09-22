import React from 'react'
import { FlexContainer } from '../../elements/flex'
import { HeadingSm } from '../../elements/typography'
import { getUpgradeOptions } from '../../game/Armor/builders/static'
import { tArmor, tArmorResourceType } from '../../game/Armor/type'
import { tProcessedCharacter } from '../../game/Character/type'
import { ITEM_RARITY_COLORS } from '../../game/Item/constants'
import { RESOURCE_ICONS } from '../../icons/maps'
import { Icon } from '../Icon'
import { ItemCard } from '../ItemCard'

export interface UpgradeOptionsT {
  character: tProcessedCharacter
  resource: tArmorResourceType
  upgradeItem: (cid: string, a: tArmor) => void
}
export const UpgradeOptions = (props: UpgradeOptionsT) => {
  const { character, resource, upgradeItem } = props
  const item = character.armor.find((a) => a.resource === resource)
  const upgradeOptions = getUpgradeOptions(item)
  if (!item) return null
  return (
    <FlexContainer $direction='column'>
      {upgradeOptions.length > 0 ? (
        upgradeOptions.map((a) => (
          <ItemCard
            key={a.id}
            item={a}
            character={character}
            showBuyButton
            buyText={`Upgrade (${a.goldValue})`}
            onBuyClick={() => upgradeItem(character.id, a)}
          />
        ))
      ) : (
        <FlexContainer
          $direction='column'
          $full
          style={{
            padding: 8,
            alignItems: 'center',
            justifyContent: 'center',
            width: 232,
          }}
        >
          <Icon
            src={RESOURCE_ICONS[resource]}
            size={48}
            shadow
            fill={ITEM_RARITY_COLORS[item.rarity]}
            style={{ marginBottom: 16 }}
          />
          <HeadingSm
            style={{
              color: ITEM_RARITY_COLORS[item.rarity],
              textAlign: 'center',
            }}
          >
            Maximum Upgrade Achieved
          </HeadingSm>
        </FlexContainer>
      )}
    </FlexContainer>
  )
}
