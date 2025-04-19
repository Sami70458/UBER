import React, { useContext, useEffect, useState } from 'react'
import { UserDataContext } from '../context/UsersContext'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const UserProtectWrapper = ({
    children
}) => {
    const token = localStorage.getItem('token')
    const navigate = useNavigate()
    const { user, setUser } = useContext(UserDataContext)
    const [ isLoading, setIsLoading ] = useState(true)

    useEffect(() => {
        if (!token) {
            navigate('/login')
        }

        axios.get(`${import.meta.env.VITE_BASE_URL}/users/profile`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(response => {
            if (response.status === 200) {
                setUser(response.data)
                setIsLoading(false)
            }
        })
            .catch(err => {
                console.log(err)
                localStorage.removeItem('token')
                navigate('/login')
            })
    }, [ token ])

    if (isLoading) {
        return (
            <div>Loading...</div>
        )
    }

    return (
        <>
            {children}
        </>
    )
}

export default UserProtectWrapper

// import React, { useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';

// const UserProtectWrapper = ({ children }) => {
//     const token = localStorage.getItem('token');
//     const navigate = useNavigate();

//     useEffect(() => {
//         if (!token) {
//             navigate('/login');
//         }
//     }, [token, navigate]); // useEffect ensures navigation happens after the component renders

//     return token ? <>{children}</> : null; // Prevent rendering protected content if not authenticated
// };

// export default UserProtectWrapper;
