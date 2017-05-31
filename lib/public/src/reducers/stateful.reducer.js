import { combineReducers } from 'redux'

import { STATEFUL_NEXT_STATE } from '../actions';

import { set } from '../utils/immutable';

import { toggle_ids } from '../components/ToggleButton';

const getState = (states, stateName) => states.filter(({name}) => stateName === name)[0];


/* states shape:
 *   [
 *     {
 *       name: String,
 *       nextState: props.states[i].name
 *     }
 *   ]
 */

const statefulReducerCreator = (id, states, defaultState) => (state = getState(states, defaultState), action) => {
  if(action.id !== id) return state;

  switch(action.type){
    case STATEFUL_NEXT_STATE:
      return getState(states, state.nextState);
  }
  return state;
}

const toggleStates = [
  {
    name: 'active',
    nextState: 'inactive'
  },
  {
    name: 'inactive',
    nextState: 'active'
  },
];
export const toggleReducerCreator = (id, defaultState='inactive') => statefulReducerCreator(id, toggleStates, defaultState);

export default combineReducers({
  toggles: combineReducers(toggle_ids.reduce((acc, id) => Object.assign(acc, {[id]: toggleReducerCreator(id)}), {})),
});
