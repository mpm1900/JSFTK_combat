import React from 'react'
import {
  ProcessedCharacterT,
  WeaponT,
  ArmorT,
  ArmorResourceType,
} from '../../types'
import { FlexContainer } from '../../elements/flex'
import { CHARACTER_RESOURCES } from '../../objects/Item'
import { Icon } from '../Icon'
import { RESOURCE_ICONS } from '../../icons/maps'
import { styled } from 'styletron-react'
import { ClickToolTip } from '../Tooltip'
import { BoxContainer } from '../../elements/box'
import { Button } from '../../elements/button'
import { usePartyContext } from '../../contexts/PartyContext'

const ItemRow = styled(FlexContainer, (props: any) => {
  return {
    alignItems: 'center',
    marginBottom: '4px',
    textShadow: '1px 1px 1px black',
    background:
      'linear-gradient(90deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 100%)',
    paddingLeft: '8px',
    transition: 'all 0.2s',
    userSelect: 'none',
    ':hover': {
      background: 'rgba(255,255,255,0.2)',
    },
  }
})

export interface ItemPropsT {
  character: ProcessedCharacterT
  setActiveItem: (item: WeaponT | ArmorT | undefined) => void
}
export const Items = (props: ItemPropsT) => {
  const { character, setActiveItem } = props
  return (
    <FlexContainer $full $direction='column'>
      <ItemRow onMouseEnter={() => setActiveItem(character.weapon)}>
        <Icon
          src={RESOURCE_ICONS.weapon || ''}
          size={16}
          style={{ marginRight: 6 }}
        />
        {character.weapon.name}
      </ItemRow>
      {CHARACTER_RESOURCES.map((res) => (
        <ArmorItem
          character={character}
          resource={res}
          onHover={setActiveItem}
        />
      ))}
    </FlexContainer>
  )
}

export interface ArmorItemProps {
  character: ProcessedCharacterT
  resource: ArmorResourceType
  canUnequip?: boolean
  onHover: (item: ArmorT | WeaponT | undefined) => void
}
export const ArmorItem = (props: ArmorItemProps) => {
  const { character, resource, canUnequip = true, onHover } = props
  const { unequipItem } = usePartyContext()
  const item = character.armor.find((a) => a.resource === resource)
  return (
    <ClickToolTip
      direction='down'
      distance={-2}
      content={() => (
        <>
          {canUnequip && (
            <BoxContainer
              substyle={{
                padding: 4,
                width: 190,
                display: 'flex',
                justifyContent: 'center',
                background: '#333',
              }}
            >
              <Button
                style={{ padding: '4px 8px' }}
                onClick={() => {
                  if (item) {
                    unequipItem(character.id, item)
                  }
                }}
              >
                Unequip
              </Button>
              <Button style={{ padding: '4px 8px' }}>Cancel</Button>
            </BoxContainer>
          )}
        </>
      )}
    >
      {({ onClick, ref }) => (
        <ItemRow
          ref={ref}
          onMouseEnter={() => onHover(item)}
          onClick={() => item && onClick()}
        >
          <Icon
            src={RESOURCE_ICONS[resource] || ''}
            size={16}
            style={{ marginRight: 6 }}
          />
          {item?.name}
        </ItemRow>
      )}
    </ClickToolTip>
  )
}
