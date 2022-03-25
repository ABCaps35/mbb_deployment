import { Typography } from '@mui/material';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import axios from 'axios';

import PirateForm from '../Components/PirateForm';
import TopNavBar from '../Components/TopNavBar';
import ErrorDisplay from '../Components/ErrorDisplay';

const PirateDashboard = (props) => {   
    const history = useHistory();
    const [errors, setErrors] = useState([]);
    const [errorsFound, setErrorsFound] = useState(false);

    const addPirate = (pirate) => {
        setErrorsFound(false);
        axios.post('http://localhost:8000/api/pirates/add',pirate)
            .then(res=>{
                if(res.data.message==="Something went wrong"){
                    setErrors(res.data.error);
                    setErrorsFound(true);
                }
            })
            .then(res=>history.push('/pirates/'))
            .catch(err=>{console.log(err) })
    }

    return(
        <div>
            <TopNavBar title='Add Pirate'/>
            <Typography variant='h3' align='center' sx={{mt: 2}}>Add a New Pirate</Typography>
            {errorsFound && <ErrorDisplay errors={errors}/>}
            <PirateForm submitFunc={addPirate} nameIn='' urlIn='' chestsIn='' phraseIn='' posIn='' attIn={[1,1,1]}/>
        </div>
    )
}

export default PirateDashboard;