import { useSpring } from 'react-spring'

const springConfig = {
  mass: 1,
  tension: 1000,
  friction: 15,
}
const from = () => ({
  transform: `rotate(0deg)`,
})
const to = () => ({
  transform: `rotate(3deg)`,
})

export const useElementShake = () => {
  const [shakeStyles, dispatch] = useSpring(() => ({
    to: async (next: Function) => {
      await next(to())
    },

    config: springConfig,
    from: from(),
    immediate: true,
    reset: true,
    reverse: true,
  }))

  const exec = () => {
    dispatch({
      ...to(),
      config: springConfig,
      from: from(),
      immediate: false,
      reset: true,
      reverse: true,
    } as any)
  }

  return { styles: shakeStyles, exec }
}
