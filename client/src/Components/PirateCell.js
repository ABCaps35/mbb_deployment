import React from 'react';
import ViewButton from './ViewButton';
import DeleteButton from './DeleteButton';
import { Typography, Card, CardMedia, Grid } from '@mui/material';

const PirateCell = (props) => {
    const { pirate, view, remove } = props;

    return (
        <Card variant="outlined">
            <Grid container>
                <Grid item xs={4}>
                    <CardMedia component="img" src={pirate.image_url} height='150px' width='auto' alt={`${pirate.name}`}></CardMedia>
                </Grid>
                <Grid item xs={8} sx={{p: 2}}>
                    <Grid container direction='column' justifyContent='space-between' height='100%'>
                        <Typography align="center" variant="h4">{pirate.name}</Typography>
                        <Grid container item justifyContent='space-evenly'>
                            <Grid item>
                                <ViewButton pirateId={pirate._id} successCallback={view} />
                            </Grid>
                            <Grid item>
                                <DeleteButton pirateId={pirate._id} successCallback={remove} />
                            </Grid>
                        </Grid>
                        
                    </Grid>
                </Grid>
            </Grid>
            
        </Card>
    )
}

export default PirateCell;