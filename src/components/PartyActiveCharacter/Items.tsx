import React from 'react'
import { FlexContainer } from '../../elements/flex'
import { Icon } from '../Icon'
import { RESOURCE_ICONS, WEAPON_TYPE_ICONS } from '../../icons/maps'
import { styled } from 'styletron-react'
import { ClickToolTip } from '../Tooltip'
import { BoxContainer } from '../../elements/box'
import { Button } from '../../elements/button'
import { usePartyContext } from '../../contexts/PartyContext'
import { useUIContext } from '../../contexts/UIContext'
import { tWeapon } from '../../game/Weapon/type'
import { tProcessedCharacter } from '../../game/Character/type'
import { tArmor, tArmorResourceType } from '../../game/Armor/type'
import { CHARACTER_RESOURCES } from '../../game/Item/constants'

const ItemRow = styled(FlexContainer, (props: any) => {
  return {
    alignItems: 'center',
    marginBottom: '4px',
    textShadow: '1px 1px 1px black',
    background: props.$disabled
      ? 'rgba(255,255,255,0.05)'
      : 'linear-gradient(90deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 100%)',
    paddingLeft: '8px',
    transition: 'all 0.2s',
    userSelect: 'none',
    ':hover': {
      background: 'rgba(255,255,255,0.2)',
    },
  }
})

export interface ItemPropsT {
  character: tProcessedCharacter
  setActiveItem: (item: tWeapon | tArmor | undefined) => void
}
export const Items = (props: ItemPropsT) => {
  const { character, setActiveItem } = props
  const { playerCanEquipItem } = useUIContext()
  return (
    <FlexContainer $full $direction='column'>
      <ArmorItem
        disabled={false}
        character={character}
        resource={'weapon'}
        onHover={setActiveItem}
        canUnequip={playerCanEquipItem}
      />
      {CHARACTER_RESOURCES.map((res) => {
        const disabled = res === 'offhand' && character.weapon.twoHand
        return (
          <ArmorItem
            disabled={disabled}
            character={character}
            resource={res}
            onHover={setActiveItem}
            canUnequip={playerCanEquipItem}
          />
        )
      })}
    </FlexContainer>
  )
}

export interface ArmorItemProps {
  character: tProcessedCharacter
  resource: tArmorResourceType | 'weapon'
  canUnequip?: boolean
  disabled?: boolean
  onHover: (item: tArmor | tWeapon | undefined) => void
}
export const ArmorItem = (props: ArmorItemProps) => {
  const {
    character,
    resource,
    canUnequip = true,
    disabled = false,
    onHover,
  } = props
  const { unequipItem } = usePartyContext()
  const item =
    resource === 'weapon'
      ? character.weapon
      : character.armor.find((a) => a.resource === resource)
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
                    if (resource === 'weapon') {
                    } else {
                      unequipItem(character.id, item)
                    }
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
          $disabled={disabled}
          onMouseEnter={() => onHover(item)}
          onClick={() => {
            if (item) onClick()
          }}
        >
          <Icon
            src={
              resource === 'weapon'
                ? WEAPON_TYPE_ICONS[(item as tWeapon)?.type || 'fist']
                : RESOURCE_ICONS[resource] || ''
            }
            size={16}
            fill={disabled ? 'rgba(255,255,255,0.3)' : 'white'}
            style={{ marginRight: 6 }}
          />
          {item?.name}
        </ItemRow>
      )}
    </ClickToolTip>
  )
}
