import { useSelector } from 'react-redux'
import { StateCoreT, StateActionT, StateT } from '../types'
import { Dispatch } from 'redux'
import { makeReducer } from '../util'
import { useActions } from '../../hooks/useActions'
import { tParty } from '../../game/Party/type'
import { checkForProcessedParty, updateCharacter } from '../../game/Party/util'
import { tCharacter } from '../../game/Character/type'
import { makeCharacter, addMultipleStatus } from '../../game/Character/util'
import { PLAYER_PARTY_ID } from '../../game/Party/constants'
import { tArmor } from '../../game/Armor/type'
import { tWeapon } from '../../game/Weapon/type'
import { ALL_WEAPONS } from '../../game/Weapon/builders/objects'
import { getRandomItem } from '../../game/Item/util'
import { ARMOR_BY_LEVEL } from '../../game/Armor/builders/sets'

export const UPDATE_PARTY = '@actions/parties/set-party'
export const UPSERT_CHARACTER = '@actions/parties/upsert-character'
export const DELETE_CHARACTER = '@actions/parties/delete-character'
export const UPSERT_ITEM = '@actions/parties/upsert-item'
export const SET_GOLD = '@actions/parties/set-gold'

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
  upsertItem: (item: tArmor | tWeapon): StateActionT => {
    return {
      type: UPSERT_ITEM,
      payload: {
        item,
      },
    }
  },
  setGold: (gold: number): StateActionT => {
    return {
      type: SET_GOLD,
      payload: {
        gold,
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
  upsertItem: (item: tArmor | tWeapon) => (dispatch: Dispatch) => {
    dispatch(actionCreators.upsertItem(item))
  },
  setGold: (gold: number) => (dispatch: Dispatch) => {
    dispatch(actionCreators.setGold(gold))
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
  [UPSERT_ITEM]: (state, action) => {
    return {
      ...state,
      items: [
        ...state.items.filter((item) => item.id !== action.payload.item.id),
        action.payload.item,
      ],
    }
  },
  [SET_GOLD]: (state, action) => {
    return {
      ...state,
      gold: action.payload.gold,
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
    addMultipleStatus(
      {
        ...jack,
        // healthOffset: 30,
      },
      [
        /*
        'frozen',
        'bleeding',
        'burning',
        'poisoned',
        'stunned',
        'speed-down',
        'targeted',
        'evasive',
        'armor-down',
        */
      ],
    ),
    {
      ...jim,
      //healthOffset: 30
    },
    {
      ...john,
      //healthOffset: 30
    },
  ],
}
export default makeReducer(core, INITIAL_STATE)
export const useParty = () => useSelector((state: StateT) => state.party)
export const usePartyActions = () =>
  useActions(actions) as {
    updateParty: (party: tParty) => void
    upsertCharacter: (character: tCharacter) => void
    deleteCharacter: (characterId: string) => void
    upsertItem: (item: tArmor | tWeapon) => void
    setGold: (gold: number) => void
  }
