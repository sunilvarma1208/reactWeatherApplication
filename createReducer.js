function createReducer (defaultState, handlers){
  return function (state, action){
    state = state || defaultState
    if(handlers.hasOwnProperty(action.type)){
      state = handlers[action.type]
    }
  }
}
