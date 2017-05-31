import { combineReducers } from 'redux'

import { STATEFUL_NEXT_STATE } from '../actions';

import { statefulReducerCreator } from './stateful.reducer.creator';

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

const menu = [
  {
    id: 'menu: inner-product extractor',
    defaultState: 'active'
  }
];

const toggles = [
  {
    id: 'record'
  },
].concat(menu);

let reducers = toggles.reduce((acc, {id, defaultState}) => {
  return Object.assign(acc, {[id]: toggleReducerCreator(id, defaultState)});
}, {})
export default combineReducers(reducers);
