import React, {Fragment} from 'react'
import {AppBar, Toolbar, Typography, makeStyles, Button, Link} from '@material-ui/core'

const useStyles = makeStyles(theme =>({
	offSet: theme.mixins.toolbar,
	title:{
		flexGrow: 1,
	}

}))

const NavBar = () =>{
  const classes = useStyles();
  
	return(
		<Fragment>
			<AppBar position="fixed" color="inherit">
				<Toolbar>
					<Typography variant="h3" color="secondary" className={classes.title}>
						Tea Page
					</Typography>
					<Button variant="contained" color="secondary">
						<Link color="inherit" href="#sectionContact">
							Contact
						</Link>
					</Button>
			  	</Toolbar>
			</AppBar>
			<div className={classes.offSet}></div>
		</Fragment>
	)
}    

export default NavBar