import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import DatePickers from './Basic/DateBox';
import TimePickers from './Basic/TimeBox';
import MultilineTextFields from './Basic/DropDownInput';
import Checkbox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import CheckboxLabels from './Basic/CheckboxLabels';
import InputBase from '@material-ui/core/InputBase';
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';
import { submitFreightData } from '../actions/freightFormActions'
import { Field, reduxForm } from "redux-form";
import moment from "moment";

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275,
    border: '1px solid rgb(0 113 205)',
    margin: '5% 6% 10% 6%',
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  field: {
    width: "100%",
    padding: "1vh 0",
  },
  inputLabel: {
    marginTop: theme.spacing(1),
    textAlign: "start"
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
  changeDate: {
    [theme.breakpoints.down("sm")]: {
      marginLeft: "40px"
    }
  },
  cardFooter: {
    [theme.breakpoints.up("lg")]: {
      display: 'flex',
      marginLeft: '700px',
      marginTop: '8px',
      lineHeight: '50%'
    },
    [theme.breakpoints.down("sm")]: {
      marginLeft: '60px',
    }
  },

}));

const RenderDatePicker = ({ input }) => (
  <div>
    <DatePickers
      {...input}
      className="form-control"
      handleDate={date => input.onChange(moment(date).format("MM/DD/YYYY"))}
      selected={input.value ? moment(input.value, "MM/DD/YYYY") : null}
    />

  </div>
);

const RenderTimePicker = ({ input,label }) => (
  <div>
    <TimePickers
      {...input}
      className="form-control"
      handleTime={time => input.onChange(time)}
      label={label}
    />
  </div>
);

const RenderDropdown = ({ input }) => (
  <div>
    <MultilineTextFields
      {...input}
      className="form-control"
      handleChange={e => input.onChange(e)}
    />
  </div>
);

const RenderCheckbox = ({ input, label }) => (
  <div>
    <FormControlLabel
      control={
        <Checkbox
          checked={input.value ? true : false}
          onChange={input.onChange}
        />
      }
      label={label}
    />
  </div>
)


const Home = (props) => {
  const classes = useStyles();
  const [requestQuote, setRequestQuote] = useState(false);
  const { handleSubmit } = props;

  return (
    <div>

      <Typography variant="h4" style={{ marginTop: "5%" }}>
        The Best Online Freight Marketplace
        </Typography>
      <Typography variant="h6" style={{ marginTop: "2%", marginBottom: "2%" }}>
        One stop solution to post and bid on freight requests from multiple platforms
        </Typography>
      <Button style={{ backgroundColor: "rgb(0 113 205)", color: "#fff" }}>Request a Quote</Button>
      <Button style={{ color: "rgb(0 113 205)", border: "1px solid rgb(0 113 205)" }}>Find Freight Request</Button>


      <Card className={classes.root}>
        <CardContent>
          <form className={classes.form} noValidate onSubmit={handleSubmit( (freightFormValues) =>{
            console.log(freightFormValues)
          })}>

            <Grid container spacing={1}>
              <Grid item xs={12} sm={5} lg={2}>
                  <InputLabel shrink htmlFor="bootstrap-input" className={classes.inputLabel}>
                    Pickup location
                  </InputLabel>
                
                  <Field
                    type="text"
                    name="pickupLocation"
                    component="input"
                    className={classes.field}
                  />
                
              </Grid>

              <Grid item xs={6} sm={3} lg={2}>
              <Field 
                name={"pickupDate"} 
                component={RenderDatePicker} 
              />
              </Grid>

              <Grid item xs={6} sm={4} lg={2}>
                <div className={classes.changeDate} style={{ margin: '15px 20px auto 20px' }} >
                  <small><b>+/-1 day</b></small> <br />
                  <small style={{ color: "rgb(0 113 205)" }}>Change</small>
                </div>
              </Grid>

              <Grid item xs={4} sm={4} md={3} lg={2}>
              <Field 
                name={"pickupStartingTime"} 
                component={RenderTimePicker} 
                label="Pickup time"
              />
              </Grid>

              <Grid item xs={4} sm={4} md={3} lg={2}>
              <Field 
                name={"pickupEndingTime"} 
                component={RenderTimePicker} 
              />
              </Grid>

              <Grid item xs={12} sm={8} md={6} lg={2}>
              <Field 
                name={"shipmentType"} 
                component={RenderDropdown} 
              />
              </Grid>

              <Grid item xs={12} sm={6} lg={2}>

                <InputLabel shrink htmlFor="bootstrap-input" className={classes.inputLabel}>
                    Delivery location
                </InputLabel>

                  <Field
                    type="text"
                    name={"deliveryLocation"}
                    component="input"
                    className={classes.field}
                  />
              </Grid>

              <Grid item xs={6} sm={3} lg={2}>
              <Field 
                name={"deliveryDate"} 
                component={RenderDatePicker} 
              />
              </Grid>

              <Grid item xs={6} sm={2} lg={2}>
                <div style={{ margin: '15px 20px auto 20px' }}>
                  <small><b>+/-1 day</b></small> <br />
                  <small style={{ color: "rgb(0 113 205)" }}>Change</small>
                </div>
              </Grid>

              <Grid item xs={4} sm={4} md={3} lg={2}>
              <Field 
                name={"deliveryStartingTime"} 
                component={RenderTimePicker} 
                label="Delivery time"
              />
              </Grid>
              <Grid item xs={4} sm={4} md={3} lg={2}>
              <Field 
                name={"deliveryEndingTime"} 
                component={RenderTimePicker} 
              />
              </Grid>

              <Grid item xs={12} md={6} lg={2}>
                <div style={{ marginTop: "20px" }}>
                <Field 
                name="fixedFrequentRoute"
                component={RenderCheckbox} 
                label="Fixed Frequent Route"
              />
                </div>
              </Grid>

              {!requestQuote ? (<div style={{ display: 'flex' }}>
                <div>
                  <small>Get an instant quote/price for your freight just by filling out the above information</small>
                </div>
                <div>
                  <CardActions>
                    <Button
                      size="small"
                      style={{ backgroundColor: "rgb(0 113 205)", color: "#fff", marginLeft: "80vh" }}
                      onClick={() => setRequestQuote(true)}
                      >REQUEST QUOTE</Button>
                  </CardActions>
                </div>
              </div>) :

                (<div style={{ display: 'flex' }}>
                  <div style={{ lineHeight: '100%', marginTop: "10px", textAlign: 'left', marginLeft: '5px' }}>
                    <p style={{ color: "rgb(0 113 205)" }}><b>REQUEST ANOTHER QUOTE</b></p>
                    <small>Quoted prices are indicative only</small>
                  </div>
                  <div>
                    <div className={classes.cardFooter} >
                      <div>
                        <h3>$ 2440.87</h3>
                        <small>(incl. tax & fuel)</small>
                      </div>
                      <CardActions>
                        <Button size="small" style={{ backgroundColor: "rgb(0 113 205)", color: "#fff", marginTop: "10px" }} type="submit">ACCEPT & ORDER</Button>
                      </CardActions>
                    </div>
                  </div>
                </div>)}
            </Grid>

          </form>
        </CardContent>
      </Card>

    </div>
  );
};

export default reduxForm({
  form: "freightForm",
  // validate: RegistrationFormValidate,
})(Home);
