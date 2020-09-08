import { useSelector } from 'react-redux'
import { StateCoreT, StateActionT, StateT } from '../types'
import { Dispatch } from 'redux'
import { makeReducer } from '../util'
import { useActions } from '../../hooks/useActions'
import { tParty } from '../../game/Party/type'
import { checkForProcessedParty, updateCharacter } from '../../game/Party/util'
import { tCharacter } from '../../game/Character/type'
import { makeCharacter } from '../../game/Character/util'
import { PLAYER_PARTY_ID } from '../../game/Party/constants'

export const UPDATE_PARTY = '@actions/parties/set-party'
export const UPSERT_CHARACTER = '@actions/parties/upsert-character'
export const DELETE_CHARACTER = '@actions/parties/delete-character'
export const UPSERT_ITEM = '@actions/parties/upsert-item'
export const DELETE_ITEM = '@actions/parties/delete-item'
export const UPSERT_MOD = '@actions/parties/upsert-mod'
export const DELETE_MOD = '@actions/parties/delete-mod'

export const actionCreators = {
  updateParty: (party: tParty): StateActionT => {
    return {
      type: UPDATE_PARTY,
      payload: {
        party,
      },
    }
  },
  upsertCharacter: (character: tCharacter): StateActionT => {
    return {
      type: UPSERT_CHARACTER,
      payload: {
        character,
      },
    }
  },
  deleteCharacter: (characterId: string): StateActionT => {
    return {
      type: DELETE_CHARACTER,
      payload: {
        characterId,
      },
    }
  },
}

export const actions = {
  updateParty: (party: tParty) => (dispatch: Dispatch) => {
    checkForProcessedParty(party)
    dispatch(actionCreators.updateParty(party))
  },
  upsertCharacter: (character: tCharacter) => (dispatch: Dispatch) => {
    dispatch(actionCreators.upsertCharacter(character))
  },
  deleteCharacter: (characterId: string) => (dispatch: Dispatch) => {
    dispatch(actionCreators.deleteCharacter(characterId))
  },
}

export const core: StateCoreT<tParty> = {
  [UPDATE_PARTY]: (state, action) => {
    return {
      ...action.payload.party,
    }
  },
  [UPSERT_CHARACTER]: (state, action) => {
    return updateCharacter(
      state,
      action.payload.character.id,
      (c) => action.payload.character,
    )
  },
  [DELETE_CHARACTER]: (state, action) => {
    return {
      ...state,
      characters: state.characters.filter(
        (c) => c.id !== action.payload.characterId,
      ),
    }
  },
}
const jack = { ...makeCharacter('blacksmith'), name: 'Jack' }
const jim = { ...makeCharacter('bard'), name: 'Jim' }
const john = { ...makeCharacter('scholar'), name: 'Johnny' }
export const INITIAL_STATE: tParty = {
  isParty: true,
  id: PLAYER_PARTY_ID,
  items: [],
  gold: 0,
  characters: [
    {
      ...jack,
      healthOffset: 30,
    },
    { ...jim, healthOffset: 30 },
    { ...john, healthOffset: 30 },
  ],
}
export default makeReducer(core, INITIAL_STATE)
export const useParty = () => useSelector((state: StateT) => state.party)
export const usePartyActions = () =>
  useActions(actions) as {
    updateParty: (party: tParty) => void
    upsertCharacter: (character: tCharacter) => void
    deleteCharacter: (characterId: string) => void
  }
