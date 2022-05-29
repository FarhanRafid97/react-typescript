import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import List from './components/List';
import AddToList from './components/AddToList';

export interface isState {
  people: {
    id: number;
    name: string;
    age: number;
    url: string;
    info?: string;
  }[];
}

function App() {
  const [people, setPeople] = useState<isState['people']>([
    {
      id: 1,
      name: 'Sumail',
      age: 23,
      url: 'https://pbs.twimg.com/profile_images/1231509067216171008/eOFBPtg1_400x400.jpg',
      info: 'evil geniuse mid laner',
    },
  ]);

  return (
    <div className="App">
      <AddToList people={people} setPeople={setPeople} />
    </div>
  );
}

export default App;
