import React from 'react'
import { styled, withWrapper } from 'styletron-react'
import { HoverToolTip } from '../components/Tooltip'
import { Theme } from '../theme'

const Div = styled('div', {
  transform: 'rotateY(0deg) rotate(-45deg)',
})
export const Badge = withWrapper(Div, (Element) => (props: any) => {
  const { onClick, $style, ...rest } = props
  return (
    <div
      onClick={onClick}
      style={{
        position: props.$absolute === false ? 'relative' : 'absolute',
        background: Theme.darkBgColorSolid,
        padding: '4px',
        fontFamily: 'New Rocker',
        border: '1px solid rgba(255,255,255,0.5)',
        boxShadow: '1px 1px 3px black',
        height: props.$size || '20px',
        width: props.$size || '20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        lineHeight: '20px',
        borderRadius: '30%',
        transform: 'rotateY(0deg) rotate(45deg)',
        textShadow: '1px 1px 3px black',
        color: props.$color || 'white',
        cursor: 'pointer',
        top: props.$top,
        userSelect: 'none',
        bottom: props.$bottom,
        right: props.$right,
        left: props.$left,
        transition: 'all 0.2s',
        zIndex: 4,
        ...($style || {}),
      }}
    >
      <Element {...rest} />
    </div>
  )
})

export interface HoverBadgePropsT {
  children: JSX.Element
  content: JSX.Element
  badgeProps: any
  direction?: 'up' | 'down' | 'left' | 'right'
}
export const HoverBadge = (props: HoverBadgePropsT) => {
  const { children, content, badgeProps, direction } = props
  return (
    <div
      style={{
        position: 'absolute',
        top: badgeProps.$top,
        bottom: badgeProps.$bottom,
        left: badgeProps.$left,
        right: badgeProps.$right,
      }}
    >
      <HoverToolTip
        distance={2}
        direction={direction || 'right'}
        content={content || <div />}
      >
        <Badge
          $absolute={false}
          $size={badgeProps.$size}
          $color={badgeProps.$color}
          $style={badgeProps.style}
        >
          {children}
        </Badge>
      </HoverToolTip>
    </div>
  )
}
