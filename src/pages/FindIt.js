import React, { useState } from 'react'
import { useGlobal } from 'reactn'
import { makeStyles } from '@material-ui/core/styles'
import ReactSVG from 'react-svg'
import AppBar from '@material-ui/core/AppBar'
import Grid from '@material-ui/core/Grid'
import chevronLeft from '../assests/images/ChevronLeft.svg'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import arrowLeftCircle from '../assests/images/ArrowLeftCircle.svg'
import { withRouter } from 'react-router-dom'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Button from '@material-ui/core/Button'
import BottomBar from '../components/BottomBar'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'

const useStyles = makeStyles(theme => ({
    AppBar: {
        backgroundColor: '#666666'
    },
    grow: {
      flexGrow: 1,
    },
    button: {
        backgroundColor: '#666666',
        "&:hover": {
            backgroundColor: '#b4b4b4'
        },
        color: '#ffffff',
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        
        
    },
    title: {
        flexGrow: 1,
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: '100%'
    },
    

}))

function FindIt (props) {
    const classes = useStyles()

    function handleFindBySize() {
        return (
            <Grid container
                spacing={0}
                alignItems='center'
                justify='center'
                style={{ minHeight: '100vh' }} >
                <Card className={classes.card}>
                    <CardContent>
                        
                    </CardContent>
                </Card>
            </Grid>
        )
    }


    return (
        <div className={classes.grow}>
            <AppBar color={classes.AppBar} position="static">
                <Toolbar>
                    <IconButton
                        edge="start"
                        className={classes.menuButton}
                        color="inherit">
                        <ReactSVG src={chevronLeft} />
                    </IconButton>
                    <Typography className={classes.title} variant="h6" noWrap>
                        Find It
                    </Typography>
                    <Button variant="contained" edge="end" color={classes.button}>New Bag</Button>
                </Toolbar>
            </AppBar>
            <Toolbar>
                <TextField
                    id="filled-name"
                    label="Enter UPC Code or Web Id"
                    className={classes.textField}
                    // value={values.name}
                    // onChange={handleChange('name')}
                    margin="normal"
                    variant="filled" />
                <Button variant="contained" edge="end" color={classes.button} onClick={() => handleFindBySize()}>Find By Size</Button>

            </Toolbar>
            <BottomBar />
        </div>
    )
}
export default withRouter(FindIt)