import React from 'react';
import { Box, Button, Grid, Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { Field, reduxForm } from "redux-form";
import NavBar from './Basic/NavBar'
import { useSelector } from "react-redux";


const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        justifyContent: 'space-around',
    },
    paper: {
        width: "35%",
        border: "1px solid rgb(0 113 205)",
        height: "80vh",
        marginTop: "10%",
        marginBottom: "20%",
        padding: "3%"
    },
    form: {
        display: "flex",
        flexWrap: "wrap"
    },
    controlTitle: {
        fontSize: "13px",
        fontWeight: "600",
        textAlign: "left",
        color: "rgba(56,64,72,1)",
        letterSpacing: 0.3,
        marginBottom: 2,
    },
    mendatory: {
        color: "red",
        fontWeight: 900,
    },
    terms: {
        color: "rgb(0 113 205)",
        fontWeight: 600,
    },
    field: {
        width: "100%",
        padding: "2vh 0"
    },
    lastNameField: {
        marginTop: "2vh",
        width: "100%",
        padding: "2vh 0"
    },
    button: {
        backgroundColor: "rgb(0 113 205)",
        color: '#fff',
        padding: "3% 15%"
    }
}))

const SignUp = (props) => {
    const classes = useStyles()
    //const { signup } = useSelector((state) => state.form);
    console.log(props)
    const { handleSubmit } = props;
    return (
        <>
            {/* <NavBar /> */}
            <div className={classes.root}>
                <h1>This is sign up page</h1>

                <div className={classes.paper}>
                    <Paper variant="outlined" />
                    
                    <form className={classes.form} onSubmit={handleSubmit((signupValues) => {
                        console.log(signupValues)
                    })}>

                        <Grid container spacing={3}>

                            <Grid item xs={12} md={6}>
                                <Box className={classes.controlTitle}>
                                    Company Name <span class={classes.mendatory}>*</span>{" "}
                                </Box>
                                <Field
                                    type="text"
                                    name="companyName"
                                    component="input"
                                    className={classes.field}
                                />
                            </Grid>

                            <Grid item xs={12} md={6}>
                                <Box className={classes.controlTitle}>
                                    CVR - Company reg number <span class={classes.mendatory}>*</span>{" "}
                                </Box>
                                <Field
                                    type="text"
                                    name="companyRegNum"
                                    component="input"
                                    className={classes.field}
                                />
                            </Grid>

                            <Grid item xs={12}>
                                <Box className={classes.controlTitle}>
                                    Address <span class={classes.mendatory}>*</span>{" "}
                                </Box>
                                <Field
                                    type="text"
                                    name="address"
                                    component="input"
                                    className={classes.field}
                                />
                            </Grid>

                            <Grid item xs={12} md={6}>
                            <Box className={classes.controlTitle}>
                                Contact person <span class={classes.mendatory}>*</span>{" "}
                            </Box>
                            <Field
                                type="text"
                                name="firstName"
                                placeholder="First name"
                                component="input"
                                className={classes.field}
                            />
                            </Grid>
                            <Grid item xs={12} md={6}>
                            <Field
                                type="text"
                                name="lastName"
                                placeholder="Last name"
                                component="input"
                                className={classes.lastNameField}
                            />
                            </Grid>
                            
                            <Grid item xs={12} md={6}>
                                <Box className={classes.controlTitle}>
                                    Email <span class={classes.mendatory}>*</span>{" "}
                                </Box>
                                <Field
                                    type="email"
                                    name="email"
                                    placeholder="email@domain.com"
                                    component="input"
                                    className={classes.field}
                                />
                            </Grid>


                            <Grid item xs={12} md={6}>
                            <Box className={classes.controlTitle}>
                                Phone
                            </Box>
                            <Field
                                type="phone"
                                name="phone"
                                component="input"
                                className={classes.field}
                            />

                            </Grid>

                            <Grid item xs={12} md={6}>
                            <Box className={classes.controlTitle}>
                                Password
                    </Box>
                            <Field
                                type="password"
                                name="password"
                                component="input"
                                placeholder="Minimum 8 chrs"
                                className={classes.field}
                            />
                            </Grid>
                           

                            <Grid item xs={12} md={6}>
                            <Box className={classes.controlTitle}>
                                Confirm password
                            </Box>
                            <Field
                                type="password"
                                name="re-password"
                                component="input"
                                placeholder="Re-type password"
                                className={classes.field}
                            />
                            </Grid>

                            <Grid item xs={12} sm={12}>
                                <Box className={classes.controlTitle}>
                                    By Creating an account,you are agreeing with our <span class={classes.terms}>Terms & conditions</span>{" "}
                                </Box>
                            </Grid>

                            <Grid item xs={12} sm={6}>
                                <Box className={classes.controlTitle}>
                                    Already have an account <span class={classes.terms}>Sign in</span>{" "}
                                </Box>
                            </Grid>

                            <Grid item xs={12} sm={6}>
                            <Button type="submit" className={classes.button}>CREATE ACCOUNT</Button>
                            </Grid>
                            </Grid>

                    </form>
                    
                </div>
            </div>
        </>

    );
};

export default reduxForm({
    form: "signup",
    // validate: RegistrationFormValidate,
})(SignUp);