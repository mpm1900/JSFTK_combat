import { GaugePropsT } from '.'
import React, { useState, useEffect } from 'react'
import { BoxContainer } from '../../elements/box'
import { Spring } from 'react-spring/renderprops'
import { FullContainer } from '../../elements/flex'

export const Gauge2 = (props: GaugePropsT) => {
  const { name = '', value, color, height = 30, children, style } = props
  const max = props.max < 1 ? 1 : props.max
  const p = (value / max) * 100
  const percentage = p > 100 ? 100 : p
  const [oldPercentage, setOldPercentage] = useState(percentage)
  useEffect(() => {
    setOldPercentage(percentage)
  }, [percentage])
  return (
    <BoxContainer
      style={{ borderLeft: 'none', ...(style || {}) }}
      substyle={{
        padding: 0,
        background: 'rgba(80,80,85,1)',
        height: height - 2,
        position: 'relative',
        border: 'none',
      }}
    >
      <Spring
        from={{ value: oldPercentage || 0 }}
        to={{ value: percentage }}
        config={{ friction: 200, mass: 4, tension: 600 }}
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
              backgroundColor: 'rgba(255,255,255,0.5)',
            }}
          ></div>
        )}
      </Spring>
      <div
        style={{
          position: 'absolute',
          left: 0,
          boxSizing: 'border-box',
          height: height - 2,
          maxWidth: `${percentage}%`,
          minWidth: `${percentage}%`,
          boxShadow: 'inset 0px 0px 1px rgba(0,0,0,0.5)',
          textShadow: '1px 1px 3px black',
          backgroundColor: color,
        }}
      ></div>
      <FullContainer
        style={{
          position: 'absolute',
          height,
          lineHeight: `${height - 2}px`,
          right: 4,
          top: 0,
          fontSize: 12,
          overflow: 'hidden',
          textShadow: '0px 0px 3px black',
          color: 'rgba(255,255,255,0.8)',
        }}
      >
        <div>{children}</div>
      </FullContainer>
    </BoxContainer>
  )
}
