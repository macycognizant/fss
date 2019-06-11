import React, { useState } from 'react'
import { useGlobal } from 'reactn'
import ReactSVG from 'react-svg'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import { withRouter } from 'react-router-dom'
import accountOutline from '../assests/images/AccountOutline.svg'
import keyVariant from '../assests/images/KeyVariant.svg'
import blank from '../assests/images/Blank.svg'
import Button from '@material-ui/core/Button'


const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: '100%'
    },
    button: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        marginTop: theme.spacing(5),
        width: '100%'
    },
    formControl: {
        width: '100%',
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
    }
}));
function Login (props) {
    const classes = useStyles()
    const [ userName, setUserName ] = useGlobal('userName')
    const [ pin, setPin] = useState('')
    
    function handleLogin () {
        props.history.push('/salesZone');
    }
    function handleUserNameChange (e) {
        setUserName(e.target.value)
    }
    function handlePinChange(e) {
        setPin(e.target.value.replace(/[^\d]/,''))
    }
    return (
        <div>
            <Grid container
                spacing={0}
                alignItems='center'
                justify='center'
                style={{ minHeight: '100vh' }} >
                {/* row 1 */}
                
                <Grid item xs={10} >
                    <ReactSVG src={process.env.PUBLIC_URL + '/img/Macys_logo.svg'} />
                    <Typography variant='h4'>
                        Full Service Selling
                    </Typography>
                </Grid>
               
                {/* row 3 */}
                <Grid item xs={10} >
                    
                    <form className={classes.container} noValidate autoComplete='off'>
                        <Grid container spacing={1} alignItems='flex-end' wrap='nowrap'>
                            <Grid item>
                                <ReactSVG src={accountOutline} />
                            </Grid>
                            <Grid item xs={11}>
                                <TextField id='associate-number' label='Associate number' className={classes.textField} onChange={handleUserNameChange}/>
                            </Grid>
                        </Grid>
                        <Grid container spacing={1} alignItems='flex-end'>
                            <Grid item>
                                <ReactSVG src={keyVariant} />
                            </Grid>
                            <Grid item xs={11}>
                                <TextField id='pin' label='Pin' className={classes.textField} type='password' onChange={handlePinChange} value={pin}/>
                            </Grid>
                        </Grid>
                        <Grid container spacing={1} alignItems='flex-end'>
                            <Grid item>
                                <ReactSVG src={blank} />
                            </Grid>
                            <Grid item xs={11}>
                            <Button variant="contained" className={classes.button} onClick={() => handleLogin()} >
                                Login
                            </Button>
                            </Grid>
                        </Grid>
                    </form>
                </Grid>
                
            </Grid>
        </div>
    )
}
export default withRouter(Login)