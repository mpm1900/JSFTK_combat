import React, { useState, useRef } from 'react'
import BaseTooltip, { TooltipProps } from 'react-tooltip-lite'
import { Hover } from '../Hover'
import { useOnClickOutside } from '../../hooks/useOnClickOutside'

export interface ClickToolTipChildrenT {
  onClick: (value?: boolean) => void
  ref: React.MutableRefObject<HTMLElement | undefined>
}
interface PropsT extends TooltipProps {
  children: JSX.Element | ((props: ClickToolTipChildrenT) => JSX.Element)
  content: JSX.Element | ((props: ClickToolTipChildrenT) => JSX.Element)
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

export const ClickToolTip = (props: PropsT) => {
  const { children, content, ...rest } = props
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const ref = useRef<HTMLElement>()
  useOnClickOutside(ref, () => {
    setIsOpen(false)
  })
  if (typeof children !== 'function') return null
  if (typeof content !== 'function') return null
  const p = {
    onClick: (value?: boolean) => {
      setIsOpen((v) => (value !== undefined ? value : !v))
    },
    ref,
  }
  return (
    <Tooltip content={content(p)} {...rest} isOpen={isOpen}>
      {children(p)}
    </Tooltip>
  )
}
