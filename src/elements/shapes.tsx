import React, { CSSProperties } from 'react'
import { FlexContainer } from './flex'
import { Theme } from '../theme'
import { HoverToolTip } from '../components/Tooltip'

export interface HexagonPropsT {
  color: string
  size: number
  style?: CSSProperties
  children?: JSX.Element | string | number
  childStyle?: CSSProperties
}
export const Hexagon = (props: HexagonPropsT) => {
  const { color, size, children, childStyle } = props
  const mod = size / 104
  const boxW = mod * 104
  const boxH = mod * 60
  const triH = mod * 30
  const triW = mod * 52
  const tHeight = boxH + 2 * triH
  return (
    <FlexContainer $direction='column'>
      <div
        style={{
          width: 0,
          borderBottom: `${triH}px solid ${color}`,
          borderRight: `${triW}px solid transparent`,
          borderLeft: `${triW}px solid transparent`,
        }}
      />
      <div
        style={{
          width: `${boxW}px`,
          height: `${boxH + 1}px`,
          marginTop: '-1px',
          background: color,
        }}
      />
      <div
        style={{
          width: 0,
          borderTop: `${triH}px solid ${color}`,
          borderRight: `${triW}px solid transparent`,
          borderLeft: `${triW}px solid transparent`,
        }}
      />
      <FlexContainer
        $direction='column'
        style={{
          width: `${boxW}px`,
          height: `${tHeight}px`,
          position: 'absolute',
          justifyContent: 'center',
          alignItems: 'center',
          ...(childStyle || {}),
        }}
      >
        {children}
      </FlexContainer>
    </FlexContainer>
  )
}

export interface HexBadgePropsT extends HexagonPropsT {
  rotate?: boolean
}
export const HexBadge = (props: HexBadgePropsT) => {
  const { color, size, style, children, childStyle, rotate = false } = props
  const angle = rotate ? 30 : 0
  return (
    <div
      style={{
        transform: `rotateY(0deg) rotate(-${angle}deg)`,
        ...(style || {}),
      }}
    >
      <Hexagon size={size} color={Theme.darkBgColorSolid}>
        <Hexagon size={size - 4} color={Theme.lightBgColor}>
          <Hexagon size={size - 6} color={Theme.darkBgColorSolid}>
            <Hexagon
              size={size - 8}
              color={color}
              childStyle={{
                fontFamily: Theme.titleFont,
                color: 'white',
                fontSize: `${size - 16}px`,
                paddingTop: 2,
                transform: `rotateY(0deg) rotate(${angle}deg)`,
                ...(childStyle || {}),
              }}
            >
              {children}
            </Hexagon>
          </Hexagon>
        </Hexagon>
      </Hexagon>
    </div>
  )
}

export interface HoverBadgePropsT {
  children: JSX.Element | string | number
  content: JSX.Element
  direction?: 'up' | 'down' | 'left' | 'right'
  style?: CSSProperties
  childStyle?: CSSProperties
  size?: number
  rotate?: boolean
  position?: {
    top?: number
    bottom?: number
    left?: number
    right?: number
  }
}
export const HoverHexBadge = (props: HoverBadgePropsT) => {
  const {
    children,
    content,
    direction,
    style,
    childStyle,
    size,
    rotate,
    position,
  } = props
  return (
    <div
      style={{
        position: position ? 'absolute' : 'relative',
        top: position?.top,
        bottom: position?.bottom,
        left: position?.left,
        right: position?.right,
        zIndex: 4,
      }}
    >
      <HoverToolTip
        distance={2}
        direction={direction || 'right'}
        content={content || <div />}
      >
        <HexBadge
          style={style}
          rotate={rotate}
          childStyle={childStyle}
          size={size || 20}
          color={Theme.badgeBgColor}
        >
          {children}
        </HexBadge>
      </HoverToolTip>
    </div>
  )
}
