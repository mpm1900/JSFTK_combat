import React, { useState, CSSProperties } from 'react'
import { withStyle } from 'styletron-react'
import { FlexContainer, FullContainer } from '../../elements/flex'
import { useGameStateContext } from '../../contexts/GameStateContext'
import { BoxContainer } from '../../elements/box'
import { Button } from '../../elements/button'
import { tShopEncounter } from '../../game/Encounter/type'
import { tWeapon } from '../../game/Weapon/type'
import { tArmor } from '../../game/Armor/type'
import { usePartyContext } from '../../contexts/PartyContext'
import { tConsumable } from '../../game/Consumable/type'
import { Theme } from '../../theme'
import { ItemCard } from '../ItemCard'
import {
  equipWeapon,
  makeCharacter,
  processCharacter,
} from '../../game/Character/util'
const c = makeCharacter('drifter')
const p = processCharacter
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
    purchaseItem: (item: tArmor | tWeapon | tConsumable, cost: number) => void,
    query: string,
  ) => JSX.Element
}
const tabs: ShopTabT[] = [
  {
    key: 'all',
    label: 'All',
    render: (encounter: tShopEncounter, purchaseItem, query) => (
      <FlexContainer $direction='column'>
        <h3>Consumables</h3>
        <CardList>
          {encounter.items
            .filter(
              (i) =>
                i.itemType === 'consumable' &&
                (query
                  ? JSON.stringify(i)
                      .toLowerCase()
                      .includes(query.toLowerCase())
                  : true),
            )
            .map((a) => (
              <ItemCard
                character={p(c)}
                item={a as tConsumable}
                showBuyButton={true}
                cost={encounter.costs[a.id]}
                onBuyClick={() => purchaseItem(a, encounter.costs[a.id])}
              />
            ))}
        </CardList>
        <h3>Weapons</h3>
        <CardList>
          {encounter.items
            .filter(
              (i) =>
                i.itemType === 'weapon' &&
                (query
                  ? JSON.stringify(i)
                      .toLowerCase()
                      .includes(query.toLowerCase())
                  : true),
            )
            .map((w) => (
              <ItemCard
                item={w}
                character={p(equipWeapon(c, w as tWeapon).character)}
                showBuyButton={true}
                cost={encounter.costs[w.id]}
                onBuyClick={() => purchaseItem(w, encounter.costs[w.id])}
              />
            ))}
        </CardList>
        <h3>Armor</h3>
        <CardList>
          {encounter.items
            .filter(
              (i) =>
                i.itemType === 'armor' &&
                (query
                  ? JSON.stringify(i)
                      .toLowerCase()
                      .includes(query.toLowerCase())
                  : true),
            )
            .map((a) => (
              <ItemCard
                item={a}
                character={p(c)}
                showBuyButton={true}
                cost={encounter.costs[a.id]}
                onBuyClick={() => purchaseItem(a, encounter.costs[a.id])}
              />
            ))}
        </CardList>
      </FlexContainer>
    ),
  },
  {
    key: 'weapons',
    label: 'Weaons',
    render: (encounter: tShopEncounter, purchaseItem, query) => (
      <CardList>
        {encounter.items
          .filter(
            (i) =>
              i.itemType === 'weapon' &&
              (query
                ? JSON.stringify(i).toLowerCase().includes(query.toLowerCase())
                : true),
          )
          .map((w) => (
            <ItemCard
              item={w}
              character={p(equipWeapon(c, w as tWeapon).character)}
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
    render: (encounter: tShopEncounter, purchaseItem, query) => (
      <CardList>
        {encounter.items
          .filter(
            (i) =>
              i.itemType === 'armor' &&
              (query
                ? JSON.stringify(i).toLowerCase().includes(query.toLowerCase())
                : true),
          )
          .map((a) => (
            <ItemCard
              item={a}
              character={p(c)}
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
    render: (encounter: tShopEncounter, purchaseItem) => (
      <CardList>
        {encounter.items
          .filter((i) => i.itemType === 'consumable')
          .map((a) => (
            <ItemCard
              item={a}
              character={p(c)}
              showBuyButton={true}
              cost={encounter.costs[a.id]}
              onBuyClick={() => purchaseItem(a, encounter.costs[a.id])}
            />
          ))}
      </CardList>
    ),
  },
]

export interface ShopPropsT {}
export const Shop = (props: ShopPropsT) => {
  const {} = props
  const { currentEncounter } = useGameStateContext()
  const { purchaseItem } = usePartyContext()
  const [query, setQuery] = useState('')
  const [activeTab, setActiveTab] = useState(
    tabs.find((t) => t.key === 'all') as ShopTabT,
  )
  const active = (tab: ShopTabT): CSSProperties =>
    tab.key === activeTab.key
      ? {
          borderColor: 'white',
        }
      : {}
  return (
    <BoxContainer
      style={{ margin: '20px 20px 20px 0', flex: 1, minWidth: 762 }}
      substyle={{ background: Theme.darkBgColor }}
    >
      <FlexContainer style={{ alignItems: 'center' }}>
        <FullContainer>
          <h1 style={{ margin: 0, fontFamily: Theme.titleFont }}>
            Black Market
          </h1>
        </FullContainer>
        <input
          placeholder='Search Items'
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          style={{
            background: Theme.mediumBgColor,
            border: '1px solid rgba(255,255,255,0.4)',
            padding: 10,
            color: 'white',
            marginRight: 16,
          }}
        />
        <FlexContainer>
          {tabs.map((tab) => (
            <Button
              key={tab.label}
              style={active(tab)}
              onClick={() => setActiveTab(tab)}
            >
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
        {activeTab.render(
          currentEncounter as tShopEncounter,
          purchaseItem,
          query,
        )}
      </FlexContainer>
    </BoxContainer>
  )
}
