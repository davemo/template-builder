import { createSelector } from 'redux-bundler'

export default {
  name: 'baseData',
  getReducer: () => {
    const initialState = {
      goats: true
    }
    return (state = initialState, {type, payload}) => {
      return state
    }
  },
  selectBaseData: state => state.baseData
}
