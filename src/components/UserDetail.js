import React, { useEffect, useState } from 'react';
import axios from 'axios'
import Box from '@material-ui/core/Box'
import { Button } from '@material-ui/core';

const UserDetail = () => {

    const [userDetail, setUserDetail] = useState({})
    
        axios.get('https://petstore.swagger.io/v2/user/nayeem30')
        .then(res => setUserDetail(res.data))
        .catch(error => {
            const errorMsg = error.message
            console.log(errorMsg)
        })

    return (
        <div>
            <h1>User Details</h1>
            <h3>Name: {userDetail.firstName} {userDetail.lastName}</h3>
            <h3>Email: {userDetail.email}</h3>
            <h3>Phone: {userDetail.phone}</h3>
            <Button variant="contained">Default</Button>
<Button variant="contained" color="primary">
  Primary
</Button>
<Button variant="contained" color="secondary">
  Secondary
</Button>
<Button variant="contained" disabled>
  Disabled
</Button>
<Button variant="contained" color="primary" href="#contained-buttons">
  Link
</Button>
        </div>
    );
};

export default UserDetail;