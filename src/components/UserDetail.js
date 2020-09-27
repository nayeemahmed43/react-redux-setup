import React, { useEffect, useState } from 'react';
import axios from 'axios'

const UserDetail = () => {

    const [userDetail, setUserDetail] = useState({})
    
        axios.get('https://petstore.swagger.io/v2/user/nayeem32')
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
        </div>
    );
};

export default UserDetail;