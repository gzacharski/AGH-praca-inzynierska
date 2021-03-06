import React from 'react';
import { connect } from "react-redux";
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { addUser } from '../store/model/action/creators';

const useStyles = makeStyles({
    root: {
        fontWeight: 'bold',
        padding: '30px'
    }
})

const Home = (props) => {
    const classes = useStyles();

    const userList = (users) => users.map(user => <h4>{user}</h4>);
    const tempUsers = ["Test user"]

    return (
        <Typography variant='h5' className={classes.root} align='center'>
            Strona główna
            <br />
            <Button variant="contained" color="primary" onClick={() => props.addUser(tempUsers[0])}>
                Test button
            </Button>
            {props.users && userList(props.users)}
        </Typography>
    );
}

const mapStateToProps = (store) => ({ users: store.modelData.users })

const mapDispatchToProps = { addUser }

export default connect(mapStateToProps, mapDispatchToProps)(Home);