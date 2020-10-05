import React, { useState } from 'react';
import { fade, withStyles, makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
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
    borderRadius: 2,
    position: 'relative',
    backgroundColor: theme.palette.common.white,
    border: '1px solid #ced4da',
    fontSize: 14,
    width: '250px',
    padding: '7px 12px',
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
    margin: '5% 10% 10% 10%',
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
  },
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
  const [freightData, setFreightData] = useState({
    pickupLocation: "",
    deliveryLocation: "",
    pickupDate: "",
    deliveryDate: "",
    pickupStartingTime: "",
    pickupEndingTime: "",
    deliveryStartingTime: "",
    deliveryEndingTime: "",
    shipmentType: "FTL (Full Truck Load)"
  });

  function handleSubmit(e) {
    e.preventDefault()
    console.log(freightData)

  }

  return (
    <div>
      <NavBar />

      <Typography variant="h4" style={{ marginTop: "5%" }}>
        The Best Online Freight Marketplace
        </Typography>
      <Typography variant="h6" style={{ marginTop: "2%", marginBottom: "2%" }}>
        One stop solution to post and bid on freight requests from multiple platforms
        </Typography>
      <Button style={{ backgroundColor: "rgb(0 113 205)", color: "#fff" }}>Request a Quote</Button>
      <Button style={{ color: "rgb(0 113 205)", border: "2px solid rgb(0 113 205)" }}>Find Freight Request</Button>


      <Card className={classes.root}>
        <CardContent>
          <form className={classes.form} noValidate onSubmit={handleSubmit}>
            <FormControl className={classes.margin}>
              <InputLabel shrink htmlFor="bootstrap-input" className={classes.inputLabel}>
                Pickup location
                </InputLabel>
              <BootstrapInput
                id="bootstrap-input"
                placeholder="Country, City, Postcode"
                value={freightData.pickupLocation}
                onChange={(e) => setFreightData({ ...freightData, pickupLocation: e.target.value })}
              />
            </FormControl>
            <DatePickers
              label="Pickup date"
              handleDate={(e) => setFreightData({ ...freightData, pickupDate: e.target.value })}
            />
            <div style={{ margin: 'auto 20px auto 10px' }}>
              <small><b>+/-1 day</b></small> <br />
              <small style={{color:"rgb(0 113 205)"}}>Change</small>
            </div>
            <TimePickers
              label="Pickup time"
              handleTime={(e) => setFreightData({ ...freightData, pickupStartingTime: e.target.value })}
            />
            <TimePickers
              handleTime={(e) => setFreightData({ ...freightData, pickupEndingTime: e.target.value })}
            />
            <MultilineTextFields
              handleChange={(e) => setFreightData({ ...freightData, shipmentType: e.target.value })}
              value={freightData.shipmentType}
            />
            <FormControl className={classes.margin}>
              <InputLabel shrink htmlFor="bootstrap-input" className={classes.inputLabel}>
                Delivery location
                </InputLabel>
              <BootstrapInput
                id="bootstrap-input"
                placeholder="Country, City, Postcode"
                onChange={(e) => setFreightData({ ...freightData, deliveryLocation: e.target.value })}
              />
            </FormControl>
            <DatePickers
              label="Delivery date"
              handleDate={(e) => setFreightData({ ...freightData, deliveryDate: e.target.value })}
            />
            <div style={{ margin: '18px 20px auto 10px' }}>
              <small><b>+/-1 day</b></small> <br />
              <small style={{color:"rgb(0 113 205)"}}>Change</small>
            </div>
            <TimePickers
              label="Delivery time"
              handleTime={(e) => setFreightData({ ...freightData, deliveryStartingTime: e.target.value })}
            />
            <TimePickers
              handleTime={(e) => setFreightData({ ...freightData, pickupEndingTime: e.target.value })}
            />
            <CheckboxLabels />
            <div style={{ display: 'flex', justifyContent: 'space-between'}}>
              <div style={{lineHeight: '80%', marginTop: "10px"}}>
                <p><b>REQUEST ANOTHER QUOTE</b></p>
                <small>Quoted prices are indicative only</small>
              </div>

              <div style={{ display: 'flex', marginLeft: "450px", lineHeight: '80%' }}>
                <div>
                  <h2>$ 2440.87</h2>
                  <small>(incl. tax & fuel)</small>
                </div>
                <CardActions>
                  <Button size="small" style={{ backgroundColor: "rgb(0 113 205)", color: "#fff" }} type="submit">ACCEPT & ORDER</Button>
                </CardActions>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>

    </div>
  );
};

export default Home;
