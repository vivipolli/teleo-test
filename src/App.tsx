import React, { useEffect, useState } from 'react';

import './App.css';
import { useQuery } from '@apollo/client';
import { GET_SCREENSHOTS } from './graphql/queries';

const screenshots = [
  {
    id: 1,
    kidName: 'Alice',
    image: 'https://www.habausa.com/cdn/shop/files/new-duck_41890d0e-c379-443d-bbd6-f25d8f146217_1800x.jpg?v=1692124311',
  },
  {
    id: 2,
    kidName: 'Ana',
    image: 'https://www.hss.edu/images/socialmedia/holidaytoys.jpg',
  },
  {
    id: 3,
    kidName: 'John',
    image: 'https://todaysparent.mblycdn.com/tp/resized/2017/11/767x431/how-many-toys-do-kids-really-need-1280x960.jpg',
  },
];

interface Screenshot {
  id: number
  kidName: string
  image: string
}

function App() {
  const { loading, error, data } = useQuery(GET_SCREENSHOTS);
  const [dataList, setDataList] = useState<Screenshot[]>(screenshots);

  useEffect(() => {
    if (data) {
      setDataList(data.screenshot);
    }
  }, [])

  return (
    <div className="App">
      <div>
        <h1>Item List with Screenshots</h1>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <ul style={{ listStyleType: 'none' }}>
            {dataList.map((item: Screenshot) => (
              <li key={item.id}>
                <h2>{item.kidName}</h2>
                <img
                  src={item.image}
                  alt={`Screenshot for ${item.kidName}`}
                  width={150}
                />
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default App;
