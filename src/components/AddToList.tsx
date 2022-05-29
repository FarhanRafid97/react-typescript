import e from 'express';
import React, { useState } from 'react';
import { isState as props } from '../App';
import List from './List';

export interface iProps {
  people: props['people'];
  setPeople: React.Dispatch<React.SetStateAction<props['people']>>;
}

export interface inputProps {
  input: {
    id: number;
    name: string;
    age: number;
    url: string;
    info?: string;
  };
}

const AddToList: React.FC<iProps> = ({ people, setPeople }) => {
  const [input, setInput] = useState<inputProps['input']>({
    id: 0,
    name: '',
    age: 0,
    url: '',
    info: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleClick = () => {
    if (input.id) {
      const index = people.findIndex((person) => person.id === input.id);
      people[index] = {
        ...input,
        name: input.name,
        age: input.age,
        url: input.url,
        info: input.info,
      };
    } else {
      setPeople([
        ...people,
        {
          id: people.length + 1,
          name: input.name,
          age: input.age,
          url: input.url,
          info: input.info,
        },
      ]);
    }

    setInput({ id: 0, name: '', age: 0, url: '', info: '' });
  };
  return (
    <>
      <List people={people} setPeople={setPeople} setInput={setInput} />
      <div className="AddToList">
        <input
          type="text"
          onChange={handleChange}
          className="AddToList-input"
          name="name"
          hidden
          value={input.id}
          placeholder="id"
        />
        <input
          type="text"
          onChange={handleChange}
          className="AddToList-input"
          name="name"
          value={input.name}
          placeholder="Name"
        />
        <input
          type="text"
          onChange={handleChange}
          className="AddToList-input"
          name="age"
          value={input.age}
          placeholder="Age"
        />
        <input
          type="text"
          onChange={handleChange}
          className="AddToList-input"
          name="url"
          value={input.url}
          placeholder="Image Url"
        />
        <textarea
          onChange={handleChange}
          className="AddToList-input"
          name="info"
          value={input.info}
          placeholder="Note"
        />
        <button onClick={handleClick} className="AddToList-btn">
          {input.id > 0 ? 'Update List ' : 'Add to List'}
        </button>
      </div>
    </>
  );
};

export default AddToList;
