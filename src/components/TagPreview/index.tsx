import React from 'react'
import { Tooltip } from '../Tooltip'
import { BoxContainer } from '../../elements/box'
import { FlexContainer } from '../../elements/flex'
import { TAG_ICONS } from '../../icons/maps'
import { Icon } from '../Icon'
import { TagT } from '../../types'

export interface TagPreviewPropsT {
  tag: TagT
  direction?: 'up' | 'down' | 'left' | 'right'
}
export const TagPreview = (props: TagPreviewPropsT) => {
  const { tag, direction } = props
  return (
    <Tooltip
      direction={direction || 'bottom'}
      content={
        <BoxContainer style={{ maxWidth: 200 }}>
          <FlexContainer $direction='column'>
            <strong>
              {tag.type} {tag.duration > 0 ? `(${tag.duration})` : ''}
            </strong>
            {tag.description && <span>{tag.description}</span>}
          </FlexContainer>
        </BoxContainer>
      }
    >
      <Icon shadow src={TAG_ICONS[tag.type]} size={20} />
    </Tooltip>
  )
}
