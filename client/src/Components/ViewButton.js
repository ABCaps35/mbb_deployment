import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from '@mui/material';

const ViewButton = (props) => {
    const history = useHistory();
    const { pirateId, successCallback } = props;

    const viewPirate = (e) => {
        history.push(`/pirate/${pirateId}`);
    }

    return(
        <div>
            <Button sx={{textTransform: 'none'}} color="success" variant="contained" onClick={viewPirate}>
                View Pirate
            </Button>
        </div>
        
    )
}

export default ViewButton;