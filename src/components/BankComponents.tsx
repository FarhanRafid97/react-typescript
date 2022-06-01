import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators, State } from '../redux';

const BankComponents = () => {
  const dispatch = useDispatch();
  const { bankruptMoney, depositeMoney, withdrawMoney } = bindActionCreators(
    actionCreators,
    dispatch
  );
  const amount = useSelector((state: State) => state.bankReducers);
  const [money, setMoney] = useState(0);
  return (
    <>
      <div>{amount}</div>
      <input value={money} onChange={(e) => setMoney(Number(e.target.value))} />
      <button onClick={() => depositeMoney(money)}>DEPOSITE</button>
      <button onClick={() => withdrawMoney(money)}>DEPOSITE</button>
      <button onClick={() => bankruptMoney()}>DEPOSITE</button>
    </>
  );
};

export default BankComponents;
