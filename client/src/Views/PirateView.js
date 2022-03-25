import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import PirateInfo from '../Components/PirateInfo'
import TopNavBar from '../Components/TopNavBar';

const PirateView = (props) => {   
    const [pirate, setPirate] = useState({})
    const [loaded, setLoaded] = useState(false);
    const { id } = useParams();

    useEffect(() => {
        axios.get('http://localhost:8000/api/pirates/'+id)
            .then(res => {
                setPirate(res.data.pirate);
                setLoaded(true);
            })
            .catch(err => console.error(err));
    }, [id]);

    return(
        <div>
            <TopNavBar title={pirate.name}/>
            {loaded && <PirateInfo pirate={pirate}/>}
        </div>
    )
}

export default PirateView;