import React, {useState, useEffect} from 'react';
import axios from 'axios';
import WarsCard from './WarsCard';

const WarsList = () => {
    const [char, setChar] = useState([]);

    useEffect(() => {
        axios
        .get('https://swapi.co/api/people/')
        .then(res => {
          const chars = res.data.results
          setChar(chars)
          console.log('set character return', chars)
        })
        .catch(error => {
          console.error('Server Error', error);
        })
    }, []);

    return (
        <div>
            {char.map(data => {
                return (
                <WarsCard 
                key={data.id}
                name={data.name}
                height={data.height}
                hair={data.hair_color}
                eyes={data.eye_color}
                sex={data.gender}
                born={data.birth_year}
                
                />
                )
            })} 
        </div>
    )
}

export default WarsList
