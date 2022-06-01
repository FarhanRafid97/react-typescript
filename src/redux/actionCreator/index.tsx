import { ActionType } from '../actionTypes';
import { Dispatch } from 'redux';
import { Action } from '../action';

export const depositeMoney =
  (amount: number) => (dispatch: Dispatch<Action>) => {
    dispatch({ type: ActionType.DEPOSITE, payload: amount });
  };
export const withdrawMoney =
  (amount: number) => (dispatch: Dispatch<Action>) => {
    dispatch({ type: ActionType.WITHDRAW, payload: amount });
  };
export const bankruptMoney = () => (dispatch: Dispatch<Action>) => {
  dispatch({ type: ActionType.BANKRUPT });
};
