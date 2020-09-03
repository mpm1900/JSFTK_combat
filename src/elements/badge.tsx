import React from 'react'
import { styled, withWrapper } from 'styletron-react'
import { HoverToolTip } from '../components/Tooltip'

const Div = styled('div', {
  transform: 'rotateY(0deg) rotate(-45deg)',
})
export const Badge = withWrapper(Div, (Element) => (props: any) => {
  return (
    <div
      style={{
        position: props.$absolute === false ? 'relative' : 'absolute',
        background: '#111',
        padding: '4px',
        border: '1px solid rgba(255,255,255,0.5)',
        boxShadow: '1px 1px 0px black',
        height: props.$size || '20px',
        width: props.$size || '20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        lineHeight: '20px',
        fontWeight: 'bolder',
        borderRadius: '30%',
        transform: 'rotateY(0deg) rotate(45deg)',
        color: props.$color || 'white',
        top: props.$top,
        bottom: props.$bottom,
        right: props.$right,
        left: props.$left,
      }}
    >
      <Element {...props} />
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
        // styles={{ position: 'absolute' }}
        content={content || <div />}
      >
        <Badge
          $absolute={false}
          $size={badgeProps.$size}
          $color={badgeProps.$color}
          style={badgeProps.style}
        >
          {children}
        </Badge>
      </HoverToolTip>
    </div>
  )
}
