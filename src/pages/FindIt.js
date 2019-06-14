import React, { useState } from 'react'
import { useGlobal } from 'reactn'
import AppBar from '@material-ui/core/AppBar'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import ArrowLeftCircle from '../assests/images/ArrowLeftCircle.svg'

function FindIt (props) {
    return (
        <div>
            <Grid container
            spacing={0}
            alignItems='center'
            justify='center'>
                 <AppBar>
                     <Grid item xs={4}>
                         <ArrowLeftCircle/>
                     </Grid>
                     <Grid item xs={4}>
                        <Typography variant='h4'>
                            Find It
                        </Typography>
                     </Grid>
                     <Grid item xs={4}></Grid> 
                 </AppBar>
            </Grid>
        </div>
    )
}

export default withRouter(FindIt)