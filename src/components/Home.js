import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CustomizedInputs from './Basic/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import BootstrapInput from './Basic/TextField'
import NavBar from './Basic/NavBar'
import DatePickers from './Basic/DateBox';
import TimePickers from './Basic/TimeBox';
import MultilineTextFields from './Basic/DropDownInput';

const useStyles = makeStyles((theme) => ({
    root: {
        minWidth: 275,
        border: '1px solid blue',
        margin: '20% 10% 10% 10%',
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
}));


const Home = () => {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

    return (
        <div>
            <NavBar />
            <Card className={classes.root}>
                <CardContent>
                    <CustomizedInputs />
                    <DatePickers />
                    <TimePickers />
                    <MultilineTextFields />
                </CardContent>
                <CardActions>
                    <Button size="small" style={{backgound:"blue"}}>ACCEPT & ORDER</Button>
                </CardActions>
            </Card>

        </div>
    );
};

export default Home;
