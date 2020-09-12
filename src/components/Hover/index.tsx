import React, { useState, useLayoutEffect } from 'react'
import { v4 } from 'uuid'

export interface HoverChildrenT {
  isHovering: boolean
}
export interface HoverPropsT {
  delay?: number
  flex?: boolean
  children: (props: HoverChildrenT) => JSX.Element
}
export const Hover = (props: HoverPropsT) => {
  const { delay = 500, flex, children } = props
  const [internalHovering, setInternalHovering] = useState<boolean>(false)
  const [isHovering, setIsHovering] = useState<boolean>(false)
  const [guid, setGuid] = useState<string>(v4())
  useLayoutEffect(() => {
    const action = async () => {
      if (internalHovering) {
        setTimeout(() => {
          setGuid(v4())
        }, delay)
      }
    }
    action()
  }, [internalHovering])
  useLayoutEffect(() => {
    if (internalHovering) {
      setIsHovering(true)
    }
  }, [guid])
  const onMouseEnter = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setInternalHovering(true)
  }
  const onMouseLeave = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setInternalHovering(false)
    setIsHovering(false)
  }
  return (
    <div
      style={{ display: flex ? 'flex' : 'block', flex: flex ? 1 : undefined }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children({ isHovering })}
    </div>
  )
}
