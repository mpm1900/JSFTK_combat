import { useMemo } from 'react'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'

export const useActions = (actions: any) => {
  const dispatch = useDispatch()
  return useMemo(() => bindActionCreators(actions, dispatch), [
    dispatch,
    actions,
  ])
}
