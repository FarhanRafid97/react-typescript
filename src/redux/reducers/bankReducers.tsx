import { ActionType } from '../actionTypes';
import { Action } from '../action';

const bankReducers = (state: number = 0, action: Action) => {
  switch (action.type) {
    case ActionType.DEPOSITE:
      return state + action.payload;
    case ActionType.WITHDRAW:
      if (state - action.payload < 0) {
        return 0;
      } else {
        return state - action.payload;
      }
    case ActionType.BANKRUPT:
      return 0;
    default:
      return state;
  }
};
export default bankReducers;
