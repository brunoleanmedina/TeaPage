import React, {Fragment} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,  
  },
  limiter: {
    width: 230,
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
    overflow: "hidden",
  }

});

function MyCard({title}) {
    const classes = useStyles();
    
    return (
      <Fragment>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image="/static/images/cards/contemplative-reptile.jpg"
              title="Contemplative Reptile"
            />
            </CardActionArea>
  
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {title}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
              Tipos de té y sus beneficios para la salud
                urante miles de años el té ha formado parte del estilo de vida de personas de todo el mundo, que han buscado en esta bebida sus propiedades curativas, relajantes e inspiradoras y en el presente cada vez son más las investigaciones dirigidas a demostrar sus beneficios para la salud. Aunque en España las infusiones de manzanilla y poleo o menta sean quizá las más consumidas, el té tiene ya una gran cantidad de adeptos en sus distintas variedades.
              </Typography>
            </CardContent>
              
          <CardActions>
            <Button size="small">
              Read More
            </Button>
          </CardActions>
        </Card>
      </Fragment>
    );
  }
  
  export default MyCard;