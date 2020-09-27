import React, { useState } from 'react';
import { addUser } from '../actions/userActions';

const UserForm = () => {
    const [user, setUser] = useState({
        id:0,
        username:"",
        firstName:"",
        lastName:"",
        email:"",
        password:"",
        phone:"",
        userStatus:0
    })

    function handleSubmit(e) {
        e.preventDefault()
        console.log(user)
        addUser(user)
    }

    return (
        <div className="form-container">
                <form onSubmit={handleSubmit}>
                <div className="form-group">
                        <label>Id</label>
                        <input  onChange={(e) => setUser({...user, id: e.target.value})} 
                                value={user.id} 
                                type="number" 
                                name="id" 
                                className="form-control" 
                                placeholder="ID" 
                        />
                    </div>

                    <div className="form-group">
                        <label>Username</label>
                        <input  onChange={(e) => setUser({...user, username: e.target.value})} 
                                value={user.username} 
                                type="text" 
                                name="username" 
                                className="form-control" 
                                placeholder="Username" 
                        />
                    </div>
                    <div className="form-group">
                        <label>First Name</label>
                        <input  onChange={(e) => setUser({...user, firstName: e.target.value})} 
                                value={user.firstName} 
                                type="text" 
                                name="firstName" 
                                className="form-control" 
                                placeholder="First Name" 
                        />
                    </div>
                    <div className="form-group">
                        <label>Last Name</label>
                        <input  onChange={(e) => setUser({...user, lastName: e.target.value})} 
                                value={user.lastName} 
                                type="text" 
                                name="lastName" 
                                className="form-control" 
                                placeholder="Last Name" 
                        />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input  onChange={(e) => setUser({...user, email: e.target.value})} 
                                value={user.email} 
                                type="text" 
                                name="email" 
                                className="form-control" 
                                placeholder="Email" 
                        />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input  onChange={(e) => setUser({...user, password: e.target.value})} 
                                value={user.password} 
                                type="password" 
                                name="password" 
                                className="form-control" 
                                placeholder="Password" 
                        />
                    </div>
                    <div className="form-group">
                        <label>Phone</label>
                        <input  onChange={(e) => setUser({...user, phone: e.target.value})} 
                                value={user.phone} 
                                type="text" 
                                name="phone" 
                                className="form-control" 
                                placeholder="Phone" 
                        />
                    </div>
                    <div className="form-group">
                        <label>User Status</label>
                        <input  onChange={(e) => setUser({...user, userStatus: e.target.value})} 
                                value={user.userStatus} 
                                type="number" 
                                name="userStatus" 
                                className="form-control" 
                                placeholder="User Status" 
                        />
                    </div>
                    <div className="form-group">
                        <button className="btn btn-primary" type="submit">Add User</button>
                    </div>
                </form>
            </div>
    );
};

export default UserForm;