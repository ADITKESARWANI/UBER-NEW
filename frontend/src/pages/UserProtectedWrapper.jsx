import React, { useContext, useEffect} from 'react'
import { UserDataContext } from '../context/UserContext'
import {useNavigate} from 'react-router-dom'

const UserProtectedWrapper = ({
    childern
}) => {

    const token = localStorage.getItem('token')
    const navigate = useNavigate()

    useEffect(() => { 
        if (!token) {
            navigate('/login')
        }
    }, [ token ])
    
    return (
        <>
            {childern}
        </>
    )
}

export default UserProtectedWrapper