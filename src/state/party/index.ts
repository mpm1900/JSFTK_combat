import { useSelector } from 'react-redux'
import { StateCoreT, StateActionT, StateT } from '../types'
import { PartyT, CharacterT } from '../../types'
import { Dispatch } from 'redux'
import { makeReducer } from '../util'
import { useActions } from '../../hooks/useActions'
import {
  updateCharacter,
  makeCharacter,
  checkForProcessedParty,
} from '../../functions'
import { PLAYER_PARTY_ID } from '../../objects/Party'
import { ALL_ARMOR } from '../../objects/armor/index'
import { ALL_WEAPONS } from '../../objects/weapons/index'

export const UPDATE_PARTY = '@actions/parties/set-party'
export const UPSERT_CHARACTER = '@actions/parties/upsert-character'
export const DELETE_CHARACTER = '@actions/parties/delete-character'
export const UPSERT_ITEM = '@actions/parties/upsert-item'
export const DELETE_ITEM = '@actions/parties/delete-item'
export const UPSERT_MOD = '@actions/parties/upsert-mod'
export const DELETE_MOD = '@actions/parties/delete-mod'

export const actionCreators = {
  updateParty: (party: PartyT): StateActionT => {
    return {
      type: UPDATE_PARTY,
      payload: {
        party,
      },
    }
  },
  upsertCharacter: (character: CharacterT): StateActionT => {
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
  updateParty: (party: PartyT) => (dispatch: Dispatch) => {
    checkForProcessedParty(party)
    dispatch(actionCreators.updateParty(party))
  },
  upsertCharacter: (character: CharacterT) => (dispatch: Dispatch) => {
    dispatch(actionCreators.upsertCharacter(character))
  },
  deleteCharacter: (characterId: string) => (dispatch: Dispatch) => {
    dispatch(actionCreators.deleteCharacter(characterId))
  },
}

export const core: StateCoreT<PartyT> = {
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
export const INITIAL_STATE: PartyT = {
  isParty: true,
  id: PLAYER_PARTY_ID,
  name: 'PlayerParty',
  items: [],
  gold: 0,
  characters: [
    {
      ...jack,
    },
    { ...makeCharacter('bard'), name: 'Jim' },
    { ...makeCharacter('scholar'), name: 'Johnny' },
  ],
}
export default makeReducer(core, INITIAL_STATE)
export const useParty = () => useSelector((state: StateT) => state.party)
export const usePartyActions = () =>
  useActions(actions) as {
    updateParty: (party: PartyT) => void
    upsertCharacter: (character: CharacterT) => void
    deleteCharacter: (characterId: string) => void
  }
