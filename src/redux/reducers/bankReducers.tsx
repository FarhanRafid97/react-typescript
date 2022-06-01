import { ActionType } from '../actionTypes';
import { Action } from '../action';

const reducer = (state: number = 0, action: Action) => {
  switch (action.type) {
    case ActionType.DEPOSITE:
      return state + action.payload;
    case ActionType.WITHDRAW:
      return state - action.payload;
    case ActionType.BANKRUPT:
      return 0;
    default:
      return state;
  }
};
export default reducer;
