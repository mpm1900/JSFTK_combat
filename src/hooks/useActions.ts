import { useMemo } from 'react'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'

export const useActions = (actions: any, deps?: any[]) => {
  const dispatch = useDispatch()
  return useMemo(
    () => bindActionCreators(actions, dispatch),
    deps ? [dispatch, ...deps] : [dispatch],
  )
}
