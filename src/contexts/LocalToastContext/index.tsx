import React, { useContext, useState, useEffect, useRef, useMemo } from 'react'
import { useSpring, animated, useTransition } from 'react-spring'
import { FullContainer } from '../../elements/flex'
import { v4 } from 'uuid'

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
  const [queue, setQueue] = useState<
    {
      id: string
      content: JSX.Element
    }[]
  >([])

  useEffect(() => {
    const i = setInterval(() => {
      setQueue((q) => {
        const [f, ...rest] = q
        return rest || []
      })
    }, 3000)
    return () => {
      clearInterval(i)
    }
  }, [])

  const push = (c: JSX.Element, type?: string) => {
    setQueue((q) => [
      ...q,
      {
        id: v4(),
        content: c,
        type,
      },
    ])
  }

  return (
    <LocalToastContext.Provider value={{ push }}>
      <>
        <div style={{ position: 'relative' }}>
          <Toast queue={queue} />
        </div>
        {children}
      </>
    </LocalToastContext.Provider>
  )
}

interface ToastQT {
  id: string
  type?: string
  content: JSX.Element
}
export interface ToastPropsT {
  queue: ToastQT[]
}
export const Toast = (props: ToastPropsT) => {
  const { queue } = props
  const hasChildren = queue.length > 0
  const rootStyle = useSpring({
    top: hasChildren ? -40 : 0,
    opacity: hasChildren ? 1 : 0,
  })
  const style = useTransition(queue, (q) => q.id, {
    from: { transform: 'translate3d(0,40px,0)', maxWidth: 0 },
    enter: { transform: 'translate3d(0,0px,0)', maxWidth: 120 },
    leave: { transform: 'translate3d(0,40px,0)', maxWidth: 0 },
  })
  console.log(style.map((i) => i.item.type))
  return (
    <animated.div
      style={{
        ...rootStyle,
        position: 'absolute',
        width: '100%',
        display: 'flex',
        height: 40,
        overflow: 'hidden',
      }}
    >
      {style.map((item) => (
        <animated.div
          key={item.key}
          style={{
            display: 'flex',
            ...item.props,
          }}
        >
          <FullContainer />
          <div
            style={{
              padding: 8,
              background: item.item.type === 'good' ? '#446e3f' : '#d4574e',
              border: '1px solid white',
              color: 'white',
              boxShadow: '2px 2px 5px black',
              fontWeight: 'bolder',
              marginBottom: 4,
              marginRight: 4,
              whiteSpace: 'nowrap',
              textShadow: '1px 1px 1px black',
            }}
          >
            {item.item.content}
          </div>
          <FullContainer />
        </animated.div>
      ))}
    </animated.div>
  )
}

export interface LocalToastRpPropsT {
  children: (props: LocalToastContextT) => JSX.Element
}
export const LocalToastRp = (props: LocalToastRpPropsT) => {
  const { children } = props
  const [queue, setQueue] = useState<ToastQT[]>([])

  const push = (c: JSX.Element, type?: string) => {
    setQueue((q) => [
      ...q,
      {
        id: v4(),
        content: c,
        type,
      },
    ])
    setTimeout(() => {
      setQueue((q) => {
        const [f, ...rest] = q
        return rest || []
      })
    }, 4000)
  }
  return (
    <>
      <div style={{ position: 'relative' }}>
        <Toast queue={queue} />
      </div>
      {children({ push })}
    </>
  )
}
