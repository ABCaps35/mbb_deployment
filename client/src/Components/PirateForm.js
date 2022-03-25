import React, { useState } from 'react';
import { Grid, Box, Button, TextField, Checkbox, Select, MenuItem, InputLabel } from '@mui/material';
import { FormControl, FormGroup, FormHelperText, FormLabel, FormControlLabel } from '@mui/material';

const LINK_REGEX = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/

const PirateForm = (props) => {
    const { submitFunc, nameIn, urlIn, chestsIn, phraseIn, posIn, attIn } = props;

    const [name, setName] = useState(nameIn); 
    const [nameError, setNameError] = useState('');

    const [image_url, setImageUrl] = useState(urlIn); 
    const [image_urlError, setImageUrlError] = useState('');

    const [number_of_chests, setNumChests] = useState(chestsIn); 
    const [number_of_chestsError, setNumChestsError] = useState('');

    const [catchphrase, setPhrase] = useState(phraseIn); 
    const [catchphraseError, setPhraseError] = useState('');

    const [position, setPos] = useState(posIn); 
    const [positionError, setPosError] = useState('');

    const [attributes, setAttributes] = useState(attIn); 

    const changeHandler = (e) => {
        switch(e.target.name){
            case 'name':
                setName(e.target.value);
                setNameError( e.target.value.length>0 && e.target.value.length<3 ? "Name must be at least 3 characters long" : '')
                break;
            case 'image_url':
                setImageUrl(e.target.value);
                setImageUrlError( !e.target.value.match(LINK_REGEX) ? "Please enter a valid URL" : '')
                break;
            case 'number_of_chests':
                setNumChests(e.target.value);
                setNumChestsError(e.target.value<0 ? 'Please enter a positive integer' : '');
                break;
            case 'catchphrase':
                setPhrase(e.target.value);
                setPhraseError(e.target.value.length>0 && e.target.value.length<3 ? "Catchphrase must be at least 3 characters long" : '');
                break;
            case 'position':
                setPos(e.target.value);
                setPosError('');
                break;
            case 'peg':
                setAttributes([(e.target.checked ? 1 : 0), attributes[1], attributes[2]]);
                break;
            case 'eye':
                setAttributes([attributes[0], (e.target.checked ? 1 : 0), attributes[2]]);
                break;
            case 'hook':
                setAttributes([attributes[0], attributes[1], (e.target.checked ? 1 : 0)]);
                break;

            default:
                break;
        }
    }

    const submitHandler = (e) => {
        e.preventDefault();
        submitFunc({name, image_url, number_of_chests, catchphrase, position, attributes});
        if(nameError==='' && positionError === ''){
            console.log('fine');
        }
    }
    
    return (
        <Box justifyContent="center" sx={{width: '100%'}}>
            <form onSubmit={ submitHandler }  style={{width: '60%', margin: "0 auto"}}>
                <Grid container item sx={{width: '100%', mt: 2}}>
                    <Grid item sx={{width: '100%'}}>
                        <FormControl sx={{ mx: "auto", width: '100%' }}>
                            <TextField 
                                sx={{mb: 1, width: '100%'}}
                                error={nameError!==''}
                                label={nameError==='' ? 'Name' : 'Error'}
                                helperText={nameError}
                                variant="outlined" 
                                name="name" 
                                value={name}
                                placeholder="Enter Name"
                                onChange={ changeHandler }
                            />
                        </FormControl>
                    </Grid>

                    <Grid item sx={{width: '100%'}}>
                        <FormControl sx={{ mx: "auto", width: '100%' }}>
                            <TextField 
                                sx={{mb: 1, width: '100%'}}
                                error={image_urlError!==''}
                                label={image_urlError==='' ? 'Image URL' : 'Error'}
                                helperText={image_urlError}
                                variant="outlined" 
                                name="image_url" 
                                value={image_url}
                                placeholder="Enter image URL"
                                onChange={ changeHandler }
                            />
                        </FormControl>
                    </Grid>

                    <Grid item sx={{width: '100%'}}>
                        <FormControl sx={{ mx: "auto", width: '100%' }}>
                            <TextField 
                                sx={{mb: 1, width: '100%'}}
                                error={number_of_chestsError!==''}
                                label={number_of_chestsError==='' ? 'Number of Chests' : 'Error'}
                                helperText={number_of_chestsError}
                                variant="outlined" 
                                name="number_of_chests" 
                                value={number_of_chests}
                                placeholder="Enter number of chests"
                                onChange={ changeHandler }
                            />
                        </FormControl>
                    </Grid>

                    <Grid item sx={{width: '100%'}}>
                        <FormControl sx={{ mx: "auto", width: '100%' }}>
                            <TextField 
                                sx={{mb: 1, width: '100%'}}
                                error={catchphraseError!==''}
                                label={catchphraseError==='' ? 'Catch Phrase' : 'Error'}
                                helperText={catchphraseError}
                                variant="outlined" 
                                name="catchphrase" 
                                value={catchphrase}
                                placeholder="Enter Name"
                                onChange={ changeHandler }
                            />
                        </FormControl>
                    </Grid>

                    <Grid item sx={{width: '100%'}}>
                        <FormControl sx={{ mx: "auto", width: '100%' }}>
                            <InputLabel error={positionError!==''} id="select-label">{positionError==='' ? 'Position' : 'Error'}</InputLabel>
                            <Select
                                sx={{width: '100%'}}
                                error={positionError!==''}
                                labelId="select-label"
                                label={positionError==='' ? 'Position' : 'Error'}
                                variant="outlined" 
                                name='position' 
                                value={position}  
                                onChange={changeHandler} 
                            >
                                <MenuItem value={''}></MenuItem>
                                <MenuItem value={'Captain'}>Captain</MenuItem>
                                <MenuItem value={'First Mate'}>First Mate</MenuItem>
                                <MenuItem value={'Quarter Master'}>Quarter Master</MenuItem>
                                <MenuItem value={'Boatswain'}>Boatswain</MenuItem>
                                <MenuItem value={'Powder Monkey'}>Powder Monkey</MenuItem>
                            </Select>
                            <FormHelperText error>{positionError}</FormHelperText>
                        </FormControl>
                    </Grid>

                    <Grid item sx={{width: '100%'}} justifyContent='center'>
                        <FormControl component="fieldset" sx={{ mx: "auto", width: '100%' }}>
                            <FormLabel component="legend">Select Attributes: </FormLabel>
                            <FormGroup row name="attributes" onChange={changeHandler} style={{display: 'flex', justifyContent: 'center'}}> 
                                <FormControlLabel
                                    onChange={changeHandler}
                                    name="peg"
                                    checked={attributes[0]===1 ? true : false}
                                    value={attributes[0]}
                                    control={<Checkbox/>}
                                    label="Peg Leg"
                                    labelPlacement="bottom"
                                />
                                <FormControlLabel
                                    onChange={changeHandler}
                                    name="eye"
                                    checked={attributes[1]===1 ? true : false}
                                    value={attributes[1]}
                                    control={<Checkbox/>}
                                    label="Eye Patch"
                                    labelPlacement="bottom"
                                />
                                <FormControlLabel
                                    onChange={changeHandler}
                                    name="hook"
                                    checked={attributes[2]===1 ? true : false}
                                    value={attributes[2]}
                                    control={<Checkbox/>}
                                    label="Hook Hand"
                                    labelPlacement="bottom"
                                />
                            </FormGroup>
                        </FormControl>
                    </Grid>
                    <Grid item sx={{width: '100%'}}>
                        <Button sx={{bgcolor: 'success.main', width: "100%", mt: 1}} variant="contained" type="submit">Submit</Button>
                    </Grid>
                </Grid>
            </form>
        </Box>
    )
}

export default PirateForm;