import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface JsonData {
  user: string;
}
const DataJson = () => {
  const [dataJson, setDataJson] = useState<string[]>([]);

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then((data) => setDataJson(data.data));
  }, []);
  console.log(dataJson);
  return <div>DataJson</div>;
};

export default DataJson;
