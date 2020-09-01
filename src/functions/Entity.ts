import { v4 } from 'uuid'

export const makeEntity = (name: string = '') => ({
  id: v4(),
  name,
})
