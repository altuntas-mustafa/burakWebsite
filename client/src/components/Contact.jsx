import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Grid } from '@mui/material';

export default function MultiActionAreaCard() {
  return (
    <Grid container justifyContent="center" alignItems="center" style={{ minHeight: '100vh' }}>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUH2XeK5qjXYyC1tf90Ithc2Y6zeOvBVQC9A&usqp=CAU"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              iletisim
            </Typography>
            <Typography variant="body2" color="text.secondary">
              contact bilgilerimiz asagidaki gibidir
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            whatsapp
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}
