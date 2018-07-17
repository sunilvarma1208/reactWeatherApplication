import { clonedeep } from 'loadash'
import createReducer from './createReducer'

const defaultState = {
  value : 'hyderabad'
}

function updateWeatherInformation(defaultState, o) {
  state = clonedeep(state)
  state.value = o.payload.value
  }

const actionHandlers = {
  update_Weather_information : updateWeatherInformation
};

export default createReducer(state,actionHandlers);
