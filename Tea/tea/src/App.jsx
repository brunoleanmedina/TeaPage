import React from 'react';
import {ThemeProvider} from '@material-ui/core/styles'
import theme from './themeConfig.js'
import {makeStyles} from '@material-ui/core/styles'

import NavBar from './Components/NavBar.jsx'
import MyCard from './Components/MyCard'
import MyFooter from './Components/MyFooter.jsx'
import {Typography, Box} from '@material-ui/core/'

import testImg from './img/GignerTea.png'

const useStyles = makeStyles({
	title: {
		margin: '20px 5vw 10px 5vw',
	},
	paragraphs: {
		margin: '10px 5vw 20px 6vw',
		fontSize: '3vh',
	},
  box: {
		display: 'flex',
		flexWrap: 'wrap',
		margin: '10px 5vw 10px 5vw',
	},
});

const cardContent = [
	{title: "Té verde",
	description: "" ,
	imgLink: "" ,
	},
	{title: "Té verde Matcha",
	description: "" ,
	imgLink: "" ,
	},
	{title: "Té blanco",
	description: "" ,
	imgLink: "" ,
	},
	{title: "Té de menta",
	description: "" ,
	imgLink: "" ,
	},
	{title: "Té de manzanilla",
	description: "" ,
	imgLink: "" ,
	},
	{title: "Té de hibisco",
	description: "" ,
	imgLink: "" ,
	},
	{title: "wea",
	description: "weaeawqeaweaweae",
	imgLink: "testImg"
	}
]

function App() {
  const classes = useStyles();
  return (
	<ThemeProvider theme={theme}>
		<NavBar/>
	  	<Typography variant="h3" color="secondary" className={classes.title}>
			Tea
		</Typography>
	<Typography variant='body1' color="initial" className={classes.paragraphs}>
		El té es la infusión de las hojas y brotes de la planta del té.​La popularidad de esta bebida es solamente sobrepasada por el agua.Su sabor es fresco, ligeramente amargo y astringente; este gusto es agradable para mucha gente. 
		<br/>
		<br/>
		El término «té herbal» se refiere comúnmente a infusiones de frutas o hierbas que no incluyen a la planta de té, tales como el mate, la manzanilla y la tila entre otros. En este último caso se prefiere la denominación «tisana» para nombrarlas y evitar confusión con el auténtico té.
		<br/>
		<br/>
		Una infusión que esté realizada en base a otra planta, cedrón, manzanilla, jengibre, anís, menta, por mencionar algunas, no es en realidad té, aunque se la señale de manera popular de esa forma. De hecho, el Código Alimentario Argentino, indica que la denominación genérica de té refiere exclusivamente al producto obtenido por el procesamiento de yemas, hojas, pecíolos y tallos tiernos de dicha especie vegetal.​
	  </Typography>
	  <Box component="div" className={classes.box}>
		{cardContent.map(
			({title, description, imgLink, index}) => (
				<MyCard key={index} title={title} description={description} imgLink={imgLink}></MyCard>
			)
		)}
	  </Box>
	  <Box>
	  <MyFooter/>
	  </Box>
	</ThemeProvider>
  );
}

export default App;
