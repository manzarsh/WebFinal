import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Logo1 from './../images/Logo1.png';

const useStyles = makeStyles((theme) => ({
  container: {
    maxWidth: 600,
    margin: 'auto',
    marginTop: theme.spacing(5),
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
  },
  title: {
    fontSize: '24px',
    color: theme.palette.primary.main,
    marginBottom: theme.spacing(2),
  },
  media: {
    width: '100%',
    maxHeight: 400,
    objectFit: 'contain',
    marginBottom: theme.spacing(3),
  },
  paragraph: {
    lineHeight: '1.6',
    margin: '10px 0',
    color: theme.palette.text.secondary,
  },
  subtitle: {
    marginTop: theme.spacing(3),
    color: theme.palette.text.primary,
    fontSize: '20px',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: theme.spacing(2),
  },
  button: {
    backgroundColor: theme.palette.grey[700],
    color: theme.palette.common.white,
    padding: theme.spacing(1, 3),
    border: 'none',
    borderRadius: theme.shape.borderRadius,
    cursor: 'pointer',
    textAlign: 'center',
    fontSize: '16px',
    textDecoration: 'none',
  },
}));

export default function Home() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <h1 className={classes.title} style={{color: '#08C2FF', fontSize: '1.8em'}}>Weather Based Tourist Guide</h1>
      <p className={classes.paragraph} >
        Welcome to the Weather based Tourist Guide Application.
      </p>
      <p className={classes.paragraph}>
        Thank You for Visiting! <br />
        Dive into our application and explore the full range of our services.
        With our app, planning your trip has never been easier—you simply need
        to pack your bags and enjoy the adventure!
      </p>
      <h2 className={classes.subtitle}style={{color: '#08C2FF'}}>Our Mission</h2>
      <p className={classes.paragraph}>
        At the heart of our mission is a commitment to crafting the perfect trip
        tailored to your chosen destination and schedule. Our program will create
        an ideal itinerary for you, considering weather conditions, recommended clothing,
        and alerts for any sudden changes in the forecast. Let us handle the details while
        you focus on making unforgettable memories!
      </p>
      <div className={classes.buttonContainer}>
        <Link to="/Contact" className={classes.button}>
          Fast Contact
        </Link>
      </div>
    </div>
  );
}
