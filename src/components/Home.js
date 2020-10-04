import React from 'react';
import { fade, withStyles, makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
//import CustomizedInputs from './Basic/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
//import BootstrapInput from './Basic/TextField'
import NavBar from './Basic/NavBar'
import DatePickers from './Basic/DateBox';
import TimePickers from './Basic/TimeBox';
import MultilineTextFields from './Basic/DropDownInput';
import CheckboxLabels from './Basic/CheckboxLabels';
import InputBase from '@material-ui/core/InputBase';

const BootstrapInput = withStyles((theme) => ({
    root: {
      'label + &': {
        marginTop: theme.spacing(2),
      },
    },
    input: {
      borderRadius: 4,
      position: 'relative',
      backgroundColor: theme.palette.common.white,
      border: '1px solid #ced4da',
      fontSize: 16,
      width: 'auto',
      padding: '10px 12px',
      transition: theme.transitions.create(['border-color', 'box-shadow']),
      // Use the system font instead of the default Roboto font.
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      '&:focus': {
        boxShadow: `${fade(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
        borderColor: theme.palette.primary.main,
      },
    },
  }))(InputBase);

const useStyles = makeStyles((theme) => ({
    root: {
        minWidth: 275,
        border: '1px solid blue',
        margin: '20% 10% 10% 10%',
    },
    form: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    formFooter: {
      display: 'flex',
      justifyContent: 'space-between',
      marginLeft: '25px',
      marginRight: '125px',
    },
    // bullet: {
    //     display: 'inline-block',
    //     margin: '0 2px',
    //     transform: 'scale(0.8)',
    // },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    margin: {
        margin: theme.spacing(1),
      },
}));


const Home = () => {
    const classes = useStyles();
    //const bull = <span className={classes.bullet}>•</span>;

    return (
      <div>
        <NavBar />
        <Card className={classes.root}>
          <CardContent>
            <form className={classes.form} noValidate>
              {/* <CustomizedInputs /> */}
              <FormControl className={classes.margin}>
                <InputLabel shrink htmlFor="bootstrap-input" className={classes.inputLabel}>
                  Pickup location
                </InputLabel>
                <BootstrapInput id="bootstrap-input" />
              </FormControl>
              <DatePickers />
              <div style={{margin: 'auto 0', lineHeight: "90%"}}>
                <small>+/- 1 day</small> <br/>
                <small>Charge</small>
              </div>
              <TimePickers />
              <TimePickers />
              <MultilineTextFields />
              <FormControl className={classes.margin}>
                <InputLabel shrink htmlFor="bootstrap-input" className={classes.inputLabel}>
                  Delivery location
                </InputLabel>
                <BootstrapInput id="bootstrap-input" />
              </FormControl>
              <DatePickers />
              <div style={{margin: 'auto 0', lineHeight: "90%"}}>
                <small>+/- 1 day</small> <br/>
                <small>Charge</small>
              </div>
              <TimePickers />
              <TimePickers />
              <CheckboxLabels />
            </form>
          </CardContent>
          <div className={classes.formFooter}>
          <div>
            <p><b>REQUEST ANOTHER QUOTE</b></p>
            <small>Quoted prices are indicative only</small>
          </div>

          <div style={{display:'flex', justifyContent:'space-between'}}>
            <div>
              <h2>$ 2440.87</h2>
              <small>(incl. tax & fuel)</small>
            </div>
            <CardActions>
            <Button size="small" style={{ backgroundColor: "skyblue", color: "#fff" }}>ACCEPT & ORDER</Button>
          </CardActions>
          </div>
          
          </div>
        </Card>
      </div>
    );
};

export default Home;
