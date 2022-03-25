import React from "react";
import { Box, Typography } from '@mui/material'

const ErrorDisplay = (props) => {
    const {errors} = props.errors; 

    return (
        <Box justifyContent='center' alignText='center' sx={{mx: 'auto', backgroundColor: 'error.main', width: '80%',  borderRadius: 12}}>
            <Typography variant='h4' color='white' align='center'>ERRORS FOUND</Typography>
            {Object.keys(errors).map((error,i) => {
                return (
                    <Typography variant='h6' color='white' align='center' key={i}>
                        {errors[error].name}: {errors[error].message}
                    </Typography>
                )
            })}
        </Box>
    )
}

export default ErrorDisplay;