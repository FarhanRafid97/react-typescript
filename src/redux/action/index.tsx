import { ActionType } from '../actionTypes';

interface withdrawAndDepo {
  type: ActionType.WITHDRAW | ActionType.DEPOSITE;
  payload: number;
}

interface Bankrupt {
  type: ActionType.BANKRUPT;
}
export type Action = withdrawAndDepo | Bankrupt;
