import React from 'react'
import { useGlobal } from 'reactn'
import ReactSVG from 'react-svg'
import { makeStyles } from '@material-ui/core/styles'
import classNames from 'classnames'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import Fab from '@material-ui/core/Fab'
import { withRouter } from "react-router-dom";

const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
    },
    button: {
        margin: theme.spacing(1),
    },
    fab: {
        width: 123
    }
}));
function Login (props) {
    const classes = useStyles()
    const [ userName, setUserName ] = useGlobal('userName')
    function handleLogin () {
        props.history.push("/salesZone");
    }
    function handleChange (e) {
        setUserName(e.target.value)
    }
    return (
        <div>
            <Grid container
                spacing={0}
                alignItems='center'
                justify='center'
                style={{ minHeight: '100vh' }} >
                {/* row 1 */}
                <Grid item xs={7} />
                <Grid item xs={4} >
                    <ReactSVG src={process.env.PUBLIC_URL + '/img/Macys_logo.svg'} />
                    <Typography variant="h5">
                        Full Service Selling
                    </Typography>
                </Grid>
                <Grid item xs={1} />
                {/* row 2 */}
                <Grid item xs={4} >
                    <Typography variant="h4">
                        Login
                    </Typography>
                </Grid>
                <Grid item xs={8} />
                {/* row 3 */}
                <Grid item xs={10} >
                    <form className={classes.container} noValidate autoComplete='off'>
                        <TextField
                            id='user-Name'
                            label='Username'
                            className={classes.textField}
                            // value={values.name}
                            onChange={handleChange}
                            margin='normal'
                            variant='filled'
                            fullWidth={true}
                        />
                        <TextField
                            id='password'
                            label='Password'
                            className={classes.textField}
                            // value={values.name}
                            // onChange={handleChange('name')}
                            type="password"
                            margin='normal'
                            variant='filled'
                            fullWidth={true}
                        />
                    </form>
                </Grid>
                {/* row 4 */}
                <Grid item xs={6} />
                <Grid item xs={6}>
                    <Fab 
                        variant="extended" 
                        color="primary" 
                        aria-label="Login" 
                        className={classNames(classes.margin, classes.fab)}
                        onClick={() => handleLogin()} >
                        Login
                    </Fab>
                </Grid>
            </Grid>
        </div>
    )
}
export default withRouter(Login)