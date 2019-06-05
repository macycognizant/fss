import React from 'react'
import ReactSVG from 'react-svg'
import { withRouter } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import BottomNavigation from '@material-ui/core/BottomNavigation'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'
import boxSearch from '../assests/images/BoxSearch.svg'
import accountGroup from '../assests/images/AccountGroup.svg'
import dots from '../assests/images/Dots.svg'

const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    bottomBar: {
        width: '100%',
        position: 'fixed',
        bottom: 0,
    }
}))
function BottomBar(props) {
    const classes = useStyles()
    return (
        <div >
            <BottomNavigation  className={classes.bottomBar}>
                <BottomNavigationAction label="Recents" value="recents" icon={<ReactSVG src={boxSearch} />} />
                <BottomNavigationAction label="Favorites" value="favorites" icon={<ReactSVG src={accountGroup} />} />
                <BottomNavigationAction label="Nearby" value="nearby" icon={<ReactSVG src={dots} />} />
            </BottomNavigation>
        </div>
    )
}

export default withRouter(BottomBar)