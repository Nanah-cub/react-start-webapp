import { CHANGE_DISTRICT } from '../constants/app-constants';

export default (state = {}, action) => {
  switch (action.type) {
    case CHANGE_DISTRICT:
      if (action.district === state.district) {
        return {
          ...state,
          district: null
        };
      }
      return {
        ...state,
        district: action.district
      };
    default:
      return state;
  }
};
