import React, { useContext, useState, useEffect, useRef, useMemo } from 'react'
import { useSpring, animated, useTransition } from 'react-spring'
import { FullContainer } from '../../elements/flex'

export interface LocalToastContextT {
  push: (content: JSX.Element) => void
}
export const defaultValue: LocalToastContextT = {
  push: (content) => {},
}
export const LocalToastContext = React.createContext<LocalToastContextT>(
  defaultValue,
)
export const useLocalToast = () => useContext(LocalToastContext)

export interface LocalToastProviderProps {
  children: JSX.Element
}
export const LocalToastProvider = (props: LocalToastProviderProps) => {
  const { children } = props
  const [queue, setQueue] = useState<JSX.Element[]>([])
  const [contents, setContents] = useState<JSX.Element | undefined>()
  const [showToast, setShowToast] = useState<boolean>()
  let ref = useRef<NodeJS.Timeout>()

  useEffect(() => {
    const i = setInterval(() => {
      setQueue((q) => {
        const [f, ...rest] = q
        return rest || []
      })
    }, 2000)
    return () => {
      clearInterval(i)
    }
  }, [])

  const push = (c: JSX.Element) => {
    setQueue((q) => [...q, c])
  }

  return (
    <LocalToastContext.Provider value={{ push }}>
      <>
        <div style={{ position: 'relative' }}>
          <Toast children={queue} />
        </div>
        {children}
      </>
    </LocalToastContext.Provider>
  )
}

export interface ToastPropsT {
  children: JSX.Element[]
}
export const Toast = (props: ToastPropsT) => {
  const { children } = props
  //const children = useMemo(() => props.children, [])
  const style = useTransition(props.children, null, {
    enter: { top: -40, opacity: 1 },
    leave: { top: 0, opacity: 0 },
    from: { top: 0, opacity: 0 },
  })
  return (
    <>
      {style.map((item) => (
        <animated.div
          key={item.key}
          style={{
            position: 'absolute',
            width: '100%',
            display: 'flex',
            ...item.props,
          }}
        >
          <FullContainer />
          <div
            style={{
              padding: 8,
              background: 'rgba(157,0,0,1)',
              border: '1px solid white',
              color: 'white',
              boxShadow: '2px 2px 5px black',
              fontWeight: 'bolder',
            }}
          >
            {item.item}
          </div>
          <FullContainer />
        </animated.div>
      ))}
    </>
  )
}
