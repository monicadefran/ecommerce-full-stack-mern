import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  banner: {
    backgroundColor: '#000000',
    color: '#ffffff',
    padding: '20px',
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#ffffff',
    color: '#000000',
  },
}));

const BannerBottom = () => {
  const classes = useStyles();

  return (
    <div className={classes.banner}>
      <h2>VUELVE A LO RETRO</h2>
      <p>Obtén un descuento exclusivo en tu próxima compra.</p>
      <Button className={classes.button} variant="contained">
        Comprar
      </Button>
    </div>
  );
};

export default BannerBottom;

