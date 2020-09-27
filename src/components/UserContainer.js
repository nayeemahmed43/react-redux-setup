import React, { useEffect } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../actions/userActions'


const UserContainer = () => {

    const userData = useSelector(state => state.user)
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(fetchUsers())
    },[])


    return userData.loading ? (
        <h2>Loading...</h2>
    ) : userData.error ? (
    <h2>{userData.error}</h2>
    ): (
        <div>
            <h2>User List</h2>
            <div>
                {userData && 
                    userData.users && 
                    userData.users.map(user => <p>{user.name}</p> )
                }
            </div>
        </div>
    )
};

// const mapStateToProps = state => {
//     return {
//         userData: state.user
//     }
// }

// const mapDispatchToProps = dispatch => {
//     return {
//         fetchUsers: () => dispatch(fetchUsers())
//     }
// }

// export default connect(
//     mapStateToProps,
//     mapDispatchToProps
// )(UserContainer);

export default UserContainer