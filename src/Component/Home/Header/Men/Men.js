import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';

const useStyles = makeStyles({
  root: {
    maxWidth: 470,
  },
  media: {
    height: 250,
  },
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    
    <div>
      <div>
    <div class="row">

<div class="col s4"><Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://th.bing.com/th/id/R4583836eaa82de752d0bb636825c15c0?rik=N8xvHJrJqs6V7A&riu=http%3a%2f%2fwww.nielsenanimal.com%2fwp-content%2fuploads%2f2018%2f09%2fmens-nike-lunar-converge-running-shoes-blackvolt-trainers.jpg&ehk=fPnX6YcY0HImJrdaWvlHg0IDEY215C2aFdU98nFREsk%3d&risl=&pid=ImgRaw"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
           NIKE
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Typography gutterBottom variant="h5" component="h2">
      120$
          </Typography>
        
        <Button size="small" color="primary">
         <del style={{color:"red"}}>150$</del>
        </Button>
      </CardActions>
    </Card></div>
<div class="col s4"><Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://m.media-amazon.com/images/I/71DcDSBleRL._AC_SR700,525_.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          HOKA
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Typography gutterBottom variant="h6" component="h2">
          200$
          </Typography>
   <del style={{color:"red"}}>150$</del>
       
      </CardActions>
    </Card></div>
<div class="col s4"><Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://www.newshoes2019.us/images/large/images18/Mens-and-WMNS-Nike-Epic-React-Flyknit-Triple-White-Mens-Running-Shoes_2.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          NIKE
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Typography gutterBottom variant="h5" component="h2">
          130$
          </Typography>
   <del style={{color:"red"}}>180$</del>
      </CardActions>
    </Card></div>
</div> 
</div>
<div class="row">

<div class="col s4"><Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/ef16e313896247dca956ac4e00c4d9c1_9366/adidas_x_LEGO(r)_Sport_Shoes_Yellow_FY8439_01_standard.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
           NIKE
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Typography gutterBottom variant="h5" component="h2">
      120$
          </Typography>
        
        <Button size="small" color="primary">
         <del style={{color:"red"}}>150$</del>
        </Button>
      </CardActions>
    </Card></div>
<div class="col s4"><Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/73c7b15474994b22aab1ac5a0158dfcf_9366/NMD_R1_Shoes_Black_S42837_01_standard.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          HOKA
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Typography gutterBottom variant="h6" component="h2">
          200$
          </Typography>
   <del style={{color:"red"}}>150$</del>
       
      </CardActions>
    </Card></div>
<div class="col s4"><Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://images.stylight.net/image/upload/e_trim/t_web_product_330x440max_nobg/q_auto:eco,f_auto/hrqsu6wrqeglhhe2lmxf.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          NIKE
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Typography gutterBottom variant="h5" component="h2">
          130$
          </Typography>
   <del style={{color:"red"}}>180$</del>
      </CardActions>
    </Card></div>
</div>
<div class="row">

<div class="col s4"><Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://cdn.shopify.com/s/files/1/0840/5283/products/43840-A_900x.jpg?v=1614293767"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
           NIKE
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Typography gutterBottom variant="h5" component="h2">
      120$
          </Typography>
        
        <Button size="small" color="primary">
         <del style={{color:"red"}}>150$</del>
        </Button>
      </CardActions>
    </Card></div>
<div class="col s4"><Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://images.stylight.net/image/upload/e_trim/t_web_product_330x440max_nobg/q_auto:eco,f_auto/lipuaqdhk2x4grl6dzee.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          HOKA
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Typography gutterBottom variant="h6" component="h2">
          200$
          </Typography>
   <del style={{color:"red"}}>150$</del>
       
      </CardActions>
    </Card></div>
<div class="col s4"><Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://images.stylight.net/image/upload/e_trim/t_web_product_330x440max_nobg/q_auto:eco,f_auto/ytd1cb1yn3ofxlrwdes4.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          NIKE
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Typography gutterBottom variant="h5" component="h2">
          130$
          </Typography>
   <del style={{color:"red"}}>180$</del>
      </CardActions>
    </Card></div>
</div> 
</div>


    
  );
}






















































/*import react from 'react'
class Men extends react.Component{
    render(){
        return(
        <div>
             <div class="row">
     
      <div class="col s4"></div>
      <div class="col s4"></div>
      <div class="col s4"></div>
    </div> 
      </div>
      
        )
    }
}
export default Men*/ 