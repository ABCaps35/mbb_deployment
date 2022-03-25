import React from "react";
import { Grid, Box, Card, Typography } from '@mui/material';

const PirateInfo = (props) => {
    const {pirate} = props;

    return (
        <Grid container justifyContent='space-evenly' width='100%' sx={{mx: 'auto', mt: 4}}>
            <Grid item xs={5} sx={{borderRadius: 12}}>
                <Card>
                    <Grid container justifyContent='center' sx={{p:1}}>
                        <Grid item>
                            <Box sx={{borderRadius: 2}} width="100%" component="img" src={pirate.image_url} alt={pirate.name}></Box>
                        </Grid>
                        <Grid item>
                            <Typography align='center' variant="h3">"{pirate.catchphrase}"</Typography>
                        </Grid>
                    </Grid>
                </Card>
            </Grid>
            <Grid item xs={5}>
                <Card>
                    <Grid container justifyContent='center' sx={{p: 2}}>
                        <Grid container item justifyContent='center' sx={{mb:2}}>
                            <Typography align='center' variant="h3">About</Typography>
                        </Grid>
                        <Grid container item sx={{mb: 1}}>
                            <Typography variant="p">Position: {pirate.position}</Typography>
                        </Grid>
                        <Grid container item sx={{mb: 1}}>
                            <Typography variant="p">Treasures: {pirate.number_of_chests}</Typography>
                        </Grid>
                        <Grid container item sx={{mb: 1}}>
                            <Typography variant="p">Peg Leg: {pirate.attributes[0]===1 ? 'Yes' : 'No'}</Typography>
                        </Grid>
                        <Grid container item sx={{mb: 1}}>
                            <Typography variant="p">Eye Patch: {pirate.attributes[1]===1 ? 'Yes' : 'No'}</Typography>
                        </Grid>
                        <Grid container item sx={{mb: 1}}>
                            <Typography variant="p">Hook Hand: {pirate.attributes[2]===1 ? 'Yes' : 'No'}</Typography>
                        </Grid>
                    </Grid>
                </Card>
            </Grid>
        </Grid>
    )

}

export default PirateInfo;