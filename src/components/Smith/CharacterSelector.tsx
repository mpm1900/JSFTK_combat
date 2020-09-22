import React from 'react'
import { BoxContainer } from '../../elements/box'
import { FlexContainer } from '../../elements/flex'
import { HexBadge } from '../../elements/shapes'
import { CHARACTER_CLASS_COLORS } from '../../game/Character/constants'
import { tProcessedCharacter } from '../../game/Character/type'
import { ITEM_RARITY_COLORS } from '../../game/Item/constants'
import { CHARACTER_CLASS_ICONS } from '../../icons/maps'
import { Theme } from '../../theme'
import { Icon } from '../Icon'
import { ItemCard } from '../ItemCard'
import { HoverToolTip } from '../Tooltip'

export interface CharacterSelectorPropsT {
  character: tProcessedCharacter
  active: boolean
  onClick: () => void
}
export const CharacterSelector = (props: CharacterSelectorPropsT) => {
  const { character, active, onClick } = props
  const head = character.armor.find((a) => a.resource === 'head')
  const body = character.armor.find((a) => a.resource === 'body')
  const feet = character.armor.find((a) => a.resource === 'feet')
  return (
    <FlexContainer
      style={{
        cursor: 'pointer',
        alignItems: 'center',
        userSelect: 'none',
      }}
      onClick={onClick}
    >
      <HexBadge
        size={84}
        stroke={3}
        color={CHARACTER_CLASS_COLORS[character.class]}
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 3,
        }}
        childStyle={{
          marginTop: -18,
        }}
      >
        <Icon
          src={CHARACTER_CLASS_ICONS[character.class]}
          size={48}
          shadow
          fill={active ? 'white' : 'rgba(255,255,255,0.5)'}
        />
      </HexBadge>
      <BoxContainer
        style={{
          height: 76,
          marginLeft: -32,
          borderWidth: 3,
          transition: 'all 0.4,',
          boxShadow: active ? '0px 5px 10px rgba(0,0,0,0.9)' : undefined,
        }}
        substyle={{
          background: active ? Theme.otherGrey2 : Theme.mediumBgColor,
          transition: 'all 0.3s',
          paddingLeft: 32,
          paddingTop: 0,
          paddingBottom: 0,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          textShadow: '1px 1px 3px black',
          fontSize: 14,
        }}
      >
        {head && (
          <HoverToolTip
            content={<ItemCard item={head} character={character} />}
          >
            <div style={{ color: ITEM_RARITY_COLORS[head.rarity] }}>
              {head.name} ({head.level})
            </div>
          </HoverToolTip>
        )}

        {body && (
          <HoverToolTip
            content={<ItemCard item={body} character={character} />}
          >
            <div style={{ color: ITEM_RARITY_COLORS[body.rarity] }}>
              {body?.name} ({body?.level})
            </div>
          </HoverToolTip>
        )}
        {feet && (
          <HoverToolTip
            content={<ItemCard item={feet} character={character} />}
          >
            <div style={{ color: ITEM_RARITY_COLORS[feet.rarity] }}>
              {feet.name} ({feet.level})
            </div>
          </HoverToolTip>
        )}
      </BoxContainer>
    </FlexContainer>
  )
}
