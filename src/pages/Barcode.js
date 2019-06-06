import React from 'react'
import ReactSVG from 'react-svg'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import { withRouter } from 'react-router-dom'

import cartOutline from '../assests/images/CartOutline.svg'

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
}))

function Barcode(props) {
    return (
        <div>
            <Grid container
                spacing={0}
                alignItems='center'
                justify='center'
                style={{ minHeight: '100vh' }} >
                <Grid container
                    direction='row'
                    justify='center'
                    alignItems='center' 
                    xs={12}>
                    <ReactSVG src={cartOutline} />
                </Grid>
            </Grid>
        </div>
    )
}

export default withRouter(Barcode)