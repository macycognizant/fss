import React from 'react'
import { useGlobal } from 'reactn'
import { makeStyles } from '@material-ui/core/styles'
import { withStyles } from '@material-ui/core/styles'
import Switch from '@material-ui/core/Switch'
import Typography from '@material-ui/core/Typography'
import ReactSVG from 'react-svg'
import InputLabel from '@material-ui/core/InputLabel'
import FormControl from '@material-ui/core/FormControl'
import NativeSelect from '@material-ui/core/NativeSelect'
import Grid from '@material-ui/core/Grid'
import { withRouter } from 'react-router-dom'
import classNames from 'classnames'
import Fab from '@material-ui/core/Fab'

const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
    },
    formControl: {
        margin: 2,
        fullWidth: true,
        display: "flex",
        wrap: "nowrap"
    },
    fab: {
        width: 123
    }
}))

const IOSSwitch = withStyles(theme => ({
    root: {
      width: 42,
      height: 26,
      padding: 3,
      margin: theme.spacing(1),
    },
    switchBase: {
      padding: 1,
      '&$checked': {
        transform: 'translateX(16px)',
        color: theme.palette.common.white,
        '& + $track': {
          backgroundColor: '#52d869',
          opacity: 1,
          border: 'none',
        },
      },
      '&$focusVisible $thumb': {
        color: '#52d869',
        border: '6px solid #fff',
      },
    },
    thumb: {
      width: 24,
      height: 24,
    },
    track: {
      borderRadius: 26 / 2,
      border: `1px solid ${theme.palette.grey[700]}`,
      backgroundColor: theme.palette.grey[50],
      opacity: 1,
      transition: theme.transitions.create(['background-color', 'border']),
    },
    checked: {},
    focusVisible: {},
}))(({ classes, ...props }) => {
    return (
      <Switch
        focusVisibleClassName={classes.focusVisible}
        disableRipple
        classes={{
          root: classes.root,
          switchBase: classes.switchBase,
          thumb: classes.thumb,
          track: classes.track,
          checked: classes.checked,
        }}
        {...props}
      />
    )
})
  
function SalesZone(props) {
    const classes = useStyles()
    const [ userName, setUserName ] = useGlobal('userName')
    function handleContinue () {
        props.history.push("/dashboard");
    }
    return (
        <div >
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
                        Hi, {userName}
                    </Typography>
                </Grid>
                <Grid item xs={8} />
                {/* row 3 */}
                <Grid item xs={10}>
                    <FormControl className={classes.formControl}>
                        <InputLabel htmlFor='sales-zone'>Sales Zone</InputLabel>
                        <NativeSelect
                            native
                            // value={state.age}
                            // onChange={handleChange('age')}
                            inputProps={{
                                name: 'sales zone',
                                id: 'sales-zone',
                            }}
                            fullWidth={true} >
                            <option value=''></option>
                            <option value={10}>Northeast</option>
                            <option value={20}>Piedmont Atlantic</option>
                            <option value={30}>Florida</option>
                            <option value={30}>Gulf Coast</option>
                        </NativeSelect>
                        <Grid item xs={12} />
                    </FormControl>
                    <FormControl className={classes.formControl}>
                        <Typography variant="subtitle2"  align='left' style={{marginTop: 1 + 'em'}}>
                            Notification Alert
                        </Typography>
                        <Typography component="div" >
                            <Grid component="label" container alignItems="center" spacing={1}>
                                <Grid item>Text Msgs</Grid>
                                <Grid item>
                                    <IOSSwitch
                                // checked={state.checkedC}
                                // onChange={handleChange('checkedC')}
                                    value="checkedC"
                                    />
                                </Grid>
                                <Grid item>Text Msgs + Audio</Grid>
                            </Grid>
                        </Typography>
                    </FormControl>
                </Grid>
                {/* row 4 */}
                <Grid item xs={4}>
                    <Fab 
                        variant="extended" 
                        color="primary" 
                        aria-label="Login" 
                        className={classNames(classes.margin, classes.fab)}
                        // onClick={() => handleLogin()}
                         >
                        Logout
                    </Fab>
                </Grid>
                <Grid item xs={3} />
                <Grid item xs={4}>
                    <Fab 
                        variant="extended" 
                        color="primary" 
                        aria-label="Login" 
                        className={classNames(classes.margin, classes.fab)}
                        onClick={() => handleContinue()} 
                        >
                        Continue
                    </Fab>
                </Grid>
            </Grid>
        </div>
    )
}
export default withRouter(SalesZone)