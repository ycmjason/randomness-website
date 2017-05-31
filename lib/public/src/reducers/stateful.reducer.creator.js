import { combineReducers } from 'redux'

import { STATEFUL_NEXT_STATE } from '../actions';

/* states shape:
 *   [
 *     {
 *       name: String,
 *       nextState: props.states[i].name
 *     }
 *   ]
 */

const getState = (states, stateName) => states.filter(({name}) => stateName === name)[0];
export const statefulReducerCreator = (id, states, defaultState) => (state = getState(states, defaultState), action) => {
  if(action.id !== id) return state;

  switch(action.type){
    case STATEFUL_NEXT_STATE:
      return getState(states, state.nextState);
  }
  return state;
}

export const toggleReducerCreator = (id, defaultState='inactive') => statefulReducerCreator(id, toggleStates, defaultState);
