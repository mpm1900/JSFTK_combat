import React from 'react'
import { Tooltip } from '../Tooltip'
import { BoxContainer } from '../../elements/box'
import { FlexContainer } from '../../elements/flex'
import { STATUS_ICONS } from '../../icons/maps'
import { Icon } from '../Icon'
import { tStatus } from '../../game/Status/type'
import { STATUS_CONFIG } from '../../game/Status/constants'

export interface TagPreviewPropsT {
  status: tStatus
  direction?: 'up' | 'down' | 'left' | 'right'
}
export const TagPreview = (props: TagPreviewPropsT) => {
  const { status, direction } = props
  const statusConfig = STATUS_CONFIG[status.type]
  return (
    <Tooltip
      direction={direction || 'bottom'}
      content={
        <BoxContainer style={{ maxWidth: 200 }}>
          <FlexContainer $direction='column'>
            <strong style={{ marginBottom: 8 }}>
              {status.type} {status.duration > 0 ? `(${status.duration})` : ''}
            </strong>
            {statusConfig.description && (
              <span>{statusConfig.description}</span>
            )}
          </FlexContainer>
        </BoxContainer>
      }
    >
      <Icon shadow src={STATUS_ICONS[status.type] || ''} size={20} />
    </Tooltip>
  )
}
