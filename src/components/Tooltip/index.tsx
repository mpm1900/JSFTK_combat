import React from 'react'
import BaseTooltip, { TooltipProps } from 'react-tooltip-lite'
import { Hover } from '../Hover'

interface PropsT extends TooltipProps {
  children: JSX.Element
}
export const Tooltip = (props: PropsT) => {
  const { ...rest } = props
  return (
    <BaseTooltip
      direction='up'
      tagName='div'
      padding='0'
      arrow={false}
      {...rest}
    />
  )
}

export const HoverToolTip = (props: PropsT) => {
  return (
    <Hover>
      {({ isHovering }) => <Tooltip {...props} isOpen={isHovering} />}
    </Hover>
  )
}
