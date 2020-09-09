import { tStatusType, tStatus } from './type'
import { STATUS_CONFIG } from './constants'

export const mapTypeToStatus = (type: tStatusType): tStatus => ({
  type,
  ...STATUS_CONFIG[type],
  stack: 1,
})
