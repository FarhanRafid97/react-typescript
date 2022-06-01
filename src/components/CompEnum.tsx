import React, { FC } from 'react';

export enum Level {
  ADMIN = 'you are adimn',
  USER = 'you are user',
  CREATOR = 'you are creator',
}
interface iProps {
  level: Level;
}
const CompEnum: FC<iProps> = ({ level }) => {
  return <div>{level}</div>;
};

export default CompEnum;
