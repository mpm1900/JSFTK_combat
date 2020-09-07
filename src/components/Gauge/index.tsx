import React, { CSSProperties } from 'react'
import { BoxContainer } from '../../elements/box'
import { FullContainer } from '../../elements/flex'
import { HoverToolTip } from '../Tooltip'
import { Monodiv } from '../../elements/monospace'
import { noneg } from '../../util'
import { CHARACTER_XP_MAX } from '../../objects/Character'
import { usePrevious } from '../../hooks/usePrevious'
import { Spring } from 'react-spring/renderprops'
import { tProcessedCharacter } from '../../game/Character/type'

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
  const { name = '', value, max, color, height = 30, children } = props
  const p = (value / max) * 100
  const percentage = p > 100 ? 100 : p
  const oldPercentage = usePrevious(percentage)
  return (
    <HoverToolTip
      direction='right'
      content={<BoxContainer>{`${name} (${value} / ${max})`}</BoxContainer>}
    >
      <BoxContainer
        style={{ borderLeft: 'none' }}
        substyle={{
          padding: 0,
          background: '#555',
          height: height - 2,
          position: 'relative',
          borderColor: '1px rgba(255,255,255,0.3)',
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
}
export const HealthGauge = (props: HealthGaugePropsT) => {
  const { character, height = 12 } = props
  const health = noneg(character.health)
  return (
    <Gauge
      name='Health'
      color='#8f4e4d'
      max={character.health}
      value={health}
      height={height}
    >
      {health}/{character.health}
    </Gauge>
  )
}
export interface XPGaugePropsT {
  character: tProcessedCharacter
}
export const XPGauge = (props: HealthGaugePropsT) => {
  const { character } = props
  const value = character.experience
  const max = CHARACTER_XP_MAX[character.level]
  return (
    <Gauge name='XP' color='#5e8575' max={max} value={value} height={12}>
      {value}/{max}
    </Gauge>
  )
}
