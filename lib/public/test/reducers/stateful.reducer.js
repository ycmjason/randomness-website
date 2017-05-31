import assert from 'assert';
import { STATEFUL_NEXT_STATE, statefulNextState } from '../../src/actions';
import stateful, { toggleReducerCreator } from '../../src/reducers/stateful.reducer';

import { createStore, combineReducers } from 'redux';

describe('reducers/stateful.reducer', function(){
  describe('toggleReducerCreator', function(){
    it('# default initial state is inactive', function(){
      let store = createStore(toggleReducerCreator('toooogle'));
      assert.equal(store.getState().name, 'inactive');
    });

    it('# initial state can be set to active', function(){
      let store = createStore(toggleReducerCreator('toogle', 'active'));
      assert.equal(store.getState().name, 'active');
    });

    it('# STATEFUL_NEXT_STATE will alter the state', function(){
      let store = createStore(toggleReducerCreator('tbb'));
      store.dispatch({type: STATEFUL_NEXT_STATE, id: 'tbb'});
      assert.equal(store.getState().name, 'active');
    });

    it('# statefulNextState() action creator will alter the state', function(){
      let store = createStore(toggleReducerCreator('t2', 'active'));
      store.dispatch(statefulNextState('t2'));
      assert.equal(store.getState().name, 'inactive');
    });

    it('# statefulNextState() action creator will alter the state', function(){
      let store = createStore(toggleReducerCreator('t2', 'active'));
      store.dispatch(statefulNextState('t2'));
      assert.equal(store.getState().name, 'inactive');
    });

    it('# non-matching id should not alter state', function(){
      let store = createStore(combineReducers({
        t1: toggleReducerCreator('t1', 'inactive'),
        t2: toggleReducerCreator('t2', 'active'),
      }));
      store.dispatch(statefulNextState('t1'));
      assert.equal(store.getState().t1.name, 'active');
      assert.equal(store.getState().t2.name, 'active');
    });
  });

  describe('stateful', function(){
    it('# initial state has record button, and initialised with inactive', function(){
      let store = createStore(stateful);
      assert(store.getState().toggles);
      assert(store.getState().toggles.record);
      assert.equal(store.getState().toggles.record.name, 'inactive');
    });
    it('# dispatching statefulNextState(\'record\') should switch its state', function(){
      let store = createStore(stateful);
      assert(store.getState().toggles);
      assert(store.getState().toggles.record);
      assert.equal(store.getState().toggles.record.name, 'inactive');
    });
  });

});
