import React, { useContext, useReducer, useMemo, CSSProperties } from 'react'
import Modal from 'react-modal'
import { actions, reducer, initialState, ModalContextStateT } from './reducer'

const overlayStyles = () => ({
  zIndex: 700,
})
const contentStyles = (styles: CSSProperties): CSSProperties => ({
  width: '50vw',
  maxHeight: 'calc(100vh - 128px)',
  marginLeft: 'auto',
  marginRight: 'auto',
  ...styles,
})

export interface ModalContextT {
  open: (
    contents?: JSX.Element,
    style?: CSSProperties,
    blocking?: boolean,
    callback?: (payload?: any) => void,
  ) => void
  close: (payload?: any) => void
  setPayload: (payload: any) => void
  setBlocking: (blocking: boolean) => void
  setContents: (contents: JSX.Element) => void
  setCallback: (callback: (payload?: any) => void) => void
  setStyle: (style: CSSProperties) => void
}
const defaultContext: ModalContextT = {
  open: () => null,
  close: () => null,
  setBlocking: () => null,
  setPayload: () => null,
  setContents: () => null,
  setCallback: () => null,
  setStyle: () => null,
}
export const ModalContext = React.createContext<ModalContextT>(defaultContext)
export const useModalContext = () => useContext(ModalContext)

const getContextValue = (
  state: ModalContextStateT,
  dispatch: React.Dispatch<any>,
) => ({
  isOpen: state.isOpen,
  open: (
    contents?: JSX.Element,
    style?: CSSProperties,
    blocking?: boolean,
    callback?: (payload?: any) => void,
  ) => {
    dispatch(actions.open(contents, style, blocking, callback))
  },
  close: (payload?: any) => {
    if (state.callback) state.callback(payload || state.payload)
    dispatch(actions.close())
  },
  setPayload: (payload: any) => dispatch(actions.setPayload(payload)),
  setContents: (contents: JSX.Element) =>
    dispatch(actions.setContents(contents)),
  setCallback: (callback: (payload?: any) => void) =>
    dispatch(actions.setCallback(callback)),
  setBlocking: (blocking: boolean) => dispatch(actions.setBlocking(blocking)),
  setStyle: (style: CSSProperties) => dispatch(actions.setStyle(style)),
})

export interface ModalContextProviderPropsT {
  children: JSX.Element
}
export const ModalContextProvider = (props: ModalContextProviderPropsT) => {
  const { children } = props
  const reducerValue = useReducer(reducer, initialState)
  const [state] = reducerValue
  const context = useMemo(() => getContextValue(...reducerValue), [
    reducerValue,
  ])

  return (
    <ModalContext.Provider value={context}>
      {children}
      <Modal
        isOpen={state.isOpen}
        onRequestClose={() => {
          if (!state.blocking) context.close()
        }}
        style={{
          content: {
            backgroundColor: '#111',
            color: 'white',
            width: 400,
            margin: '0 auto',
            bottom: 'unset',
            borderColor: '#555',
          },
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
          },
        }}
      >
        {state.contents || <div />}
      </Modal>
    </ModalContext.Provider>
  )
}
