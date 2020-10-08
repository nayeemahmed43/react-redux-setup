import React, { useState } from 'react';
import { Grid, TextField, makeStyles, Paper, FormControl, FormLabel } from '@material-ui/core'
import { useForm, Form } from './Basic/useForm';
import DatePickers from './Basic/DateBox';
import {Controls} from '../components/Basic/Controls';
import TimePickers from './Basic/TimeBox';
import MultilineTextFields from './Basic/DropDownInput';
import CheckboxLabels from './Basic/CheckboxLabels';

const useStyles = makeStyles(theme => ({
    paperContent: {
        margin: theme.spacing(5),
        padding: theme.spacing(3)
    }

}))

const initialValues = {
    pickupLocation: "",
    deliveryLocation: "",
    pickupDate: "",
    deliveryDate: "",
    pickupStartingTime: "",
    pickupEndingTime: "",
    deliveryStartingTime: "",
    deliveryEndingTime: "",
    shipmentType: "FTL (Full Truck Load)"
}

const DemoForm = () => {


    const classes = useStyles();

    const { freightData, setFreightData, handleInputChange } = useForm(initialValues)

    return (
        <Paper variant="outlined" className={classes.paperContent}>
            <Form>
                <Grid container>
                    <Grid item xs={12} sm={6} lg={3}>
                        <Controls.Input
                            label="Pickup location"
                            name="pickupLocation"
                            value={freightData.pickupLocation}
                            onChange={handleInputChange}
                        />
                        <Controls.Input
                            label="Delivery location"
                            name="deliveryLocation"
                            value={freightData.deliveryLocation}
                            onChange={handleInputChange}
                        />
                    </Grid>
                    <Grid item xs={6} sm={4} lg={3}>
                        <FormControl>
                            <FormLabel>Pickup date</FormLabel>
                            <DatePickers
                                name="pickupDate"
                                value={freightData.pickupDate}
                                onChange={handleInputChange}
                            />
                        </FormControl>
                        {/* <Controls.Select
                            label="Shipment Type"
                            name="shipmentType"
                            value={freightData.shipmentType}
                            onChange={handleInputChange}
                        /> */}
                        <FormControl>
                            <FormLabel>Delivery date</FormLabel>
                            <DatePickers
                                name="deliveryDate"
                                value={freightData.deliveryDate}
                                onChange={handleInputChange}
                            />
                        </FormControl>
                    </Grid>
                    <Grid item xs={6}>
                        <FormControl>
                        <FormLabel>Pickup time</FormLabel>
                            <TimePickers 
                                 onChange={handleInputChange}
                            />
                        </FormControl>
                        <FormControl>
                        <FormLabel>Pickup time</FormLabel>
                            <TimePickers 
                                 onChange={handleInputChange}
                            />
                        </FormControl>
                    </Grid>
                    <Grid item xs={6}>
                        <FormControl>
                            <TimePickers 
                                 onChange={handleInputChange}
                            />
                        </FormControl>
                        <FormControl>
                            <TimePickers 
                                 onChange={handleInputChange}
                            />
                        </FormControl>
                    </Grid>
                    <Grid item xs={6}>
                        <FormControl>
                        <FormLabel>Shipment type</FormLabel>
                            <MultilineTextFields 
                            handleChange={(e) => setFreightData({ ...freightData, shipmentType: e.target.value })}
                            value={freightData.shipmentType}
                            />

                        </FormControl>
                    </Grid>
                    <Grid item xs={6}>
                        <CheckboxLabels />
                    </Grid>
                </Grid>
            </Form>
        </Paper>
    );
};

export default DemoForm;