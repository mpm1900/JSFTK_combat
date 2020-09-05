import React from 'react'
import { ProcessedCharacterT } from '../../types'
import { FlexContainer } from '../../elements/flex'
import { CHARACTER_RESOURCES } from '../../objects/Item'
import { Icon } from '../Icon'
import { RESOURCE_ICONS } from '../../icons/maps'
import { styled } from 'styletron-react'

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
}
export const Items = (props: ItemPropsT) => {
  const { character } = props
  return (
    <FlexContainer $full $direction='column'>
      <ItemRow>
        <Icon
          src={RESOURCE_ICONS.weapon || ''}
          size={16}
          style={{ marginRight: 6 }}
        />
        {character.weapon.name}
      </ItemRow>
      {CHARACTER_RESOURCES.map((res) => (
        <ItemRow>
          <Icon
            src={RESOURCE_ICONS[res] || ''}
            size={16}
            style={{ marginRight: 6 }}
          />
          {character.armor.find((a) => a.resource === res)?.name}
        </ItemRow>
      ))}
    </FlexContainer>
  )
}
