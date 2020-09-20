import React, { useState, useEffect } from 'react'
export interface IconPropsT {
  src: string
  size: number
  fill?: string
  style?: React.CSSProperties
  shadow?: boolean
  onClick?: () => void
}
export const Icon = ({
  src,
  size,
  style = {},
  fill = 'white',
  shadow,
  onClick,
}: IconPropsT) => {
  const [loading, setLoading] = useState(true)
  const [svg, setSvg] = useState('')

  useEffect(() => {
    if (src) {
      fetch(src)
        .then((res) => res.text())
        .then((text) => setSvg(text))
        .then(() => setLoading(false))
    }
  }, [src])

  return !loading ? (
    <div
      className={`icon ${shadow ? 'shadow' : ''}`}
      onClick={() => {
        if (onClick) onClick()
      }}
      style={{ ...style, height: size, width: size, fill }}
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  ) : (
    <div />
  )
}

export const RawIcon = (props: IconPropsT) => {
  const { src, size, style = {}, fill = 'white', shadow, onClick } = props
  const [loading, setLoading] = useState(true)
  const [svg, setSvg] = useState('')

  useEffect(() => {
    if (src) {
      fetch(src)
        .then((res) => res.text())
        .then((text) => setSvg(text))
        .then(() => setLoading(false))
    }
  }, [src])

  return <>{loading ? svg : <svg />}</>
}
