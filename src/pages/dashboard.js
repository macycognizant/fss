import React from 'react'
import ReactSVG from 'react-svg'
import { useGlobal } from 'reactn'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import Avatar from '@material-ui/core/Avatar'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import { withRouter } from 'react-router-dom'
import print from '../assests/images/Print.svg'
import cart from '../assests/images/Cart.svg'
import card from '../assests/images/Card.svg'
import otherFunctions from '../assests/images/OtherFunctions.svg'
import boxSearch from '../assests/images/BoxSearch.svg'
import accountGroup from '../assests/images/AccountGroup.svg'
import dots from '../assests/images/Dots.svg'
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    card: {
        width: 133,
        height: 133
    },
    cardContent: {
        height: '100%'
    },
    button: {
        width: theme.spacing(20),
        height: theme.spacing(20)
    },
    bigAvatar: {
        margin: 10,
        width: 100,
        height: 100,
    },
}))
function Dashboard(props) {
    const classes = useStyles()
    const [ userName, setUserName ] = useGlobal('userName')
    return (
        <div >
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
                    <Avatar className={classes.bigAvatar} />
                </Grid>
                <Grid container
                    direction='row'
                    justify='center'
                    alignItems='center' 
                    xs={12}>
                    <Typography gutterBottom variant='h5' >
                        {userName}
                    </Typography>
                </Grid>
                <Grid container
                    direction='row'
                    justify='center'
                    alignItems='center' 
                    xs={12}>
                    <Typography gutterBottom variant='h5' >
                        ID: 754825
                    </Typography>
                </Grid>
                <Grid  container
                    direction='row'
                    justify='center'
                    alignItems='center'    
                    xs={6} >
                    <Card className={classes.card}>
                        <CardActionArea className={classes.cardContent}>
                            <CardContent >
                                <ReactSVG src={print} />
                                <Typography gutterBottom variant='h7' >
                                    Printer
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid  container
                    direction='row'
                    justify='center'
                    alignItems='center' 
                    xs={6} >
                    <Card className={classes.card}>
                        <CardActionArea className={classes.cardContent}>
                            <CardContent>
                                <ReactSVG src={cart} />
                                <Typography gutterBottom variant='h7' >
                                    Purchase
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid container
                    direction='row'
                    justify='center'
                    alignItems='center' 
                    xs={6} >
                    <Card className={classes.card}>
                        <CardActionArea className={classes.cardContent}>
                            <CardContent>
                                <ReactSVG src={card} />
                                <Typography gutterBottom variant='h7' >
                                    Card
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid container
                    direction='row'
                    justify='center'
                    alignItems='center' 
                    xs={6} >
                    <Card className={classes.card}>
                        <CardActionArea className={classes.cardContent}>
                            <CardContent>
                                <ReactSVG src={otherFunctions} />
                                <Typography gutterBottom variant='h7' >
                                    Other Functions
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid  container
                    direction='row'
                    justify='center'
                    alignItems='center'    
                    xs={6} >
                    <Card className={classes.card}>
                        <CardActionArea className={classes.cardContent}>
                            <CardContent >
                                <ReactSVG src={print} />
                                <Typography gutterBottom variant='h7' >
                                    Printer
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid  container
                    direction='row'
                    justify='center'
                    alignItems='center' 
                    xs={6} >
                    <Card className={classes.card}>
                        <CardActionArea className={classes.cardContent}>
                            <CardContent>
                                <ReactSVG src={cart} />
                                <Typography gutterBottom variant='h7' >
                                    Purchase
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
            </Grid>
            <BottomNavigation  className={classes.root}>
                <BottomNavigationAction label="Recents" value="recents" icon={<ReactSVG src={boxSearch} />} />
                <BottomNavigationAction label="Favorites" value="favorites" icon={<ReactSVG src={accountGroup} />} />
                <BottomNavigationAction label="Nearby" value="nearby" icon={<ReactSVG src={dots} />} />
            
            </BottomNavigation>
        </div>
    )
}

export default withRouter(Dashboard)