import React, { CSSProperties } from 'react'
import { BoxContainer } from '../../elements/box'
import { FullContainer } from '../../elements/flex'
import { HoverToolTip } from '../Tooltip'
import { Monodiv } from '../../elements/monospace'
import { noneg } from '../../util'
import { usePrevious } from '../../hooks/usePrevious'
import { Spring } from 'react-spring/renderprops'
import { tProcessedCharacter } from '../../game/Character/type'
import { CHARACTER_XP_MAX } from '../../game/Character/constants'
import { Gauge2 } from './v2'
import { Theme } from '../../theme'

export interface GaugePropsT {
  name?: string
  color: string
  height?: number
  max: number
  value: number
  style?: CSSProperties
  children?: React.ReactNode | React.ReactNode[]
}
export const Gauge = (props: GaugePropsT) => {
  const { name = '', value, color, height = 30, children, style } = props
  const max = props.max < 1 ? 1 : props.max
  const p = (value / max) * 100
  const percentage = p > 100 ? 100 : p
  const oldPercentage = usePrevious(percentage)
  return (
    <HoverToolTip
      direction='right'
      content={<BoxContainer>{`${name} (${value} / ${max})`}</BoxContainer>}
    >
      <BoxContainer
        style={{ borderLeft: 'none', ...(style || {}) }}
        substyle={{
          padding: 0,
          background: Theme.lightBgColor,
          height: height - 2,
          position: 'relative',
          border: 'none',
        }}
      >
        <Spring
          from={{ value: oldPercentage || 0 }}
          to={{ value: percentage }}
          config={{ friction: 70, mass: 5, tension: 300 }}
        >
          {(p) => (
            <div
              style={{
                position: 'absolute',
                left: 0,
                boxSizing: 'border-box',
                height: height - 2,
                maxWidth: `${p.value}%`,
                minWidth: `${p.value}%`,
                boxShadow: 'inset 0px 0px 1px rgba(0,0,0,0.5)',
                textShadow: '1px 1px 1px black',
                backgroundColor: color,
                color: 'white',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            ></div>
          )}
        </Spring>
        <FullContainer
          style={{
            position: 'absolute',
            height,
            lineHeight: `${height - 2}px`,
            right: 4,
            top: 0,
            fontSize: 10,
            fontWeight: 'bold',
            overflow: 'hidden',
            textShadow: '0px 0px 3px black',
          }}
        >
          <Monodiv>{children}</Monodiv>
        </FullContainer>
      </BoxContainer>
    </HoverToolTip>
  )
}

export interface HealthGaugePropsT {
  character: tProcessedCharacter
  height?: number
  style?: CSSProperties
  showNumbers?: boolean
}
export const HealthGauge = (props: HealthGaugePropsT) => {
  const { character, height = 14, style, showNumbers = true } = props
  const health = noneg(character.health)
  return (
    <Gauge2
      name='Health'
      color={Theme.healthRedColor}
      max={character.maxHealth}
      value={health}
      height={height}
      style={style}
    >
      {showNumbers && (
        <span>
          {health}/{character.maxHealth}
        </span>
      )}
    </Gauge2>
  )
}
export interface XPGaugePropsT {
  character: tProcessedCharacter
  style?: CSSProperties
  showNumber?: boolean
}
export const XPGauge = (props: HealthGaugePropsT) => {
  const { character, style } = props
  const value = character.experience
  const max = CHARACTER_XP_MAX[character.level]
  return (
    <Gauge2
      name='XP'
      color='#5e8575'
      max={max}
      value={value}
      height={14}
      style={style}
    >
      {value}/{max}
    </Gauge2>
  )
}
