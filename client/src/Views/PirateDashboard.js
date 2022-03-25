import React, {useState, useEffect} from 'react';
import axios from 'axios';

import PirateList from '../Components/PirateList';
import TopNavBar from '../Components/TopNavBar';

const PirateDashboard = (props) => { 
    const [pirates, setPirates] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const [reload, setReload] = useState(false);  

    useEffect(() => {
        console.log('effect');
        axios.get('http://localhost:8000/api/pirates/')
        .then(response=>response.data.pirates.sort((a,b) => (a.name.toLowerCase()>b.name.toLowerCase() ? 1 : -1)))
        .then(response=>{
            setPirates(response);
            setLoaded(true);
            setReload(false);
        })
        .catch(err=>console.error(err))
    },[reload])

    const removeFromDom = (pirateId) => {
        setPirates(pirates.filter(pirate => pirate._id !== pirateId));
    }

    return(
        <div>
            <TopNavBar title='Pirate Crew' />
            {loaded && <PirateList pirates={pirates} remove={removeFromDom} />}
        </div>
    )
}

export default PirateDashboard;