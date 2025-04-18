import React, { useContext, useEffect} from 'react'
import { CaptainDataContext } from '../context/CaptainContext'
import {useNavigate} from 'react-router-dom'

const CaptainProtectedWrapper = ({
    childern
}) => {

    const token = localStorage.getItem('token')
    const navigate = useNavigate()
    const { captain, setCaptain } = useContext(CaptainDataContext)
    const [ isLoading, setIsLoading ] = useState(true)





useEffect(() => { 
        if (!token) {
            navigate('/captain-login')
        }
}, [ token ])

    axios.get(`${import.meta.env.VITE_BASE_URL}/captains/profile`, {
        headers: {
            Authorization: `Bearer ${token}`
        }   
    }).then((response) => {
        if (response.status === 200) {
            setCaptain(response.data.captain);
            setIsLoading(false)
        }
    })
    .catch((error) => {
            localStorage.removeItem('token')
            navigate('/captain-login')
        })

    if (isLoading) {
        return (
        <div>Loading...</div>
        )
    }

    return (
        <>
            {childern}
        </>
    )
}

export default CaptainProtectedWrapper