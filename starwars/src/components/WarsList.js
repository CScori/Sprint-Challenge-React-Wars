import React, {useState, useEffect} from 'react';
import axios from 'axios';
import WarsCard from './WarsCard';

const WarsList = () => {
    const [char, setChar] = useState([]);

    // useEffect(() => {
    //     axios
    //     .get('https://swapi.co/api/people/')
    //     .then(res => {
    //       console.log(res.data.results)
    //       const chars = res.data.response
    //       setChar(chars)
    //       console.log('set character return', chars)
    //     })
    //     .catch(error => {
    //       console.error('Server Error', error);
    //     })
    // }, []);

    return (
        <div>
            <div>
            {char.map(data => {
                return <WarsCard key={data.id}
                name={data.name}
                height={data.height}
                hair={data.hair_color}
                eyes={data.eye_color}
                sex={data.gender}
                born={data.bith_year}
                
                
                />
            })} 
            </div>
        </div>
    )
}

export default WarsList
