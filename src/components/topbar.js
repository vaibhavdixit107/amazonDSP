import React, {forwardRef} from 'react'
import { NavLink as RouterLink } from 'react-router-dom'
import clsx from 'clsx'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/styles'
import {
  List,
  ListItem,
  Button,
  colors,
  Hidden,
} from '@material-ui/core'
import EventAvailable from '@material-ui/icons/EventAvailable'
import ListAlt from '@material-ui/icons/ListAlt'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        flexDirection:"row",
        backgroundColor:"#808080"
      },
      menuButton: {
        marginRight: '2px',
      },
      title: {
        flexGrow: 1,
      },
      button: {
        padding: '10px 8px',
        justifyContent: 'flex-start',
        textTransform: 'none',
        letterSpacing: 0,
        width: '100%',
        fontWeight: "bold",
        color: '#fafafa',
        margin: 1
      },
      active: {
        color: '#fff',
        backgroundColor: '#007bff',
        fontWeight: "bold",
      },
    }));
  
  
const pages = [ 

{
    title: 'Rescue Advice',
    href: '/rescueAdvice',
    
},
{
    title: 'Today Performance',
    href: '/todayPerformance',
    
},
  {
    title: 'Score Card',
    href: '/scoreCard',
    
  },
]  

const CustomRouterLink = forwardRef((props, ref) => (
    <div ref={ref} style={{ flexGrow: 1 }}>
      <RouterLink {...props} />
    </div>
  ))

const Topbar = props => {
  
  const classes = useStyles() 

  return (

    <AppBar position="static" className={clsx(classes.root)}>
         <Typography variant="h6" style={{marginTop: '15px', fontWeight:"bold"}}>
            Dispatcher
          </Typography>
        {pages.map(page => (
        <Toolbar>
            <Button
                activeClassName={classes.active}
                className={classes.button}
                component={CustomRouterLink}
                to={page.href}
                onClick={page.onClick}
            >
                <div className={classes.icon}>{page.icon}</div>
                {page.title}
            </Button>
        </Toolbar>
        ))}
    </AppBar>
  )
}


export default Topbar
