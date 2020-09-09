import React, { useState, CSSProperties } from 'react'
import { withStyle } from 'styletron-react'
import { FlexContainer, FullContainer } from '../../elements/flex'
import { useGameStateContext } from '../../contexts/GameStateContext'
import { BoxContainer } from '../../elements/box'
import { Button } from '../../elements/button'
import { tShopEncounter } from '../../game/Encounter/type'
import { WeaponPreview } from '../WeaponPreview'
import { ArmorPreview } from '../ArmorPreview'
import { ITEM_RARITY_COLORS } from '../../game/Item/constants'
import { tWeapon, tWeaponType } from '../../game/Weapon/type'
import { tArmor } from '../../game/Armor/type'
import { usePartyContext } from '../../contexts/PartyContext'

const CardList = withStyle(FlexContainer, (props: any) => {
  return {
    flexWrap: 'wrap',
    justifyContent: 'center',
  }
})

interface ShopTabT {
  key: string
  label: string
  render: (
    encounter: tShopEncounter,
    purchaseItem: (item: tArmor | tWeapon, cost: number) => void,
  ) => JSX.Element
}
const tabs: ShopTabT[] = [
  {
    key: 'all',
    label: 'All',
    render: (encounter: tShopEncounter, purchaseItem) => (
      <FlexContainer $direction='column'>
        {[...encounter.items, ...encounter.consumables].map((i) => (
          <FlexContainer style={{ color: ITEM_RARITY_COLORS[i.rarity] }}>
            {i.name}
          </FlexContainer>
        ))}
      </FlexContainer>
    ),
  },
  {
    key: 'weapons',
    label: 'Weaons',
    render: (encounter: tShopEncounter, purchaseItem) => (
      <CardList>
        {encounter.items
          .filter((i) => i.itemType === 'weapon')
          .map((w) => (
            <WeaponPreview
              weapon={w as tWeapon}
              showBuyButton={true}
              cost={encounter.costs[w.id]}
              onBuyClick={() => purchaseItem(w, encounter.costs[w.id])}
            />
          ))}
      </CardList>
    ),
  },
  {
    key: 'armor',
    label: 'Armor',
    render: (encounter: tShopEncounter, purchaseItem) => (
      <CardList>
        {encounter.items
          .filter((i) => i.itemType === 'armor')
          .map((a) => (
            <ArmorPreview
              armor={a as tArmor}
              showBuyButton={true}
              cost={encounter.costs[a.id]}
              onBuyClick={() => purchaseItem(a, encounter.costs[a.id])}
            />
          ))}
      </CardList>
    ),
  },
  {
    key: 'consumables',
    label: 'Consumables',
    render: (encounter: tShopEncounter) => <span>Consumables</span>,
  },
]

export interface ShopPropsT {}
export const Shop = (props: ShopPropsT) => {
  const {} = props
  const { currentEncounter } = useGameStateContext()
  const { purchaseItem } = usePartyContext()
  const [activeTab, setActiveTab] = useState(
    tabs.find((t) => t.key === 'all') as ShopTabT,
  )
  const active = (tab: ShopTabT): CSSProperties =>
    tab.key === activeTab.key
      ? {
          borderColor: 'white',
        }
      : {}
  // console.log(currentEncounter)
  return (
    <BoxContainer
      style={{ margin: '20px 20px 20px 0', flex: 1 }}
      substyle={{ background: '#111' }}
    >
      <FlexContainer style={{ alignItems: 'center' }}>
        <FullContainer>
          <h1 style={{ margin: 0 }}>Shop</h1>
        </FullContainer>
        <FlexContainer>
          {tabs.map((tab) => (
            <Button style={active(tab)} onClick={() => setActiveTab(tab)}>
              {tab.label}
            </Button>
          ))}
        </FlexContainer>
      </FlexContainer>
      <FlexContainer
        $direction='column'
        $full
        style={{
          overflow: 'auto',
          marginTop: 10,
          height: 'calc(100vh - 374px)',
          overflowY: 'auto',
        }}
      >
        {activeTab.render(currentEncounter as tShopEncounter, purchaseItem)}
      </FlexContainer>
    </BoxContainer>
  )
}
