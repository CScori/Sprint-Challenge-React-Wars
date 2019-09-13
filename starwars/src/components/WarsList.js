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
            
        </div>
    )
}

export default WarsList
