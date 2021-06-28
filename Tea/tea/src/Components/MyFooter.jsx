import React, {Fragment} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {AppBar, Toolbar, Typography, Button, Link} from '@material-ui/core';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import EmailIcon from '@material-ui/icons/Email';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import ListAltIcon from '@material-ui/icons/ListAlt';

const useStyles = makeStyles((theme) => ({
  menuButton: {
	marginRight: theme.spacing(2),
  },
  title: {
	flexGrow: 1,
  },
  svg:{
	marginTop: '30px',
	marginLeft: '30px',
  }

}));

const MyFooter = () =>{

	const classes = useStyles();

  return (
	<Fragment>
		<AppBar  position="static" id="sectionContact" color="secondary">
			<Toolbar>
				<Typography variant="h4" className={classes.title}>
					Contact
				</Typography>

				<Button color="inherit" className={classes.link}>
					<Link color="inherit" href="mailto:leanmedi9@hotmail.com">
						<EmailIcon/>
						<Typography>e-Mail</Typography>
					</Link>
				</Button>

				<Button color="inherit">
					<Link color="inherit" href="https://www.linkedin.com/in/bruno-l-medina/">
						<LinkedInIcon/>
						<Typography>Bruno L. Medina</Typography>
					</Link>
				</Button>

				<Button color="inherit">
					<Link color="inherit" href="https://github.com/brunoleanmedina">
						<GitHubIcon/>
						<Typography>Bruno Leandro Medina</Typography>
					</Link>
				</Button>

				<Button color="inherit">
					<Link color="inherit" href="https://blm-web-site-2-679ohfsbb-brunolmedina.vercel.app/">
						<ListAltIcon/>
						<Typography>My Portfolio Web</Typography>
					</Link>
				</Button>
		  
			</Toolbar>
		</AppBar>
	</Fragment>
  );
}

export default MyFooter