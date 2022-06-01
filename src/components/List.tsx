import React from 'react';
import { isState as props } from '../App';
import { inputProps } from './AddToList';

export interface iProps {
  people: props['people'];
  setPeople: React.Dispatch<React.SetStateAction<props['people']>>;
  setInput: React.Dispatch<React.SetStateAction<inputProps['input']>>;
}

const List: React.FC<iProps> = ({ people, setPeople, setInput }) => {
  const deleteData = (indexData: number): void => {
    const filtered = people.filter((person, index) => index !== indexData);
    setPeople(filtered);
  };
  console.log(people);

  const updateData = (index: number) => {
    setInput({
      id: people[index].id,
      name: people[index].name,
      age: people[index].age,
      url: people[index].url,
      info: people[index].info,
    });
  };

  const listComponent = (): JSX.Element[] => {
    return people.map((person, index) => {
      return (
        <li className="List" key={index}>
          <div className="List-header">
            <img className="List-img" src={person.url} />
            <h2>{person.name}</h2>
          </div>
          <p>{person.age} years old</p>
          <p className="List-note">{person.info}</p>
          <button onClick={deleteData.bind(this, index)}>DELETE </button>
          <button onClick={updateData.bind(this, index)}>edit </button>
        </li>
      );
    });
  };

  return (
    <>
      <ul>{listComponent()}</ul>
    </>
  );
};

export default List;
