import React, { useEffect, useState } from 'react'
import { Spring } from 'react-spring/renderprops'

export interface NumberChangePropsT {
  value: number
}
export const NumberChange = (props: NumberChangePropsT) => {
  const { value } = props
  const [previousValue, setPreviousValue] = useState(value)
  useEffect(() => {
    setPreviousValue(value)
  }, [value])
  return (
    <Spring
      from={{ n: previousValue || 0 }}
      to={{ n: value }}
      config={{ friction: 70, mass: 50, tension: 1500, clamp: true }}
    >
      {(p) => Math.floor(p.n)}
    </Spring>
  )
}
