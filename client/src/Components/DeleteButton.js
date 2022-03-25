import React, { useState } from 'react';
import axios from 'axios';
import { Dialog, DialogTitle, DialogActions, Button } from '@mui/material';

const DeleteButton = (props) => {
    const { pirateId, successCallback } = props;
    const [open, setOpen] = useState(false);

    const deletePirate = (e) => {
        axios.delete('http://localhost:8000/api/pirates/delete/'+pirateId)
        .then(response => successCallback(pirateId))
        .catch(error => console.error(error));
        handleClose();
    }

    const handlePopUpOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }

    return(
        <div>
            <Button sx={{textTransform: 'none'}} color="error" variant="contained" onClick={handlePopUpOpen}>
                Walk the Plank
            </Button>
            <Dialog
                open={open}
                keepMounted
                onClose={handleClose}
            >
                <DialogTitle>{"Are you sure you want to delete this pirate?"}</DialogTitle>
                <DialogActions>
                    <Button onClick={deletePirate} color='error' variant="contained">Swim with the Fishes!</Button>
                    <Button onClick={handleClose}>Live to Plunder Another Day</Button>
                </DialogActions>
            </Dialog>
        </div>
        
    )
}

export default DeleteButton;