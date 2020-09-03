import { ModalStylesT } from '.'

export interface ModalContextStateT {
  isOpen: boolean
  contents: JSX.Element | null
  callback: ((payload?: any) => void) | null
  payload: any | null
  blocking: boolean
  styles: ModalStylesT
}
export const initialState: ModalContextStateT = {
  isOpen: false,
  contents: null,
  callback: null,
  payload: null,
  blocking: false,
  styles: {},
}

export const OPEN = 'modalContext/OPEN'
export const CLOSE = 'modalContext/CLOSE'
export const SET_CONTENTS = 'modalContext/SET_CONTENTS'
export const SET_CALLBACK = 'modalContext/SET_CALLBACK'
export const SET_PAYLOAD = 'modalContext/SET_PAYLOAD'
export const SET_BLOCKING = 'modalContext/SET_BLOCKING'
export const SET_STYLE = 'modalContext/SET_STYLE'

export const actions = {
  open: (
    contents?: JSX.Element,
    styles?: ModalStylesT,
    blocking?: boolean,
    callback?: (payload?: any) => void,
  ) => ({
    type: OPEN,
    contents,
    styles,
    blocking,
    callback,
  }),
  close: () => ({ type: CLOSE }),
  setPayload: (payload: any) => ({ type: SET_PAYLOAD, payload }),
  setContents: (contents: JSX.Element | null) => ({
    type: SET_CONTENTS,
    contents,
  }),
  setCallback: (callback: (() => void) | null) => ({
    type: SET_CALLBACK,
    callback,
  }),
  setBlocking: (blocking: boolean) => ({ type: SET_BLOCKING, blocking }),
  setStyles: (styles: ModalStylesT) => ({ type: SET_STYLE, styles }),
}

const core: Record<
  string,
  (state: ModalContextStateT, action: any) => ModalContextStateT
> = {
  [OPEN]: (state: ModalContextStateT, action: any) => ({
    ...state,
    isOpen: true,
    contents: action.contents ? action.contents : state.contents,
    styles: action.styles ? action.styles : state.styles || {},
    blocking: action.blocking || false,
    callback: action.callback ? action.callback : state.callback,
  }),
  [CLOSE]: (state: ModalContextStateT) => ({
    ...state,
    isOpen: false,
  }),
  [SET_PAYLOAD]: (state: ModalContextStateT, action: any) => ({
    ...state,
    payload: action.payload,
  }),
  [SET_CONTENTS]: (state: ModalContextStateT, action: any) => ({
    ...state,
    callback: null,
    payload: null,
    contents: action.contents,
    blocking: false,
    style: {},
  }),
  [SET_CALLBACK]: (state: ModalContextStateT, action: any) => ({
    ...state,
    callback: action.callback,
  }),
  [SET_BLOCKING]: (state: ModalContextStateT, action: any) => ({
    ...state,
    blocking: action.blocking,
  }),
  [SET_STYLE]: (state: ModalContextStateT, action: any) => ({
    ...state,
    styles: action.styles,
  }),
}

export const reducer = (
  state: ModalContextStateT = initialState,
  action: any,
) => {
  const coreFunction = core[action.type]
  return coreFunction ? coreFunction(state, action) : state
}
