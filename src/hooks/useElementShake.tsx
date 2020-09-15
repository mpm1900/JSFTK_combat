import { AnimatedValue, useSpring } from 'react-spring'

const springConfig = {
  mass: 3,
  tension: 1500,
  friction: 30,
}
const from = {
  transform: 'translate3d(0px, 0px, 0px)',
}
const to = {
  transform: 'translate3d(80px, 0px, 0px)',
}

export const useElementShake = () => {
  const [shakeStyles, dispatch] = useSpring(() => ({
    to: async (next: Function) => {
      next(to)
    },

    config: springConfig,
    from,
    immediate: true,
    reset: true,
    reverse: true,
  }))

  const exec = () => {
    dispatch({
      ...to,
      config: springConfig,
      from,
      immediate: false,
      reset: true,
      reverse: true,
    } as any)
  }

  return { styles: shakeStyles, exec }
}
